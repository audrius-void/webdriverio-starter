describe("Waits", () => {

  it("should add the first product to cart", async () => {
    await browser.url("/");
    const product = await $("#homefeatured li:first-child");
    await product.moveTo();

    const quickViewLink = await $("#homefeatured li:first-child .quick-view");

    await quickViewLink.click();

    const iframe = await $(".fancybox-iframe");

    await browser.switchToFrame(iframe);

    const addButton = await $("#add_to_cart button");

    await addButton.click();

    await browser.switchToFrame(null);

    const successMessage = await $(".layer_cart_product h2");

    expect(await successMessage.getText()).toBe("Product successfully added to your shopping cart");
  });
});
