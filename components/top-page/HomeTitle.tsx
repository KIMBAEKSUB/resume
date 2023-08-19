import { useEffect, useMemo, useState } from "react";
import classes from './Home.module.scss'
import useWindowSize from "@/util/hooks/use-window-size";

const HomeTitle = () => {

        const languages = useMemo(()=> {
            return ['Javascript', 'JAVA', 'PHP', 'C#', 'Laravel', 'NextJS', 'vue3', 'Docker', 'AWS', 'PostgreSql'];
        }, []);

        const [languageIndex, setLanguageIndex] = useState(0);
        const [sentence, setSentence] = useState(`${languages[languageIndex]}. `);
        const [text, setText] = useState(['']);
        const [isTyping, setIsTyping] = useState(true);
        const { isMobile } = useWindowSize();
        const [styles, setStyles] = useState("is-1");
    
        useEffect(() => {
            
            const interval = setInterval(() => {
                
                if (isTyping) {

                    if (text.length === 0) {
                        setText(_ => {
                            return [sentence[0]];
                        });    
                        return;
                    }

                    if (text.length !== 0 && sentence[text.length - 1] == null) {
                        return;
                    }

                    setText(text => {
                        return [...text, sentence[text.length]];
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
            , 50);
    
            return () => clearInterval(interval);

        } ,[isTyping, languageIndex, languages, sentence, text]);


        useEffect(() => {
            if (isMobile) {
                setStyles("is-3");
            } else {
                setStyles("is-1");
            }
        }, [isMobile])

    return <p className={"title mb-6 " + styles}>
        Building Better Software, Together. <br />
        Let me assist you with {text.join('')} <span className={'has-text-primary ' + classes.blinkingText}>|</span>
    </p>
}

export default HomeTitle;