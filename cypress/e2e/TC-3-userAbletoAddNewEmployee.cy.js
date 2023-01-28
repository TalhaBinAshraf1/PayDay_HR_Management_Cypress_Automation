/// <reference types="cypress" />

import dashboard from '../pages/dashboard';
import employee from '../pages/employee';
import urls from '../support/urls';
import utilites from '../support/utilites';

describe("User Able to Add New Employee", () =>{

  beforeEach(() => {
      cy.visit('/');
  });

    it("Navigate to url 'https://www.qa.paydaytest.gainhq.com/hrm/admin/users/login'",() =>{ 

        cy.url().should("equal",urls.loginPage);
        cy.statusCodeValidation(urls.loginPage);
    });

    it("Employee Menu and Submenu Validation",() =>{

        cy.login(utilites.email,utilites.password );
        dashboard.employeeMenu().should("be.visible").click();
        cy.employeeSubmenuevalidation("All Employees");
        cy.employeeSubmenuevalidation("Designation");
        cy.employeeSubmenuevalidation("Employment Status");
       
    });

    it("User able to add a new employee",() =>{

        cy.login(utilites.email,utilites.password );
        dashboard.employeeMenu().should("be.visible").click();
        dashboard.allEmployeeOption()
            .should("be.visible")
            .should("include.text", "All Employees")
            .click();

        employee.allEmployeesHeaderText()
        .should("be.visible")
        .should("include.text","All Employees");

        employee.addEmployeeButton()
        .should("be.visible")
        .should("include.text","Add Employee")
        .click();
        cy.wait(5000);

        employee.firstNameInputField()
        .should("be.visible")
        .type(utilites.dummyfirstname);

        employee.lastNameInputField()
        .should("be.visible")
        .type(utilites.dummylastname);

        employee.emialInputField()
        .should("be.visible")
        .type(utilites.dummyemail);

        employee.maleRedioButton()
        .should("be.visible")
        .should("not.be.checked")
        .click();

        // employee.employeeIDInputField()
        //  .should("be.visible")
        //  .clear()
        //  .type("EMP-169")

        employee.departmentDropdown()
        .should("be.visible")
        .select("Main Department");

        employee.designationDropdown()
        .should("be.visible")
        .select("Director");

        employee.employmentStatusDropdown()
        .should("be.visible")
        .select("Permanent");

        employee.roleInputField()
        .should("be.visible")
        .click();
        employee.roleTypeField()
        .should("be.visible")
        .type("Manager");
        employee.roleSelect()
        .should("be.visible")
        .click();

        employee.salaryInputField()
         .should("be.visible")
         .clear()
         .type("50000");

         employee.joiningDateInputField()
         .should("be.visible")
         .clear()
         .type("2019-12-26 {enter}"); 

         employee.addButton()
         .should("be.visible")
         .click();

    });

});

