<template>
  <div class="border border-slate-500 w-screen h-screen flex flex-col">
    <!-- NAVBAR -->
    <div class="border border-b-slate-200 p-2 text-sm h-[40px] flex">
      <h1>Admin Dashboard</h1>
    </div>

    <div class="flex relative h-full w-full overflow-scroll">
      <!-- SIDEBAR -->
      <div class="border border-slate-200 min-w-[250px] border-t-0 h-full">
        <div class="space-y-4 py-4">
          <div class="px-3 py-2">
            <h2 class="mb-2 px-4 text-lg font-semibold tracking-tight">Section Title</h2>

            <div class="space-y-1">
              <Button variant="secondary" class="w-full justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  class="mr-2 h-4 w-4"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="10 8 16 12 10 16 10 8" />
                </svg>

                <NuxtLink to="/fotolivros">
                  Fotolivros
                </NuxtLink>
              </Button>

              <Button variant="ghost" class="w-full justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  class="mr-2 h-4 w-4"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="10 8 16 12 10 16 10 8" />
                </svg>
                <NuxtLink to="/configs">
                  Configurações
                </NuxtLink>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <!-- PAGEVIEW -->
      <div class="bg-slate-50 w-full p-4">
        <slot />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>