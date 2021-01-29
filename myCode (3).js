// write your code here

// Create funky function
function funky(image){
    var width = image.getWidth();
    for (var pixel of image.values()){
        x_position = pixel.getX();
        if (x_position <= width/3){
            pixel.setRed(255);
        }
        else if (x_position > width/3 && x_position <= (width/3)*2){
            pixel.setGreen(255);
        }
        else {
            pixel.setBlue(255);
        }
    }
    return image;
}

// Create swap red green
function swap_red_green(pixel){
    var green_val = pixel.getGreen();
    var red_val = pixel.getRed();
    pixel.setRed(green_val);
    pixel.setGreen(red_val);
    return pixel;
}

//Reading in image
var img = new SimpleImage("hilton.jpg");

//Printing before funky
print("Before:")
print(img);

//Printing after funky
print("Funky:")
var funky_img = funky(img)
print(funky_img);

//Printing swap red green
print("Swap red green:")
var swap_red_green_img = img;
for (var pixel of swap_red_green_img.values()){
    pixel = swap_red_green(pixel);
}
print(swap_red_green_img);

//Reading duke blue devil
var duke_blue_devil = new SimpleImage("duke_blue_devil.png");
print("Duke Blue Devil Before:")
print(duke_blue_devil)


for (var pixel of duke_blue_devil.values()){
    if (pixel.getBlue()!=255){
        pixel.setBlue(0);
        pixel.setRed(255);
        pixel.setGreen(255);
    }
}
print(duke_blue_devil);