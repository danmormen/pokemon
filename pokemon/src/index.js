const app = require('./config/config');
require('./app/pokemon')(app);



app.listen(3030, () => console.log("Servidor corriendo en puerto 3030"));