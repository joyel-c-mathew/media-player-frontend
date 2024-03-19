import React from 'react'
import { Link } from 'react-router-dom'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Row } from 'react-bootstrap'




function Footer() {
  return (
<>
      <Row style={{marginTop:'3rem', padding:'1rem'}}>
        

      <Col lg={1}></Col>

          <Col lg={3}>

          <i  style={{margin:"10px", color:"#e88a17", }}  className="fa-solid fa-video fa-beat fa-2x"></i>
          <span className=" ms-1 fs-3  text-white " style={{marginBottom:'-10px'}}>video player</span>
  
          <p style={{textAlign:'justify'}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime eaque labore nulla, tempore quidem ab dolores laudantium qu suscipit id dolorum voluptas laboriosam   </p>

        </Col>
  
        <Col lg={2} className='ms-5'>
          
  <br></br>
          <h4>links</h4>
          
      
          <Link to={'/'} style={{textDecoration: "",color:"", }}>Landing Page</Link>
     
        <br></br>
          <Link to={'/home'} style={{textDecoration: "",color:""}}>Home Page</Link>
         
          <br/>
          <Link  to={'/watchHistory'}style={{textDecoration: "",color:""}}>Watch History</Link>
        <br></br>
          <br/>
  
        </Col>
  

        <Col lg={2}>
         
  <br></br>
        <h4>Guides</h4>
       

        <Link style={{textDecoration: "none",color:"white"}}>React</Link>
       
          <br />
          <Link style={{textDecoration: "none",color:"white"}}>Bootstarp</Link>
          
          <br/>
          <Link style={{textDecoration: "none",color:"white"}}>React bootstarp</Link>
        
          <br/>
        
         </Col>

  

        <Col lg={3}>
          <br></br>

        <h4>Contact Us</h4>
      
  
      <form className='d-flex' action = "" >
      <input className='form-control' type="email" placeholder='enter your email'/>
      <button className='btn btn-warning ms-2' >subscribe</button>
      </form>

       <div className="d-flex justify-content-around mt-3 pt-2">
        
  
       <FontAwesomeIcon icon={faInstagram} size='2xl' />
       <FontAwesomeIcon icon={faTwitter}size='2xl' />
       <FontAwesomeIcon icon={faLinkedin} size='2xl'/>
       <FontAwesomeIcon icon={faFacebook} size='2xl'/>
      
  
       </div>

       </Col>
  
  
  <Col lg={1}> </Col>
  <br></br>
  
  
       </Row>
       <p className="text-center mt-1">Copyright  © 2023 Media Player.Bulid with React</p>
  
</>

  )
}

export default Footer
