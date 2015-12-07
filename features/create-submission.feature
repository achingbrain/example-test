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
    Then I drag a word document into the dropzone
    And I select the manuscript option from the last file type dropdown
    And I wait until the save notice displays "All changes saved"
    And I click continue
    And I wait for extraction to complete
    And I select manuscript in the side panel
    Then I expect the title not to be empty
    And I expect the abstract not to be empty
    When I select authors in the side panel
    Then I expect to see myself as the corresponding author
    And I expect to see additional co-authors in the author list
    When I select subject areas in the side panel
    Then multiple keywords are displayed in the keywords list
