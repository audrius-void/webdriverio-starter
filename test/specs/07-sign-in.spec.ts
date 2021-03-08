import  MyAccountPage from "../pages/my-account-page";
import SignInPage  from "../pages/sign-in-page";
import TestData  from "../data/test-data";

describe("Sign in page", () => {

  before(async () => {
    await SignInPage.open();
  });

  it("should sign in to online store", async () => {
    await SignInPage.signIn(TestData.emailAddress, TestData.password);
    expect(await MyAccountPage.title).toHaveText("MY ACCOUNT");
  });
});
