const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res)=>{
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.setHeader("content-type","text/html")
        res.write('<html>')
        res.write('<head><title>hello</title></head>')
        res.write('<body>')
        res.write('<form action="/message" method="POST"><input name="massage" type = "text" /><input type="submit" value="send"/> </form>')
        res.write('<h1>HELLO</h1>')
        res.write('</body>')
        res.write('</html>')
        return res.end();
    }

    if(url === '/message' && method === 'POST'){
        const body = [];
        req.on('data',(caches)=>{
            body.push(caches);
        })
        req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=");
            fs.writeFileSync('message.txt',message[1]);
        })
        res.setHeader('Location','/')
        res.statusCode = 302;
         return res.end()
    }

    res.setHeader("content-type","text/html");
    res.write('<html>')
    res.write('<head><title>hello</title></head>')
    res.write('<body>')
    res.write('<h1>Message<h1>')
    res.write('</body>')
    res.write('</html>')
    res.end();

});

server.listen("3300");