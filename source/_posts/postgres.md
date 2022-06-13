---
title: Connect To PostgreSQL Database Server with Entity Framework (Code First Approach)
date: 2022-06-09 22:09:42
tags: [ "postgressql", "code first", "dotnet", "aspnet"]
categories: ["programming"]
---

<img src="https://res.cloudinary.com/virifortissimi/image/upload/v1654973326/1_XIMVb4ZQRfSS4ZnI6WfH0Q.jpg" class="" width="auto" height="auto" alt="PostgresSQL Image" />

Summary: In this tutorial, you will learn how to connect to the PostgreSQL database server in the ASPNET WEB API using EFCore Code First Approach.

According to Postgres Tutorial: PostgreSQL is an advanced, enterprise-class, and open-source relational database system. PostgreSQL supports both SQL (relational) and JSON (non-relational) querying.
<!-- more -->
PostgreSQL is a highly stable database backed by more than 20 years of development by the open-source community.

PostgreSQL is used as a primary database for many web applications as well as mobile and analytics applications.

To install PostgresSQL on your local server, please use this [instruction](https://www.postgresqltutorial.com/postgresql-getting-started/).


## Create an ASPNET WEB API

First, use the following command from the terminal to create an ASPNET WEB API with the name PostGresAPI

```
dotnet new webapi -o PostGresAPI
```

If you have created the WEB API project, navigate to the project and use the command “code .” to open the project in VS Code

We must install the below libraries using the NuGet package manager.

```
Npgsql.EntityFrameworkCore.PostgreSQL
Microsoft.EntityFrameworkCore
Microsoft.EntityFrameworkCore.Tools
Microsoft.EntityFrameworkCore.Design
```

## Connect to the PostgreSQL database using your project

The following is the list of the connection parameters:

database: the name of the database that you want to connect.

user: the username used to authenticate.

password: password used to authenticate.

host: database server address e.g., localhost or an IP address.

port: the port number that defaults to 5432 if it is not provided.

We can modify the appsettings.json with the below values.

<img src="https://res.cloudinary.com/virifortissimi/image/upload/v1654973325/1_2RDwhJKPZE8PBqg-D-m34A.png" class="" width="auto" height="auto" alt="Appsettings" />

By doing the above, We have added a database connection string to the settings file

Next, Let’s create models we can use to pass our entities into the database. Create a Models folder then create a Student class in the Models folder:

<img src="https://res.cloudinary.com/virifortissimi/image/upload/v1654973325/1_gQxalA81yB4TLPmVjquhAQ.png" class="" width="auto" height="auto" alt="Student Class" />

We can next create a “Data” folder and then create the “ApplicationDbContext” class in the Data folder then add the below code.

<img src="https://res.cloudinary.com/virifortissimi/image/upload/v1654973325/1_ACYYmk4j2daFnCDz8Kwe7w.png" class="" width="auto" height="auto" alt="Application DbContext" />

## Make Changes to the ConfigureServices method in the Startup File

We can make below changes in the “ConfigureServices” method in the “Startup” class as well to link the connection string and the Database context so as to create the file in our PostGresSQL database.

<img src="https://res.cloudinary.com/virifortissimi/image/upload/v1654973325/1_kQrah0iq4NH_0ZPsP-qpVA.png" class="" width="auto" height="auto" alt="Startup class" />

## Create a Database table

We can now create a database table. As we are using Entity Framework, we can use below database migration command from the terminal to create a migrations folder and then update the database.

```
dotnet ef migrations add InitialMigration
```


If successful, we should see the below message in the terminal and the migrations folder created

<img src="https://res.cloudinary.com/virifortissimi/image/upload/v1654973325/1_DgePqxcwbHPbj4YY5NNcwA.png" class="" width="auto" height="auto" alt="Migrations" />

“InitialMigration” is the name we have given to the migrations. When successfully done, we can now update the database with the following command from the terminal also

```
dotnet ef database update
```

<img src="https://res.cloudinary.com/virifortissimi/image/upload/v1654973325/1_nDO35__sQnC4nnft6VGPNA.png" class="" width="auto" height="auto" alt="Database update" />

If you check the database using the PostgreSQL database server, you can see that the below table has been created inside the database.

<img src="https://res.cloudinary.com/virifortissimi/image/upload/v1654973326/1_Uex5nCXwaAqaTfQ2SvQ9Qg.png" class="" width="auto" height="auto" alt="The studentDb created in the PostgreSQL database server" />

<img src="https://res.cloudinary.com/virifortissimi/image/upload/v1654973327/1_LAhO6LN8uIePC1K67ULL-A.png" class="" width="auto" height="auto" alt="The students table created with Id and Name columns" />

In this tutorial, you have learned how to connect to the PostgreSQL database server in an ASPNET WEB API using Entity Framework Core Code first approach.

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7334225597653931"
     crossorigin="anonymous"></script>