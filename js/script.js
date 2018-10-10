//Create a Base Class 'Dog'
class Dog{
    constructor(name){
        this.name = name;
    }
    speak(){
        return "woof";
    }
}

//Create another class 'Labrador' which extends Base Class 'Dog'
class Labrador extends Dog{
    constructor(name, color, breedWeight){
        super(name);
        this.color = color;
        this.breedWeight = breedWeight;
    }

    //create a 'speak method' which Overrides the speak method from the Base class
    speak(){
        return "WOOF";
    }
}

// Create new object with Base class - 
//  'Dog' with the name constructor

var Dora = new Dog('Dora');
console.log(Dora.name + ' says ' + Dora.speak());

// Create new object whcih extends Base class -
//  'Labrador' with color Rose and breedweigt of 10kgs along with extended name property

var Rosie = new Labrador('Rosie','Rose','10kgs');
console.log(Rosie.name + ' is ' + Rosie.color + ' in color and she weighs ' + Rosie.breedWeight +", and she says "+ Rosie.speak());