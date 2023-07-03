import { FC, useMemo, useState, } from "react";
import { LOCAL_STORAGE_THEME, Theme, ThemeContext } from "./themeContext";


const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME) as Theme || Theme.LIGHT
const ThemeProvider :FC= (props) => {
    const {children} = props
    const [theme, setTheme] = useState<Theme>(defaultTheme)

    const defaultProps =useMemo(() => {
        return {
            theme,
            setTheme
        }
    }, [theme])
    return ( 
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
     );
}
 
export default ThemeProvider;