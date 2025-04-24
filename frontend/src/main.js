import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import VueSmoothScroll from 'vue3-smooth-scroll'
import { MotionPlugin } from '@vueuse/motion'

import 'bootstrap/dist/css/bootstrap.min.css';
// Import Bootstrap JS (optional, if you want to use interactive components like modals, tooltips, etc.)
import 'bootstrap';
// import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS
// import 'vue3-smooth-scroll/dist/vue3-smooth-scroll.css'; // Import the CSS for smooth scroll
const app = createApp(App)
app.use(VueSmoothScroll)
app.use(MotionPlugin)
app.mount('#app')
