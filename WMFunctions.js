function haveDetailsChanged(form, flagField) {

    // Address check functionality:
    // 1. grab all values on the details page into one variable

    var originalVals = '';
    var newVals = '';
    var $inputsToCheck = $(form).find('*[data-update-check="true"]');

    $inputsToCheck.each(function(i) {
        originalVals += this.val();
    });

    $inputsToCheck.change(function(){
        newVals = '';

        $inputsToCheck.each(function(i) {
            newVals += this.val();
        });

        if (originalVals != newVals) {
            $(flagField).val("1");
        }
        else
        {
            $(flagField).val("0");
        }
    });

}

function enforceHTTPS() {
    if (location.protocol != 'https:') {
        location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
    }
}
