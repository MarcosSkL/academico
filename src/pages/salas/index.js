import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row, Table } from 'react-bootstrap'
import Pagina from '../../components/Pagina'
import { AiOutlineDelete, AiFillEdit } from 'react-icons/ai'
import axios from 'axios'

const index = () => {

    const [salas, setSalas] = useState([])

    useEffect(() => {
        getAll()
    }, [])

    function getAll() {

        axios.get('/api/salas').then(resultado => {
            setSalas(resultado.data)

        })
    }


    function excluir(id) {
        if (confirm("Deseja excluir o registro?")) {
            axios.delete('/api/salas/' + id)
            getAll()
        }
    }

    return (

        <Pagina titulo="Salas">
            <Row className="px-1 mx-1">
                <Col>
                    <Link href={'salas/form/'} className='btn btn-primary text-white'>Novo</Link>
                    <Table bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nome</th>
                                <th>Capacidade</th>
                                <th>Tipo</th>
                            


                            </tr>
                        </thead>
                        <tbody>
                            {salas.map((item, id) => (
                                <tr key={item.id}>
                                    <td className='flex gap-3'>
                                        <Link href={'/salas/' + item.id}>
                                            <AiFillEdit className='ms-2 text-primary' />
                                        </Link>
                                        <AiOutlineDelete
                                            onClick={() => excluir(item.id)}
                                            type='submit'
                                            className='text-danger' />
                                    </td>
                                    <td>{item.nome}</td>
                                    <td>{item.capacidade}</td>
                                    <td>{item.tipo}</td>
                            

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
