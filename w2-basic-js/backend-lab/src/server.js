import { createServer } from "http";

const server = createServer((req, res) => {
    const { method, url } = req;
    res.setHeader('Content-Type', 'application/json');
    if (method === 'GET' && url === '/') {
        res.wrไไไiteHead(200);
        res.end(JSON.stringify({
            message: 'สวัสดีจาก Node.js Server!'
        }));
    }else if(method === 'POST' && url === '/'){
        res.writeHead(200);
        res.end(JSON.stringify({
            message: 'คุณได้ส่งคำขอ POST มาที่ Server!'
        }));
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: 'ไมพบหนาที่ตองการ' }));
    }
});
server.listen(3000, () => {
    console.log('Server on http://localhost:3000');
});