/// <reference types="Cypress"/>

describe('temp', () => {
    it ('Side by Side Navigation', () => {
        // cy.visit('https://G9E9E0134DB0B18-ADB03.adb.us-ashburn-1.oraclecloudapps.com/ords/apex');
        // cy.get('#F4550_P1_COMPANY').type('manager_workspace');
        // cy.get('#F4550_P1_USERNAME').type('manager_user');
        // cy.get('#F4550_P1_PASSWORD').type('Mnpass1234567');
        // cy.get('.a-Login-buttons').click();
        cy.visit('https://g9e9e0134db0b18-adb03.adb.us-ashburn-1.oraclecloudapps.com/ords/r/manager_workspace/sample-master-detail/login_desktop')
        cy.get('#P101_USERNAME').type('manager_user');
        cy.get('#P101_PASSWORD').type('Mnpass1234567');
        cy.get('.t-Login-buttons').click();

        cy.contains('a.t-Card-wrap', 'Side by Side').click();
        cy.get('#L27410029129634237917').click();
        cy.get('.a-Menu-label').contains('Log Out').click();
    })

    it ('Stacked with Sub Detail - Navigation', () => {
        // cy.visit('https://G9E9E0134DB0B18-ADB03.adb.us-ashburn-1.oraclecloudapps.com/ords/apex');
        // cy.get('#F4550_P1_COMPANY').type('manager_workspace');
        // cy.get('#F4550_P1_USERNAME').type('manager_user');
        // cy.get('#F4550_P1_PASSWORD').type('Mnpass1234567');
        // cy.get('.a-Login-buttons').click();
        cy.visit('https://g9e9e0134db0b18-adb03.adb.us-ashburn-1.oraclecloudapps.com/ords/r/manager_workspace/sample-master-detail/login_desktop')
        cy.get('#P101_USERNAME').type('manager_user');
        cy.get('#P101_PASSWORD').type('Mnpass1234567');
        cy.get('.t-Login-buttons').click();

        cy.contains('h3.t-Card-title', 'Stacked with Sub Detail').click();
        cy.get('#L27410029129634237917').click();
        cy.get('.a-Menu-label').contains('Log Out').click();
    })

    it ('Stacked - Navigation', () => {
        
        // cy.visit('https://G9E9E0134DB0B18-ADB03.adb.us-ashburn-1.oraclecloudapps.com/ords/apex');
        // cy.get('#F4550_P1_COMPANY').type('manager_workspace');
        // cy.get('#F4550_P1_USERNAME').type('manager_user');
        // cy.get('#F4550_P1_PASSWORD').type('Mnpass1234567');
        // cy.get('.a-Login-buttons').click();
        cy.visit('https://g9e9e0134db0b18-adb03.adb.us-ashburn-1.oraclecloudapps.com/ords/r/manager_workspace/sample-master-detail/login_desktop')
        cy.get('#P101_USERNAME').type('manager_user');
        cy.get('#P101_PASSWORD').type('Mnpass1234567');
        cy.get('.t-Login-buttons').click();

        cy.contains('h3.t-Card-title', 'Stacked').click();
        cy.get('#L27410029129634237917').click();
        cy.get('.a-Menu-label').contains('Log Out').click();
    })
});