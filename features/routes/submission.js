'use strict';

module.exports = {
    path: '/submission/:id',
    pageObject: {
        notification: '.notification',
        dropzone: '#file-manager-drop-target',
        fileInput: '.dz-hidden-input',
        manuscriptOption: '.files-container .file-list-item:last-of-type option[value="3136"]',
        continue: '#floating-bar button',
        manuscript: '.manuscript-nav a',
        title: '[name="title"]',
        abstract: '[name="abstract"]',
        references: '[name="references"]'
    }
};