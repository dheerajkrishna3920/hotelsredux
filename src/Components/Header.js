import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div >
            <Navbar style={{ height: '70px' }} className="bg-body-tertiary">
                <Container>
                <div href="" className='fs-3 text-dark'>
                        Employee Desk   {' '}
                        <Link to=''>
                            <img
                                alt=""
                                src="https://i.postimg.cc/TY92nnsz/image.png"
                                width="50"
                                height="50"
                                className="d-inline-block align-top"
                            />
                        </Link>

                    </div>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header