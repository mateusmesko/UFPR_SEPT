export class Allergies {
  constructor(allergyScore) {
    this.allergyScore = allergyScore;
    this.allergens = {
      "eggs": 1,
      "peanuts": 2,
      "shellfish": 4,
      "strawberries": 8,
      "tomatoes": 16,
      "chocolate": 32,
      "pollen": 64,
      "cats": 128
    };
  }

  allergicTo(item) {
    if (this.allergens.hasOwnProperty(item)) {
      return (this.allergyScore & this.allergens[item]) !== 0;
    }
    return false;
  }

  list() {
    const allergies = [];
    for (const item in this.allergens) {
      if (this.allergicTo(item)) {
        allergies.push(item);
      }
    }
    return allergies;
  }
}
