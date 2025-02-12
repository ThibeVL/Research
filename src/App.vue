<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Mijn App</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-footer app color="grey lighten-2">
      <span class="ml-4">© {{ new Date().getFullYear() }} - Mijn App</span>
    </v-footer>
  </v-app>
</template>
