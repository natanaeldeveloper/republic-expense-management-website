import Storage from "/storage.js"

const ServiceStudent = () => {

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

    return {
        findAll,
        register,
        destroyAll,
    }
}

export default ServiceStudent
