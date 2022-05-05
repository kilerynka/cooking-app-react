import React from 'react'
import NavBar from './components/NavBar'
import Navigation from './components/Navigation'
import Card from './components/Card'
import recipes from './recipes'
import Search from './components/Search'


export default function App() {
  const [data, setData] = React.useState(recipes)
  const [searchedCard, setSearchCard] = React.useState()
  console.log(searchedCard)
if(data) {
  console.log("true")
}

 
  function search(event) {
    const searchText = event.target.value.toLowerCase()
    // let recipeName = recipes.recipes.map(item => item.name)
    // recipeName = recipeName.filter(recipe => recipe.toLowerCase().includes(searchText))
    // console.log(recipeName)
    // setData(recipeName)
    let found = recipes.recipes.find(element => element.name.toLocaleLowerCase().includes(searchText))
    setData([found])
    let cards = [...document.querySelectorAll(".card")]
    const sectionCards = document.querySelector(".wrapRecipes")
     let searchedCard = <Card item={data} />
     setSearchCard([searchedCard])
    
  



  }
  console.log(data.length < recipes.recipes.length)


  let cards = recipes.recipes.map( item => <Card key={item.id}  item={item}/>) 
  
 
  return(
    <>

      <NavBar/>
      <form>
            <input onChange={search} className='searchInput' placeholder='szukaj...'/>
        </form>
      <section className='wrapRecipes'>
      {cards}
      </section>
      <Navigation />
    </>
  )
}