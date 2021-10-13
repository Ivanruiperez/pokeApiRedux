/* eslint-disable no-undef */
import {
  Given, When, Then, And,
} from 'cypress-cucumber-preprocessor/steps';

const PokemonDetailTest = 'charizard';

Given('Show detail of the selected pokemon', () => {
  cy.visit('http://localhost:3000/list');
});

When('We click on Pokemon of the pokemon list', () => {
  cy.get('.listItem').contains(PokemonDetailTest).click();
});

Then('All the details are shown', () => {
  cy.get('.poke-detail-section').contains(PokemonDetailTest);
  cy.get('.sprite').should('be.visible');
});

And('Pokemon types are shown', () => {
  cy.get('.poke-types').first().contains('fire');
  cy.get('.poke-types').last().contains('flying');
});

And('Pokemon base stats are shown', () => {
  cy.get('.poke-stats-container').contains('Base Stats and Abilities');
});
