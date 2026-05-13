export const apiVersion =
  process.env.SANITY_API_VERSION || '2025-08-01';

export const dataset = process.env.SANITY_DATASET || 'production';
export const projectId = process.env.SANITY_PROJECT_ID || 'atjt5hge';

if (!projectId || !dataset) {
  throw new Error('Missing Sanity configuration: check SANITY_PROJECT_ID and SANITY_DATASET in .env');
}