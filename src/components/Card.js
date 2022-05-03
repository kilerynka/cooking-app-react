import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faClock as farClock } from '@fortawesome/free-regular-svg-icons'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'




  

export default function Card(props) {
    const [description, setDescription] = React.useState(true)
    

    function showIng() {
        setDescription(true)
    }

    function showDesc() {
        setDescription(false)
    }
  
    const ingridients = props.item.ingridients.map(item => {
        return <li key={item}>{"-" + item}</li> 
        
    })

    const howIsMade = props.item.description.map(item => <li key={item}>{item}</li>)

    return(
     <article className='card'>
        <h1 className='card-title'>{props.item.name}</h1>
        <img src={props.item.img} className='card-img' />
        <div className='info'> 
            <h2 className='info-icon1'><FontAwesomeIcon className='fIcon'  icon={farClock}  />{props.item.time} </h2>
            <h2 className='info-icon2'><FontAwesomeIcon className='fIcon'  icon={faUserFriends} /> {props.item.portions}</h2>
        </div>
        <div className='general'>
            <h3 onClick={showIng} /* style={description ? {color: "gray"} : {color: "black"}} */ className='general-ing'>Składniki</h3>
            <h3 onClick={showDesc} /* style={description ? {color: "black"} : {color: "gray"} }*/ className='general-desc'>Przygotowanie</h3>
            { description ? <ul className="general-ingList">
            {/* <li>- Boczek 60g</li>
            <li>- Makaron spaghetti 120g</li>
            <li>- Śmietana 30% 50ml</li>
            <li>- Ser parmezan 15g</li>
            <li>- Jajko 1 sztuka</li> */
            ingridients}
          </ul> :  <ol className="general-description">
            {/* 1. Wstaw wodę na makaron. <br />
            2. Pokrój boczek w kostke i smaż na oliwie.<br />
            3. Ugotuj makaron wg. wskazówek na opakowaniu. <br />
            4. Żółtko z jajka wbij do miski, dodaj śmietankę i ser, posól i
            popieprz. Wymieszaj wszystko. <br />
            5. Gotowy makaron odcedź, wrzuć na patelnie do boczku, dodaj do
            niego masę z jajek i sera. Wymieszaj wszystko i dwie minuty
            podgrzewaj na małym ogniu. */
            howIsMade}
          </ol> }
        </div>
        
     </article>
    )
}

