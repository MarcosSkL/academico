import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row, Table, Form } from 'react-bootstrap'
import Pagina from '../../components/Pagina'
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import { AiOutlineCheck, AiOutlineArrowLeft } from 'react-icons/ai'
import axios from 'axios';

const Formulario = () => {

    const { push } = useRouter()

    const { register, handleSubmit } = useForm();

    function salvar(dados) {

        axios.post('/api/semestres', dados)
        push('/semestres')

    }

    return (

        <Pagina titulo="Formulário">
            <Row className="px-1 mx-1">
                <Col>
                <Form>
                        <Form.Group className="mb-3" controlId="Semestre">
                            <Form.Label>Semestre</Form.Label>

                            <Form.Select type="text" {...register('semestre')} >
                            <option value="sem nome">Selecione o Semestre</option>
                                <option value='1º Semestre'>1º Semestre</option>
                                <option value='2º Semestre'>2º Semestre</option>
                                <option value='3º Semestre'>3º Semestre</option>
                                <option value='4º Semestre'>4º Semestre</option>
                                <option value='5º Semestre'>5º Semestre</option>
                                <option value='6º Semestre'>6º Semestre</option>
                                <option value='7º Semestre'>7º Semestre</option>
                                <option value='8º Semestre'>8º Semestre</option>
                                <option value='9º Semestre'>9º Semestre</option>
                                <option value='10º Semestre'>10º Semestre</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="DataInicio">
                            <Form.Label>Data de Inicio</Form.Label>
                            <Form.Control type="date" placeholder="DD/MM/AAAA" {...register('dataInicio')} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="DataFim">
                            <Form.Label>Data de Fim</Form.Label>
                            <Form.Control type="date" placeholder="DD/MM/AAAA" {...register('dataFim')} />
                        </Form.Group>


                        <div className='flex gap-3 justify-center'>
                            <Button variant="primary" onClick={handleSubmit(salvar)}>
                                <div className='flex gap-2'><AiOutlineCheck />
                                    Salvar
                                </div>
                            </Button>

                            <Link href={'/semestres'} className='btn btn-primary text-white'>
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
