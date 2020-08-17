var exec = require('cordova/exec');

var PLUGIN_NAME = 'installReferrer';

var installReferrer = {
    getReferrer: function(success, error) {
        exec(success, error, PLUGIN_NAME, "getReferrer", []);
    }
};

module.exports = installReferrer;
