import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { text } from '@fortawesome/fontawesome-svg-core';
import { uploadVideoApi } from '../services/allAPI.JS';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';






function Add({setUploadVideoStatus}) {

  const [show, setShow] = useState(false);
  const [video, setvideo] = useState({
    id: "",
    caption: "",
    imageUrl: "",
    embedlink: ""




  })

  console.log(video);

  const getEmbedLink = (e) => {

    const text = e.target.value

    /*https://youtu.be/6G75yTBzBUA?si=AXchxpLsL64LJ5Cj*/
    /*https://youtu.be/6G75yTBzBUA?si=LFREE3Cdzb_jyzRu*/



    /*https://www.youtube.com/watch?v=6G75yTBzBUA*/

    if (text.startsWith('https://youtu.be/')) { //1 st  

      console.log(text.slice(17, 28)); // 2nd

      const link = `https://www.youtube.com/embed/${text.slice(17, 28)}`  //4th
      setvideo({ ...video, embedlink: link })
    }
    else {

      console.log(text.slice(-11)); // 3rd


      const link = `https://www.youtube.com/embed/${text.slice(-11)}`  //4th
      setvideo({ ...video, embedlink: link })



    }

  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUpload = async () => {
    const { id, caption, imageUrl, embedlink } = video // all stored in video,setvideo
    console.log(id, caption, imageUrl, embedlink);

    if (!id || !caption || !imageUrl || !embedlink) { // checking
      toast.info('please fill the form completely')
    }
    else {
      const responce = await uploadVideoApi(video) // then await upload video kodukka... kannan vendi const responce
      console.log(responce);

      if (responce.status >= 200 && responce.status <= 300) { // series kodukunu
        toast.success('video uploaded sucessfully')
        setUploadVideoStatus(responce.data)
        setvideo({ // store avuunath,empty koduthu
          id: "",
          caption: "",
          imageUrl: "",
          embedlink: ""
        })
        handleClose()
      }

      else {
        console.log(responce);
        toast.error('something  went wrong')

      }
    }


  }




  return (

    <>
      <div className='d-flex align-items-center'>
        <h5 className='me-1 mt-2'>upload new videos</h5>
        <button className='btn' onClick={handleShow}>  <FontAwesomeIcon icon={faCloudArrowUp} size='xl' /> </button>
      </div>


      <Modal show={show} onHide={handleClose}>


        <Modal.Header closeButton>
          <Modal.Title>  <FontAwesomeIcon icon={faFilm} className='me-2 text-warning' />upload videos</Modal.Title>
        </Modal.Header>

        <Modal.Body>

          <p>please fill the folowing details</p>

          <Form className='border border-secondary  p-3 border-dark'>

            <Form.Group className='mb-3'>
              <Form.Control
                required
                type="text"
                placeholder="Enter  the video id" onChange={(e) => setvideo({ ...video, id: e.target.value })} />
            </Form.Group>




            <Form.Group className='mb-3'>
              <Form.Control
                required
                type="text"
                placeholder=" Enter the video caption  " onChange={(e) => setvideo({ ...video, caption: e.target.value })}
              />
            </Form.Group>



            <Form.Group className='mb-3'>
              <Form.Control
                required
                type="text"
                placeholder=" enter the video image url" onChange={(e) => setvideo({ ...video, imageUrl: e.target.value })}
              />
            </Form.Group>



            <Form.Group className='mb-3'>
              <Form.Control
                required
                type="text"
                placeholder=" Enter the Youtube link" onChange={(e) => getEmbedLink(e)}
              />
            </Form.Group>


          </Form>


        </Modal.Body>


        <Modal.Footer>

          <button className='btn btn-secondary' onClick={handleClose}>
            Cancel
          </button>

          <button className='btn btn-warning' onClick={handleUpload}>
            Upload
          </button>

        </Modal.Footer>


      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={2000} />

    </>
  )


}

export default Add


/* <iframe width="853" height="480" src="https://www.youtube.com/embed/6G75yTBzBUA" title="Mini Maharani Video Song  | Premalu | Naslen | Mamitha | Girish AD | Vishnu Vijay | Suhail Koya" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */