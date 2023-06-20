const http= require('http');
function requstlistener(request,response){
    console.log(request);
    console.log("kamalesh")

}
const server= http.createServer(requstlistener);
server.listen(4000);