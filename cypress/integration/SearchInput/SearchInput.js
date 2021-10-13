/* eslint-disable no-undef */
import {
  Given, When, Then, And,
} from 'cypress-cucumber-preprocessor/steps';

const filterName = 'charizard';
const wrongFilterName = 'charrrr';

Given('Show search input and filter a pokemon by name', () => {
  cy.visit('http://localhost:3000/list');
});

When('We click on filter button shows the input', () => {
  cy.get('.filterButton').click();
});

Then('The input is opened', () => {
  cy.get('.filter-input-box').should('be.visible');
});

And('If we write a pokemon name, it filters all those that include', () => {
  cy.get('.filter-input').type(filterName);
  cy.get('.listItem').contains(filterName);
});

And('If we write a wrong name, it shows FilterNotFound component', () => {
  cy.get('.filter-input').clear().type(wrongFilterName);
  cy.get('.filter-notfound-box').contains('There is no pokemon with this name...');
});
