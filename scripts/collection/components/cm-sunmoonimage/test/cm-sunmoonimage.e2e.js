import { newE2EPage } from "@stencil/core/testing";
describe('cm-sunmoonimage', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cm-sunmoonimage></cm-sunmoonimage>');
    const element = await page.find('cm-sunmoonimage');
    expect(element).toHaveClass('hydrated');
  });
});
//# sourceMappingURL=cm-sunmoonimage.e2e.js.map
