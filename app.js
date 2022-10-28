import ServiceStudent from './ServiceStudent.js'

const serviceStudent = ServiceStudent()

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

$(document).ready(function () {
    $('#fieldRendaMensal').mask("#.##0,00", { reverse: true });
});

$('#formRegisterStudent').submit(e => {
    e.preventDefault()

    const { nome, email, renda } = document.forms.formRegisterStudent

    const student = serviceStudent.register({
        nome: nome.value,
        email: email.value,
        renda: renda.value
    })

    if (toastTrigger && student) {
        const toast = new bootstrap.Toast(toastLiveExample)
        toast.show()
        setTimeout(toast.hide, 5000)
    }

    console.log(student)
})