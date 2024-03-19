import { faArrowLeft, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllvideoHistory } from '../services/allAPI.JS'
import { deleteWatchHistory } from '../services/allAPI.JS'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function WatchingHistory() { //1st

  const[historyVideos, setHistoryVideos]=useState([]) // 4th
  const[deleteVideoStatus,setDeleteVideoStatus]=useState(false)
  


// function to get all videos in history
  const getHistory = async ()=>{ // data kittan, api vech create , name koduthth // 1st
    const responce = await getAllvideoHistory() // responce il store  ,m getallvideohistory il store // 2nd
    // console.log(responce);

    setHistoryVideos(responce.data)  // 5th stp call akki rsponce data ne
  }

  //console.log(historyVideos);

  //fuction to delete vdo from wtch history

  const handelDelete= async(id)=>{
    const responce = await deleteWatchHistory(id) // deleting wtch history, deletewtchhiistory nammal all.js il inakind
    //console.log(responce);
    // responce varran namal argumens kodukkunu
    if(responce.status>=200 && responce.status<300){
      setDeleteVideoStatus(true)
      toast.success('video deleted successfully')
    }
    else{
      toast.error('something went wrong !')
    }
  }

  useEffect(()=>{ // 3rd
    getHistory()
    setDeleteVideoStatus(false)
  },[deleteVideoStatus])





  return (

    <>
      <div className='d-flex justify-content-between align-items-center m-5 p-5  '>

      <h3> watch history</h3>
        <h5><Link style={{ textDecoration: 'none', color: 'white' ,fontWeight:'bold', marginRight:'7px' }}  to={'/home'}>  <FontAwesomeIcon icon={faArrowLeft}  />Back to home</Link></h5>

      </div>


      <div className='d-flex justify-content-between align-items-center mx-5 p-4'>

        {historyVideos?.length>0? 
          <table className='table'>

          <thead>

             <tr>

              <th>#</th>
              <th>caption</th>
              <th>URL</th>
              <th>time stamb</th>
              <th>Action</th>

             </tr>

          </thead>


           <tbody>

            {historyVideos?.map((items,index)=>(
              <tr>
              <td>{index+1}</td>
              <td>{items.caption}</td>
              <td> <a href={items.url}target='_blank'>{items.url}</a></td>
              <td>{items.timeStamb}</td>
              <td> <button className='btn btn-danger' onClick={()=>handelDelete(items.id)}> <FontAwesomeIcon icon={faTrashCan} /></button></td>
            </tr>
            ))}

          </tbody>



        </table>:<p style={{color:'red', fontSize:'40px',marginLeft:'15rem'}}>No watch history!</p> }


      </div>
      <ToastContainer position='top-center' theme='colored' autoClose={2000} />

    </>
  )
}

export default WatchingHistory
