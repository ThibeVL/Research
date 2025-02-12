<template>
  <v-card class="pa-4">
    <v-card-title class="text-h5">Boek Toevoegen</v-card-title>
    <v-form @submit.prevent="submitForm">
      <v-text-field v-model="title" label="Titel" required></v-text-field>
      <v-text-field v-model="author" label="Auteur" required></v-text-field>
      <v-btn type="submit" color="primary">Toevoegen</v-btn>
    </v-form>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'
import { useBookStore } from '@/stores/bookStore'

const bookStore = useBookStore()
const title = ref('')
const author = ref('')

const submitForm = () => {
  bookStore.addBook({ title: title.value, author: author.value })
  title.value = ''
  author.value = ''
}
</script>
