<template>
    <div class="iphone">
      <IphoneWorld />
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import IphoneWorld from '@/components/IphoneWorld.vue'
  
  export default {
    name: 'IphoneView',
    components: {
        IphoneWorld
    }
  }
  </script>
  