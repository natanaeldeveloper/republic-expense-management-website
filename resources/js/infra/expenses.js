import Storage from "/resources/js/utils/storage.js"

export const ServiceExpense = () => {
    const storage = Storage()

    const modelName = 'expenses'

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
                values += `${item.descricao};${item.categoria};${item.valor}; \n`
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