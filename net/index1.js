const net = require('net');

// 创建 TCP 服务器
const server = net.createServer((socket) => {
  // 监听数据事件
  socket.on('data', (data) => {
    console.log('Received data from client:', data.toString());

    // 发送响应数据
    const response = 'HTTP/1.1 200 OK\r\n' +
      'Content-Type: text/plain\r\n' +
      'Content-Length: 13\r\n' +
      'Connection: close\r\n' +
      '\r\n' +
      'Hello, world!';
    socket.write(response);

    // 关闭连接
    socket.end();
  });

  // 监听错误事件
  socket.on('error', (err) => {
    console.error('Socket error:', err.message);
  });

  // 监听连接关闭事件
  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

// 监听服务器错误事件
server.on('error', (err) => {
  console.error('Server error:', err.message);
});

// 服务器监听端口
const PORT = 12345;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
