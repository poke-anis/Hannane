import React, {useState} from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const BubbleFloat = {
    place:i => ({y:-900,
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
const MiniBubbles = styled(motion.div)`
    border-radius:100px;
    width:50px;
    height:50px;
    -webkit-border-radius: 50%;
	-moz-border-radius: 50%;
	border-radius: 50%;
    -webkit-box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2), inset 0px 2px 6px 1px rgba(255, 255, 255, 1);
	-moz-box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2), inset 0px 2px 6px 1px rgba(255, 255, 255, 1);
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2), inset 0px 2px 6px 1px rgba(255, 255, 255, 1);
    bottom:-100px;
    position: relative;

`
const MiniBubble = styled.div`
display: flex;
justify-content:space-between;
width:100%;`
const Bubbles = (props) => {

    return(

    
        <MiniBubble>
        <MiniBubbles
        custom={Math.random()}
         variants={BubbleFloat3}
        animate="place"
       />
        <MiniBubbles
        custom={Math.random()}
        variants={BubbleFloat}
        animate="place"/>
        <MiniBubbles
        custom={Math.random()}
        variants={BubbleFloat2}
        animate="place"/>
        <MiniBubbles
        custom={Math.random()}
        variants={BubbleFloat}
        animate="place"/>
        <MiniBubbles
        custom={Math.random()}
        variants={BubbleFloat2}
        animate="place"/>
        <MiniBubbles
        custom={Math.random()}
        variants={BubbleFloat3}
        animate="place"/>
        <MiniBubbles
        custom={Math.random()}
        variants={BubbleFloat2}
        animate="place"/>
        <MiniBubbles
        custom={Math.random()}
        variants={BubbleFloat}
        animate="place"/>
        <MiniBubbles
        custom={Math.random()}
        variants={BubbleFloat2}
        animate="place"/>
        <MiniBubbles
        custom={Math.random()}
        variants={BubbleFloat3}
        animate="place"/>
        <MiniBubbles
        custom={Math.random()}
        variants={BubbleFloat2}
        animate="place"/>
        </MiniBubble>
)
}

export default Bubbles;