import React from "react";
import {ButtonsWrap, Buttons, HomeWrapper, Title, TitleMenor, Container } from "../styles";
import {useEffect, useState, useContext} from 'react';
import {Card} from '../components/Card-Game/index.js';
import { Link } from "react-router-dom";
import { Header } from "../components/header";
import { projectContext, ProjectContext } from "../components/contexts/ProjectContext";
import { ThemaGlobal } from "../components/getThema";


export const Games = () =>{

    //  fetch com os dados do servidor 
    const {games, setGames} = useContext(projectContext);
    const {busca,setBusca}= useContext(projectContext);

    //Reseta a variavel busca
    useEffect(()=>{
      setBusca('');
    },[]);
    

    return  <>   
    <ThemaGlobal/>
      <Header title = "Lista de Jogos" />      
     
     <Container>                 
    
     
      {games.filter((games)=>{
          if(games ==""){
            return games;
          }else if (games.title.toLowerCase().includes(busca.toLowerCase())){
            return games;
          }
      }).map ( (games,index)=>(
       <Card 
        id={games.id}
        photo={games.thumbnail}
        name={games.title} 
        description={games.short_description} 
        type = {games.genre}
        titleButton = "Ver mais"  
      />
      
      ))}
      
    </Container>
                 
    
            </>

};