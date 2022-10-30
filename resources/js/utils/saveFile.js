
const SaveFile = async (body, filename = '') => {
    try {
        var isFileSaverSupported = !!new Blob;
        
        if(!isFileSaverSupported) {
            throw 'Navegador incompatível'
        }

        var file = new File([body], filename, { type: 'text/plain;charset=utf-8' })
        saveAs(file)
    } catch (e) {
        console.error(e)
    }
}

export default SaveFile