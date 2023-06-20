import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row, Table, Form } from 'react-bootstrap'
import Pagina from '../../components/Pagina'
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import { AiOutlineCheck, AiOutlineArrowLeft } from 'react-icons/ai'
import axios from 'axios';
import { mask, unmask } from 'remask';
import cursoValidator from '@/validators/cursoValidator';

const Formulario = () => {

    const { push } = useRouter()

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    function salvar(dados) {

        axios.post('/api/professores', dados)
        push('/professores')

    }

    const MaskName = (event) => {

        const nome = event.target.name
        const valor = event.target.value
        const mascara = event.target.getAttribute("mask").split(", ")
        
        console.log(mascara)

        
        setValue(nome, mask(unmask(valor), mascara))
    }

    return (

        <Pagina titulo="Formulário">
            <Row className="px-1 mx-1">
                <Col>
                    <Form>
                        <Form.Group className="mb-3" controlId="Nome">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" placeholder="Nome" {...register('nome', cursoValidator.professor.nome)} />
                            {
                                errors.nome &&
                                <small className='text-red-700'>{errors.nome.message}</small>
                            }
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Cpf">
                            <Form.Label>CPF</Form.Label>
                            <Form.Control type="text" placeholder="CPF" mask="999.999.999-99" {...register('cpf', cursoValidator.professor.cpf)} onChange={MaskName} />
                            {
                                errors.cpf &&
                                <small className='text-red-700'>{errors.cpf.message}</small>
                            }
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Matricula">
                            <Form.Label>Matricula</Form.Label>
                            <Form.Control type="number" placeholder="Matricula" {...register('matricula', cursoValidator.professor.matricula)} />
                            {
                                errors.matricula &&
                                <small className='text-red-700'>{errors.matricula.message}</small>
                            }
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Salario">
                            <Form.Label>Salario</Form.Label>
                            <Form.Control type="text" placeholder="Salario" mask={["R$99.00, R$999.99, R$9.999.99, R$99.999.99, R$999.999.999"]} {...register('salario', cursoValidator.professor.salario)} onChange={MaskName} />
                            {
                                errors.salario &&
                                <small className='text-red-700'>{errors.salario.message}</small>
                            }
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Email">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" placeholder="E-mail" {...register('email', cursoValidator.professor.email)} />
                            {
                                errors.email &&
                                <small className='text-red-700'>{errors.email.message}</small>
                            }
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Telefone">
                            <Form.Label>number</Form.Label>
                            <Form.Control type="text" placeholder="Telefone" mask="(99) 9999-9999, (99) 99999-9999" {...register('telefone', cursoValidator.professor.telefone)} onChange={MaskName} />
                            {
                                errors.telefone &&
                                <small className='text-red-700'>{errors.telefone.message}</small>
                            }
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Cep">
                            <Form.Label>CEP</Form.Label>
                            <Form.Control type="text" placeholder="CEP" mask="99.999-999" {...register('cep', cursoValidator.professor.cep)} onChange={MaskName} />
                            {
                                errors.cep &&
                                <small className='text-red-700'>{errors.cep.message}</small>
                            }
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Logradouro">
                            <Form.Label>Logradouro</Form.Label>
                            <Form.Control type="text" placeholder="Logradouro" {...register('logradouro', cursoValidator.professor.logradouro)} />
                            {
                                errors.logradouro &&
                                <small className='text-red-700'>{errors.logradouro.message}</small>
                            }
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Complemento">
                            <Form.Label>Complemento</Form.Label>
                            <Form.Control type="text" placeholder="Complemento" {...register('complemento', cursoValidator.professor.complemento)} />
                            {
                                errors.complemento &&
                                <small className='text-red-700'>{errors.complemento.message}</small>
                            }
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Numero">
                            <Form.Label>Numero</Form.Label>
                            <Form.Control type="text" placeholder="Numero" {...register('numero', cursoValidator.professor.numero)} />
                            {
                                errors.numero &&
                                <small className='text-red-700'>{errors.numero.message}</small>
                            }
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Bairro">
                            <Form.Label>Bairro</Form.Label>
                            <Form.Control type="text" placeholder="Bairro" {...register('bairro', cursoValidator.professor.bairro)} />
                            {
                                errors.bairro &&
                                <small className='text-red-700'>{errors.bairro.message}</small>
                            }
                        </Form.Group>


                        <div className='flex gap-3 justify-center pb-5'>
                            <Button variant="primary" onClick={handleSubmit(salvar)}>
                                <div className='flex gap-2'><AiOutlineCheck />
                                    Salvar
                                </div>
                            </Button>

                            <Link href={'/professores'} className='btn btn-primary text-white'>
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
