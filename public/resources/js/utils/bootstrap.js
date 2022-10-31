if ($('[data-bs-toggle="popover"]')[0]) {
    new bootstrap.Popover('[data-bs-toggle="popover"]', {
        trigger: 'hover',
        html: true,
    })
}

export const messageSuccess = (message) => {
    iziToast.success({
        message: `<span>${message}</span>`,
    })
}

export const messageError = (message) => {
    iziToast.error({
        message: `<span>${message}</span>`,
    })
}