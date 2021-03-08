describe("Online store home page", () => {

  it("should have a right title", async () => {
    await browser.url("/");
    expect(browser).toHaveTitle("My Store");
  });
});
