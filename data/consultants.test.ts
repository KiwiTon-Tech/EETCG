import { describe, it, expect } from 'vitest';
import { consultants, type Consultant } from './consultants';

describe('consultants data', () => {
  it('exports a non-empty array', () => {
    expect(Array.isArray(consultants)).toBe(true);
    expect(consultants.length).toBeGreaterThan(0);
  });

  it('every consultant has a unique id', () => {
    const ids = consultants.map((c) => c.id);
    const unique = new Set(ids);
    expect(unique.size).toBe(ids.length);
  });

  it('every consultant id is a non-empty lowercase slug', () => {
    for (const c of consultants) {
      expect(c.id).toMatch(/^[a-z0-9-]+$/);
    }
  });

  it('every consultant has required string fields', () => {
    const required: (keyof Consultant)[] = ['id', 'name', 'title', 'shortBio', 'fullBio', 'image'];
    for (const c of consultants) {
      for (const field of required) {
        expect(typeof c[field], `${c.id}.${field}`).toBe('string');
        expect((c[field] as string).length, `${c.id}.${field} should not be empty`).toBeGreaterThan(0);
      }
    }
  });

  it('every consultant has a non-empty specialties array', () => {
    for (const c of consultants) {
      expect(Array.isArray(c.specialties), `${c.id}.specialties`).toBe(true);
      expect(c.specialties.length, `${c.id} needs at least one specialty`).toBeGreaterThan(0);
    }
  });

  it('every consultant has a non-empty certifications array', () => {
    for (const c of consultants) {
      expect(Array.isArray(c.certifications), `${c.id}.certifications`).toBe(true);
      expect(c.certifications.length, `${c.id} needs at least one certification`).toBeGreaterThan(0);
    }
  });

  it('every consultant image path starts with /images/', () => {
    for (const c of consultants) {
      expect(c.image, `${c.id}.image`).toMatch(/^\/images\//);
    }
  });

  it('carla is the first consultant (owner)', () => {
    expect(consultants[0].id).toBe('carla');
  });

  it('carla has the PMP certification', () => {
    const carla = consultants.find((c) => c.id === 'carla');
    expect(carla?.certifications).toContain('PMP');
  });

  it('optional firm field is a string when present', () => {
    for (const c of consultants) {
      if (c.firm !== undefined) {
        expect(typeof c.firm).toBe('string');
        expect(c.firm.length).toBeGreaterThan(0);
      }
    }
  });

  it('optional clearance field is a string when present', () => {
    for (const c of consultants) {
      if (c.clearance !== undefined) {
        expect(typeof c.clearance).toBe('string');
        expect(c.clearance.length).toBeGreaterThan(0);
      }
    }
  });
});
