describe("Synthetic tests for demonstrating different selectors", () => {

  before(async () => {
    await browser.url("/");
  });

  it("should find 'Sign in' link in top navigation bar and check that its text is 'Sign in'", async () => {
    const link = await $("");
    expect(await link.getText()).toBe("Sign in");
  });

  it("should find phone number in top navigation bar and check that it is 0123-456-789", async () => {
    const phone = await $("");
    expect(await phone.getText()).toBe("0123-456-789");
  });

  it("should find last product and check that its price without discount is $20.50", async () => {
    const price = await $("");
    expect(await price.getText()).toBe("$20.50");
  });

  it("should find phone number in footer and check that it's value is (347) 466-7432", async () => {
    const elems = await $$("");
    let index = Number.NaN; //dummy index value
    const phone = await elems[index].$("");
    expect(await phone.getText()).toBe("(347) 466-7432");
  });
});
