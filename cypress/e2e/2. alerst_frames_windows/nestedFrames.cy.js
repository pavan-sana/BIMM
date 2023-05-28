/// <reference types ='cypress' />

import {navigate} from '../../support/navigate'
import {nestedFrames} from '../../support/alertFramesWindows/nestedFrames'



describe('Verify Nested frames tab', ()=>{
    beforeEach(() => {
        cy.visit('/')  
    })

    /**
	 * GIVEN A demoQA application with Alerts frames and Windows tab
	 * WHEN user want to verify the parent iframe in the Nested frames tab
	 * AND navigate to Nested frame tab
     * AND switch to parent frame
	 * THEN verify the text inside the parent frame
     * 
	 * @author Pavan_Sana
	 * Story: https://QA-051
	 */
    it("Verify parent frame and assert its content", () => {
    navigate.toAlertsFrameWindowsTab()
    cy.handleException()
    navigate.toNestedFrames()
    // Make sure to Install the cypress-iframe plugin and import
    // Switch to iframe with id "frame1"
    nestedFrames.verifyParentFrameText('Parent frame')
    })

     /**
	 * GIVEN A demoQA application with Alerts frames and Windows tab
	 * WHEN user want to verify the child iframe in the Nested frames tab
	 * AND navigate to Nested frame tab
     * AND switch to parent frame
     * AND switch to child frame through parent frame
	 * THEN verify the text inside the child frame
     * 
	 * @author Pavan_Sana
	 * Story: https://QA-051
	 */

    it("verify child frame and assert its content", () => {
    navigate.toAlertsFrameWindowsTab()
    cy.handleException()
    navigate.toNestedFrames()
    // Make sure to Install the cypress-iframe plugin and import
    // Switch to iframe with id "frame1"
    nestedFrames.verifyChildFrameText('Child Iframe')
    })
})