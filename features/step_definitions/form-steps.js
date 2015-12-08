'use strict';

require('chai').should();
var cucumber_partner = require('@bsurgison/cucumber-partner');
var helpers = require('../support/helpers');

module.exports = function () {

    this.World = cucumber_partner.World; // overwrite default World constructor

    this.setDefaultTimeout(60 * 1000);

    this.When(/^I am signed out$/, function () {
        return this.visit('signOut')
    });

    this.When(/^I am signed in$/, {timeout: 10000}, function () {
        return this.visit('signOut').then(() => {
            /* will redirect to sign-in */
            this.pageObject.route.path.should.equal('/sign-in');

            var user = helpers.getCurrentUser();
            this.pageObject.get('username').sendKeys(user.email);
            this.pageObject.get('password').sendKeys(user.password);

            return this.pageObject.get('submit')
                .click()
        })
    });

    this.When(/^I visit the (.*) page$/, function (page) {
        return this.visit(page)
    });

    this.Then(/^I should eventually be on the (.*) page$/, function (page) {
        console.log(object.should)
            var expectedRoute = this.getRoute(page);
        route.should.be.ok;

        //this.pageObject.route.path.should.deep.equal(route.path);
        this.pageObject.route.path.should.equal(expectedRoute.path);
    });

    this.Then(/^I expect the page to not contain the (.*)$/, function (id) {
        return this.pageObject.expectPageToNotContain(id);
    });

    this.Then(/^I expect the page to contain the (.*)$/, function (id) {
        return this.pageObject.expectPageToContain(id);
    });

    this.When(/^I am using a mobile/, function () {
        return this.setSize(480, 320);
    });

    this.When(/^I am using a desktop$/, function (next) {
        return this.setSize(1024, 768);
    });

    this.When(/^I click (.*)$/, function (link, next) {
        this.pageObject
            .get(link)
            .click()
            .then(() => setTimeout(next, 850)); // timeout to allow any animation
    });

    this.Then(/^I drag a word document into the dropzone$/, function (next) {
        this.pageObject.upload('test.docx', next);
    });

    this.When(/^I select a word document into the dropzone$/, function (next) {
        this.pageObject.get('xxx').value = xxx;
    });

};
