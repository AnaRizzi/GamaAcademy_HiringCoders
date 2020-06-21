interface Usuario{
    nome: string,
    email: string,
    endereco?: string
}

function getUser():Usuario{
    return{
        nome: 'Ana',
        email: 'ana@ana.com'
    }
}

function setUser(usuario: Usuario){
    //...
}