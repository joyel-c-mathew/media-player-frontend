import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getUploadedVideoApi } from '../services/allAPI.JS'
import { getCategoryApi } from '../services/allAPI.JS'
import { updateCategory } from '../services/allAPI.JS'



function View({uploadVideoStatus, setVideoDragAndRemoveStatus}) { // destructring state change akkan ullathine

const[video,setvideo]=useState([]) // useefct kazhijt this stp

const[deleteVideoStatus,setDeleteVideoStatus]=useState(false) // to delete video,false akkumbo get video call avum so setdelletevdo status false avvum vendum
//video card setvideosts true kodukind fst
  const getVideos = async()=>{

     const responce =await getUploadedVideoApi() // getuplodvideo await il koduthu then responce store akki call akki //1st
    /* console.log(responce);*/
    const{data}=responce
    /*console.log(responce);/*
    /*console.log(data);*/
    setvideo(data) // set video il data ne stored useect kzhij const kzhij video kzhij ithi store akki

  }
console.log(video);

const dragover= (e)=>{

e.preventDefault() // preventing refresh
}

const videoDrop=async(e)=>{ // drop cheyunnu
  const{categoryId,videoId}= JSON.parse (e.dataTransfer.getData('datashared'))
  console.log(categoryId,videoId);

//get all category
  const {data}=await getCategoryApi() // category entire array kittum
  console.log(data)

  //access the object with the category id from all category
  let selectedCategory = data.find((item)=>item.id==categoryId)
//filtering the object by remove the video object frm all videos
   let result = selectedCategory.allVideos.filter((item)=>item.id!=videoId) // item id match avvathene remove akkunu
   console.log(result )

   // creating new catgry.. id remove akkit ullath matharam
   let newCategory={
    Category:selectedCategory.Category, allVideos:result, id:categoryId
   }
   //updating the category
  await updateCategory (categoryId,newCategory)
  setVideoDragAndRemoveStatus(true) // destructure akkinte value true akkii then go to category

}

  useEffect(()=>{ // useeffct koduthath to handel side effect,, load avumbo data varn useeffect
    getVideos()
    setDeleteVideoStatus(false)

  },[uploadVideoStatus,deleteVideoStatus]) // content load avumbo varran empty koduthu  []





  return (
    <>
     <Row className='w-100' droppable="true" onDragOver={(e)=>dragover(e)} onDrop={(e)=> videoDrop(e)}>

    {
      video?.length>0?
      video?.map((item)=>( // ivade anu kodukka but jsx il gne ann

      <Col sm={12} md={6} lg={4} xl={3}>
      <VideoCard displayVideo={item} setDeleteVideoStatus={setDeleteVideoStatus}/> 
      </Col>
      )):<p className='text-warning fs-3'> No Videos Uploade Yet</p>

       }
      

      
      
      </Row> 

    </>
  )
}

export default View
