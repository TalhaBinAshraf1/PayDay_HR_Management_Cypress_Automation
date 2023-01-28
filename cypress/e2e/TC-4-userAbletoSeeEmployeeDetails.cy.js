
/// <reference types="cypress" />

import employee from '../pages/employee';
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
        dashboard.employeeMenu().should("be.visible").click();
  
        dashboard.allEmployeeOption()
        .should("be.visible")
        .should("include.text", "All Employees")
        .click();
        cy.wait(5000);

        //Validating View Details Button
        if(employee.viewDetailsButton().should("be.visible")){
            employee.viewDetailsButton().should("include.text","View details").click();
            cy.log(utilites.buttonPress)
          }else {
            cy.visit("/");
            }

        employee.employeeDetailsText()
        .should("be.visible")
        .should("include.text","Employee Details");

    
        });

    });



