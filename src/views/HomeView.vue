<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <v-card class="pa-4">
          <v-card-title class="text-h5">Boek Toevoegen</v-card-title>
          <v-form @submit.prevent="submitForm">
            <v-text-field v-model="title" label="Titel" required></v-text-field>
            <v-text-field v-model="author" label="Auteur" required></v-text-field>
            <v-btn type="submit" color="primary">Toevoegen</v-btn>
          </v-form>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card class="pa-4">
          <v-card-title class="text-h5">Boekenlijst</v-card-title>
          <v-list>
            <v-list-item v-for="book in books" :key="book.id">
              {{ book.title }} - {{ book.author }}
              <v-btn @click="removeBook(book.id)" color="red" class="ml-2">X</v-btn>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useBookStore } from '@/stores/bookstore'
import { storeToRefs } from 'pinia'

const bookStore = useBookStore()
const { books } = storeToRefs(bookStore)
const { removeBook } = bookStore

const title = ref('')
const author = ref('')

const submitForm = () => {
  bookStore.addBook({ title: title.value, author: author.value })
  title.value = ''
  author.value = ''
}
</script>
