import { useEffect, useState } from "react";
import classes from './Home.module.scss'

const HomeTitle = () => {

        // eslint-disable-next-line react-hooks/exhaustive-deps
        const languages = ['Javascript', 'JAVA', 'PHP', 'C#', 'Laravel', 'NextJS', 'vue3', 'Docker', 'AWS', 'PostgreSql'];
        const [languageIndex, setLanguageIndex] = useState(0);
        const [sentence, setSentence] = useState(`${languages[languageIndex]}. `);
        const [text, setText] = useState(['']);
        const [isTyping, setIsTyping] = useState(true);
    
        useEffect(() => {
            
            const interval = setInterval(() => {
                
                if (isTyping) {
                    setText(text => {
                        return [...text, sentence[text.length - 1]];
                    });
                    if (text.length == sentence.length) {
                        setTimeout(() => {
                            setIsTyping(false);
                        }, 1200);
                    }
                } else {
                    setText(text => {
                        text.pop();
                        return [...text];
                    });
    
                    if (text.length === 0) {
                        setIsTyping(true);
                        setLanguageIndex(languageIndex => {
                            if (languageIndex == languages.length - 1) {
                                return 0;
                            }
                            return languageIndex + 1;
                        });
                        setSentence(`${languages[languageIndex]}. `)
                    }
                }
            }
            , 30);
    
            return () => clearInterval(interval);
        } ,[isTyping, languageIndex, languages, sentence, text]);

    return <p className="title is-2 mb-6">
        Building Better Software, Together. <br />
        Let me assist you with {text.join('')} <span className={'has-text-primary ' + classes.blinkingText}>|</span>
    </p>
}

export default HomeTitle;