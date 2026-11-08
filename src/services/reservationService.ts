/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * ═════════════════════════════════════════════════════════════════════
 * RESERVATION SERVICE (Front-end only service layer)
 * ═════════════════════════════════════════════════════════════════════
 */

import { siteConfig, isRestaurantClosedOnDay } from "../data/siteConfig";

export interface ReservationData {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number | string;
  hallPreference?: string;
  occasion?: string;
  specialRequest?: string;
}

export interface ReservationRecord extends ReservationData {
  id: string;
  createdAt: string;
  status: "confirmed_locally" | "pending";
}

const STORAGE_KEY = "noorani_reservations_v1";

export const reservationService = {
  /**
   * Validate reservation fields before submission
   */
  validate(data: ReservationData): { isValid: boolean; errors: Record<string, string> } {
    const errors: Record<string, string> = {};

    if (!data.name || data.name.trim().length < 2) {
      errors.name = "Please enter your full name (minimum 2 characters).";
    }

    // Phone validation for Indian mobile numbers
    const phoneClean = data.phone.replace(/[\s-]/g, "");
    const phoneRegex = /^(\+91)?[6-9]\d{9}$/;
    if (!phoneClean || !phoneRegex.test(phoneClean)) {
      errors.phone = "Please enter a valid 10-digit mobile number.";
    }

    if (!data.date) {
      errors.date = "Please select a date for your visit.";
    } else {
      const selectedDate = new Date(data.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        errors.date = "Please choose a present or future date.";
      } else if (isRestaurantClosedOnDay(selectedDate)) {
        errors.date = "We are closed on Fridays. Please choose another day.";
      }
    }

    if (!data.time) {
      errors.time = "Please select a preferred dining time.";
    }

    const numGuests = Number(data.guests);
    if (!numGuests || isNaN(numGuests) || numGuests < 1 || numGuests > 40) {
      errors.guests = "Please enter number of guests (1 to 40). For larger groups, please call us directly.";
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  },

  /**
   * Save reservation record locally and return the saved record
   */
  async createReservation(data: ReservationData): Promise<{ success: boolean; record?: ReservationRecord; error?: string }> {
    try {
      const validation = this.validate(data);
      if (!validation.isValid) {
        return { success: false, error: "Validation failed. Please correct the highlighted fields." };
      }

      const id = "RES-" + Date.now().toString(36).toUpperCase();
      const record: ReservationRecord = {
        ...data,
        id,
        createdAt: new Date().toISOString(),
        status: "confirmed_locally"
      };

      // Persist in localStorage
      const existingRaw = localStorage.getItem(STORAGE_KEY);
      const existingList: ReservationRecord[] = existingRaw ? JSON.parse(existingRaw) : [];
      existingList.unshift(record);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(existingList.slice(0, 50)));

      return { success: true, record };
    } catch (err) {
      console.error("Failed to save reservation:", err);
      return { success: false, error: "Something went wrong saving your reservation. Please call us directly." };
    }
  },

  /**
   * Generate a pre-filled WhatsApp link with all reservation details
   */
  getWhatsAppConfirmationUrl(data: ReservationData, reservationId?: string): string {
    const rawNumber = siteConfig.whatsappNumber.replace(/[\s-+]/g, "");
    const cleanNumber = rawNumber.startsWith("91") ? rawNumber : `91${rawNumber}`;

    const lines = [
      `*Table Reservation Request - Noorani Family Restaurant*`,
      reservationId ? `*Reference ID:* ${reservationId}` : null,
      `*Name:* ${data.name}`,
      `*Phone:* ${data.phone}`,
      `*Date:* ${data.date}`,
      `*Time:* ${data.time}`,
      `*Guests:* ${data.guests} person(s)`,
      data.hallPreference ? `*Hall Preference:* ${data.hallPreference}` : null,
      data.occasion ? `*Occasion:* ${data.occasion}` : null,
      data.specialRequest ? `*Special Request:* ${data.specialRequest}` : null,
      ``,
      `_Location: Tanwar Nagar, Kausa, Mumbra_`,
      `_Please confirm availability for our table._`
    ].filter(Boolean);

    const message = lines.join("\n");
    return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
  },

  /**
   * Retrieve stored reservations from local storage
   */
  getStoredReservations(): ReservationRecord[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }
};

export default reservationService;
