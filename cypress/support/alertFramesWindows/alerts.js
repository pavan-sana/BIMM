/// <reference types="cypress"/>

export class Alert {

    // Click on the first alert button
    clickOnFirstAlertBtn(){
        cy.get('#alertButton').click()
    }

    //Verify Alert message
    verifyAlertMsg(alertMessage){
        cy.on('window:alert', (msg) => {
            expect(msg).to.equal(alertMessage)
        })  
    }

    // Confirm the alert
    confirmTheAlert(){
        cy.on('window:confirm', () => true)
    }

    // Cancel the alert
    cancelTheAlert(){
        cy.on('window:confirm', () => false)
    }

    // Click on the second alert button
    clickOnSecondAlertBtn(){
        cy.get('#timerAlertButton').click()
    }
    
    // Click on the third alert button
    clickOnThirdAlertBtn(){
        cy.get('#confirmButton').click()
    }

    //Verify confirmation message
    verifyConfirmMsg(alertMessage){
        cy.get('#confirmResult').contains(alertMessage)
    }

    // Click on Fourth alert button
    clickOnFourthBtn(){
        cy.get('#promtButton').click() 
    }

    //Verify propt confirmation message
    verifyProptConfirmationMsg(msg){
        cy.get('#promptResult').contains(msg)
    }

}

export const alerts = new Alert()