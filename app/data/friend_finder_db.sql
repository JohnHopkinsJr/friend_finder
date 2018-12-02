/* For testing on localhost
DROP DATABASE IF EXISTS friend_finder_db;
CREATE DATABASE friend_finder_db;
USE friend_finder_db;
*/

DROP TABLE IF EXISTS friends;

CREATE TABLE friends (
    id        INT AUTO_INCREMENT NOT NULL,
    name      VARCHAR(30) NOT NULL,
    photo_url TEXT NOT NULL,
    answers   CHAR(21) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO friends (name, photo_url, answers) VALUES
("Jane Fonda"      , "http://bit.ly/JaneFondaPLM", "[4,4,2,1,2,4,2,2,1,3]"),
("Billy Jones"     , "http://bit.ly/billyjonesMMAF", "[5,4,5,5,3,4,4,4,5,5]"),
("Windy Rieger"    , "http://bit.ly/WundyNBCN", "[1,2,5,1,5,2,5,3,2,1]");