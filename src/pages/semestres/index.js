import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row, Table } from 'react-bootstrap'
import Pagina from '../../components/Pagina'
import { AiOutlineDelete, AiFillEdit } from 'react-icons/ai'
import axios from 'axios'

const index = () => {

    const [semestres, setSemestres] = useState([])

    useEffect(() => {
        getAll()
    }, [])

    function getAll() {

        axios.get('/api/semestres').then(resultado => {
            setSemestres(resultado.data)

        })
    }


    function excluir(id) {
        if (confirm("Deseja excluir o registro?")) {
            axios.delete('/api/semestres/' + id)
            getAll()
        }
    }

    return (

        <Pagina titulo="Semestres">
            <Row className="px-1 mx-1">
                <Col>
                    <Link href={'semestres/form/'} className='btn btn-primary text-white'>Novo</Link>
                    <Table bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Semestre</th>
                                <th>Data de Inicio</th>
                                <th>Data de Fim</th>
                            


                            </tr>
                        </thead>
                        <tbody>
                            {semestres.map((item, id) => (
                                <tr key={item.id}>
                                    <td className='flex gap-3'>
                                        <Link href={'/semestres/' + item.id}>
                                            <AiFillEdit className='ms-2 text-primary' />
                                        </Link>
                                        <AiOutlineDelete
                                            onClick={() => excluir(item.id)}
                                            type='submit'
                                            className='text-danger' />
                                    </td>
                                    <td>{item.semestre}</td>
                                    <td>{item.dataInicio}</td>
                                    <td>{item.dataFim}</td>
                            

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
