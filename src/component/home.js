import React from "react";
import { FaLinkedinIn} from "react-icons/fa";

import { Navigation,Autoplay, Pagination, Scrollbar, A11y, FreeMode, EffectCoverflow} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
//import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import '../App.css';
//import React,  from "react";
import Slider from "react-slick";
//import {faStar } from "react-icons/fa";


import { FaStar } from "react-icons/fa";

import Img01 from '../Images/reactjs.gif';
import Img011 from '../Images/bulbtrans.gif';
import Img033 from '../Images/web01.png';

import Img02 from '../Images/tally.png';
import Img022 from '../Images/tally.png';
import Img03 from '../Images/bulbtrans.gif';
import Img04 from '../Images/Image1.png';
import Img05 from '../Images/java1.jpg';
import Img1 from '../Images/boyys.gif'; 
import Img2 from '../Images/zz.gif';
import Img3 from '../Images/bg1.png';
import Img4 from '../Images/picture.png';
import Img5 from '../Images/interviewimg.jpg';
import Img6 from '../Images/placement.jpg';
import Img7 from '../Images/interview.jpg';
import Img8 from '../Images/placement.jpg';
import Img9 from '../Images/javacourse.png';
import Img10 from '../Images/pythoncourse.png';
import Img11 from '../Images/webdevelopment.png';
import Img12 from '../Images/softskill.png';
import Img13 from '../Images/softwaretesting.png';
import Img14 from '../Images/django.png';
import Img15 from '../Images/digitalmarketing.png';
import Img20 from '../Images/vishwanath.png';
import Img21 from '../Images/ravi.jpeg';

import Img22 from '../Images/chandrashekhar1.jpeg';
import Img24 from '../Images/savi.png';
import Img25 from '../Images/jerusha.png';


//import Img16 from '../Images/asp.jpg';
//import Img17 from '../Images/appti.png';
import Img18 from '../Images/softskill1.png';
 import Img30 from '../Images/apptek1.jpg';

import Img31 from '../Images/apptek2.jpeg';
import Img32 from '../Images/apptek3.jpeg';
import Img33 from '../Images/apptek4.jpg';
import Img34 from '../Images/apptek5.jpeg';
import Img35 from '../Images/apptek6.jpg';
import Img36 from '../Images/apptek7.jpeg';
import Img37 from '../Images/apptek8.jpg';
import Img38 from '../Images/apptek9.jpg';
import Img39 from '../Images/apptek10.jpg';
import Img40 from '../Images/apptek11.jpg';
import Img41 from '../Images/apptek12.jpeg';
import Img42 from '../Images/apptek13.jpg';
import Img43 from '../Images/apptek1.jpg';
import Img44 from '../Images/apptek14.png';
import Img45 from '../Images/apptek15.jpg';
import Img46 from '../Images/apptek16.jpg';
import Img47 from '../Images/apptek17.jpg';
import Img48 from '../Images/apptek18.jpg';
//import Img49 from '../Images/apptek19.jpeg';
import Img50 from '../Images/apptek20.jpeg';
import Img51 from '../Images/apptek21.jpeg';
import Img52 from '../Images/apptek22.jpeg';
import Img53 from '../Images/apptek23.jpeg';
import Img54 from '../Images/apptek24.jpeg';
import Img55 from '../Images/apptek25.jpeg';
import Img56 from '../Images/apptek26.jpeg';
//import Img57 from '../Images/apptek27.jpeg';





const Home = () => {

  var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
  (function(){
  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
  s1.async=true;
  s1.src='https://embed.tawk.to/65586a7791e5c13bb5b137f9/1hfglvotf';
  s1.charset='UTF-8';
  s1.setAttribute('crossorigin','*');
  s0.parentNode.insertBefore(s1,s0);
  })();
  


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





<SwiperSlide className="image1" style={{top:"100px"}}>
              <div className="cont"> 
         <img src={Img04} alt="img"  className=" homeimg " /> 
        
         <img src={Img01} alt="img"  className="centered1  home-img1" style={{width:"400px",float:"none;"}}/> 
         <img src={Img02} alt="img"  className=" top-right  home-img1"/> 
         <img src={Img011} alt="img"  className=" bottom-right1 " style={{width: "300px",height:"auto",position:"absolute"}}/> 
         </div>
         
        
         


          <div className="top-left1 text-start" style={{top: '40px'}}>
            <h1 className="font-css text-blue">Not Getting Job ?</h1>
          <p className="font-css1 mb-0 text-blue">Join Us to Get Interview with Internships and Training till</p>
          
          <p className="font-css1 text-blue mb-5">You Get the Job</p>
          <br/>
            <br/>
            <br/>
          <div className="mt-5 px-5">
            <button type="btn"  className="  btn btn-lg  btn-css" ><h4 className="p-2 m-0">Enquiry Now</h4></button>
            </div>
          </div>
      </SwiperSlide>  


<SwiperSlide className="image1" style={{top:"100px"}}>
  <img src={Img2} alt="img"  className=" mt-5 h-550 w-100 home-img"/>
        

         <img src={Img1} alt="img"  className=" mt-5 h-550 w-100 home-img"/>
          <div className="top-left1 text-start text-blue ">
            <h1 className="font-css text-blue">Do an Internship with stipend</h1>
          <p className="font-css1 mb-0 text-blue mb-5">Just Not Only The Training</p>
          <p className="font-css1 text-blue"></p>
          <div className="mt-5 px-5">
          <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <button type="btn"  className="  btn btn-lg  btn-css"><h4 className="p-2 m-0">Enquiry Now</h4></button>
            </div>
          </div>
      </SwiperSlide>  

<SwiperSlide className="image1" style={{top:"100px "}}>
        
      <img src={Img033} alt="img"  className=" m-5"   style={{width:"800px",float:"right",height:"auto;"}}/>
         <img src={Img011} alt="img"  className=" bulb p-3 mt-3 " />
        

         
          
          <div className="top-left1 text-start">
            <h1 className="font-css text-blue">Pay Upto 75% fee Once</h1>
          <p className="font-css1 mb-0 text-blue mb-5">We Place You In a Company!</p>
          <p className="font-css1 text-blue"></p>
          <div className="mt-5 px-5">
          <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <button type="btn"  className="  btn btn-lg  btn-css"><h4 className="p-2 m-0">Enquiry Now</h4></button>
            </div>
          </div>
          
      </SwiperSlide>  

{/* <span className="float-right" ><i class="bi bi-chat-dots livechat"></i></span> */}
      
        
      <a href="https://api.whatsapp.com/send?phone=51955081075&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." className="float" target="_blank">
        <i className="fa fa-whatsapp my-float"></i>
      </a>

      
      
       
      
         
    </Swiper>
         </div>
{/*************************************** *1 Block Starts here *********************************/}
     <section>
        <div className="container-fluid  py-5">
          <div className="bggradientlightblue br-container">

          <div className="col-md-12 text-center">


          <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 text-center headings">
            <h1 className="text-blue fw-700">IT Training in Bangalore to start your IT Career.</h1>
               <h2 className="text-blue fw-500">Welcome to Appteknow Careers</h2>
            </div>
            <div className="col-md-2"></div>
            </div>


            <div className="row">
              <div className="col-md-8 py-3 text-align-justify">
                
                <h5 class="text-align-justify m-5">
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
                  created a huge impact on our student's learning curve. We are
                  able to place all most all the students who enrolled with us.
                </h5> 
                </div>
              <div className="col-md-4 p-3">
                <div className="p-5 form-css zoom">
                <img src={Img4} alt="" id="image4" className="select-courses" style={{width:'100%'}}/>

                </div>
              </div>
            </div>
          </div>
</div>

       


 {/*************************************** * 1 sec ends here *********************************/}
      <div className="container-fluid br-container" >
        <div className="m-5">

          <div className="col-md-12" mb-5>
            <div className="row">
            <div className=" col-md-3 "></div>
              <div className=" col-md-6 text-center headings">            
                <h1 className="text-blue fw-700">We are not like others!</h1>
              {/* <h2 className=" form-css fw-500 text-blue">Training along with internship & Stipend:</h2> */}
              </div>

               <div className=" col-md-3 "></div>
              </div>


              <div class="row py-5">
            <div className="col-md-1 "></div>
               <div className="col-md-10 p-3">
                <div className="p-3 form-css text-align-justify">
                <h3 className=" form-css fw-500 text-blue">Training along with internship & Stipend:</h3>
                <h5 className="mt-3 f-18 ">
                  Certainly! Providing software training with an internship is a distinctive and valuable 
                feature that distinguishes our institute from others. We ensure hands-on experience by
                 involving you in real software projects undertaken by our IT Company, providing comprehensive 
                 practical exposure.Additionally, we offer a stipend based on your performance during the internship.
                  After the internship period concludes, we assist you in securing job interviews with various
                  IT companies until  you successfully land a job. </h5>

                </div>
                <div className="p-3 form-css text-align-justify">
                <h3 className=" form-css fw-500 text-blue">Pay full fee only once we place you!</h3>
                <h5 className="mt-3 f-18 ">
                Pay the full fee only once we secure a placement for you.
                   Why pay the full fee to an institute before they secure you a job? With us,
                    you only pay up to 75% once we successfully place you. If we are unable to find a placement for you, 
                    you will not need to pay any fee. We not only guarantee placement but also tie the fee to your placement.
                   It becomes our responsibility to find you a job so that we can collect the remaining amount.  </h5>

                </div>
              </div>
              <div className="col-md-1 "></div>
             
            </div>
          </div>
          </div>
          </div>

{/*************************************** * 2 sec ends here *********************************/}


          
            <div className="container-fluid  bggradientblue br-container{" >
              <div className=" mb-5">
          <div className="col-md-12" mb-5>
            <div className="row">
              
               <div className="col-md-6 p-3">
                <div className="p-3  m-5 form-css zoom1">
                <img src={Img5} alt="" id="image4" className="h-400 w-100 select-courses"/>

                </div>
                <div className="text-center ">
                  <p className="mb-3  mt-5 form-css"><h3 className="text-blue text-bold">We Conduct Interviews Everyday</h3></p>
                  <button type="button"  className=" btn btn-outline-primary btn-lg">Click Here</button>
                </div>
              </div>
              <div class="col-md-6 p-3  ">
              <div className="p-3 m-5 form-css zoom1">
                <img src={Img6} alt="" id="image4" className="h-400 w-100 select-courses "/>

                </div>
                <div className=" text-center">
                  <p className="mb-3  mt-5 form-css"><h3 className="text-blue text-bold">Our Students Get Job Every Week</h3></p>
                  <button type="button"  className=" btn btn-outline-primary btn-lg">Click Here</button>
                </div>

              </div>
            </div>
          </div>
          </div>
          </div>
{/*************************************** * 4 sec ends here *********************************/}


          {/* <div >
            <div className="col-md-12 mb-5">
            <div class="row m-5">
              
               <div className="col-md-6 p-3">
                <div className="p-3 form-css zoom">
                <img src={Img7} alt="" id="image4" className="4-300 w-100 select-courses"/>
                <div className="text-center p-3">
                 <button onClick="" className="btn btn-danger">Interviews</button>
                  <a href="https://appteknow.com/on-going-interviews-2/" className=""/>
                  
                </div>

                </div>
              </div>
              <div class="col-md-6 p-3 ">
              <div className="p-3 form-css zoom">
                <img src={Img8} alt="" id="image4" className="h-400 w-100 select-courses"/>
                <div className="text-center p-3">
                <button className="btn btn-danger">Placements</button>
                  <a href="https://appteknow.com/placements/ "></a>
                  
                </div>
                </div>
              </div>
            </div>
          </div>

          </div> */}



{/*************************************** * 5 sec ends here *********************************/}
<div className="swiper h-400 sw2-css">


<div className="row mb-3">
            <div className=" col-md-3 "></div>
            <div className=" col-md-6 text-center">            
                <h1 className="text-blue fw-700">Our Solutions For Our Careers</h1>
             
              </div>

               <div className=" col-md-3 "></div>
              </div>

         <Swiper 
             modules={[Navigation, Autoplay, Scrollbar, A11y]}
             //spaceBetween={100}
             //slidesPerView={1}
             //navigation
             autoplay={{autoplay:true}}
            
             //pagination={{ clickable: false }} Pagination
             scrollbar={{ draggable: true }}>



      <SwiperSlide  data-swiper-autoplay="8000">
        <div className="row">
          <div className="col-md-4 ">
          <div className="imgcontainer" >
        <img src={Img9} alt="" id="image4" className="h-300  w-100 select-courses grcolor"/>
         
         <div className=" bottom-left   Text-center">
          <div className="Software Developer"></div>
          <span className=" bg-dark Text-center d-flex swiper-slide1" >
             
            <button type="btn" className=" px-2 text-white btn btn-outline coursebtn ">Course Details</button>
            <button type="btn" className=" px-2 text-white btn btn-outline  coursebtn  ">Add to Cart</button>
          </span>
          </div>
          </div>
          </div>




          <div className="col-md-4 ">
          <div className="imgcontainer" >
        <img src={Img10} alt="" id="image4" className="h-300  w-100 select-courses grcolor"/>
         
         <div className=" bottom-left   Text-center">
          <div className="Software Developer"></div>
          <span className="Text-center d-flex swiper-slide1">
             
            <button type="btn" className=" px-2 text-white btn btn-outline  coursebtn">Course Details</button>
            <button type="btn" className=" px-2 text-white btn btn-outline  coursebtn  ">Add to Cart</button>
          </span>
          </div>
          </div>
          </div>

          <div className="col-md-4 ">
          <div className="imgcontainer" >
        <img src={Img11} alt="" id="image4" className="h-300  w-100 select-courses grcolor"/>
         
         <div className=" bottom-left   Text-center">
          <div className="Software Developer"></div>
          <span className="Text-center d-flex swiper-slide1">
             
            <button type="btn" className=" px-2 text-white btn btn-outline  coursebtn  ">Course Details</button>
            <button type="btn" className=" px-2 text-white btn btn-outline  coursebtn ">Add to Cart</button>
          </span>
          </div>
          </div>
          </div>

        </div>

        </SwiperSlide>

        <SwiperSlide  data-swiper-autoplay="8000">
        <div className="row">
        <div className="col-md-4 ">
          <div className="imgcontainer" >
        <img src={Img12} alt="" id="image4" className="h-300  w-100 select-courses grcolor"/>
         
         <div className=" bottom-left   Text-center">
          <div className="Software Developer"></div>
          <span className="Text-center d-flex swiper-slide1">
             
            <button type="btn" className=" px-2 text-white btn btn-outline coursebtn  ">Course Details</button>
            <button type="btn" className=" px-2 text-white btn btn-outline  coursebtn  ">Add to Cart</button>
          </span>
          </div>
          </div>
          </div>

          <div className="col-md-4 ">
          <div className="imgcontainer" >
        <img src={Img13} alt="" id="image4" className="h-300  w-100 select-courses grcolor"/>
         
         <div className=" bottom-left   Text-center">
          <div className="Software Developer"></div>
          <span className="Text-center d-flex swiper-slide1">
             
            <button type="btn" className=" px-2 text-white btn btn-outline  coursebtn ">Course Details</button>
            <button type="btn" className=" px-2 text-white btn btn-outline   coursebtn  ">Add to Cart</button>
          </span>
          </div>
          </div>
          </div>

          <div className="col-md-4 ">
          <div className="imgcontainer" >
        <img src={Img14} alt="" id="image4" className="h-300  w-100 select-courses grcolor"/>
         
         <div className=" bottom-left   Text-center">
          <div className="Software Developer"></div>
          <span className="Text-center d-flex swiper-slide1">
             
            <button type="btn" className=" px-2 text-white btn btn-outline brr  coursebtn ">Course Details</button>
            <button type="btn" className=" px-2 text-white btn btn-outline brl  coursebtn ">Add to Cart</button>
          </span>
          </div>
          </div>
          </div>

        </div>

        </SwiperSlide>

        <SwiperSlide  data-swiper-autoplay="8000">
        <div className="row">
        <div className="col-md-4 ">
          <div className="imgcontainer" >
        <img src={Img15} alt="" id="image4" className="h-300  w-100 select-courses grcolor"/>
         
         <div className=" bottom-left   Text-center">
          <div className="Software Developer"></div>
          <span className="Text-center d-flex swiper-slide1 ">
             
            <button type="btn" className=" px-2 text-white btn btn-outline coursebtn ">Course Details</button>
            <button type="btn" className=" px-2 text-white btn btn-outline  coursebtn">Add to Cart</button>
          </span>
          </div>
          </div>
          </div>

          <div className="col-md-4 ">
          <div className="imgcontainer" >
        <img src={Img9} alt="" id="image4" className="h-300  w-100 select-courses grcolor"/>
         
         <div className=" bottom-left   Text-center">
          <div className="Software Developer"></div>
          <span className="Text-center d-flex swiper-slide1 ">
             
             <button type="btn" className=" px-2 text-white btn btn-outline coursebtn ">Course Details</button>
             <button type="btn" className=" px-2 text-white btn btn-outline  coursebtn">Add to Cart</button>
           </span>
          </div>
          </div>
          </div>

          <div className="col-md-4 ">
          <div className="imgcontainer" >
        <img src={Img10} alt="" id="image4" className="h-300  w-100 select-courses grcolor"/>
         
         <div className=" bottom-left   Text-center">
          <div className="Software Developer"></div>
          <span className="Text-center d-flex swiper-slide1 ">
             
            <button type="btn" className=" px-2 text-white btn btn-outline coursebtn ">Course Details</button>
            <button type="btn" className=" px-2 text-white btn btn-outline  coursebtn">Add to Cart</button>
          </span>
          </div>
          </div>
          </div>

        </div>

        </SwiperSlide>
        
{/* <div className="swiper-button-prev1"></div>
<div className="swiper-button-next1"></div> */}

       

        
    </Swiper>
         </div>

        


{/*************************************** * 7sec ends here *********************************/}
        <div  className="container-fluid bggradientdarkblue br-container" >     
        <div className="m-3">


            <div className="col-md-12 m-5">
            <div class="row p-3">
            <div class="col-md-3 "></div> 
            <div className=" col-md-6 text-center">            
                <h2 className="text-blue fw-700">Complementary Softskills Training </h2>
             
              </div>
              <div class="col-md-3 "></div>
              </div>
            <div class="row">
              <div class="col-md-4 "></div>
               <div className="col-md-4 p-3 " >
                <div className="p-3 form-css zoom borderunset mb-3"  >
                <img src={Img18} alt="" className="image4 h-300 w-100 softskill-css skillhover"  style={{borderRadius:"100%",border:"unset;"}} />

                </div>
              </div>
              <div class="col-md-4 "></div>


               {/* <div className="text-center">
                  <button className="btn btn-danger mb-5" type="btn">Click here for Details</button>
                </div> */}
            </div>
          </div>

          </div>
          </div>
          </div>
      
      </section>   
{/*************************************** * Next Block Starts here *********************************/}
<section>
<div className="container-fluid p-3  br-container" style={{backgroundColor: "#d7d6cfeb"}}>
          <div className="col-md-12 p-3  mb-5">

          <div className="col-md-12  p-5" >
            <div className="row">
            <div className=" col-md-3 "></div>
              <div className=" col-md-6 text-center headings">            
                <h1 className="text-blue fw-700">Choose Your Career and Order</h1>
              {/* <h2 className=" form-css fw-500 text-blue">Training along with internship & Stipend:</h2> */}
              </div>

               <div className=" col-md-3 "></div>
              </div>
              </div>
<Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
            




          <div className="p-5" >
        <div className="card " >
        <SwiperSlide><div class="card-group">
  <div class="card">
  <img src={Img10} alt="" id="image4" className="h-300  w-100"/>
    <div class="card-body p-0">
      <h3 class="card-title text-blue text-bold">Phython</h3>
      <h6 class="card-title "><span className="text-gray"><del>INR 18000.00</del></span><span className="text-blue text-bold" >&nbsp;INR 80000.00</span></h6>
      
    </div>
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
    <div class="card-footer text-cart">
      <small class="text-muted text-bold " >Add To Cart</small>
    </div>
  </div>
 
</div>
          
          </SwiperSlide>
        </div>
        <SwiperSlide><div class="card-group">
  <div class="card">
  <img src={Img11} alt="" id="image4" className="h-300  w-100"/>
    <div class="card-body p-0">
    <h3 class="card-title text-blue text-bold">Web Development</h3>
    <h6 class="card-title "><span className="text-gray"><del>INR 18000.00</del></span><span className="text-blue text-bold" >&nbsp;INR 80000.00</span></h6>
     
    </div>
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
    <div class="card-footer text-cart">
    <small class="text-muted text-bold" >Add To Cart</small>
    </div>
  </div>
 
</div></SwiperSlide>

        <SwiperSlide><div class="card-group">
  <div class="card">
  <img src={Img12} alt="" id="image4" className="h-300  w-100"/>
    <div class="card-body p-0">
    <h3 class="card-title text-blue text-bold">Softskills</h3>
    <h6 class="card-title "><span className="text-gray"><del>INR 18000.00</del></span><span className="text-blue text-bold" >&nbsp;INR 80000.00</span></h6>


      
    </div>
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
    <div class="card-footer text-cart">
    <small class="text-muted text-bold" >Add To Cart</small>
    </div>
  </div>
  
  
</div></SwiperSlide>
        <SwiperSlide><div class="card-group">
 
  
  <div class="card">
  <img src={Img13} alt="" id="image4" className="h-300  w-100"/>
    <div class="card-body p-0">
    <h3 class="card-title text-blue text-bold">Software Testing</h3>
    <h6 class="card-title "><span className="text-gray"><del>INR 18000.00</del></span><span className="text-blue text-bold" >&nbsp;INR 80000.00</span></h6>
    
    </div>
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
    <div class="card-footer text-cart">
    <small class="text-muted text-bold" >Add To Cart</small>
    </div>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div class="card-group">
 
 
  <div class="card">
  <img src={Img14} alt="" id="image4 text-bold" className="h-300  w-100"/>
    <div class="card-body p-0">
      <h5 class="card-title text-blue">JAVA</h5>
      <h6 class="card-title "><span className="text-gray"><del>INR 18000.00</del></span><span className="text-blue text-bold" >&nbsp;INR 80000.00</span></h6>
      
    </div>
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
    <div class="card-footer text-cart ">
    <small class="text-muted text-bold" >Add To Cart</small>
    </div>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div class="card-group">
  
 
  <div class="card">
  <img src={Img15} alt="" id="image4" className="h-300  w-100"/>
    <div class="card-body p-0">
    <h3 class="card-title text-blue text-bold">Django</h3>
 
    <h6 class="card-title "><span className="text-gray"><del>INR 18000.00</del></span><span className="text-blue text-bold" >&nbsp;INR 80000.00</span></h6>
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
    <div class="card-footer text-cart">
    <small class="text-muted text-bold " >Add To Cart</small>
    </div>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div class="card-group">
  
 
  <div class="card">
  <img src={Img11} alt="" id="image4" className="h-300  w-100"/>
    <div class="card-body p-0">
    <h3 class="card-title text-blue text-bold">Digital Marketing</h3>
    <h6 class="card-title "><span className="text-gray"><del>INR 18000.00</del></span><span className="text-blue text-bold" >&nbsp;INR 80000.00</span></h6>
      
    </div>
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
    <div class="card-footer text-cart">
    <small class="text-muted text-bold" >Add To Cart</small>
    </div>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div class="card-group">
 
 
  <div class="card">
  <img src={Img9} alt="" id="image4" className="h-300  w-100"/>
    <div class="card-body p-0">
      <h3 class="card-title text-blue text-bold">JAVA</h3>
      <h6 class="card-title "><span className="text-gray"><del>INR 18000.00</del></span><span className="text-blue text-bold" >&nbsp;INR 80000.00</span></h6>
     
    </div>
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
    <div class="card-footer text-cart">
    <small class="text-muted text-bold" >Add To Cart</small>
    </div>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div class="card-group">
 
 
  <div class="card">
  <img src={Img12} alt="" id="image4" className="h-300  w-100"/>
    <div class="card-body p-0">
      <h3 class="card-title text-blue text-bold">Javascript</h3>
      <h6 class="card-title "><span className="text-gray"><del>INR 18000.00</del></span><span className="text-blue text-bold" >&nbsp;INR 80000.00</span></h6>
      
    </div>
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
    <div class="card-footer text-cart">
    <small class="text-muted text-bold" >Add To Cart</small>
    </div>
  </div>
</div></SwiperSlide>
</div>
      </Swiper>
      </div>
      </div>
      
      </section>

 {/******************************* * Linkedin profiles  ****************************************/}

<section>
<div className="container-fluid p-3  br-container" style={{backgroundColor: "#ffffff"}}>
          <div>

          <div className="col-md-12  py-2" >
            <div className="row">
            <div className=" col-md-3 "></div>
              <div className=" col-md-6 text-center headings">            
                <h2 className="text-blue fw-700">Our Expert Training Team at Your Service</h2>
              {/* <h2 className=" form-css fw-500 text-blue">Training along with internship & Stipend:</h2> */}
              </div>

               <div className=" col-md-3 "></div>
              </div>
              </div>

              <div className=" col-md-12 " >
            <div className="row">
            
              <div className=" col-md-12 text-center ">             
<Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
            




          <div className="p-5" >
        <div className="card " >
        <SwiperSlide><div className="card-group border-css">
  <div class="card">
  <img src={Img20} alt="" id="image4" className="h-300  w-100"/>
    <div className="card-body p-0">
      <h4 className="card-title text-blue text-bold">Vishwanath Gowda</h4>
      <h6 className="card-title "><span className="text-blue text-bold" >Training Head and Manager</span></h6>
      
    </div>
    
    <div className="card-footer ">
      <small className="text-muted text-bold "> 10 Yrs Exp.</small>
      
    </div>
    <a href="https://www.linkedin.com/in/vishwanath-gowda/"   className="px-3 text-gray f-19 header-social header-linkedin vertical-align"><FaLinkedinIn /></a>
  </div>
 
</div>
          
          </SwiperSlide>
          <SwiperSlide><div className="card-group border-css">
  <div class="card">
  <img src={Img24} alt="" id="image4" className="h-300  w-100"/>
    <div className="card-body p-0">
      <h4 className="card-title text-blue text-bold">Savitri Rani</h4>
      <h6 className="card-title "><span className="text-blue text-bold" >Trainer and Frontend Developer</span></h6>
      
    </div>
    
    <div className="card-footer ">
      <small className="text-muted text-bold "> 8 Yrs Exp.</small>
      
    </div>
    <a href="https://www.linkedin.com/in/vishwanath-gowda/"   className="px-3 text-gray f-19 header-social header-linkedin vertical-align"><FaLinkedinIn /></a>
  </div>
 
</div>
          
          </SwiperSlide>
         
        </div>
        <SwiperSlide><div class="card-group border-css">
        <div class="card">
  <img src={Img22} alt="" id="image4" className="h-300  w-100"/>
    <div className="card-body p-0">
      <h4 className="card-title text-blue text-bold">Chandrashekhar P</h4>
      <h6 className="card-title "><span className="text-blue text-bold" >Trainer</span></h6>
      
    </div>
    
    <div className="card-footer ">
      <small className="text-muted text-bold "> 22 Yrs Exp.</small>
      
    </div>
    <a href="https://www.linkedin.com/in/chandrasekhar-pasupuleti-336339274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"   className="px-3 text-gray f-19 header-social header-linkedin vertical-align"><FaLinkedinIn /></a>
  </div>
 
</div></SwiperSlide>

        <SwiperSlide><div class="card-group border-css">
        <div className="card">
  <img src={Img25} alt="" id="image4" className="h-300  w-100"/>
    <div className="card-body p-0">
      <h4 className="card-title text-blue text-bold">Jerusha Joseph</h4>
      <h6 className="card-title "><span className="text-blue text-bold" >Trainer </span></h6>
      
    </div>
    
    <div className="card-footer ">
      <small className="text-muted text-bold "> 10 Yrs Exp.</small>
      
    </div>
    <a href="https://www.linkedin.com/in/ravi-kumar-873ab732/"   className="px-3 text-gray f-19 header-social header-linkedin vertical-align"><FaLinkedinIn /></a>
  </div>
  
</div></SwiperSlide>
<SwiperSlide><div class="card-group border-css">
        <div className="card">
  <img src={Img21} alt="" id="image4" className="h-300  w-100"/>
    <div className="card-body p-0">
      <h4 className="card-title text-blue text-bold">Ravi Kumar</h4>
      <h6 className="card-title "><span className="text-blue text-bold" >Trainer </span></h6>
      
    </div>
    
    <div className="card-footer ">
      <small className="text-muted text-bold "> 18 Yrs Exp.</small>
      
    </div>
    <a href="https://www.linkedin.com/in/ravi-kumar-873ab732/"   className="px-3 text-gray f-19 header-social header-linkedin vertical-align"><FaLinkedinIn /></a>
  </div>
  
</div></SwiperSlide>


        <SwiperSlide><div class="card-group">
 
  
       
</div></SwiperSlide>
       
     
      
       
       
</div>
      </Swiper>
      </div>
      
      </div>
      </div>
      
      </div>
      </div>
      
      </section>
 {/* *******************************Linked profile ends here *************************/}
{/************************************* Gallery *************************************/}
<section>

<div className="col-md-12  py-2" >
            <div className="row">
            <div className=" col-md-3 "></div>
              <div className=" col-md-6 text-center headings">            
                <h2 className="text-blue fw-700">Our  Gallery</h2>
              {/* <h2 className=" form-css fw-500 text-blue">Training along with internship & Stipend:</h2> */}
              </div>

               <div className=" col-md-3 "></div>
              </div>
              </div>
 <div className="m-5  p-5 bggradientblue" style={{    borderRadius: '10px'}}> 



 
<div className="container   br-container p-0" >
    <div className=" mb-0">
          <div className="col-md-12" mb-5>
            <div className="row">
              
               <div className="col-md-3 p-1">
                <div className="p-1 form-css zoom1">
                <img src={Img30} alt="" id="image4" className="h-300 w-100 select-courses-g"/>

                </div>
               
              </div>
              <div class="col-md-3 p-1  ">
              <div className="p-1  form-css zoom1">
                <img src={Img31} alt="" id="image4" className="h-300 w-100 select-courses-g "/>

                </div>
              

              </div>

              <div class="col-md-3 p-1  ">
              <div className="p-1  form-css zoom1">
                <img src={Img32} alt="" id="image4" className="h-300 w-100 select-courses "/>

                </div>
               

              </div>

              <div class="col-md-3 p-1  ">
              <div className="p-1  form-css zoom1">
                <img src={Img33} alt="" id="image4" className="h-300 w-100 select-courses "/>

                </div>
              

              </div>
            </div>
          </div>
          </div>
          </div>
      
         
              <div className=" mb-0">
          <div className="col-md-12" >
            <div className="row">
              
               <div className="col-md-3 p-1">
                <div className="p-1 form-css zoom1">
                <img src={Img34} alt="" id="image4" className="h-300 w-100 select-courses"/>

                </div>
               
              </div>
              <div class="col-md-3 p-1  ">
              <div className="p-1  form-css zoom1">
                <img src={Img35} alt="" id="image4" className="h-300 w-100 select-courses "/>

                </div>
              

              </div>

              <div class="col-md-3 p-1  ">
              <div className="p-1  form-css zoom1">
                <img src={Img36} alt="" id="image4" className="h-300 w-100 select-courses "/>

                </div>
               

              </div>

              <div class="col-md-3 p-1  ">
              <div className="p-1  form-css zoom1">
                <img src={Img37} alt="" id="image4" className="h-300 w-100 select-courses "/>

                </div>
              

              </div>
            </div>
          </div>
          </div>
        
 </div>          
          </section>    


          <div className="col-md-12  py-2" >
            <div className="row">
            <div className=" col-md-3 "></div>
              <div className=" col-md-6 text-center headings">            
                <h2 className="text-blue fw-700">Our Gallery</h2>
              {/* <h2 className=" form-css fw-500 text-blue">Training along with internship & Stipend:</h2> */}
              </div>

               <div className=" col-md-3 "></div>
              </div>
              </div>
          <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"  >


      <div className= "container">   
        <div className="col-md-12" >
        <div className="row" >
        <div className=" col-md-3 "></div>
              <div className=" col-md-6 text-center headings">   
        
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" style={{height:"400px",width:"1000px"}} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="" style={{height:"400px",width:"1000px"}}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="" style={{height:"400px",width:"1000px"}}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="" style={{height:"400px",width:"1000px"}}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="" style={{height:"400px",width:"1000px"}}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt="" style={{height:"400px",width:"1000px"}}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt="" style={{height:"400px",width:"1000px"}}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt="" style={{height:"400px",width:"1000px"}} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" alt="" style={{height:"400px",width:"1000px"}}/>
        </SwiperSlide>
        <div className=" col-md-3 "></div>
        </div>
        </div>
        </div>
        </div>
      </Swiper>

     









      {/* Start of Features */}
      {/* <section>
        <div className="container-fluid p-3  br-container">
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
      </section> */}
      {/* Start of accreditattion */}
      {/* <section>
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
      </section> */}
      {/* Start of accreditattion */}
      {/* <section>
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
      </section> */}
      {/* <section>
        <div className="container">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12">
                <h1 className="text-white">Student Testimonials</h1>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Start of student testimonial */}
      {/* <section>
        <div className="container">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12"></div>
            </div>
          </div>
        </div>
      </section> */}
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
        <div className="container-fluid p-3">
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
      {/* <section>
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
      </section> */}
      {/* Ends of FOR MORE TESTIMONIAL */}

      {/* <section>
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
      </section> */}
      {/* <section>
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
      </section> */}

    </div>
  );
};

export default Home;