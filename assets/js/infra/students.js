import Storage from "./storage.js"

export const ServiceStudent = () => {

    const storage = Storage()

    function findAll() {
        return storage.get('students')
    }

    function register(student) {
        return storage.add('students', student)
    }

    function destroyAll() {
        return storage.removeAll('students')
    }

    function csvText() {
        const studentList = findAll()

        let values = ''
        
        studentList.map(item => {
            values += `${item.nome};${item.email};${item.renda}; \n`
        })

        return values
    }

    return {
        findAll,
        csvText,
        register,
        destroyAll,
    }
}