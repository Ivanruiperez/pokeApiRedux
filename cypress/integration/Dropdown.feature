Feature: Dropdown
    Scenario: Select a pokedex generation
        Given Show pokedex of the selected generation
        When We click on input select, show the dropdown
        Then If we click on a generation option, show the pokedex of that generation
        And The sprites of the initial pokemon are shown
        