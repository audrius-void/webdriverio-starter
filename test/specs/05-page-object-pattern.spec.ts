import ContactUsPage from "../pages/contact-us-page";
import TestData from "../data/test-data";

describe("Page object pattern", () => {

  before(async () => {

  });

  it("should send a customer service message", async () => {

    expect(await ContactUsPage.isSuccessMessageDisplayed()).toBe(true);
  })
})
