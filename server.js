const express = require('express');
const db = require('./main/config/connection');
const routes = require('./main/routes');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => console.log(`Now listening on localhost:${PORT}`));
});
