const fs = require('fs');

const requestHandler = (req,res)=>{
    const url=req.url;
    const method =req.method;
    if (url === '/') {
        if (fs.existsSync('message.txt')){
                fs.readFile('message.txt', 'utf8',(err,data)=>{
                    if (err) {
                        console.error(err);
                      }else{
                        console.log(data)
                        res.write('<html>');
                        res.write('<head><title>Enter Message</title><head>');
                        res.write(`<h1>${data}</h1>`)
                        res.write(
                        '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
                        );
                        res.write('</html>');
                        return res.end();
                      }
                })
        }else{
            res.write('<html>');
            res.write('<head><title>Enter Message</title><head>');
            res.write(
            '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
            );
            res.write('</html>');
            return res.end();
    
        }
        
      }
      if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', chunk => {
          console.log(chunk);
          body.push(chunk);
        });
        return req.on('end', () => {
          const parsedBody = Buffer.concat(body).toString();
          const message = parsedBody.split('=')[1];
          fs.writeFile('message.txt', JSON.stringify(message), err => {
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
          });
        });
      }
      
        fs.readFile('message.txt', 'utf8',(err,data)=>{
            if (err) {
                console.error(err);
              }else{
                console.log(data)
                res.write('<html>');
                res.write('<head><title>Enter Message</title><head>');
                res.write(`<h1>${data}</h1>`)
                
                res.write(
                '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
                );
                res.write('</html>');
                return res.end();
              }
    
            
        })
    
}
module.exports = requestHandler;

// module.exports={
//     handler:requestHandler,
//     someText:"some text"
// }

// module.exports.handler=requestHandler;
// module.exports.someText="some text"
// exports.handler=requestHandler;
// exports.someText="some text"