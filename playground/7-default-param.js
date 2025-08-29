const greeter = (name = "user", age) => { //setting default value to name
    console.log("Hello " + name);
}

greeter("Andrew"); //Output: Hello Andrew
greeter(); //Output: Hello user