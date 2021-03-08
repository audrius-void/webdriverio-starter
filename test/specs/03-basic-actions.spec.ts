describe("Basic actions", () => {

  it("should open 'Contact us' page", async () => {
    await browser.url("/");
    const link = await $("=Contact us");
    await link.click();
    const title = await $("h1");
    expect(await title.getText()).toBe("CUSTOMER SERVICE - CONTACT US");
  });
});
