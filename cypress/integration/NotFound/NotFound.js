/* eslint-disable no-undef */
import {
  Given, When, Then,
} from 'cypress-cucumber-preprocessor/steps';

Given('Show not found component', () => {
  cy.visit('http://localhost:3000/aaaaa');
  cy.contains('Page not found');
});

When('Click on back button', () => {
  cy.get('.go-back-launch').click();
});

Then('We are redirected to launch page', () => {
  cy.contains('Pokedex');
});
