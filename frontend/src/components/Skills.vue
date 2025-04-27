<template>
  <section class="min-h-screen bg-[#e0f2fe] text-gray-800 px-6 md:px-24 py-16">
    <div class="max-w-7xl mx-auto">
      <!-- Section Heading -->
      <h3 class="text-3xl font-bold inline-block border-b-4 border-blue-600 text-blue-600 mb-12">
        <i class="bi bi-tools mr-2"></i>My Skills
      </h3>

      <!-- Skills Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <!-- <div v-for="skill in skills" :key="skill.id" class="p-6 rounded-2xl bg-white border border-gray-200 shadow-md hover:shadow-blue-100 transform hover:-translate-y-2 transform: translateY(-4px)
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15) transition-all" data-aos="fade-up  "> -->
        <div v-for="skill in skills" :key="skill.id"
          class="p-6 rounded-2xl bg-white border border-gray-200 shadow-md hover:shadow-blue-100 transform hover:translate-y-[-4px] transition-all"
          data-aos="fade-up">
          <h4 class="text-xl font-semibold text-blue-600 mb-4">
            {{ skill.name }}
          </h4>
          <ul class="space-y-1 text-gray-700">
            <li><strong>Tools:</strong></li>
            <li v-for="tool in skill.tools.split(',')" :key="tool" class="pl-4 list-disc list-inside">
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
  { "name": "Python", "level": "Expert", "experience_years": "2", "tools": "Flask, Django, FastAPI, Pandas, NumPy, Selenium, BeautifulSoup" },
  { "name": "SQL & Databases", "level": "Expert", "experience_years": "2", "tools": "PostgreSQL, MySQL, SQLite, SQLAlchemy, Alembic" },
  { "name": "API Development", "level": "Expert", "experience_years": "2", "tools": "Flask-RESTful, FastAPI, Postman, JWT, OpenAPI" },
  { "name": "Frontend Development", "level": "Expert", "experience_years": "2", "tools": "Vue.js, Bootstrap, Axios, Vite, HTML, JavaScript" },
  { "name": "Task Management & Asynchronous Processing", "level": "Expert", "experience_years": "2", "tools": "Celery, Redis" },
  { "name": "Version Control", "level": "Expert", "experience_years": "2", "tools": "Git, GitHub, GitLab" },
  { "name": "Security", "level": "Expert", "experience_years": "2", "tools": "JWT, HTTPS, Flask-Security" },
  { "name": "Deployment & Hosting", "level": "Expert", "experience_years": "2", "tools": "Vercel, GitHub Actions" },
])

onMounted(() => {
  AOS.init({ once: true, duration: 600 })
})
</script>

<style scoped></style>
