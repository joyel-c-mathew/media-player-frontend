import React, { useState } from 'react'
import Add from '../Components/Add'
import View from '../Components/View'
import Category from '../Components/Category'
import { Link } from 'react-router-dom'
import './Home.css'


function Home() {
  const[uploadVideoStatus,setUploadVideoStatus]= useState({}) // function indakkunuu then , add il setuploadedvideo stattus um, change akkan ulath  ann ath,, ={setup...} curly il kodukanam ..object ann
   //view il uploadvideo status edanam,{uploadedvieo }  curly il edanam ,object ann


   const[videoDragAndRemoveStatus,setVideoDragAndRemoveStatus] = useState(false)
  return (
    <>
      <div className="container-fluid mb-3 d-flex justify-content-between align-items-center mt-5">

        <Add  setUploadVideoStatus={setUploadVideoStatus}/>

        <Link id='link' to='/WatchHistory'style={{color:'white', marginRight:'3rem'}} >watch History</Link>


      </div>


      <div className='row'>
        <div className="col-md-9">
          <h4 className='mt-4' style={{fontWeight:'bold',marginLeft:'2rem',fontSize:'38px'}}>All Videos</h4>
          <View uploadVideoStatus={uploadVideoStatus}  setVideoDragAndRemoveStatus=
          {setVideoDragAndRemoveStatus} />  
        </div>
        <div className="col-md-3 px-4" >   
        <Category setVideoDragAndRemoveStatus= {setVideoDragAndRemoveStatus} videoDragAndRemoveStatus={videoDragAndRemoveStatus} />

</div>
       
      </div>
    </>
  )
}

export default Home
