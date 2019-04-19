/*eslint-env browser*/


//STEP 1 
var Cat = function () {
    "use strict";
    this.name = "This is Cat";
};

var Dog = function () {
    "use strict";
    this.name = "This is Dog";
};


//STEP 2 
var Feline = new Cat();
var Canine = new Dog();

window.console.log(Feline.name + ", " + Canine.name);

//STEP 3  
var Animal = {
        msg: function () {
            "use strict";
            window.console.log("The Animal has been created");
        }
    };
Animal.msg();

//STEP 4 

function Animal4(txt) {
    "use strict";
    var msg = txt;
    window.console.log(msg);
}
var read = new Animal4("This is what you should read");


//STEP 5 

function Animal5(type, breed, color, height, length) {
    "use strict";
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;
}



var Tiger = new Animal5("Cat", "Vengala", "white", "4ft", "6ft");
window.console.log(Tiger);

//STEP 6 

var string1 = "";
 
for (var property1 in Tiger) {
    string1 += Tiger[property1].toString() + ", ";
}

window.console.log(string1);

//STEP 7 

Animal.speak = function () {
    "use strict";
    if (Tiger.type === "Dog") {
        return "The " + Tiger.color + " dog is barking!";
    } else if (Tiger.type === "Cat") {
        return "The " + Tiger.color + " cat is meowing!";
    } else{
        return "maybe something else?"
    }
};

window.console.log(Animal.speak());

//STEP 8 Now, convert all of your properties to private properties. Then, create a private method called checkType(). In this method you will check to see what the type is. If it’s dog, return dog, otherwise, return cat. Then, create a public method called speak that returns the value of the checkType() method. The console window should now display “The <animal type> has made a noise!”



//STEP 9 Create your own String method called findWords that inherits from the native String Object. This method should find all instances of a specific word within a provided paragraph of text. It should then alert out to the user the number of time that word was found in the paragraph. Remember, you’ll need to add your method to the String object’s prototype.


var myString = {
    findWord: function (words){
        "use strict";
        if(words) {
            var matches=[], ind=0, l=words.length;
            while (true) {
              matches.push(ind);
              ind += l;
        }
        return matches;
        }  
}

myString.findWord;