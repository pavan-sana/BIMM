/// <reference types="cypress"/>

import { modalDialog } from '../../support/alertFramesWindows/modalDialogs'
import {navigate} from '../../support/navigate'


describe('Verify Modal Dialogs tab', ()=>{
    beforeEach(() => {
        cy.visit('/')
        navigate.toAlertsFrameWindowsTab()
        navigate.toModalDialogs()
        cy.handleException()


    })
    
    /**
	 * GIVEN A demoQA application with Alerts frames and Windows tab
	 * WHEN user want to verify the small dialog box inside modal dialog box tab
	 * AND navigate to Modal Dialog tab
	 * THEN clicking the small dialog button successfull display the message
     * 
	 * @author Pavan_Sana
	 * Story: https://QA-041
	 */
    it("Verify small Modal Dialog ", () => {
        cy.log('https://QA-041')
        const msg =  'This is a small modal. It has very less content'

        modalDialog.clickOnSmallDialog()
        //verify dialog message
        modalDialog.verifyDialogBoxMsg(msg)
        //close dialog using close button
        modalDialog.clickOnSmallDialogCloseBtn()

        modalDialog.clickOnSmallDialog()
        // Now close the dialog using close icon
        modalDialog.clickOnCloseIcon()
    })

    /**
	 * GIVEN A demoQA application with Alerts frames and Windows tab
	 * WHEN user want to verify the large dialog box inside modal dialog box tab
	 * AND navigate to Modal Dialog tab
	 * THEN clicking the large dialog button successfull display the message
     * 
	 * @author Pavan_Sana
	 * Story: https://QA-042
	 */
    it("Verify Large Modal Dialog", () => {
        cy.log('https://QA-042')
        const msg =  'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
    
        modalDialog.clickOnLargeDialog()
        //verify dialog message
        modalDialog.verifyDialogBoxMsg(msg)
        //close dialog using close button
        modalDialog.clickOnLargeDialogCloseBtn()

        modalDialog.clickOnLargeDialog()
        // Now close the dialog using close icon
        modalDialog.clickOnCloseIcon()
    })

})