import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row, Table, Form } from 'react-bootstrap'
import Pagina from '../../components/Pagina'
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import axios from 'axios';

const FormSemestres = () => {

    const { push, query } = useRouter()
    const { register, handleSubmit, setValue } = useForm()

    useEffect(() => {

        if (query.id) {

            axios.get('/api/semestres/' + query.id).then(resultado => {
                const semestre = resultado.data

                for (let atributo in semestre) {
                    setValue(atributo, semestre[atributo])
                }
            })
        }

    }, [query.id])

    function salvar(dados) {
        axios.put('/api/semestres/' + dados.id, dados)
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
                                Salvar
                            </Button>

                            <Link href={'/semestres'} className='btn btn-primary gap-2 text-white'>Voltar</Link>
                        </div>

                    </Form>

                </Col>

            </Row>
        </Pagina>
    )
}

export default FormSemestres
