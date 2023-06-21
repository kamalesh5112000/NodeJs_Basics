const http= require('http');
function requstlistener(request,response){
    console.log(request.url);
    const url=request.url;
    if (url=="/home"){
        response.setHeader('Content-Type','text/html');
        response.write('<html>');
        response.write('<head><title>My Frist Page</title></head>');
        response.write('<body><h1>Welcome to home!</h1></body>');
        response.write('<html>');
        response.end();
    }else if (url=="/about"){
        response.setHeader('Content-Type','text/html');
        response.write('<html>');
        response.write('<head><title>My Frist Page</title></head>');
        response.write('<body><h1>Welcome to About US Page!</h1></body>');
        response.write('<html>');
        response.end();
    }else if (url=="/node"){
        response.setHeader('Content-Type','text/html');
        response.write('<html>');
        response.write('<head><title>My Frist Page</title></head>');
        response.write('<body><h1>Welcome to my Node.js Server!</h1></body>');
        response.write('<html>');
        response.end();
    }else{
        response.setHeader('Content-Type','text/html');
    response.write('<html>');
    response.write('<head><title>My Frist Page</title></head>');
    response.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    response.write('<html>');
    response.end();

    }
    
    console.log("kamalesh")

}
const server= http.createServer(requstlistener);
server.listen(4000);