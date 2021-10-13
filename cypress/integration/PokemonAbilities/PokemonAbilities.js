/* eslint-disable no-undef */
import {
  Given, When, Then,
} from 'cypress-cucumber-preprocessor/steps';

Given('Show the pokemon abilities and description', () => {
  cy.visit('http://localhost:3000/detail/charizard');
});

When('Mousse hover on ability', () => {
  cy.get('.poke-ability-item').first().trigger('mouseover');
});

Then('Show the ability description', () => {
  cy.get('.poke-ability-tooltip').should('be.visible');
});
