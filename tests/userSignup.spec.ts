import { Page,test } from "@playwright/test";
import NewUserSignup from "../POM/NewUserSignup.page"

test("Signup of New User test script",async ({page})=>{
    let newUserSignup = new NewUserSignup(page)

    await test.step("Open automationexercise URL", async () => {
        await newUserSignup.navigateToSignup()
    })

    await test.step("Navigate to User Signup page",async () => {
        await newUserSignup.enterSignupDetails()
    })

    await test.step("Enter user details",async () => {
        await newUserSignup.enterUserDetails()
    })
})