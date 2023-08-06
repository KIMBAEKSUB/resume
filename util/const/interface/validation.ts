export interface validation { type: validationType, option: validationOption}
export type validationType = "string" | "number" | "email" | "password" | "date" | "array" | any; 
    
export type validationOption = validationStringOption | validationNumberOption | validationEmailOption | validationPasswordOption | validationDateOption;

export interface validationStringOption {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    dinyUppercase?: boolean;
    dinyLowercase?: boolean;
    dinySpecial?: boolean;
}

export interface validationNumberOption {
    min?: number;
    max?: number;
}

export interface validationEmailOption {
}

export interface validationPasswordOption {
    minLength?: number;
    maxLength?: number;
    hasUppercase?: boolean;
    hasLowercase?: boolean;
    hasNumber?: boolean;
    hasSpecial?: boolean;
}

export interface validationDateOption {
    format?: string;
}

export interface validateArrayOption {
    minLength?: number;
    maxLength?: number;
    validateType?: validationType;
}

export interface validationResult {
    isError: boolean;
    message: string;
}

export type validateRequestOption = {
    [key: string]: validationType;
}
