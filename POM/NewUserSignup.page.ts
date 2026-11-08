import {Page,Locator} from "@playwright/test"
import data from "../DDT/userData.json"
import generateRandomEmail from "../utils/randomString";

class NewUserSignup{
    page:Page
    signupOption:Locator
    signupName:Locator
    signupEmail:Locator
    signupButton:Locator

    gender:Locator
    password:Locator
    day:Locator
    month:Locator
    year:Locator
    newsletter:Locator
    splOffers:Locator

    firstname:Locator
    lastname:Locator
    company:Locator
    address:Locator
    country:Locator
    state:Locator
    city:Locator
    zipcode:Locator
    mobile:Locator
    createAccount:Locator
    continue:Locator

    constructor(page:Page){
        this.page = page
        this.signupOption = page.getByText('Signup / Login', { exact: true })
        this.signupName = page.getByPlaceholder('Name', { exact: true })
        this.signupEmail = page.locator("input[data-qa='signup-email']")
        this.signupButton = page.locator("button[data-qa='signup-button']")
        this.gender = page.locator('#id_gender1')
        this.password = page.getByLabel('Password *', { exact: true })
        this.day = page.locator('#days')
        this.month = page.locator('#months')
        this.year = page.locator('#years')
        this.newsletter = page.getByLabel('Sign up for our newsletter!', { exact: true })
        this.splOffers = page.getByLabel('Receive special offers from our partners!', { exact: true })
        this.firstname = page.getByLabel('First name *', { exact: true })
        this.lastname = page.getByLabel('Last name *', { exact: true })
        this.company = page.getByLabel('Company', { exact: true })
        this.address = page.getByLabel('Address * (Street address, P.O. Box, Company name, etc.)', { exact: true })
        this.country = page.getByLabel('Country *', { exact: true })
        this.state = page.getByLabel('State *', { exact: true })
        this.city = page.getByLabel('City *', { exact: true })
        this.zipcode = page.locator('#zipcode')
        this.mobile = page.getByLabel('Mobile Number *', { exact: true })
        this.createAccount = page.getByText('Create Account', { exact: true })
        this.continue = page.getByText('Continue', { exact: true })
    }

    async navigateToSignup() {
        await this.page.goto(data.url)
        await this.signupOption.click()
    }

    async enterSignupDetails(){
        await this.signupName.fill(data.name)
        await this.signupEmail.fill(generateRandomEmail())
        await this.signupButton.click()
    }

    async enterUserDetails(){
        await this.gender.click()
        await this.password.fill(data.password)
        await this.day.selectOption({value:data.date})
        await this.month.selectOption({label:data.month})
        await this.year.selectOption({value:data.year})
        await this.newsletter.check()
        await this.splOffers.check()

        await this.firstname.fill(data.first_name)
        await this.lastname.fill(data.last_name)
        await this.company.fill(data.company)
        await this.address.fill(data.address)
        await this.country.selectOption({value:data.country})
        await this.state.fill(data.state)
        await this.city.fill(data.city)
        await this.zipcode.fill(data.zipcode)
        await this.mobile.fill(data.mobile)
        await this.createAccount.click()

        await this.continue.click()
    }
}

export default NewUserSignup