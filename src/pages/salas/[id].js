import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row, Table, Form } from 'react-bootstrap'
import Pagina from '../../components/Pagina'
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import axios from 'axios';

const FormAlterSalas = () => {

    const { push, query } = useRouter()
    const { register, handleSubmit, setValue } = useForm()

    useEffect(() => {

        if (query.id) {

            axios.get('/api/salas/' + query.id).then(resultado => {
                const sala = resultado.data

                for (let atributo in sala) {
                    setValue(atributo, sala[atributo])
                }
            })
        }

    }, [query.id])

    function salvar(dados) {
        axios.put('/api/salas/' + dados.id, dados)
        push('/salas')
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
                        <Form.Group className="mb-3" controlId="Capacidade">
                            <Form.Label>Capacidade</Form.Label>
                            <Form.Control type="text" placeholder="Capacidade" {...register('capacidade')} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Tipo">
                            <Form.Label>Tipo</Form.Label>
                            <Form.Control type="text" placeholder="Tipo" {...register('tipo')} />
                        </Form.Group>


                        <div className='flex gap-3 justify-center'>
                            <Button variant="primary" onClick={handleSubmit(salvar)}>
                                Salvar
                            </Button>

                            <Link href={'/professores'} className='btn btn-primary gap-2 text-white'>Voltar</Link>
                        </div>

                    </Form>

                </Col>

            </Row>
        </Pagina>
    )
}

export default FormAlterSalas
