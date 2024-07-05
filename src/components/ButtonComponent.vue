<template>
  <div class="button">
    <slot></slot>
  </div>
</template>

<style>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Verdana, sans-serif;
  width: 100px;
  height: 100px;
  background-color: rgb(5, 5, 5);
  border: 1px solid white;
}

.button:hover {
  cursor: pointer;
  background-color: black;
}
</style>
