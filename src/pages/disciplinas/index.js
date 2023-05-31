import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row, Table } from 'react-bootstrap'
import Pagina from '../../components/Pagina'
import { AiOutlineDelete, AiFillEdit } from 'react-icons/ai'

const index = () => {

    const [disciplinas, setDisciplinas] = useState([])

    useEffect(() => {
        axios.get('/api/disciplinas').then(resultado =>
            console.log(resultado.data)
        )
    }, [])


    return (

        <Pagina titulo="Disciplinas">
            <Row className="px-1 mx-1">
                <Col>
                    <Link href={'disciplinas/form/'} className='btn btn-primary text-white'>Novo</Link>
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
                            {disciplinas.map((item, i) => (
                                <tr>
                                    <td className='flex gap-3'>
                                        <Link href={'/disciplinas/' + i}>
                                            <AiFillEdit className='ms-2 text-primary' />
                                        </Link>
                                        <AiOutlineDelete
                                            onClick={() => excluir(i)}
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
