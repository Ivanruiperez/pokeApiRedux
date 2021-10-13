/* eslint-disable no-undef */
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('Launch page shows Pokedex button', () => {
  cy.visit('http://localhost:3000');
  cy.contains('Pokedex');
});

When('We click on Pokedex button', () => {
  cy.get('.pokedexButton').click();
});

Then('We are redirected to PokemonList View', () => {
  cy.get('.pokemon-list-container').should('be.visible');
});
