import React, { useContext } from "react";
import { Header } from "../components/header";
import {useEffect, useState} from 'react';
import {Card} from '../components/Card-Game/index.js';
import { Link } from "react-router-dom";
import { projectContext } from "../components/contexts/ProjectContext";
import { CardNoticias } from "../components/card-Noticias";
import { ThemaGlobal } from "../components/getThema";
import { Container } from "../styles";


export const GamesNews = () =>{
  
    //  fetch com os dados do servidor 
    const {news, setNews} = useContext(projectContext);
    const {busca,setBusca}= useContext(projectContext);
    
    //Reseta a variavel busca
    useEffect(()=>{
      setBusca('');
    },[]);

    return  <>
   
   <ThemaGlobal/>
    <Header title = "Últimas Notícias"/>

    <Container>
     
      {news.filter((games)=>{
          if(games ==""){
            return games;
          }else if (games.title.toLowerCase().includes(busca.toLowerCase())){
            return games;
          }
      }).map ( (news,index)=>(
       <CardNoticias 
        id={news.id}
        photo={news.main_image}
        name={news.title} 
        description={news.short_description} 
        url={news.article_url}               
      />
      ))}
      
    </Container>
                 
     
            </>

};