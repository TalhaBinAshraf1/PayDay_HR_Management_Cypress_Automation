const dashboard = {

    //Punch In Button Locators
    punchinButton: () => cy.get(".align-items-center.d-flex > .btn.btn-success" , {timeout :1000}),
    punchinTextBox: () => cy.get("textarea#description" , {timeout :1000}),
    punchinSubmitButton: () => cy.get("[class='w-100']" , {timeout :1000}),

    //Punch Out Button Locators
    punchoutButton: () => cy.get(".btn.btn-warning" , {timeout :1000}),
    punchoutTextBox: () => cy.get("textarea#description" , {timeout :1000}),
    punchoutSubmitButton: () => cy.get(".btn.btn-warning.text-center" , {timeout :1000}),
   
    //Employee Locators
    totalEmployeeNumber: () => cy.get(".mb-primary.row > div:nth-of-type(1)" , {timeout :1000}),
    employeeMenu: () => cy.get("nav#sidebar > ul > li:nth-of-type(3) > .nav-link" , {timeout :1000}),
    allEmployeeOption: () => cy.get("div#employee > ul > li:nth-of-type(1) > .nav-link" , {timeout :1000}),
    

    };
    module.exports = dashboard;
    