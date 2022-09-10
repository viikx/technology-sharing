import http from 'node:http'

http.createServer(function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  let html = [
    '<li>1</li>',
    '<li>2</li>',
    '<li>3</li>',
    '<li>4</li>',
    '<li>5</li>',
    '<li>6</li>',
    '<li>7</li>',
    '<li>8</li>',
    '<li>9</li>',
    '<li>0</li>',
  ]

  let i = 0;
  setInterval(() => {
    if (i === html.length) {
      res.end();
    } else {
      res.write(html[i++]);
    }

  }, 500);


}).listen(3001);