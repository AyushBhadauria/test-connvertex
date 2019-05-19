import app from "./app";
const port = 8000;

app.listen(port, function(err, req, res, next) {
  console.log('Express server listening on port ' + port);
})
