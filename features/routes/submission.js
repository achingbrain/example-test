'use strict';

module.exports = {
    path: '/submission/:id',
    pageObject: {
        notification: '.notification',
        dropzone: '#file-manager-drop-target',
        fileInput: '.dz-hidden-input',
        lastFileType: '.files-container .list li select',
        manuscriptOption: '.files-container .list li select option[value="3136"]'
    }
};