<template>
  <div class="home">
    <HomeApple />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeApple from '@/components/HomeApple.vue'

export default {
  name: 'HomeView',
  components: {
    HomeApple
  }
}
</script>
