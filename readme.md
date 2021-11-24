#Installation
First clone the project
Then execute : 
```cmd
docker-compose up
```

##Database
Go into the CLI of the SQL docker and execute the command 
```cmd
mysql -h localhost -u root -p testApp
```
and then type the password database :
```cmd
helloworld
```
Congratulation. You are into your SQL database, now you need to create a table :
```sql
CREATE TABLE bookapi
(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nom VARCHAR(100),
    stock INT
);
```
The generation of the table is done. If you want to show them :
```sql
SHOW tables;
```

If you want to create brut data do this command : 
```sql
INSERT INTO bookapi VALUES (1,"toto",45);
```

And if you want the data is currently save do this one:
```sql
SELECT * FROM bookapi;
```
And the result should be : 
```
+----+--------+-------+
| id | nom    | stock |
+----+--------+-------+
|  1 | livre1 |    45 |
+----+--------+-------+
1 rows in set (0.00 sec)
```