<template>
    <nav class="container px-6 mx-auto md:flex md:justify-between md:items-center">
        <div class="flex items-center justify-between">
            <div class="relative w-16 h-16">
                <img class="rounded-full border border-gray-100 shadow-sm" src="../assets/devloper-img.jpg"
                    alt="user image" />
            </div>

            <!-- Mobile menu toggle -->
            <div @click="toggleMenu" class="flex md:hidden">
                <button type="button" class="text-gray-800 hover:text-gray-400 focus:outline-none">
                    <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                        <path fill-rule="evenodd"
                            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                    </svg>
                </button>
            </div>
        </div>

        <!-- Navigation links -->
        <ul :class="showMenu ? 'flex' : 'hidden'"
            class="flex-col items-end mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0">
            <li class="menu-button"><a href="#">Home</a></li>
            <li class="menu-button"><a href="#work" v-smooth-scroll>Works</a></li>
            <li class="menu-button"><a href="#about" v-smooth-scroll>About</a></li>
        </ul>
    </nav>
</template>

<script setup>
import { ref } from 'vue'

const showMenu = ref(false)
const toggleMenu = () => {
    showMenu.value = !showMenu.value
}
</script>

<style scoped>
.menu-button a {
    @apply text-lg text-gray-800 hover:text-blue-600 transition;
}
</style>