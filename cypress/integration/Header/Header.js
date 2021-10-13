/* eslint-disable no-undef */
import {
  Given, When, Then, And,
} from 'cypress-cucumber-preprocessor/steps';

Given('Header component shows SearchInput and Dropdown components', () => {
  cy.visit('http://localhost:3000/list');
});

When('We are in PokemonList component it shows Header component', () => {
  cy.get('.header-container').should('be.visible');
});

Then('Header component shows SearchInput component', () => {
  cy.get('.filter-box').should('be.visible');
});

And('Header component shows Dropdown component', () => {
  cy.get('.select-box').should('be.visible');
});
