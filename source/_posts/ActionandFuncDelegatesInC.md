---
title: Action and Func Delegates In C#
date: 2022-07-24 09:52:04
categories: [ "Csharp", "dotnet"]
tags: ["programming"]
---

<img src="https://res.cloudinary.com/virifortissimi/image/upload/v1658653100/FifthBlog/ActionFuncDeleagtes.png" class="" width="auto" height="auto" alt="Action and Func Delegates In C#" />

In this article, we are going to talk about `Action` and `Func` delegates in C#, We would learn what they are and how to implement them.

Let's Begin.

<!-- more -->

`Action` and `Func` delegates are function objects that allow us to treat functions or methods as data just like int and string. As a result, we can use the functions anywhere. This includes passing them as an argument to other functions.

## Action Delegates

`Action` delegates are built-in generic delegates in the `System namespace` that takes in zero or more input parameters and no out parameter. So, in other words, we can only pass methods with `void` return types to `Action` delegates.

A base syntax for how to implement an `Action` delegate that takes a single parameter is:

```c#
public delegate void Action<in T>(T arg);
```

There are different ways to use an `Action` delegate.

Let's first inspect how, by assigning a method to an `Action` delegate:

```c#
//Assigning methods to Action Delegates
static void SayHello(string name)
{
    Console.WriteLine($"Hello {name}");
}
Action<string> Greet = SayHello;
Greet("John Doe");
```

Here, we create a method `SayHello` that receives a name parameter and writes to the console. Now we can pass the method to the `Greet` Action delegate.

Next, we can use an `Action` delegate with an Anonymous method:

```C#
//Assigning anonymous methods to Action Delegates
Action<int, int> AddNumbers = delegate (int num1, int num2) 
{ 
    Console.WriteLine($"Total of {num1} + {num2} is {num1 + num2}"); 
};
AddNumbers(20, 32);
```

Now, we create an anonymous method and reference the `AddNumbers` Action delegate, this delegate takes in two input parameters and returns the sum of the integers.

Finally, Let's see how we can do the same with Lambda expressions:

```C#
//Using Action Delegates with Lambda expressions
Action<string> Greetings = (name) => Console.WriteLine($"Good day, {name}.");
Greetings("John Doe");
```

Lambda expressions help simplify the implementation of Action delegates. In the example, we create a function that accepts a `name` parameter and writes to the console. Action delegates can take up to 16 input parameters.

## Func Delegates

`Func` delegate is very similar to `Action` delegates in that it takes zero or more input parameters. However, `Func` delegates takes one out parameter:

```c#
public delegate TResult Func<in T, out TResult>(T arg);
```

This means that we can pass methods with return types to `Func` delegates. We can instantiate a `Func` delegate that takes in two input parameters with this syntax:

```c#
public delegate TResult Func<in T1, in T2, out TResult>(T1 arg1, T2 arg2);
```

Comparing both `Func` syntax, we noticed that the out parameter is always the last parameter. Therefore, `Func` delegates with no input parameters would have just an out parameter:

```c#
public delegate TResult Func<out TResult>();
```

Like `Action` delegates, we can implement `Func` delegates in different ways.
Let's implement a `Func` delegate using a method:

```c#
//Assigning methods to Func Delegates
static int AddNumber(int num1, int num2)
{
    return num1 + num2;
}
Func<int, int, int> Sum = AddNumber;
Console.WriteLine(Sum(5, 8));
```

The `AddNumber` method takes two integers and returns their sum. It is then passed to the `Sum` Func delegate which accepts two input parameters and returns an integer.

Next, Let's inspect how we can use a `Func` delegate with anonymous methods:

```c#
//Assigning anonymous methods to Func Delegates
Func<int, bool> OlderThanEighteen = delegate (int age) 
{ 
    return age > 18; 
};
Console.WriteLine(OlderThanEighteen(19));
```

The `OlderThanEighteen` method receives an anonymous method that checks if age is greater than 18 and then returns true or false. This `Func` delegate receives just an integer input parameter and returns a boolean.

Finally, Let's use a `Func` delegate with a Lambda expression:

```c#
//Using Action Delegates with Lambda expressions
Func<string, string, string> GetFullName = (firstName, lastName) => $"Your full name is - {firstName} {lastName}";
Console.WriteLine(GetFullName("John", "Doe"));
```

This `Func` delegate accepts two input parameters of FirstName and LastName then returns FullName. Like Action Delegates, Func Delegates can take a maximum of 16 in parameters.

## Implementation

```c#
double SquareRoot(int number)
{
    return Math.Sqrt(number);
}

Func<int, double> GetSquareRoot = GetSquareRoot;
double result = GetSquareRootFunc(20);
Console.WriteLine(result);
```

The `SquareRoot` method receives an integer, then calculates the square root. We then assign the method to the `GetSquareRoot` Func delegate. The `Func` delegate takes an integer and returns a double as the result of the calculation.

To help decide which of these built-in delegates to use, the most important factor to put into consideration is the return type of the method we wish to assign to our delegate. Therefore, the question would be, does the method have a return type? If yes, go ahead to use a `Func` delegate. However, if no, then an `Action` delegate is the one for us.

## Conclusion

In this article, we have learned:
- What an Action delegate is
- What a Func delegate is
- How to use Action and Func delegates