<template>
  <form @submit.prevent="submitForm" class="p-4 border rounded">
    <input v-model="title" placeholder="Titel" required class="border p-2 w-full mb-2" />
    <input v-model="author" placeholder="Auteur" required class="border p-2 w-full mb-2" />
    <button type="submit" class="bg-blue-500 text-white px-4 py-2">Toevoegen</button>
  </form>
</template>
<script setup>
import { ref } from 'vue';
import { useBookStore } from '@/stores/bookStore';

const bookStore = useBookStore();
const title = ref('');
const author = ref('');

const submitForm = () => {
  bookStore.addBook({ title: title.value, author: author.value });
  title.value = '';
  author.value = '';
};
</script>
