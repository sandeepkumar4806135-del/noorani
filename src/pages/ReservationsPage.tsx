/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Users, Phone, MessageCircle, AlertCircle, ShieldCheck } from "lucide-react";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Button } from "../components/ui/Button";
import { SEO } from "../components/ui/SEO";
import { siteConfig, isRestaurantClosedOnDay } from "../data/siteConfig";
import { reservationService, ReservationData, ReservationRecord } from "../services/reservationService";
import { useMotionLevel } from "../config/motion";

export const ReservationsPage: React.FC = () => {
  const motionLevel = useMotionLevel();
  const [formData, setFormData] = useState<ReservationData>({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "4",
    hallPreference: "A/C Family Hall",
    occasion: "Family Dinner",
    specialRequest: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [savedRecord, setSavedRecord] = useState<ReservationRecord | null>(null);

  // Focus tracking for floating labels
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const timeSlots = [
    "08:00 AM (Breakfast / Nihari)",
    "09:30 AM (Breakfast)",
    "11:30 AM (Early Lunch)",
    "01:00 PM (Lunch)",
    "02:30 PM (Late Lunch)",
    "04:30 PM (Evening Snacks)",
    "07:00 PM (Dinner)",
    "08:30 PM (Dinner Peak)",
    "09:30 PM (Dinner)",
    "11:00 PM (Late Dinner)",
    "12:30 AM (Midnight)",
    "02:00 AM (Late Night)",
    "04:00 AM (Early Morning)"
  ];

  const halls = [
    "A/C Family Hall",
    "Main Dining Hall",
    "Dastarkhwan Hall (Floor Seating)"
  ];

  const occasions = [
    "Family Dinner",
    "Birthday Celebration",
    "Anniversary",
    "Weekend Gathering",
    "Casual Dining",
    "Business / Office Meal",
    "Other Occasion"
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Instant Friday validation feedback
    if (name === "date" && value) {
      if (isRestaurantClosedOnDay(value)) {
        setErrors((prev) => ({
          ...prev,
          date: "We are closed on Fridays. Please choose another day."
        }));
        return;
      }
    }

    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const validation = reservationService.validate(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      setIsSubmitting(false);
      return;
    }

    const res = await reservationService.createReservation(formData);
    setIsSubmitting(false);

    if (res.success && res.record) {
      setSavedRecord(res.record);
    } else {
      setErrors({ form: res.error || "Failed to submit reservation." });
    }
  };

  const handleReset = () => {
    setSavedRecord(null);
    setFormData({
      name: "",
      phone: "",
      date: "",
      time: "",
      guests: "4",
      hallPreference: "A/C Family Hall",
      occasion: "Family Dinner",
      specialRequest: ""
    });
    setErrors({});
  };

  const todayStr = new Date().toISOString().split("T")[0];

  return (
    <>
      <SEO
        title="Reserve a Table - Noorani Family Restaurant · Mumbra"
        description="Book your dining table at Noorani Family Restaurant in Mumbra, Thane. Reserve seats in our A/C Family Hall, Dining Hall, or Dastarkhwan. Open 24 hours (Closed Fridays)."
        canonicalPath="/reservations"
      />

      {/* ── Page Header ── */}
      <section className="bg-[#112F1E] dark-mughal-pattern text-[#FAF7F2] py-12 sm:py-16 border-b border-[#235836]">
        <Container size="default">
          <SectionHeading
            kicker="Table Reservations · Mumbra"
            title="Reserve Your Family Table"
            description="Whether it's a family dinner, weekend celebration, or regular meal, we prepare your table in our A/C Hall or Dastarkhwan so your family is seated comfortably."
            theme="dark"
            hasOrnament
          />
        </Container>
      </section>

      {/* ── Main Form Section ── */}
      <section className="py-12 sm:py-20 bg-[#FAF7F2] pb-24 md:pb-24">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Information & Policies (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white border border-[#E8DFC9] rounded-md p-6 shadow-xs">
                <h3 className="font-serif text-xl font-bold text-[#15472A] mb-3">
                  Reservation Information
                </h3>
                <p className="text-xs sm:text-sm text-[#5B6356] leading-relaxed">
                  We welcome walk-ins around the clock, but weekend evenings fill up quickly. Advance reservations ensure priority seating for your family.
                </p>

                <div className="mt-5 space-y-3.5 text-xs text-[#484F43]">
                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-[#D49B28] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-[#15472A]">Operating Schedule</p>
                      <p>Open 24 hours daily</p>
                      <p className="text-[#C52C24] font-semibold mt-0.5">Closed on Fridays</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Users className="w-4 h-4 text-[#15472A] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-[#15472A]">Hall Options</p>
                      <p>• A/C Family Hall (Air-conditioned comfort)</p>
                      <p>• Main Dining Hall (Spacious seating)</p>
                      <p>• Dastarkhwan Hall (Traditional floor seating)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#15472A] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-[#15472A]">Dietary Standards</p>
                      <p>100% Halal certified · Strictly no beef served</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-[#F0EAE0]">
                  <p className="text-xs text-[#71776C] mb-2 font-medium">Need immediate table confirmation?</p>
                  <a
                    href={siteConfig.phoneLink}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#C52C24] hover:text-[#9A1E17] transition-colors min-h-[44px]"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Counter: {siteConfig.phone}</span>
                  </a>
                </div>
              </div>

              {/* Free Home Delivery Call Box */}
              <div className="bg-[#FAF4E6] border border-[#E2D6BA] rounded-md p-5 text-xs text-[#4D5548]">
                <h4 className="font-serif font-bold text-sm text-[#15472A] mb-1">
                  Looking for Home Delivery Instead?
                </h4>
                <p className="mb-3">
                  We provide free home delivery across Mumbra & Kausa. Call any of our four lines:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-bold text-[#15472A]">
                  {siteConfig.deliveryPhones.map((del) => (
                    <a
                      key={del.id}
                      href={del.link}
                      className="bg-white border border-[#DACDB3] px-3 py-2.5 rounded text-center hover:border-[#15472A] text-xs min-h-[44px] flex items-center justify-center tabular-nums shadow-2xs"
                    >
                      {del.number}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Form or Success State (7 cols) */}
            <div className="lg:col-span-7">
              {savedRecord ? (
                /* ── Success State with Drawn Check Mark & Summary Card ── */
                <motion.div
                  initial={motionLevel === "off" ? undefined : { opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-white border-2 border-[#15472A] rounded-md p-6 sm:p-8 shadow-md"
                >
                  {/* Drawn Check Mark Animation */}
                  <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <svg viewBox="0 0 52 52" className="w-14 h-14 text-[#15472A]">
                      <motion.circle
                        cx="26"
                        cy="26"
                        r="24"
                        fill="none"
                        stroke="#15472A"
                        strokeWidth="2.5"
                        initial={motionLevel === "off" ? undefined : { pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.45 }}
                      />
                      <motion.path
                        fill="none"
                        stroke="#15472A"
                        strokeWidth="3.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14 27l8 8 16-16"
                        initial={motionLevel === "off" ? undefined : { pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 0.3, duration: 0.35 }}
                      />
                    </svg>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-center text-[#15472A]">
                    Reservation Details Recorded
                  </h3>
                  <p className="text-sm text-center text-[#555C50] mt-1.5 max-w-md mx-auto">
                    Thank you, <strong>{savedRecord.name}</strong>. Your table booking request has been saved with Reference ID:
                  </p>

                  <div className="my-4 py-2.5 px-4 bg-[#F5EFE4] border border-[#E2D8C3] rounded text-center font-mono font-bold text-[#15472A] text-base">
                    {savedRecord.id}
                  </div>

                  {/* Summary Card */}
                  <div className="bg-[#FAF7F2] border border-[#EAE3D2] rounded p-5 text-xs space-y-2 text-[#4A5144] max-w-md mx-auto mb-6">
                    <div className="flex justify-between border-b border-[#EAE3D2] pb-1.5">
                      <span className="text-[#7E8578]">Date:</span>
                      <strong className="text-[#141715]">{savedRecord.date}</strong>
                    </div>
                    <div className="flex justify-between border-b border-[#EAE3D2] pb-1.5">
                      <span className="text-[#7E8578]">Time Slot:</span>
                      <strong className="text-[#141715]">{savedRecord.time}</strong>
                    </div>
                    <div className="flex justify-between border-b border-[#EAE3D2] pb-1.5">
                      <span className="text-[#7E8578]">Party Size:</span>
                      <strong className="text-[#141715]">{savedRecord.guests} Guests</strong>
                    </div>
                    <div className="flex justify-between border-b border-[#EAE3D2] pb-1.5">
                      <span className="text-[#7E8578]">Dining Hall:</span>
                      <strong className="text-[#15472A]">{savedRecord.hallPreference}</strong>
                    </div>
                    <div className="flex justify-between border-b border-[#EAE3D2] pb-1.5">
                      <span className="text-[#7E8578]">Contact Phone:</span>
                      <strong className="text-[#141715]">{savedRecord.phone}</strong>
                    </div>
                    {savedRecord.specialRequest && (
                      <div className="pt-1 text-[#555C50]">
                        <span className="font-semibold text-[#15472A]">Special Request: </span>
                        {savedRecord.specialRequest}
                      </div>
                    )}
                  </div>

                  {/* WhatsApp confirmation button (Pulses once!) */}
                  <div className="space-y-3 max-w-md mx-auto">
                    <motion.a
                      animate={motionLevel === "off" ? undefined : { scale: [1, 1.035, 1] }}
                      transition={{ delay: 0.5, duration: 0.45, ease: "easeInOut" }}
                      href={reservationService.getWhatsAppConfirmationUrl(savedRecord, savedRecord.id)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full min-h-[48px] inline-flex items-center justify-center gap-2 text-sm font-bold text-white bg-[#25D366] hover:bg-[#1EBE5D] px-5 py-3 rounded-md transition-colors shadow-xs"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Send to Restaurant on WhatsApp</span>
                    </motion.a>

                    <Button
                      onClick={handleReset}
                      variant="outline"
                      size="md"
                      className="w-full"
                    >
                      Make Another Booking
                    </Button>
                  </div>
                </motion.div>
              ) : (
                /* ── Booking Form with Floating Labels & Soft Error Animation ── */
                <form
                  onSubmit={handleSubmit}
                  className="bg-white border border-[#E8DFC9] rounded-md p-6 sm:p-8 shadow-xs space-y-5"
                >
                  <div className="border-b border-[#EAE3D2] pb-3 mb-2">
                    <h3 className="font-serif text-xl font-bold text-[#15472A]">
                      Table Booking Form
                    </h3>
                    <p className="text-xs text-[#71776C] mt-0.5">
                      Instant verification · No deposit required for standard tables
                    </p>
                  </div>

                  {/* Form Error Banner */}
                  <AnimatePresence>
                    {errors.form && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.25 }}
                        className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-sm flex items-center gap-2"
                      >
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{errors.form}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Name & Phone with Floating Labels */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        id="field-name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        placeholder=" "
                        required
                        className={`peer w-full bg-white border ${
                          errors.name ? "border-red-500" : "border-[#DCD3C0] focus:border-[#15472A]"
                        } rounded-md px-3.5 pt-5 pb-2 text-base sm:text-sm text-[#1F241C] focus:outline-none focus:ring-1 focus:ring-[#15472A] min-h-[52px]`}
                      />
                      <label
                        htmlFor="field-name"
                        className={`absolute left-3.5 top-2 text-[11px] font-semibold uppercase tracking-wider text-[#7E8578] pointer-events-none transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:text-[11px] peer-focus:font-semibold peer-focus:text-[#15472A] ${
                          focusedField === "name" || formData.name ? "top-2 text-[11px]" : ""
                        }`}
                      >
                        Full Name *
                      </label>
                      <AnimatePresence>
                        {errors.name && (
                          <motion.p
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="text-xs text-red-600 mt-1"
                          >
                            {errors.name}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Contact Number */}
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        id="field-phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("phone")}
                        onBlur={() => setFocusedField(null)}
                        placeholder=" "
                        required
                        className={`peer w-full bg-white border ${
                          errors.phone ? "border-red-500" : "border-[#DCD3C0] focus:border-[#15472A]"
                        } rounded-md px-3.5 pt-5 pb-2 text-base sm:text-sm text-[#1F241C] focus:outline-none focus:ring-1 focus:ring-[#15472A] min-h-[52px]`}
                      />
                      <label
                        htmlFor="field-phone"
                        className={`absolute left-3.5 top-2 text-[11px] font-semibold uppercase tracking-wider text-[#7E8578] pointer-events-none transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:text-[11px] peer-focus:font-semibold peer-focus:text-[#15472A] ${
                          focusedField === "phone" || formData.phone ? "top-2 text-[11px]" : ""
                        }`}
                      >
                        Contact Phone *
                      </label>
                      <AnimatePresence>
                        {errors.phone && (
                          <motion.p
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="text-xs text-red-600 mt-1"
                          >
                            {errors.phone}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Date & Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#2D332B] uppercase tracking-wider mb-1.5">
                        Date of Visit <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        min={todayStr}
                        required
                        className="w-full bg-white border border-[#DCD3C0] rounded-md px-3 py-2.5 text-base sm:text-sm text-[#1F241C] focus:outline-none focus:border-[#15472A] focus:ring-1 focus:ring-[#15472A] min-h-[44px]"
                      />
                      
                      {/* Calm "closed on Fridays" notice */}
                      <AnimatePresence>
                        {formData.date && isRestaurantClosedOnDay(formData.date) && (
                          <motion.div
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            transition={{ duration: 0.25 }}
                            className="p-2.5 mt-2 bg-[#FFF4F2] border border-[#F5C2BC] rounded-xs text-xs text-[#912018] flex items-start gap-2"
                          >
                            <AlertCircle className="w-4 h-4 text-[#C52C24] shrink-0 mt-0.5" />
                            <div>
                              <p className="font-medium text-xs text-[#912018]">
                                We are closed on Fridays. Please choose another day.
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <AnimatePresence>
                        {errors.date && !isRestaurantClosedOnDay(formData.date) && (
                          <motion.p
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="text-xs text-red-600 mt-1"
                          >
                            {errors.date}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#2D332B] uppercase tracking-wider mb-1.5">
                        Preferred Time <span className="text-red-600">*</span>
                      </label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full bg-white border border-[#DCD3C0] rounded-md px-3 py-2.5 text-base sm:text-sm text-[#1F241C] focus:outline-none focus:border-[#15472A] focus:ring-1 focus:ring-[#15472A] min-h-[44px]"
                        required
                      >
                        <option value="">Select Dining Time</option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                      <AnimatePresence>
                        {errors.time && (
                          <motion.p
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="text-xs text-red-600 mt-1"
                          >
                            {errors.time}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Hall & Guests */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#2D332B] uppercase tracking-wider mb-1.5">
                        Hall Preference
                      </label>
                      <select
                        name="hallPreference"
                        value={formData.hallPreference}
                        onChange={handleChange}
                        className="w-full bg-white border border-[#DCD3C0] rounded-md px-3 py-2.5 text-base sm:text-sm text-[#1F241C] focus:outline-none focus:border-[#15472A] focus:ring-1 focus:ring-[#15472A] min-h-[44px]"
                      >
                        {halls.map((hall) => (
                          <option key={hall} value={hall}>
                            {hall}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#2D332B] uppercase tracking-wider mb-1.5">
                        Number of Guests <span className="text-red-600">*</span>
                      </label>
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full bg-white border border-[#DCD3C0] rounded-md px-3 py-2.5 text-base sm:text-sm text-[#1F241C] focus:outline-none focus:border-[#15472A] focus:ring-1 focus:ring-[#15472A] min-h-[44px]"
                        required
                      >
                        {[2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20, 25, 30].map((num) => (
                          <option key={num} value={num}>
                            {num} Guests
                          </option>
                        ))}
                      </select>
                      <AnimatePresence>
                        {errors.guests && (
                          <motion.p
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="text-xs text-red-600 mt-1"
                          >
                            {errors.guests}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Occasion */}
                  <div>
                    <label className="block text-xs font-semibold text-[#2D332B] uppercase tracking-wider mb-1.5">
                      Occasion
                    </label>
                    <select
                      name="occasion"
                      value={formData.occasion}
                      onChange={handleChange}
                      className="w-full bg-white border border-[#DCD3C0] rounded-md px-3 py-2.5 text-base sm:text-sm text-[#1F241C] focus:outline-none focus:border-[#15472A] focus:ring-1 focus:ring-[#15472A] min-h-[44px]"
                    >
                      {occasions.map((occ) => (
                        <option key={occ} value={occ}>
                          {occ}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label className="block text-xs font-semibold text-[#2D332B] uppercase tracking-wider mb-1.5">
                      Special Requests (Optional)
                    </label>
                    <textarea
                      name="specialRequest"
                      value={formData.specialRequest}
                      onChange={handleChange}
                      rows={2}
                      placeholder="e.g. High chair for baby, low spice preference, corner table..."
                      className="w-full bg-white border border-[#DCD3C0] rounded-md p-3 text-base sm:text-sm text-[#1F241C] placeholder:text-[#8A9184] focus:outline-none focus:border-[#15472A] focus:ring-1 focus:ring-[#15472A]"
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      fullWidth
                      disabled={isSubmitting}
                      className="min-h-[48px]"
                    >
                      {isSubmitting ? "Saving..." : "Confirm Table Booking"}
                    </Button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </Container>
      </section>
    </>
  );
};

export default ReservationsPage;
