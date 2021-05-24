const kelvin = 293;
//The forecast today is 293 Kelvin. To start, created a variable named kelvin, and set it equal to 293.
const celsius = kelvin - 273;
// converted Kelvin to Celsius by subtracting 273 from the kelvin variable. Stored the result in another variable, named celsius.
let fahrenheit = celsius * (9 / 5) + 32;
//used an equation to calculate Fahrenheit, then stored the answer in a variable named fahrenheit
fahrenheit = Math.floor(fahrenheit);
//When you convert from Celsius to Fahrenheit, you often get a decimal number. Used the .floor() method from the built-in Math object to round down the Fahrenheit temperature. Save the result to the fahrenheit variable
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)