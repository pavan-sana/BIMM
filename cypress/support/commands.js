
Cypress.Commands.add('generateRandomEmail', () =>{
        const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'
        const domains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com']
        const randomLength = Math.floor(Math.random() * 10) + 5; // Random length between 5 and 14
      
        let email = ''
      
        // Generate random characters for the email username
        for (let i = 0; i < randomLength; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length)
          email += characters[randomIndex]
        }
      
        // Append the domain to complete the email address
        const randomDomainIndex = Math.floor(Math.random() * domains.length);
        email += '@' + domains[randomDomainIndex]
        return email  
})

Cypress.Commands.add('generateRandomString',(length)=> {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let randomString = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters[randomIndex];
    }
  
    return randomString;
})

Cypress.Commands.add('generateRandomPhoneNumber',() => {
    const phoneNumber = Math.floor(Math.random() * 9000000000) + 1000000000;
    return phoneNumber;
})

Cypress.Commands.add('handleException', () =>{
    return Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false;
      })
})

  
  