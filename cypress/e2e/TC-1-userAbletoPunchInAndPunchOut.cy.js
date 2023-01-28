/// <reference types="cypress" />

import loginpage from '../pages/loginPage';
import dashboard from '../pages/dashboard';
import urls from '../support/urls';
import utilites from '../support/utilites';

describe("User Should Able to Punch In and Punch Out", () =>{

  beforeEach(() => {
      cy.visit('/');
  });

    it("Navigate to url 'https://www.qa.paydaytest.gainhq.com/hrm/admin/users/login'",() =>{ 
      cy.url().should("equal",urls.loginPage);
      cy.statusCodeValidation(urls.loginPage);

});
    
    it("Log In to the PayDay Application ",() =>{

      loginpage.loginButton().should("be.visible");
      cy.login(utilites.email,utilites.password );

 });

    it("Validating Punch in Button  ",() =>{

    cy.login(utilites.email,utilites.password ); 
    cy.wait(3000); 

    const punchInButton = dashboard.punchinButton();
    if (punchInButton.should("be.visible")
    .should("have.css", "background-color", "rgb(70, 195, 95)")
    .should("have.css","border-color","rgb(70, 195, 95)")
    .should("have.css", "font-size", "13.9876px")) {
    punchInButton.should("include.text","Punch In")
    .and("have.length","1");
    cy.log(punchInButton + utilites.elementVisibleText);
    } else {
    cy.visit("/");
    }

});

    it("User Able to Punch In and Punch Out  ",() =>{

      cy.login(utilites.email,utilites.password )
      cy.wait(5000);
      dashboard.punchinButton().should("be.visible").click();
      cy.wait(5000);
      dashboard.punchinTextBox().should("be.visible").type(utilites.dummytext);
      if(dashboard.punchinSubmitButton().should("be.visible")){
        dashboard.punchinSubmitButton().click();
        cy.log(utilites.buttonPress)
      }

      //Validationg Punch Out Button
      cy.wait(5000);
      const punchOutButton = dashboard.punchoutButton();
      if (punchOutButton.should("be.visible")
      .should("have.css", "background-color", "rgb(252, 101, 16)")
      .should("have.css","border-color","rgb(252, 101, 16)")
      .should("have.css", "font-size", "13.9876px")) {
      punchOutButton.should("include.text","Punch Out")
      .and("have.length","1");
      cy.log(punchOutButton + utilites.elementVisibleText);
      } else {
      cy.visit("/");
      }

      //User Able to Punch Out
      cy.wait(5000);
      dashboard.punchoutButton().should("be.visible").click();
      cy.wait(5000);
      dashboard.punchoutTextBox().should("be.visible").type(utilites.dummytext);
      if(dashboard.punchoutSubmitButton().should("be.visible")){
        dashboard.punchoutSubmitButton().click();
        cy.log(utilites.buttonPress)
      }else {
        cy.visit("/");
        }

    });

    
});