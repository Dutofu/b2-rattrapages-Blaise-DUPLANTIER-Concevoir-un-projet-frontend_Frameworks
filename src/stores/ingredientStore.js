import { defineStore } from 'pinia';

export const useIngredientStore = defineStore('ingredient', {
  state: () => ({
    ingredients: []
  }),
  actions: {
    addIngredient(name, quantity) {
      this.ingredients.push({ name, quantity, checked: false });
    },
    removeIngredient(index) {
      this.ingredients.splice(index, 1);
    },
    toggleChecked(index) {
      this.ingredients[index].checked = !this.ingredients[index].checked;
    }
  }
});
