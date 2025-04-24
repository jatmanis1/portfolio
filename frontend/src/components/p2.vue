<template>
    <section class="banner-2 py-16" id="work">
        <div class="container mx-auto">
            <h3 class="heading3 border-b-4 border-pink-400 inline-block mb-12">
                <i class="bi bi-laptop me-2 text-pink-600"></i> My Recent Work
            </h3>

            <!-- Loop through the projects -->
            <div v-for="(project, index) in projects" :key="project.name" class="mb-20">
                <div :class="index % 2 === 0 ? 'lg:flex' : 'lg:flex lg:flex-row-reverse'" class="items-center gap-12">

                    <!-- Image -->
                    <div class="w-full lg:w-1/2 overflow-hidden rounded-2xl shadow-lg">
                        <img :src="project.image || '../assets/project1.png'" alt="Project Image"
                            class="w-full h-full object-cover rounded-2xl transition-transform duration-500 hover:scale-105" />
                    </div>

                    <!-- Text -->
                    <div class="w-full lg:w-1/2 mt-8 lg:mt-0 px-4">
                        <h4 class="project-title mb-4">{{ project.name }}</h4>
                        <p class="text-gray-600 text-lg mb-6 font-work_sans leading-relaxed">
                            {{ project.description }}
                        </p>
                        <div class="flex gap-4">
                            <a :href="project.github" target="_blank" class="submit-button px-6 py-2 text-sm">
                                <i class="bi bi-github me-2"></i> GitHub
                            </a>
                            <a :href="project.demo" target="_blank"
                                class="hello-button px-6 py-2 text-sm rounded-2xl font-work_sans">
                                <i class="bi bi-box-arrow-up-right me-2"></i> Live Demo
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
    name: "Projects",
    data() {
        return {
            // Sample list of projects, you can replace this with an API call or props
            projects: [
                {
                    name: "Project One",
                    description: "Description of Project One.",
                    github: "https://github.com/project-one",
                    demo: "https://project-one-demo.com",
                    image: "https://parallelstaff.com/wp-content/smush-webp/2024/06/What-Are-the-Benefits-of-Using-Python-for-GUI-Development.png.webp",
                    // image: "../assets/project1.png", // Image path
                },
                {
                    name: "Project Two",
                    description: "Description of Project Two.",
                    github: "https://github.com/project-two",
                    demo: "https://project-two-demo.com",
                    image: "https://parallelstaff.com/wp-content/smush-webp/2024/06/What-Are-the-Benefits-of-Using-Python-for-GUI-Development.png.webp",
                    // image: "../assets/project2.png", // Image path
                },
                // Add more projects as needed
            ],
        };
    },
};
</script>

<style scoped>
/* Add any component-specific styles here */
.project-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: #333;
}

.submit-button {
    background-color: #333;
    color: #fff;
    font-size: 1rem;
    border-radius: 0.5rem;
    transition: background-color 0.3s ease;
}

.submit-button:hover {
    background-color: #1a202c;
}

.hello-button {
    background-color: #38b2ac;
    color: #fff;
    font-size: 1rem;
    border-radius: 1.5rem;
    transition: background-color 0.3s ease;
}

.hello-button:hover {
    background-color: #319795;
}

/* Customizing image hover effect */
img:hover {
    transform: scale(1.05);
}
</style>