<script setup lang="ts">
useSeoMeta({
  title: 'Hahn Built | Contact',
  description: 'Contact Hahn Built',
  ogDescription: 'Contact Hahn Built',
  ogTitle: 'Hahn Built | Contact',
  ogImage: '/images/logo.webp',
});
const config = useRuntimeConfig();
const formKey = config.public.formSpreeKey;

const formData = ref({
  name: '',
  email: '',
  projectType: 'Residential',
  location: '',
  details: ''
});

const isSubmitting = ref(false);

const submitManifest = async () => {
  isSubmitting.value = true
  
  try {
    await $fetch(`https://formspree.io/f/${formKey}`, {
      method: 'POST',
      body: {
        name: formData.value.name,
        email: formData.value.email,
        projectType: formData.value.projectType,
        location: formData.value.location,
        message: formData.value.details
      },
      headers: {
        'Accept': 'application/json'
      }
    });

      isSubmitting.value = false;


  } catch (error) {
    console.error('Submission failed:', error)
  }
};
</script>

<template>
  <div class="min-h-screen text-white pt-40 pb-20 px-4 relative overflow-hidden">

    <div class="absolute inset-0 z-0 opacity-10 pointer-events-none">
      <div class="absolute top-0 left-1/4 w-px h-full bg-white"></div>
      <div class="absolute top-1/3 left-0 w-full h-px bg-white"></div>
    </div>
    <!---->
    <ClientOnly>
      <div class="max-w-7xl mx-auto relative z-10">
        <header class="mb-24">
          <span class="text-orange-600 font-mono text-xs tracking-[0.3em] uppercase mb-4 block">Intake</span>
          <baseHeader text="Contact" />
        </header>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-20">

          <div class="lg:col-span-7">
            <div class="bg-zinc-900/30 border border-white/5 p-10 rounded-3xl backdrop-blur-sm">
              <div class="space-y-12">

                <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div class="space-y-2">
                    <label class="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Principal Name</label>
                    <input v-model="formData.name" type="text" placeholder="Full Name"
                      class="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-orange-600 transition-colors font-bold uppercase italic" />
                  </div>
                  <div class="space-y-2">
                    <label class="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Contact Email</label>
                    <input v-model="formData.email" type="email" placeholder="Email Address"
                      class="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-orange-600 transition-colors font-bold uppercase italic" />
                  </div>

                  <div class="space-y-2">
                    <label class="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Address</label>
                    <input v-model="formData.location" type="text" placeholder="Address"
                      class="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-orange-600 transition-colors font-bold uppercase italic" />
                  </div>
                </div>

                <div class="space-y-4">
                  <label class="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block">Structural
                    Category</label>
                  <div class="flex flex-wrap gap-4">
                    <button v-for="type in ['Residential', 'Commercial', 'Civil', 'Other']" :key="type"
                      @click="formData.projectType = type"
                      :class="formData.projectType === type ? 'bg-orange-600 text-black border-orange-600' : 'bg-transparent text-white border-white/10'"
                      class="px-8 py-3 border text-xs font-black uppercase italic tracking-widest transition-all">
                      {{ type }}
                    </button>
                  </div>
                </div>

                <div class="space-y-2">
                  <label class="text-[10px] font-mono uppercase tracking-widest text-zinc-400">Project Details</label>
                  <textarea v-model="formData.details" rows="4"
                    placeholder="Briefly describe the structural requirements..."
                    class="w-full bg-transparent border border-white/10 p-6 outline-none focus:border-orange-600 transition-colors font-medium text-zinc-400"></textarea>
                </div>

                <button @click="submitManifest" :disabled="isSubmitting"
                  class="group relative w-full py-6 bg-white text-black uppercase tracking-widest italic overflow-hidden">
                  <span :class="`${isSubmitting ? 'text-black relative z-10 animate-pulse' : 'relative z-10 text-black group-hover:text-white transition-colors duration-500'}`">
                    {{isSubmitting ? 'Sending' : 'submit' }}
                  </span>
                  <div
                    class="absolute inset-0 bg-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  </div>
                </button>

              </div>
            </div>
          </div>

          <div class="lg:col-span-5 flex flex-col justify-between py-6">
            <div class="space-y-16">
              <div>
                <span class="text-orange-600 font-mono text-[10px] uppercase tracking-[0.3em] mb-6">Headquarters</span>
                <p class="text-3xl font-bold uppercase italic leading-tight">
                  Kalispell, Montana<br />
                  Flathead Valley
                </p>
                <baseDescription text="Kalispell, Montana<br />
                Flathead Valley" />

              </div>

              <div>
                <span class="text-orange-600 font-mono text-[10px] uppercase tracking-[0.3em] mb-6">Direct Line</span>
                <p class="text-3xl font-bold uppercase italic leading-tight hover:text-orange-600 transition-colors">
                  <a href="tel:4063002052" aria-label="Phone number for Hahn Built">(406) 300-2052</a>
                </p>
                <baseDescription :text="`<a href='tel:4063002052'>(406) 300-2052</a>`" />
                <p class="text-sm text-zinc-400 mt-2 font-mono uppercase">Mon — Fri / 07:00 — 17:00</p>
              </div>
            </div>

            <div class="p-10 border border-white/5 bg-zinc-900/10 mt-20">
              <span class="text-xs font-black uppercase tracking-widest mb-4">Structural Inspection</span>
              <baseDescription text="All project manifests are reviewed by our lead engineers. Response time is typically within 24 operational
              hours." />
            </div>
          </div>
        </div>
      </div>
    </ClientOnly>
    <!---->
  </div>
</template>