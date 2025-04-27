<template>
    <section class="min-h-screen bg-[#e0f2fe] text-gray-800 px-6 md:px-24">
    
    <!-- <section class="container py-10" id="skills"> -->
        <h2 class="text-2xl font-semibold text-primary mb-6 border-b pb-2">
            <i class="bi bi-tools mr-2"></i>My Skills
        </h2>

        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div v-for="skill in skills" :key="skill.name"
                class="p-4 rounded-xl shadow bg-white hover:shadow-lg transition">
                <h3 class="text-lg font-bold text-primary mb-2">{{ skill.name }}</h3>
                <ul class="text-sm text-gray-700 space-y-1">
                    <li>
                        <strong>Tools:</strong>
                        <ul class="list-disc list-inside pl-2 text-gray-600">
                            <li v-for="tool in skill.tools.split(',')" :key="tool">{{ tool.trim() }}</li>
                        </ul>
                    </li>
                    <li>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            // skills: [
            //     {
            //         name: "Python",
            //         level: "Advanced",
            //         experience_years: 1.5,
            //         tools: "Flask, Django, REST API, FastAPI, automation tasks",
            //         project_examples: "easyhome, easyequity, easynotes, easyquiz",
            //     },
            //     {
            //         name: "Data Structures & Algorithms",
            //         level: "Advanced",
            //         experience_years: 2.0,
            //         tools: "Python, C++",
            //         project_examples: "Optimization in all projects",
            //     },
            //     {
            //         name: "SQL & Databases",
            //         level: "Intermediate",
            //         experience_years: 2.0,
            //         tools: "PostgreSQL, SQLite, MySQL, Schema design, Query optimization",
            //         project_examples: "easyhome, easyequity, easynotes, easyquiz",
            //     },
            //     {
            //         name: "API Development",
            //         level: "Advanced",
            //         experience_years: 1.5,
            //         tools: "RESTful APIs, JWT Auth, Flask-RESTful, FastAPI",
            //         project_examples: "easyhome, easyequity, easynotes, easyquiz",
            //     },
            //     {
            //         name: "Frontend Development",
            //         level: "Beginner",
            //         experience_years: 0.5,
            //         tools: "Vue.js, HTML, CSS, JavaScript",
            //         project_examples: "easyhome, easyequity, easynotes, easyquiz",
            //     },
            //     {
            //         name: "Task Management & Async",
            //         level: "Intermediate",
            //         experience_years: 1.0,
            //         tools: "Celery, Redis",
            //         project_examples: "easyhome, easyequity, easynotes, easyquiz",
            //     },
            // ],
            // skills: [
            //     {
            //         "id": 1,
            //         "name": "Python",
            //         "tools": "Flask, Django, REST API, FastAPI"
            //     },
            //     {
            //         "id": 2,
            //         "name": "Data Structures & Algorithms",
            //         "tools": "Python, C++"
            //     },
            //     {
            //         "id": 3,
            //         "name": "SQL & Databases",
            //         "tools": "PostgreSQL, SQLite, MySQL"
            //     },
            //     {
            //         "id": 4,
            //         "name": "API Development",
            //         "tools": "RESTful APIs, JWT, FastAPI"
            //     },
            //     {
            //         "id": 5,
            //         "name": "Frontend Development",
            //         "tools": "Vue.js, HTML, CSS"
            //     },
            //     {
            //         "id": 6,
            //         "name": "Async Processing",
            //         "tools": "Celery, Redis"
            //     },
            //     {
            //         "id": 7,
            //         "name": "Version Control",
            //         "tools": "Git, GitHub"
            //     },
            //     {
            //         "id": 8,
            //         "name": "Security",
            //         "tools": "JWT, HTTPS, Token-based auth, Flask-Security, CORS"
            //     },
            //     {
            //         "id": 9,
            //         "name": "UI/UX & Web Design",
            //         "tools": "HTML, CSS, JS"
            //     },
            //     {
            //         "id": 10,
            //         "name": "Deployment & Hosting",
            //         "tools": "Vercel, Nginx"
            //     }
            // ]
            skills: [
                {
                    "id": 1,
                    "name": "Python",
                    "tools": "Flask, Django, FastAPI, Pandas, NumPy, Selenium, BeautifulSoup"
                },

                {
                    "id": 3,
                    "name": "SQL & Databases",
                    "tools": "PostgreSQL, MySQL, SQLite, SQLAlchemy, Alembic"
                },
                {
                    "id": 4,
                    "name": "API Development",
                    "tools": "Flask-RESTful, FastAPI, Postman, JWT, OpenAPI"
                },
                {
                    "id": 5,
                    "name": "Frontend Development",
                    "tools": "Vue.js, Bootstrap, Axios, Vite, HTML, JavaScript"
                },
                {
                    "id": 6,
                    "name": "Task Management & Asynchronous Processing",
                    "tools": "Celery, Redis"
                },
                {
                    "id": 7,
                    "name": "Version Control",
                    "tools": "Git, GitHub, GitLab"
                },
                {
                    "id": 8,
                    "name": "Security",
                    "tools": "JWT,HTTPS, Flask-Security"
                },

                {
                    "id": 10,
                    "name": "Deployment & Hosting",
                    "tools": "Vercel, GitHub Actions"
                }
            ]


        };
    },
};
</script>

<style scoped>
/* You can use Tailwind classes inline instead of adding more CSS here */
</style>


<style scoped>
/* === Tailwind Layers === */
@tailwind base;
@tailwind components;
@tailwind utilities;

.card1 {
    @apply bg-[#65d7f1] rounded-2xl md:flex place-items-center my-20 shadow-xl;
    background: linear-gradient(135deg, #ffffff, #f7f9fa);
    border-radius: 1rem;
}

.card-image {
    @apply md:w-1/2 md:rounded-r-2xl md:rounded-l-none rounded-b-2xl flex;
}

.card1:hover {
    transform: translateY(-10px);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
    border: 1px solid #dee2e6;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.card1:hover .project-img {
    transform: scale(1.05);
}

.btn-hover:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
}

@layer utilities {
    .h-850 {
        height: 900px;
    }
}

.skill-card {
    @apply rounded-xl overflow-hidden shadow-lg transition-all duration-300 ease-in-out bg-white;
    backdrop-filter: blur(12px);
    background: rgba(255, 255, 255, 0.85);
}

.skill-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.12);
}

.skill-img {
    width: 100%;
    height: 160px;
    object-fit: contain;
    background-color: #f8f9fa;
    padding: 12px;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    transition: transform 0.3s ease;
}

.skill-card:hover .skill-img {
    transform: scale(1.05);
}

.badge {
    font-size: 0.75rem;
    font-weight: 500;
    border-radius: 0.375rem;
}

.bg-gradient-light {
    background: linear-gradient(135deg, #f8f9fa, #e9ecef);
}

@media (max-width: 576px) {
    .skill-img {
        height: 120px;
    }
}
</style>