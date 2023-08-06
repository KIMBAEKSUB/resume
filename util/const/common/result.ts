export interface IResult {
    data: any;
    isError: boolean;
    isSuccess: boolean;
    message: string;
}

export const RESULT = {
    DEFAULT: {
        data: null,
        isError: false,
        isSuccess: false,
        message: "",
    },
    ERROR_DEFAULT: {
        data: null,
        isError: true,
        isSuccess: false,
        message: "",
    },
    ERROR: (message: string) => {
        return {
            data: null,
            isError: true,
            isSuccess: false,
            message: message
        }
    },
    SUCCESS_DEFAULT: {
        data: null,
        isError: false,
        isSuccess: true,
        message: "",
    },
    SUCCESS: (data: any, message: string = "") => {
        return {
            data: data,
            isError: false,
            isSuccess: true,
            message: message,
        }
    }
}