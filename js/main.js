"use strict";
$('input[name="intervaltype"]').click(function() {
    $(this).tab('show');
});
$.validator.addMethod("validDate", function(value, element) {
    return /^((0?[13578]|10|12)(-|\/)(([1-9])|(0[1-9])|([12])([0-9]?)|(3[01]?))(-|\/)((19)([2-9])(\d{1})|(20)([01])(\d{1})|([8901])(\d{1}))|(0?[2469]|11)(-|\/)(([1-9])|(0[1-9])|([12])([0-9]?)|(3[0]?))(-|\/)((19)([2-9])(\d{1})|(20)([01])(\d{1})|([8901])(\d{1})))$/.test(value);
}, 'Must be a valid date (DD/MM/YYYY)');
$.validator.addMethod('phone', function(value) { return (value.match(/^((\+)?[1-9]{1,2})?([-\s\.])?((\(\d{1,4}\))|\d{1,4})(([-\s\.])?[0-9]{1,12}){1,2}(\s*(ext|x)\s*\.?:?\s*([0-9]+))?$/)); }, 'Please enter a valid phone number (Intl format accepted + ext: or x:)');


$('#csrForm').validate({
    rules: {
        csrReporterLast: {
            required: true,
            maxlength: 35
        },
        csrReporterFirst: {
            required: true,
            maxlength: 35
        },
        csrBusinessName: {
            maxlength: 60
        },
        csrCountry: {
            required: true,
        },
        csrAddress1: {
            required: true,
            maxlength: 50
        },
        csrAddress2: {
            maxlength: 50
        },
        csrCity: {
            required: true,
            maxlength: 50
        },
        csrState: {
            required: true,
            maxlength: 35,
        },
        csrStateUSA: {
            required: true,
        },
        csrProvidence: {
            required: true,
        },
        csrZipcode: {
            required: true,
            digits: true,
            maxlength: 10
        },
        csrPhone: {
            required: true,
            phone: true,

        },
        csrEmail: {
            email: true,
            maxlength: 50
        },
        csrRelationship: {
            maxlength: 30
        },
        csrBirthdate: {
            required: true,
            validDate: true,

        },
        csrDeathdate: {
            required: true,
            validDate: true,

        },
        csrInsuredNameFirst: {
            required: true,
            maxlength: 35,

        },

        csrInsuredNameLast: {
            required: true,
            maxlength: 35,

        },
        csrPostalCode: {
            required: true,
            digits: true,

        },
        csrMannerDeath: {
            required: true,
        },
        csrPolicyNum: {
            digits: true,

        },
        csrSNN: {
            digits: true,
            minlength: 9,
            maxlength: 9,
        },
        csrNameFuneral: {
            maxlength: 35,
        },
        csrPhoneFuneral: {
            digits: true,
        },
        csrNotes: {
            maxlength: 500,
        },



    },
    submitHandler: function(form) {
        'required'
    },
    // invalidHandler: function(event, validator) {},
    highlight: function(element, errorClass) {
        $(element).closest('.form-group').addClass('has-error');
    },
    unhighlight: function(element, errorClass) {
        $(element).closest('.form-group').removeClass('has-error');
    }


});
$('.reset').click(function() {
    var validator = $('#csrForm').validate();
    validator.resetForm()
});

$('#agentForm').validate({
    rules: {
        agentReporter: {
            required: true,
            maxlength: 35,
        },

        agentNameLast: {
            required: false,
            maxlength: 35,
        },

        agentNameFirst: {
            required: false,
            maxlength: 35,
        },

        agentInsuredNameFirst: {
            required: true,
            maxlength: 35,

        },

        agentInsuredNameLast: {
            required: true,
            maxlength: 35,

        },
        agentSNN: {
            digits: true,
            minlength: 9,
            maxlength: 9,
        },
        agentBirthdate: {
            required: true,
            validDate: true,

        },
        agentDeathdate: {
            required: true,
            validDate: true,

        },
        agentNameFuneral: {
            maxlength: 35,
        },
        agentPhoneFuneral: {
            digits: true,
        },

        agentMannerDeath: {
            required: true,
        },
        agentPolicyNum: {
            digits: true,

        },
        agentNotes: {
            maxlength: 500,
        }
    },



    submitHandler: function(form) {
        'required'
    },
    invalidHandler: function(event, validator) {},
    highlight: function(element, errorClass) {
        $(element).closest('.form-group').addClass('has-error');
    },
    unhighlight: function(element, errorClass) {
        $(element).closest('.form-group').removeClass('has-error');
    }


});
$('.reset').click(function() {
    var validator = $('#agentForm').validate();
    validator.resetForm()

});


jQuery.extend(jQuery.validator.messages, {
    required: "Required",
    remote: "Please fix this field.",
    email: "Please enter a valid email address.",
    url: "Please enter a valid URL.",
    date: "Please enter a valid date.",
    dateISO: "Please enter a valid date (ISO).",
    number: "Please enter a valid number.",
    digits: "Please enter only digits.",
    creditcard: "Please enter a valid credit card number.",
    equalTo: "Please enter the same value again.",
    accept: "Please enter a value with a valid extension.",
    maxlength: jQuery.validator.format("Please enter no more than {0} characters."),
    minlength: jQuery.validator.format("Please enter at least {0} characters."),
    rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
    range: jQuery.validator.format("Please enter a value between {0} and {1}."),
    max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
    min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
});


/* 
Policy Additions
*/




$(document).ready(function() {
    var max_fields = 10; //maximum input boxes allowed
    var wrapper = $(".input_fields_wrap"); //Fields wrapper
    var add_button = $(".add_field_button"); //Add button ID

    var x = 1; //initlal text box count
    $(add_button).click(function(e) { //on add input button click
        e.preventDefault();
        if (x < max_fields) { //max input box allowed
            x++; //text box increment
            $(wrapper).append('<div class="form-group"><label for="csr-policynum" class="col-sm-4 control-label">Policy #</label><div class="col-sm-6"><input type="text" class="form-control" name="mytext[]"/></br></div><div class="col-sm-2"><a href="#" class="remove_field">Remove</a></div>'); //add input box
        }
    });

    $(wrapper).on("click", ".remove_field", function(e) { //user click on remove text
        e.preventDefault();
        $(this).closest('.form-group').remove();
        x--;
    })
});


// $(document).ready(function() {

//     var policy = 2;

//     $(".addButton").click(function() {

//         if (policy > 20) {
//             alert("Limit 20 policies.");
//             return false;
//         }

//         var newPolicyGroup = $(document.createElement('div'))
//             .attr("class", 'policyGroup' + policy).addClass("form-group");


//         newPolicyGroup.after().html('<label class="col-sm-4 control-label">Policy #' + '</label>' +
//             '<div class="col-sm-8">' + '<input type="text" name="csrPolicyNum" class="form-control' +
//             '" id="textbox' + '" value="" >' + ' </br></div>');

//         newPolicyGroup.appendTo(".policyGroup");


//         policy++;
//     });

//     $(".removeButton").click(function() {
//         if (policy == 1) {
//             alert("No policies to remove");
//             return false;
//         }

//         policy--;

//         $(".policyGroup" + policy).remove();

//     });


// });


// /*
// Input conditions
// */


$(document).ready(function() {
    toggleFields();

    $("#csrCountry").change(function() {
        toggleFields();
    });

});

function toggleFields() {
    console.log('selected country is', $("#csrCountry").val());
    if ($("#csrCountry").val() == "USA" ||
        $("#csrCountry").val() == 2 ||
        $("#csrCountry").val() == 3) {
        $("#csrStateUSAField").show();
        $("#csrZipCodeField").show();
        $("#csrProvidenceField").hide();
        $("#csrStateField").hide();
        $("#csrPostalCodeField").hide();
    } else if ($("#csrCountry").val() == "Canada") {
        $("#csrProvidenceField").show();
        $("#csrStateField").hide();
        $("#csrStateUSAField").hide();
        $("#csrPostalCodeField").show();
        $("#csrZipCodeField").hide();



    } else {
        $("#csrStateField").show();
        $("#csrStateUSAField").hide();
        $("#csrPostalCodeField").show();
        $("#csrProvidenceField").hide();
        $("#csrZipCodeField").hide();

    }
};
