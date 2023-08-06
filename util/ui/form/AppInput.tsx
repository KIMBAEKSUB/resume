import { validation, validationOption, validationType } from "@/util/const/interface/validation";
import { validateForm } from "@/util/services/validation-service";
import { useEffect, useState } from "react";
import { BsCheck } from "react-icons/bs";
import { PiWarningFill } from "react-icons/pi";
import appFormEventBus from "./AppFormEventBus";


export interface AppInputProps {
    label?: string;
    placeholder?: string;
    value?: string;
    onChange?: (value: any, ...arg: any) => void;
    type?: string;
    icon?: React.ReactNode;
    validation?: { type: validationType, option?: validationOption, showError?: boolean, showSuccess?: boolean};
}

const AppInput: React.FC<AppInputProps> = ({ label, placeholder, value, onChange, type, icon, validation }) => {
    
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

        appFormEventBus.on('validateInput', handerValidate);

        return () => {
            appFormEventBus.off('InputReset', handlerReset);
            appFormEventBus.off('validateInput', handerValidate);
        }

    }, [inputValue]);

    useEffect(() => {

        if (isTouched && validation) {
            validateForm(inputValue, validation.type, validation.option, setErrorMessage, setSuccessMessage);
        }

        if (errorMessage) {
            return;
        }

        onChange && onChange(inputValue);
        
    }, [inputValue, onChange, validation, isTouched, errorMessage]);

    return <>
        <div className="field">
            <label className="label">
                {label}
            </label>

            <div className="control has-icons-left has-icons-right">
                <input 
                    className={
                        `input 
                        ${validation?.showError && errorMessage && 'is-danger'} 
                        ${validation?.showSuccess &&  successMessage && 'is-success'}`
                    } 
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={(event) => setInputValue(event.target.value)} 
                    onBlur={() => setIsTouched(true)}
                />
                {icon && <span className="icon is-small is-left">{icon}</span>}
                {successMessage && <span className="icon is-size-5 is-right" style={{height: '-webkit-fill-available'}}><BsCheck /></span>}
                {errorMessage && <span className="icon is-small is-right"><PiWarningFill /></span>}
            </div>
            <p className="help is-danger">{validation?.showError && errorMessage}</p>
            <p className="help is-danger">{validation?.showSuccess && successMessage}</p>
        </div>
    </>
}

export default AppInput;