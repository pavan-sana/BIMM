/// <reference types="cypress"/>
import 'cypress-iframe';

export class Frames {

    //Verify text inside iframe 2

    // Make sure to Install the cypress-iframe plugin and import
    // Switch to iframe with id "frame1"
    verifyIframe1Text(text){
        cy.iframe("#frame1").find("h1").should('have.text', text);

    }

    //Verify text inside iframe 2

    // Make sure to Install the cypress-iframe plugin and import
    // Switch to iframe with id "frame1"
    verifyIframe2Text(text){
        cy.iframe("#frame2").find("h1").should('have.text', text);

    }

}
export const frames = new Frames()