/// <reference types ='cypress' />

import {navigate} from '../../support/navigate'
import {frames} from '../../support/alertFramesWindows/frames'


const samplePage = 'This is a sample page'
describe('Verify frames tab', ()=>{
    beforeEach(() => {
        cy.visit('/')
        
        
    })
    
    /**
	 * GIVEN A demoQA application with Alerts frames and Windows tab
	 * WHEN user want to verify the first iframe in the frames tab
	 * AND navigate to Frame
     * AND switch to iframe 1
	 * THEN verify the text inside the frame
     * 
	 * @author Pavan_Sana
	 * Story: https://QA-031
	 */
    it("Switch to iframe 1 and assert its content", () => {
        cy.log('https://QA-031')
        navigate.toAlertsFrameWindowsTab()
        cy.handleException()
        navigate.toFrames()
        // Make sure to Install the cypress-iframe plugin and import
        // Switch to iframe with id "frame1"
        frames.verifyIframe1Text(samplePage)
    });

    /**
	 * GIVEN A demoQA application with Alerts frames and Windows tab
	 * WHEN user want to verify the second iframe in the frames tab
	 * AND navigate to Frame
     * AND switch to iframe 2
	 * THEN verify the text inside the frame
     * 
	 * @author Pavan_Sana
	 * Story: https://QA-032
	 */
    it("Switch to iframe 2 and assert its content", () => {
        cy.log('https://QA-032')
        navigate.toAlertsFrameWindowsTab()
        cy.handleException()
        navigate.toFrames()
        // Make sure to Install the cypress-iframe plugin and import
        // Switch to iframe with id "frame1"
        frames.verifyIframe2Text(samplePage)
    });

})