import { by, device, expect, element } from 'detox';

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  }, 5 * 60 * 1000); // 5 minutes

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('shows the welcome screen', async () => {
    await expect(element(by.text('Debug'))).toBeVisible();
  });

  it('renders the text below the fold', async () => {
    await expect(element(by.text('The Basics'))).toExist();
  });

  it('scrolls to the link and opens it', async () => {
    await waitFor(element(by.text('Style')))
      .toBeVisible()
      .whileElement(by.id('ScrollView'))
      .scroll(300, 'down');
    await element(by.text('Style')).tap();
  });
});
