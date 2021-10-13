/* eslint-disable no-undef */
import {
  Given, When, Then, And,
} from 'cypress-cucumber-preprocessor/steps';

Given('Show pokedex of the selected generation', () => {
  cy.visit('http://localhost:3000/list');
});

When('We click on input select, show the dropdown', () => {
  cy.get('.select').click();
});

Then('If we click on a generation option, show the pokedex of that generation', () => {
  cy.get('.select-dropdown-item').first().should('be.visible').click();
  cy.wait(8000);
  cy.get('.listItem').last().contains('mew');
});

And('The sprites of the initial pokemon are shown', () => {
  cy.get('.sprites').should('be.visible');
});
