
import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Routes,Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import {Home} from "./pages/home";
import {Games} from './pages/games';
import { GamesNews } from './pages/gamesNews';
import { GamesDetails } from './pages/gamesDetails'; 
import './App.css';
import { projectContext, ProjectContext } from './components/contexts/ProjectContext';
import { ThemeProvider } from "styled-components";
import {LightTheme, DarkTheme,BlueTheme,OrangeTheme, GlobalStyle} from './Themes/themes';
import { useThemaGlobal } from './components/getThema';



export const App = () =>{
    const {theme,setTheme} = useContext(projectContext);
   
   const  chooseTheme = (theme) =>{
    switch (theme)  {
        case 'light':
          return LightTheme;

        case 'dark':
            return DarkTheme;

        case 'blue':
            return BlueTheme;
        
        case 'orange':
            return OrangeTheme;

        default:
          return BlueTheme;
      }
    }

    return(
      <ThemeProvider theme ={chooseTheme(theme)}>
      <GlobalStyle/>
      
        <BrowserRouter>
        
          <Routes>
            <Route path='/' element={<Home/>}/> 
            <Route path='/games' element={<Games/>}/> 
            <Route path='/games/:id' element={<GamesDetails/>}/> 
            <Route path='/gamesNews' element={<GamesNews/>}/>                    
         </Routes>   
        
        </BrowserRouter>
    </ThemeProvider>
  
    )
  
  }