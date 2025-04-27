<template>
  <!-- <div class="min-h-screen bg-cover bg-center bg-no-repeat bg-[url('./assets/bg-img.jpg')]"> -->
  <!-- Your entire content goes here -->

  <div class="banner-1">
    <!-- NavBar -->
    <Navbar />
    <!-- End Navbar -->

    <HeroSection />
  </div>
  <!-- <div class="h-[2px] w-full bg-gray-200  opacity-60"></div> -->
  <!-- <div class="w-full border-t border-gray-300 opacity-70 "></div> -->
  <div class="w-full h-px bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 "></div>

  <About />
  <div class="w-full h-px bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 "></div>

  <!-- < About /> -->
  <!-- <recentwork> -->
  <RecentWork />
  <div class="w-full h-px bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 "></div>

  <!-- <P2 /> -->

  <!-- <P3 /> -->
  <!-- <P4 /> -->


  <Skills />
  <div class="w-full h-px bg-gradient-to-r from-blue-400 via-blue-200 to-blue-400 "></div>



  <!-- Skills Section -->

  <!-- End Skills Section -->
   
  <!-- Testimonial Section -->
  <div class="space-y-4 grid place-items-center mt-16 text-center">
    <h3 class="text-4xl font-bold text-gray-900">What People Say</h3>
    <p class="text-lg text-gray-600 max-w-2xl">
      Here are a few kind words from those I've worked with – their satisfaction is what keeps me going.
    </p>
  </div>

  <div class="max-w-6xl mx-auto px-6 py-20 bg-gradient-to-br from-sky-50 to-indigo-50 rounded-3xl shadow-xl mt-10">
    <div class="relative lg:flex rounded-lg overflow-hidden bg-white shadow-md">
      <!-- Left: Logo / Image -->
      <div class="h-64 lg:h-auto lg:w-5/12 relative flex items-center justify-center bg-gray-900">
        <img class="absolute h-full w-full object-cover opacity-60"
          src="https://a.slack-edge.com/80588/marketing/img/meta/slack_hash_256.png" alt="Client Logo" />
        <div class="absolute inset-0 bg-indigo-900 opacity-60"></div>
        <svg class="relative z-10" width="160" height="100" viewBox="0 0 200 120" fill="currentColor">
          <path d="M0,0 L200,0 L100,120 Z" fill="#fff"></path>
        </svg>
      </div>

      <!-- Right: Testimonial content -->
      <div class="relative lg:w-7/12 bg-white">
        <svg class="absolute h-full text-white w-24 -ml-12" fill="currentColor" viewBox="0 0 100 100"
          preserveAspectRatio="none">
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
        <div class="relative py-12 lg:py-20 px-8 lg:px-16 text-gray-700 space-y-4">
          <p class="text-lg leading-relaxed">
            “Working with <strong class="text-indigo-600">Manish</strong> was a pleasure. His expertise as a backend
            engineer truly stood out.
            He built scalable APIs and implemented secure authentication systems that enhanced our application’s
            performance significantly.”
          </p>
          <p class="text-sm text-gray-500">— Piyush Duggal, Software Team Lead</p>
        </div>
      </div>
    </div>

    <!-- Carousel arrows -->
    <div class="absolute inset-y-0 left-0 flex items-center">
      <button class="mt-24 lg:mt-0 -ml-6 h-12 w-12 rounded-full bg-white p-3 shadow-lg hover:bg-indigo-100">
        <svg class="h-full w-full text-indigo-900" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15 6l-6 6 6 6" />
        </svg>
      </button>
    </div>

    <div class="absolute inset-y-0 right-0 flex items-center">
      <button class="mt-24 lg:mt-0 -mr-6 h-12 w-12 rounded-full bg-white p-3 shadow-lg hover:bg-indigo-100">
        <svg class="h-full w-full text-indigo-900" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>
    </div>
  </div>
  <!-- End Testimonial Section -->

  <div class="banner-1 flex h-full items-center">
    <div class="w-7/12 p-12">
      <h2 class="text-gray-700 md:text-6xl text-2xl font-Eczar mb-5 font-bold">
        Let’s build clean, efficient, and impactful solutions together. </h2>
      <a class="underline text-2xl text-blue-600 font-work_sans">📧 hire@author.com</a>
    </div>
    <div class="w-5/12 pr-28">
      <div class="flex flex-wrap justify-end gap-2">
        <button class="bg-gray-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
          <svg class="w-4 h-4 md:w-10 md:h-10 lg:w-10 lg:h-10 xl:h-10 xl:w-10 fill-current" role="img"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path img />
          </svg>
        </button>

        <button class="bg-gray-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
          <svg class="w-4 h-4 md:w-10 md:h-10 lg:w-10 lg:h-10 xl:h-10 xl:w-10 fill-current" role="img"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path img />
          </svg>
        </button>

        <button class="bg-gray-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
          <svg class="w-4 h-4 md:w-10 md:h-10 lg:w-10 lg:h-10 xl:h-10 xl:w-10 fill-current" role="img"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path img />
          </svg>
        </button>

        <button class="bg-gray-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
          <svg class="w-4 h-4 md:w-10 md:h-10 lg:w-10 lg:h-10 xl:h-10 xl:w-10 fill-current" role="img"
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path img />
          </svg>
        </button>

        <button class="bg-gray-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
          <svg class="w-4 h-4 md:w-10 md:h-10 lg:w-10 lg:h-10 xl:h-10 xl:w-10 fill-current" role="img"
            viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path>img</path>
            </g>
          </svg>
        </button>
      </div>
    </div>
  </div>

  <!-- </div> -->
</template>

<!-- import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
mounted() {
AOS.init({
duration: 1000,
once: true
})
}
}

 <script> 

</script> -->

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
// export default {
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import About from './components/About.vue'
import RecentWork from './components/RecentWork.vue'
// import P1 from './components/P1.vue'
// import P2 from './components/P2.vue'
// import P3 from './components/P3.vue'
// import P4 from './components/P4.vue'
// import ProjectsSection from './components/P4.vue'
import Skills from './components/Skills.vue'
// }
export default {
  components: {
    Navbar,
    HeroSection,
    About,
    RecentWork,
    // P1,
    // P2,
    // P3,
    // P4,
    Skills,
  },
  data() {
    return {

      showMenu: false,

    }
  },
  mounted() {
    AOS.init({
      duration: 1000,
      once: true
    })
  }
}
</script>
