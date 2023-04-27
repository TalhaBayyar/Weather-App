import React from 'react'
import DropDown from './DropDown'
import DayList from './DayList'
import Footer from './Footer'

function Container() {
  return (
    <div className='container mx-auto'> 
        <div className="flex justify-center">
          <div className="p-4 rounded-lg shadow-lg"> 
            <DropDown />
            <DayList />  
          </div>
        </div>  
        <Footer />     
    </div>
  )
}

export default Container