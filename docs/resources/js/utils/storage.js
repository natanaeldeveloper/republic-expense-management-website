const Storage = () => {

    function encode(value) {
        return JSON.stringify(value)
    }

    function decode(value) {
        return JSON.parse(value)
    }

    function get(key) {
        const data = decode(localStorage.getItem(key))
        return data ? data : null
    }

    function set(key, value) {
        localStorage.setItem(key, encode(value))
    }

    function add(key, value) {
        const students = get(key) ?? []
        students.push({ ...value, id: students.length + 1 })
        set(key, students)
        return students[students.length - 1]
    }

    function removeAll(key) {
        localStorage.removeItem(key)
    }

    return {
        set,
        get,
        add,
        removeAll,
    }
}

export default Storage