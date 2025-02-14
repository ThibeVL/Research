<template>
  <v-app>
    <!-- Navigatiebalk -->
    <v-app-bar color="primary" dark>
      <v-toolbar-title>Mijn App</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/" variant="text">Home</v-btn>
      <v-btn to="/calendar" variant="text">Kalender</v-btn>
    </v-app-bar>

    <!-- Pagina content -->
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
