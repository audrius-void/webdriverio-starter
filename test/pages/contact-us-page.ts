class ContactUsPage {

  get subjectHeadingDropdown() {
    return $("#id_contact");
  }

  get emailInput() {
    return $("#email");
  }

  get orderIdInput() {
    return $("#id_order");
  }

  get messageTextArea() {
    return $("#message");
  }

  get sendButton() {
    return $("#submitMessage");
  }

  get successMessage() {
    return $(".alert-success");
  }

  async open() {
    await browser.url("/index.php?controller=contact");
  }

  async selectSubjectHeading(subjectHeading: string) {
    await (await this.subjectHeadingDropdown).selectByVisibleText(subjectHeading);
  }

  async enterEmail(email: string) {
    await (await this.emailInput).setValue(email);
  }

  async enterOrderId(orderId: string) {
    await (await this.orderIdInput).setValue(orderId);
  }

  async enterMessage(message: string) {
    await (await this.messageTextArea).setValue(message);
  }

  async clickSend() {
    await (await this.sendButton).click();
  }

  async isSuccessMessageDisplayed() {
    return (await this.successMessage).isDisplayed();
  }
}

export default new ContactUsPage();
