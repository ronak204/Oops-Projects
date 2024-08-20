
function Mobile() {
    this.modelNo = "Unknown Model";
}

Mobile.prototype.setColor = function(color) {
    this.color = color;
};

Mobile.prototype.getColor = function() {
    return this.color || "Color not set";
};

const myPhone = new Mobile();

console.log(`Model Number: ${myPhone.modelNo}`);

myPhone.setColor("Black");
console.log(`Color: ${myPhone.getColor()}`);

const anotherPhone = new Mobile();
console.log(`Color of anotherPhone: ${anotherPhone.getColor()}`);
