import React from 'react'
import CocktailList from '../../../final/src/components/CocktailList'
import SearchForm from '../../../final/src/components/SearchForm'

export default function Home() {
  return (
    <main>
      <SearchForm/>
      <CocktailList/>
    </main>
  )
}
