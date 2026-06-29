// Google Analytics 4 Event Tracking Utilities

declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
  }
}

// Track custom events
export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

// Track page views (for manual tracking if needed)
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: url,
    });
  }
};

// Contact Form Events
export const trackFormSubmission = (formType: string, serviceType?: string) => {
  trackEvent('form_submission', {
    form_type: formType,
    service_type: serviceType,
  });
};

export const trackFormStart = (formType: string) => {
  trackEvent('form_start', {
    form_type: formType,
  });
};

// Button Click Events
export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent('button_click', {
    button_name: buttonName,
    location: location,
  });
};

export const trackCTAClick = (ctaName: string, destination: string) => {
  trackEvent('cta_click', {
    cta_name: ctaName,
    destination: destination,
  });
};

// Service Events
export const trackServiceView = (serviceName: string) => {
  trackEvent('service_view', {
    service_name: serviceName,
  });
};

export const trackServiceInterest = (serviceName: string, action: string) => {
  trackEvent('service_interest', {
    service_name: serviceName,
    action: action,
  });
};

// Consultant Events
export const trackConsultantView = (consultantName: string, consultantId: string) => {
  trackEvent('consultant_view', {
    consultant_name: consultantName,
    consultant_id: consultantId,
  });
};

export const trackConsultantContact = (consultantName: string, contactMethod: string) => {
  trackEvent('consultant_contact', {
    consultant_name: consultantName,
    contact_method: contactMethod,
  });
};

// Contact Events
export const trackPhoneClick = (phoneNumber: string, location: string) => {
  trackEvent('phone_click', {
    phone_number: phoneNumber,
    location: location,
  });
};

export const trackEmailClick = (emailAddress: string, location: string) => {
  trackEvent('email_click', {
    email_address: emailAddress,
    location: location,
  });
};

// Navigation Events
export const trackNavigation = (linkName: string, destination: string) => {
  trackEvent('navigation_click', {
    link_name: linkName,
    destination: destination,
  });
};

// Conversion Events
export const trackConversion = (conversionType: string, value?: number) => {
  trackEvent('conversion', {
    conversion_type: conversionType,
    value: value,
  });
};

// Engagement Events
export const trackEngagement = (engagementType: string, details?: Record<string, any>) => {
  trackEvent('engagement', {
    engagement_type: engagementType,
    ...details,
  });
};
