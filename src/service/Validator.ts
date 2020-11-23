type validationResult = string | undefined

export const required = (value: string): validationResult => !value ? 'Required' : undefined

export const phoneNumber = (value: string): validationResult => value && !/^(0|[1-9][0-9]{8})$/i.test(value)
    ? 'Must be 9 digits'
    : undefined

export const onlyAlpha = (value: string): validationResult => value && /[^a-zA-Z]+$/i.test(value)
    ? 'Only alpha characters'
    : undefined

export const alphaNumeric = (value: string): validationResult => value && /[^a-zA-Z0-9/]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined
