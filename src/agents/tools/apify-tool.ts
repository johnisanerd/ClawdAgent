import { BaseTool, ToolResult } from './base-tool.js';
import config from '../../config.js';
import { GOOGLE_MAPS_CATALOG_ENTRY } from './apify-maps-catalog.js';

const APIFY_BASE_URL = 'https://api.apify.com/v2';

const POPULAR_ACTORS: Record<string, { id: string; description: string; sampleInput: Record<string, any> }[]> = {
  'social-media': [
    { id: 'apify/facebook-posts-scraper', description: 'Scrape Facebook posts, comments, reactions', sampleInput: { startUrls: [{ url: 'https://facebook.com/PAGE' }], maxPosts: 50 } },
    { id: 'apify/instagram-scraper', description: 'Scrape Instagram posts, profiles, hashtags', sampleInput: { directUrls: ['https://instagram.com/USER'], resultsLimit: 50 } },
    { id: 'apify/tiktok-scraper', description: 'Scrape TikTok videos, profiles, hashtags', sampleInput: { profiles: ['USER'], resultsPerPage: 50 } },
    { id: 'apify/twitter-scraper', description: 'Scrape tweets, user profiles', sampleInput: { handles: ['USER'], tweetsDesired: 50 } },
    { id: 'apify/youtube-scraper', description: 'Scrape YouTube videos, channels, comments', sampleInput: { startUrls: [{ url: 'https://youtube.com/CHANNEL' }], maxResults: 50 } },
    { id: 'apify/linkedin-scraper', description: 'Scrape LinkedIn profiles, companies, jobs', sampleInput: { startUrls: [{ url: 'https://linkedin.com/in/USER' }] } },
  ],
  'e-commerce': [
    { id: 'apify/amazon-scraper', description: 'Scrape Amazon products, reviews, prices', sampleInput: { categoryOrProductUrls: [{ url: 'https://amazon.com/dp/ASIN' }] } },
    GOOGLE_MAPS_CATALOG_ENTRY,
  ],
  'data': [
    { id: 'apify/google-search-scraper', description: 'Scrape Google search results', sampleInput: { queries: 'search query', maxPagesPerQuery: 1 } },
    { id: 'apify/website-content-crawler', description: 'Crawl entire websites', sampleInput: { startUrls: [{ url: 'https://example.com' }], maxCrawlPages: 50 } },
  ],
};
