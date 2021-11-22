import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Buttons, CardButtonGame, HeaderWrapper, InputArea, InputComent, SaveComentButton, Slot, SlotBlock, TextoConfig, TextoDesCription, Title, TitleHeader, TituloDescription } from "../../styles";
import { projectContext } from "../contexts/ProjectContext";

export const GetComents =({id}) =>{
   
    const [arrayComents,setArrayComents] = useState([]);
    const [nome,setNome] = useState();
    const [email, setEmail] = useState();
    const [comentario, setComentario] = useState();


      useEffect(()=>{
        setArrayComents(JSON.parse(localStorage.getItem(id)) || []);       
      },[]);

    return (

            <>
           <Slot>
               <SlotBlock width={100} dir={'column'}>
               
                {(arrayComents)?
                arrayComents.map((item)=>(
                    <>
                    <TextoConfig fontSize = {18}>{item.nome} </TextoConfig>
                    <TextoDesCription fontSize = {14}>{item.comentario}</TextoDesCription>
                    <TextoDesCription fontSize = {12}>({item.date})</TextoDesCription>
                    <br/>
                    </>  
                )): null}        
                
              </SlotBlock>
           </Slot>
           
            </>
    )
}