'use strict';

module.exports = {
    path: '/submission/:id',
    pageObject: {
        notification: '.notification',
        dropzone: '#file-manager-drop-target',
        fileInput: '.dz-hidden-input',
        manuscriptOption: '.files-container .list li:last-of-type select option[value="3136"]',
        continue: '#floating-bar button'
    }
};