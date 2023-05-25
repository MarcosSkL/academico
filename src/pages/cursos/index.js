import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row, Table } from 'react-bootstrap'
import Pagina from '../../components/Pagina'
import { AiOutlineDelete, AiFillEdit } from 'react-icons/ai'

const index = () => {

    const [cursos, setCursos] = useState([])

    useEffect(() => {
        setCursos(JSON.parse(window.localStorage.getItem('cursos')) || [])
    }, [])

    function getAll() {
        return JSON.parse(window.localStorage.getItem("cursos") || []);
    }

    function excluir(id) {

        if (confirm("Dseja realmente exluir o registro?")) {

            const cursos = getAll();
            cursos.splice(id, 1);
            window.localStorage.setItem(`cursos`, JSON.stringify(cursos));
            setCursos(cursos);
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
                            {cursos.map((item, i) => (
                                <tr>
                                    <td className='flex gap-3'>
                                        <Link href={'/cursos/' + i}>
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
