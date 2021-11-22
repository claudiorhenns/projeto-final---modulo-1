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
import {LightTheme, DarkTheme,GlobalStyle} from './Themes/themes';
import { useThemaGlobal } from './components/getThema';
import { App } from './App';



ReactDOM.render(
  <React.StrictMode>
    <ProjectContext>
      <App/>
    </ProjectContext>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
