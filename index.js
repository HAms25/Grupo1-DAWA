const express = require('express')
const res = require('express/lib/response')

const app = express()

app.get('/',(req,res)=>{
    res.sendFile('./view/index.html',{
        root: __dirname
    })
})

app.get('/about',(req,res)=>{
    res.sendFile('./view/about.html',{
        root: __dirname
    })
})

app.get('/contact',(req,res)=>{
    res.sendFile('./view/contact.html',{
        root: __dirname
    })
})

app.get('/catalogo',(req,res)=>{
    res.sendFile('./view/catalogo.html',{
        root: __dirname
    })
})

app.use((req,res)=> {
    res.status(404).send('No se encontró tu pagina...!!!')

})

app.listen(3000)
console.log('Server on port ${3000}')