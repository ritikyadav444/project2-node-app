const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!' + ' This is a simple Express server.' + ' It listens on port 3000 and responds to GET requests at the root URL.'+ 
        'You can customize this response to include more information or serve different content as needed.');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});