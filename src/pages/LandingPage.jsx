import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


function LandingPage() {

  const navigateByUrl= useNavigate()


  return (
    <>
      <Row 

      
      className='d-flex justify-content-center alighn-items-center mt-5  mb-5'>


        <Col lg={1}></Col>

        <Col lg={5}>

          <h3>welcome to<span className="text-warning"> Media Player </span></h3> <br></br>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem reiciendis
            possimus et! Voluptates eveniet praesentium sunt voluptatum ghggh juguigig ijuig
            reprehenderit placeat. Accusamus magni eum nisi assumenda fuga quam veniam modi?
            lo Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, neque aliquid! Sapiente quod et aperiam exercitationem excepturi velit corporis labore iure quas? Numquam exercitationem architecto non ab? Suscipit, quis voluptas?</p>


          <button  onClick={()=>navigateByUrl('/home')} className='btn btn-warning mb-5 mt-5'>Get Started  <i class="fa-solid fa-arrow-right"></i> </button>

        </Col>


        <Col lg={1}></Col>


        <Col lg={5}>
        <img src=" https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif " alt="" />
        </Col>




      </Row>


        
      <div  className="container d-flex justify-content-center align-items-center mt-5 ">
        <div className='d-flex justify-content-center align-items-center mt-5 flex-column'>

        <h3>Features</h3>

        <div className='d-flex justify-content-center align-items-center mt-5'>


          <Card className='p-4 m-3 ' style={{ width: '18rem', backgroundColor: 'black' }}>
          <Card.Img variant="top" style={{ width: '100%', height: '260px' }} src="   https://media.tenor.com/FGAa9v_osfoAAAAC/gif-herejesgif.gif" />
          <Card.Body>
          <Card.Title className='text-center' style={{ color: 'blue' }}>Managing Video</Card.Title>
          <Card.Text className='text-center'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          </Card.Text>

           </Card.Body>
            </Card>



             <Card className='p-4 m-3' style={{ width: '18rem', backgroundColor: 'black' }}>
             <Card.Img variant="top" style={{ width: '100%', height: '260px' }} src="  https://media.tenor.com/FGAa9v_osfoAAAAC/gif-herejesgif.gif" />
             <Card.Body>
             <Card.Title className='text-center' style={{ color: 'blue' }}>Catagorised video</Card.Title>
             <Card.Text className='text-center'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
              </Card.Text>

              </Card.Body>
            </Card>



            <Card className='p-4 m-3' style={{ width: '18rem', backgroundColor: 'black' }}>
            <Card.Img variant="top" style={{ width: '100%', height: '260px' }} src="  https://media.tenor.com/FGAa9v_osfoAAAAC/gif-herejesgif.gif" />
            <Card.Body>
            <Card.Title className='text-center' style={{ color: 'blue' }}>Watch history</Card.Title>
            <Card.Text className='text-center'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>

              </Card.Body>
            </Card>

          </div>
        </div>
      </div>


        <Row className='mb-5 ' >

        <Col lg={1}></Col>

        <Col lg={10} style={{ border: '1px solid white' }}>



        <Row>

         <Col lg={6} className='p-5'>

         <h3 style={{ color: 'orange', marginBottom: '20px' }}>Simple fast and   powerfull</h3>

         <div>

         <h6 style={{ textAlign: 'justify', color: 'grey' }}> <span className='fw-bold fs-5' style={{ color: 'grey' }} >playeverything:</span>
          meLorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis nesciunt, culpa maxime qui nobis nihil voluptatum? Saepe molestiae, hic non culpa magni esse, doloremque vero, a labore rem
          </h6>

         </div>


         <div>

          <h6 style={{ textAlign: 'justify', color: 'grey' }}> <span className='fw-bold fs-5' style={{ color: 'grey' }} >playeverything:</span>
          meLorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis nesciunt, culpa maxime qui nobis nihil voluptatum? Saepe molestiae, hic non culpa magni esse, doloremque vero, a labore rem
          </h6>

          </div>


           <div>

            <h6 style={{ textAlign: 'justify', color: 'grey' }}> <span className='fw-bold fs-5' style={{ color: 'grey' }} >playeverything:</span>
             meLorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis nesciunt, culpa maxime qui nobis nihil voluptatum? Saepe molestiae, hic non culpa m
             </h6>

             </div>


            </Col>


            <Col lg={6} className='d-flex justify-content-center alighn-items-center   ' style={{ marginTop: '60px' }}>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/dAezp422I_A?si=WIW0tba-1wbCXFZ3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            
            </Col>

            </Row>


            </Col>


            <Col lg={1}></Col>


            </Row>
    </>
  )
}

export default LandingPage
