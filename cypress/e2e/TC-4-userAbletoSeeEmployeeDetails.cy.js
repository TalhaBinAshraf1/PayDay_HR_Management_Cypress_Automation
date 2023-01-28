
/// <reference types="cypress" />

import dashboard from '../pages/dashboard';
import urls from '../support/urls';
import utilites from '../support/utilites';

describe("User Should Able to See Employee Details", () =>{

  beforeEach(() => {
      cy.visit('/');
  });

    it("Navigate to url 'https://www.qa.paydaytest.gainhq.com/hrm/admin/users/login'",() =>{ 

        cy.url().should("equal",urls.loginPage);
        cy.statusCodeValidation(urls.loginPage);
    });

    it("User able to see Employee Details",() =>{ 
        
        cy.login(utilites.email,utilites.password ); 
        cy.wait(3000);
        if(dashboard.totalEmployeeNumber().should("be.visible")){
            dashboard.totalEmployeeNumber().should("include.text","Total employees");
            cy.log(utilites.buttonPress)
          }
    
        });

    });



