//** CREADO EN MAC - UTILIZANDO MYSQL */

const Connection = require('mysql/lib/Connection');
//Cambiar mysql a sql 
const mysql = require('../config/config-db');

module.exports = (app) => {
    
    
    //GET 

    //OBTENER PERSONAS
        app.get('/pokemon', (req, res) => {
        const query = "SELECT id, nombre, TIPO, generacion FROM Pokemon";
    
        // Consulta del GET, usando mysql, cambiar a sql
        mysql.query(query, (err, results) => {
            if (err) {
                console.error("Error ejecutando la consulta:", err);
                res.status(500).json({ mensaje: "Error obteniendo los Pokémon" });
            } else {
                res.json(results); 
            }
        });
    });

    //POST

    app.post('/pokemon', (req, res) => {
        const { nombre, tipo, generacion } = req.body;

        
        const query = "INSERT INTO Pokemon (nombre, tipo, generacion) VALUES (?, ?, ?)";
        const values = [nombre, tipo, generacion];
    // Consulta post, usando mysql, cambiar a sql if necessary :)
         mysql.query(query, values, (err, result) => {
            if (err) {
                console.error("Error guardando el Pokémon", err);
                res.status(500).json({ mensaje: "Error guardando el Pokémon" });
            } else {
                
                res.json({ mensaje: "Inserción exitosa", id: result.insertId });
            }
        });
    });

        // METODO PUT 
        // hara un update de los datos de la base de datos segun el ID que se desee que sera unico y sera definido como parametro http://localhost:3030/pokemon/1 -- donde se utilizare el 1 como ID a realizar update
        app.put("/pokemon/:id", (req, res) => {
        let query = `UPDATE Pokemon SET nombre = ?, tipo = ?, generacion = ? WHERE id = ?`;
        let params = [req.body.nombre, req.body.tipo, req.body.generacion, req.params.id];

           


                mysql.query(query, params, (err, result) => {
                if (err) {
                console.error("Error al actualizar", err);
                res.json({ mensaje: "Error" });
                } else if (result.affectedRows === 0) {
                console.log("No hay ningún registro con ese ID");
                res.json({ mensaje: "No se encontró ningún ID" });
    } else {
        console.log("actualizado exitosamente");
        res.json({ mensaje: "actualizado exitosamente" });
        }
    });
});
    
// METODO DELETE 
// eliminara datos de la base de datos segun el ID que se desee que sera unico y sera definido como parametro http://localhost:3030/pokemon/1 -- donde se utilizare el 1 como ID a eliminar 
app.delete("/pokemon/:id", (req, res) => {
    let query = `DELETE FROM Pokemon WHERE id = ?`;
    let params = [req.params.id];

        
        
        mysql.query(query, params, (err, result) => {
            if (err) {
                console.error("Error al eliminar", err);
                res.json({ mensaje: "Error al eliminar el registro" });
            } else if (result.affectedRows === 0) {
                console.log("No hay ningún registro con ese ID");
                res.json({ mensaje: "No se encontró ningún ID" });
            } else {
                console.log("eliminado exitosamente");
                res.json({ mensaje: "eliminado exitosamente" });
            }
        });
});

}