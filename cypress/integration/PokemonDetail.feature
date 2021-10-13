Feature: PokemonDetail
    Scenario: Pokemon details view can be shown
        Given Show detail of the selected pokemon
        When We click on Pokemon of the pokemon list
        Then All the details are shown
        And Pokemon types are shown
        And Pokemon base stats are shown