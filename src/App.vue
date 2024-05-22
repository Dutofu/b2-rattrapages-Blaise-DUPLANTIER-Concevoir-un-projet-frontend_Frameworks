<template>
  <div id="app">
    <IngredientList />
  </div>
</template>

<script>
import IngredientList from './components/IngredientList.vue';

export default {
  components: {
    IngredientList
  }
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  padding: 20px;
}

#app {
  max-width: 800px;
  margin: auto;
}
</style>
