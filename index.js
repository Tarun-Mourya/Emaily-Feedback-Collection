const express = require('express');
require('./services/passport');
const authRoutes = require('./routes/authRoutes');

const app = express();  

authRoutes(app);

// app.get('/', (req, res) => {
//     res.send({amg:'mercedes'});
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT);