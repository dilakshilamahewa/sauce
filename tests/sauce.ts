import { Selector } from "testcafe"

// FIXTURE
fixture("Testing Sauce").page `https://www.saucedemo.com`

// Test: Login
test("Login to the website", async test => {

    await test
        .typeText(Selector("#user-name"), "performance_glitch_user")
        .typeText(Selector("#password"), "secret_sauce")
        .click(Selector("#login-button"))
        .expect(Selector(".app_logo").innerText).eql("Swag Labs")

})

// Test: AddProducts
test("Add any two products to cart", async test => {

    await test
        .typeText(Selector("#user-name"), "performance_glitch_user")
        .typeText(Selector("#password"), "secret_sauce")
        .click(Selector("#login-button"))
        .expect(Selector(".app_logo").innerText).eql("Swag Labs")

        .click(Selector("#add-to-cart-sauce-labs-fleece-jacket"))
        .wait(2000)
        .click(Selector("#add-to-cart-sauce-labs-onesie"))
        .wait(2000)

})