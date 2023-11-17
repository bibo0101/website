import React from 'react';
import '../stylesheet.css';
import {Link} from 'react-router-dom';
import logo1 from '../Images/logo3.png'; 

import { FaFacebookSquare, FaInstagramSquare, FaLinkedinIn, FaYoutubeSquare } from "react-icons/fa";

const Header = () => {
  return (
    <>
    <div style={{position:"fixed" , zIndex:99 , width:"100%"}} >
        
            <div className="col-md-12 px-5 m-0" style={{backgroundColor: '#b20606'}}> 
            <div className="">
                <div className="row">
                 
                    <div className="col-md-6 p-1 ">
                        <h6 className="text-white text-center p-1 m-0">Appteknow Careers is a Brand Name of EDGTal Academy LLP.</h6>
                    </div>
                    <div className="col-md-4 p-1">
                    <h6 className="text-white  text-end m-0"> 
                    <a href="https://www.facebook.com/appteknowcareers" className="px-3 text-white f-19 header-social header-facebook vertical-align"><FaFacebookSquare /></a>
                    
                    <a href="https://www.linkedin.com/company/appteknowcareers"   className="px-3 text-white f-19 header-social header-linkedin vertical-align"><FaLinkedinIn /></a>
                    <a href="https://www.instagram.com/appteknowcareers/"  className="px-3 text-white f-19 header-social header-instagram vertical-align"><FaInstagramSquare /></a>
                    <a href="https://www.youtube.com/@aptechcourses9503"  className="px-3 text-white f-19 header-social header-youtube vertical-align "><FaYoutubeSquare /></a></h6>
                    
                    </div>
                    <div className="col-md-2 p-1 m-0">
                        <h6 className="text-end text-white m-0  p-1">
                          <Link to="https://careers.appteknow.com/Studentportal/signin" target='_blank' class="text-white"style={{textDecoration:"none"}}> Login&nbsp;&nbsp;</Link>
                           <Link to="https://careers.appteknow.com/Studentportal/signin" target='_blank' class="text-white"style={{textDecoration:"none"}}>&nbsp;SignUp</Link>
                          </h6>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid p-0" style={{borderBottom: "2px solid rgb(10 130 237)", boxShadow: "1px 1px 5px 4px #212529"}}> 
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-0">
  <div className="container-fluid" style={{height:"75px", backgroundColor: "#00006c"}}>
    <Link className="navbar-brand" to="/">
   
      
    <img src={logo1} className=" p-3 " alt="img" style={{boxShadow:"1px 1px3px 4px #fff",height:'350px',width:'350px'}}/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 px-5">
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle"style={{textDecoration:"none",color:"#fff",fontWeight:'500'}}  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            COURSES
          </a>
          <ul className="dropdown-menu dropdown-content" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item p-0" href="#"><a href="#">IT Courses</a>
            </a>
            <ul class="dropdown-menu dropdown-submenu " style={{top:"5px"}} >
              <li>  <Link to="/fullstackjava" class="dropdown-item">Full Stack Java</Link> </li>
              <li>  <Link to="/fullstackphython" class="dropdown-item">Full Stack Phython </Link> </li>
              <li>   <Link to="/webdevelopment" class="dropdown-item">Full Stack Web Development</Link> </li>
              <li>  <Link class="dropdown-item" to="/softwaretesting">Software Testing</Link> </li>
              </ul>
              
              </li>
               <li><div className="dropdown-divider"></div></li>
            <li><a className="dropdown-item " href="#">Non-IT Courses</a>
            <ul class="dropdown-menu dropdown-submenu">
              <li>  <Link class="dropdown-item" to="/DigitalMarketing">Digital Marketing</Link> </li>
              <li>  <Link class="dropdown-item" to="/TallyGst">Tally + GST</Link> </li>
              <li>  <Link class="dropdown-item" to="/AdvanceMsOffice">Advance Ms-Office Suite</Link> </li>
              </ul>
            
            </li>
            <li><div className="dropdown-divider"></div></li>
            <li><a className="dropdown-item" href="#">Complemenatry</a>
            <ul class="dropdown-menu dropdown-submenu">
              <li>  <Link class="dropdown-item" to="/SoftSkillApptitute">Softskills and Apptitude</Link> </li>
              <li>  <Link class="dropdown-item" to="/EnglishCommunication">English Communication</Link> </li>
              <li>  <Link class="dropdown-item" to="/InterviewPrepation">Interview Prapration</Link> </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link  text-blue" style={{textDecoration:"none",color:"#fff",fontWeight:'500'}} to="/Internship" id="navbarDropdown" role="button"  aria-expanded="false">
           INTERNSHIPS
          </Link> 
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-blue" style={{textDecoration:"none",color:"#fff",fontWeight:'500'}}  href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           COMPANIES
          </a>
          <ul className="dropdown-menu dropdown-content" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/HireForUs">Hire  For Us </Link></li>
             <li><div className="dropdown-divider"></div></li>
            <li><Link className="dropdown-item" to="/CorporateTraining">Corporate Training</Link></li>
            
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-blue"style={{textDecoration:"none",color:"#fff",fontWeight:'500'}}  href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           COLLEGES
          </a>
          <ul className="dropdown-menu dropdown-content" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/TechnicalTraining">Technical Training</Link></li>
             <li><div className="dropdown-divider"></div></li>
            <li><Link className="dropdown-item" to="/SkillsTraining">Skills Trainings</Link></li>
            <li><div className="dropdown-divider"></div></li>
            <li><Link className="dropdown-item" to="/OnCampusDrive">OnCampus Drive</Link></li>
            
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-blue" style={{textDecoration:"none",color:"#fff",fontWeight:'500'}} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          BRANCHES
          </a>
          <ul className="dropdown-menu dropdown-content" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/BtmLayout">BTM Layout </Link></li>
            <li><div className="dropdown-divider"></div></li>
            <li><Link className="dropdown-item" to="/Mysore">Mysore</Link></li>
            <li><div className="dropdown-divider"></div></li>
            <li><Link className="dropdown-item" to="/Nelamangala ">Nelamangala</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-blue" style={{textDecoration:"none",color:"#fff",fontWeight:'500'}} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           PLACEMENTS
          </a>
          <ul className="dropdown-menu dropdown-content" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>

            <li><div className="dropdown-divider"></div></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><div className="dropdown-divider"></div></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
       
       
      </ul>
     
    </div>
  </div>
</nav>
</div>
  </div>
    </>
  );
}

export default Header;
