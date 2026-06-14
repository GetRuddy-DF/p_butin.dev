import { createContext, useContext, useState } from "react";
import { transtlations } from "./translations";


const LanguageContext = createContext()


export  function LanguageProvider({ children }) {
    const [lang, setLang] = useState("en")

    const toggleLang = () => setLang(prev => (prev === 'en' ? 'ru' : 'en'))
    const t = transtlations[lang]

    return (
        <LanguageContext.Provider value={{ lang, toggleLang, t}}>
            {children}
        </LanguageContext.Provider>
    )
}


export function useLang() {
    return useContext(LanguageContext)
}