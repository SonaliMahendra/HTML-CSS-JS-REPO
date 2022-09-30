class IceCream {
    constructor(flavor, numSprinkles) {
        this.flavor = flavor;
        this.numSprinkles = numSprinkles;
    }
}
let ice1 = new IceCream("Chocolate", 13);
let ice2 = new IceCream("Vanilla", 0);
let ice3 = new IceCream("Strawberry", 7);
let ice4 = new IceCream("Plain", 18);
let ice5 = new IceCream("ChocolateChip", 3);

function sweetestIcecream(arr) {
    const flavors = {
      Plain: 0,
      Vanilla: 5,
      ChocolateChip: 5,
      Strawberry: 10,
      Chocolate: 10
    };
    let maximum = 0;
    for (item of arr) {
      const { flavor, numSprinkles } = item;
      
      if (flavors[flavor] + numSprinkles > maximum) {
        maximum = flavors[flavor] + numSprinkles;
      }
    }
    return maximum;
  }
console.log(sweetestIcecream([ice1, ice2, ice3, ice4, ice5]));
console.log(sweetestIcecream([ice3, ice1]))
console.log(sweetestIcecream([ice3, ice5]))