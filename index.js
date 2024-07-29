const jsonServer = require('json-server')

const router = jsonServer.router('sr.json')

const middleware = jsonServer.defaults()

const jobServer = jsonServer.create()

jobServer.use(middleware)

jobServer.use(router)


const PORT = 3000 || process.env.PORT

jobServer.listen(PORT, ()=>{
    console.log(`server running successfully running ${PORT}`);
})
