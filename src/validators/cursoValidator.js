const cursoValidator = {
    curso: {
        nome: {
            required: 'O Campo é Obrigatório',
            minLength: {
                value: 3,
                message: "Quantidade minima de caracteres: 3"
            },
            maxLength: {
                value: 30,
                message: "Quantidade maxima de caracteres: 30"
            },
        },
        duracao: {
            required: 'O Campo é Obrigatório',
            minLength: {
                value: 1,
                message: "Quantidade minima de caracteres: 1"
            },
            maxLength: {
                value: 2,
                message: "Quantidade maxima de caracteres: 2"
            },
        },
        modalidade: {
            required: 'O Campo é Obrigatório',
            minLength: {
                value: 5,
                message: "Quantidade minima de caracteres: 5"
            },
            maxLength: {
                value: 25,
                message: "Quantidade maxima de caracteres: 25"
            },
        }

    },
    disciplina: {
        nome: {
            required: 'O Campo é Obrigatório',
            minLength: {
                value: 5,
                message: "Quantidade minima de caracteres: 5"
            },
            maxLength: {
                value: 30,
                message: "Quantidade maxima de caracteres: 30"
            },
        },
        curso: {
            required: 'O Campo é Obrigatório',
      
        },
    },
    professor: {
        nome: {
            required: 'O Campo é Obrigatório',
            minLength: {
                value: 10,
                message: "Quantidade minima de caracteres: 10"
            },
            maxLength: {
                value: 50,
                message: "Quantidade maxima de caracteres: 50"
            },
        },
        cpf: {
            required: 'O Campo é Obrigatório',
            minLength: {
                value: 11,
                message: "Quantidade minima de caracteres: 14"
            },
            
        },
        matricula: {
            required: 'O Campo é Obrigatório',
            minLength: {
                value: 6,
                message: "Quantidade minima de caracteres: 6"
            },
            maxLength: {
                value: 15,
                message: "Quantidade maxima de caracteres: 15"
            },
        },
        salario: {
            required: 'O Campo é Obrigatório',
            minLength: {
                value: 5,
                message: "Quantidade minima de caracteres: 5"
            },
            maxLength: {
                value: 25,
                message: "Quantidade maxima de caracteres: 25"
            },
        },
        email: {
            required: 'O Campo é Obrigatório',
            minLength: {
                value: 10,
                message: "Quantidade minima de caracteres: 10"
            },
            maxLength: {
                value: 50,
                message: "Quantidade maxima de caracteres: 50"
            },
        },
        logradouro: {
            
            minLength: {
                value: 2,
                message: "Quantidade minima de caracteres: 2"
            },
            maxLength: {
                value: 15,
                message: "Quantidade maxima de caracteres: 15"
            },
        },
        complemento: {
            
            minLength: {
                value: 5,
                message: "Quantidade minima de caracteres: 5"
            },
            maxLength: {
                value: 20,
                message: "Quantidade maxima de caracteres: 20"
            },
        },
        numero: {
            required: 'O Campo é Obrigatório',
            minLength: {
                value: 2,
                message: "Quantidade minima de caracteres: 2"
            },
            maxLength: {
                value: 5,
                message: "Quantidade maxima de caracteres: 5"
            },
        },
        bairro: {
            required: 'O Campo é Obrigatório',
            minLength: {
                value: 2,
                message: "Quantidade minima de caracteres: 2"
            },
            maxLength: {
                value: 25,
                message: "Quantidade maxima de caracteres: 25"
            },
        },

    },
    aluno: {
        nome: {
            required: 'O Campo é Obrigatório',
            minLength: {
                value: 10,
                message: "Quantidade minima de caracteres: 10"
            },
            maxLength: {
                value: 50,
                message: "Quantidade maxima de caracteres: 50"
            },
        },
        cpf: {
            required: 'O Campo é Obrigatório',
            minLength: {
                value: 11,
                message: "Quantidade minima de caracteres: 14"
            },
            
        },
        matricula: {
            required: 'O Campo é Obrigatório',
            minLength: {
                value: 6,
                message: "Quantidade minima de caracteres: 6"
            },
            maxLength: {
                value: 15,
                message: "Quantidade maxima de caracteres: 15"
            },
        },
        email: {
            required: 'O Campo é Obrigatório',
            minLength: {
                value: 10,
                message: "Quantidade minima de caracteres: 10"
            },
            maxLength: {
                value: 50,
                message: "Quantidade maxima de caracteres: 50"
            },
        },
        logradouro: {
            
            minLength: {
                value: 2,
                message: "Quantidade minima de caracteres: 2"
            },
            maxLength: {
                value: 15,
                message: "Quantidade maxima de caracteres: 15"
            },
        },
        complemento: {
            
            minLength: {
                value: 5,
                message: "Quantidade minima de caracteres: 5"
            },
            maxLength: {
                value: 20,
                message: "Quantidade maxima de caracteres: 20"
            },
        },
        numero: {
            required: 'O Campo é Obrigatório',
            minLength: {
                value: 2,
                message: "Quantidade minima de caracteres: 2"
            },
            maxLength: {
                value: 5,
                message: "Quantidade maxima de caracteres: 5"
            },
        },
        bairro: {
            required: 'O Campo é Obrigatório',
            minLength: {
                value: 2,
                message: "Quantidade minima de caracteres: 2"
            },
            maxLength: {
                value: 25,
                message: "Quantidade maxima de caracteres: 25"
            },
        },

    }
}


export default cursoValidator