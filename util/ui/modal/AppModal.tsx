export interface AppModalProps {
    
    title: string;
    subtitle?: React.ReactNode;
    
    body: React.ReactNode;
    
    buttonText?: string;
    onClick: () => void;

    secondaryButtonText?: string;
    onClose: () => void;

    isActive: boolean;
    isLoading?: boolean;
}

const AppModal: React.FC<AppModalProps> = ({ title, subtitle, body, buttonText, secondaryButtonText: secondButtonText, isActive, isLoading, onClick, onClose }) => {

    if (!isActive) {
        return null;
    }

    return <>
        <div className="modal-background"></div>
        <div className={"modal mx-4 is-active"}>
            <div className="modal-card">
                <header className="modal-card-head" style={{justifyContent: "space-between"}} >
                    <div>
                        <p className="title is-3">{title}</p>
                        <p className="subtitle is-5">{subtitle}</p>
                    </div>
                    <button className="delete" aria-label="close" style={{alignSelf: "baseline"}} disabled={isLoading} onClick={onClose}></button>
                </header>
                <section className="modal-card-body">
                    {body}
                </section>
                <footer className="modal-card-foot">
                    {buttonText && <button className={`button is-success ${isLoading && "is-loading"}`} onClick={onClick} >{buttonText}</button>}
                    {secondButtonText && <button className="button" disabled={isLoading} onClick={onClose} >{secondButtonText}</button>}
                </footer>
            </div>
        </div>
    </>
}

export default AppModal;