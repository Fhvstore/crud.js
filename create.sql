USE crud;

CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL, 
  idade INTEGER NOT NULL
);

INSERT INTO users (username, email, idade) VALUES ('ale', 'ale.test.com', 22), ('pitty', 'pittytest.com', 23);
