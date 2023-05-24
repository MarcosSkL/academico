import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row, Table, Form } from 'react-bootstrap'
import Pagina from '../../components/Pagina'
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';

const Formulario = () => {

    const { push, query } = useRouter()

    const { register, handleSubmit, setValue } = useForm();

    useEffect(() => {

        if (query.id) {
            const cursos = JSON.parse(window.localStorage.getItem('cursos'))
            const curso = cursos[query.id]

            setValue('nome', curso.nome)
            setValue('duracao', curso.duracao)
            setValue('modalidade', curso.modalidade)
        }

    }, [query.id])

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

                        <Button variant="primary" onClick={handleSubmit(salvar)}>
                            Salvar
                        </Button>

                        <Link href={'/cursos'} className='btn btn-primary gap-2 text-white'>Voltar</Link>

                    </Form>

                </Col>

            </Row>
        </Pagina>
    )
}

export default Formulario
