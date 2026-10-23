/**
 * Popular-catalog slot for Google Maps. The previous `apify/google-maps-scraper`
 * slug is gone from the Store (API 404).
 *
 * @returns Catalog entry with a live Actor id and matching sample input.
 */
export const GOOGLE_MAPS_CATALOG_ENTRY = {
  id: 'johnvc/google-maps-places-api',
  description: 'Scrape Google Maps listings, reviews',
  sampleInput: {
    searchTerms: ['restaurants tel aviv'],
    maxResultsPerSearch: 20,
  },
};
