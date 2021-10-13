Feature: SearchInput
    Scenario: Search a pokemon by name
        Given Show search input and filter a pokemon by name
        When We click on filter button shows the input
        Then The input is opened
        And If we write a pokemon name, it filters all those that include
        And If we write a wrong name, it shows FilterNotFound component