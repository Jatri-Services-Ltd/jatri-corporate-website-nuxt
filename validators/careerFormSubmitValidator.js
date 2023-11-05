import {helpers, minLength, maxLength, required, numeric, requiredIf, maxValue, email} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";

const careerFormSubmitValidator = (form) => {
    const rules = {
        mobile_number: {
            required: helpers.withMessage("Phone is required", required),
            numeric: helpers.withMessage("Phone number must be Numeric", numeric),
            minLength: helpers.withMessage("Phone number should be at least 11 digits", minLength(11)),
            maxLength: helpers.withMessage("Phone number shouldn't be greater than 11 digit", maxLength(11)),
            validBDNumber: helpers.withMessage("Invalid bd phone number", helpers.regex(/(^(01))[3456789]{1}(\d){8}$/)),
        },
        name: {
            required: helpers.withMessage("Name is required", required),
        },
        linkedin_profile: {
            required: helpers.withMessage("linkedin is required", required),
        },
        email: {
            required: helpers.withMessage("Email is required", required),
            email: helpers.withMessage("Email address must be valid", email),
        },
        resume: {
            required: helpers.withMessage("Resume is required", required),
        },
    }
    const v$ = useVuelidate(rules, form)
    return {v$}
}

export default careerFormSubmitValidator;