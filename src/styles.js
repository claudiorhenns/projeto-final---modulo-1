import styled,{createGlobalStyle} from "styled-components";


export const GlobalStyle = createGlobalStyle`
*{
    font-family: monospace;
}


`;

export const Title = styled.h1 `
    font-size: ${props => `${props.fontSize}px`};
    color: ${props=>props.theme.fontColor};
    text-align: center;
    font-weight: bold;
    margin-top: 0px;
    background: ${props=>props.theme.body} ;
 
    width: 70%;
    padding: 8px;
    
`;

export const TitleMenor = styled(Title)`
       
        font-size: 30px;
`;


export const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-image: url('https://www.toptal.com/designers/subtlepatterns/patterns/double-bubble-outline.png');
    
`;

export const Buttons = styled.button`
        width: 120px;
        background: ${props=>props.theme.body};
        color: ${props=>props.theme.fontColor};
        font-size: 20px;
        border-radius: 5px;
        &:hover{
          background: blue;
        }
`;

export const ButtonsWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 15px;
`;


export const HeaderWrapper = styled.div`
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: start;
    background: cornflowerblue;
    width: 90%;
    height: 40px;
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 15px;
    padding-bottom: 15px;;
    gap: 10px;

    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
    
`;

export const TitleHeader = styled.h1 `
    
    font-size: ${props => `${props.fontSize}px`};
    
    text-align: left;
    font-weight: bold;
    margin-top: 0px;
    background: ${props=>props.cor}; ;
 
   
    padding: 4px;

    display: block; /* Fallback for non-webkit */
  display: -webkit-box;
  height: 0.9em; /* Fallback for non-webkit, line-height * 2 */
  line-height: 1.35em;
  -webkit-line-clamp: 3; /* if you change this, make sure to change the fallback line-height and height */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
    
`;

export const WrapperNews = styled.div`
    width: 90%;
 
  background: white;
  border-radius: 10px;

  display: flex;
  flex-direction: row;
  gap: 5px;

  margin: 8px;
  

  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
`;

export const ContentTextsNews = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 80%;
`;

export const NewsImageWrapper = styled.div`
    width: 30%;  
    background:#f2f2f2;  
   
`;

export const NewsImage = styled.img`
    width: 99%;    
    background:#f2f2f2;  
    padding-left: ${props => `${props.padLeft}px`};
`;

export const TextGeneric = styled.h1 `
    
    font-size: ${props => `${props.fontSize}px`};
   
    text-align: left;
    font-weight: bold;
    margin-top: 0px;
    background: white ;
    padding: 8px;

    display: block; /* Fallback for non-webkit */
    display: -webkit-box;
    height: 0.9em; /* Fallback for non-webkit, line-height * 2 */
    line-height: 1.35em;
    -webkit-line-clamp: 3; /* if you change this, make sure to change the fallback line-height and height */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    
`;

export const URL = styled.a`
    font-size: ${props => `${props.fontSize}px`};
    color: cornflowerblue;
    text-align: left;
    font-weight: bold;
    margin-top: 0px;
    background: white ;   
    padding: 8px;
    text-decoration: underline;

    display: block; /* Fallback for non-webkit */
  display: -webkit-box;
  height: 0.9em; /* Fallback for non-webkit, line-height * 2 */
  line-height: 1.35em;
  -webkit-line-clamp: 3; /* if you change this, make sure to change the fallback line-height and height */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

`;

export const CardGamesWrapper = styled.div`
    width: 200px;     
    background: white;
    border-radius: 10px;  
    display: flex;
    flex-direction: column;
    gap: 10px;  
    margin: 8px;
    padding-bottom: 20px;;  
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
`;

export const CardGameImage = styled.img`
    width: 200px;  
    background:#f2f2f2;  
    padding: 0px;
`;

export const CodigoCard = styled.span`
    font-size: 14px;
    text-align: left;
    padding-left: 8px;
`;

export const NomeCard = styled.span`
    font-size: 18px;
    font-weight: bold;
    padding-left: 8px;
`;

export const TextoCardGames = styled.div`
  font-size: 14px;
  padding-left: 8px;
  line-height: 18px;

  display: block; /* Fallback for non-webkit */
  display: -webkit-box;
  height: 4.0em; /* Fallback for non-webkit, line-height * 2 */
  line-height: 1.35em;
  -webkit-line-clamp: 3; /* if you change this, make sure to change the fallback line-height and height */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`; 

export const TypeGame = styled.div`
  width: 45%;
  border-radius: 5px;
  padding: 5px 15px;
  color: white;
  margin-bottom: 20px;
  margin-left: 8px;
  margin-bottom: 1px;
  font-weight: bolder;
  background: ${props => `${props.corBackground}`};;
`;

export const CardButtonGame = styled.button`
  background:${props=>props.theme.body};  
  border-radius: 5px;
  margin-top: 10px;
  font-size: 18px ;
  font-weight: bold;
  border: 1px grey solid;
  width: 90%;
  margin-left: 8px;
  color: ${props=>props.theme.fontColor};
 
  &:hover{
    background-color:rgba(102, 147, 197, 0.8);  
  }

`;
  
export const DetailsPageWrapper = styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
  padding-top: 20px;
  flex-direction: column;
  width: 80%;

  /* regra p centralizar */
  left: 0;
  right: 0;   
  top: 0;
 	bottom: 0;;
 	margin: 0 auto; 
`;

export const TextoDetails = styled.h1 `
    font-size: ${props => `${props.fontSize}px`};
    color: ${props => `${props.corFont}`};
    text-align: center;
    font-weight: bold;
    margin-top: 0px;
    background: ${props =>`${props.cor}`} ;
 
    width: 100%;
    padding: 5px;    
`;

export const CarrouselWrapper = styled.div`
    width: 100%;  
    background:#f2f2f2;  
    display: flex;
    flex-direction: row;
    
`;

export const CarrouselThunbnails = styled.div`
    width: 24.4%;  
    background:#f2f2f2;  
    display: flex;
    flex-direction: row;
    gap: 2px;
`;

export const Slot = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  background-color: white;
  margin: 10px 0px;
`;

export const SlotBlock = styled.div`
  width: ${props =>`${props.width}%`};
  display: flex;
  flex-direction: ${props =>`${props.dir}`};
`;

export const TextoDesCription = styled.h1 `
    font-size: ${props => `${props.fontSize}px`};
    color: ${props => `${props.corFont}`};
    text-align: justify;
    margin-top: 0px;
    background: ${props =>`${props.cor}`} ; 
    width: 100%;
    padding: 5px;    
`;
export const TituloDescription = styled.h1 `
    font-size: ${props => `${props.fontSize}px`};
    color: ${props => `${props.corFont}`};
    text-align: left;
    font-weight: bold;
    margin-top: 0px;
    background: ${props =>`${props.cor}`} ;
 
    width: 100%;
    padding: 5px;    
`;

export const SlotIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  top: 0px;
  margin: auto;
  margin-left: 0px;;
  margin-right: 0px;
  padding-left: 0px;
  font-size: 32px;
  background: ${props=>props.theme.body} ;
  color: ${props=>props.theme.fontColor};
  width: ${props => `${props.width}%`};
  &:hover{
    color:rgba(56, 56, 56, 0.61);  
  }

`;

export const SlotConfig = styled.div`
  width: ${props =>`${props.width}%`};
  display: flex;
  flex-direction: ${props =>`${props.dir}`};
  background-color: rgba(221, 223, 239, 0.39) ;
  border: 1px solid grey;
  padding: 10px 0px;
 
`;

export const TextoConfig = styled.h1 `
    font-size: ${props => `${props.fontSize}px`};
    color: ${props => `${props.corFont}`};
    text-align: justify;
    font-weight: bold;
    margin-top: 0px;
    background: ${props =>`${props.cor}`} ; 
    width: 100%;
    padding: 5px;    
`;

export const InputComent = styled.input`
    width: ${props =>`${props.width}%`};
    height: ${props =>`${props.heigth}px`};;
    padding-left: 5px;
    border-radius: 4px;
    padding-top: 10px;
    padding-bottom: 10px;
`;

export const InputArea = styled.textarea`
    width: ${props =>`${props.width}%`};
    rows: ${props =>`${props.heigth}`};
    margin: 10px 0px;
    padding-left: 5px;
`;

export const SaveComentButton = styled.button`
  background:${props=>props.theme.body};  
  border-radius: 5px;
  color: ${props=>props.theme.fontColor};
  font-size: 18px ;
  font-weight: bold;
  border: 1px grey solid;
  width: 97%;
  padding: 8px 0px;
  &:hover{
    background-color:rgba(6, 116, 33, 0.82);  
  }

`;

export const PageContent = styled.div`
  display: flex;
  
  justify-content: center;
  align-items: center;
  padding: 15px;
  padding-top: 80px;
  flex-direction: column;
  width: 60%;
  background-color: rgba(248, 248, 248, 1);
  /* regra p centralizar */
  left: 0;
  right: 0;   
  top: 0;
 	bottom: 0;;
 	margin: 0 auto; 
`;

export const HeaderWrapperDetails = styled.div`
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background: ${props=>props.theme.body};
    width: 80%;
    height: 30px;
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 15px;
    padding-bottom: 15px;;
   

    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;

    left: 0px;
    right: 0px;
    margin: auto;
    
`;

export const TextoDetailsHeader = styled.h1 `
    font-size: ${props => `${props.fontSize}px`};
    color: ${props=>props.theme.fontColor};
    
    font-weight: bold;
    margin-top: 0px;
    background: ${props=>props.theme.body} ;
    
    width: 100%;
    padding: 5px;   
    left: 0;
    right: 0;
    margin: auto;
    align-content: center;
`;

export const SlotBlockHeader = styled.div`
  width: ${props =>`${props.width}%`};
  display: flex;
  flex-direction: ${props =>`${props.dir}`};
  justify-content: center;
  align-content: center;
  left:0px;
  right: 0px;
  margin:auto;
`;

export const SlotHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  left: 0px;
  right: 0px;
  margin: auto;
  
`;

export const TextoTitleHeader = styled.h1 `
    font-size: ${props => `${props.fontSize}px`};
    color: ${props=>props.theme.fontColor};
    left: 0px;
    right: 0px;
    margin: auto;
    font-weight: bold;
    margin-top: 0px;
    background: ${props=>props.theme.body} ;
    justify-content: center;
    align-content: center;
    text-align: center;
    width: 40%;
    padding: 5px;   
    
`;
export const SlotBlockHeaderList = styled.div`
  width: ${props =>`${props.width}%`};
  display: flex;
  flex-direction: ${props =>`${props.dir}`};
  justify-content: start;
  align-content: initial;
  align-content: flex-start;
  
`;

export const InputFiledHeader = styled.input`
    width: ${props =>`${props.width}%`};
    height: ${props =>`${props.heigth}px`};;
    padding-left: 10px;
    border-radius: 10px;
    justify-content: right;
    margin-right: 0px;
    align-content: flex-end;
`;

export const SlotBlockHeaderGen = styled.div`
  width: ${props =>`${props.width}%`};
  display: flex;
  flex-direction: ${props =>`${props.dir}`};
  justify-content: flex-end;
`;

export const MensagemErro = styled.h1`
   font-size: 16px;
    color: red;
    left: 0px;
    right: 0px;
    margin: auto;
    font-weight: bold;
    margin-top: 0px;
    justify-content: center;
    align-content: center;
    text-align: center;
    
`;

export const SlotCorBar = styled.div`
  width: ${props =>`${props.width}px`};
  display: flex;
  flex-direction: column;
  background-color:  grey ;
  position: fixed;
  justify-content: left;
  align-content: left;
  gap:5px;
  margin-top: 19%;

  
`;

export const SquareColor = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${props=>props.cor} ;

  &:hover{
    border: 2px solid green;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 5px;

  flex-wrap: wrap;
  justify-content: center;
  padding: 15px;
  padding-top: 100px;
  width: 70%;
 left: 0;
 right: 0;
 margin: auto;
`;

export const CardButtonNews = styled.button`
  background:${props=>props.theme.body};  
  border-radius: 5px;
  margin-bottom: 20px;
  margin-top: 20px;
  font-size: 14px ;
  font-weight: bold;
  border: 1px grey solid;
  width: 30%;
  height: 40px;
  margin-left: 8px;
  color: ${props=>props.theme.fontColor};
 
  &:hover{
    background-color:rgba(102, 147, 197, 0.8);  
  }

`;
export const ArrowUp = styled.div`
  width: 0px; 
  height: 0px; 
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  
  border-bottom: 25px solid green;
  margin-top: 20px;
  
  &:hover{
  width: 0px; 
  height: 0px; 
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  
  border-bottom: 25px solid greenyellow;
  margin-top: 20px;
  
  }
`;

export const ArrowDown = styled.div`
   width: 0px; 
  height: 0px; 
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  
  border-top: 25px solid red;
  margin-top: 20px;
  &:hover{
  width: 0px; 
  height: 0px; 
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  
  border-top: 25px solid rebeccapurple;
  margin-top: 20px;
  }
`;

export const TextoVote= styled.h1`
    font-size: 20px;
    color:  ${props=>props.valor> 0 ? 'green' : 'red'};
    margin-top: 20px;
    font-weight: bold;        
    justify-content: left;    
    text-align: left;
    width: 100%;
    padding-left: 5px;
`;

export const Linha = styled.hr`
   border-bottom:1px solid black;
    
`;