import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';

function ValidationForm() {

  return (
    <div>
      <Formik initialValues={{
        questions: [{ question: '',options:[], correctOption:'' }]
      }}
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
                                    <Button className='btn btn-primary m-2' onClick={() => arrayHelpers.insert(formik.values.questions.length + 1, { question: '' })}>+</Button>
                                    <Button className='btn btn-danger m-2' onClick={() => arrayHelpers.remove(index)}>-</Button>
                                  </Col>
                                </Row>
                              </Container>
                              <Container>
                                <Row>
                                  <Col>
                                    <Row>
                                      <Col md={1} className='mt-1'>
                                      <Field type='radio' name={`questions[${index}].correctOption`}  value='1' className='mt-4' />
                                      </Col>
                                      <Col md={11}>
                                        <Field type='text' className='form-control mt-3' name={`questions.${index}.options.${index}`} />
                                      </Col>
                                    </Row>
                                  </Col>
                                  <Col>
                                    <Row>
                                      <Col md={1} className='mt-1'>
                                      <Field type='radio' name={`questions[${index}].correctOption`} value='2' className='mt-4' />
                                      </Col>
                                      <Col md={11}>
                                        <Field type='text' className='form-control mt-3' name={`questions.${index}.options.${index+1}`} />
                                      </Col>
                                    </Row>
                                  </Col>
                                </Row>
                                <Row>
                                <Col>
                                    <Row>
                                      <Col md={1} className='mt-1'>
                                        <Field type='radio' name={`questions[${index}].correctOption`}  value='3' className='mt-4' />
                                      </Col>
                                      <Col md={11}>
                                        <Field type='text' className='form-control mt-3' name={`questions.${index}.options.${index+2}`} />
                                      </Col>
                                    </Row>
                                  </Col>
                                  <Col>
                                    <Row>
                                      <Col md={1} className='mt-1'>
                                      <Field type='radio' name={`questions[${index}].correctOption`}  value='4'  className='mt-4' />
                                      </Col>
                                      <Col md={11}>
                                        <Field type='text' className='form-control mt-3' name={`questions.${index}.options.${index+3}`} />
                                      </Col>
                                    </Row>
                                  </Col>
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