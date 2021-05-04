// let user1 = {
//     firstName: "Bill",
//     lastName: "Gates",
//     relationshipStatus: "Newly Single",
//     moneyToSpare: "All of it"
// };

// let user2 = {
//     firstName: "Melinda",
//     lastName: "Gates",
//     relationshipStatus: "Newly Single",
//     moneyToSpare: "Half of it"
// }

class Sandwich {
    constructor(name, bread, meat, servings){
        this.name = name;
        this.bread = bread; 
        this.meat = meat;
        this.servings = servings
    }

    getEaten(servings = 1){
        console.log(this.name + " was eaten, removing " + servings + " servings");
        this.servings-= servings;
    }
}

class HotDog extends Sandwich {
    constructor(name, frankType, condiments){
        super(name, "hotdog bun", frankType, 1);
        this.condiments = condiments;
    }

    getEaten(){
        super.getEaten();
        console.log("Now you have hot dog breath. Go away.");
    }
}

class Bratwurst extends HotDog {
    constructor(name, frankType, condiments, marinade){
        super(name, frankType, condiments);
        this.marinade = marinade;
    }

    getEaten(){
        super.getEaten();
    }
}



// let sandy = new Sandwich("Meatball Sub", "Hoagie", "Meatballs", 4);
// let sandy2 = new Sandwich("Italian", "Italian Roll", "Salami, Ham, and Pepperoni", 3);
// let pbj = new Sandwich()
// console.log("Man, I could really use a " + sandy.name +", that " + sandy.bread + " bread is so delicious, especially with the " + sandy.meat);
// console.log(sandy);
// console.log(sandy2);

// sandy.getEaten();
// sandy2.getEaten(2);

let nathan = new HotDog("Nathan's Famous", "Beef", "Mustard");
console.log(nathan);

nathan.getEaten();

let brat = new Bratwurst("Beer Brat", "Pork", "Mustard", "Beer");
brat.getEaten();