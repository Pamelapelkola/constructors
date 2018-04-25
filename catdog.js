function Animal(raining, noise){
    this.raining = raining;
    this.noise = noise;
    this.makenoise = function(){
        if (this.raining === true){
                  
        console.log(this.noise);
}
    };
}
var dogs = new Animal(true, "Woof!");
var cats = new Animal(false, "meow!")

dogs.makenoise();
cats.makenoise();


cats.raining = true;
cats.makenoise()

var masshysteria = function(dogs, cats){
    if(dogs.raining === true && cats.raining === true){
        console.log("Cats and dogs living together? Mass hysteria!");
    }
}
masshysteria(cats, dogs)