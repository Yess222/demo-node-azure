const express = require('express');
const app = express();

app.get('/hello-word', (req, res) => {
    res.json({ message: 'Hello World' });
});

app.get('/hello', (req,res) => {
    res.json({ message: 'Welcome to the API' });
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
