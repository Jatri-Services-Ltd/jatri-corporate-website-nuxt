import {helpers, minLength, maxLength, required, numeric, requiredIf, maxValue, email} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";

const careerFormSubmitValidator = (form) => {
    const rules = {
        mobile_number: {
            numeric: helpers.withMessage("Phone number must be numeric", numeric),
            minLength: helpers.withMessage("Phone number should be at least 11 digits", minLength(11)),
            maxLength: helpers.withMessage("Phone number shouldn't be greater than 11 digit", maxLength(11)),
            validBDNumber: helpers.withMessage("Invalid bd phone number", helpers.regex(/(^(01))[3456789]{1}(\d){8}$/)),
        },
        name: {
            minLength: helpers.withMessage("Name should be at least 3 characters", minLength(3)),
        },
        linkedin_profile: {
        },
        email: {
            email: helpers.withMessage("Email address must be valid", email),
        },
        resume: {
            required: helpers.withMessage("Resume is required", required),
            maxDocSize:  helpers.withMessage("File size exceed.", () => {
                return !(form.resume?.size > 5*1024*1024)
            }),
            fileType: helpers.withMessage("File should be in pdf format", ()=>{
                return !(form.resume?.type !== 'application/pdf')
            })


        },
    }
    const v$ = useVuelidate(rules, form)
    return {v$}
}

export default careerFormSubmitValidator;