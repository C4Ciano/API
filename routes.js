const route = require('color-convert/route')

const express = require('express')
const routes = express.Router()

let db = [
    { 'Aluno 1': { Usuario: 'xxxx', Senha: '18' } },
    { 'Aluno 2': { Usuario: 'xxxx', Senha: '19' } },
    { 'Aluno 2': { Usuario: 'xxxx', Senha: '20' } }
]

routes.get('/', (req, res) => {
    return res.json(db)
})

routes.post('/add', (req, res) => {
    const body = req.body

    if (!body)
    return res.status(400).end()

    db.push(body)
    return res.json(body)
})

routes.delete('/:id', (req, res) => {
    const ide = req.parans.ide

    let newDB = db.filter(item => {
        if(!item[id])
            return item
    })

    db = newDB

    return res.send(newDB)
})

module.exports = routes
