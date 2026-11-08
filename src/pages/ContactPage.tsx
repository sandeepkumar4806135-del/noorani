/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { FormField } from "../components/ui/FormField";
import { Button } from "../components/ui/Button";
import { SEO } from "../components/ui/SEO";
import { siteConfig } from "../data/siteConfig";
import { contactService, ContactData, ContactRecord } from "../services/contactService";
import { useMotionLevel, fadeUpVariant, staggerContainerVariant } from "../config/motion";

export const ContactPage: React.FC = () => {
  const motionLevel = useMotionLevel();
  const [formData, setFormData] = useState<ContactData>({
    name: "",
    phone: "",
    email: "",
    subject: "Table Inquiry",
    message: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRecord, setSubmittedRecord] = useState<ContactRecord | null>(null);

  const subjects = [
    "Table Inquiry",
    "Free Home Delivery Question",
    "Party or Bulk Food Order",
    "Private Hall Booking (Family Hall / Dastarkhwan)",
    "Feedback / Compliments",
    "Other Question"
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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

    const validation = contactService.validate(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      setIsSubmitting(false);
      return;
    }

    const res = await contactService.sendMessage(formData);
    setIsSubmitting(false);

    if (res.success && res.record) {
      setSubmittedRecord(res.record);
    } else {
      setErrors({ form: res.error || "Failed to submit message." });
    }
  };

  const handleReset = () => {
    setSubmittedRecord(null);
    setFormData({
      name: "",
      phone: "",
      email: "",
      subject: "Table Inquiry",
      message: ""
    });
    setErrors({});
  };

  return (
    <>
      <SEO
        title="Contact Us & Location - Noorani Family Restaurant · Mumbra"
        description="Get in touch with Noorani Family Restaurant in Tanwar Nagar, Kausa, Mumbra. Direct phone, WhatsApp, and 4 free home delivery lines."
        canonicalPath="/contact"
      />

      {/* ── Page Header ── */}
      <section className="bg-[#112F1E] dark-mughal-pattern text-[#FAF7F2] py-12 sm:py-16 border-b border-[#235836]">
        <Container size="default">
          <SectionHeading
            kicker="Tanwar Nagar, Kausa, Mumbra"
            title="Contact Noorani Family Restaurant"
            description="Whether you have an inquiry about table availability in our A/C Family Hall, home delivery, or party degh orders, our counter team is ready to assist you."
            theme="dark"
            hasOrnament
          />
        </Container>
      </section>

      {/* ── 4 Quick Contact Cards with Gentle Hover ── */}
      <section className="py-12 sm:py-20 bg-[#FAF7F2] pb-24 md:pb-24">
        <Container size="wide">
          <motion.div
            variants={motionLevel === "off" ? undefined : staggerContainerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12"
          >
            {/* Phone */}
            <motion.div
              variants={motionLevel === "off" ? undefined : fadeUpVariant}
              whileHover={motionLevel === "off" ? undefined : { y: -6 }}
              className="bg-white border border-[#E8DFC9] hover:border-[#D49B28] rounded-md p-5 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300"
            >
              <div>
                <div className="w-11 h-11 rounded-full bg-[#15472A]/10 text-[#15472A] flex items-center justify-center mb-3">
                  <Phone className="w-5 h-5 text-[#C52C24]" />
                </div>
                <h3 className="font-serif text-base font-bold text-[#15472A]">Direct Telephone</h3>
                <p className="text-xs text-[#6B7266] mt-1">Main table & counter line</p>
                <p className="text-sm font-semibold text-[#141715] mt-2 font-mono">{siteConfig.phone}</p>
              </div>
              <a
                href={siteConfig.phoneLink}
                className="mt-4 text-xs font-bold text-[#C52C24] hover:underline min-h-[44px] flex items-center"
              >
                Call Now →
              </a>
            </motion.div>

            {/* WhatsApp */}
            <motion.div
              variants={motionLevel === "off" ? undefined : fadeUpVariant}
              whileHover={motionLevel === "off" ? undefined : { y: -6 }}
              className="bg-white border border-[#E8DFC9] hover:border-[#D49B28] rounded-md p-5 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300"
            >
              <div>
                <div className="w-11 h-11 rounded-full bg-[#25D366]/15 text-[#25D366] flex items-center justify-center mb-3">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <h3 className="font-serif text-base font-bold text-[#15472A]">WhatsApp Chat</h3>
                <p className="text-xs text-[#6B7266] mt-1">Fast answers & menu queries</p>
                <p className="text-sm font-semibold text-[#141715] mt-2 font-mono">+91 {siteConfig.whatsappNumber}</p>
              </div>
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-xs font-bold text-[#25D366] hover:underline min-h-[44px] flex items-center"
              >
                Chat on WhatsApp →
              </a>
            </motion.div>

            {/* Email */}
            <motion.div
              variants={motionLevel === "off" ? undefined : fadeUpVariant}
              whileHover={motionLevel === "off" ? undefined : { y: -6 }}
              className="bg-white border border-[#E8DFC9] hover:border-[#D49B28] rounded-md p-5 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300"
            >
              <div>
                <div className="w-11 h-11 rounded-full bg-[#D49B28]/15 text-[#D49B28] flex items-center justify-center mb-3">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-base font-bold text-[#15472A]">Email Address</h3>
                <p className="text-xs text-[#6B7266] mt-1">Catering & party inquiries</p>
                <p className="text-xs font-semibold text-[#141715] mt-2 break-all">{siteConfig.email}</p>
              </div>
              <a
                href={siteConfig.emailLink}
                className="mt-4 text-xs font-bold text-[#15472A] hover:underline min-h-[44px] flex items-center"
              >
                Write to Us →
              </a>
            </motion.div>

            {/* Hours */}
            <motion.div
              variants={motionLevel === "off" ? undefined : fadeUpVariant}
              whileHover={motionLevel === "off" ? undefined : { y: -6 }}
              className="bg-white border border-[#E8DFC9] hover:border-[#D49B28] rounded-md p-5 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300"
            >
              <div>
                <div className="w-11 h-11 rounded-full bg-[#15472A]/10 text-[#15472A] flex items-center justify-center mb-3">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-base font-bold text-[#15472A]">Operating Hours</h3>
                <p className="text-xs text-[#6B7266] mt-1">Open 24 hours daily</p>
                <p className="text-xs font-bold text-[#C52C24] mt-2">Closed on Fridays</p>
              </div>
              <span className="mt-4 text-xs text-[#7A8275] min-h-[44px] flex items-center">
                Mumbra & Kausa
              </span>
            </motion.div>
          </motion.div>

          {/* Free Home Delivery Direct Order Banner */}
          <div className="mb-12 bg-[#FAF4E6] border border-[#E2D6BB] rounded-md p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#B37E1C]">
                  Free Home Delivery in Mumbra & Kausa
                </span>
                <h3 className="font-serif text-xl font-bold text-[#15472A] mt-0.5">
                  Four Direct Delivery Lines
                </h3>
                <p className="text-xs text-[#5D6558] mt-1">
                  Fresh, steaming parcels dispatched directly from our kitchen:
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                {siteConfig.deliveryPhones.map((del) => (
                  <a
                    key={del.id}
                    href={del.link}
                    className="inline-flex items-center gap-1.5 bg-white border border-[#DACDB3] hover:border-[#15472A] px-3.5 py-2 rounded text-xs font-bold text-[#15472A] hover:text-[#C52C24] transition-colors shadow-2xs min-h-[44px]"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C52C24]" />
                    <span>{del.number}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Split: Contact Form + Location Map Revealing as it Scrolls In */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Form Column (6 cols) */}
            <div className="lg:col-span-6">
              {submittedRecord ? (
                <div className="bg-white border-2 border-[#15472A] rounded-md p-6 sm:p-8 shadow-md text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#15472A]">
                    Message Sent Successfully
                  </h3>
                  <p className="text-sm text-[#5B6356] mt-2 max-w-md mx-auto">
                    Thank you, <strong>{submittedRecord.name}</strong>. Your inquiry regarding "{submittedRecord.subject}" has been received. Our team will get back to you shortly.
                  </p>
                  <div className="mt-6">
                    <Button onClick={handleReset} variant="outline" size="sm">
                      Send Another Message
                    </Button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white border border-[#E8DFC9] rounded-md p-6 sm:p-8 shadow-xs space-y-4"
                >
                  <div className="border-b border-[#EAE3D2] pb-3 mb-2">
                    <h3 className="font-serif text-xl font-bold text-[#15472A]">
                      Send Us a Message
                    </h3>
                    <p className="text-xs text-[#71776C] mt-0.5">
                      For large party platters, hall bookings, or general inquiries
                    </p>
                  </div>

                  {errors.form && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-sm flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errors.form}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Asif Qureshi"
                      required
                      error={errors.name}
                    />

                    <FormField
                      label="Contact Number"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 99679 46436"
                      required
                      error={errors.phone}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      label="Email Address (Optional)"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. name@example.com"
                    />

                    <div>
                      <label className="block text-xs font-semibold text-[#2D332B] uppercase tracking-wider mb-1.5">
                        Subject
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-white border border-[#DCD3C0] rounded-md px-3 py-2.5 text-base sm:text-sm text-[#1F241C] focus:outline-none focus:border-[#15472A] focus:ring-1 focus:ring-[#15472A] min-h-[44px]"
                      >
                        {subjects.map((sub) => (
                          <option key={sub} value={sub}>
                            {sub}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <FormField
                    label="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what you need (e.g. party order, booking questions)..."
                    multiline
                    rows={4}
                    required
                    error={errors.message}
                  />

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      fullWidth
                      disabled={isSubmitting}
                      className="min-h-[48px]"
                      icon={<Send className="w-4 h-4" />}
                    >
                      {isSubmitting ? "Sending..." : "Submit Message"}
                    </Button>
                  </div>
                </form>
              )}
            </div>

            {/* Map & Address Block with Scroll-In Reveal (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-white border border-[#E8DFC9] rounded-md p-6 shadow-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C52C24] shrink-0 mt-1" />
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#15472A]">
                      Restaurant Address
                    </h3>
                    <p className="text-sm text-[#3E453A] mt-1 leading-relaxed">
                      {siteConfig.address}
                    </p>
                    <p className="text-xs text-[#B37E1C] font-semibold mt-1">
                      {siteConfig.landmark}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-[#F0EAE0] flex items-center justify-between">
                  <span className="text-xs text-[#7A8275]">Location: {siteConfig.locationCity}</span>
                  <a
                    href={siteConfig.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#15472A] hover:text-[#C52C24] underline min-h-[44px] flex items-center"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>

              {/* Map embed with view reveal */}
              <motion.div
                initial={motionLevel === "off" ? undefined : { opacity: 0, y: 16 }}
                whileInView={motionLevel === "off" ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-md overflow-hidden border-2 border-[#D49B28] bg-white shadow-md aspect-[16/10]"
              >
                <iframe
                  title="Noorani Family Restaurant Location Map Mumbra"
                  src={siteConfig.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </motion.div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ContactPage;
