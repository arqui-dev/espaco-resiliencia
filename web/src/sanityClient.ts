import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID || '',
  dataset: process.env.REACT_APP_SANITY_DATASET || '',
  apiVersion: process.env.REACT_APP_SANITY_API_VERSION || '2022-03-07',
  useCdn: true, // `false` if you want to ensure fresh data
});

export default client;
