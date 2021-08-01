import React, { useState } from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CovidLogo from '../../assets/img/CovidLogo.png'
import './navbar.scss'
import { Box, Button, Typography } from '@material-ui/core'
import { AddPostDialog } from '../Posts/AddPostDialog'

export const NavBar = () => {
    const [addPostOpen, setAddPostOpen] = useState(false);

    const handleAddPostOpen = () => {
        setAddPostOpen(true);
    };
    const handleAddPostClose = () => {
        setAddPostOpen(false);
    };
    return (
        <>
            <AddPostDialog addPostOpen={addPostOpen} handleAddPostClose={handleAddPostClose} handleAddPostOpen={handleAddPostOpen}></AddPostDialog>

            <Navbar bg="light" expand="lg" >
                <Box id="logo" className="col-lg-4 ">
                    <Navbar.Brand  >
                        <Link to="/" className="text-decoration-none text-orange">
                            <Typography variant="h5"  >  Posts Page</Typography>
                        </Link>
                    </Navbar.Brand>
                </Box>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <div className="row w-100 btnAndLinks">
                        <div className="col-lg-7  w-100 navLinkss  row justify-content-center">
                            <ul className="d-flex col-lg-6 navLinks list-unstyled justify-content-between">
                                <li>
                                    <Link to="/posts">Posts</Link>
                                </li>
                                <li>
                                    <Button className="mt-3" onClick={handleAddPostOpen}>Add Post</Button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Navbar.Collapse>
            </Navbar>

        </>
    )
}
