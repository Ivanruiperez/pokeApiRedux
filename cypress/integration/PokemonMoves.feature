Feature: PokemonMoves
    Scenario: Shown all the moves the pokemon can learn and modal of move details
        Given Show all moves can learn
        When We click on a move
        Then The modal is opened
        And We click on close button the modal is closed