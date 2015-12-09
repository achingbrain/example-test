'use strict';

var path = require('path');

module.exports = {
    upload: function (file, next) {
        var filePath = path.resolve(__dirname, '../files/' + file);
        this.get('fileInput', (fileInput) =>
            this.world.driver.executeScript((el) => {
                el.style.visibility = 'visible';
                el.style.width = '1px';
                el.style.height = '1px';
            }, fileInput)
            .then(() => fileInput.sendKeys(filePath).then(next)));

    }
};