var http=require('http');
function requestprocessing(request,response)
{
  console.log("Browser made a request "+request.url);
  response.writeHead(200,{"Content-Type":"text/plain"});
  response.write("Here is some data");
  response.end();
}
http.createServer(requestprocessing).listen(9888);
console.log("Server is now running.(Press Ctrl + C to end)");
