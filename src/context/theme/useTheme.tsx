import { useContext } from "react";
import { LOCAL_STORAGE_THEME, Theme, ThemeContext } from "./themeContext";

interface useThemeProps {
    switchTheme:() => void,
    theme:Theme
}
function useTheme ():useThemeProps {
    const {theme, setTheme} = useContext(ThemeContext)
    const switchTheme =() => {
        const newTheme =theme === Theme.DARK?Theme.LIGHT:Theme.DARK
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME, newTheme)
    }
    return {
        switchTheme,
        theme
    }
}
 
export default useTheme;