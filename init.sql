CREATE DATABASE IF NOT EXISTS oncinha;
CREATE USER 'oncinha'@'localhost' IDENTIFIED BY 'senhafoda';
GRANT ALL PRIVILEGES ON *.* TO 'oncinha'@'localhost' WITH GRANT OPTION;
FLUSH PRIVILEGES;
