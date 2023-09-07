<script setup lang="ts">
import DevButton from '../components/form-elements/DevButton.vue'
import DevInput from '../components/form-elements/DevInput.vue'
import DevSelect from '../components/form-elements/DevSelect.vue'
</script>
<template>
  <div class="container mx-auto mt-28">
    <h4>Interactive Elements</h4>

    <div class="mt-7">
      <p class="text-blue-700">button</p>
      <DevButton type="outlined" width="227px" :isLoading="false" class="mt-7">
        <span>Button</span>
      </DevButton>
      <p class="text-blue-700 my-7">Input</p>

      <p class="text-blue-700 my-7">Select</p>
      <DevSelect :options="['Go', 'TypeScript', 'Css', 'Svelte']" />
    </div>
  </div>
</template>
