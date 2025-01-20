// Create web server
const express = require('express');
const app = express();
const port = 3000;
// 
app.get('/comments', (req, res) => {
  res.json({
    comments: [
      { id: 1, author: 'John', content: 'Hello' },
      { id: 2, author: 'Jane', content: 'Hi' }
    ]
  });
});
// 
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
// run web server
// $ node comments.js
// Server is running on http://localhost:3000
// access to http://localhost:3000/comments
// {"comments":[{"id":1,"author":"John","content":"Hello"},{"id":2,"author":"Jane","content":"Hi"}]}