export const maskString = (str:string, pattern:string) => {
    let i = 0;
    const padded = pattern.replace(/#/g, () => {
        if (str[i])
            return str[i++];
        return '';
    });
    return padded;
}

export const ucFirst = (value:string) => {
    // empezar todas las palabras con mayuscula incluso si hay un espacio en un nombre o apellido compuesto
    value.replace(/\b\w/g, val => val.toUpperCase())
    // creamos arreglo temporal
    const temp = value.split(' ')
    // Se asegura que solo la primer letra de cada palabra comience con mayúscula
    const result = temp.map(key => {
       return key.charAt(0).toUpperCase() + key.toLowerCase().slice(1)
    })
    return result.join(' ')
}