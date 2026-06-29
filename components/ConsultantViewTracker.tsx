'use client';

import { useEffect } from 'react';
import { trackConsultantView } from '../utils/analytics';

interface ConsultantViewTrackerProps {
  consultantName: string;
  consultantId: string;
}

export function ConsultantViewTracker({ consultantName, consultantId }: ConsultantViewTrackerProps) {
  useEffect(() => {
    trackConsultantView(consultantName, consultantId);
  }, [consultantName, consultantId]);

  return null;
}
