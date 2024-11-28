const express = require('express');
const app = express();

app.get('/hello-word', (req, res) => {
    res.json({ message: 'Hello World' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
