DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE Users (
  id int AUTO_INCREMENT,
  username varchar(255),
  PRIMARY KEY (id)
);

-- ---
-- Globals
-- ---

-- SET SQL_MODE=NO_AUTO_VALUE_ON_ZERO;
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Users'
-- 
-- ---
    

-- ---
-- Table 'Messages'
-- 
-- ---
    
CREATE TABLE Messages (
  id INTEGER AUTO_INCREMENT ,
  text VARCHAR(255) ,
  createdAt DATE ,
  userID INTEGER ,
  roomID INTEGER ,
  PRIMARY KEY (id)
);

-- ---
-- Table 'Friends'
-- 
-- ---
    
CREATE TABLE Friends (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  userID INTEGER,
  friendID INTEGER
);

-- ---
-- Table 'Rooms'
-- 
-- ---
    
CREATE TABLE Rooms (
  id INTEGER AUTO_INCREMENT ,
  roomname VARCHAR(255) ,
  PRIMARY KEY (id)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE Messages ADD FOREIGN KEY (userID) REFERENCES Users (id);
ALTER TABLE Messages ADD FOREIGN KEY (roomID) REFERENCES Rooms (id);
ALTER TABLE Friends ADD FOREIGN KEY (userID) REFERENCES Users (id);
ALTER TABLE Friends ADD FOREIGN KEY (friendID) REFERENCES Users (id);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE Users ENGINE=InnoDB  CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE Messages ENGINE=InnoDB  CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE Friends ENGINE=InnoDB  CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE Rooms ENGINE=InnoDB  CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO Users (id,username) VALUES
-- ('','');
-- INSERT INTO Messages (id,text,createdAt,userID,roomID) VALUES
-- ('','','','','');
-- INSERT INTO Friends (id,userID,friendID) VALUES
-- ('','','');
-- INSERT INTO Rooms (id,roomname) VALUES
-- ('','');