import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { deleteAvideo } from '../services/allAPI.JS';
import { AddToHistory } from '../services/allAPI.JS';







function VideoCard({displayVideo,setDeleteVideoStatus,ispresent}) {
  console.log(displayVideo);

  
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);

// function to add a category
const handleShow = async () => {
  setShow(true);

  let caption =displayVideo.caption // req body il ulla caption kiittan  displayvideo.caption, bakki ellam agne
  let url =displayVideo.embedlink
  let time = new Date()
  let timeStamb = new Intl.DateTimeFormat('en-GB', {year:'numeric',month:'2-digit',day:'2-digit',
  hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(time)
   
 let reqBody ={
  caption,url,timeStamb
 }
 const responce = await AddToHistory(reqBody)// add cheyyann,, req body an ellam vechekene so athine console akki
console.log(responce);




};

// functin to delete a video
const handelDelete = async(id)=>{ //fst ith js il define cheyunnu, const ,name()=>{},then async koduthu
  const responce = await deleteAvideo(id) // then delete video k await koduthu, responce varran vendi const responce koduthu
  console.log(responce);
  setDeleteVideoStatus(true)
}

// functio to drag a video
const videoDrag =(e,id)=>{
console.log(`card with id ${id} have dragged `);
e.dataTransfer.setData("videoId",id) // to tansfer data in to category

}



  return (
    <>
    
 <Card onClick={handleShow} style={{ width: '100%' }} className='mt-4' draggable onDragStart={(e)=>videoDrag(e,displayVideo.id)} >
      {!ispresent && <Card.Img  variant="top"  //image click akkumbo pop up varran hanle show koduthu
       src={displayVideo?.imageUrl}
      width={'800%'} height={'100px'} />}


      <Card.Body className='d-flex'>
       
        <Card.Text>
         {displayVideo?.caption.slice(0,9)} 
        </Card.Text>
        
        {!ispresent && // ivade is present not avumbo button kanikkum
        <Button variant="danger" onClick={()=>handelDelete(displayVideo?.id)} className='ms-auto'> <FontAwesomeIcon icon={faTrash} /></Button>}

      </Card.Body>



    </Card>
      

      
        <Modal show={show} onHide={handleClose}> 
        <Modal.Header closeButton>
        <Modal.Title>{displayVideo?.caption}</Modal.Title>
        </Modal.Header>

        <Modal.Body>

        <iframe width="100%" height="514" src={`${displayVideo?.embedlink}?autoplay=1`} title="Toofan Video Song (Malayalam) | KGF Chapter 2 | RockingStar Yash|Prashanth Neel| Ravi Basrur|Hombale" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        </Modal.Body>
       
      </Modal>
    </>
  )
}

export default VideoCard
