---
title: Connect To PostgreSQL Database Server with Entity Framework (Code First Approach)
date: 2022-06-09 22:09:42
tags:
---


Summary: In this tutorial, you will learn how to connect to the PostgreSQL database server in the ASPNET WEB API using EFCore Code First Approach.

According to Postgres Tutorial: PostgreSQL is an advanced, enterprise-class, and open-source relational database system. PostgreSQL supports both SQL (relational) and JSON (non-relational) querying.
<!-- more -->
PostgreSQL is a highly stable database backed by more than 20 years of development by the open-source community.

PostgreSQL is used as a primary database for many web applications as well as mobile and analytics applications.

To install PostgresSQL on your local server, please use this [instruction](https://www.postgresqltutorial.com/postgresql-getting-started/).


##Create an ASPNET WEB API

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

##Connect to the PostgreSQL database using your project

The following is the list of the connection parameters:

database: the name of the database that you want to connect.

user: the username used to authenticate.

password: password used to authenticate.

host: database server address e.g., localhost or an IP address.

port: the port number that defaults to 5432 if it is not provided.

We can modify the appsettings.json with the below values.