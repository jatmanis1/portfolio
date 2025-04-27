<template>
    <!-- Projects Section -->
    <div class="banner-2 bg-light-subtle">
        <div class="container py-5" id="work">
            <h3 class="text-start mb-4 fw-bold text-primary-emphasis border-bottom border-3 pb-2">
                <i class="bi bi-laptop me-2 text-primary"></i> My Recent Work
            </h3>

            <!-- Loop through projects -->
            <div v-for="project in projects" :key="project.name"
                class="card1 mb-5 shadow-lg rounded-4 overflow-hidden border border-1 border-light-subtle"
                data-aos="fade-up" data-aos-duration="1000"
                style="transition: transform 0.4s ease, box-shadow 0.4s ease;">
                <div class="row g-0 flex-column flex-md-row hover-effect" style="transition: transform 0.3s ease;">
                    <!-- Text Content -->
                    <div class="col-md-6 p-5 d-flex flex-column justify-content-center bg-white">
                        <h4 class="fw-bold text-primary-emphasis mb-2">{{ project.name }}</h4>
                        <p class="text-secondary">{{ project.description }}</p>

                        <div class="d-flex gap-3 mt-4">
                            <a :href="project.github" target="_blank"
                                class="btn btn-outline-dark rounded-pill px-4 btn-hover">
                                <i class="bi bi-github me-1"></i> GitHub
                            </a>
                            <a :href="project.demo" target="_blank"
                                class="btn btn-outline-success rounded-pill px-4 btn-hover">
                                <i class="bi bi-box-arrow-up-right me-1"></i> Live Demo
                            </a>
                        </div>
                    </div>

                    <!-- Image Section -->
                    <div class="col-md-6 overflow-hidden">
                        <img :src="project.image || './assets/project1.png'" class="img-fluid w-100 h-100 project-img"
                            style="min-height: 100%; object-fit: cover; transition: transform 0.5s ease;"
                            alt="Project Image" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Projects",
    data() {
        return {
            // Sample list of projects, this can be fetched from an API or passed as props
            projects: [
                {
                    name: "Project One",
                    description: "Description of Project One.",
                    github: "https://github.com/project-one",
                    demo: "https://project-one-demo.com",
                    image: "./assets/project1.png", // Provide the path to the image or leave empty to use default
                },
                {
                    name: "Project Two",
                    description: "Description of Project Two.",
                    github: "https://github.com/project-two",
                    demo: "https://project-two-demo.com",
                    image: "./assets/project2.png",
                },
                // Add more projects as needed
            ],
        };
    },
};
</script>

<style scoped>
/* Add any component-specific styles here */
.project-img {
    transition: transform 0.5s ease;
}

.card1:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.hover-effect:hover .project-img {
    transform: scale(1.1);
}
</style>