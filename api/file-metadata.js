'use strict';

module.exports = function(app, upload) {
  app.post('/api/file-metadata', upload.single("uploaded"), function(request, response) {    
    var result = {"size": request.file.size};  

    response.end(JSON.stringify(result));  
  });
};