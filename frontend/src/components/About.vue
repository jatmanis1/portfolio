<template>
    <section class="min-h-screen bg-[#e0f2fe] text-gray-800 px-6 md:px-24">
        <div class="max-w-7xl mx-auto w-full h-full flex flex-col justify-center py-10">
            <!-- Title -->
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-5xl font-bold text-gray-800">
                    Focus on <span class="text-blue-700">{{ larger }}</span> challenges.
                </h2>
                <p class="text-gray-700 max-w-2xl mx-auto mt-4 text-lg">
                    Let automation and reusable infrastructure handle the boring stuff—so you can build robust, secure
                    systems that scale.
                </p>
            </div>

            <!-- Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                <!-- Card 1 -->
                <div class="flex flex-col justify-between gap-6">
                    <div>
                        <h3 class="text-xl font-mono font-semibold text-gray-800">Scalable APIs & Automation</h3>
                        <p class="text-gray-700 mt-3">
                            Build and deploy RESTful APIs and background workers that scale, with built-in observability
                            and testability.
                        </p>
                        <a href="#" class="mt-4 inline-block text-sm text-blue-600 hover:underline transition">
                            READ MORE ↳
                        </a>
                    </div>
                </div>

                <!-- Card 2 -->
                <div class="flex flex-col justify-between gap-6">
                    <div>
                        <h3 class="text-xl font-mono font-semibold text-gray-800">Backend Tools You Know and Trust</h3>
                        <p class="text-gray-700 mt-3">
                            Build full-featured web apps using Flask and Django, model data efficiently with SQLAlchemy,
                            and harness the power of relational databases.
                        </p>
                        <a href="#" class="mt-4 inline-block text-sm text-blue-600 hover:underline transition">
                            READ MORE ↳
                        </a>
                    </div>
                </div>
            </div>

            <div class="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">

                <div>
                    <h4 class="text-lg font-semibold text-gray-800">🚀 Fast Deployment</h4>
                    <p class="text-gray-700 mt-2 text-sm">CI/CD pipelines for <span
                            class="text-sky-600 font-bold">rapid</span> and <span
                            class="text-sky-600 font-bold">safe</span> releases.</p>
                </div>

                <div>
                    <h4 class="text-lg font-semibold text-gray-800">🔒 Security First</h4>
                    <p class="text-gray-700 mt-2 text-sm">JWT, <span class="text-sky-600 font-bold">OTP
                            verification</span>, and <span class="text-sky-600 font-bold">customized emails</span> for
                        enhanced security and personalized user experience.</p>
                </div>

                <div>
                    <h4 class="text-lg font-semibold text-gray-800">📊 Metrics-Driven</h4>
                    <p class="text-gray-700 mt-2 text-sm">Real-time <span
                            class="text-sky-600 font-bold">monitoring</span>, <span
                            class="text-sky-600 font-bold">logging</span>, and <span
                            class="text-sky-600 font-bold">alerts</span> from day one to ensure smooth operations.</p>
                </div>

            </div>

            <!-- Testimonial / Quote -->
            <div class="mt-16 text-center">
                <blockquote class="text-xl italic text-gray-700 max-w-3xl mx-auto">
                    "Backend development isn't just about code—it's about crafting reliable systems that serve millions,
                    silently and efficiently."
                </blockquote>
            </div>
        </div>
    </section>
</template>

<script setup>
defineProps({
    larger: {
        type: String,
        default: 'larger',
    },
});
</script>
