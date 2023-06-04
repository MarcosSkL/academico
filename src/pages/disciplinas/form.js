import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row, Table, Form } from 'react-bootstrap'
import Pagina from '../../components/Pagina'
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import { AiOutlineCheck, AiOutlineArrowLeft } from 'react-icons/ai'
import axios from 'axios';

const Formulario = () => {

    const [cursos, setCursos] = useState([])

    useEffect(() => {
        getAll()
    }, [])

    function getAll() {

        axios.get('/api/cursos').then(resultado => {
            setCursos(resultado.data)

        })
    }

    const { push } = useRouter()

    const { register, handleSubmit } = useForm();

    function salvar(dados) {

        axios.post('/api/disciplinas', dados)
        push('/disciplinas')

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

                        <Form.Group className="mb-3" controlId="Semestre">
                            <Form.Label>Cursos</Form.Label>

                            <Form.Select type="text" {...register('cursos')} >

                                <option value="sem nome">Selecione o Curso</option>
                                {cursos.map((item) => (
                                    <option value={item.nome}>{item.nome}</option>
                                ))}

                            </Form.Select>
                        </Form.Group>


                        <div className='flex gap-3 justify-center'>
                            <Button variant="primary" onClick={handleSubmit(salvar)}>
                                <div className='flex gap-2'><AiOutlineCheck />
                                    Salvar
                                </div>
                            </Button>

                            <Link href={'/disciplinas'} className='btn btn-primary text-white'>
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
