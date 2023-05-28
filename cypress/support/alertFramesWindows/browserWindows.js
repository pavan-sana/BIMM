export class BrowserWindows{

    // Click on the New tab button
    clickOnNewTabBtn(){
        cy.get('#tabButton').click()
    }

    // Verify the new URL
    verifyNewUrl(){
        cy.url().should('include', '/sample')
    }

    // Verify the text present on the new tab
    verifyText(){
        cy.get('#sampleHeading').should('have.text', 'This is a sample page')
    }

    // Click on the new window button
    clickOnNewWindowBtn(){
        cy.get('#windowButton').click()
    }

    // Verify the new window text
    verifyWindowText(){
        cy.get('#sampleHeading').should('have.text', 'This is a sample page')
    }

    // Click on the new window message button
    clickOnNewWindowMsgBtn(){
        cy.get('#messageWindowButton').click()
    }


    // Verify the new window message text 
    verifyWindowMsgText(){
        cy.get('.body').should('have.text', 'Knowledge increases by sharing but not by saving. Please share this website with your friends and in your organization.'
        )
    }
}

export const browserWindows = new BrowserWindows()