<!-- RecentWork.vue -->
<template>
    <section class="min-h-screen bg-[#e0f2fe] text-gray-800 px-6 md:px-24">
      <!-- Toggle & Title -->
      <div class="fixed top-4 right-6 z-50">
        <button @click="toggleDark"
          class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 p-2 rounded-full shadow-md transition-all duration-300">
          <Sun class="w-5 h-5 dark:hidden" />
          <Moon class="w-5 h-5 hidden dark:inline" />
        </button>
      </div>
  
      <div class="max-w-7xl mx-auto">
        <h3 class="heading3 border-b-4 font-bold inline-block mb-12 text-blue-700">
          <i class="bi bi-laptop font-bold me-2 text-blue-700"></i> My Recent Work
        </h3>
  
        <!-- Top 3 Projects -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <WorkCard v-for="(project, index) in topProjects" :key="index" :title="project.name"
            :description="project.description" :icon="'home'" :img="project.image" :demoLink="project.demo"
            :githubLink="project.github" :iconColor="'text-blue-700 dark:text-blue-300'" data-aos="fade-up"
            :delay="index * 200" class="work-card mx-auto" />
        </div>
  
        <div class="mt-10 w-full flex justify-end items-center gap-3 text-right cursor-pointer group"
          @click="showModal = true">
          <span
            class="text-lg font-semibold text-gray-800 dark:text-blue-700 group-hover:text-blue-900 transition">
            Explore All Projects
          </span>
          <span class="text-2xl text-blue-700 group-hover:translate-x-1 transition-transform duration-300">
            →
          </span>
        </div>
      </div>
  
      <!-- Modal -->
      <div v-if="showModal" class="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
        <div
          class="relative bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 max-w-5xl w-full overflow-y-auto max-h-[90vh]">
          <div class="relative mb-6">
            <h2 class="text-xl font-semibold text-blue-700 dark:text-blue-300 pr-12">All Projects</h2>
            <button @click="showModal = false"
              class="absolute top-0 right-0 text-gray-500 hover:text-red-500 text-2xl w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              aria-label="Close">
              &times;
            </button>
          </div>
  
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <WorkCard v-for="(project, index) in moreProjects" :key="index" :title="project.name"
              :description="project.description" :icon="'home'" :img="project.image" :demoLink="project.demo"
              :githubLink="project.github" :iconColor="'text-blue-700 dark:text-blue-300'" class="work-card" />
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue'
  import VanillaTilt from 'vanilla-tilt'
  import AOS from 'aos'
  import 'aos/dist/aos.css'
  
  import { Sun, Moon } from 'lucide-vue-next'
  import WorkCard from './WorkCard.vue'
  
  const toggleDark = () => {
    document.documentElement.classList.toggle('dark')
  }
  
  const showModal = ref(false)
  
  const projects = ref([
    {
      name: "EasyHome",
      description: "A home services platform using Django and React.",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      github: "https://github.com/yourgithub/easyhome",
      demo: "https://github.com/demo/easyhome",
    },
    {
      name: "QuizMaster",
      description: "A quiz app built with Flask and Vue.js.",
      image: "https://parallelstaff.com/wp-content/smush-webp/2024/06/What-Are-the-Benefits-of-Using-Python-for-GUI-Development.png.webp",
      github: "https://github.com/yourgithub/quizmaster",
      demo: "#",
    },
    {
      name: "Project X",
      description: "Yet another great project using Vue and Flask.",
      image: "https://cdn-icons-png.flaticon.com/512/919/919851.png",
      github: "#",
      demo: "#",
    },
    {
      name: "Secret Tool",
      description: "A developer tool that simplifies backend tasks.",
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
      github: "#",
      demo: "#",
    },
  ])
  
  const topProjects = computed(() => projects.value.slice(0, 3))
  const moreProjects = computed(() => projects.value.slice(0))
  
  onMounted(() => {
    AOS.init()
    VanillaTilt.init(document.querySelectorAll('[data-tilt]'))
  })
  </script>
  
  <style scoped>
  .heading3 {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
  
  /* Unified WorkCard Styles */
  .work-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    max-height: 500px;
    overflow: hidden;
    padding: 1.5rem;
    border-radius: 1rem;
    background-color: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease-in-out;
  }
  
  .dark .work-card {
    background-color: rgba(30, 41, 59, 0.9);
    border: 1px solid rgba(255, 255, 255, 0.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  }
  
  .work-card:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }
  
  .work-card h3,
  .work-card p {
    color: #1e293b;
  }
  
  .dark .work-card h3,
  .dark .work-card p {
    color: #e2e8f0;
  }
  </style>
  