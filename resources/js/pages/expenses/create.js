import { messageError, messageSuccess } from 'resources/js/utils/bootstrap.js'
import { ServiceExpense } from 'resources/js/infra/expenses.js'

const serviceExpense = ServiceExpense()

async function createStudent() {
    const { descricao, categoria, valor } = document.forms.formRegisterExpense

    try {
        if (!descricao.value) {
            throw 'O campo <b>Descrição</b> deve ser informado'
        }

        if (!categoria.value) {
            throw 'O campo <b>Categoria</b> deve ser informado'
        }

        if (!valor.value) {
            throw 'O campo <b>Valor da despesa</b> deve ser informado'
        }

        if (descricao.value.indexOf(';') != -1 || categoria.value.indexOf(';') != -1
            || valor.value.indexOf(';') != -1) {
            throw 'Os campos não devem conter o caracter especial <b>";"</b>'
        }

        const student = await serviceExpense.register({
            descricao: descricao.value,
            categoria: categoria.value,
            valor: valor.value,
        })

        if (student) {
            messageSuccess(`Despesa <b>${descricao.value}</b> cadastrada com sucesso`)

            descricao.value = ''
            categoria.value = ''
            valor.value = ''
        }

    } catch (e) {
        messageError(e)
    }
}

$('#formRegisterExpense').submit(async (e) => {
    e.preventDefault()
    createStudent()
})

$(document).ready(function () {
    $('#fieldDespesa').mask("#.##0,00", { reverse: true });
});