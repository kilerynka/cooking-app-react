import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faClock as farClock } from '@fortawesome/free-regular-svg-icons'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';




  

export default function Card(props) {
    console.log(props.item.recipes)
    
    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
      setAlignment(newAlignment);
    };
    
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
        <div className='card-img' style={{backgroundImage: `url(${props.item.img})`}}></div>
        <div className='info'> 
            <h2 className='info-icon1'><FontAwesomeIcon className='fIcon'  icon={farClock}  />{props.item.time} </h2>
            <h2 className='info-icon2'><FontAwesomeIcon className='fIcon'  icon={faUserFriends} /> {props.item.portions}</h2>
        </div>
        <div className='general'>
        <ToggleButtonGroup
             className='buttonGroup'
             color="primary"
             value={alignment}
             exclusive
             onChange={handleChange}>
        <ToggleButton style={{fontSize: "14px", height: "20px", border: "none"}} onClick={showIng} value="web">Składniki</ToggleButton>
        <ToggleButton style={{fontSize: "14px", height: "20px", border: "none"}} onClick={showDesc} value="android">Przygotowanie</ToggleButton>
        </ToggleButtonGroup>
            { description ? <ul className="general-ingList">{ ingridients} </ul> :  <ol className="general-description"> {howIsMade}</ol> }
        </div>
        
     </article>
    ) 
}

