'use strict';

require('chai').should();
var cucumber_partner = require('@bsurgison/cucumber-partner');
var helpers = require('../support/helpers');

module.exports = function () {

    this.World = cucumber_partner.World; // overwrite default World constructor

    this.setDefaultTimeout(60 * 1000);

    this.When(/^I am signed in$/,
        function (next) {
            this.visit('signOut') // will redirect to sign-in
                .then(() => {
                    var user = helpers.getCurrentUser();
                    this.currentPage.get('username').sendKeys(user.email);
                    this.currentPage.get('password').sendKeys(user.password);
                    this.currentPage.get('submit').click().then(next);
                });
        }
    );

    this.When(/^I visit the (.*) page$/,
        function (page, next) {
            this.visit(page)
                .then(() => next());
        }
    );

    this.Then(/^I should eventually be on the (.*) page$/,
        function (page, next) {
            this.currentPage.expectPageToEventuallyBe(page, next);
        }
    );

    this.Then(/^I expect the page to not contain the (.*)$/,
        function (id, next) {
            this.currentPage.expectPageToNotContain(id, next);
        }
    );

    this.Then(/^I expect the page to contain the (.*)$/,
        function (id, next) {
            this.currentPage.expectPageToContain(id, next);
        }
    );

    this.When(/^I am using a mobile/,
        function (next) {
            this.setSize(480, 320);
            next();
        }
    );

    this.When(/^I am using a desktop$/,
        function (next) {
            this.setSize(1024, 768);
            next();
        }
    );

    this.When(/^I click (.*)$/,
        function (id, next) {
            this.currentPage.untilVisible(id)
                .then((el) => el.click()
                    .then(() => setTimeout(next, 450))); // timeout to allow any animation
        }
    );

    this.Then(/^I drag a word document into the dropzone$/,
        function (next) {
            this.currentPage.upload('test.docx', () => setTimeout(next, 2500)); // timeout to allow any animation
        }
    );

    this.Then(/^I select the ([^"]*) option$/,
        function (filetype, next) {
            this.currentPage.untilVisible(filetype + 'Option')
                .then((el) => el.click()
                    .then(next));
        }
    );

    this.Then(/^I select ([^"]*) in the side panel/,
        function (menuLink, next) {
            this.currentPage.untilVisible(menuLink)
                .then((el) => el.click()
                    .then(next));
        }
    );

};