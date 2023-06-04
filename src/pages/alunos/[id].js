import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row, Table, Form } from 'react-bootstrap'
import Pagina from '../../components/Pagina'
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import axios from 'axios';

const FormAlterAlunos = () => {

    const { push, query } = useRouter()
    const { register, handleSubmit, setValue } = useForm()

    useEffect(() => {

        if (query.id) {

            axios.get('/api/alunos/' + query.id).then(resultado => {
                const aluno = resultado.data

                for (let atributo in aluno) {
                    setValue(atributo, aluno[atributo])
                }
            })
        }

    }, [query.id])

    function salvar(dados) {
        axios.put('/api/alunos/' + dados.id, dados)
        push('/alunos')
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
                        <Form.Group className="mb-3" controlId="Cpf">
                            <Form.Label>CPF</Form.Label>
                            <Form.Control type="number" placeholder="CPF" {...register('cpf')} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Matricula">
                            <Form.Label>Matricula</Form.Label>
                            <Form.Control type="number" placeholder="Matricula" {...register('matricula')} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Email">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="text" placeholder="E-mail" {...register('email')} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Telefone">
                            <Form.Label>Telefone</Form.Label>
                            <Form.Control type="text" placeholder="Telefone" {...register('telefone')} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Cep">
                            <Form.Label>CEP</Form.Label>
                            <Form.Control type="number" placeholder="CEP" {...register('cep')} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Logradouro">
                            <Form.Label>Logradouro</Form.Label>
                            <Form.Control type="text" placeholder="Logradouro" {...register('logradouro')} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Complemento">
                            <Form.Label>Complemento</Form.Label>
                            <Form.Control type="text" placeholder="Complemento" {...register('complemento')} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Numero">
                            <Form.Label>Numero</Form.Label>
                            <Form.Control type="number" placeholder="Numero" {...register('numero')} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Bairro">
                            <Form.Label>Bairro</Form.Label>
                            <Form.Control type="text" placeholder="Bairro" {...register('bairro')} />
                        </Form.Group>



                        <div className='flex gap-3 justify-center pb-5'>
                            <Button variant="primary" onClick={handleSubmit(salvar)}>
                                Salvar
                            </Button>

                            <Link href={'/alunos'} className='btn btn-primary gap-2 text-white'>Voltar</Link>
                        </div>

                    </Form>

                </Col>

            </Row>
        </Pagina>
    )
}

export default FormAlterAlunos
