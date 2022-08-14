<template>
  <!-- App.vue -->

  <v-app>
    <v-navigation-drawer app v-if='false'>
      <!-- -->
    </v-navigation-drawer>

    <v-app-bar app>
      <!-- -->
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-bottom-navigation color="accent" app grow>
      <v-btn>
        <span>Home</span>

        <v-icon>fa-solid fa-house</v-icon>
      </v-btn>

      <v-btn>
        <span>Nearby</span>

        <v-icon>fa-solid fa-location-dot</v-icon>
      </v-btn>

      <v-btn>
        <span>Favorites</span>

        <v-icon>fa-solid fa-heart</v-icon>
      </v-btn>

      <v-btn>
        <span>User</span>

        <v-icon>fa-solid fa-user</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>
