/// <reference types='cypress' />

import {navigate} from '../../support/navigate'
import { practiceForm } from '../../support/forms/practiceForm'

describe('Verify Forms tab', () => {
  beforeEach(() => {
    cy.visit('/')
  })

   /**
	 * GIVEN A demoQA application with forums tab
	 * WHEN user want to verify error warnings in registration form
	 * AND navigate to forms
   * AND navigate to practice form
	 * THEN clicking on submit form with input fields throws errors
	 *
	 * @author Pavan_Sana
	 * Story: https://QA-001
	 */
  it('Verify submitting Student Registration Form with empty input fields throws error', () => {
    cy.log('https://QA-001')
    // returning false here prevents Cypress from
    // failing the test
    cy.handleException()

    navigate.toForms()
    navigate.toPraticeForm()
    practiceForm.clickOnSubmitBtn()

    // Following validations throws error by turning input fields to red
    practiceForm.verifyFirstNameFieldError()
    practiceForm.verifyLastNameFieldError()
    practiceForm.verifyGenderRadioBtnsError()
    practiceForm.verifyMobileNumberFieldError()
    // Following Vlidations does not throw error and 
    // Input fields turns to green as those are not manadatory fields
    practiceForm.verifyDOBFieldError()
    practiceForm.verifyHobbiesCheckBoxError()
    practiceForm.verifyCurrentAddressFieldError()
  })

   /**
	 * GIVEN A demoQA application with forums tab
	 * WHEN user want to verify email input field
	 * AND navigate to forms
   * AND navigate to practice form
   * AND enter random string
	 * THEN clicking on submit form with input fields throws errors
   * AND enter valid email
   * THEN clicking on submit form changes the input field boarder to green
	 *
	 * @author Pavan_Sana
	 * Story: https://QA-002
	 */
  it("Verify invalid field validation for Email input field", () =>{
    cy.log('https://QA-002')
    // returning false here prevents Cypress from
    // failing the test
    cy.handleException()
    navigate.toForms()
    navigate.toPraticeForm()
     // Enter an invalid email - Generate random string and enter in the email field
    cy.generateRandomString(15).then(email =>{
      cy.log("Random string is "+ email)

      practiceForm.enterEmail(email)
      practiceForm.clickOnSubmitBtn()
      //Verify it throws error by changing colour to red
      practiceForm.verifyEmailFieldError()
      // Now enter Valid email - Generate random email and enter inside email field
      cy.generateRandomEmail().then(validEmail =>{
        cy.log("Random string is "+ validEmail)
        practiceForm.enterEmail(validEmail)
        //Verify email field changed to green
        practiceForm.verifyValidEmailField()
      })
    })
  })

  /**
	 * GIVEN A demoQA application with forums tab
	 * WHEN user want to mobile number input field
	 * AND navigate to forms
   * AND navigate to practice form
   * AND enter random string in the mobile number input field
	 * THEN clicking on submit form changes the input field boarder to red
   * AND enter mobile number 
   * THEN clicking on submit form changes the input field boarder to green
	 *
	 * @author Pavan_Sana
	 * Story: https://QA-003
	 */
  it("Verify invalid field validation for mobile number input field", () =>{
    cy.log('https://QA-003')
    // returning false here prevents Cypress from
    // failing the test
    cy.handleException()
    navigate.toForms()
    navigate.toPraticeForm()
     // Enter an invalid email - Generate random string and enter in the email field
    cy.generateRandomString(10).then(number =>{
      cy.log("Random string is "+ number)

      practiceForm.enterMobileNumber(number)
      practiceForm.clickOnSubmitBtn()

      //Verify it throws error by changing colour to red
      practiceForm.verifyMobileNumberFieldError

      // Now enter Valid Mobile number - Generate random number and enter inside mobile number field
      cy.generateRandomPhoneNumber().then(validNum =>{
        cy.log("Random Mobile number is "+ validNum)
        practiceForm.enterMobileNumber(validNum)
        //Verify email field changed to green
        practiceForm.verifyValidMobileNumField()

      })
    })
  })


  /**
	 * GIVEN A demoQA application with forums tab
	 * WHEN user want to submit a stident registration form with valid data
	 * AND navigate to forms
   * AND navigate to practice form
   * AND Enter name, email phone number, filling all input fields
	 * THEN clicking on submit displays a form submission confirmation popup
   * 
	 * @author Pavan_Sana
	 * Story: https://QA-004
	 */
  it('Verify submitting Student Registration Form with valid input info', () => {
    cy.log('https://QA-004')
    // returning false here prevents Cypress from
    // failing the test
    cy.handleException()

    navigate.toForms()
    navigate.toPraticeForm()

    cy.generateRandomString(20).then(name =>{

      //Enter first name and Last name
      practiceForm.enterFirstName(name)
      practiceForm.enterLastName(name)
      cy.generateRandomEmail().then(validEmail =>{
        cy.log("Random string is "+ validEmail)
        practiceForm.enterEmail(validEmail)
      })
      practiceForm.clickOnRandomRadioBtn()
      cy.generateRandomPhoneNumber().then(validNum =>{
        cy.log("Random Mobile number is "+ validNum)
        practiceForm.enterMobileNumber(validNum)
      })

      // Fill all the input fields
      practiceForm.enterSubject()
      practiceForm.clickOnRandomHobiesCheckBox()
      practiceForm.uploadPicture('cypress/fixtures/cool.jpeg')
      practiceForm.enterRandomAddress()
      practiceForm.clickOnRandomState()
      practiceForm.clickOnRandomCity()
      practiceForm.clickOnSubmitBtn()

      //Verify the Confirmation message
      practiceForm.verifyConfirmation()
    })
  })
})