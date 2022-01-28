
-- This query is used to Create the employee table 
CREATE TABLE Employee(
 id int not null,
 name text not null,
 rollnumber int not null
);

--Inserting data from Emplyee table
INSERT INTO Employee values(1,'John',1001);
INSERT INTO Employee values(2,'Virat Kohli',1002);

--Check the data from Employee table
select * from Employee

--Note :When you run the query first you have to select the query then click the run button 