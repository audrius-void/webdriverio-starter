describe("Synthetic tests for demonstrating different selectors", () => {

  before(async () => {
    await browser.url("/");
  });

  it("should find 'Sign in' link in top navigation bar and check that its text is 'Sign in'", async () => {
    const link = await $("=Sign in");
    expect(await link.getText()).toBe("Sign in");
  });

  it("should find phone number in top navigation bar and check that it is 0123-456-789", async () => {
    const spanEl = await $(".shop-phone");
    const phone = await spanEl.$("strong");
    //Alternative selectors:
    //const phone = await $(".shop-phone strong");
    //const phone = await $("strong=0123-456-789");
    expect(await phone.getText()).toBe("0123-456-789");
  });

  it("should find last product and check that its price without discount is $20.50", async () => {
    const products = await $$("#homefeatured li");
    const price = await products[products.length - 1].$(".right-block .old-price");
    //Alternative selector:
    //const price = await $("#homefeatured li:last-child .right-block .old-price");
    expect(await price.getText()).toBe("$20.50");
  });

  it("should find phone number in footer and check that it's value is (347) 466-7432", async () => {
    const liElems = await $$("#block_contact_infos li");
    const phone = await liElems[1].$("span");
    //Alternative selectors:
    //const phone = await $("#block_contact_infos .icon-phone+span");
    //const phone = await $("#block_contact_infos li:nth-child(2) span");
    expect(await phone.getText()).toBe("(347) 466-7432");
  });

  it("should find Newsletter subscription input field and check that it's value is 'Enter your e-mail'", async () => {
    const input = await $("#newsletter-input");
    expect(await input.getValue()).toBe("Enter your e-mail");
  });

  it("should find the first product and check that its title is 'Faded Short Sleeve T-Shirts'", async () => {
    const products = await $$("#homefeatured li");
    const title = await products[0].$(".product-name");
    //Alternative selectors:
    //const title = await $("=Faded Short Sleeve T-shirts");
    //const title = await $("#homefeatured li:first-child a.product-name");
    expect(await title.getText()).toBe("Faded Short Sleeve T-shirts");
  });
});
