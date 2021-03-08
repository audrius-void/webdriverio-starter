describe("Contact form test", () => {

  before(async () => {
    await browser.url("/index.php?controller=contact");
  });

  it("should send a customer service message", async () => {
    const email = await $("#email");
    await email.setValue("random@randomemail.com");
    const dropdown = await $("#id_contact");
    await dropdown.selectByVisibleText("Customer service");
    const orderRef = await $("#id_order");
    await orderRef.setValue("12345");
    const msg = await $("#message")
    await msg.setValue("Hello, I got an issue");
    const sendButton = await $("#submitMessage");
    await sendButton.click();
    const successMsg = await $(".alert-success");
    expect(await successMsg.isDisplayed()).toBe(true);
  });
});
