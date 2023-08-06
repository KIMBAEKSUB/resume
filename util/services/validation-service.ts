import { NextApiRequest, NextApiResponse } from "next";
import { IResult, RESULT } from "../const/common/result";
import { validationType, validationEmailOption, validationPasswordOption, validationResult, validationStringOption, validationNumberOption, validateRequestOption, validateArrayOption, validationOption } from "../const/interface/validation";

/**
 * custom validation
 */
export const validate = (target: any, type: validationType , option: validationOption | null = null): IResult => {
    
    if (type === "string") {
        return validateString(target, option as validationStringOption);
    }

    if (type === "number") {
        return validateNumber(target, option as validationNumberOption);
    }

    if (type === "email") {
        return validateEmail(target, option as validationEmailOption);
    }

    if (type === "password") {
        return validatePassword(target, option as validationPasswordOption);
    }

    if (type === "array") {
        return validateArray(target, option as validateArrayOption);
    }

    return RESULT.ERROR("type error");
}

export interface ValidateForm {
    (
        target: any, 
        type: validationType, 
        option: validationOption | null | undefined,
        setErrorMessage: (v: string) => void,
        setAvailableMessage?: (v:string) => void
    ): void;
}

export const validateForm:ValidateForm = (target, type, ouption, setErrorMessage, setAvailableMessage) => {
    const result = validate(target, type, ouption);
    if (result.isError) {
        setErrorMessage(result.message);
        setAvailableMessage && setAvailableMessage("");
        return;
    }
    setErrorMessage("");
    setAvailableMessage && setAvailableMessage(result.message);
}

const validateString = (target: any, option: validationStringOption): IResult => {

    if (option?.required && !target) {
        return RESULT.ERROR("This text is required");
    }
    
    if (typeof target !== "string") {
        return RESULT.ERROR("This text is invalid");
    }

    if (option?.minLength && target.length < option.minLength) {
        return RESULT.ERROR(`This text is required over ${option.minLength} characters`);
    }

    if (option?.maxLength && target.length > option.maxLength) {
        return RESULT.ERROR(`This text is required until ${option.maxLength} characters`);
    }

    if (option?.dinyUppercase && ! /[A-Z]/.test(target)) {
        return RESULT.ERROR("This text is not allow uppercase");
    }

    if (option?.dinyLowercase && ! /[a-z]/.test(target)) {
        return RESULT.ERROR("This text is not allow lowercase");
    }

    if (option?.dinySpecial && ! /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(target)) {
        return RESULT.ERROR("This text is not allow special");
    }

    return RESULT.SUCCESS(null, "This text is available");
}

const validateNumber = (target: any, option: validationNumberOption):IResult => {

    if (isNaN(+target)) {
        return RESULT.ERROR("target is not a number");
    }

    if (option?.min && +target < option.min) {
        return RESULT.ERROR("target is too small");
    }

    if (option?.max && +target > option.max) {
        return RESULT.ERROR("target is too big");
    }

    return RESULT.SUCCESS(null, "target is available");
};

const validateEmail = (target: any, _: validationEmailOption):IResult => {

    const regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    if ( ! regex.test(target)) {
        return RESULT.ERROR("This email is invaild.");
    }

    return RESULT.SUCCESS(null, "This email is available");
}

const validatePassword = (target: any, option: validationPasswordOption):IResult => {

    if (target.length < 6) {
        return RESULT.ERROR("This password is too short");
    }

    if (option?.minLength && target.length < option.minLength) {
        return RESULT.ERROR("This password is too short");
    }

    if (option?.maxLength && target.length > option.maxLength) {
        return RESULT.ERROR("This password is too long");
    }

    if (option?.hasUppercase && ! /[A-Z]/.test(target)) {
        return RESULT.ERROR("This password has no uppercase");
    }

    if (option?.hasLowercase && ! /[a-z]/.test(target)) {
        return RESULT.ERROR("This password has no lowercase");
    }

    if (option?.hasNumber && ! /[0-9]/.test(target)) {
        return RESULT.ERROR("This password has no number");
    }

    if (option?.hasSpecial && ! /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(target)) {
        return RESULT.ERROR("This password has no special");
    }

    return RESULT.SUCCESS(null, "This password is available");
}

const validateArray = (target: any[], option: validateArrayOption): IResult => {

    if (option?.minLength && target.length < option.minLength) {
        return RESULT.ERROR("target is too short");
    }

    if (option?.maxLength && target.length > option.maxLength) {
        return RESULT.ERROR("target is too long");
    }

    const validateType = option.validateType;
    if (validateType) {
        for (let i = 0; i < target.length; i++) {
            const result = validate(target[i], validateType.type, validateType.option);
            if (result.isError) {
                return RESULT.ERROR(result.message);
            }
        }
    }

    return RESULT.SUCCESS(null, "target is available");
}

export const validateHttp = (
        req: NextApiRequest,
        res: NextApiResponse, 
        method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE", 
        option: validateRequestOption
    ) => {
    
    if (method !== req.method) {
        return res.status(400).json({ ...RESULT.ERROR("bad request."), status: 400 });
    };

    
    let body: any;
    if (method === "GET" && req.query) {
        body = req.query;
    } else if (method === "PUT" && req.query) {
        body = req.query;
    } else {
        body = req.body;
    }

    const requiredProperty = Object.keys(option);
    requiredProperty.forEach(property => {
        if (!(property in body)) {
            res.status(400).json({ ...RESULT.ERROR(`"bad request. ${property} is required.`), status: 400 });
            return;
        };

        const value = body[property];
        const result = validate(value, option[property].type, option[property].option);
        if (result.isError) {
            res.status(400).json({ ...RESULT.ERROR(result.message), status: 400 });
            return;
        }
    });
}