<template>
  <v-card class="pa-4">
    <v-card-title class="text-h5">Boekenlijst</v-card-title>
    <v-list style="max-height: 400px; overflow-y: auto">
      <v-list-item v-for="book in books" :key="book.id">
        <v-icon color="primary">mdi-book</v-icon>
        {{ book.title }} - {{ book.author }}
        <v-btn @click="removeBook(book.id)" color="red" class="ml-2">X</v-btn>
      </v-list-item>
    </v-list>
  </v-card>
</template>
