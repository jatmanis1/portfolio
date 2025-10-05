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
  {
    "name": "Python",
    "level": "Expert",
    "experience_years": "2",
    "tools": "Pandas, NumPy, SciPy, Jupyter Notebook, Matplotlib, Seaborn, Plotly, Django, Flask, FastAPI, Selenium, BeautifulSoup"
  },
  {
    "name": "SQL & Databases",
    "level": "Advanced",
    "experience_years": "2",
    "tools": "PostgreSQL, MySQL, SQLite, SQLAlchemy, Redis, Alembic, Excel"
  },
  {
    "name": "Data Visualization",
    "level": "Advanced",
    "experience_years": "2",
    "tools": "Matplotlib, Seaborn, Plotly, Looker Studio"
  },
  {
    "name": "Statistics & Forecasting",
    "level": "Intermediate",
    "experience_years": "1.5",
    "tools": "Hypothesis Testing, Regression, Time Series"
  },
  {
    "name": "Machine Learning for Analytics",
    "level": "Intermediate",
    "experience_years": "1",
    "tools": "Scikit-learn, Clustering (K-means), Regression, Classification"
  },
  {
    "name": "Data Engineering & ETL",
    "level": "Intermediate",
    "experience_years": "1",
    "tools": "Pandas (data wrangling), Excel Automation (OpenPyXL)"
  },
  {
    "name": "LLM Integration & AI Agents",
    "level": "Intermediate",
    "experience_years": "1",
    "tools": "LangChain, OpenAI API, Hugging Face Transformers, RAG (Retrieval-Augmented Generation), Agentic Workflows"
  },
  {
    "name": "Automation & Workflows",
    "level": "Advanced",
    "experience_years": "1.5",
    "tools": "Celery, Redis, Playwright, Selenium, Python Automation Scripts"
  },
  {
    "name": "API Development",
    "level": "Advanced",
    "experience_years": "2",
    "tools": "Flask-RESTful, FastAPI, Postman, JWT, OpenAPI"
  },
  {
    "name": "Frontend Development",
    "level": "Intermediate",
    "experience_years": "2",
    "tools": "Vue.js, Bootstrap, Axios, Vite, HTML, JavaScript"
  },
  {
    "name": "Version Control & Deployment",
    "level": "Advanced",
    "experience_years": "2",
    "tools": "Git, GitHub, GitLab, GitHub Actions, Streamlit, Vercel, Docker"
  },
  {
    "name": "Security",
    "level": "Advanced",
    "experience_years": "2",
    "tools": "JWT, HTTPS, Flask-Security"
  }
]
)

onMounted(() => {
  AOS.init({ once: true, duration: 600 })
})
</script> <!-- 

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import AOS from 'aos'
import 'aos/dist/aos.css'

const skills = ref([])
// console.log($)
const fetchSkills = async () => {
  try {
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    console.log('Backend URL:', backendUrl)
    const response = await axios.get(`${backendUrl}/api/skills/`)
    skills.value = response.data 
    console.log(skills, response)  // Adjust if needed based on real API
  } catch (error) {
    console.error('Failed to fetch skills:', error)
  }
}

onMounted(() => {
  fetchSkills()
  AOS.init({ once: true, duration: 600 })
})
</script>-->

<style scoped></style>
