<template>
    <section class="min-h-screen py-20 px-6 bg-gradient-to-br from-[#f8f9fb] to-[#eaeef3]">
        <div class="max-w-7xl mx-auto">
            <h2 class="text-5xl font-semibold text-[#121212] mb-16 tracking-tight">
                <span class="border-b-4 border-blue-400 pb-1">My Recent Work</span>
            </h2>

            <div class="grid lg:grid-cols-2 gap-12">
                <!-- Loop through projects -->
                <div v-for="(project, index) in projects" :key="project.name"
                    class="backdrop-blur-lg bg-white/30 border border-white/20 rounded-3xl p-8 shadow-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                    <img :src="project.image" :alt="project.name" class="rounded-xl mb-6 shadow-md" />
                    <h3 :class="index % 2 === 0 ? 'text-blue-800' : 'text-pink-700'"
                        class="text-3xl font-semibold mb-2">{{ project.name }}</h3>
                    <p class="text-gray-700 mb-6 leading-relaxed">{{ project.description }}</p>
                    <div class="flex gap-4">
                        <a :href="project.demoLink" target="_blank"
                            class="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md transition">Live
                            Demo</a>
                        <a :href="project.githubLink" target="_blank"
                            class="bg-gray-900 hover:bg-black text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md transition">GitHub</a>
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
                    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", // Example image URL
                    demoLink: "#", // Replace with actual demo link
                    githubLink: "#", // Replace with actual GitHub link
                },
                {
                    name: "QuizMaster",
                    description: "A quiz app built using Flask and Vue.js. Includes category-wise questions, timed rounds, and real-time leaderboard.",
                    image: "/static/python-icon.png", // Example image path
                    demoLink: "#", // Replace with actual demo link
                    githubLink: "#", // Replace with actual GitHub link
                },
                // Add more projects here
            ],
        };
    },
};
</script>

<style scoped>
/* Add any component-specific styles here */

/* Customize hover effect for project cards */
.project-card:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>