import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row, Table, Form } from 'react-bootstrap'
import Pagina from '../../components/Pagina'
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import axios from 'axios';

const FormAlterDisciplinas = () => {

    const [cursos, setCursos] = useState([])

    useEffect(() => {
        getAll()
    }, [])

    function getAll() {

        axios.get('/api/cursos').then(resultado => {
            setCursos(resultado.data)

        })
    }

    const { push, query } = useRouter()
    const { register, handleSubmit, setValue } = useForm()

    useEffect(() => {

        if (query.id) {

            axios.get('/api/disciplinas/' + query.id).then(resultado => {
                const disciplina = resultado.data

                for (let atributo in disciplina) {
                    setValue(atributo, disciplina[atributo])
                }
            })
        }

    }, [query.id])

    function salvar(dados) {
        axios.put('/api/disciplinas/' + dados.id, dados)
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
                                Salvar
                            </Button>

                            <Link href={'/disciplinas'} className='btn btn-primary gap-2 text-white'>Voltar</Link>
                        </div>

                    </Form>

                </Col>

            </Row>
        </Pagina>
    )
}

export default FormAlterDisciplinas
