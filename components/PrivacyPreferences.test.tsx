import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { PrivacyPreferences, PrivacySettingsButton } from './PrivacyPreferences';

describe('PrivacyPreferences', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('shows a choice prompt until a visitor saves a preference', () => {
    render(<PrivacyPreferences />);

    fireEvent.click(screen.getByRole('button', { name: 'Do Not Sell or Share My Personal Information' }));

    expect(window.localStorage.getItem('analytics-consent')).toBe('denied');
    expect(screen.queryByRole('dialog')).toBeNull();
  });

  it('reopens preferences from the footer control', () => {
    window.localStorage.setItem('analytics-consent', 'granted');
    render(<><PrivacyPreferences /><PrivacySettingsButton /></>);

    fireEvent.click(screen.getByRole('button', { name: 'Privacy Choices' }));

    expect(screen.getByRole('dialog')).not.toBeNull();
  });
});
