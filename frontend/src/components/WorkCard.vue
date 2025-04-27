<template>
    <div class="work-card flex flex-col" data-tilt>
        <!-- Image -->
        <div v-if="img" class="mb-4">
            <img :src="img" alt="project image" class="w-full h-32 object-contain mx-auto" />
        </div>

        <!-- Title -->
        <h3 class="text-xl font-semibold mb-2 text-center">{{ title }}</h3>

        <!-- Description -->
        <p class="text-gray-600 dark:text-gray-300 text-sm text-center mb-4">
            {{ description }}
        </p>

        <!-- Buttons -->
        <div class="flex flex-wrap justify-center gap-3 mt-auto w-full">
            <a :href="demoLink" target="_blank" rel="noopener noreferrer"
                class="bg-blue-600 text-white text-sm px-4 py-2 rounded-full hover:bg-blue-700 transition w-full sm:w-auto text-center">
                Live Demo
            </a>
            <a :href="githubLink" target="_blank" rel="noopener noreferrer"
                class="bg-gray-900 text-white text-sm px-4 py-2 rounded-full hover:bg-gray-800 transition w-full sm:w-auto text-center">
                GitHub
            </a>
        </div>
    </div>
</template>

<script setup>
defineProps(["title", "description", "img", "demoLink", "githubLink"])
</script>

<style scoped>
.work-card {
    padding: 1.5rem;
    border-radius: 1rem;
    background-color: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease-in-out;
    max-height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.work-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.dark .work-card {
    background-color: rgba(30, 41, 59, 0.9);
    border: 1px solid rgba(255, 255, 255, 0.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
}
</style>