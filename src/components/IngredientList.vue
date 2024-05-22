<template>
  <div>
    <h1>Liste des Ingrédients</h1>
    <form @submit.prevent="addIngredient">
      <input v-model="newIngredientName" placeholder="Nom de l'ingrédient" required />
      <input v-model.number="newIngredientQuantity" type="number" placeholder="Quantité" required />
      <button type="submit">Ajouter</button>
    </form>
    <ul>
      <li v-for="(ingredient, index) in ingredients" :key="index">
        <!-- Ajouter une case à cocher -->
        <input type="checkbox" v-model="ingredient.checked" @change="toggleChecked(index)" />
        <!-- Appliquer un style barré si l'ingrédient est coché -->
        <span :style="{ textDecoration: ingredient.checked ? 'line-through' : 'none' }">
          {{ ingredient.quantity }} {{ ingredient.name }}
        </span>
        <button @click="removeIngredient(index)">Supprimer</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useIngredientStore } from '../stores/ingredientStore';

export default {
  setup() {
    const ingredientStore = useIngredientStore();
    const newIngredientName = ref('');
    const newIngredientQuantity = ref(1);

    const addIngredient = () => {
      ingredientStore.addIngredient(newIngredientName.value, newIngredientQuantity.value);
      newIngredientName.value = '';
      newIngredientQuantity.value = 1;
    };

    const removeIngredient = (index) => {
      ingredientStore.removeIngredient(index);
    };

    const toggleChecked = (index) => {
      ingredientStore.toggleChecked(index);
    };

    return {
      ingredients: ingredientStore.ingredients,
      newIngredientName,
      newIngredientQuantity,
      addIngredient,
      removeIngredient,
      toggleChecked
    };
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

button {
  margin-left: 10px;
}
</style>
