import { messageError, messageSuccess } from '/resources/js/utils/bootstrap.js'
import { ServiceStudent } from '/resources/js/infra/students.js'

const serviceStudent = ServiceStudent()

async function createStudent() {
    const { nome, email, renda } = document.forms.formRegisterStudent

    try {
        if (!nome.value) {
            throw 'O campo <b>Nome</b> deve ser informado'
        }

        if (!email.value) {
            throw 'O campo <b>Email</b> deve ser informado'
        }

        if (!renda.value) {
            throw 'O campo <b>Renda Mensal</b> deve ser informado'
        }

        if (!validator.isEmail(email.value)) {
            throw 'O valor do campo <b>Email</b> não é válido'
        }

        if (nome.value.indexOf(';') != -1 || email.value.indexOf(';') != -1
            || renda.value.indexOf(';') != -1) {
            throw 'Os campos não devem conter o caracter especial <b>";"</b>'
        }

        const student = await serviceStudent.register({
            nome: nome.value,
            email: email.value,
            renda: renda.value,
        })

        if (student) {
            messageSuccess(`Aluno(a) <b>${nome.value}</b> cadastrado(a) com sucesso`)

            nome.value = ''
            email.value = ''
            renda.value = ''
        }

    } catch (e) {
        messageError(e)
    }
}

$('#formRegisterStudent').submit(async (e) => {
    e.preventDefault()
    createStudent()
})

$(document).ready(function () {
    $('#fieldRendaMensal').mask("#.##0,00", { reverse: true });
});