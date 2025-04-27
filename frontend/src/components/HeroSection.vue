<template>
    <section class="min-h-screen flex items-center justify-center px-6 md:px-24">
        <div class="flex flex-col md:flex-row items-center gap-10 w-full">
            <!-- Left content -->
            <div class="w-full md:w-11/12 space-y-5 md:space-y-10">
                <h3
                    class="hello-button text-gray-700 w-fit md:py-3 md:px-5 py-1 px-2 rounded-lg 3xl:text-3xl 2xl:text-xl lg:text-xl md:text-md text-sm font-semibold font-work_sans">
                    👋 Hi,
                </h3>

                <h1
                    class="3xl:text-8xl 2xl:text-7xl xl:text-6xl lg:text-4xl md:text-3xl sm:text-3xl text-xl font-Eczar font-bold leading-tight text-gray-700">
                    It's
                    <a href="https://www.linkedin.com/" target="_blank" class="text-black hover:underline">
                        Manish Jat</a><br />
                    Backend Developer & API Specialist
                </h1>

                <p class="font-work_sans text-gray-600 font-semibold leading-relaxed">
                    With expertise in
                    <span class="text-sky-500 font-bold">Django</span>,
                    <span class="text-sky-500 font-bold">Flask</span>,
                    <span class="text-sky-500 font-bold">SQL</span>,
                    and
                    <span class="text-sky-500 font-bold">RESTful API design</span>, I specialize in building scalable
                    backend
                    systems and optimizing data workflows. I also work with tools like
                    <span class="text-sky-500 font-bold">Celery</span>,
                    <span class="text-sky-500 font-bold">Redis</span>,
                    <span class="text-sky-500 font-bold">JWT Authentication</span>,
                    and
                    <span class="text-sky-500 font-bold">version control</span> to create efficient, secure, and
                    maintainable
                    backend solutions.
                </p>

                <div class="md:flex gap-1 md:gap-10">
                    <button class="btn btn-dark me-3 d-none d-md-inline-block">
                        View My Work
                    </button>

                    <button class="btn btn-outline-dark mb-3 mb-md-0">
                        Contact Me
                    </button>
                </div>
            </div>

            <!-- Right image -->
            <div class="w-full md:w-8/12 flex justify-center md:justify-end">
                <img class="3xl:h-[800px] 2xl:h-[650px] xl:h-[550px] lg:h-[550px] md:h-[450px] sm:h-[350px]"
                    src="../assets/man-png.png" alt="user image" />
            </div>
        </div>
    </section>
</template>


<script setup>
// No logic yet — all display
</script>

<style scoped>
/* Custom hover button styles could be added here if needed */
</style>