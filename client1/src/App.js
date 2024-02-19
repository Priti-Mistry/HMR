import Navbar from './components/Navbar';
import { Route, Routes, useRoutes } from 'react-router-dom';
import Report from './components/Report';
import Home from './components/Home';
import ReservationsReport from './components/ReservationsReport';
import Guests from './components/Guests';
import RoomStatus from './components/RoomStatus';
import RR from './components/RR';
import RReport from './components/RReport';
import FileUpload from './FileUpload';

import { useState } from 'react';
import BarChart from './charts/BarChart';
import {Data} from './charts/Data'
import LineChart from './charts/LineChart';
import PieChart from './charts/PieChart';
import DougnutChart from './charts/DougnutChart';
import PageNotFound from './charts/PageNotFound';

function App() {
  // const [data,setData]=useState({
  //   labels:Data.map(d=>d.year),
  //   datasets:[{
  //     label:"Gain",
  //     data:Data.map(d=>d.gain),
  //     // backgroundColor:[
  //     //   "rgba(75,192,192,1)",
  //     //     "#ac00f1",
  //     //     "#e0AF95",
  //     //     "#f3ba2f",
  //     //     "#2a71d0",
  //     // ],
  //     // borderColor: "black",
  //     borderWidth: 0.5,
  //   }]
  // })
  
  let paths = useRoutes([
    {
      path: '/',
      element: <Home />
    },{
      path: '/report',
      element: <Report />
    }, {
      path: '/reservation',
      element: <RR />
    },{
      path: '/guest',
      element: <Guests />
    }, {
      path: '/roomStatus',
      element: <RoomStatus />
    }, {
      path: '/RReport',
      element: <RReport />
    }
  ]);
  return (
    <>
    {/* <PageNotFound/> */}
   {/* <div style={{width:"500px"}}>
    <BarChart chartData={data}/>
   </div>
   <div style={{width:"500px"}}>
    <LineChart chartData={data}/>
   </div>
   <div style={{width:"500px"}}>
    <PieChart chartData={data}/>
   </div>
   <div style={{width:"500px"}}>
    <DougnutChart chartData={data}/>
   </div> */}
    {/* <FileUpload/> */}
      {/* <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/report" element={<Report/>} />
    </Routes> */}
      <Navbar />
      {paths}

    </>
  );
}

export default App;


// import React from 'react';
// import { Carousel } from 'antd';
// const contentStyle = {
//   height: '160px',
//   color: '#fff',
//   lineHeight: '160px',
//   textAlign: 'center',
//   background: '#364d79',
// };
// const App = () => (
//   <Carousel autoplay dotPosition={"right"}>
//     <div>
//       <h3 style={contentStyle}>1</h3>
//     </div>
//     <div>
//       <h3 style={contentStyle}>2</h3>
//     </div>
//     <div>
//       <h3 style={contentStyle}>3</h3>
//     </div>
//     <div>
//       <h3 style={contentStyle}>4</h3>
//     </div>
//   </Carousel>
// );
// export default App;