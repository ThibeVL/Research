<template>
  <v-card class="pa-4">
    <v-card-title class="text-h5">Boekenlijst</v-card-title>
    <v-list>
      <v-list-item v-for="book in books" :key="book.id">
        {{ book.title }} - {{ book.author }}
        <v-btn @click="removeBook(book.id)" color="red" class="ml-2">X</v-btn>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script setup lang="ts">
import { useBookStore } from '@/stores/bookstore'
import { storeToRefs } from 'pinia'

const bookStore = useBookStore()
const { books } = storeToRefs(bookStore)
const { removeBook } = bookStore
</script>
