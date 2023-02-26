import React from 'react'
import Discoverplace from '../../discoverplace/Discoverplace'
import Explore from '../../explore/Explore'
import Footer from '../../footer/Footer'
import Footerlast from '../../footerlast/Footerlast'
import New from '../../newlylisted/New'
import Searchneigh from '../../searchneighbor/Searchneigh'
import Truliahelp from '../../truliahelp/Truliahelp'
import Rent from './Rent'

const Buy = () => {
  return (
   <>
      <Rent />
    <New />
    <Truliahelp />
    <Searchneigh />
    <Discoverplace />
    <Footer />
    <Footerlast/>
    </>
  )
}

export default Buy