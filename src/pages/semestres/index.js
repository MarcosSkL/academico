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
                    <div className="relative overflow-x-scroll shadow-md rounded-tr-[90px] rounded-bl-[100px] pt-2 pb-4">
                        <table className="w-full text-md text-left text-blue-100 dark:text-blue-100">
                            <thead className="text-xs text-white uppercase bg-blue-500 border-b border-blue-400 dark:text-white">
                                <tr>
                                    <th scope="col" className="px-2 py-3">
                                        #
                                    </th>
                                    <th scope="col" className="px-2 py-3">
                                        Semestre
                                    </th>
                                    <th scope="col" className="px-2 py-3">
                                        Data de Inicio
                                    </th>
                                    <th scope="col" className="px-2 py-3">
                                        Data de Fim
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {semestres.map((item, id) => (

                                    <tr key={item.id} className="bg-blue-400 border-b border-blue-400 hover:bg-blue-500">
                                        <td scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100 flex">
                                            <Link href={'/semestres/' + item.id}>
                                                <AiFillEdit className='ms-2 text-dark' />
                                            </Link>
                                            <AiOutlineDelete
                                                onClick={() => excluir(item.id)}
                                                type='submit'
                                                className='text-danger' />
                                        </td>

                                        <td className="px-2 py-2">
                                            {item.semestre}
                                        </td>
                                        <td className="px-2 py-2">
                                            {item.dataInicio}
                                        </td>
                                        <td className="px-2 py-2">
                                            {item.dataFim}
                                        </td>

                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>

                </Col>

            </Row>
        </Pagina>
    )
}

export default index
