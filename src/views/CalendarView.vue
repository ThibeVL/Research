<template>
  <v-container>
    <v-card class="pa-4">
      <v-card-title class="text-h5">Kalender</v-card-title>
      <v-divider></v-divider>
      <!-- Vuetify 3 labs calendar -->
      <v-calendar
        v-model:focus="focus"
        color="primary"
        style="height: 500px;"
      ></v-calendar>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const focus = ref(new Date().toISOString().slice(0, 10))
</script>
