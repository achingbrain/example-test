@submission
Feature: Create and post a new submission feature
  As a user of this site
  I would like to visit the submission list page

  Background:
    Given I am signed in
    Then I should eventually be on the submission list page

  Scenario: Land on home page as a visitor
    When I visit the submission list page
    And I click submit new paper
    Then I should eventually be on the submission new page
    When I click file help
    Then I expect the file help dialog to be visible
    When I drag a word document into the dropzone
    Then I expect the file list item to be visible
    When I select the manuscript option
    Then I expect the file option to equal "3136"
    And I click continue
    And I select manuscript in the side panel
    Then I expect the title to be entered
    And I expect the abstract to be entered
    And I expect the references to be empty
    When I type "abcd" into the references
    Then I expect the references to equal "abcd"
    When I select authors in the side panel
    Then I expect to see myself as the corresponding author
    And I expect to see additional co-authors in the author list
    When I select subject areas in the side panel
    Then multiple keywords are displayed in the keywords list
