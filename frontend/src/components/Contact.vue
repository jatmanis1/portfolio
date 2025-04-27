<template>
    <div class="banner-1 flex flex-col lg:flex-row h-full items-center">
      <!-- Left content -->
      <div class="lg:w-7/12 w-full p-8 lg:p-12">
        <h2 class="text-gray-700 text-2xl md:text-4xl lg:text-6xl font-Eczar mb-5 font-bold">
          Let’s build clean, efficient, and impactful solutions together.
        </h2>
        <a class="underline text-2xl text-blue-600 font-work_sans" href="mailto:jatmanis1.mail@gmail.com">📧 jatmanis1.mail@gmail.com</a>
      </div>
  
      <!-- Right content with Contact Me form -->
      <div class="lg:w-5/12 w-full lg:pr-28 p-8 lg:p-12">
        <!-- Contact Me Form -->
        <div class="contact-form-container mt-8 w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
          <h2 class="text-xl font-semibold text-gray-700 mb-4">Contact Me</h2>
          <form @submit.prevent="handleSubmit" class="space-y-5">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
              <input
                v-model="form.name"
                type="text"
                id="name"
                name="name"
                required
                class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              />
            </div>
  
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input
                v-model="form.email"
                type="email"
                id="email"
                name="email"
                required
                class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              />
            </div>
  
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                v-model="form.message"
                id="message"
                name="message"
                rows="4"
                required
                class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              ></textarea>
            </div>
  
            <div>
              <button
                type="submit"
                class="w-full py-2 px-4 bg-sky-500 text-white font-semibold rounded-md hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const form = ref({
    name: '',
    email: '',
    message: ''
  });
  const handleSubmit = async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/trigger-email/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    //   body: JSON.stringify(form.value)
    credentials: 'include',
  body: JSON.stringify({
    name: form.value.name,
    email: form.value.email,
    message: form.value.message
  })
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    // Try JSON, fallback to text
    let result;
    const contentType = response.headers.get("content-type");

    if (contentType && contentType.includes("application/json")) {
      result = await response.json();
    } else {
      result = await response.text();
    }

    console.log('Success:', result);
    console.log('Response:', form.value.email);
    alert('Message sent successfully!');
    form.value = {
      name: '',
      email: '',
      message: ''
    };
  } catch (error) {
    console.error('Submission failed:', error);
    alert('Failed to send message. Please try again.');
  }
};

//   const handleSubmit = async () => {
//     try {
//       const response = await fetch('http://127.0.0.1:8000/trigger-email/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(form.value)
//       });
  
//       if (!response.ok) {
//         throw new Error(`Error: ${response.statusText}`);
//       }
  
//       const result = await response.json();
//       console.log('Success:', result);
  
//       alert('Message sent successfully!');
//       form.value = {
//         name: '',
//         email: '',
//         message: ''
//       };
//     } catch (error) {
//       console.error('Submission failed:', error);
//       alert('Failed to send message. Please try again.');
//     }
//   };
  </script>
  
  
  <style scoped>
  .contact-form-container {
    background-color: #f8f8f8;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  input,
  textarea {
    font-size: 1rem;
    padding: 0.75rem;
  }
  
  button {
    font-size: 1.125rem;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  
  button:hover {
    background-color: #0284c7; /* Darker shade of sky blue */
  }
  
  footer {
    background-color: #2d2d2d;
  }
  
  footer a {
    font-size: 1rem;
  }
  
  footer p {
    font-size: 0.875rem;
  }
  
  /* Make the contact form full width on small screens */
  @media (max-width: 1024px) {
    .contact-form-container {
      padding: 1rem;
    }
  
    h2 {
      font-size: 1.5rem;
    }
  }
  
  @media (max-width: 640px) {
    .banner-1 {
      flex-direction: column;
    }
  
    .lg\:w-7\/12 {
      width: 100%;
    }
  
    .lg\:w-5\/12 {
      width: 100%;
    }
  
    .contact-form-container {
      padding: 1rem;
    }
  }
  </style>
<!--   
  <script setup>
  import { ref } from 'vue'
  
  const form = ref({
    name: '',
    email: '',
    message: ''
  })
  
  // Function to extract the CSRF token from cookies
  const getCSRFTokenFromCookie = () => {
    const name = 'csrftoken='
    const decodedCookie = decodeURIComponent(document.cookie)
    const cookies = decodedCookie.split(';')
  
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim()
      if (cookie.startsWith(name)) {
        return cookie.substring(name.length)
      }
    }
  
    return ''
  }
  
  const handleSubmit = async () => {
    try {
      // First, call the endpoint to ensure CSRF cookie is set
      await fetch('http://127.0.0.1:8000/get-csrf-token/', {
        credentials: 'include'
      })
  
      // Now extract the CSRF token from the cookie
      const csrfToken = getCSRFTokenFromCookie()
  
      const response = await fetch('http://127.0.0.1:8000/trigger-email/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrfToken
        },
        credentials: 'include',
        body: JSON.stringify({
          name: form.value.name,
          email: form.value.email,
          message: form.value.message
        })
      })
  
      if (!response.ok) throw new Error('Failed to send message.')
  
      alert('Message sent successfully!')
  
      form.value = {
        name: '',
        email: '',
        message: ''
      }
    } catch (error) {
      alert('Something went wrong while sending the message.')
      console.error(error)
    }
  }
  </script>
  
  <style scoped>
  .contact-form-container {
    background-color: #f8f8f8;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  input,
  textarea {
    font-size: 1rem;
    padding: 0.75rem;
  }
  
  button {
    font-size: 1.125rem;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  
  button:hover {
    background-color: #0284c7; /* Darker shade of sky blue */
  }
  
  footer {
    background-color: #2d2d2d;
  }
  
  footer a {
    font-size: 1rem;
  }
  
  footer p {
    font-size: 0.875rem;
  }
  
  /* Make the contact form full width on small screens */
  @media (max-width: 1024px) {
    .contact-form-container {
      padding: 1rem;
    }
  
    h2 {
      font-size: 1.5rem;
    }
  }
  
  @media (max-width: 640px) {
    .banner-1 {
      flex-direction: column;
    }
  
    .lg\:w-7\/12 {
      width: 100%;
    }
  
    .lg\:w-5\/12 {
      width: 100%;
    }
  
    .contact-form-container {
      padding: 1rem;
    }
  }
  </style>
   -->