---
title: Fluent validation with NetCore
date: 2019-09-23
tags: ["beginners", "csharp", "dotnet"]
---

Validations are usually a repetitive and sometimes complex process, depending on the project and its architecture.

There are currently many libraries that allow you to automate the rules or validations that your project needs to achieve those milestones or functionalities.

The library that I currently use is a fluent validation call that allows me to create processes to validate and verify the data inserted by the user in the view. ASP.NET MVC provides several validation mechanisms, such as Remote Validation, Validation through data logging, Fluent Validation and Custom Validation. In this article, we will read about Fluent validation. The fluent validation contains .NET libraries and the validation is done using the Lambda expression. Use fluent validation when you want to create advanced and complex validation for user data. 

Let's start these examples of use.

You can install it using the NuGet package manager console within Visual Studio or VSCode by running the following command:

```
dotnet add package FluentValidation
```
For example, imagine that you have a Product class:
```
 public class Product {
  public int Id { get; set; }
  public string Name { get; set; }
  public string Type { get; set; }
  public decimal Discount { get; set; }
  public decimal Price { get; set; }
}
```
You would define a set of validation rules for this class by inheriting from AbstractValidator<Product>:
 
```
using FluentValidation; 

public class ProductValidator : AbstractValidator<Product> {
}
```
The validation rules themselves should be defined in the validator class’s constructor.

To specify a validation rule for a particular property, call the RuleFor method, passing a lambda expression that indicates the property that you wish to validate. For example, to ensure that the Surname property is not null, the validator class would look like this:
 
```
using FluentValidation;

public class ProductValidator : AbstractValidator<Product> {
  public ProductValidator() {
    RuleFor(product => product.Name).NotNull();
  }
}
```
To run the validator, instantiate the validator object and call the Validate method, passing in the object to validate.

```
Product product = new Product();
ProductValidator validator = new ProductValidator();

ValidationResult result = validator.Validate(product);
```
The Validate method returns a ValidationResult object. This contains two properties:

- IsValid - a boolean that says whether the validation suceeded.
- Errors - a collection of ValidationFailure objects containing details about any validation failures.
The following code would write any validation failures to the console:
```
Product product = new Product();
ProductValidator validator = new ProductValidator();

ValidationResult results = validator.Validate(product);

if(! results.IsValid) {
  foreach(var failure in results.Errors) {
    Console.WriteLine("Property " + failure.PropertyName)
    Console.WriteLine("Failed validation. Error was: " + failure.ErrorMessage);
  }
}
```

Use Fluent validation if you want to implement a complex or high level validation. [I recommend using this library](https://github.com/JeremySkinner/FluentValidation)