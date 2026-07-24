'use client';

import { useEffect, useState } from 'react';
import {
  ANALYTICS_CONSENT_EVENT,
  getAnalyticsConsent,
  setAnalyticsConsent,
  type AnalyticsConsent,
} from '../utils/privacy';

export function PrivacyPreferences() {
  const [consent, setConsent] = useState<AnalyticsConsent>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const updateConsent = () => setConsent(getAnalyticsConsent());
    const openPreferences = () => setIsOpen(true);

    updateConsent();
    window.addEventListener(ANALYTICS_CONSENT_EVENT, updateConsent);
    window.addEventListener('open-privacy-preferences', openPreferences);

    return () => {
      window.removeEventListener(ANALYTICS_CONSENT_EVENT, updateConsent);
      window.removeEventListener('open-privacy-preferences', openPreferences);
    };
  }, []);

  const saveConsent = (value: Exclude<AnalyticsConsent, null>) => {
    setAnalyticsConsent(value);
    setConsent(value);
    setIsOpen(false);
  };

  if (consent !== null && !isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-x-4 bottom-4 z-[300] mx-auto max-w-xl rounded-lg border border-gray-200 bg-white p-6 shadow-2xl sm:inset-x-auto sm:right-6" role="dialog" aria-modal="true" aria-labelledby="privacy-preferences-title">
      <h2 id="privacy-preferences-title" className="text-xl font-bold text-[color:var(--color-navy)]">Your privacy choices</h2>
      <p className="mt-3 text-sm leading-6 text-gray-700">
        We use Google Analytics to understand site usage. You can allow analytics or opt out at any time. A browser Global Privacy Control signal is treated as an opt-out.
      </p>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-end">
        <button type="button" onClick={() => saveConsent('denied')} className="rounded border border-[color:var(--color-navy)] px-4 py-2 font-semibold text-[color:var(--color-navy)] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[color:var(--color-teal)]">
          Do Not Sell or Share My Personal Information
        </button>
        <button type="button" onClick={() => saveConsent('granted')} className="rounded bg-[color:var(--color-navy)] px-4 py-2 font-semibold text-white hover:bg-[color:var(--color-teal)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-teal)]">
          Allow Analytics
        </button>
      </div>
    </div>
  );
}

export function PrivacySettingsButton() {
  return (
    <button type="button" onClick={() => window.dispatchEvent(new Event('open-privacy-preferences'))} className="text-left text-sm text-[color:var(--color-gold)] hover:underline focus:outline-none focus:ring-2 focus:ring-[color:var(--color-gold)]">
      Privacy Choices
    </button>
  );
}
