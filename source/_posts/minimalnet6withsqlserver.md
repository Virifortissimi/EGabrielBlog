---
title: Setting Up Minimal.Net6 Rest API with SQL Server
date: 2022-06-11 20:54:46
tags: [ "dotnet6", "minimal api", "dotnet", "aspnet", "sql server"]
categories: ["programming"]
---

<img src="https://res.cloudinary.com/virifortissimi/image/upload/v1654977171/SecondBlog/1_VMlo40h4jbaNk6-L5av5gg.png" class="" width="auto" height="auto" alt="Setting Up Minimal.Net6 Rest API with SQL Server." />


Summary: in this tutorial, you will learn how to set up a minimal dotnet6 Rest API using SQL Server as the datastore.

According to the Microsoft Docs: Minimal APIs (Introduced with the .Net6 framework) are architected to create HTTP APIs with minimal dependencies. They are ideal for microservices and apps that want to include only the minimum files, features, and dependencies in ASP.NET Core.

<!-- more -->

I particularly find minimal APIs exciting because you could in about 10 minutes set up an API with a few endpoints. We are going to build a Todo API with CRUD abilities.

> The following illustration shows the completed swagger documentation for the API with all CRUD operations implemented.

<img src="https://res.cloudinary.com/virifortissimi/image/upload/v1654977171/SecondBlog/1_SPbdHj9cPo7npk9xTiqFdg.png" class="" width="auto" height="auto" alt="Completed Api" />

> Prerequisites

- Visual Studio 2022 with the ASP.NET and web development workload.
or

- Visual Studio Code
- C# for Visual Studio Code (latest version)
- .NET 6.0 SDK
or

- Visual Studio 2022 for Mac latest preview
and

- SQL Server Express


For this article. I would be working with **Visual Studio 2022**. You could follow through and create yours as you read the article or you could just get the source code and look through the code

> Step 1:

Create a minimal dotnet API by opening up **Visual Studio** and selecting **“Create a new project”**.

<img src="https://res.cloudinary.com/virifortissimi/image/upload/v1654977172/SecondBlog/1_TunxbhAnRHzIGyNk1Zf_yA.png" class="" width="auto" height="auto" alt="Visual Studio 2022" />

Select the **ASP.NET Core Web API Project** with C# language as there is a different Project for F#. Click Next

<img src="https://res.cloudinary.com/virifortissimi/image/upload/v1654977173/SecondBlog/1_lgLBYlL23q9Et77yImsXHw.png" class="" width="auto" height="auto" alt="Create a new project" />

Configure your new project by giving it a name. In our case, we are simply naming it **MininalAPI**. Click Next when done configuring your project


<img src="https://res.cloudinary.com/virifortissimi/image/upload/v1654977172/SecondBlog/1_ZlcCrJ0yaPBSe68LWGjduA.png" class="" width="auto" height="auto" alt="Configure your project" />

Uncheck the **“Use controllers”** checkbox to make sure that controllers would not be added to the created project. We’d be working mostly with the program class.

<img src="https://res.cloudinary.com/virifortissimi/image/upload/v1654977172/SecondBlog/1_gD-ygpPmuu8fT8HpEs1HMw.png" class="" width="auto" height="auto" alt="Uncheck Use Controllers" />

Click Create. A simple **Webapi project** would be created for you without a controller folder but with a Program class that looks exactly like this:

<script src="https://gist.github.com/Virifortissimi/0047fcaa57e963d9e029f2472aa61656.js"></script>

Clean up the project by deleting the internal Record WeatherForecast class, the Get Route, and the summaries array sections on your **Program.cs** class to make it look exactly like this:

<script src="https://gist.github.com/Virifortissimi/39bbd445ac245ea9a9e15693a3d741e9.js"></script>

> Step 2

Now let’s install the nuget packages that we require to use SQL Server as our data store. The packages are:

- Microsoft.EntityFrameworkCore.Design (latest stable dotnet 6 version)
- Microsoft.EntityFrameworkCore.SqlServer (latest stable dotnet 6 version)
- Microsoft.EntityFrameworkCore (latest stable dotnet 6 version)
- Tools (can be gotten with the command *“dotnet tool install — global dotnet-ef”*


<img src="https://res.cloudinary.com/virifortissimi/image/upload/v1654977173/SecondBlog/1_59X1qpVPHvxS3G6O30TtQA.png" class="" width="auto" height="auto" alt="Nuget Packages" />

Next, at the root of your project, add a new class called **TodoItem**. Add the following to the class.

<script src="https://gist.github.com/Virifortissimi/d2acb444c48f8423e52f8e6cc6fcf0f4.js"></script>

Also, create a **DataContext** class at the root of your project with the following code added to it.

<script src="https://gist.github.com/Virifortissimi/7b50554ba7be6a8ed1ce09236dd2e0f5.js"></script>

The **DataContext** class would inherit from **DbContext**, then a constructor is created to get **DbContextOptions** of our **DataContext** class which would be passed to the base class. A DbSet of our TodoItem is also added which represents our **TodoItem Entity** and can be used for creating, reading, updating, and deleting operations.

Next, Update your **appsetting.Development.json** to contain the connectionString for our data store.

<script src="https://gist.github.com/Virifortissimi/ac6c87d443d9bb01f630342e89ee0671.js"></script>

Next, Update our **Program** class by registering a new Service. The **AddDbContext** service which would use SQL Server and would get the connectionstrings from **builder.Configuration**.

<script src="https://gist.github.com/Virifortissimi/4909995668c0ecff9138e58c2c68cea0.js"></script>

We are using the Code First Approach in creating our Database so we would need to create a migrations folder. EntityFramework is going to come to our rescue here. We would use the following commands to create our migrations folder and update our database.

Click on Tools →NuGet Package Manager →Package Manager Console to open the Package Manager Console. In the package manager console, Change the directory into the project by typing *“cd .\MinimalAPI”*.

Next, create migration by typing *“dotnet ef migrations add InitialMigration”* which would create a migration file.

<img src="https://res.cloudinary.com/virifortissimi/image/upload/v1654977174/SecondBlog/1_PhJX6an-jl_KbIrO9zG7wA.png" class="" width="auto" height="auto" alt="Migration file" />

Updating our database with the command *“dotnet ef database update”* would create the database on SQL Server and also create the TodoItems Table as we see in the image below:

<img src="https://res.cloudinary.com/virifortissimi/image/upload/v1654977173/SecondBlog/1__3LagHCbwsNh7bweNdXEww.png" class="" width="auto" height="auto" alt="SQL Server Management Studio" />

Now it’s time to add our CRUD operations to the API.

> Step 3

Add the following codes to the **Program** class, just after the **app.UseHttpsRedirection()** middleware.

<script src="https://gist.github.com/Virifortissimi/462372733ac97b0d1c31fb1bde8b3665.js"></script>

We’ve just added 4 different types of routes (Get, Post, Put, Delete) using patterns we were already familiar with. We also passed in **DataContext** as a dependency to the RequestDelegate so as to access the Database.

In this tutorial, you have learned how to set up a .Net6 minimal Rest API with SQL Server as a datastore. In our next article, we created an [Azure SQL Database single database on Azure](https://www.egabriel.dev/) and used it on our project. Read [HERE](https://www.egabriel.dev/)