<script setup lang="ts">
import BookList from '@/components/BookList.vue';
import BookForm from '@/components/BookForm.vue';
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Boek Beheer</h1>
    <BookForm />
    <BookList />
  </div>
</template>
