/// <reference types="cypress"/>

export class ModalDialog {

    // Click on smal dialog button
    clickOnSmallDialog(){
        cy.get('#showSmallModal').click()   
    }

    // Click on large dialog button
    clickOnLargeDialog(){
        cy.get('#showLargeModal').click() 
    }

    // Verify dialog box is displayed or not
    verifyModalDialogDisplay(){
        cy.get('.modal-content').should('be.visible')
    }

    // verify dialog box message
    verifyDialogBoxMsg(msg){
        cy.get('.modal-content').should('contain', msg)
    }

    //Click on close button on small dialog box
    clickOnSmallDialogCloseBtn(){
        cy.get('#closeSmallModal').click()  
    }

    //Click on close button on large dialog box
    clickOnLargeDialogCloseBtn(){
        cy.get('#closeLargeModal').click()  
    }

    // verify dialog box is closed or not
    confirmDialogBoxClosed(){
        cy.get('.modal-content').should('not.exist')
    }

    // Click on close icon
    clickOnCloseIcon(){
        cy.get('button.close').click()
    }
}
export const modalDialog = new ModalDialog()