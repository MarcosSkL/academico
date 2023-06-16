import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row, Table, Form } from 'react-bootstrap'
import Pagina from '../../components/Pagina'
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import axios from 'axios';
import { mask, unmask } from 'remask';
import cursoValidator from '@/validators/cursoValidator';
import { AiOutlineArrowLeft, AiOutlineCheck } from 'react-icons/ai';

const FormAlterCursos = () => {

    const { push, query } = useRouter();
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    useEffect(() => {

        if (query.id) {

            axios.get('/api/cursos/' + query.id).then(resultado => {
                const curso = resultado.data

                for (let atributo in curso) {
                    setValue(atributo, curso[atributo])
                }
            })
        }

    }, [query.id])

    function salvar(dados) {
        axios.put('/api/cursos/' + dados.id, dados)
        push('/cursos')
    }

    const MaskName = (event) => {

        const nome = event.target.name
        const valor = event.target.value
        const mascara = event.target.getAttribute("mask")
        
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
                            <Form.Control type="text" placeholder="Nome" {...register('nome', cursoValidator.curso.nome)} />
                            {
                                errors.nome &&
                                <small className='text-red-700'>{errors.nome.message}</small>
                            }
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Duração">
                            <Form.Label>Duração</Form.Label>
                            <Form.Control type="text" placeholder="Duração" mask="99" {...register('duracao', cursoValidator.curso.duracao)} onChange={MaskName}/>
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
