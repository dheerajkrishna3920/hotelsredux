import React, { useContext, useEffect, useState } from 'react'
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import './Add.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { registerEmpl } from '../service/allApi';
import { useNavigate } from 'react-router-dom';
import { registerContext } from './Contextshare'
import Alert from 'react-bootstrap/Alert';


function Add() {


  // state to store api response error message
  const [errorMsg, setErrorMsg] = useState("")


  // create a state to store preview image
  const [preview, setPreview] = useState('')

  //to get context/acessing of the context
  const { registerData, setRegisterData } = useContext(registerContext)

  // object for usenavigate
  const navigate = useNavigate()


  //create an object to store datas from input
  const [userData, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    phn: "",
    mobile: "",
    gender: "",
    status: "",
    location: ""
  })


  const [Image, setImage] = useState('')

  const setProfile = (e) => {

    setImage(e.target.files[0]);

  }

  // a function to update userDta when user enter the input in html
  const userDetails = (e) => {
    //prevent that event
    e.preventDefault()
    //acess value to update in userData
    const value = e.target.value
    //acess key to update in userData
    const key = e.target.name
    //update the data with existing data
    setUser({ ...userData, [key]: value })

  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    const { fname, lname, email, phn, mobile, gender, status, location } = userData

    if (fname == "") {
      toast.error('first name required')
    }
    else if (lname == "") {
      toast.error('last name required')
    }
    else if (email == "") {
      toast.error('email required')
    }
    else if (phn == "") {
      toast.error('mobile number required')
    }
    else if (mobile == "") {
      toast.error('mobile number 2 required')
    }
    else if (status == "") {
      toast.error('status required')

    }
    else if (location == "") {
      toast.error('employee loaction required')
    }
    else if (Image == "") {
      toast.error('profile picture required')
    }
    else {
      // toast.success('registration success')
      // api call

      // headers data(the api contain file type data in body)
      const headerConfig = {
        "Content-Type": "multipart/form-data"
      }

      //body data(as form data)
      const data = new FormData()
      //add data to formdata object
      data.append("user_profile", Image)
      data.append("fname", fname)
      data.append("lname", lname)
      data.append("email", email)
      data.append("phn", phn)
      data.append("mobile", mobile)
      data.append("gender", gender)
      data.append("status", status)
      data.append("location", location)


      //api call
      const response = await registerEmpl(data, headerConfig)
      if (response.status == 200) {


        // update data of context
        setRegisterData(response.data)

        // reset all states datas
        setUser({
          fname: "",
          lname: "",
          email: "",
          phn: "",
          mobile: "",
          gender: "",
          status: "",
          location: ""
        })
        setImage("")

        //redierect to home page
        navigate('/')



      }
      else {
        setErrorMsg(response.response.data)
      }

      console.log(response);

    }

  }


  useEffect(() => {

    if (Image) {
      setPreview(URL.createObjectURL(Image))

    }

  }, [Image])






  return (
    <div>


      <div>
        {
          errorMsg ? <Alert variant={'danger'} onClose={() => setErrorMsg("")} dismissible>
            {errorMsg}
          </Alert> : ""
        }
      </div>

      <div>
        <h2 className='text-light mt-5' style={{ textAlign: 'center' }}>Register Employee Details</h2>
        <div className='bg-light container p-5 mt-5 mb-5' >

          <div className='p-1' style={{ textAlign: 'center' }} >
            <img style={{ height: '150px' }} src={preview ? preview : "https://i.postimg.cc/k4mMr9Yx/image.png"} alt="" />
          </div>


          <form action="">
            <Row className="g-2 mt-5">
              <Col md>
                <label className='ms-2 mb-2 text-dark'>First Name</label>
                <input className='form-control bg-dark text-light' style={{ height: '49px', }} type="text" placeholder='First Name'
                  name='fname' onChange={userDetails} required />
                <span>Firstname should have 3-16 characters</span>

              </Col>


              <Col md>
                <label className='ms-2 mb-2 text-dark'>Last Name</label>
                <input onChange={userDetails} className='form-control bg-dark text-light' style={{ height: '49px', }} type="text" placeholder='Last Name'
                  name='lname' required />
                <span>Lastname should have 3-16 characters</span>
              </Col>
            </Row>



            <Row className="g-2 mt-2">
              <Col md >
                <label className='ms-2 mb-2 text-dark'>Email Address</label>
                <input onChange={userDetails} className='form-control bg-dark text-light' style={{ height: '49px', }} type="email" placeholder='E-mail'
                  name='email' required />
                <span>Enter a valid email-id</span>


              </Col>
              <Col md>
                <label className='ms-2 mb-2 text-dark'>Mobile Number 1</label>
                <input onChange={userDetails} className='form-control bg-dark text-light' style={{ height: '49px', }} type="text" placeholder='Mobile Number 1'
                  name='phn' required />
                <span>Enter a valid mobilre number</span>
              </Col>

            </Row>
            <Row className="g-2 mt-2">
              <Col md >



              </Col>
              <Col md>
                <label className='ms-2 mb-2 text-dark'>Mobile Number 2</label>
                <input onChange={userDetails} className='form-control bg-dark text-light' style={{ height: '49px', }} type="text" placeholder='Mobile Number 2'
                  name='mobile' required />
                <span>Enter a valid mobilre number</span>
              </Col>

            </Row>






            <Row className="g-2 mt-2 text-dark">
              <Col md>
                <label className='ms-2 text-dark'>Gender</label> <br />
                <input name='gender' value={'male'} onChange={userDetails} type="radio" />  <label htmlFor="">Male</label> <br />
                <input name='gender' value={'female'} onChange={userDetails} type="radio" /> <label htmlFor="">Female</label>
              </Col>
              <Col md>
                <label className='ms-2 mb-2 text-dark'>Select Employee Status</label>
                <Form.Select onChange={userDetails} name='status' className='bg-dark text-light'>
                  <option value={'Active'}>Active</option>
                  <option value={'In-Active'}>In-Active</option>
                </Form.Select>

              </Col>
            </Row>




            <Row className="g-2 mt-4 ">
              <Col md>
                <label className='ms-2 mb-2 text-dark'>Choose Profile Picture</label>
                <input onChange={setProfile} className='form-control bg-dark text-light' style={{ height: '49px', }} type="file" name='chooseprofilepicture'
                  required />
                <span>Please choose a file</span>

              </Col>
              <Col md>

                <label className='ms-2 mb-2 text-dark'>Enter Employee Location</label>
                <input onChange={userDetails} className='form-control bg-dark text-light' style={{ height: '49px', }} type="text" placeholder='Employee Location'
                  name='location' required />
                <span>Enter a valid location</span>

              </Col>
            </Row>


            <div className="container text-center w-50 mt-5 p-3">
              <Button onClick={handleSubmit} className="w-75" variant="success" size="">
                Submit
              </Button>
            </div>
          </form>


        </div>


      </div>
      <ToastContainer position='top-center' />
    </div>
  )
}

export default Add