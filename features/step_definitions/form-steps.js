'use strict';

var chai = require('chai');
var chaiAsPromised = require("chai-as-promised");
var Promise = require('bluebird');
var cucumber_partner = require('cucumber-partner');
var helpers = require('../support/helpers');
var expect = chai.expect;

chai.use(chaiAsPromised);

module.exports = function () {

    this.World = cucumber_partner.World; // overwrite default World constructor

    this.setDefaultTimeout(3600000);

    this.When(/^I am signed in$/, function (next) {
        var user = helpers.getCurrentUser();
        this.visit('signOut') // will redirect to sign-in
            .then(() => this.sendKeys('username', user.email))
            .then(() => this.sendKeys('password', user.password))
            .then(() => this.click('submit'))
            .then(next);
    });

    this.When(/^I visit the (.*) page$/, function (page, next) {
        this.visit(page)
            .then(next);
    });

    this.Then(/^I should eventually be on the (.*) page$/, function (page, next) {
        this.whenPageIs(page, 10000)
            .then(next);
    });

    this.When(/^I am using a mobile/, function (next) {
        this.setSize(480, 320);
        next();
    });

    this.When(/^I am using a desktop$/, function (next) {
        this.setSize(1024, 768);
        next();
    });

    this.When(/^I click (.*)$/, function (id, next) {
        this.click(id)
            .then(next)
            .catch(next);
    });

    this.Then(/^I drag a word document into the dropzone$/, function (next) {
        helpers.upload('test.docx', 'fileInput')
            .then(next)
            .catch(next);
    });

    this.Then(/^I select the ([^"]*) option$/, function (filetype, next) {
        this.click(filetype + 'Option')
            .then(next)
            .catch(next);
    });

    this.Then(/^I select ([^"]*) in the side panel/, function (menuLink, next) {
        this.click(menuLink)
            .then(next)
            .catch(next);
    });

    this.When(/^I type "(.*)" into the (.*)$/, function (text, id, next) {
        this.sendKeys(id, text)
            .then(next)
            .catch(next);

    });

    this.Then(/^I expect the (.*) to be empty$/, function (id, next) {
        this.getVal(id)
            .then(val => {
                expect(!!(val + '')).to.equal(false, `"${id}" should be empty but contains "${val}"`);
                next();
            })
            .catch(next)
    });

    this.Then(/^I expect the (.*) to be entered$/, function (id, next) {
        this.getVal(id)
            .then(val => {
                expect(!!(val + '')).to.equal(true, `"${id}" expects a value`);
                next();
            })
            .catch(next)
    });

    this.Then(/^I expect the (.*) to equal "(.*)"$/, function (id, expectedVal, next) {
        this.getVal(id)
            .then(val => {
                expect(val + '').to.equal(expectedVal);
                next();
            })
            .catch(next)
    });

    this.Then(/^I expect the (.*) to exist$/, function (id, next) {
        this.find(id)
            .then(() => next())
    });

    this.Then(/^I expect the (.*) to be visible/, function (id, next) {
        this.whenVisible(id)
            .then(() => next())
    });

};