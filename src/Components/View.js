import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import BASE_URL from '../service/baseUrl';
import { useParams } from 'react-router-dom';
import { getProfile } from '../service/allApi';


function View() {
  // state to store user data
  const [user, setUser] = useState({})

  const { id } = useParams()

  const getUser = async () => {
    const { data } = await getProfile(id)
    setUser(data)
  }

  console.log(user);
  useEffect(() => {
    getUser()
  }, [])

  return (
    <div className='p-5'>

   <div>
        {
          user ? <Card className='container w-50 bg-light mb-5 mt-5' style={{borderRadius:'15px'}} >
            <Card.Img className=' container p-5' style={{ height: '400px', width: '400px'  }} variant="top"
             src={`${BASE_URL}/uploads/${user.profile}`} />
            <Card.Body>
              <Card.Title className='text-center text-warning fs-2'> {user.fname+" "+ user.lname} </Card.Title> <hr />
              <Card.Text>
                <ListGroup className='text-center mb-5 fs-5'>
                  <ListGroup.Item>Full Name :<strong className='text-success'> {user.fname+" "+ user.lname} </strong></ListGroup.Item>
                  <ListGroup.Item>E-Mail : <strong className='text-success'>{user.email} </strong></ListGroup.Item>
                  <ListGroup.Item>Mobile Number : <strong className='text-success'>{user.phn}</strong></ListGroup.Item>
                  <ListGroup.Item>Gender : <strong className='text-success'>{user.gender}</strong></ListGroup.Item>
                  <ListGroup.Item>Employee Status : <strong className='text-success'>{user.status}</strong></ListGroup.Item>
  
                </ListGroup>
              </Card.Text>
  
            </Card.Body>
          </Card> : <h1>Employee Not present</h1>
        }
   </div>
    </div>
  )
}

export default View