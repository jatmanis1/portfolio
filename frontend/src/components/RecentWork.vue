<!-- RecentWork.vue -->
<template>
  <section id="work" class="min-h-screen bg-[#e0f2fe] text-gray-800 px-6 md:px-24">
    <!-- Toggle & Title -->
    <!-- <div class="fixed top-4 right-6 z-50">
      <button @click="toggleDark"
        class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 p-2 rounded-full shadow-md transition-all duration-300">
        <Sun class="w-5 h-5 dark:hidden" />
        <Moon class="w-5 h-5 hidden dark:inline" />
      </button>
    </div> -->

    <div class="max-w-7xl mx-auto">
      <h3 class="heading3 border-b-4 font-bold inline-block mb-12 text-blue-700">
        <i class="bi bi-laptop font-bold me-2 text-blue-700"></i> My Recent Work
      </h3>

      <!-- Top 3 Projects -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <WorkCard v-for="(project, index) in topProjects" :key="index" :title="project.name"
          :description="project.description" :icon="'home'" :img="project.image" :demoLink="project.website_link"
          :githubLink="project.github_link" :iconColor="'text-blue-700 dark:text-blue-300'" data-aos="fade-up"
          :delay="index * 200" class="work-card mx-auto" />
      </div>

      <!-- <div class="mt-10 w-full flex justify-end items-center gap-3 text-right cursor-pointer group"
          @click="showModal = true">
          <span
            class="text-lg font-semibold text-gray-800 dark:text-blue-700 group-hover:text-blue-900 transition">
            Explore All Projects
          </span>
          <span class="text-2xl text-blue-700 group-hover:translate-x-1 transition-transform duration-300">
            →
          </span>
        </div> -->
    </div>

    <!-- Modal -->
    <!-- <div v-if="showModal" class="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
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
    </div> -->
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

const projects = ref(

       
    {
        "id": 3,
        "name": "EasyEquity",
        "description": "An app for managing and viewing equity and stock-related resources and extra filters for stocks which are only available at our site.",
        "tools_used": "Django, Vue.js, Postgresql, Redis, Celery",
        "start_date": "2024-02-01",
        "end_date": "2024-12-01",
        "github_link": "https://github.com/jatmanis1/easyequity",
        "website_link": "https://easyequity.vercel.app",
        "created_at": "2025-04-27T13:32:18.474474Z",
        "updated_at": "2025-04-27T13:35:17.019849Z"
    },
    {
        "id": 2,
        "name": "AxioStudy",
        "description": "Website to provide and share study notes for students, with admin, student roles.",
        "tools_used": "Django, Bootstrap, Vue.js Postgresql,",
        "start_date": "2024-08-01",
        "end_date": "2025-05-01",
        "github_link": "https://github.com/jatmanis1/axiostudy",
        "website_link": "https://axiostudy.vercel.app/",
        "created_at": "2025-04-27T13:25:10.010068Z",
        "updated_at": "2025-04-27T16:48:01.575877Z"
    },
    {
        "id": 1,
        "name": "AxioHome",
        "description": "A FullStack platform for household services with admin, service professionals, and customer roles.",
        "tools_used": "Flask, Vue.js, Postgresql, Redis, Celery",
        "start_date": "2025-01-01",
        "end_date": "2025-03-01",
        "github_link": "https://github.com/jatmanis1/eh_live",
        "website_link": "https://axiohome.vercel.app/",
        "created_at": "2025-04-27T13:13:03.607814Z",
        "updated_at": "2025-04-27T16:41:38.786205Z"
    },
  {
   "id": 4,
        "name": "Morse Code Arduino Communication System",
        "description": "Built a two-way communication system using Morse code and Arduino boards.",
        "tools_used": "Arduino, C++",
        "start_date": "2025-02-01",
        "end_date": "2025-02-15",
        "github_link": "https://github.com/jatmanis1/morse_code",
        "website_link": null,
        "created_at": "2025-04-27T13:36:12.677917Z",
        "updated_at": "2025-04-27T13:36:12.677933Z"
    }
])

const topProjects = computed(() => projects.value.slice(0))
const moreProjects = computed(() => projects.value.slice(0))

onMounted(() => {
  AOS.init()
  VanillaTilt.init(document.querySelectorAll('[data-tilt]'))
})
</script> <!-- 

<script setup>
import { ref, computed, onMounted } from 'vue'
import VanillaTilt from 'vanilla-tilt'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { Sun, Moon } from 'lucide-vue-next'
import WorkCard from './WorkCard.vue'
import axios from 'axios'

const toggleDark = () => {
  document.documentElement.classList.toggle('dark')
}

const showModal = ref(false)

// backend URL
// const backendUrl = 'https://your-backend.com' // <-- replace with your actual backend URL
const backendUrl = import.meta.env.VITE_BACKEND_URL

const projects = ref([])

const topProjects = computed(() => projects.value.slice(0))
const moreProjects = computed(() => projects.value.slice(0))

const fetchProjects = async () => {
  try {
    const response = await axios.get(`${backendUrl}/api/projects/`)
    console.log('Projects:', response.data)  // Debugging line
    projects.value = response.data || []  // assuming your backend returns { projects: [...] }
  } catch (error) {
    console.error('Failed to fetch projects:', error)
  }
}

onMounted(() => {
  AOS.init()
  VanillaTilt.init(document.querySelectorAll('[data-tilt]'))
  fetchProjects() // call API when mounted
})
</script>-->

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
