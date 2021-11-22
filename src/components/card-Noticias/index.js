import React from 'react';
import PropTypes from 'prop-types';
import {handleGenerateBackground} from '../../utils';
import { useNavigate } from 'react-router';
import { ContentTextsNews, NewsImage, TextGeneric, TitleHeader, WrapperNews,URL,NewsImageWrapper, CardButtonGame, CardButtonNews } from '../../styles';
import { Link } from 'react-router-dom';

export const CardNoticias =({type,photo,id,name,description, url,titleButton})=>{

       const navigate = useNavigate();

       const typeGame = handleGenerateBackground(type);
     
        return(
     
       <WrapperNews>
        <NewsImageWrapper>
          <NewsImage src={photo} alt={name} />
        </NewsImageWrapper>

        
        <ContentTextsNews>
        
            <TitleHeader fontSize={20} cor={"white"}>{name} </TitleHeader>
            <TextGeneric fontSize={14}>{description}</TextGeneric>
            <a href={url} target="_blank" rel="noopener noreferrer"><CardButtonNews >Veja no site</CardButtonNews></a>
            
       </ContentTextsNews>
      </WrapperNews>
        )

    

}

CardNoticias.propTypes ={
    name: PropTypes.string,
    photo: PropTypes.string,
    hp: PropTypes.number,
    defense: PropTypes.number,
    attack: PropTypes.number,
   /* types: PropTypes.arrayOf(PropTypes.string)*/
 }
