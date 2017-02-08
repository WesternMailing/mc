// Please use the following url to reference the library in production
// https://cdn.rawgit.com/WesternMailing/mc/master/WMFunctions.js

var details = {

    setOriginals: function(form) {
        var $inputsToCheck = $(form).find('*[data-update-check="true"]');
        var originalVals = '';

        $inputsToCheck.each(function(i) {
            originalVals += this.val();
        });
    },

    checkNew: function(form) {
        var $inputsToCheck = $(form).find('*[data-update-check="true"]');
        var newVals = '';

        $inputsToCheck.change(function() {
            newVals = '';

            $inputsToCheck.each(function(i) {
                newVals += this.val();
            });

            if (originalVals != newVals) {
                $(flagField).val("1");
            } else {
                $(flagField).val("0");
            }
        });
    }
}

function enforceHTTPS() {

	// This function is required for any 2G campaign to enforce any pages to be accessed using https
    if (location.protocol != 'https:') {
        location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
    }
}
