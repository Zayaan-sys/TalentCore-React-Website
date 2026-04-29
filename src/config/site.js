export const FORM_ENDPOINT = "https://formspree.io/f/mvzdenlb";
export const CAL_BOOKING_URL = "https://cal.com/zayaan-lodewyk-pcaqyn";
export const PSYCHOLOGY_WHATSAPP_NUMBER = "27726044024";
export const TECHNOLOGY_WHATSAPP_NUMBER = "";

export const siteLinks = {
  formEndpoint: FORM_ENDPOINT,
  calBookingUrl: CAL_BOOKING_URL,
  whatsapp: {
    psychology: PSYCHOLOGY_WHATSAPP_NUMBER,
    technology: TECHNOLOGY_WHATSAPP_NUMBER,
  },
};

export const isConfigured = (value) => Boolean(value && value.trim().length > 0);
