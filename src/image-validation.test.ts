import { validateImageUrls } from 'test-data-factory';
import { stemAchievementsData } from './index.js';

validateImageUrls(stemAchievementsData, {
  datasetName: 'STEM Achievements Dataset',
  httpTimeout: 15000,
});
