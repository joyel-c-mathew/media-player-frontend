

import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import VideoCard from '../Components/VideoCard'
import { addCategoryAPI } from '../services/allAPI.JS';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getCategoryApi } from '../services/allAPI.JS';
import { deleteCategoryApi } from '../services/allAPI.JS';
import { getAVideoApi } from '../services/allAPI.JS';
import { updateCategory } from '../services/allAPI.JS';










function Category({videoDragAndRemoveStatus,setVideoDragAndRemoveStatus}) { //destrctring state and stae chnge akkan ulla func um
 
  //sate to store category name
  const [CategoryName, setCategoryName] = useState("")

  const [allCategory, setAllCategory] = useState([])
  // to add category
  const [addCategoryStatus, setAddCategoryStatus] = useState(false)

  const [deleteCategoryStatus, setDeleteCategoryStatus] = useState(false)




  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);





  // function to add category
  const handelCategoryAdd = async () => {
    if (CategoryName) {

      let reqBody = {

        Category: CategoryName,
        allVideos: []
      }


      const responce = await addCategoryAPI(reqBody)
      console.log(responce);
      if (responce.status >= 200 && responce.status < 300) {

        toast.success("category added succesfully")
        setAddCategoryStatus(true)
        handleClose();

      } else {
        toast.error("failed to add")

      }
    }
    else {
      toast.error('please enter the category name')
    }
  }

  // function to get category

  const getAllCategory = async () => {
    const responce = await getCategoryApi()

    /*console.log(responce.data) */
    setAllCategory(responce.data)
  }


  //function to delete category

  const handelDeleteCategory = async (id) => {
    await deleteCategoryApi(id)
    setDeleteCategoryStatus(true)
  }
  console.log(allCategory);


  // functin to prvnt data lost

  const dragOver = (e) => {
    e.preventDefault()
  }


  // function for drop

    const videoDrop = async (e, categoryId) => {
    console.log(`category is is ${categoryId}`);

    // to get video id sent frm video card component , drop
    const videoid = e.dataTransfer.getData("videoId") // namal drag drop akkiytah knanan
    console.log(`video is ${videoid} `);

//  api to get a details of a particular video that is draged

    const {data} = await getAVideoApi(videoid)
    console.log(data);

    //selected category
    const selectedCategory = allCategory.find((item)=>item.id==categoryId)
    //console.log(selectedCategory); 


    if(selectedCategory.allVideos.find(item=>item.id==videoid)){
      toast.error('video is alredy existed')
    }else{
    selectedCategory.allVideos.push(data)
    }

    // function to update a category
    await updateCategory(categoryId,selectedCategory) // first id and sec is req body that is selected category
    getAllCategory() 

  }

// function to delete cards from category
const dragStart =(e,categoryId,videoId)=>{

  console.log(`category id is ${categoryId}`);
console.log(`video id is ${videoId}`);  
let datashared={
  categoryId,videoId
}
e.dataTransfer.setData("datashared",JSON.stringify(datashared)) // data shared il ann catg id and vdo id okke ullath ath
// total aii pass akki
}






  useEffect(() => {
    getAllCategory()
    setAddCategoryStatus(false)
    setDeleteCategoryStatus(false)
    setVideoDragAndRemoveStatus(false)
  }, [addCategoryStatus, deleteCategoryStatus,videoDragAndRemoveStatus])





  return (
    <>
      <div className='d-flex justify-content-center align-items-center '>
        <button onClick={handleShow} className='btn btn-warning w-100'>Add new category</button>
      </div>


      <Modal show={show} onHide={handleClose}>

        <Modal.Header closeButton>
          <Modal.Title>  <FontAwesomeIcon icon={faPen} className='text-warning me-2' />  add new category </Modal.Title>
        </Modal.Header>

        <Modal.Body>

          <Form className='border border-secondary rounded p-3'>
            <p>Category Name</p>
            <Form.Group className='mb-3'>
              <Form.Control type="text" placeholder="Enter the category name" onChange={(e) => setCategoryName(e.target.value)}
              />
            </Form.Group>
          </Form>

        </Modal.Body>



        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={handelCategoryAdd}>
            Add
          </Button>
        </Modal.Footer>


      </Modal>



      {allCategory?.length > 0 ?
        allCategory?.map((item) => (

          <div className='border border-secondary w-100 p-3 rounded mt-3' droppaable onDragOver={(e) => dragOver(e)}
            onDrop={(e) => videoDrop(e, item.id)}> 
            <div className='d-flex justify-content-center align-items-center' >

              <p>{item.Category}</p>

              <button onClick={() => handelDeleteCategory(item.id)} className='btn btn-danger ms-auto'><FontAwesomeIcon icon={faTrash} /></button>
            </div>
            <Row>
              {item.allVideos.length>0?
              item.allVideos.map((card)=>(
              <Col sm={12} draggable onDragStart={(e)=>dragStart(e,item.id,card.id)}>
                 <VideoCard  displayVideo={card} ispresent={true}/>  
              </Col>))
              :null}
            </Row>

          </div>))

        : <p className='text-danger mt-5  '  >no category added yet</p>
      }

      <ToastContainer position='top-center' theme='colored' autoClose={2000} />

    </>

  )
}

export default Category
