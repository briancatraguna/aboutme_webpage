// write your code here
var x = 32;
var y = 108;
var z = 9.88*x + y;

print(x);
print(y);
print(z);

print("x + y + z =",x+y+z);

var my_image = new SimpleImage("drewRobertDinos.png");

print("The width of the image is:",my_image.getWidth());
print("The height of the image is:",my_image.getHeight());
print("In row 0 and column 0 the pixel in the image is:",my_image.getPixel(0,0));
print("The red of row 0 and column 0 in the image is:",my_image.getRed(0,0));
print("The green of row 0 and column 0 in the image is:",my_image.getGreen(0,0));
print("The blue of row 0 and column 0 in the image is:",my_image.getBlue(0,0));

function plus(x,y){
    return x+y;
}

function subtract(x,y){
    return x-y;
}

function multiply(x,y){
    return x*y;
}

function divide(x,y){
    return x/y;
}

print("x + y =",plus(x,y));
print("x - y =",subtract(x,y));
print("x * y =",multiply(x,y));
print("x / y =",divide(x,y));

function cube(x){
    return x * x * x;
}

print("The cube of 2 is",cube(2));

function add_three_number(x,y,z){
    return x+y+z;
}

print("The addition of x y and z is",add_three_number(x,y,z));

function add_two_strings(a,b){
    return a + b;
}

print(add_two_strings("hello","world"));

function height(the_img){
    return the_img.getWidth()
}

function width(the_img){
    return the_img.getHeight()
}

print(width(my_image));
print(height(my_image));