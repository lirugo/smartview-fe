<template>
    <v-container class="fill-height">
        <v-sheet width="250" class="mx-auto" color="transparent">
            <v-btn class="mb-2" block v-text="'Sign in with Google'" />

            <v-form fast-fail @submit.prevent="login({ email, password })">
                <v-text-field v-model="email" label="Email" density="compact" single-line hide-details
                    append-inner-icon="mdi-email" class="mb-2" />
                <v-text-field type="password" v-model="password" label="Password" density="compact" single-line hide-details
                    append-inner-icon="mdi-key" class="mb-2" />
                <v-btn type="submit" block v-text="'Sign in'" to="/" />
            </v-form>


            <v-btn block class="mt-2" v-text="'Forgot Password?'" />
        </v-sheet>
    </v-container>
</template>
  
<script lang="ts">
export default {
    data: () => ({
        email: '',
        password: '',
    }),
    methods: {
        login(params: { email: String, password: String }) {
            console.log(`email: ${params.email}, pass: ${params.password}`);
        },
        async particlesLoaded(params: { container: Object }) {
            console.log("Particles container loaded", params.container);
        }
    }
}
</script>
  