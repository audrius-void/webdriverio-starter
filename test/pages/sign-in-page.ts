class SignInPage {

  get emailInput() {
    return $("#email");
  }

  get passwordInput() {
    return $("#passwd");
  }

  get signInButton() {
    return $("#SubmitLogin");
  }

  async open() {
    await browser.url("index.php?controller=authentication&back=my-account");
  }

  async enterEmail(email: string) {
    await (await this.emailInput).setValue(email);
  }

  async enterPassword(password: string) {
    await (await this.passwordInput).setValue(password);
  }

  async clickSignIn() {
    await (await this.signInButton).click();
  }

  async signIn(email: string, password: string) {
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.clickSignIn();
  }
}

export default new SignInPage();
