import { describe, it, expect } from 'vitest';
import { GOOGLE_MAPS_CATALOG_ENTRY } from '../../src/agents/tools/apify-maps-catalog.js';

describe('GOOGLE_MAPS_CATALOG_ENTRY', () => {
  it('names a live Google Maps Actor and johnvc input fields', () => {
    expect(GOOGLE_MAPS_CATALOG_ENTRY.id).toBe('johnvc/google-maps-places-api');
    expect(GOOGLE_MAPS_CATALOG_ENTRY.sampleInput.searchTerms).toEqual([
      'restaurants tel aviv',
    ]);
    expect(GOOGLE_MAPS_CATALOG_ENTRY.sampleInput.maxResultsPerSearch).toBe(20);
    expect(GOOGLE_MAPS_CATALOG_ENTRY.sampleInput).not.toHaveProperty(
      'searchStringsArray'
    );
  });
});
