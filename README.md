# NodeApiPostgres

1.Install nodejs
2.Create a folder open it in vs code
3.Open terminal and run this command  npm init after run you will see the packag.json file will be created.
4.Then run npm express --save
5.Create a root file index.js then add those file follow the below link
https://expressjs.com/en/starter/hello-world.html
https://expressjs.com/en/starter/basic-routing.html  (get.post,put,delete)

6.Video link- https://www.youtube.com/watch?v=7H_QH9nipNs  (Follow only for installation and how to setup node express.)


7.If you have alredy node js then try only npm install then run on the below commands.

Server Wii run on this command :
 node index.js  (When you use this command if any changes in server then you have to again run this command so that server will run )
  or 
  Nodemon:

If you use nodemon then server will automatically refresh when you change anything and also it will show the error on your terminal.
 npm run dev

Note: Posgresql is the another application 

PosgreSql Installation Process:

1.Install pgAdmin 4 (PostgreSql)  
Follow this link for compelete installation process : https://www.youtube.com/watch?v=C93Ed8b8Mhc

2.Click on this link and download the latest version of postgresql
https://www.pgadmin.org/download/pgadmin-4-windows/

--I will add one more sql file for understanding how to create table and insert the data 

--If any issue with this then goto images file for  better understanding

OUTPUT:

check on browser http://localhost:5000/api

Node to Posgres Connection: 
https://medium.com/@dannibla/connecting-nodejs-postgresql-f8967b9f5932


Different Endpoints:

 GET- http://localhost:5000/emp

 POST-http://localhost:5000/emp

 PUT-http://localhost:5000/emp/9

 DELETE-http://localhost:5000/emp/3

 Check this endpoints in POSTMAN : ADD HEADERS

 KEY :             VALUE:

 Content-Type     application/json
 Referer          http://localhost:5000/

