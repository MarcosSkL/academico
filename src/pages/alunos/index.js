import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row, Table } from 'react-bootstrap'
import Pagina from '../../components/Pagina'
import { AiOutlineDelete, AiFillEdit } from 'react-icons/ai'
import axios from 'axios'

const index = () => {

    const [alunos, setAlunos] = useState([])

    useEffect(() => {
        getAll()
    }, [])

    function getAll() {

        axios.get('/api/alunos').then(resultado => {
            setAlunos(resultado.data)

        })
    }


    function excluir(id) {
        if (confirm("Deseja excluir o registro?")) {
            axios.delete('/api/alunos/' + id)
            getAll()
        }
    }

    return (

        <Pagina titulo="Alunos">
            <Row className="px-1 mx-1">
                <Col>
                    <Link href={'alunos/form/'} className='btn btn-primary text-white'>Novo</Link>
                    <Table responsive bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nome</th>
                                <th>CPF</th>
                                <th>Matricula</th>                        
                                <th>Email</th>
                                <th>Telefone</th>
                                <th>CEP</th>
                                <th>Logradouro</th>
                                <th>Complemento</th>
                                <th>Numero</th>
                                <th>Bairro</th>


                            </tr>
                        </thead>
                        <tbody>
                            {alunos.map((item, id) => (
                                <tr key={item.id}>
                                    <td className='flex gap-3'>
                                        <Link href={'/alunos/' + item.id}>
                                            <AiFillEdit className='ms-2 text-primary' />
                                        </Link>
                                        <AiOutlineDelete
                                            onClick={() => excluir(item.id)}
                                            type='submit'
                                            className='text-danger' />
                                    </td>
                                    <td>{item.nome}</td>
                                    <td>{item.cpf}</td>
                                    <td>{item.matricula}</td>                                    
                                    <td>{item.email}</td>
                                    <td>{item.telefone}</td>
                                    <td>{item.cep}</td>
                                    <td>{item.logradouro}</td>
                                    <td>{item.complemento}</td>
                                    <td>{item.numero}</td>
                                    <td>{item.bairro}</td>

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
