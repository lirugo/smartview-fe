<template>
    <v-container class="fill-height">
        <v-sheet width="250" class="mx-auto" color="transparent">
            <v-btn class="mb-2" block v-text="'Sign in with Google'" />

            <v-form fast-fail @submit.prevent="login({ email, password })">
                <v-text-field v-model="email" label="Email" density="compact" single-line hide-details
                    append-inner-icon="mdi-email" class="mb-2" />
                <v-text-field type="password" v-model="password" label="Password" density="compact" single-line hide-details
                    append-inner-icon="mdi-key" class="mb-2" />
                <transition name="bounce">
                    <v-btn type="submit" block v-text="'Sign in'" to="/" />
                </transition>
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
  
<style scoped>
.bounce-enter-active {
    animation: bounce-in 3.5s;
}

.bounce-leave-active {
    animation: bounce-out 3.5s;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(1.5);
    }

    100% {
        transform: scale(1);
    }
}

@keyframes bounce-out {
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.5);
    }

    100% {
        transform: scale(0);
    }
}
</style>