// lib/gtag.js

// Dummy Google Analytics setup
// Replace with real GA ID when ready

export const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Dummy Tracking ID

// Log pageviews (currently dummy)
export const pageview = (url) => {
  console.log(`[Dummy] Tracking page view for: ${url}`);
};

// Log custom events (currently dummy)
export const event = ({ action, category, label, value }) => {
  console.log(`[Dummy] Tracking event:`, {
    action,
    category,
    label,
    value,
  });
};