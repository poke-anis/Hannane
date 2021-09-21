import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { motion ,useDragControls} from 'framer-motion';
import Rose from '../Assets/Images/Rose.png'
import Tulipe from '../Assets/Images/Tulipe.png'

const Bubblediv = styled(motion.div)`
    grid-column-start:2;
    grid-column-end:3;
    grid-row-start:2;
    grid-row-end:3;
    margin-top:40px;
    cursor: grab;
    border-radius:100px;
    width:200px;
    height:200px;
    -webkit-border-radius: 50%;
	-moz-border-radius: 50%;
	border-radius: 50%;
    -webkit-box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2), inset 0px 10px 30px 5px rgba(255, 255, 255, 1);
	-moz-box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2), inset 0px 10px 30px 5px rgba(255, 255, 255, 1);
	box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2), inset 0px 10px 30px 5px rgba(255, 255, 255, 1);

`
const Image =styled(motion.img)`
    width:60px;
    margin:40px 50px;
    pointer-events: none;

`
const Bubble = (props) => {
    const {Roseclick ,setRoseclick} = props
    const [BulleInfo,setBulleInfo] = useState({})
    const dragControls = useDragControls()
    function startDrag(event) {
      dragControls.start(event, { snapToCursor: true })
    }
    
    useEffect(()=>{
        
        console.log(Roseclick)
        if (BulleInfo.point)
        {
        var x = BulleInfo.point.x*100/1500;
        var y = BulleInfo.point.y*100/730;

        }
        if (x > 35 && x < 65) {
            if (y > 45 && y < 65) {
                setRoseclick({place:'Center',
                turn: 0})
            }
            else if (y > 0 && y < 45) {
                setRoseclick({place:'Top',
                                turn: 2})
                console.log(Roseclick)
            }
            else if (y > 65 && y < 90) {
                setRoseclick({place:'Bot',
                turn: 'ok'})
            }
        }else if (x > 0 && x < 35 ) { 
            setRoseclick({place:'Left',
            turn: 1})
        }else if (x > 65 && x <100 && y > 30 && y < 45 ) { 
            setRoseclick({place:'Right',
            turn: 3})
        }

    },[BulleInfo.point])
    return(
                    <Bubblediv
                    drag
                    layout 
                    onDrag={
                        (event, info) => setBulleInfo(info)}
                    dragControls={dragControls}
                    onTap={()=> {
                    console.log(Roseclick)}}
                    animate={{ rotate: 360 }}
                    dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}

                    >  
                        <Image 
                            src={Rose}
                            onPointerDown={startDrag}  
                        />  
                    </Bubblediv>
)
}

export default Bubble;