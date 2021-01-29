// write your code here
var yellow_image = new SimpleImage(200,200);
for (var pixel of yellow_image.values()){
    pixel.setRed(255);
    pixel.setGreen(255);
    pixel.setBlue(0);
}

print(yellow_image);

var magenta_image = new SimpleImage(200,200);
for (var pixel of magenta_image.values()){
    pixel.setRed(255);
    pixel.setGreen(0);
    pixel.setBlue(255);
}

print(magenta_image);