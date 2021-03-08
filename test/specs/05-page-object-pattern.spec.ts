import ContactUsPage from "../pages/contact-us-page";
import TestData from "../data/test-data";

describe("Page object pattern", () => {

  before(async () => {
    await ContactUsPage.open();
  });

  it("should send a customer service message", async () => {
    await ContactUsPage.selectSubjectHeading("Customer service");
    await ContactUsPage.enterEmail(TestData.emailAddress);
    await ContactUsPage.enterOrderId(TestData.orderId);
    await ContactUsPage.enterMessage(TestData.message);
    await ContactUsPage.clickSend();
    expect(await ContactUsPage.successMessage).toBeDisplayed();
  })
})
