import React from 'react'
import './style.css'
import ReportDesciption from './ReportDesciption'
import ReportsHistory from './ReportsHistory'

function HomePageContent() {
  return (
    <div className='page-container' > 
        <ReportDesciption/>
        <hr style={{ margin:20}}/>
        <ReportsHistory/>
    </div>
  )
}

export default HomePageContent