export type AnalyticsConsent = 'granted' | 'denied' | null;

export const ANALYTICS_CONSENT_STORAGE_KEY = 'analytics-consent';
export const ANALYTICS_CONSENT_EVENT = 'analytics-consent-updated';

export const getAnalyticsConsent = (): AnalyticsConsent => {
  if (typeof window === 'undefined') {
    return null;
  }

  const navigatorWithPrivacySignals = navigator as Navigator & {
    doNotTrack?: string;
    globalPrivacyControl?: boolean;
  };

  if (navigatorWithPrivacySignals.globalPrivacyControl || navigatorWithPrivacySignals.doNotTrack === '1') {
    return 'denied';
  }

  const value = window.localStorage.getItem(ANALYTICS_CONSENT_STORAGE_KEY);
  return value === 'granted' || value === 'denied' ? value : null;
};

export const setAnalyticsConsent = (consent: Exclude<AnalyticsConsent, null>) => {
  window.localStorage.setItem(ANALYTICS_CONSENT_STORAGE_KEY, consent);
  window.dispatchEvent(new CustomEvent<Exclude<AnalyticsConsent, null>>(ANALYTICS_CONSENT_EVENT, { detail: consent }));
};
