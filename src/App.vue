<template>
  <header :class="{ fixed: isFixed }">
    <div class="container">
      <div class="logo">Meu Logo</div>
      <nav :class="{ open: isOpen }">
        <router-link to="/" exact>Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/iphone">Iphone</router-link>
        <router-link to="/mac">Mac</router-link>
      </nav>
      <div class="hamburger" @click="toggleMenu">
        <div class="line" v-for="n in 3" :key="n"></div>
      </div>
    </div>
  </header>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      isFixed: false
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    handleScroll() {
      this.isFixed = window.scrollY > 50;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style scoped lang="scss">
header {
  background: #333;
  color: #fff;
  padding: 10px 0;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: background 0.3s;

  &.fixed {
    position: fixed;
    background: #444;
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }

  .logo {
    font-size: 24px;
  }

  nav {
    display: none;
    flex-direction: column;

    a {
      font-weight: bold;
      color: #fff;
      text-decoration: none;
      padding: 10px 0;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

  nav.open {
    display: flex;
  }

  .hamburger {
    display: flex;
    flex-direction: column;
    cursor: pointer;

    .line {
      width: 25px;
      height: 3px;
      background: #fff;
      margin: 3px 0;
    }
  }

  @media (min-width: 768px) {
    .hamburger {
      display: none;
    }

    nav {
      display: flex;
      flex-direction: row;

      a {
        padding: 0 15px;
      }
    }

    nav.open {
      display: flex;
    }
  }
}
</style>