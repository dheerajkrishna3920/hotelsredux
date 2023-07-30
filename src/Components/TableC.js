import React from 'react'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import BASE_URL from '../service/baseUrl';


function TableC({ displayData, removeEmp }) {
    return (
        <div>
            <div className='p-5' >

                <h2 className='ms-2 mb-5 text-center text-white'>List Of Employees</h2>
                <Table striped bordered hover  >
                    <thead className='fs-5' >
                        <tr style={{ textAlign: 'center' }}>
                            <th>Sl.No</th>
                            <th>Full Name</th>
                            <th>E-Mail</th>
                            <th>Mobile</th>
                            <th>Status</th>
                            <th>Profiles</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody >


                        {
                            displayData.length > 0 ? displayData.map((i, index) => (
                                <tr style={{ textAlign: 'center' }}>
                                    <td>{index + 1}</td>
                                    <td>{i.fname + " " + i.lname}</td>
                                    <td>{i.email}</td>
                                    <td>{i.phn}</td>
                                    <td>

                                        <Dropdown.Toggle className='p-1 text-center' style={{ height: '-1px', width: '100px' }} variant={i.status == 'Active' ? 'success' : "danger"} id="dropdown-basic">
                                            {i.status}
                                        </Dropdown.Toggle>



                                    </td>
                                    <td style={{ textAlign: 'center' }}>
                                        <img className='' style={{ height: '60px', width:'60px', borderRadius:'40px' }} src={`${BASE_URL}/uploads/${i.profile}`} alt="" />
                                    </td>
                                    <td>   <Dropdown >
                                        <Dropdown.Toggle className='p-1 text-center' style={{ height: '-1px', width: '100px' }} variant="danger" id="dropdown-basic">
                                            <i class="fa-solid fa-ellipsis-vertical fa-fade"></i>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item >
                                                <Link to={`view/${i._id}`}><i class="fa-solid fa-user fa-fade"></i>View</Link>
                                            </Dropdown.Item>
                                            <Dropdown.Item >
                                                <Link to={`edit/${i._id}`}><i class="fa-solid fa-user-pen fa-flip"></i>Edit</Link>
                                            </Dropdown.Item>
                                            <Dropdown.Item
                                             onClick={()=>removeEmp(i._id)}><i class="fa-solid fa-trash fa-bounce"></i>Delete</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown></td>
                                </tr>)
                            ) : <p className='text-danger text-center'>No Employees are present</p>
                        }

                    </tbody>
                </Table>






            </div>
        </div>
    )
}

export default TableC