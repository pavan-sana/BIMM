/// <reference types="cypress"/>
import 'cypress-iframe';

export class NestedFrames {

    //Verify text inside parent frame

    // Make sure to Install the cypress-iframe plugin and import
    verifyParentFrameText(text){
        cy.iframe("#frame1").should('contain', text);

    }

    //Verify text inside iframe 2

    // Make sure to Install the cypress-iframe plugin and import
    // Switch to iframe with id "frame1"
    verifyChildFrameText(text){
        cy.iframe("#frame1").within(() => {
            // Switch to the child iframe
            cy.iframe('iframe').within(() => {
              // Assert the content within the child iframe
              cy.contains('Child Iframe').should('exist');
            });

        })

    }

}
export const nestedFrames = new NestedFrames()