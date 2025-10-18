// 🎯 EVENT CONFIGURATION
// Update these values to customize your Tech Fest website

export const EVENT_CONFIG = {
  // Event Details
  name: "Tech Fest 2025",
  tagline: "Institute Level Technical Events",
  organization: "GCOEJ's Technical Council",
  date: "14th November 2025",
  time: "9:00 AM onwards",

  // For Countdown Timer (format: YYYY-MM-DDTHH:MM:SS)
  eventDateTime: "2025-11-14T09:00:00",

  // Contact Information
  contact: {
    email: "techcouncil@gcoej.ac.in",
    phone: "+91 257 225 7333",
    address: "Government College of Engineering, Jalgaon, Maharashtra 425002",
  },

  // Social Media Links
  social: {
    instagram: "#",
    linkedin: "#",
    twitter: "#",
    facebook: "#",
  },

  // Registration Links
  registrationForm: "#register", // Update with actual Google Form or registration link

  // Science Exhibition
  scienceExhibition: {
    expectedParticipants: "500+",
    schoolsInvited: "20+",
  },
};

// 🎨 THEME CONFIGURATION
export const THEME = {
  colors: {
    primary: "#00d4ff",
    secondary: "#a855f7",
    accent: "#ec4899",
    success: "#10b981",
  },
};

// 📧 EMAIL CONFIGURATION
export const EMAIL_CONFIG = {
  // Update these for form submissions
  serviceId: "your_service_id",
  templateId: "your_template_id",
  publicKey: "your_public_key",
};

export default EVENT_CONFIG;
