        $.validator.addMethod("maxwords", function(value, element, params) {
            if (value.match(/\S+/g) != null && value.match(/\S+/g).length > 6){
                return false;
            }
            return true;
        }, "Please enter maximum {0} words.");
