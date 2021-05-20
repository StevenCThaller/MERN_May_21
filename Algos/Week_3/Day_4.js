/* 
    Create a function to determine the max amount of
    servings that can be made based on a recipe and
    available ingredients.
    Input:
        - recipe object where keys are ingredient names
        and values are unit required (int)
        - available ingredients object where keys are ingredient
        names and values are unit available (int)
    Output:
        int (max servings)
    Side note (not needed for solution): Realistically, the values
    would be an object as well with the keys: unit (unit of measure), and amount.
    If the available ingredient was stored in a different unit,
    a conversion table would be needed to convert units of measure.
*/
const recipe1 = {
    "organic fat": 99,
    "live squid": 1,
    "birds nest": 1,
    "fried flesh": 1,
    spicy: 5,
    "gourmet memes": 4200,
};

const available1 = {
    "organic fat": 990,
    "live squid": 1,
    "birds nest": 10,
    "fried flesh": 10,
    spicy: 50,
    "gourmet memes": 42000,
    sugar: 9001,
    spice: 5,
    "everything nice": 1,
    "triple point water": 5,
};
const expected1 = 1;

function getMaxServings(recipe, available){
    let limitingFactor = 0; // we'll need to keep track of which thing is limiting us from making more of a recipe
    // but we don't know off hand what any of our ingredients actually are, or what amount we have, or what amount we can make.

    for(const ingredient in recipe){ // check all of the ingredients in the recipe
        if(!available.hasOwnProperty(ingredient)){ // if our object of available ingredients does not have the ingredient from the recipe
            return 0; // return 0, because it means we can't make the recipe
        }

        let maxServingsForIngredient = available[ingredient] / recipe[ingredient]; // let's calculate how many servings we can generate per each ingredient

        if(limitingFactor === 0 || maxServingsForIngredient < limitingFactor){ // and, if our limiting factor is still null, just go ahead and set it as the limiting factor, 
            // since it means this is the first ingredient we've seen. or, if our max servings for this ingredient is less than our current limiting ingredient amount, set it
            // as such
            limitingFactor = maxServingsForIngredient;
        }
    }

    return Max.floor(limitingFactor); // now, it's quite possible that we've found a situation where we can make 1.2087 of a recipe.
    // realistically, we don't want to make 1/12th of a lasagna, so we'll just round it down and return it.
}