import React from 'react'
import './MainPage.css'
import DataCard from '../card/Card'
const MainPage = () => {

    function handelsubmit(e){
    e.preventDefault()
    console.log("file submited ")
  }
  return (
    <div>
      <form onSubmit={handelsubmit}>
        <input type="file" className="file" />
        <input type="submit" value={"uplode"}/>
      </form>

      <div className="filesDisplayContaine">
        
        <DataCard/>
        <DataCard/>
        <DataCard/>
        <DataCard/>
        <DataCard/>
        <DataCard/>
        <DataCard/>
        
      </div>


    </div>
  )
}

export default MainPage
