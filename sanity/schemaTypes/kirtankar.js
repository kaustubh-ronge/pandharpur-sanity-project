const kirtankar = {
  name: "kirtankar",
  title: "Kirtankars",
  type: "document",
  icon: () => '🎤',
  fields: [
    {
      name: "name",
      title: "Kirtankar Name",
      type: "string",
      validation: (Rule) => Rule.required().min(3).max(100),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "subscriptionPlan",
      title: "Subscription Plan 🌟",
      type: "string",
      options: {
        list: [
          { title: "Premium", value: "premium" },
          { title: "Standard", value: "standard" },
          { title: "Basic", value: "basic" },
          { title: "None / Free", value: "none" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
      initialValue: "none",
      description:
        "Select the subscription tier. Premium listings will appear first.",
    },
    {
      name: "isFeatured",
      title: "Featured Kirtankar",
      type: "boolean",
      description: "Enable to feature this Kirtankar on the main page.",
      initialValue: false,
    },
    {
      name: "image",
      title: "Main Profile Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Short Bio (for list view)",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required().min(10).max(300),
    },
    {
      name: "detailedDescription",
      title: "Detailed Bio / Information (for single page view)",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "hometown",
      title: "Hometown",
      type: "string",
      description: "e.g., Pandharpur, Maharashtra",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "whatsappNumber",
      title: "WhatsApp Inquiry Number",
      type: "string",
      description: "Enter a single WhatsApp number (e.g., 919876543210). This will be used for the 'Inquire' button.",
      validation: (Rule) => Rule.regex(/^91[0-9]{10}$/, {
        name: "phone-number",
        invert: false,
      }).error("Number must be 12 digits and start with 91."),
    },
    {
      name: "contactNumbers",
      title: "Other Contact Numbers",
      description: "Add multiple contact numbers for general inquiries.",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "googleMapsEmbedUrl",
      title: "Google Maps Embed URL (Ashram/Office)",
      type: "url",
      description:
        "Optional: Add a map link for their main location.",
    },
    {
      name: "specialization",
      title: "Specialization (e.g., Varkari, Naradiya)",
      type: "string",
    },
    {
      name: "bookingFeeIndicator",
      title: "Booking Fee Indicator (e.g., ₹5000 - ₹15000)",
      type: "string",
    },
    {
      name: "gallery",
      title: "Image Gallery (Past Events)",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    },
  ],
};

export default kirtankar;