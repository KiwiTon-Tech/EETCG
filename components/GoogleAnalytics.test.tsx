import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render } from '@testing-library/react';
import { GoogleAnalytics } from './GoogleAnalytics';

vi.mock('next/script', () => ({
  default: ({ id, src, dangerouslySetInnerHTML }: {
    id?: string;
    src?: string;
    dangerouslySetInnerHTML?: { __html: string };
  }) => {
    if (src) return <script data-testid="ga-script" src={src} />;
    return <script data-testid={id ?? 'inline-script'} dangerouslySetInnerHTML={dangerouslySetInnerHTML} />;
  },
}));

vi.mock('next/navigation', () => ({
  usePathname: () => '/',
  useSearchParams: () => ({ toString: () => '' }),
}));

describe('GoogleAnalytics', () => {
  beforeEach(() => {
    vi.unstubAllEnvs();
  });

  it('renders nothing when NEXT_PUBLIC_GA_MEASUREMENT_ID is not set', () => {
    vi.stubEnv('NEXT_PUBLIC_GA_MEASUREMENT_ID', '');
    const { container } = render(<GoogleAnalytics />);
    expect(container.firstChild).toBeNull();
  });

  it('renders GA scripts when measurement ID is set', () => {
    vi.stubEnv('NEXT_PUBLIC_GA_MEASUREMENT_ID', 'G-TESTID123');
    const { getAllByTestId } = render(<GoogleAnalytics />);
    const gaScript = getAllByTestId('ga-script');
    expect(gaScript.length).toBeGreaterThan(0);
    expect(gaScript[0].getAttribute('src')).toContain('G-TESTID123');
  });

  it('inline script contains the measurement ID', () => {
    vi.stubEnv('NEXT_PUBLIC_GA_MEASUREMENT_ID', 'G-TESTID123');
    const { getByTestId } = render(<GoogleAnalytics />);
    const inlineScript = getByTestId('google-analytics');
    expect(inlineScript.innerHTML).toContain('G-TESTID123');
  });
});
