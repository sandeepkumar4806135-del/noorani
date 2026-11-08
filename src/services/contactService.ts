/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * ═════════════════════════════════════════════════════════════════════
 * CONTACT SERVICE (Front-end only service layer)
 * ═════════════════════════════════════════════════════════════════════
 * 
 * Manages contact inquiry submissions and WhatsApp inquiry links.
 */

import { siteConfig } from "../data/siteConfig";

export interface ContactData {
  name: string;
  phone: string;
  email?: string;
  subject: string;
  message: string;
}

export interface ContactRecord extends ContactData {
  id: string;
  createdAt: string;
}

const STORAGE_KEY = "noorani_contact_messages_v1";

export const contactService = {
  validate(data: ContactData): { isValid: boolean; errors: Record<string, string> } {
    const errors: Record<string, string> = {};

    if (!data.name || data.name.trim().length < 2) {
      errors.name = "Please enter your name.";
    }

    const phoneClean = data.phone.replace(/[\s-]/g, "");
    const phoneRegex = /^(\+91)?[6-9]\d{9}$/;
    if (!phoneClean || !phoneRegex.test(phoneClean)) {
      errors.phone = "Please enter a valid 10-digit mobile number.";
    }

    if (data.email && data.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        errors.email = "Please enter a valid email address.";
      }
    }

    if (!data.message || data.message.trim().length < 5) {
      errors.message = "Please write a brief message or question (at least 5 characters).";
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  },

  async sendMessage(data: ContactData): Promise<{ success: boolean; record?: ContactRecord; error?: string }> {
    try {
      const validation = this.validate(data);
      if (!validation.isValid) {
        return { success: false, error: "Validation failed. Please correct the highlighted fields." };
      }

      const id = "MSG-" + Date.now().toString(36).toUpperCase();
      const record: ContactRecord = {
        ...data,
        id,
        createdAt: new Date().toISOString()
      };

      const existingRaw = localStorage.getItem(STORAGE_KEY);
      const existingList: ContactRecord[] = existingRaw ? JSON.parse(existingRaw) : [];
      existingList.unshift(record);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(existingList.slice(0, 50)));

      return { success: true, record };
    } catch (err) {
      console.error("Failed to save contact message:", err);
      return { success: false, error: "Unable to submit your message. Please reach us directly by phone or WhatsApp." };
    }
  },

  getWhatsAppDirectUrl(data: ContactData): string {
    const rawNumber = siteConfig.whatsappNumber.replace(/[\s-+]/g, "");
    const cleanNumber = rawNumber.startsWith("91") ? rawNumber : `91${rawNumber}`;

    const lines = [
      `*Inquiry from Noorani Website*`,
      `*Name:* ${data.name}`,
      `*Phone:* ${data.phone}`,
      data.email ? `*Email:* ${data.email}` : null,
      data.subject ? `*Subject:* ${data.subject}` : null,
      `*Message:* ${data.message}`
    ].filter(Boolean);

    const message = lines.join("\n");
    return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
  }
};

export default contactService;
