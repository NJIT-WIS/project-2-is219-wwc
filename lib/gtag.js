export const GA_TRACKING_ID = "G-Q3QE4XE0VD";

export const pageview = (url) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

export const event = (action, params) => {
  window.gtag("event", action, params);
};
