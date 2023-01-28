
// ✅ URLs Status code validation ✅

Cypress.Commands.add("statusCodeValidation",(expectedUrl) => {

  cy.request(expectedUrl).should(
    (response) => {
      expect(response.status).to.eq(200);
      expect(response.status).not.to.eq(400);
    }
    );
});


// ✅ Login Custom Command ✅

Cypress.Commands.add("login", (email, password) => {
    //adding a new command named login
    cy.get('[type="email"]').clear();
    cy.get('[type="email"]').type(email);
    cy.get("[class=form-group-with-icon]").clear();
    cy.get("[class=form-group-with-icon]").type(password);
    cy.get('.btn.btn-block.btn-primary.d-inline-flex.text-center').click();
  });

  
//  ✅ Employee Menu Validation ✅

Cypress.Commands.add("employeeSubmenuevalidation",(menuText) => {
  cy.get("div#employee > ul > li > .nav-link")
    .should("be.visible" ,menuText )
    .should("contain.text", menuText)
    .log(menuText + " Available in page");
});


// //  ✅ Add Employee Form's Custom Commands ✅

// Cypress.Commands.add("departmentDropdown",(menuText) => {
//   cy.get("div#employee > ul > li > .nav-link")
//     .should("be.visible" ,menuText )
//     .should("contain.text", menuText)
//     .log(menuText + " Available in page");
// });

// Cypress.Commands.add("designationDropdown",(menuText) => {
//   cy.get("div#employee > ul > li > .nav-link")
//     .should("be.visible" ,menuText )
//     .should("contain.text", menuText)
//     .log(menuText + " Available in page");
// });

// Cypress.Commands.add("employeeStatusDropdown",(menuText) => {
//   cy.get("div#employee > ul > li > .nav-link")
//     .should("be.visible" ,menuText )
//     .should("contain.text", menuText)
//     .log(menuText + " Available in page");
// });