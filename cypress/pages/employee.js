const employee = {

    LoginButton: () => cy.get('' , {timeout :1000}),

    //All Employee Locator
    allEmployeesHeaderText: () => cy.get("h4" , {timeout :1000}),
    addEmployeeButton: () => cy.get("[class='btn btn-success mr-2']" , {timeout :1000}),

    //Add Employee Form Locators
    firstNameInputField: () => cy.get("[id='formData.first_name']"  , {timeout :1000}),
    lastNameInputField: () => cy.get( "[id='formData.last_name']", {timeout :1000}),
    emialInputField: () => cy.get("[id='formData.email']" , {timeout :1000}),
    maleRedioButton: () => cy.get('.app-radio-group > label:nth-of-type(1)' , {timeout :1000}),
    femaleRedioButton: () => cy.get('.app-radio-group > label:nth-of-type(2)' , {timeout :1000}),
    otherRedioButton: () => cy.get('.app-radio-group > label:nth-of-type(3)' , {timeout :1000}),
    employeeIDInputField: () => cy.get("[id='formData.employee_id']" , {timeout :1000}),
    departmentDropdown: () => cy.get("[id='formData.department_id']" , {timeout :1000}),
    designationDropdown: () => cy.get("[id='formData.designation_id']" , {timeout :1000}),
    employmentStatusDropdown: () => cy.get("[id='formData.employment_status_id']" , {timeout :1000}),
    roleInputField: () => cy.get('[id="dropdownMenuLink"]' , {timeout :1000}),
    salaryInputField: () => cy.get('[id="formData.salary"]' , {timeout :1000}),
    joiningDateInputField: () => cy.get('div:nth-of-type(8) .form-control' , {timeout :1000}),
    addButton: () => cy.get('[class="btn text-center btn-primary"]' , {timeout :1000}),
    cancelButton: () => cy.get('[class="btn btn-secondary mr-2"]' , {timeout :1000}),






    

    






    };
    module.exports = employee;
    