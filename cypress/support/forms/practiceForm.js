
export class PracticeForm {

    // Click on Submit button to submit the registration form
    clickOnSubmitBtn(){
        cy.get('#submit').click()

    }

    //Verify First Name input field throws error with colour change
    verifyFirstNameFieldError(){
        cy.get('#firstName').should('have.css', 'border-color', 'rgb(220, 53, 69)')
    }

    //Verify Last Name input field throws error with colour change
    verifyLastNameFieldError(){
        cy.get('#lastName').should('have.css', 'border-color', 'rgb(220, 53, 69)')
    }

    //Verify Gender radio button throws error with colour change
    verifyGenderRadioBtnsError(){
        for(let i=1; i<4; i++){
            cy.get(`label[for='gender-radio-${i}']`).should('have.css', 'color', 'rgb(220, 53, 69)')
        }

    }

    //Verify Email input field throws error with colour change
    verifyEmailFieldError(){
        cy.get('#userEmail').should('have.css', 'border-color', 'rgb(220, 53, 69)')
    }

    //Verify Email input field does not throws error and does the colour change
    verifyValidEmailField(){
        cy.get('#userEmail').should('have.css', 'border-color', 'rgb(40, 167, 69)')
    }

    //Verify Mobile number input field does not throws error and does the colour change
    verifyValidMobileNumField(){
        cy.get('#userNumber').should('have.css', 'border-color', 'rgb(40, 167, 69)')
    }

    //Verify Mobile number input field throws error with colour change
    verifyMobileNumberFieldError(){
        cy.get('#userNumber').should('have.css', 'border-color', 'rgb(220, 53, 69)')
    }

    //Verify DOB input field does not throws error and does the colour change
    verifyDOBFieldError(){
        cy.get('#dateOfBirthInput').should('have.css', 'border-color', 'rgb(40, 167, 69)')
    }

     //Verify Current addresss input field does not throws error and does the colour change
     verifyCurrentAddressFieldError(){
        cy.get('#currentAddress').should('have.css', 'border-color', 'rgb(40, 167, 69)')
    }

     //Verify Hobbies check box does not throws error and does the colour change
     verifyHobbiesCheckBoxError(){
        for(let i=1; i<4; i++){
            cy.get(`[for='hobbies-checkbox-${i}']`).should('have.css', 'color', 'rgb(40, 167, 69)')
        }

    }

    //Enter email
    enterEmail(email){
        cy.get('#userEmail').clear().type(email)
    }

    //Enter Mobile number
    enterMobileNumber(number){
        cy.get('#userNumber').clear().type(number)
    }

    // Enter First name
    enterFirstName(name){
        cy.get('#firstName').type(name)
    }
    //Enter Last name
    enterLastName(name){
        cy.get('#lastName').type(name)   
    }

    // Select random gender radio button
    clickOnRandomRadioBtn(){
        var randomDecimal = Math.random();
        var randomNumber = Math.floor(randomDecimal * 3) + 1;
       cy.get(`label[for='gender-radio-${randomNumber}']`).click()
    }

    // Enter random subject
    enterSubject(){
        cy.get('#subjectsContainer').type('physics')
        cy.get('#react-select-2-option-0').click()

    }

    //Slect random hobbies check box
    clickOnRandomHobiesCheckBox(){
        var randomDecimal = Math.random();
        var randomNumber = Math.floor(randomDecimal * 3) + 1;
       cy.get(`#hobbies-checkbox-${randomNumber}`).click({ force: true })
    }

    // Upload a picture
    uploadPicture(file){
        //cy.get('#uploadPicture').click().selectFile(file)
        cy.get('#uploadPicture').selectFile(file)

    }

    // enter random address 
    enterRandomAddress(){
        cy.generateRandomString(20).then(add =>{
        cy.get('#currentAddress').type(add)
        })

    }

    // select random state
    clickOnRandomState(){
        cy.contains('Select State').click()
        cy.get('#react-select-3-option-0').click({ force: true })
    }

    // select random city
    clickOnRandomCity(){
        cy.get('#city').click()
        cy.get('#react-select-4-option-2').click({ force: true })
    }

    // Verify form submission confirmation message
    verifyConfirmation(){
        cy.get('#example-modal-sizes-title-lg').should('contain', 'Thanks for submitting the form')
    }
     
}
export const practiceForm = new PracticeForm();
