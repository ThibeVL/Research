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

// Importeer de Capacitor plugins
import { LocalNotifications } from '@capacitor/local-notifications'
import { Haptics, ImpactStyle } from '@capacitor/haptics'

const bookStore = useBookStore()
const { books } = storeToRefs(bookStore)
const { removeBook } = bookStore

const title = ref('')
const author = ref('')

const submitForm = async () => {
  // 1. Boek toevoegen
  bookStore.addBook({ title: title.value, author: author.value })

  // 2. Inputvelden leegmaken
  const savedTitle = title.value
  const savedAuthor = author.value
  title.value = ''
  author.value = ''

  // 3. Vibratie / Haptics
  await Haptics.impact({ style: ImpactStyle.Heavy })

  // 4. Lokale notificatie
  //    (iOS/Android >= 13 vraagt om toestemming, dus we roepen requestPermissions() aan)
  await LocalNotifications.requestPermissions()
  await LocalNotifications.schedule({
    notifications: [
      {
        id: Date.now(), // Uniek ID
        title: 'Boek aangemaakt',
        body: `Je hebt zojuist "${savedTitle}" van ${savedAuthor} toegevoegd.`,
      },
    ],
  })
}
</script>
