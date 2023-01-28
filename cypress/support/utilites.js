import { faker } from '@faker-js/faker';
const utilites = {
    logOutMenu: ["My profile", "Notifications", "Settings", "Log out"],

    email: "sqa@gain.media",
    password: "candidate@QA00", 
    dummytext : "Cypress test ongoing",
    elementVisibleText : "Element is visible ",
    buttonPress : "Button press Successfully ",

    dummyfirstname: faker.name.firstName(),
    dummylastname: faker.name.lastName(),
    dummyemail :  faker.internet.email(),
  
  };
  
  export default utilites;