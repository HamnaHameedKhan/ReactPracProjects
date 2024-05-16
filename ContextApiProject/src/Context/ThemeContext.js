import { createContext, useContext } from "react";

export const ThemeContext=createContext({
    themeMode: 'light',
    darkTheme:()=>{},
    lightTheme:()=>{}
})

// to make provider
export const ThemeContextProvider=ThemeContext.Provider


// custom hook or method



// export  default const useTheme=()=>
// {                                          this syntax with named arrow functionis not alowed
//     return useContext(ThemeContext)

// }

// either use anonyms arrow function or simple function syntax or use arrow function but export separartely

const useTheme=()=>{
    return useContext(ThemeContext)
}

export default useTheme

