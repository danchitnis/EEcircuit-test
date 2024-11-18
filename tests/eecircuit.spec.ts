import { test } from '@playwright/test';
import { testEEcircuit } from '../lib/eesim-test';




test('EEsim Prod', async ({ page }) => {

  await testEEcircuit(page, 'https://eecircuit.com/');

});


test('EEsim Next', async ({ page }) => {

  await testEEcircuit(page, 'https://next.eecircuit.com/');

});