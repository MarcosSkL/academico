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

    }
}

export default cursoValidator