import { validation, validationOption, validationType } from "@/util/const/interface/validation";
import { validateForm } from "@/util/services/validation-service";
import { useEffect, useState } from "react";
import appFormEventBus from "./AppFormEventBus";

export interface AppTextareaProps {
    label?: string;
    placeholder?: string;
    value?: string;
    onChange: (v: string) => void;
    error?: string;
    rows?: number;
    cols?: number;
    validation?: { type: validationType, option?: validationOption, showError?: boolean, showSuccess?: boolean};
}


const AppTextarea: React.FC<AppTextareaProps> = ({ label, onChange, placeholder,value, rows, cols, validation}) => {

    
    const [isTouched, setIsTouched] = useState<boolean>(false);
    
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    
    const [ inputValue, setInputValue ] = useState<string | undefined | null>();

    useEffect(() => {

        const handlerReset = () => {
            setInputValue(undefined);
            setErrorMessage(null);
            setSuccessMessage(null);
            setIsTouched(false);
        }

        appFormEventBus.on('InputReset', handlerReset);
    
        const handerValidate = (validation: validation) => {
            validateForm(inputValue, validation.type, validation.option, setErrorMessage, setSuccessMessage);
        }

        appFormEventBus.on('validateTextarea', handerValidate);

        return () => {
            appFormEventBus.off('InputReset', handlerReset);
            appFormEventBus.off('validateTextarea', handerValidate);
        }

    }, [inputValue]);

    useEffect(() => {

        if (isTouched && validation) {
            validateForm(inputValue, validation.type, validation.option, setErrorMessage, setSuccessMessage);
        }

        if (errorMessage) {
            return;
        }

        onChange && onChange(inputValue!);
        
    }, [inputValue, onChange, validation, isTouched, errorMessage]);
    
    return (
        <div className="field">
            <label className="label">{label}</label>
            <div className="control">
                <textarea 
                    className={
                        `textarea 
                        ${validation?.showError && errorMessage && 'is-danger'} 
                        ${validation?.showSuccess &&  successMessage && 'is-success'}`
                    }
                    placeholder={placeholder} 
                    onChange={(e) => setInputValue(e.target.value)}
                    onBlur={() => setIsTouched(true)}
                    value={value}
                    rows={rows}
                    cols={cols}
                ></textarea>
            </div>
            <p className="help is-danger">{validation?.showError && errorMessage}</p>
            <p className="help is-danger">{validation?.showSuccess && successMessage}</p>
        </div>
    );
}

export default AppTextarea;