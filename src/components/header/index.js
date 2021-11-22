import React, { useContext, useState } from "react";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { useNavigate } from "react-router";
import { Buttons, DetailsPageWrapper, HeaderWrapper, HeaderWrapperDetails, InputComent, InputFiledHeader, SlotBlock, SlotBlockHeader, SlotBlockHeaderGen, SlotBlockHeaderList, SlotHeader, SlotIcon, TextoDetailsHeader, TextoTitleHeader, Title, TitleHeader } from "../../styles";
import { projectContext } from "../contexts/ProjectContext";

export const Header =({title}) =>{
    const navigate= useNavigate();
    const {busca,setBusca}= useContext(projectContext);

    return (

            <>

            <HeaderWrapperDetails>
            <DetailsPageWrapper>
                <SlotHeader>
                    <SlotBlockHeaderList width={80} dir={'row'}>
                        <SlotIcon cor='cornflowerblue' width={25}> <FaAngleDoubleLeft onClick={() => navigate(-1)}/> </SlotIcon>
                        <TextoTitleHeader fontSize = {30} cor='cornflowerblue' >{title} </TextoTitleHeader>
                        <SlotBlockHeaderGen width={30} dir={'row'}>
                            <InputFiledHeader width={40} type='text' placeholder="Pesquisar..." onChange={(event)=>(setBusca(event.target.value))}/>
                        </SlotBlockHeaderGen>
                    </SlotBlockHeaderList>
                </SlotHeader>

            </DetailsPageWrapper>                               
           </HeaderWrapperDetails>

           {/*<HeaderWrapper>
                <Buttons onClick={()=> navigate(-1)}>Voltar</Buttons>
                <TitleHeader fontSize = {30} corFont = {"white"}> {title} </TitleHeader>
                <input type='text' placeholder="Pesquisar..." onChange={(event)=>(setBusca(event.target.value))}/>
              
           </HeaderWrapper>*/}
           
            </>
    )
}