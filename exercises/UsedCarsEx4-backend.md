# Exercise part 4: Connecting our Car-app to a REST-backend 

In this exercise you must rewrite the usedcarapp in a way that we can persist data from the CRUD operations done in the app.

1. Implement a simple REST API, using JAX-RS which can add, edit, delete and fetch cars. 
2. Create a javascript class that can hold the used cars data.
   1. provide the class with methods to Create, Read, Update and Delete cars in the collection.
   2. import the class into the used cars app.
3. Whenever the used cars collection is updated with Create, Update or Delete the server should be contacted to persist the changes and the client side collection should be updated with changes.
4. Make sure that your view is updated whenever changes are made.
5. Make a function in your data holding class that can fetch data from the server each 2 minutes. In this way we make sure that our data is never more than 2 minutes outdated.

**Hints:**

**A small script to give you a few cars in the database:**

```sql
insert intocar(id,model_year,registered,make,model,description,price) values (null,1996,'1999-4-11','Jeep','Grand Cherokee','Air, loaded',4799);

insert intocar(id,model_year,registered,make,model,description,price) values (null,2002,'2002-4-25','Ford','E350','ac, abs, moon',3000);

insert intocar(id,model_year,registered,make,model,description,price) values (null,2005,'2005-4-25','Chevy','Venture','none',7600);

```

 

**Gson and dates:**

If you have date problems with Gson when de-serializing your car, you should create your gson instance as below:

private staticfinal Gson gson = new GsonBuilder().

​          setDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'").

​          setPrettyPrinting().create();

 