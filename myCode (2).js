// write your code here
var img = new SimpleImage("hilton.jpg");
print("Before:")
print(img);

print("After:")
var width = img.getWidth();
for (var pixel in img.values()){
    print(pixel);
    var x = pixel.getX();
    if (x <= width/3){
        pixel.setRed(255);
    }
}
print(hilton);