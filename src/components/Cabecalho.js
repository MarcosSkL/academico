import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Cabecalho = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/"><strong className='text-2xl box-decoration-slice bg-gradient-to-r from-indigo-600 to-cyan-500 text-white px-3'>Academico</strong></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/cursos">Cursos</Nav.Link>
            <Nav.Link href="/disciplinas">Disciplinas</Nav.Link>
            <Nav.Link href="/alunos">Alunos</Nav.Link>
            <Nav.Link href="/professores">Professores</Nav.Link>
            <Nav.Link href="/salas">Salas</Nav.Link>
            <Nav.Link href="/semestres">Semestres</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Cabecalho