

// Define the Animal class
class Animal {
  constructor(species) {
    this._species = species; // Store the species as a private property
  }

  // Getter for species
  get species() {
    return this._species;
  }

  // Method to log the sound the animal makes
  makeSound() {
    return `The ${this.species} makes a sound`;
  }
}

// Define the Cat class, which extends Animal
class Cat extends Animal {
  // Method to log the sound of a cat
  purr() {
    return "purr";
  }
}

// Define the Dog class, which extends Animal
class Dog extends Animal {
  // Method to log the sound of a dog
  bark() {
    return "woof";
  }
}

// Event Listeners for Cat
let myCat;

document.getElementById("create-cat").addEventListener("click", () => {
  const species = document.getElementById("cat-species").value.trim();
  if (species) {
    myCat = new Cat(species);
    document.getElementById("cat-output").textContent = `Cat of species "${species}" created successfully!`;
  } else {
    document.getElementById("cat-output").textContent = "Please enter a valid species.";
  }
});

document.getElementById("cat-make-sound").addEventListener("click", () => {
  if (myCat) {
    document.getElementById("cat-output").textContent = myCat.makeSound();
  } else {
    document.getElementById("cat-output").textContent = "Create a cat first!";
  }
});

document.getElementById("cat-purr").addEventListener("click", () => {
  if (myCat) {
    document.getElementById("cat-output").textContent = myCat.purr();
  } else {
    document.getElementById("cat-output").textContent = "Create a cat first!";
  }
});

// Event Listeners for Dog
let myDog;

document.getElementById("create-dog").addEventListener("click", () => {
  const species = document.getElementById("dog-species").value.trim();
  if (species) {
    myDog = new Dog(species);
    document.getElementById("dog-output").textContent = `Dog of species "${species}" created successfully!`;
  } else {
    document.getElementById("dog-output").textContent = "Please enter a valid species.";
  }
});

document.getElementById("dog-make-sound").addEventListener("click", () => {
  if (myDog) {
    document.getElementById("dog-output").textContent = myDog.makeSound();
  } else {
    document.getElementById("dog-output").textContent = "Create a dog first!";
  }
});

document.getElementById("dog-bark").addEventListener("click", () => {
  if (myDog) {
    document.getElementById("dog-output").textContent = myDog.bark();
  } else {
    document.getElementById("dog-output").textContent = "Create a dog first!";
  }
});
