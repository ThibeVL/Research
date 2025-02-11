<template>
  <div>
    <h2 class="text-xl font-bold mb-4">Boekenlijst</h2>
    <ul>
      <li v-for="book in books" :key="book.id" class="border p-2 mb-2">
        {{ book.title }} - {{ book.author }}
        <button @click="removeBook(book.id)" class="bg-red-500 text-white px-2 py-1 ml-2">X</button>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { useBookStore } from '@/stores/bookStore';
import { storeToRefs } from 'pinia';

const bookStore = useBookStore();
const { books } = storeToRefs(bookStore);
const { removeBook } = bookStore;
</script>
