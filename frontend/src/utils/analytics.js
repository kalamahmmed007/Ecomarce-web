export const trackPageView = (url) => {
    if (window.gtag) window.gtag("config", process.env.REACT_APP_GA_ID, { page_path: url });
};

export const trackEvent = ({ category, action, label, value }) => {
    if (window.gtag) {
        window.gtag("event", action, {
            event_category: category,
            event_label: label,
            value,
        });
    }
};
