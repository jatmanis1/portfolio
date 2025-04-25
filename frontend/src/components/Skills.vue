<template>
  <section class="min-h-screen bg-[#e0f2fe] text-gray-800 px-6 md:px-24 py-16">
    <div class="max-w-7xl mx-auto">
      <!-- Section Heading -->
      <h3 class="text-3xl font-bold inline-block border-b-4 border-blue-600 text-blue-600 mb-12">
        <i class="bi bi-tools mr-2"></i>My Skills
      </h3>

      <!-- Skills Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div
          v-for="skill in skills"
          :key="skill.id"
          class="p-6 rounded-2xl bg-white border border-gray-200 shadow-md hover:shadow-blue-100 transform hover:-translate-y-2 transition-all"
          data-aos="fade-up  "
        >
          <h4 class="text-xl font-semibold text-blue-600 mb-4">
            {{ skill.name }}
          </h4>
          <ul class="space-y-1 text-gray-700">
            <li><strong>Tools:</strong></li>
            <li
              v-for="tool in skill.tools.split(',')"
              :key="tool"
              class="pl-4 list-disc list-inside"
            >
              {{ tool.trim() }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const skills = ref([
  { id: 1, name: 'Python', tools: 'Flask, Django, FastAPI, Pandas, NumPy, Selenium, BeautifulSoup' },
  { id: 3, name: 'SQL & Databases', tools: 'PostgreSQL, MySQL, SQLite, SQLAlchemy, Alembic' },
  { id: 4, name: 'API Development', tools: 'Flask-RESTful, FastAPI, Postman, JWT, OpenAPI' },
  { id: 5, name: 'Frontend Development', tools: 'Vue.js, Bootstrap, Axios, Vite, HTML, JavaScript' },
  { id: 6, name: 'Task Management & Asynchronous Processing', tools: 'Celery, Redis' },
  { id: 7, name: 'Version Control', tools: 'Git, GitHub, GitLab' },
  { id: 8, name: 'Security', tools: 'JWT, HTTPS, Flask-Security' },
  { id: 10, name: 'Deployment & Hosting', tools: 'Vercel, GitHub Actions' },
])

onMounted(() => {
  AOS.init({ once: true, duration: 600 })
})
</script>

<style scoped>
/* No extra CSS needed — clean Tailwind utility styling is applied */
</style>
