<template>
  <div class="display">
    <slot></slot>
  </div>
</template>

<style>
/* Estilo para remover a cor do scroll */
::-webkit-scrollbar {
  background-color: transparent; /* Cor de fundo do scroll */
  width: 10px; /* Largura do scroll */
}

/* Estilo para remover a cor do thumb (alça do scroll) */
::-webkit-scrollbar-thumb {
  background-color: transparent; /* Cor do thumb */
}
.display {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 100px;
  background-color: rgb(5, 5, 5);
  border: 1px solid white;
  font-size: xx-large;
  text-overflow: ellipsis;
  overflow: auto;
  white-space: nowrap;
  text-align: center;
}
</style>
