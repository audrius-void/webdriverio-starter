describe("Contact form test", () => {

  before(async () => {

  });

  it("should send a customer service message", async () => {
    const email = await $("");

    const dropdown = await $("");

    const orderRef = await $("");

    const msg = await $("");

    const sendButton = await $("");

    const successMsg = await $("");
    expect(await successMsg.isDisplayed()).toBe(true);
  });
});
