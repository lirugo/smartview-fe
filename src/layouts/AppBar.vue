<template>
  <v-app-bar flat>

    <v-spacer></v-spacer>

    <v-responsive max-width="200">
      <v-img src="@/assets/logo_light.svg" class="pr-5" />
    </v-responsive>

  </v-app-bar>
</template>

<script lang="ts" >
export default {
  data: () => ({
    breadcrumbs: [
      { text: 'Campaigns', disabled: false, href: 'breadcrumbs_dashboard' },
      { text: 'Test 2021', disabled: false, href: 'breadcrumbs_dashboard' },
      { text: 'Facts', disabled: false, href: 'breadcrumbs_dashboard' },
    ],
  })
}
</script>