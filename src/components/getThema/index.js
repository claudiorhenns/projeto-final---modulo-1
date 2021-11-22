import React, { useContext } from "react";
import { SlotCorBar, SquareColor } from "../../styles";
import { projectContext } from "../contexts/ProjectContext";


export const ThemaGlobal = () =>{

    const {theme,setTheme} = useContext(projectContext);
    
    return   <>
        <SlotCorBar width={50} >
            <SquareColor cor={'blue'} onClick={()=>setTheme('blue')}/>
            <SquareColor cor={'white'} onClick={()=>setTheme('light')}/>
            <SquareColor cor={'black'} onClick={()=>setTheme('dark')}/>
            <SquareColor cor={'orange'} onClick={()=>setTheme('orange')}/>
        </SlotCorBar>
    </>
}