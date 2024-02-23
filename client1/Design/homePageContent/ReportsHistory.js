import { Image } from 'antd'
import React from 'react'
import {CaretDownOutlined} from '@ant-design/icons'
import './reportHistory.css'

function ReportsHistory() {
  return (
    <div className='container'>
        <p>Custom Reports History</p>
        <div className='img-container'>
        <Image  src='./IMAGES/img.png' preview={false}/>
        <Image  src='./IMAGES/img.png' preview={false}/>
        <Image  src='./IMAGES/img.png' preview={false}/>
        <Image  src='./IMAGES/img.png' preview={false}/>

        </div>
        <div style={{display:'flex', marginTop:30,color:'grey'}}>
        <CaretDownOutlined style={{
            marginRight:10
        }}/> <p style={{fontSize:15}}>EARLIER</p>
        </div>
    </div>
  )
}

export default ReportsHistory