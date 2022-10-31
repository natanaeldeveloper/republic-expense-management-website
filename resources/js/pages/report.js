import { ServiceExpense } from '../infra/expenses.js'
import { ServiceStudent } from '../infra/students.js'

function calculate() {
    const students = ServiceStudent().findAll()
    const expenses = ServiceExpense().findAll()

    var total = 0

    expenses?.forEach(item => {
        total += parseFloat(item.valor.replace('.', '').replace(',', '.'))
    });

    document.getElementById('fieldStudents').innerHTML = students?.length || 0
    document.getElementById('fieldExpenses').innerHTML = expenses?.length || 0
    document.getElementById('fieldTotal').innerHTML = total.toFixed(2, 10).replace('.', ',')
    document.getElementById('fieldPortion').innerHTML = ((total / students?.length || 0).toFixed(2, 10)).replace('.', ',')
}

calculate()

function clearStudentsHistory() {
    if(confirm('Esta operação excluirá todos os registros de estudantes cadastrados. \n Deseja prosseguir com a exclusão dos dados?')){
        ServiceStudent().destroyAll()
        calculate()
    }
}

function clearExpensesHistory() {
    if(confirm('Esta operação excluirá todos os registros de despesas cadastradas. \n Deseja prosseguir com a exclusão dos dados?')){
        ServiceExpense().destroyAll()
    calculate()
    }
}

$('#clearStudentsHistory').click(clearStudentsHistory)
$('#clearExpensesHistory').click(clearExpensesHistory)