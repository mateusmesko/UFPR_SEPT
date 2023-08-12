export class Allergies {
  constructor(allergyScore) {
    this.score = allergyScore;
    this.allergenValues = {
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

  isAllergicTo(item) {
    if (this.allergenValues.hasOwnProperty(item)) {
      return (this.score & this.allergenValues[item]) !== 0;
    }
    return false;
  }

  getList() {
    const allergicItems = [];
    for (const item in this.allergenValues) {
      if (this.isAllergicTo(item)) {
        allergicItems.push(item);
      }
    }
    return allergicItems;
  }
}
