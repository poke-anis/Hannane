import React, {useState} from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Mdr from '../Assets/Images/OIP.png'
const BubbleFloat = {
    place:i => (
        {
        y:-900,
        x:[0,5,-20,15,-30,0],
        transition:{
            delay: i,
            ease:"easeIn",
            duration: 4,
            }})
}
const BubbleFloat2 = {
    place:i => ({y:-900,
        x:[0,20,5,-30,15,0],
        transition:{
            delay: i,
            ease:"easeIn",
            duration: 4,
            }})
 
}
const BubbleFloat3 = {
    place:i => ({y:-900,
        x:[0,15,0,40,-30,0],
        transition:{
            delay: i,
            ease:"easeIn",
            duration: 4,
            }})
}
const MiniBubbles = styled(motion.img)`
    width:50px;
    height:50px;
    position: relative;
    bottom:-50px;
`
const MiniBubble = styled.div`
display: flex;
justify-content:space-between;
width:100%;`
const Bubbles = (props) => {

    return(

    
        <MiniBubble>
        <MiniBubbles
        src={Mdr}
        custom={Math.random()}
         variants={BubbleFloat3}
        animate="place"
        />
        <MiniBubbles
        src={Mdr}
        custom={Math.random()}
        variants={BubbleFloat}
        animate="place"/>
        <MiniBubbles
        src={Mdr}
        custom={Math.random()}
        variants={BubbleFloat2}
        animate="place"/>
        <MiniBubbles
        src={Mdr}
        custom={Math.random()}
        variants={BubbleFloat}
        animate="place"/>
        <MiniBubbles
        src={Mdr}
        custom={Math.random()}
        variants={BubbleFloat2}
        animate="place"
        initial= "debut"/>
        <MiniBubbles
        src={Mdr}
        custom={Math.random()}
        variants={BubbleFloat3}
        animate="place"/>
        <MiniBubbles
        src={Mdr}
        custom={Math.random()}
        variants={BubbleFloat2}
        animate="place"/>
        <MiniBubbles
        src={Mdr}
        custom={Math.random()}
        variants={BubbleFloat}
        animate="place"/>
        <MiniBubbles
        src={Mdr}
        custom={Math.random()}
        variants={BubbleFloat2}
        animate="place"/>
        <MiniBubbles
        src={Mdr}
        custom={Math.random()}
        variants={BubbleFloat3}
        animate="place"/>
        <MiniBubbles
        src={Mdr}
        custom={Math.random()}
        variants={BubbleFloat2}
        animate="place"/>
        </MiniBubble>
)
}

export default Bubbles;