import Storage from "resources/js/utils/storage.js"

export const ServiceStudent = () => {

    const storage = Storage()

    const modelName = 'students'

    function findAll() {
        return storage.get(modelName)
    }

    function register(data) {
        return storage.add(modelName, data)
    }

    function destroyAll() {
        return storage.removeAll(modelName)
    }

    function csvText() {
        const list = findAll()

        let values = ''

        if (list) {
            list.map(item => {
                values += `${item.nome};${item.email};${item.renda}; \n`
            })
        }

        return values
    }

    return {
        findAll,
        csvText,
        register,
        destroyAll,
    }
}