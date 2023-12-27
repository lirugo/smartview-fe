<template>
    <v-navigation-drawer v-model="store.isNavDrawer" :rail="store.isNavRail" permanent>

        <v-list>
            <v-list-item prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg" title="Sandra Adams"
                subtitle="sandra@gmail.com"></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
            <v-list-item v-for="item in items" :key="item.href" :title="item.title" :to="item.href" exact
                :prepend-icon="item.icon" />
        </v-list>

        <v-spacer></v-spacer>

        <template v-slot:append>
            <v-list density="compact" nav>
                <v-list-item to="/sign-in" prepend-icon="mdi-logout" title="Sign Out" />
            </v-list>
        </template>

    </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { appStore } from '@/store/app'
const store = appStore()

let items = [
    { title: 'Dashboard', icon: 'mdi-view-dashboard-outline', href: '/' },
    { title: 'Campaigns', icon: 'mdi-newspaper-variant-multiple', href: '/campaigns' },
    // { title: 'Company', icon: 'mdi-file-compare', href: '/companies' },
    // { title: 'Partners', icon: 'mdi-handshake-outline', href: '/partners' },
    // { title: 'Users', icon: 'mdi-account-group-outline', href: '/users' },
    // { title: 'Titles', icon: 'mdi-format-title', href: '/titles' },
    // { title: 'Reports', icon: 'mdi-file-excel-outline', href: '/reports' },
];

const signOut = () => {
    // Your sign out logic here
    console.log('Signing out...');
};
</script>