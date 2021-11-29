const config = {
    application: {
        cors: {
            server: [
                {
                    origin: "localhost:3000", //servidor que deseas que consuma o (*) en caso que sea acceso libre
                    credentials: true
                }
            ]
        }
    },
    endpoints:{
        servicioNumPagos:"http://127.0.0.1:3001/servicioNumPagos/",
        servicioPagos: "http://127.0.0.1:3001/servicioPagos/"
    }
}

module.exports = config;