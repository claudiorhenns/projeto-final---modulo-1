import React from 'react';
import {handleGenerateBackground} from '../../utils';
import { useNavigate } from 'react-router';
import { CardButtonGame, CardGameImage, CardGamesWrapper, CodigoCard, NomeCard, TextoCardGames, TypeGame } from '../../styles';

export const Card =({type,photo,id,name,description, titleButton})=>{

       const navigate = useNavigate();

       const typeGame = handleGenerateBackground(type);
     
       return(     
       <CardGamesWrapper>
          <CardGameImage src={photo} alt={name} />        
          <CodigoCard>Nº{id}  </CodigoCard>
          <NomeCard>{name}</NomeCard>
          <TextoCardGames>{description}</TextoCardGames>        
          <TypeGame corBackground={typeGame}>{type}</TypeGame>      
          <CardButtonGame onClick={() => navigate(`/games/${id}`)}>{titleButton}</CardButtonGame>  
      </CardGamesWrapper>
      )   

}



