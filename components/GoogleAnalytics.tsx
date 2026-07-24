'use client';

import Script from 'next/script';
import { Suspense, useEffect, useRef, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { ANALYTICS_CONSENT_EVENT, getAnalyticsConsent, type AnalyticsConsent } from '../utils/privacy';

// Route tracking component that uses useSearchParams
function RouteTracker({ measurementId }: { measurementId: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isInitialPageView = useRef(true);

  useEffect(() => {
    if (isInitialPageView.current) {
      isInitialPageView.current = false;
      return;
    }

    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
    
    // Send pageview event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', measurementId, {
        page_path: url,
      });
    }
  }, [pathname, searchParams, measurementId]);

  return null;
}

export function GoogleAnalytics() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const [consent, setConsent] = useState<AnalyticsConsent>(null);

  useEffect(() => {
    const updateConsent = () => setConsent(getAnalyticsConsent());

    updateConsent();
    window.addEventListener(ANALYTICS_CONSENT_EVENT, updateConsent);
    return () => window.removeEventListener(ANALYTICS_CONSENT_EVENT, updateConsent);
  }, []);

  if (!measurementId || consent !== 'granted') {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Suspense fallback={null}>
        <RouteTracker measurementId={measurementId} />
      </Suspense>
    </>
  );
}
