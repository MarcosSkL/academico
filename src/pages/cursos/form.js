import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row, Table, Form } from 'react-bootstrap'
import Pagina from '../../components/Pagina'
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import { AiOutlineCheck, AiOutlineArrowLeft } from 'react-icons/ai'
import axios from 'axios';
import cursoValidator from '@/validators/cursoValidator';


const FormAlterCursos = () => {

    const { push } = useRouter()

    const { register, handleSubmit, formState: { errors } } = useForm();

    function salvar(dados) {

        axios.post('/api/cursos', dados)
        push('/cursos')
    }

    return (

        <Pagina titulo="Formulário">
            <Row className="px-1 mx-1">
                <Col>
                    <Form>
                        <Form.Group className="mb-3" controlId="Nome">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" placeholder="Nome" {...register('nome', cursoValidator.curso.nome)} />
                            {
                                errors.nome &&
                                <small className='text-red-700'>{errors.nome.message}</small>
                            }
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Duração">
                            <Form.Label>Duração</Form.Label>
                            <Form.Control type="text" placeholder="Duração" {...register('duracao', cursoValidator.curso.duracao)} />
                            {
                                errors.duracao &&
                                <small className='text-red-700'>{errors.duracao.message}</small>
                            }
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Modalidade">
                            <Form.Label>Modalidade</Form.Label>
                            <Form.Control type="text" placeholder="Modalidade" {...register('modalidade', cursoValidator.curso.modalidade)} />
                            {
                                errors.modalidade &&
                                <small className='text-red-700'>{errors.modalidade.message}</small>
                            }
                        </Form.Group>

                        <div className='flex gap-3 justify-center'>
                            <Button variant="primary" onClick={handleSubmit(salvar)}>
                                <div className='flex gap-2'><AiOutlineCheck />
                                    Salvar
                                </div>
                            </Button>

                            <Link href={'/cursos'} className='btn btn-primary text-white'>
                                <div className='flex gap-2'>
                                    <AiOutlineArrowLeft />
                                    Voltar
                                </div>
                            </Link>
                        </div>

                    </Form>

                </Col>

            </Row>
        </Pagina>
    )
}

export default FormAlterCursos
