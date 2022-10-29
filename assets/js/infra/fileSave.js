
export const saveFile = (body, filename = '', type = 'text/plain;charset=utf-8') => {
    try {
        var isFileSaverSupported = !!new Blob;
        var file = new File([body], filename, { type })
        saveAs(file)
    } catch (e) {
        console.error(e)
    }
}