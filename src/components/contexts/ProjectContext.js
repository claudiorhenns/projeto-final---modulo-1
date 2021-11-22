import {createContext} from "react";
import { useState, useEffect } from "react/cjs/react.development";

export const projectContext = createContext();

const ProjectProvider = projectContext.Provider;

export const ProjectContext = ({children}) =>{

    const [games,setGames] = useState([]);
    const [busca, setBusca] = useState('');
    const [news, setNews] = useState([]);
    const [gameId,setGameId] = useState([]);
    const [theme, setTheme] = useState('blue');
    
    // FETCH PARA OBTER A LISTA DE JOGOS
    useEffect (()=>{
        const config = {
          "method": "GET",
          "headers": {
            "x-rapidapi-host": "mmo-games.p.rapidapi.com",
            "x-rapidapi-key": "fa5e562f87mshc8dd60f44da8eb5p1b62cejsn8d61ca5b7110",
          },
        };
        fetch("https://mmo-games.p.rapidapi.com/games",config)
        .then((response)=>response.json())
        .then((data)=>setGames(data));
      },[]);

      // FETCH PARA OBTER A LISTA DE NOTICIAS
      useEffect (()=>{
        const config = {
          "method": "GET",
          "headers": {
              "x-rapidapi-host": "mmo-games.p.rapidapi.com",
              "x-rapidapi-key": "fa5e562f87mshc8dd60f44da8eb5p1b62cejsn8d61ca5b7110",
          },
        };
        fetch("https://mmo-games.p.rapidapi.com/latestnews",config)
        .then((response)=>response.json())
        .then((data)=>setNews(data));
      },[]);

          // FETCH PARA OBTER O JOGO DE ACORDO COM O ID 
          const fetchGameID = (id) => {
            if (!id) return;
        
            const config = {
              method: "GET",
              headers: {
                "x-rapidapi-host": "mmo-games.p.rapidapi.com",
                "x-rapidapi-key": "fa5e562f87mshc8dd60f44da8eb5p1b62cejsn8d61ca5b7110",
              },
            };
            fetch(`https://mmo-games.p.rapidapi.com/game?id=${id}`, config)
              .then((response) => response.json())
              .then((data) => setGameId(data));
          };

    return <ProjectProvider  value={{games, busca, setBusca,news,setNews,gameId, theme,setTheme,fetchGameID}}>{children}</ProjectProvider>
}