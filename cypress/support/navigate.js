export class Navigate {

    //Navigate to Forms tab
    toForms(){
        cy.contains('Forms').click()
    }

    //Navigate to Alerts, Frame & Windows tab
    toAlertsFrameWindowsTab(){
        cy.contains('Alerts, Frame & Windows').click()
    }

    //Navigate to Practice form
    toPraticeForm(){
        cy.contains('Practice Form').click()
    }

     //Navigate to Browser Windows
     tobrowserWindows(){
        cy.contains('Browser Windows').click()
    }

     //Navigate to Alerts
     toAlerts(){
        cy.get(':nth-child(3) > .element-list > .menu-list > #item-1').click()
    }

     //Navigate to Frames
     toFrames(){
        cy.contains('Frames').click()
    }
     //Navigate to Nested Frames
     toNestedFrames(){
        cy.contains('Nested Frames').click()
    }
     //Navigate to Modal Dialogs
     toModalDialogs(){
        cy.contains('Modal Dialogs').click()
    }


}

export const navigate = new Navigate();


