import React, { useRef, useState } from 'react'
import { AppBar, Box, Button, Dialog, IconButton, Toolbar, Typography } from '@material-ui/core'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch } from 'react-redux';
import { Transition } from '../Utils/Transirtion';

interface IProps {
    handleAddPostClose: () => void,
    handleAddPostOpen: () => void,
    addPostOpen: boolean
}
export const AddPostDialog: React.FC<IProps> = ({ handleAddPostClose, handleAddPostOpen, addPostOpen }) => {
    const dispatch = useDispatch()
    const AddPostSchema = Yup.object().shape({
        title: Yup.string()
            .min(2, 'Too Short!')
            .required('Required'),
        body: Yup.string()
            .min(10, 'Too Short!')
            .required('Required'),
    });

    return (
        <div>
            <Dialog fullScreen open={addPostOpen} onClose={handleAddPostClose} TransitionComponent={Transition}>
                <AppBar className="bg-purple">
                    <Toolbar className="d-flex justify-content-between  ">
                        <Typography variant="h4" >
                            Add Post
                        </Typography>
                        <IconButton edge="start" color="inherit" onClick={handleAddPostClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>

                    </Toolbar>
                </AppBar>

                <div className="container  blogsForm mt-5">
                    <div className="title">
                        <h3>
                            Add Blog
                        </h3>
                    </div>
                    <div className="w-100 container-fluid">
                        <Formik
                            initialValues={{
                                title: '',
                                body: '',
                                comments: []
                            }}
                            validationSchema={AddPostSchema}
                            onSubmit={(values) => {
                                console.log(values)
                            }}
                        >
                            {({ errors, touched }) => (
                                <div className="row">
                                    <Form style={{ textAlign: "start" }}
                                        className=" m-auto row">
                                        <div className="col-lg-6 mt-3">
                                            <Field
                                                placeholder="title*"
                                                name="title"
                                                className="form-control" />
                                            {errors.title && touched.title ? (
                                                <div className="text-danger">{errors.title}</div>
                                            ) : null}
                                        </div>
                                        <div className="col-lg-6 mt-3">
                                            <Field component="textarea" placeholder="Write a  body..." style={{ height: "30vh" }} name="body" id="body" className="w-100 form-control" />
                                            {errors.body && touched.body ? (<div className="text-danger">{errors.body}</div>) : null}
                                        </div>
                                        <div className="submitBlogBtns col-lg-6 m-auto "  >
                                            <button type="submit" className="w-100 bg-orange mt-3 btn btn-primary "> Submit </button>
                                        </div>
                                    </Form>
                                </div>
                            )}
                        </Formik>
                    </div>
                </div>



            </Dialog>
        </div >
    );
}

