import React from "react";

import { Navigation,Autoplay, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import '../App.css'
//import React,  from "react";
import Slider from "react-slick";
//import {faStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import Img1 from '../Images/bg31.png'; 
import Img2 from '../Images/bg1.png';
import Img3 from '../Images/bg1.png';
import Img4 from '../Images/Picture2.png';
import Img5 from '../Images/jobopening.jpg';
import Img6 from '../Images/hiring.jpg';
import Img7 from '../Images/interview.jpg';
import Img8 from '../Images/placement.jpg';
import Img9 from '../Images/java.png';
import Img10 from '../Images/sql.png';
import Img11 from '../Images/python.png';
import Img12 from '../Images/softskill.png';
import Img13 from '../Images/mern.png';
import Img14 from '../Images/django.png';
import Img15 from '../Images/mern.png';
import Img16 from '../Images/asp.jpg';
import Img17 from '../Images/appti.png';
import Img18 from '../Images/softskill1.png';





const Home = () => {
  // AOS.init();
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          background: "black",
          fontColor: "blue",
          display: "table",
          borderRadius: "50%",
          padding: "4px",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          background: "black",
          fontColor: "blue",
          display: "table",
          borderRadius: "50%",
          padding: "4px",
        }}
        onClick={onClick}
      />
    );
  }
  return (
    <div>
         <div className="swiper h-550 swiper-css">
         <Swiper 
             modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
             //spaceBetween={100}
             //slidesPerView={1}
             navigation
             autoplay={{autoplay:true}}
             pagination={{ clickable: true }}
             scrollbar={{ draggable: true }}>




{/* 
                <SwiperSlide className="image1">
           <img src={Img1} alt="img" className="p-5 w-100  h-550" />
          <div className="top-left1 text-start">
            <h1 className="font-css text-white">No Getting Job ?</h1>
          <p className="font-css1 mb-0 text-white">Join Us to Get Interview with</p>
          <p className="font-css1 text-white">Internships and Training till</p>
          <p className="font-css1 text-white">You Get the Job</p>
          <br/>
            <br/>
            <br/>
          <div className="mt-5 px-5">
            <button type="btn"  className="  btn btn-lg  btn-css"><h4 className="p-2 m-0">Enquiry Now</h4></button>
            </div>
          </div>
      </SwiperSlide> */}


      {/* <SwiperSlide className="image1">
          <img src={Img1} alt="img " className="h-550 w-100" />
          <div className="top-left1 text-start text-white ">
            <h1 className="font-css text-white">Do an Internship with stipend</h1>
          <p className="font-css1 mb-0 text-white">Just Not Only The Training</p>
          <p className="font-css1 text-white"></p>
          <div className="mt-5 px-5">
            <br/>
            <br/>
            <br/>
            <br/>
            
            <button type="btn"  className="  btn btn-lg  btn-css"><h4 className="p-2 m-0">Enquiry Now</h4></button>
            </div>
          </div>
      </SwiperSlide> */}


      <SwiperSlide className="image1">
          <img src={Img1} alt="img"  className=" h-550 w-100"/>
          <div className="top-left1 text-start">
            <h1 className="font-css text-white">Pay Upto 75% fee Once</h1>
          <p className="font-css1 mb-0 text-white">We Place You In a Company!</p>
          <p className="font-css1 text-white"></p>
          <div className="mt-5 px-5">
            <br/>
            <br/>
            <br/>
            <br/>
            <button type="btn"  className="  btn btn-lg  btn-css"><h5 className="p-2 m-0">Enquiry Now</h5></button>
            </div>
          </div>
      </SwiperSlide>
        
      <a href="https://api.whatsapp.com/send?phone=51955081075&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." class="float" target="_blank">
        <i class="fa fa-whatsapp my-float"></i>
      </a>
       
        
    </Swiper>
         </div>
{/*************************************** *1 Block Starts here *********************************/}
     <section>
        <div className="container-fluid  py-5">

          <div className="col-md-12 text-center">


          <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 text-center">
            <h2 className="text-warning">IT Training in Bangalore to start your IT Career.</h2>
               <h4 className="text-warning">Welcome to Appteknow Careers</h4>
            </div>
            <div className="col-md-2"></div>
            </div>


            <div className="row">
              <div className="col-md-8 py-3 text-align-justify">
                
                <p class="text-align-justify mt-5 mb-5">
                  Our premier Objective-Oriented Training Institute located in
                  BTM Layout, Bangalore, with a rich legacy spanning over two
                  decades. Our institute takes pride in training and placing a
                  significant number of students in renowned multinational
                  corporations, highlighting our steadfast dedication to
                  providing top-notch education and ensuring successful
                  placements. Our cutting-edge training methodologies, coupled
                  with valuable Software Company Internships, have significantly
                  enhanced our students' learning experiences. We are proud to
                  announce that we have achieved nearly 100% placement success
                  for all our enrolled students. Join us at Appteknow Careers,
                  where your career aspirations meet unparalleled opportunities
                  for growth and success.We are the Objective Oriented Training
                  Institute established in BTM Layout Bangalore from more than 2
                  decades. Having trained and placed a substantial number of
                  students in reputed MNCs, it showcases the institute's
                  commitment to quality education and effective placements. Our
                  innovative training models with Software Company Internships
                  created a huge impact on our student’s learning curve. We are
                  able to place all most all the students who enrolled with us.
                </p> 
                </div>
              <div className="col-md-4 p-3">
                <div className="p-3 form-css">
                <img src={Img4} alt="" id="image4" className="select-courses"/>

                </div>
              </div>
            </div>
          </div>


       


 {/*************************************** * 1 sec ends here *********************************/}
      <div className="container-fluid mb-5" style={{backgroundColor:"rgb(108 117 125 / 8%)"}}>

          <div className="col-md-12" mb-5>
            <div class="row">
            <div className=" col-md-4 "></div>
              <div className=" col-md-4 text-center">            
                <h2 className="text-danger p-2 ">We are not like others!</h2>
              <h5 className="bg-warning form-css p-2">Training along with internship & Stipend:</h5>
              </div>

               <div className=" col-md-4 "></div>
              </div>


              <div class="row py-5">
            <div className="col-md-1 "></div>
               <div className="col-md-10 p-3">
                <div className="p-3 form-css text-align-justify">
                <p className="mt-3 f-18 ">
                  Certainly! Providing software training with an internship is a distinctive and valuable 
                feature that distinguishes our institute from others. We ensure hands-on experience by
                 involving you in real software projects undertaken by our IT Company, providing comprehensive 
                 practical exposure.Additionally, we offer a stipend based on your performance during the internship.
                  After the internship period concludes, we assist you in securing job interviews with various
                  IT companies until  you successfully land a job. </p>

                </div>
              </div>
              <div className="col-md-1 "></div>
             
            </div>
          </div>
          </div>

{/*************************************** * 2 sec ends here *********************************/}


          <div className="col-md-12" mb-5>
          <div class="row">
            <div className=" col-md-4 "></div>
              <div className=" col-md-4 text-center">            
               
              <h5 className="bg-warning form-css p-2">Pay full fee only once we place you:!</h5>
              </div>
               <div className=" col-md-4 "></div>
              </div>
            <div className="row">
            <div className="col-md-1 "></div>
               <div className="col-md-10 p-3">
                <div className="p-3 form-css text-align-justify">
                <p className="f-18">Pay the full fee only once we secure a placement for you.
                   Why pay the full fee to an institute before they secure you a job? With us,
                    you only pay up to 75% once we successfully place you. If we are unable to find a placement for you, 
                    you will not need to pay any fee. We not only guarantee placement but also tie the fee to your placement.
                   It becomes our responsibility to find you a job so that we can collect the remaining amount. </p>

                </div>
              </div>
              <div className="col-md-1 "></div>
             
            </div>
          </div>

{/*************************************** * 3 sec ends here *********************************/}
            <div className="container mb-5">
          <div className="col-md-12" mb-5>
            <div className="row">
              
               <div className="col-md-6 p-3">
                <div className="p-3  mt-5 form-css">
                <img src={Img5} alt="" id="image4" className="h-300 w-100 select-courses"/>

                </div>
                <div className="text-center">
                  <p className="mb-3  mt-3 form-css"><h5>We Conduct Interviews Everyday</h5></p>
                  <button type="button"  className=" btn btn-warning">Click Here</button>
                </div>
              </div>
              <div class="col-md-6 p-3  ">
              <div className="p-3 mt-5 form-css">
                <img src={Img6} alt="" id="image4" className="h-300 w-100 select-courses"/>

                </div>
                <div className=" text-center">
                  <p className="mb-3  mt-3 form-css"><h5 className="">Our Students Get Job Every Week</h5></p>
                  <button type="button"  className=" btn btn-warning">Click Here</button>
                </div>

              </div>
            </div>
          </div>
          </div>
{/*************************************** * 4 sec ends here *********************************/}
          <div >
            <div className="col-md-12 mb-5">
            <div class="row m-5">
              
               <div className="col-md-6 p-3">
                <div className="p-3 form-css">
                <img src={Img7} alt="" id="image4" className="h-300 w-100 select-courses"/>
                <div className="text-center p-3">
                 <button onClick="" className="btn btn-danger">Interviews</button>
                  <a href="https://appteknow.com/on-going-interviews-2/" className=""/>
                  
                </div>

                </div>
              </div>
              <div class="col-md-6 p-3 ">
              <div className="p-3 form-css">
                <img src={Img8} alt="" id="image4" className="h-300 w-100 select-courses"/>
                <div className="text-center p-3">
                <button className="btn btn-danger">Placements</button>
                  <a href="https://appteknow.com/placements/ "></a>
                  
                </div>
                </div>
              </div>
            </div>
          </div>

          </div>



{/*************************************** * 5 sec ends here *********************************/}
<div className="swiper h-300 sw2-css">
         <Swiper 
             modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
             //spaceBetween={100}
             //slidesPerView={1}
             navigation
             autoplay={{autoplay:true}}
             pagination={{ clickable: false }}
             scrollbar={{ draggable: true }}>






      <SwiperSlide>
        <div className="row">
          <div className="col-md-4 ">
          <div className="imgcontainer" >
        <img src={Img9} alt="" id="image4" className="h-300  w-100 select-courses grcolor"/>
         
         <div className=" bottom-left   Text-center">
          <div className="Software Developer"></div>
          <span className="Text-center d-flex " style={{border:"1px solid #blue"}}>
             
            <button type="btn" className=" px-2 text-start btn btn-primary coursebtn brr">Course Details</button>
            <button type="btn" className=" px-2 text-end btn btn-primary  coursebtn  brl">Add to Cart</button>
          </span>
          </div>
          </div>
          </div>




          <div className="col-md-4 ">
          <div className="imgcontainer" >
        <img src={Img10} alt="" id="image4" className="h-300  w-100 select-courses grcolor"/>
         
         <div className=" bottom-left   Text-center">
          <div className="Software Developer"></div>
          <span className="Text-center d-flex ">
             
            <button type="btn" className=" px-2 text-start btn btn-primary  coursebtn brr">Course Details</button>
            <button type="btn" className=" px-2 text-end btn btn-primary  coursebtn  brl">Add to Cart</button>
          </span>
          </div>
          </div>
          </div>

          <div className="col-md-4 ">
          <div className="imgcontainer" >
        <img src={Img11} alt="" id="image4" className="h-300  w-100 select-courses grcolor"/>
         
         <div className=" bottom-left   Text-center">
          <div className="Software Developer"></div>
          <span className="Text-center d-flex ">
             
            <button type="btn" className=" px-2 text-start btn btn-primary brr coursebtn  ">Course Details</button>
            <button type="btn" className=" px-2 text-end btn btn-primary  coursebtn  brl">Add to Cart</button>
          </span>
          </div>
          </div>
          </div>

        </div>

        </SwiperSlide>

        <SwiperSlide>
        <div className="row">
        <div className="col-md-4 ">
          <div className="imgcontainer" >
        <img src={Img12} alt="" id="image4" className="h-300  w-100 select-courses grcolor"/>
         
         <div className=" bottom-left   Text-center">
          <div className="Software Developer"></div>
          <span className="Text-center d-flex ">
             
            <button type="btn" className=" px-2 text-start btn btn-primary coursebtn   brr">Course Details</button>
            <button type="btn" className=" px-2 text-end btn btn-primary  coursebtn  brl">Add to Cart</button>
          </span>
          </div>
          </div>
          </div>

          <div className="col-md-4 ">
          <div className="imgcontainer" >
        <img src={Img13} alt="" id="image4" className="h-300  w-100 select-courses grcolor"/>
         
         <div className=" bottom-left   Text-center">
          <div className="Software Developer"></div>
          <span className="Text-center d-flex ">
             
            <button type="btn" className=" px-2 text-start btn btn-primary brr  coursebtn ">Course Details</button>
            <button type="btn" className=" px-2 text-end btn btn-primary brl  coursebtn  ">Add to Cart</button>
          </span>
          </div>
          </div>
          </div>

          <div className="col-md-4 ">
          <div className="imgcontainer" >
        <img src={Img14} alt="" id="image4" className="h-300  w-100 select-courses grcolor"/>
         
         <div className=" bottom-left   Text-center">
          <div className="Software Developer"></div>
          <span className="Text-center d-flex ">
             
            <button type="btn" className=" px-2 text-start btn btn-primary brr  coursebtn ">Course Details</button>
            <button type="btn" className=" px-2 text-end btn btn-primary brl  coursebtn ">Add to Cart</button>
          </span>
          </div>
          </div>
          </div>

        </div>

        </SwiperSlide>

        <SwiperSlide>
        <div className="row">
        <div className="col-md-4 ">
          <div className="imgcontainer" >
        <img src={Img15} alt="" id="image4" className="h-300  w-100 select-courses grcolor"/>
         
         <div className=" bottom-left   Text-center">
          <div className="Software Developer"></div>
          <span className="Text-center d-flex ">
             
            <button type="btn" className=" px-2 text-start btn btn-primary brr ">Course Details</button>
            <button type="btn" className=" px-2 text-end btn btn-primary brl">Add to Cart</button>
          </span>
          </div>
          </div>
          </div>

          <div className="col-md-4 ">
          <div className="imgcontainer" >
        <img src={Img16} alt="" id="image4" className="h-300  w-100 select-courses grcolor"/>
         
         <div className=" bottom-left   Text-center">
          <div className="Software Developer"></div>
          <span className="Text-center d-flex ">
             
            <button type="btn" className=" px-2 text-start btn btn-primary brr  coursebtn ">Course Details</button>
            <button type="btn" className=" px-2 text-end btn btn-primary brl  coursebtn ">Add to Cart</button>
          </span>
          </div>
          </div>
          </div>

          <div className="col-md-4 ">
          <div className="imgcontainer" >
        <img src={Img17} alt="" id="image4" className="h-300  w-100 select-courses grcolor"/>
         
         <div className=" bottom-left   Text-center">
          <div className="Software Developer"></div>
          <span className="Text-center d-flex ">
             
            <button type="btn" className=" px-2 text-start btn btn-primary  coursebtn  brr">Course Details</button>
            <button type="btn" className=" px-2 text-end btn btn-primary  coursebtn  brl">Add to Cart</button>
          </span>
          </div>
          </div>
          </div>

        </div>

        </SwiperSlide>
        <SwiperSlide>
        <div className="row">
        <div className="col-md-4 ">
          <div className="imgcontainer" >
        <img src={Img18} alt="" id="image4" className="h-300  w-100 select-courses grcolor"/>
         
         <div className=" bottom-left   Text-center">
          <div className="Software Developer"></div>
          <span className="Text-center d-flex ">
             
            <button type="btn" className=" px-2 text-start btn btn-primary   coursebtn  brr">Course Details</button>
            <button type="btn" className=" px-2 text-end btn btn-primary  coursebtn  brl">Add to Cart</button>
          </span>
          </div>
          </div>
          </div>

          <div className="col-md-4 ">
          <div className="imgcontainer" >
        <img src={Img18} alt="" id="image4" className="h-300  w-100 select-courses grcolor"/>
         
         <div className=" bottom-left   Text-center">
          <div className="Software Developer"></div>
          <span className="Text-center d-flex ">
             
            <button type="btn" className=" px-2 text-start btn btn-primary  coursebtn  brr">Course Details</button>
            <button type="btn" className=" px-2 text-end btn btn-primary  coursebtn  brl ">Add to Cart</button>
          </span>
          </div>
          </div>
          </div>

          <div className="col-md-4 ">
          <div className="imgcontainer" >
        <img src={Img12} alt="" id="image4" className="h-300  w-100 select-courses grcolor"/>
         
         <div className=" bottom-left   Text-center">
          <div className="Software Developer"></div>
          <span className="Text-center d-flex ">
             
            <button type="btn" className=" px-2 text-start btn btn-primary  coursebtn  brr">Course Details</button>
            <button type="btn" className=" px-2 text-end btn btn-primary  coursebtn  brl">Add to Cart</button>
          </span>
          </div>
          </div>
          </div>

        </div>

        </SwiperSlide>
        <SwiperSlide>
        <div className="row">
        <div className="col-md-4 ">
          <div className="imgcontainer" >
        <img src={Img14} alt="" id="image4" className="h-300  w-100 select-courses grcolor"/>
         
         <div className=" bottom-left   Text-center">
          <div className="Software Developer"></div>
          <span className="Text-center d-flex ">
             
            <button type="btn" className=" px-2 text-start btn btn-primary  coursebtn  brr ">Course Details</button>
            <button type="btn" className=" px-2 text-end btn btn-primary  coursebtn  brl">Add to Cart</button>
          </span>
          </div>
          </div>
          </div>

          <div className="col-md-4 ">
          <div className="imgcontainer" >
        <img src={Img15} alt="" id="image4" className="h-300  w-100 select-courses grcolor"/>
         
         <div className=" bottom-left   Text-center">
          <div className="Software Developer"></div>
          <span className="Text-center d-flex ">
             
            <button type="btn" className=" px-2 text-start btn btn-primary  coursebtn  brr ">Course Details</button>
            <button type="btn" className=" px-2 text-end btn btn-primary  coursebtn  brl ">Add to Cart</button>
          </span>
          </div>
          </div>
          </div>

          <div className="col-md-4 ">
          <div className="imgcontainer" >
        <img src={Img12} alt="" id="image4" className="h-300  w-100 select-courses grcolor"/>
         
         <div className=" bottom-left   Text-center">
          <div className="Software Developer"></div>
          <span className="Text-center d-flex ">
             
            <button type="btn" className=" px-2 text-start btn btn-primary  coursebtn  brr">Course Details</button>
            <button type="btn" className=" px-2 text-end btn btn-primary  coursebtn  brl">Add to Cart</button>
          </span>
          </div>
          </div>
          </div>

        </div>

        </SwiperSlide>

       

        
    </Swiper>
         </div>

        

{/*************************************** * 7sec ends here *********************************/}
        <div  className="container-fluid" style={{backgroundColor:"#ffc10717"}}>     
        
            <div className="col-md-12 m-5">
            <div class="row">
              <div class="col-md-4 "></div>
               <div className="col-md-4 p-5 " >
                <div className="p-3 form-css zoom borderunset"  >
                <img src={Img18} alt="" className="image4 h-300 w-100 softskill-css skillhover"  style={{borderRadius:"100%",border:"unset;"}} />

                </div>
              </div>
              <div class="col-md-4 "></div>


               <div className="text-center">
                  <button className="btn btn-warning" type="btn">Click here for Details</button>
                </div>
            </div>
          </div>

          </div>
          </div>
      
      </section>   
{/*************************************** * Next Block Starts here *********************************/}
      {/* Start of Features */}
      <section>
        <div className="container-fluid p-3">
          <div className="col-md-12 p-3">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-3 box-css text-center p-3">
                <div>
                  <img
                    src="./Appteknow.png"
                    alt=""
                    className="img-css text-center "
                  />
                  <h4>Real Time Expert As Trainer..</h4>
                  <p>
                    At Appteknow Careers, You will Learn from the Experts from
                    industry who are Passionate in sharing their Knowledge with
                    Learners. Get Personally Mentored by the Experts.
                  </p>
                </div>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-3 box-css text-center p-3">
                <div>
                  <img src="./Appteknow.png" alt="" className="img-css" />
                  <h4>Real Time Expert As Trainer</h4>
                  <p>
                    Get an Opportunity to work in Real-time Projects that will
                    give you a Deep Experience. Showcase your Project Experience
                    & Increase your chance of getting Hired!
                  </p>
                </div>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-3 box-css text-center p-3">
                <div>
                  <img src="./Appteknow.png" alt="" className="img-css" />
                  <h4>Real Time Expert As Trainer</h4>
                  <p>
                    Get Certified by Appteknow Careers. Also, get Equipped to
                    Clear Global Certifications. 72% Appteknow Careers Students
                    appear for Global Certifications and 100% of them Clear it.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 p-3">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-3 box-css text-center p-3">
                <div>
                  <img
                    src="./Appteknow.png"
                    alt=""
                    className="img-css text-center "
                  />
                  <h4>Real Time Expert As Trainer..</h4>
                  <p>
                    At Appteknow Careers, You will Learn from the Experts from
                    industry who are Passionate in sharing their Knowledge with
                    Learners. Get Personally Mentored by the Experts.
                  </p>
                </div>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-3 box-css text-center p-3">
                <div>
                  <img src="./Appteknow.png" alt="" className="img-css" />
                  <h4>Real Time Expert As Trainer</h4>
                  <p>
                    Get an Opportunity to work in Real-time Projects that will
                    give you a Deep Experience. Showcase your Project Experience
                    & Increase your chance of getting Hired!
                  </p>
                </div>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-3 box-css text-center p-3">
                <div>
                  <img src="./Appteknow.png" alt="" className="img-css" />
                  <h4>Real Time Expert As Trainer</h4>
                  <p>
                    Get Certified by Appteknow Careers. Also, get Equipped to
                    Clear Global Certifications. 72% Appteknow Careers Students
                    appear for Global Certifications and 100% of them Clear it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Start of accreditattion */}
      <section>
        <div className="container-fluid p-3 acc" style={{}}>
          <div className="p-5">
            <div className="col-md-12 text-center">
              <div className="row">
                <div className="col-md-2">
                  <div>
                    {" "}
                    <img
                      src="./a1.png"
                      alt=""
                      className="acciditation-css"
                    />{" "}
                  </div>
                </div>
                <div className="col-md-2">
                  {" "}
                  <div>
                    {" "}
                    <img
                      src="./b1.png"
                      alt=""
                      className="acciditation-css"
                    />{" "}
                  </div>
                </div>
                <div className="col-md-2">
                  <div>
                    <img src="./c1.png" alt="" className="acciditation-css" />{" "}
                  </div>
                </div>
                <div className="col-md-2">
                  <div>
                    {" "}
                    <img
                      src="./d1.png"
                      alt=""
                      className="acciditation-css"
                    />{" "}
                  </div>
                </div>
                <div className="col-md-2">
                  {" "}
                  <div>
                    {" "}
                    <img src="./e1.png" alt="" className="acciditation-css" />
                  </div>
                </div>
                <div className="col-md-2">
                  {" "}
                  <div>
                    {" "}
                    <img
                      src="./f1.png"
                      alt=""
                      className="acciditation-css"
                    />{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Start of accreditattion */}
      <section>
        <div className="container-fluid p-3">
          <div className="col-md-12 p-3">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-3 box-css p-3">
                <div>
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-6">
                        <img
                          src="./Appteknow.png"
                          alt=""
                          className="img-css text-left "
                          style={{
                            width: "100px",
                            height: "100px",
                            backgroundColor: "blue",
                          }}
                        />
                      </div>
                      <div className="col-md-6">
                        <h4 className="f-blue"> Madhan</h4>
                        <div className="text-yellow">
                          <span className="">
                            <FaStar checked />
                          </span>
                          <span className="">
                            <FaStar checked />
                          </span>
                          <span className="">
                            <FaStar checked />
                          </span>
                          <span className="">
                            <FaStar />
                          </span>
                          <span className="">
                            <FaStar />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>
                    At Appteknow Careers, You will Learn from the Experts from
                    industry who are Passionate in sharing their Knowledge with
                    Learners. Get Personally Mentored by the Experts.
                  </p>
                </div>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-3 box-css text-center p-3">
                <div>
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-6">
                        <img
                          src="./Appteknow.png"
                          alt=""
                          className="img-css text-left "
                          style={{
                            width: "100px",
                            height: "100px",
                            backgroundColor: "blue",
                          }}
                        />
                      </div>
                      <div className="col-md-6">
                        <h4 className="f-blue"> Madhan</h4>
                        <div className="text-yellow">
                          <span className="">
                            <FaStar checked />
                          </span>
                          <span className="">
                            <FaStar checked />
                          </span>
                          <span className="">
                            <FaStar checked />
                          </span>
                          <span className="">
                            <FaStar />
                          </span>
                          <span className="">
                            <FaStar />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>
                    At Appteknow Careers, You will Learn from the Experts from
                    industry who are Passionate in sharing their Knowledge with
                    Learners. Get Personally Mentored by the Experts.
                  </p>
                </div>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-3 box-css text-center p-3">
                <div>
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-6">
                        <img
                          src="./Appteknow.png"
                          alt=""
                          className="img-css text-left "
                          style={{
                            width: "100px",
                            height: "100px",
                            backgroundColor: "blue",
                          }}
                        />
                      </div>
                      <div className="col-md-6">
                        <h4 className="f-blue"> Madhan</h4>
                        <div className="text-yellow">
                          <span className="">
                            <FaStar checked />
                          </span>
                          <span className="">
                            <FaStar checked />
                          </span>
                          <span className="">
                            <FaStar checked />
                          </span>
                          <span className="">
                            <FaStar />
                          </span>
                          <span className="">
                            <FaStar />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p>
                    At Appteknow Careers, You will Learn from the Experts from
                    industry who are Passionate in sharing their Knowledge with
                    Learners. Get Personally Mentored by the Experts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12">
                <h1 className="text-white">Student Testimonials</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Start of student testimonial */}
      <section>
        <div className="container">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12"></div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4"></div>
              <div className="col-md-4"></div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid">
          <h2 className="text-center p-3">Custom Arrows</h2>
          <div className="col-md-12 px-5">
            <div className="row">
              <div className="abc">
                <Slider {...settings}>
                  <div>
                    {/* <div className="col-md-1 "></div> */}
                    <div className=" box-css text-center p-3">
                      <div>
                        <img
                          src="./Appteknow.png"
                          alt=""
                          className="img-css text-center "
                        />
                        <h4>Real Time Expert As Trainer..</h4>
                        <p>
                          At Appteknow Careers, You will Learn from the Experts
                          from industry who are Passionate in sharing their
                          Knowledge with Learners. Get Personally Mentored by
                          the Experts.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    {/* <div className="col-md-1 "></div> */}
                    <div className=" box-css text-center p-3">
                      <div>
                        <img
                          src="./Appteknow.png"
                          alt=""
                          className="img-css text-center "
                        />
                        <h4>Real Time Expert As Trainer..</h4>
                        <p>
                          At Appteknow Careers, You will Learn from the Experts
                          from industry who are Passionate in sharing their
                          Knowledge with Learners. Get Personally Mentored by
                          the Experts.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    {/* <h3>3</h3> */}
                    {/* <div className="col-md-1 "></div> */}
                    <div className=" box-css text-center p-3">
                      <div>
                        <img
                          src="./Appteknow.png"
                          alt=""
                          className="img-css text-center "
                        />
                        <h4>Real Time Expert As Trainer..</h4>
                        <p>
                          At Appteknow Careers, You will Learn from the Experts
                          from industry who are Passionate in sharing their
                          Knowledge with Learners. Get Personally Mentored by
                          the Experts.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    {/* <div className="col-md-1 "></div> */}
                    <div className=" box-css text-center p-3">
                      <div>
                        <img
                          src="./Appteknow.png"
                          alt=""
                          className="img-css text-center "
                        />
                        <h4>Real Time Expert As Trainer..</h4>
                        <p>
                          At Appteknow Careers, You will Learn from the Experts
                          from industry who are Passionate in sharing their
                          Knowledge with Learners. Get Personally Mentored by
                          the Experts.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    {/* <div className="col-md-1 "></div> */}
                    <div className=" box-css text-center p-3">
                      <div>
                        <img
                          src="./Appteknow.png"
                          alt=""
                          className="img-css text-center "
                        />
                        <h4>Real Time Expert As Trainer..</h4>
                        <p>
                          At Appteknow Careers, You will Learn from the Experts
                          from industry who are Passionate in sharing their
                          Knowledge with Learners. Get Personally Mentored by
                          the Experts.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    {/* <div className="col-md-1 "></div> */}
                    <div className=" box-css text-center p-3">
                      <div>
                        <img
                          src="./Appteknow.png"
                          alt=""
                          className="img-css text-center "
                        />
                        <h4>Real Time Expert As Trainer..</h4>
                        <p>
                          At Appteknow Careers, You will Learn from the Experts
                          from industry who are Passionate in sharing their
                          Knowledge with Learners. Get Personally Mentored by
                          the Experts.
                        </p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End of Student Testimonial */}
      <section>
        <div className="container p-5">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4 text-center p-3">
                <button
                  type="btn"
                  className="btn btn-css p-3 f-b text-white text-center"
                >
                  FOR MORE TESTIMONIAL
                </button>
              </div>
              <div className="col-md-4"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Ends of FOR MORE TESTIMONIAL */}

      <section>
        <div
          className="container-fluid p-3"
          style={{ backgroundColor: "#deecef61" }}
        >
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                <h1 className="f-dgray fw-500 text-center">
                  Top Trending Courses
                </h1>
                <h2 className=" f-dgray fw-500 text-center">Online</h2>
              </div>
              <div className="col-md-3"></div>
            </div>
          </div>

          <div className="container-fluid p-3">
            <div className="col-md-12 p-3">
              <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-3 box-css text-center p-3">
                  <div>
                    <img
                      src="./Appteknow.png"
                      alt=""
                      className="img-css text-center "
                    />
                    <h4>Real Time Expert As Trainer..</h4>
                    <p>
                      At Appteknow Careers, You will Learn from the Experts from
                      industry who are Passionate in sharing their Knowledge
                      with Learners. Get Personally Mentored by the Experts.
                    </p>
                  </div>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-3 box-css text-center p-3">
                  <div>
                    <img src="./Appteknow.png" alt="" className="img-css" />
                    <h4>Real Time Expert As Trainer</h4>
                    <p>
                      Get an Opportunity to work in Real-time Projects that will
                      give you a Deep Experience. Showcase your Project
                      Experience & Increase your chance of getting Hired!
                    </p>
                  </div>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-3 box-css text-center p-3">
                  <div>
                    <img src="./Appteknow.png" alt="" className="img-css" />
                    <h4>Real Time Expert As Trainer</h4>
                    <p>
                      Get Certified by Appteknow Careers. Also, get Equipped to
                      Clear Global Certifications. 72% Appteknow Careers
                      Students appear for Global Certifications and 100% of them
                      Clear it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 p-3">
              <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-3 box-css text-center p-3">
                  <div>
                    <img
                      src="./Appteknow.png"
                      alt=""
                      className="img-css text-center "
                    />
                    <h4>Real Time Expert As Trainer..</h4>
                    <p>
                      At Appteknow Careers, You will Learn from the Experts from
                      industry who are Passionate in sharing their Knowledge
                      with Learners. Get Personally Mentored by the Experts.
                    </p>
                  </div>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-3 box-css text-center p-3">
                  <div>
                    <img src="./Appteknow.png" alt="" className="img-css" />
                    <h4>Real Time Expert As Trainer</h4>
                    <p>
                      Get an Opportunity to work in Real-time Projects that will
                      give you a Deep Experience. Showcase your Project
                      Experience & Increase your chance of getting Hired!
                    </p>
                  </div>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-3 box-css text-center p-3">
                  <div>
                    <img src="./Appteknow.png" alt="" className="img-css" />
                    <h4>Real Time Expert As Trainer</h4>
                    <p>
                      Get Certified by Appteknow Careers. Also, get Equipped to
                      Clear Global Certifications. 72% Appteknow Careers
                      Students appear for Global Certifications and 100% of them
                      Clear it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container-fluid p-3">
          <div className="col-md-12 p-3">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-3 box-css text-center p-3">
                <div>
                  <img
                    src="./Appteknow.png"
                    alt=""
                    className="img-css text-center "
                  />
                  <h4>Real Time Expert As Trainer..</h4>
                  <p>
                    At Appteknow Careers, You will Learn from the Experts from
                    industry who are Passionate in sharing their Knowledge with
                    Learners. Get Personally Mentored by the Experts.
                  </p>
                </div>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-3 box-css text-center p-3">
                <div>
                  <img src="./Appteknow.png" alt="" className="img-css" />
                  <h4>Real Time Expert As Trainer</h4>
                  <p>
                    Get an Opportunity to work in Real-time Projects that will
                    give you a Deep Experience. Showcase your Project Experience
                    & Increase your chance of getting Hired!
                  </p>
                </div>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-3 box-css text-center p-3">
                <div>
                  <img src="./Appteknow.png" alt="" className="img-css" />
                  <h4>Real Time Expert As Trainer</h4>
                  <p>
                    Get Certified by Appteknow Careers. Also, get Equipped to
                    Clear Global Certifications. 72% Appteknow Careers Students
                    appear for Global Certifications and 100% of them Clear it.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 p-3">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-3 box-css text-center p-3">
                <div>
                  <img
                    src="./Appteknow.png"
                    alt=""
                    className="img-css text-center "
                  />
                  <h4>Real Time Expert As Trainer..</h4>
                  <p>
                    At Appteknow Careers, You will Learn from the Experts from
                    industry who are Passionate in sharing their Knowledge with
                    Learners. Get Personally Mentored by the Experts.
                  </p>
                </div>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-3 box-css text-center p-3">
                <div>
                  <img src="./Appteknow.png" alt="" className="img-css" />
                  <h4>Real Time Expert As Trainer</h4>
                  <p>
                    Get an Opportunity to work in Real-time Projects that will
                    give you a Deep Experience. Showcase your Project Experience
                    & Increase your chance of getting Hired!
                  </p>
                </div>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-3 box-css text-center p-3">
                <div>
                  <img src="./Appteknow.png" alt="" className="img-css" />
                  <h4>Real Time Expert As Trainer</h4>
                  <p>
                    Get Certified by Appteknow Careers. Also, get Equipped to
                    Clear Global Certifications. 72% Appteknow Careers Students
                    appear for Global Certifications and 100% of them Clear it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          className="container-fluid p-3"
          style={{ backgroundColor: "#deecef61" }}
        >
          <div className="col-md-12  p-5">
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                {/* <h1 className="f-dgray fw-500 text-center">Top Trending Courses</h1> */}
                <h2 className=" f-dgray fw-500 text-center">Chennai</h2>
              </div>
              <div className="col-md-3"></div>
            </div>
          </div>

          <div className="container-fluid p-3">
            <div className="col-md-12 p-3">
              <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-3 box-css text-center p-3">
                  <div>
                    <img
                      src="./Appteknow.png"
                      alt=""
                      className="img-css text-center "
                    />
                    <h4>Real Time Expert As Trainer..</h4>
                    <p>
                      At Appteknow Careers, You will Learn from the Experts from
                      industry who are Passionate in sharing their Knowledge
                      with Learners. Get Personally Mentored by the Experts.
                    </p>
                  </div>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-3 box-css text-center p-3">
                  <div>
                    <img src="./Appteknow.png" alt="" className="img-css" />
                    <h4>Real Time Expert As Trainer</h4>
                    <p>
                      Get an Opportunity to work in Real-time Projects that will
                      give you a Deep Experience. Showcase your Project
                      Experience & Increase your chance of getting Hired!
                    </p>
                  </div>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-3 box-css text-center p-3">
                  <div>
                    <img src="./Appteknow.png" alt="" className="img-css" />
                    <h4>Real Time Expert As Trainer</h4>
                    <p>
                      Get Certified by Appteknow Careers. Also, get Equipped to
                      Clear Global Certifications. 72% Appteknow Careers
                      Students appear for Global Certifications and 100% of them
                      Clear it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 p-3">
              <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-3 box-css text-center p-3">
                  <div>
                    <img
                      src="./Appteknow.png"
                      alt=""
                      className="img-css text-center "
                    />
                    <h4>Real Time Expert As Trainer..</h4>
                    <p>
                      At Appteknow Careers, You will Learn from the Experts from
                      industry who are Passionate in sharing their Knowledge
                      with Learners. Get Personally Mentored by the Experts.
                    </p>
                  </div>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-3 box-css text-center p-3">
                  <div>
                    <img src="./Appteknow.png" alt="" className="img-css" />
                    <h4>Real Time Expert As Trainer</h4>
                    <p>
                      Get an Opportunity to work in Real-time Projects that will
                      give you a Deep Experience. Showcase your Project
                      Experience & Increase your chance of getting Hired!
                    </p>
                  </div>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-3 box-css text-center p-3">
                  <div>
                    <img src="./Appteknow.png" alt="" className="img-css" />
                    <h4>Real Time Expert As Trainer</h4>
                    <p>
                      Get Certified by Appteknow Careers. Also, get Equipped to
                      Clear Global Certifications. 72% Appteknow Careers
                      Students appear for Global Certifications and 100% of them
                      Clear it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;