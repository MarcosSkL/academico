import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row, Table, Form } from 'react-bootstrap'
import Pagina from '../../components/Pagina'
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import { AiOutlineCheck, AiOutlineArrowLeft } from 'react-icons/ai'

const Formulario = () => {

    const { push } = useRouter()

    const { register, handleSubmit } = useForm();

    function salvar(dados) {
        const cursos = JSON.parse(window.localStorage.getItem('cursos')) || []
        cursos.push(dados)
        window.localStorage.setItem('cursos', JSON.stringify(cursos))
        push('/cursos')

    }

    return (

        <Pagina titulo="Formulário">
            <Row className="px-1 mx-1">
                <Col>
                    <Form>
                        <Form.Group className="mb-3" controlId="Nome">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" placeholder="Nome" {...register('nome')} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Duração">
                            <Form.Label>Duração</Form.Label>
                            <Form.Control type="text" placeholder="Duração" {...register('duracao')} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Modalidade">
                            <Form.Label>Modalidade</Form.Label>
                            <Form.Control type="text" placeholder="Modalidade" {...register('modalidade')} />
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

export default Formulario
