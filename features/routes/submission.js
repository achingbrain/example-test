'use strict';

module.exports = {
    path: '/submission/:id',
    pageObject: {
        notification: '.notification',
        dropzone: '#file-manager-drop-target',
        fileInput: '.dz-hidden-input',
        fileHelp: 'button.help',
        fileHelpDialog: 'button.help .tooltip',
        fileListItem: '.files-container .file-list-item:last-of-type',
        fileOption: '.files-container .file-list-item:last-of-type select',
        manuscriptOption: '.files-container .file-list-item:last-of-type option[value="3136"]',
        continue: '#floating-bar button',
        manuscript: '.manuscript-nav a',
        authors: '.authors-nav a',
        subjectAreas: '.topics-nav a',
        title: '[name="title"]',
        abstract: '[name="abstract"]',
        references: '[name="references"]'
    }
};