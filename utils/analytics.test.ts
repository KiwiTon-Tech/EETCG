import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import {
  trackEvent,
  trackPageView,
  trackFormSubmission,
  trackFormStart,
  trackButtonClick,
  trackCTAClick,
  trackServiceView,
  trackServiceInterest,
  trackConsultantView,
  trackConsultantContact,
  trackPhoneClick,
  trackEmailClick,
  trackNavigation,
  trackConversion,
  trackEngagement,
} from './analytics';

const mockGtag = vi.fn();

beforeEach(() => {
  vi.stubGlobal('window', { ...window, gtag: mockGtag });
});

afterEach(() => {
  vi.restoreAllMocks();
  mockGtag.mockReset();
});

describe('trackEvent', () => {
  it('calls window.gtag with the event name and params', () => {
    trackEvent('test_event', { foo: 'bar' });
    expect(mockGtag).toHaveBeenCalledWith('event', 'test_event', { foo: 'bar' });
  });

  it('calls window.gtag without params when none provided', () => {
    trackEvent('test_event');
    expect(mockGtag).toHaveBeenCalledWith('event', 'test_event', undefined);
  });

  it('does not throw when window.gtag is not defined', () => {
    vi.stubGlobal('window', { ...window, gtag: undefined });
    expect(() => trackEvent('test_event')).not.toThrow();
  });
});

describe('trackPageView', () => {
  it('fires page_view event with correct page_path', () => {
    trackPageView('/about');
    expect(mockGtag).toHaveBeenCalledWith('event', 'page_view', { page_path: '/about' });
  });
});

describe('trackFormSubmission', () => {
  it('fires form_submission with form_type and service_type', () => {
    trackFormSubmission('contact_form', 'Project Management');
    expect(mockGtag).toHaveBeenCalledWith('event', 'form_submission', {
      form_type: 'contact_form',
      service_type: 'Project Management',
    });
  });

  it('fires form_submission with undefined service_type when omitted', () => {
    trackFormSubmission('contact_form');
    expect(mockGtag).toHaveBeenCalledWith('event', 'form_submission', {
      form_type: 'contact_form',
      service_type: undefined,
    });
  });
});

describe('trackFormStart', () => {
  it('fires form_start with the correct form_type', () => {
    trackFormStart('contact_form');
    expect(mockGtag).toHaveBeenCalledWith('event', 'form_start', { form_type: 'contact_form' });
  });
});

describe('trackButtonClick', () => {
  it('fires button_click with button_name and location', () => {
    trackButtonClick('Schedule Consultation', 'hero');
    expect(mockGtag).toHaveBeenCalledWith('event', 'button_click', {
      button_name: 'Schedule Consultation',
      location: 'hero',
    });
  });
});

describe('trackCTAClick', () => {
  it('fires cta_click with cta_name and destination', () => {
    trackCTAClick('Get Started', '/contact');
    expect(mockGtag).toHaveBeenCalledWith('event', 'cta_click', {
      cta_name: 'Get Started',
      destination: '/contact',
    });
  });
});

describe('trackServiceView', () => {
  it('fires service_view with the service name', () => {
    trackServiceView('Project Management');
    expect(mockGtag).toHaveBeenCalledWith('event', 'service_view', {
      service_name: 'Project Management',
    });
  });
});

describe('trackServiceInterest', () => {
  it('fires service_interest with service_name and action', () => {
    trackServiceInterest('AI Consulting', 'service_card_click');
    expect(mockGtag).toHaveBeenCalledWith('event', 'service_interest', {
      service_name: 'AI Consulting',
      action: 'service_card_click',
    });
  });
});

describe('trackConsultantView', () => {
  it('fires consultant_view with name and id', () => {
    trackConsultantView('Carla Monroe', 'carla');
    expect(mockGtag).toHaveBeenCalledWith('event', 'consultant_view', {
      consultant_name: 'Carla Monroe',
      consultant_id: 'carla',
    });
  });
});

describe('trackConsultantContact', () => {
  it('fires consultant_contact with name and contact method', () => {
    trackConsultantContact('Carla Monroe', 'email');
    expect(mockGtag).toHaveBeenCalledWith('event', 'consultant_contact', {
      consultant_name: 'Carla Monroe',
      contact_method: 'email',
    });
  });
});

describe('trackPhoneClick', () => {
  it('fires phone_click with phone_number and location', () => {
    trackPhoneClick('+15055048240', 'contact_page');
    expect(mockGtag).toHaveBeenCalledWith('event', 'phone_click', {
      phone_number: '+15055048240',
      location: 'contact_page',
    });
  });
});

describe('trackEmailClick', () => {
  it('fires email_click with email_address and location', () => {
    trackEmailClick('info@eliteenterprisetcg.com', 'footer');
    expect(mockGtag).toHaveBeenCalledWith('event', 'email_click', {
      email_address: 'info@eliteenterprisetcg.com',
      location: 'footer',
    });
  });
});

describe('trackNavigation', () => {
  it('fires navigation_click with link_name and destination', () => {
    trackNavigation('About', '/about');
    expect(mockGtag).toHaveBeenCalledWith('event', 'navigation_click', {
      link_name: 'About',
      destination: '/about',
    });
  });
});

describe('trackConversion', () => {
  it('fires conversion with conversion_type and value', () => {
    trackConversion('consultation_booked', 500);
    expect(mockGtag).toHaveBeenCalledWith('event', 'conversion', {
      conversion_type: 'consultation_booked',
      value: 500,
    });
  });

  it('fires conversion without value when omitted', () => {
    trackConversion('form_submit');
    expect(mockGtag).toHaveBeenCalledWith('event', 'conversion', {
      conversion_type: 'form_submit',
      value: undefined,
    });
  });
});

describe('trackEngagement', () => {
  it('fires engagement with engagement_type and spread details', () => {
    trackEngagement('scroll_depth', { depth: '75%', page: '/about' });
    expect(mockGtag).toHaveBeenCalledWith('event', 'engagement', {
      engagement_type: 'scroll_depth',
      depth: '75%',
      page: '/about',
    });
  });

  it('fires engagement without details when omitted', () => {
    trackEngagement('time_on_page');
    expect(mockGtag).toHaveBeenCalledWith('event', 'engagement', {
      engagement_type: 'time_on_page',
    });
  });
});
