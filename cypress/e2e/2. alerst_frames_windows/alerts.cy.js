/// <reference types="cypress"/>

import {navigate} from '../../support/navigate'
import {alerts} from '../../support/alertFramesWindows/alerts'


describe('Verify alerts tab', () => {
    beforeEach(() => {
        cy.visit("/")
        navigate.toAlertsFrameWindowsTab()
        cy.handleException()
        navigate.toAlerts()
    })

    it("Verify first alert button", () => {
        
        alerts.clickOnFirstAlertBtn()
        alerts.verifyAlertMsg('You clicked a button')
        alerts.confirmTheAlert()
    })

    it("Verify second alert button that waits 5 seconds to display alert", () => {

        alerts.clickOnSecondAlertBtn()
        // Static wait to get the alert
        cy.wait(5000)
        alerts.verifyAlertMsg('This alert appeared after 5 seconds')
        alerts.confirmTheAlert()
    })

    it("Verify third alert btn by accepting the alert", () => {
       
       // Accpet the alert first
        cy.handleException()
        alerts.clickOnThirdAlertBtn()
        alerts.verifyAlertMsg('Do you confirm action?')
        alerts.confirmTheAlert()

        //Verify the confirmation message
        alerts.verifyConfirmMsg('You selected Ok')
    })

    it("Verify third alert btn by cancelling the alert", () => {
       
         // Cancel the alert
         alerts.clickOnThirdAlertBtn()
         alerts.verifyAlertMsg('Do you confirm action?')
         alerts.cancelTheAlert()
 
         // Verify the cancellation message
         alerts.verifyConfirmMsg('You selected Cancel')
     })


    it("Verify fourth alert button with prompt message", () => {
        const msg = 'Hello! How are you?'
        const promptStub = () => {
            return msg
        }
        cy.window().then(win => {
            cy.stub(win, 'prompt', promptStub).as('winPrompt')
        })

        alerts.clickOnFourthBtn()
        cy.get('@winPrompt').should('be.calledOnce')
          .and('be.calledWith', 'Please enter your name')

        alerts.verifyProptConfirmationMsg(msg)        
    })
})