import { ServiceStudent } from '/resources/js/infra/students.js'
import { ServiceExpense } from '/resources/js/infra/expenses.js'

import SaveFile from '/resources/js/utils/saveFile.js'

function downloadStudentList() {
    SaveFile(ServiceStudent().csvText(), 'alunos.txt')
}

function downloadExpensesList() {
    const date = new Date(Date.now())
    SaveFile(ServiceExpense().csvText(), `despesas_${date.getMonth() + 1}_${date.getFullYear()}`)
}

$('#downloadStudentList').click(() => {
    downloadStudentList()
})

$('#downloadExpensesList').click(() => {
    downloadExpensesList()
})