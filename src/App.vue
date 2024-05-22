<template>
  <div class="container-geral-navbar">
    <header class="nav-bar" :class="{ fixed: isFixed }">
      <div class="container">
        <div class="logo">
          <router-link class="nav-link-1" to="/"
            ><ion-icon class="icon-apple" name="logo-apple"></ion-icon
          ></router-link>
          <div class="hamburger" @click="toggleMenu">
            <div class="line" v-for="n in 3" :key="n"></div>
          </div>
        </div>
        

        <nav :class="{ open: isOpen }">
          <router-link class="nav-link" to="/" exact @click="closeMenu" >Início</router-link>
          <router-link class="nav-link" to="/about" @click="closeMenu">About</router-link>
          <router-link class="nav-link" to="/iphone" @click="closeMenu">Iphone</router-link>
          <router-link class="nav-link" to="/mac" @click="closeMenu">Mac</router-link>
          <router-link class="nav-link" to="#" @click="closeMenu">Ipad</router-link>
          <router-link class="nav-link" to="#"  @click="closeMenu">Watch</router-link>
          <router-link class="nav-link" to="#" @click="closeMenu">AirPods</router-link>
        </nav>
      </div>
    </header>
  </div>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      isFixed: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    closeMenu() {
      this.isOpen = false;
    },
    handleScroll() {
      this.isFixed = window.scrollY > 50;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped lang="scss">
.container-geral-navbar {
  background-color: #161617cc;
  box-shadow: 0px 3px 10px #464646;
  position: fixed; /* Adicionando position: fixed para fixar a barra de menu no topo */
  width: 100%; /* Definindo a largura da barra de menu para 100% da largura da janela */
  z-index: 1000;
}
.nav-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
}
.icon-apple {
  color: white;
  width: 25px;
  height: 25px;
}

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
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    gap: 20px;
    width: 100%;
  }

  .logo {
    display: flex;
    justify-content: space-around;
  }

  nav {
    display: none;
    flex-direction: column;
    align-items: center;

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

  @media (min-width: 730px) {
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
@media screen and (max-width: 730px) {
  .container {
    display: flex;
    flex-direction: column;
  }
  .logo {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
}
</style>