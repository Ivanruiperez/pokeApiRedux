/* eslint-disable no-undef */
import {
  Given, When, Then, And,
} from 'cypress-cucumber-preprocessor/steps';

Given('Show all moves can learn', () => {
  cy.visit('http://localhost:3000/detail/charizard');
});

When('We click on a move', () => {
  cy.wait(8000);
  cy.get('.poke-move-list-item').first().click();
});

Then('The modal is opened', () => {
  cy.get('.modal').should('be.visible');
});

And('We click on close button the modal is closed', () => {
  cy.get('.modal-close').click();
});
