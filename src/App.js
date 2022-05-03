import React from 'react'
import NavBar from './components/NavBar'
import Navigation from './components/Navigation'
import Card from './components/Card'
import recipes from './recipes'


export default function App() {
  const cards = recipes.recipes.map( item => <Card key={item.id} data={recipes} item={item}/>)
  return(
    <>
      <NavBar/>
      <section className='wrapRecipes'>
      {cards}
      </section>
      <Navigation />
    </>
  )
}