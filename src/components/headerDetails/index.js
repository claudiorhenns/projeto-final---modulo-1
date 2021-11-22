import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { Buttons, DetailsPageWrapper, HeaderWrapper, HeaderWrapperDetails, Slot, SlotBlock, SlotBlockHeader, SlotHeader, SlotIcon, TextoDetails, TextoDetailsHeader, Title, TitleHeader } from "../../styles";
import { projectContext } from "../contexts/ProjectContext";
import { FaAngleDoubleLeft } from 'react-icons/fa';

export const HeaderDetails =({title}) =>{
    const navigate= useNavigate();
    const {busca,setBusca}= useContext(projectContext);

    return (

            <>
           <HeaderWrapperDetails>
           <DetailsPageWrapper>
                <SlotHeader>
                    <SlotBlockHeader width={75} dir={'row'}>
                        <SlotIcon cor='cornflowerblue' width={10}> <FaAngleDoubleLeft onClick={() => navigate(-1)}/> </SlotIcon>
                        <TextoDetailsHeader fontSize = {40} cor='cornflowerblue' corFont='white'>{title} </TextoDetailsHeader>
                    </SlotBlockHeader>
                </SlotHeader>

            </DetailsPageWrapper>                               
           </HeaderWrapperDetails>
           
            </>
    )
}