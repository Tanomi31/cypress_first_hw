/// <reference types="cypress" />

describe('Sign up', () => {
  it('Registration user', () => {
   const randomNumber = Math.floor(Math.random(1000) * 1000);
  const userName = 'username' + randomNumber;
  const usEmail = userName + '@mail.com'
    
    cy.visit('https://react-redux.realworld.io');
   
    cy.contains('a', 'Sign up')
    .click();

    cy.get('[placeholder="Username"]')
      .type(userName)

    cy.get('[placeholder="Email"]')
      .type(usEmail)

    cy.get('[placeholder="Password"]')
      .type('Qwert1234!');

    cy.contains('.btn', 'Sign in')
      .click();

      cy.get(':nth-child(4) > .nav-link')
      .should('contain', userName);

  });
});

const { generateUser } = require("../support/generate");

describe('Your Second Test', () => {
  it('Sign up with faker', () => {
    //const user = generateUser();
    const { email, password, username } = generateUser();
    
    cy.visit('https://react-redux.realworld.io');
   
    cy.contains('a', 'Sign up')
    .click();

    cy.get('[placeholder="Username"]')
      .type(username)

    cy.get('[placeholder="Email"]')
      .type(email)

    cy.get('[placeholder="Password"]')
      .type(password);

    cy.contains('.btn', 'Sign in')
      .click();

      cy.get(':nth-child(4) > .nav-link')
      .should('contain', username);

  });
});
