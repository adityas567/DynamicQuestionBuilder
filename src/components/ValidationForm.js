import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import checkSchema from '../schemas/Validator';

import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';

function ValidationForm() {

  return (
    <div>
      <Formik initialValues={
        {
          questions: [{ question: '', options: ["","","",""], correctOption: '' }]
        }
      }
        validationSchema={checkSchema}
        onSubmit={(values) => { console.log(values) }}>
        {(formik) =>
        (
          <Form>
            <FieldArray name='questions' render={
              (arrayHelpers) => {
                return (
                  <div>
                    {formik.values.questions.map((question, index) =>
                    (
                      <div className='mt-2' key={index}>
                        <div>

                        </div>
                        <div className='card'>
                          <div className='card-body'>
                            <div className='form-group'>
                              <Container>
                                <Row>
                                  <Col md={8}>
                                    <label htmlFor={`questions.${index}.question`}>
                                      {`Question:${index + 1}`}
                                    </label>
                                    <Field type='text' className='form-control' name={`questions.${index}.question`} />
                                  </Col>
                                  <Col md={4} className='d-flex justify-content-end mt-3'>
                                    <Button className='btn btn-primary m-2' onClick={() => arrayHelpers.insert(formik.values.questions.length + 1, { question: '',options:["","","",""],correctOption:'' })}>+</Button>
                                    <Button className='btn btn-danger m-2' onClick={() => arrayHelpers.remove(index)}>-</Button>
                                  </Col>
                                  <ErrorMessage component='span' className='text-danger' name={`questions.${index}.question`} />
                                </Row>
                              </Container>
                              <Container>
                                <Row>
                                  <Col>
                                    <Row>
                                      <Col md={1} className='mt-1'>
                                        <Field type='radio' name={`questions[${index}].correctOption`} value='0' className='mt-4' />
                                      </Col>
                                      <Col md={11}>
                                        <Field type='text' className='form-control mt-3' name={`questions.${index}.options[0]`} />
                                        <ErrorMessage component='span' className='text-danger' name={`questions.${index}.options`} />
                                      </Col>
                                    </Row>
                                  </Col>
                                  <Col>
                                    <Row>
                                      <Col md={1} className='mt-1'>
                                        <Field type='radio' name={`questions[${index}].correctOption`} value='1' className='mt-4' />
                                      </Col>
                                      <Col md={11}>
                                        <Field type='text' className='form-control mt-3' name={`questions.${index}.options[1]`} />
                                        <ErrorMessage component='span' className='text-danger' name={`questions.${index}.options`} />
                                      </Col>
                                    </Row>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col>
                                    <Row>
                                      <Col md={1} className='mt-1'>
                                        <Field type='radio' name={`questions[${index}].correctOption`} value='2' className='mt-4' />
                                      </Col>
                                      <Col md={11}>
                                        <Field type='text' className='form-control mt-3' name={`questions.${index}.options[2]`} />
                                      </Col>
                                    </Row>
                                  </Col>
                                  <Col>
                                    <Row>
                                      <Col md={1} className='mt-1'>
                                        <Field type='radio' name={`questions[${index}].correctOption`} value='3' className='mt-4' />
                                      </Col>
                                      <Col md={11}>
                                        <Field type='text' className='form-control mt-3' name={`questions.${index}.options[3]`} />
                                      </Col>
                                    </Row>

                                  </Col>
                                  <ErrorMessage component='span' className='text-danger' name={`questions.${index}.correctOption`} />
                                </Row>
                              </Container>

                            </div>
                          </div>
                        </div>

                      </div>
                    ))}

                  </div>
                )
              }
            } />
            <div className='d-flex justify-content-center'>
              <Button type='submit' className='btn btn-primary mt-2'>SUBMIT</Button>
            </div>
          </Form>
        )
        }
      </Formik>
    </div>
  )
}

export default ValidationForm