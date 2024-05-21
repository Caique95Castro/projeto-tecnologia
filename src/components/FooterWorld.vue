<template>
    <div class="footer">
            <div class="box-titulo">
                <h1>LOGO EMPRESA</h1>
                <p>Av. Tal de Tall, 100 - 02389-908</p>
            </div>
            <div class="box-content-footer">
                <nav class="links-nav">
                    <ul>
                        <li class="nav-item"><a class="nav-link" href="/">Início</a></li>
                    
                        <li class="nav-item"><a class="nav-link" href="/about.html">Sobre</a></li>
                    
                        <li class="nav-item"><a class="nav-link" href="/iphone">Iphone</a></li>
                    
                        <li class="nav-item"><a class="nav-link" href="/mac">Mac</a></li>
                    
                        <li class="nav-item"><a class="nav-link" href="#">Ipad</a></li>
                    
                        <li class="nav-item"><a class="nav-link" href="#">Watch</a></li>
                    
                        <li class="nav-item"><a class="nav-link" href="#">AirPods</a></li>
                    </ul>
                </nav>
            </div>
    </div>
</template>

<style scoped>
.footer{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: rgba(128, 128, 128, 0.27);
    padding: 0 auto;
    gap: 10px;
}
.box-titulo{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 45%;
}
h1{
    color: black;
}
.box-content-footer{
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: 1px solid black;
    width: 45%;
    margin-top: 20px;
    margin-bottom: 20px;
    
}
.links-nav{
    display: flex;
    justify-content: left;
    flex-direction: column;
    width: 100%;
}
.nav-item {
    margin: 0 1rem;
    list-style: none;
    width: 70px;
  }
.nav-link {
    text-decoration: none;
    color: #3a3a3ab3;
    font-size: 15px;
    transition: color 0.3s ease;
    margin-top: 10px;
  }
  
  .nav-link:hover {
    color: #2997FF;
  }
</style>