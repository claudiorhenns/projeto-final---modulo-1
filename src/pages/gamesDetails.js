import React, { useContext } from "react";
import { useParams } from "react-router";
import { useEffect ,useState} from "react/cjs/react.development";
import { useNavigate } from "react-router";
import { projectContext } from "../components/contexts/ProjectContext";
import { CarrouselThunbnails, CarrouselWrapper, DetailsPageWrapper, NewsImage, PageContent, Slot, SlotBlock, SlotConfig, SlotIcon, TextoConfig, TextoDesCription, TextoDetails, Title, TitleHeader,TituloDescription } from "../styles";
import { FaReply } from 'react-icons/fa';
import { AddComents } from "../components/addComents";
import { GetComents } from "../components/getComents";
import { HeaderDetails } from "../components/headerDetails";
import { handleGenerateBackground } from "../utils/index";
import { ThemaGlobal } from "../components/getThema";



export const GamesDetails = () =>{

  const {fetchGameID,gameId,setGameId} = useContext(projectContext);
  const {id} = useParams();
  const navigate = useNavigate();

  const [toggle, setToggle] = useState('1');
  const [photo,setPhoto] = useState(null);

  const [type, setType] = useState();
  
  
  useEffect(()=>{
    fetchGameID(id); 
    window.scrollTo(0, 0);
  },[]);
    
  useEffect(()=>{
    setPhoto(gameId.screenshots? gameId.screenshots[toggle].image : gameId.thumbnail);

  },[toggle]);

  useEffect(()=>{
    setPhoto(gameId.screenshots? gameId.screenshots[0].image : gameId.thumbnail);

  },[gameId]);

    return <>
      <ThemaGlobal/>
      <HeaderDetails title = {gameId.title}/>
      <PageContent>
          <DetailsPageWrapper>            
                       
                
                <NewsImage src={photo}/>
                <CarrouselWrapper>
                
                <CarrouselThunbnails>
                    {(gameId.screenshots != null)?
                    gameId.screenshots.map((photo,index)=>(
                                     <>
                       
                          <NewsImage src={photo.image} padLeft={3}  onClick={() => setToggle(index)}/>
                                                         
                        </>
                      )): null
                    }  
                </CarrouselThunbnails>                                                    
                   
                </CarrouselWrapper>


                <Slot>
                    <SlotBlock width={20} dir={'column'}>
                        <TituloDescription fontSize = {30} cor = {"white"}>Genero </TituloDescription>
                        <TextoDesCription fontSize = {20} cor = { gameId.genre? handleGenerateBackground(gameId.genre): 'white'}>{gameId.genre} </TextoDesCription>
                    </SlotBlock>
                    <SlotBlock width={80} dir={'column'}>
                        <TituloDescription fontSize = {30} cor = {"white"}>Plataforma </TituloDescription>
                        <TextoDesCription fontSize = {20} cor = {"white"}>{gameId.platform} </TextoDesCription>
                    </SlotBlock>
                </Slot>

                <Slot>
                    <SlotBlock width={100} dir={'column'}>
                      <TituloDescription fontSize = {30} cor = {"white"}>Descri????o </TituloDescription>
                      <TextoDesCription fontSize = {16} cor = {"white"}>{gameId.description} </TextoDesCription>
                    </SlotBlock>
                </Slot>

                <Slot>
                    <SlotConfig width={100} dir={'column'}>
                    <TituloDescription fontSize = {25} >Requisitos do Sistema </TituloDescription>
                       <SlotBlock width={100} dir={'row'}>                       
                          <SlotBlock width={25} dir={'row'}>
                              <TextoConfig fontSize = {16} >Sistema Operacional: </TextoConfig>
                          </SlotBlock>
                             <TextoDesCription fontSize = {16} >{(gameId.minimum_system_requirements)?gameId.minimum_system_requirements.os: "Sem informa????es"} </TextoDesCription>
                       </SlotBlock>

                      <SlotBlock width={100} dir={'row'}>                                             
                          <SlotBlock width={25} dir={'row'}>
                              <TextoConfig fontSize = {16} >Processador: </TextoConfig>
                          </SlotBlock>
                             <TextoDesCription fontSize = {16} >{(gameId.minimum_system_requirements)?gameId.minimum_system_requirements.processor: "Sem informa????es"} </TextoDesCription>
                      </SlotBlock>

                      <SlotBlock width={100} dir={'row'}>                                             
                          <SlotBlock width={25} dir={'row'}>
                              <TextoConfig fontSize = {16} >Mem??ria: </TextoConfig>
                          </SlotBlock>
                             <TextoDesCription fontSize = {16} >{(gameId.minimum_system_requirements)?gameId.minimum_system_requirements.memory: "Sem informa????es"} </TextoDesCription>
                      </SlotBlock>

                      <SlotBlock width={100} dir={'row'}>                                             
                          <SlotBlock width={25} dir={'row'}>
                              <TextoConfig fontSize = {16} >Gr??ficos: </TextoConfig>
                          </SlotBlock>
                             <TextoDesCription fontSize = {16} >{(gameId.minimum_system_requirements)?gameId.minimum_system_requirements.graphics: "Sem informa????es"} </TextoDesCription>
                      </SlotBlock>

                      <SlotBlock width={100} dir={'row'}>                                             
                          <SlotBlock width={25} dir={'row'}>
                              <TextoConfig fontSize = {16} >Armazenamento: </TextoConfig>
                          </SlotBlock>
                             <TextoDesCription fontSize = {16} >{(gameId.minimum_system_requirements)?gameId.minimum_system_requirements.storage: "Sem informa????es"} </TextoDesCription>
                      </SlotBlock>
                      
                      
                    </SlotConfig>
                </Slot>

                <AddComents id={id}/>
                
              
          <TitleHeader>DevInHouse 2021 - Projeto Final M??dulo Front End</TitleHeader>
          <TitleHeader>Claudio Lima Rhenns</TitleHeader>
         
          </DetailsPageWrapper>
          </PageContent>
          </>

};