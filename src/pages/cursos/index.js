import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row, Table } from 'react-bootstrap'
import Pagina from '../../components/Pagina'
import { AiOutlineDelete, AiFillEdit } from 'react-icons/ai'
import axios from 'axios'

const index = () => {

    const [cursos, setCursos] = useState([])

    useEffect(() => {
        getAll()
    }, [])

    function getAll() {

        axios.get('/api/cursos').then(resultado => {
            setCursos(resultado.data)

        })
    }


    function excluir(id) {
        if (confirm("Deseja excluir o registro?")) {
            axios.delete('/api/cursos/' + id)
            getAll()
        }
    }
    return (

        <Pagina titulo="Cursos">
            <Row className="px-1 mx-1">
                <Col>
                    <Link href={'cursos/form/'} className='btn btn-primary text-white'>Novo</Link>
                    <Table bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nome</th>
                                <th>Duracao</th>
                                <th>Modalidade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cursos.map((item, id) => (
                                <tr key={item.id}>
                                    <td className='flex gap-3'>
                                        <Link href={'/cursos/' + item.id}>
                                            <AiFillEdit className='ms-2 text-primary' />
                                        </Link>
                                        <AiOutlineDelete
                                            onClick={() => excluir(item.id)}
                                            type='submit'
                                            className='text-danger' />
                                    </td>
                                    <td>{item.nome}</td>
                                    <td>{item.duracao}</td>
                                    <td>{item.modalidade}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>

                </Col>

            </Row>
        </Pagina>
    )
}

export default index
