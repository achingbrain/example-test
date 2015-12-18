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
                    this.sendKeys('username', user.email)
                        .then(() => this.sendKeys('password', user.password)
                            .then(() => this.click('submit').then(next)));
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
            this.waitForPage(page, 10000)
                .then(next)
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
            this.click(id)
                .then(next);
        }
    );

    this.Then(/^I drag a word document into the dropzone$/,
        function (next) {
            helpers.upload('test.docx', 'fileInput')
                .then(next);
        }
    );

    this.Then(/^I select the ([^"]*) option$/,
        function (filetype, next) {
            this.click(filetype + 'Option')
                .then(next);
        }
    );

    this.Then(/^I select ([^"]*) in the side panel/,
        function (menuLink, next) {
            this.click(menuLink)
                .then(next);
        }
    );

    this.When(/^I type "(.*)" into the (.*)$/,
        function (text, id, next) {
            this.sendKeys(id, text)
                .then(next)
        }
    );

};