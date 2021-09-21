import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Bubble from './Bubble';
import Bubbles from './Bubbles';
import Sparkles from './Sparkles';
import Mdr from './Mdr';
import Honey from './Honey';
import Toppng from '../Assets/Images/Top.png';
import Leftpng from '../Assets/Images/Left.png'
import Rightpng from '../Assets/Images/Right.png'
import Botpng from '../Assets/Images/Bot.png'

import { motion ,useAnimation,AnimatePresence} from 'framer-motion';


const Center = styled.div`
    grid-column-start:2;
    grid-column-end:3;
    grid-row-start:2;
    grid-row-end:3;
    display:grid;
    grid-template-columns:25% auto 25%;
    grid-template-rows: 30% auto 30%;


`;

const Carac = styled(motion.p)`
        grid-column-start:1;
        grid-column-end:4;
        grid-row-start:2;
        grid-row-end:3;
        text-align: center;
        color: #fff;
        font-size: 2rem;
        font-family: 'Italianno', cursive;
`

const Titre = styled.p`
        grid-column-start:1;
        grid-column-end:4;
        grid-row-start:1;
        grid-row-end:2;
        text-align: center;
        color: #fff;
        font-size: 3rem;
        flex-basis: 100%;
        font-family: 'Italianno', cursive;
`;
const Container = styled.div`
        display:grid;
    grid-template-columns:25% auto 25%;
    grid-template-rows: 30% 30% auto 1%;
    height: 100vh;
    width:100vw;
`;


const Bottom = styled.div`
    grid-column-start:1;
    grid-column-end:4;
    grid-row-start:4;
    grid-row-end:5;
    display: flex;
    align-items:center;
    max-width: 100%;

`
const Left = styled.div`
    grid-column-start:1;
    grid-column-end:2;
    grid-row-start:2;
    grid-row-end:3;
    display: flex;
    align-items:center;
    flex-direction:column;

    p {
        color: #fff;
    }

`
const Right = styled.div`
    grid-column-start:3;
    grid-column-end:4;
    grid-row-start:2;
    grid-row-end:3;
    display: flex;
    align-items:center;
    flex-direction:column;

    p {
        color: #fff;
    }
`
const Bot = styled.div`
    grid-column-start:2;
    grid-column-end:3;
    grid-row-start:3;
    grid-row-end:4;
    display: flex;
    align-items:center;
    flex-direction:column;

    p {
        color: #fff;
    }

`
const Top = styled.div`
    grid-column-start:2;
    grid-column-end:3;
    grid-row-start:1;
    grid-row-end:2;
    display: flex;
    align-items:center;
    flex-direction:column;

    p {
        color: #fff;
    }

`
const Arrowleft = styled.img`
    max-width:90px;
    max-height:90px;
    
`
const ArrowTop = styled.img`
    max-width:90px;
    max-height:90px;
    
`
const ArrowRight = styled.img`
    max-width:90px;
    max-height:90px;
    order: 5;
    
`
const ArrowBot = styled.img`
    max-width:90px;
    max-height:90px;
    order: 5;
    
`
const Divpng = styled.div`

    flex-basis: 40%;

`
const Section = styled.section`
    background: #131313;
    overflow:hidden;
    `;


const Divpnggauche = {
    gridColumnStart:1, 
    gridColumnEnd:2,
    gridRowStart:2,
    gridRowEnd:3,
    display:'flex',
    alignItems:'center',
}
const Divpnggauchehaut = {
    gridColumnStart:1, 
    gridColumnEnd:2,
    gridRowStart:1,
    gridRowEnd:2,
    display:'flex',
    alignItems:'flexStart',
}
const Divpngdroite = {
    gridColumnStart:3, 
    gridColumnEnd:4,
    gridRowStart:2,
    gridRowEnd:3,

}
const Divpngdroitebas = {
    gridColumnStart:3, 
    gridColumnEnd:4,
    gridRowStart:3,
    gridRowEnd:4,

}

const Test = () => { 
    const [Roseclick ,setRoseclick] = useState({place:'Center',
                                                Turn:'no'})
    const controls = useAnimation()
console.log(Roseclick)
const Anim = {
    place:{            
        opacity: 1,
        transition: { duration: 3 },
        exit: { opacity: 0 }}
}

    return(
        <Section>
            <Container>
                <Top>
                    {Roseclick.place==='Top'?<Bubble id="Bubble" Roseclick={Roseclick} setRoseclick={setRoseclick}/>:null}
                </Top>
                <Center >
                    <AnimatePresence>
                    {Roseclick.place =='Left'?<Divpng style={Divpnggauchehaut}><ArrowTop src={Toppng}/></Divpng>:null}

                    <Titre>Pour la plus belle des fleurs</Titre>
                    {Roseclick.place =='Center'?<Divpng style={Divpnggauche}><Arrowleft src={Leftpng} /></Divpng>:null}
                    
                    <div style={{display:'flex',justifyContent:'center'}}>{Roseclick.place =='Center'?<Bubble id="Bubble" Roseclick={Roseclick} setRoseclick={setRoseclick} />:null}
</div>
                    

                    {Roseclick.place==='Left'?<Carac key="Left" animate="place" initial= {{opacity: 0}} variants={Anim}>La plus petillante</Carac>:
                    Roseclick.place==='Top'?<Carac key="Top" animate="place" initial= {{opacity: 0}} variants={Anim}>La plus drole</Carac>:
                    Roseclick.place==='Bot' && Roseclick.turn === "ok"? <Carac key="Center" animate="place" initial= {{opacity: 0}} variants={Anim}>La plus Rayonnante</Carac>:
                    Roseclick.place==='Right'?<Carac key="Right" animate="place" initial= {{opacity: 0}} variants={Anim}>La plus Douce</Carac>:null}
                    {Roseclick.place =='Top'?<Divpng style={Divpngdroite}><ArrowRight src={Rightpng}/></Divpng>:null}
                    {Roseclick.place =='Right'?<Divpng style={Divpngdroitebas}><ArrowBot src={Botpng}/></Divpng>:null}
                    </AnimatePresence>
                </Center>
                    <Bottom>
                    {Roseclick.place==='Left'?<Bubbles />:null}
                    {Roseclick.place==='Right'?<Honey />:null}
                    {Roseclick.place==='Bot'?<Sparkles />:null}
                    {Roseclick.place==='Top'?<Mdr />:null}
                </Bottom>
                <Left id="Left">
                    {Roseclick.place==='Left'?<Bubble id="Bubble" Roseclick={Roseclick} setRoseclick={setRoseclick}/>:null}
                </Left>
                <Right>
                    {Roseclick.place==='Right'?<Bubble id="Bubble" Roseclick={Roseclick} setRoseclick={setRoseclick}/>:null}
                </Right>
                <Bot>
                    {Roseclick.place==='Bot'?<Bubble id="Bubble" Roseclick={Roseclick} setRoseclick={setRoseclick}/>:null}
                </Bot>
            </Container>
            
        </Section>
    );
};



export default Test;