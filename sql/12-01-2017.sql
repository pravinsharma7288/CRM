CREATE TABLE user (id int not null AUTO_INCREMENT, 
name varchar(255), 
email varchar(255), 
mobile int(20), 
address varchar(255), 
city varchar(255), 
state varchar(255),
primary key (id)
)


-- postgre
CREATE TABLE users (id bigserial primary key not null, name varchar(255), email varchar(255), 
mobile int, address varchar(255), city varchar(255), state varchar(255))


insert into users ('Kaushik Parmar','kashik444@gmail.com',373,'Dhahisar','mumbai','Maharastra')
insert into users("Kaushik Parmar","kashik444@gmail.com","233","Dhahisar","mumbai","Maharastra")