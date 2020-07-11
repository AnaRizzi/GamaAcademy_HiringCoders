import { createServer } from 'http';
/*
import { readFile } from 'fs'; //para ler o arquivo aqui
import {resolve} from 'path'; //para resolver o caminho do arquivo
*/
import { parse } from 'querystring'; //para converter o resultado da autenticação

//recebe um callback para tratar as requisições que chegam
const server = createServer((request, response) => {
    //verifica qual rota está sendo chamado na url do request:
    switch(request.url){
        case '/status': {
            //cabeçalho com código e header em json
            response.writeHead(200, {
                'Content-Type': 'application/json'
            });            //corpo da mensagem (msg ou objeto JSON se este for chamado em cima)
            response.write(JSON.stringify({
                status: 'OK!',
            })
            );            //finaliza o buffer da resposta
            response.end();
            //o retorno é pelo response com as indicações acima
            break;
        }
        /* //retirado após se transformar em mono repositório
        case '/home':{
            const path = resolve(__dirname, './pages/home.html');
            readFile(path, (error, file) => {
                //tratar se der erro:
                if (error){
                    response.writeHead(500, 'Não conseguiu ler o arquivo');
                    response.end();
                    return;
                }
                response.writeHead(200);
                //manda o arquivo como um buffer
                response.write(file);
                response.end();
            });
            break;
        }
        */
        case '/authenticate':{
            let data = '';
            //pattern de eventos:
            //'data' ocorre toda vez que o buffer le um pedaço do dado
            request.on('data', (chunk) => {
                //acrescenta cada pedaço da informação na variável:
                data += chunk;
            });
            //o 'end' é para quando termina de ler
            request.on('end', () => {
                //console.log(parse(data));
                const params = parse(data);
                //301 é para redirecionar, vai para a rota home
                /*response.writeHead(301, {
                    Location: '/home',
                });*/
                response.end();
            })
            break;
        }
        /*
        case '/sign-in':{
            const path = resolve(__dirname, './pages/sign-in.html');
            readFile(path, (error, file) => {
                //tratar se der erro:
                if (error){
                    response.writeHead(500, 'Não conseguiu ler o arquivo');
                    response.end();
                    return;
                }
                response.writeHead(200);
                //manda o arquivo como um buffer
                response.write(file);
                response.end();
            });
            break;
        }
        */

        default: {
            //cabeçalho com código e razão desse código
            response.writeHead(404, 'Server not found');
            response.end();
        }
    }
});
//configurar a porta e o host name:
//mudar porta através de variáveis de ambiente
//usa uma variável global (process)
//objeto com as variáveis de ambiente (env)
//primeiro vai checar se a porta existe, se existir, usa ela, senão usa a default 8000
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
//para o host, se o que for passado for false ou vazio, retorna o 127...
const HOSTNAME = process.env.HOSTNAME || '127.0.0.1';

//parâmetros: porta, nome do host (esse ip aponta para a própria máquina, função executada assim que o server começa a escutar)
server.listen(PORT, HOSTNAME, () => {
    console.log(`servidor está ouvindo em ${HOSTNAME}:${PORT}`)
})
