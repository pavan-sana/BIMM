/// <reference types="cypress"/>

import {navigate} from '../../support/navigate'
import { browserWindows } from '../../support/alertFramesWindows/browserWindows';

describe('Verify Browser Windows tab', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    /**
	 * GIVEN A demoQA application with Alerts frames and Windows tab
	 * WHEN user want to verify the Browser new tab button
	 * AND navigate to BrowserWindows tab
     * AND click on the button
	 * THEN clicking on button successfully open new tab with message
     * 
	 * @author Pavan_Sana
	 * Story: https://QA-021
	 */
    it("Verify the Browser new tab button", () => {
        cy.log('https://QA-021')
        navigate.toAlertsFrameWindowsTab()
        cy.handleException()
        navigate.tobrowserWindows()

        cy.window().then((win) => {
            cy.stub(win, 'open', url => {
            win.location.href = 'https://demoqa.com/sample'}).as('newTab')
        })

        browserWindows.clickOnNewTabBtn()
        cy.get('@newTab').then((newTab) => {
            // Verify the new URL is called or not
            cy.wrap(newTab).should("be.called")
            // Verify New Url
            browserWindows.verifyNewUrl()
            // Very the yext on the page
            browserWindows.verifyText()
        });
    })

    /**
	 * GIVEN A demoQA application with Alerts frames and Windows tab
	 * WHEN user want to verify the Browser new window button
	 * AND navigate to BrowserWindows tab
     * AND click on the button
	 * THEN clicking on button successfully open new window with message
     * 
	 * @author Pavan_Sana
	 * Story: https://QA-022
	 */
    it("Verify Browser new Window button", () => {
        
        cy.log('https://QA-022')
        navigate.toAlertsFrameWindowsTab()
        cy.handleException()
        navigate.tobrowserWindows()

        cy.window().then((win) => {
            cy.stub(win, 'open', url => {
            win.location.href = 'https://demoqa.com/sample'}).as('newWin')
        })

        browserWindows.clickOnNewTabBtn()
        cy.get('@newWin').then((newWindow) => {
            // Verify the new URL is called or not
            cy.wrap(newWindow).should("be.called")
            // Verify new URL
            browserWindows.verifyNewUrl()
            // Very the yext on the page
            browserWindows.verifyWindowText()
            });
    })

    /**
	 * GIVEN A demoQA application with Alerts frames and Windows tab
	 * WHEN user want to verify the Browser new window button
	 * AND navigate to BrowserWindows tab
     * AND click on the button
	 * THEN clicking on button successfully open new window with message
     * 
	 * @author Pavan_Sana
	 * Story: https://QA-023
	 */
    it('Verify Browser new Window message button', () => {
        cy.log('https://QA-023')
        navigate.toAlertsFrameWindowsTab()
        cy.handleException()
        navigate.tobrowserWindows()
        cy.window().then((win) => {
            cy.stub(win, 'open').as('windowOpen');
          });
        
          // Click the button that triggers the blank window popup
          browserWindows.clickOnNewWindowMsgBtn()
        
          // Assert that the window.open function was called
          cy.get('@windowOpen').should('be.called');
    })
})