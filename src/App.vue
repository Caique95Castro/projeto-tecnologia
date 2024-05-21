<template>
  <div class="container-geral-navbar">
    <nav class="nav-bar">
      <div class="logo">
        <li class="nav-item-1"><a href="/" class="nav-link-1"><ion-icon class="icon-apple" name="logo-apple"></ion-icon> </a></li>
        
      </div>
      <div class="nav-list">
        <ul v-if="!isMobile">
          <li class="nav-item"><a href="/" class="nav-link">Início</a></li>
          <li class="nav-item"><a href="/about" class="nav-link">Sobre</a></li>
          <li class="nav-item"><a href="#" class="nav-link">Iphone</a></li>
          <li class="nav-item"><a href="#" class="nav-link">Mac</a></li>
          <li class="nav-item"><a href="#" class="nav-link">Ipad</a></li>
          <li class="nav-item"><a href="#" class="nav-link">Watch</a></li>
          <li class="nav-item"><a href="#" class="nav-link">AirPods</a></li>
        </ul>
      </div>
      

      <!-- Ícone de menu hamburguer para dispositivos móveis -->
      <div class="hamburger-menu" @click="toggleMobileMenu">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
    </nav>
    <transition name="slide">
      <div class="mobile-menu" v-if="isMobileMenuOpen">
        <ul>
          <li class="nav-item"><a href="/" class="nav-link">Início</a></li>
          <li class="nav-item"><a href="/about" class="nav-link">Sobre</a></li>
          <li class="nav-item"><a href="#" class="nav-link">Iphone</a></li>
          <li class="nav-item"><a href="#" class="nav-link">Mac</a></li>
          <li class="nav-item"><a href="#" class="nav-link">Ipad</a></li>
          <li class="nav-item"><a href="#" class="nav-link">Watch</a></li>
          <li class="nav-item"><a href="#" class="nav-link">AirPods</a></li>
        </ul>
        <div class="login-button">
          <button><a href="#">Entrar</a></button>
        </div>
      </div>
    </transition>
  </div>

  <router-view />
</template>

<script>


export default {
  data() {
    return {
      isMobile: false,
      isMobileMenuOpen: false
    };
  },
  mounted() {
    // Verifica se é um dispositivo móvel
    this.isMobile = window.innerWidth <= 730;

    // Adiciona um listener para atualizar o estado móvel quando a janela for redimensionada
    window.addEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.isMobile = window.innerWidth <= 730;
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    }
  },
  beforeUnmount() {
    // Remove o listener de redimensionamento antes de destruir o componente
    window.removeEventListener('resize', this.handleResize);
  }
};
</script>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
/* Seus estilos CSS existentes */

/* Estilos para o menu de navegação */
.container-geral-navbar {
  background-color: #161617cc;
  box-shadow: 0px 3px 10px #464646;
  position: fixed; /* Adicionando position: fixed para fixar a barra de menu no topo */
  width: 100%; /* Definindo a largura da barra de menu para 100% da largura da janela */
  z-index: 1000; 
}

.nav-bar {
  display: flex;
  justify-content:center ;
  align-items: center;
  padding: 10px 20px;
}
.icon-apple{
  color: white;
  width: 25px;
  height: 25px;
}

.logo h1 {
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
}
.nav-list{
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
}
.nav-list ul {
  list-style: none;
  display: flex;
}

.nav-item {
  margin: 0 1rem;
}
.nav-item-1 {
  margin: 0 1rem;
  list-style: none;
}

.nav-link {
  text-decoration: none;
  color: #ffffffb3;
  font-size: 15px;
  transition: color 0.3s ease;
  margin-top: 10px;
}

.nav-link:hover {
  color: #2997FF;
}

.login-button button {
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  background-color: #0187a7;
  transition: background-color 0.3s ease;
}

.login-button button a {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
}

.login-button button:hover {
  background-color: #015b71;
}

/* Estilos para o ícone do menu hamburguer */
.hamburger-menu {
  display: none;
  width: 30px;
  height: 20px;
  cursor: pointer;
  position: relative;
}

.bar {
  width: 100%;
  height: 3px;
  background-color: #fff;
  margin: 5px 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.hamburger-menu.open .bar:nth-child(1) {
  transform: translateY(6px) rotate(45deg);
}

.hamburger-menu.open .bar:nth-child(2) {
  opacity: 0;
}

.hamburger-menu.open .bar:nth-child(3) {
  transform: translateY(-6px) rotate(-45deg);
}

/* Estilos para o menu móvel */
.mobile-menu {
  display: none;
  background-color: #161617cc;
  padding: 1rem 2rem;
}

.mobile-menu ul {
  list-style: none;
}

.mobile-menu .nav-item {
  margin-bottom: 1rem;
}

.mobile-menu .nav-link {
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.3s ease;
}

.mobile-menu .nav-link:hover {
  color: #0187a7;
}

/* Media query para dispositivos móveis */
@media screen and (max-width: 730px) {
  .nav-bar{
    display: flex;
    justify-content: space-around;
  }
  .login-button {
    display: none;
  }

  .hamburger-menu {
    display: block;
  }

  .mobile-menu {
    display: block;
  }
}
</style>