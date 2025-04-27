<template>
    <section class="py-20 px-4 bg-gradient-to-br from-pink-100 via-white to-pink-200" id="work">
        <div class="max-w-7xl mx-auto">
            <h3
                class="text-4xl font-extrabold font-eczar text-gray-900 mb-16 border-b-4 border-pink-400 inline-block pb-2">
                <i class="bi bi-stars text-pink-600 mr-2"></i> My Recent Work
            </h3>

            <div v-for="(project, index) in projects" :key="index" class="mb-20">
                <div :class="[
                    index % 2 === 0 ? 'lg:flex' : 'lg:flex lg:flex-row-reverse',
                    'items-center gap-12 group'
                ]">
                    <!-- Image -->
                    <div class="w-full lg:w-1/2 p-4">
                        <div
                            class="bg-white bg-opacity-30 backdrop-blur-md rounded-3xl p-4 shadow-2xl transition-all hover:scale-105 duration-500">
                            <img :src="project.image" :alt="project.name" class="rounded-3xl w-full object-cover" />
                        </div>
                    </div>

                    <!-- Description -->
                    <div class="w-full lg:w-1/2 mt-8 lg:mt-0 px-4 font-work_sans">
                        <h4 class="text-3xl font-semibold text-pink-700 mb-4">{{ project.name }}</h4>
                        <p class="text-gray-700 text-lg mb-6 leading-relaxed">
                            {{ project.description }}
                        </p>
                        <div class="flex gap-4">
                            <a :href="project.github" target="_blank"
                                class="transition-all duration-300 hover:scale-105 bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-full text-sm shadow-md">
                                <i class="bi bi-github mr-2"></i> GitHub
                            </a>
                            <a :href="project.demo" target="_blank"
                                class="transition-all duration-300 hover:scale-105 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full text-sm shadow-md">
                                <i class="bi bi-box-arrow-up-right mr-2"></i> Live Demo
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "ProjectsSection",
    data() {
        return {
            projects: [
                {
                    name: "EasyHome",
                    description: "A home services platform using Django and React. Manage bookings, track requests, and streamline services with a clean UI.",
                    image: "https://parallelstaff.com/wp-content/smush-webp/2024/06/What-Are-the-Benefits-of-Using-Python-for-GUI-Development.png.webp",
                    github: "https://github.com/project1",
                    demo: "https://project1demo.com",
                },
                {
                    name: "QuizMasterjj",
                    description: "A quiz app built using Flask and Vue.js. Includes category-wise questions, timed rounds, and real-time leaderboard.",
                    image: "https://parallelstaff.com/wp-content/smush-webp/2024/06/What-Are-the-Benefits-of-Using-Python-for-GUI-Development.png.webp",
                    github: "https://github.com/project2",
                    demo: "https://project2demo.com",
                },
                // Add more projects as needed
            ],
        };
    },
};
</script>

<style scoped>
/* Optional custom styling here */
</style>
