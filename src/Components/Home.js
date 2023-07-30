import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import TableC from './TableC';
import LoadingComponent from './LoadingComponent';
import { deleteContext, editContext, registerContext } from './Contextshare';
import Alert from 'react-bootstrap/Alert';
import { deleteEmployee, getEmployees } from '../service/allApi';




function Home() {


    // state to store all employees
    const [allEmployee, setAllemployee] = useState([])

    //create state to store searching data
    const [searchKey, setSearchKey] = useState("")

    //to get context/acessing of the context
    const { registerData, setRegisterData } = useContext(registerContext)

    //to get delete delete context
    const { deleteData, setDeleteData } = useContext(deleteContext)

    // to get edit context
    const {editData, setEditData}=useContext(editContext)

    // define function to call api
    const getEmployeesCall = async () => {
        const response = await getEmployees(searchKey)
        setAllemployee(response.data)
    }

    //function to delete employee
    const DeleteEmployee = async (id) => {
        const result = await deleteEmployee(id)
        if (result.status == 200) {
            setDeleteData(result.data)
            getEmployeesCall()
        }

    }


    const [showSpin, setSpin] = useState(true)
    useEffect(() => {

        getEmployeesCall()


        setTimeout(() => {
            setSpin(false)
        }, 1000)
    }, [searchKey])



    return (
        <div className=' p-5'>

            <div>

                {
                    registerData ? <Alert variant={'success'} onClose={() => setRegisterData("")} dismissible>
                        {registerData.fname} is registered successfully...
                    </Alert> : ""
                }

                {
                    deleteData ? <Alert variant={'danger'} onClose={() => setDeleteData("")} dismissible>
                        {deleteData.fname} is deleted...
                    </Alert> : ""
                }

{
                    editData ? <Alert variant={'success'} onClose={() => setEditData("")} dismissible>
                        {editData.fname} is updated...
                    </Alert> : ""
                }

                <form action="" className='ms-2 p-5 mt-5' >
                    <input onChange={e => setSearchKey(e.target.value)}
                        placeholder='Search Employee Here' style={{
                            height: '40px', width: '20%', border: 'red', borderRadius: '4px'
                        }} type="text" />
                    <Button className='text-center p-1 ms-2 mb-1' style={{ height: '35px' }}
                        variant="success">Search</Button>{' '}
                </form>
                <Link to={'add'}>
                    <Button className='' style={{ marginLeft: '1280px', marginTop: '-150px' }} variant="info">

                        <i class="fa-solid fa-user-plus fa-flip"></i>  Add</Button>
                </Link>


                {showSpin ?
                    <LoadingComponent></LoadingComponent>

                    :
                    <TableC displayData={allEmployee} removeEmp={DeleteEmployee}></TableC>

                }

            </div>
        </div>
    )
}

export default Home