import React, { useContext } from "react";
import {ButtonsWrap, Buttons, HomeWrapper, Title, TitleMenor } from "../styles";
import {Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import {LightTheme, DarkTheme,GlobalStyle} from '../Themes/themes';
import { projectContext } from "../components/contexts/ProjectContext";
import { ThemaGlobal } from "../components/getThema";



export const Home = () =>{

    const navegar = useNavigate();
    const {theme,setTheme} = useContext(projectContext);

       
    return  <>

            <ThemaGlobal/>
            <HomeWrapper>            
            
               <Title fontSize = {40} cor = {"white"}> Projeto Final Módulo 1 - DevInHouse </Title>
               <TitleMenor> MMO Games </TitleMenor>

                    <ButtonsWrap>
                       <Buttons onClick={() => navegar('/games')}>Ver Jogos</Buttons>
                       <Buttons onClick={() => navegar('/gamesNews')}>Notícias</Buttons>
                    </ButtonsWrap>
      
                                        
            </HomeWrapper>
        
            </>

};