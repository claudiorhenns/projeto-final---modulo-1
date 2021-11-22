import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { ArrowDown, ArrowUp, Buttons, CardButtonGame, HeaderWrapper, InputArea, InputComent, Linha, MensagemErro, SaveComentButton, Slot, SlotBlock, SquareColor, TextoConfig, TextoDesCription, TextoVote, Title, TitleHeader, TituloDescription } from "../../styles";
import { projectContext } from "../contexts/ProjectContext";
import * as yup from 'yup';

export const AddComents =({id}) =>{
    const navigate= useNavigate();
    const [arrayComents,setArrayComents] = useState([]);
    const [nome,setNome] = useState();
    const [email, setEmail] = useState();
    const [comentario, setComentario] = useState();
    const [mensagem, setMensagem] = useState();
    

    useEffect(()=>{
      setArrayComents(JSON.parse(localStorage.getItem(id)) || []);       
    },[arrayComents]);

    const salvarComnetario = async(chave,nome,email,comentario) =>{

 

      if(nome != null && email != null && comentario != null){
        let newComent = {};
        newComent.comentario = comentario;
        newComent.nome = nome;
        newComent.email = email;
        newComent.votes =0;
        newComent.date = new Date().toLocaleString() + '';
        arrayComents.push(newComent);
        localStorage.setItem(chave,JSON.stringify(arrayComents));
      
      }else {
         
         setMensagem("Por favor preencha todos os campos para inserir o comentário");
         setTimeout(()=>setMensagem(""),4000);
      }
      };

     

      useEffect(()=>{
        setArrayComents(JSON.parse(localStorage.getItem(id)) || []);       
      },[]);

      const VotarMais = (chave,id) =>{
        arrayComents[id].votes= arrayComents[id].votes+1;
        localStorage.setItem(chave,JSON.stringify(arrayComents));
      }
      const VotarMenos = (chave,id) =>{
        arrayComents[id].votes= arrayComents[id].votes-1;
        localStorage.setItem(chave,JSON.stringify(arrayComents));
      }

    return (

            <>
           <Slot>
               <SlotBlock width={100} dir={'column'}>
                <TituloDescription fontSize = {22} >Comentários </TituloDescription>
                <SlotBlock width={100} dir={'row'}> 
                    <SlotBlock width={30} dir={'row'}>
                    <InputComent width={90} type='text' name='nome' placeholder="Nome"  onChange={(e)=>(setNome(e.target.value))}/>
                    </SlotBlock>
                    <SlotBlock width={30} dir={'row'}>
                    <InputComent width={90} type='text' name='email' placeholder="Email"  onChange={(e)=>(setEmail(e.target.value))}/>
                    </SlotBlock>
                </SlotBlock>

                <SlotBlock width={60} dir={'column'}>
                    <InputArea width={95} rows={6} type='text' name='comentario' placeholder="Comnetário"  onChange={(e)=>(setComentario(e.target.value))}/>
                    <MensagemErro>{mensagem}</MensagemErro>
                    <SaveComentButton onClick={()=> salvarComnetario(id,nome,email,comentario)}>Enviar Comentário</SaveComentButton>
                </SlotBlock>
           
                
              </SlotBlock>
           </Slot>




           <Slot>
               <SlotBlock width={100} dir={'column'}>
               
                {(arrayComents)?
                arrayComents.map((item,index)=>(
                    <>
                  <SlotBlock width={100}>
                    <SlotBlock width={75} dir={'column'}>
                      <TextoConfig fontSize = {18}>{item.nome} </TextoConfig>
                      <TextoDesCription fontSize = {14}>{item.comentario}</TextoDesCription>
                      <TextoDesCription fontSize = {12}>({item.date})</TextoDesCription>                     
                    </SlotBlock>
                    <SlotBlock width ={15} dir={'row'}>
                        <ArrowUp cor={'blue'}  onClick={() => VotarMais(id,index)}/>
                        <ArrowDown cor={'red'} onClick={() => VotarMenos(id,index)} /> 
                        <TextoVote valor={item.votes}>{item.votes}</TextoVote>                                       
                    </SlotBlock>                    
                  </SlotBlock>                  
                    <br/>
                    </>  
                )): null}        
                 
              </SlotBlock>
              
           </Slot>
           
            </>
    )
}