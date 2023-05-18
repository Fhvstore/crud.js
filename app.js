const express = require('express')
const app = express()
const server = require('http').createServer(app)
const cors = require('cors')
const { Server } = require("socket.io");
const io = new Server(server);

function createuser(username, email,idade, callback) {
  const mysql = require('mysql');
  
  // Configurar a conexão com o banco de dados
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rockeiro00',
    database: 'crud'
  });

  const insertSql = 'INSERT INTO users (username, email, idade) VALUES (?, ?, ?)';
  const values = [username, email, idade];

  // Conectar ao banco de dados
  connection.connect((error) => {
    if (error) {
      callback(error, null);
    } else {
      // Executar a consulta INSERT
      connection.query(insertSql, values, (error, results) => {
        if (error) {
          callback(error, null);
        } else {
          callback(null, results.insertId);
        }
        // Fechar a conexão com o banco de dados
        connection.end();
      });
    }
  });
}

/*createuser('xikititassssss', 'xikititassssssss@example.com', 22, (error, userId) => {
  if (error) {
    console.error('Erro ao criar usuário:', error);
  } else {
    console.log('Usuário criado com sucesso! ID:', userId);
  }
});*/

 
// #DELETAR // #DELETAR // #DELETAR // #DELETAR// #DELETAR

const mysql = require('mysql');

// Configurações da conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'rockeiro00',
  database: 'crud',
});

// Função para excluir um registro pelo ID
function deleteUserById(id, callback) {
  // faz a Consulta para excluir o registro
  const deleteSql = 'DELETE FROM users WHERE id = ?';
  
  // Executa a consulta SQL com o ID como parâmetro
  connection.query(deleteSql, [id], (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      // Retorna o número de registros afetados
      callback(null, results.affectedRows);
    }
  });
}

/*deleteUserById(5, (error, affectedRows) => {
  if (error) {
    console.error('Erro ao excluir usuário:', error);
  } else {
    console.log('Usuário excluído com sucesso! Registros afetados:', affectedRows);
  }
});

connection.end();*/

 // UPDATE // UPDATE// UPDATE // UPDATE // UPDATE// UPDATE

 function updateUserById(id, newUsername, newEmail, callback) {
   // Consulta SQL para atualizar o registro
   const updateSql = 'UPDATE users SET username = ?, email = ? WHERE id = ?';
   
   connection.query(updateSql, [newUsername, newEmail, id], (error, results) => {
     if (error) {
       callback(error, null);
     } else {
       // Retorna o número de registros afetados pela atualização
       callback(null, results.affectedRows);
     }
   });
 }
 

/*updateUserById(4, 'new_username', 'new_email@example.com', (error, affectedRows) => {
   if (error) {
     console.error('Erro ao atualizar usuário:', error);
   } else {
     console.log('Usuário atualizado com sucesso! Registros afetados:', affectedRows);
   }
 });
 
 connection.end();*/
 

 // Função para executar comandos SQL
 function executeSQL(sql, values, callback) {
   // Executa a consulta SQL com os valores fornecidos como parâmetros
   connection.query(sql, values, (error, results) => {
     if (error) {
       callback(error, null);
     } else {
       callback(null, results);
     }
   });
 }

 const sql = 'SELECT * FROM users WHERE id = ?';
 const values = [4];
 
 /*executeSQL(sql, values, (error, results) => {
   if (error) {
     console.error('Erro ao executar comando SQL:', error);
   } else {
     console.log('Resultado:', results);
   }
 });
 
 connection.end();*/