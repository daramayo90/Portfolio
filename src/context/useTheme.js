import { useContext } from "react"
import { ThemeContext } from "./ThemeProvider"

export default function useTheme() {
    //Se recibe el contextValue (elemento enviado) que me lo envía AuthProvider (Componente global)
    //Lo que se consume es el CONTEXTO y el PROVIDER es quién envía la información
    //El contexto se crea en el AuthProvider y luego Index envía esa información
    return useContext(ThemeContext);
}