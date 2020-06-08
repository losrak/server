const http = require('http');

http.createServer( (req, resp) => {

    resp.writeHead(200, {'Content-Type': 'application/json'})
    let salida = {
        nombre: 'Carlos',
        alias: '@Losrak',
        url: req.url
    };
    resp.write(JSON.stringify(salida));
    // resp.write('Hola mundo');
    resp.end();

})
.listen(8081);

console.log('escuchando el puerto 8081');