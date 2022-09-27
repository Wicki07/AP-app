<template>
  <nav class="navbar">
    <a class="navbar-logo" href="/">
      <img
        class="navbar-logo-img"
        src="@assets/logo.png"
        width="130"
        height="130"
        alt="" />
      Akademia Pływania
    </a>
    <div class="toggler">
      <div class="toggler-item" />
      <div class="toggler-item" />
      <div class="toggler-item" />
    </div>
    <div class="collapse navbar-expand">
      <ul>
        <li class="active">
          <a class="" href="#">O nas</a>
        </li>
        <li>
          <a class="" href="#">Aktualności</a>
        </li>
        <li class="dropdown">
          <a class="" href="#">Ofera</a>
          <div class="dropdown-menu">
            <a href="#">Plan zajęć</a>
            <a href="#">Cennik</a>
            <a href="#">Obozy</a>
          </div>
        </li>
        <li>
          <a class="" href="#">Galeria</a>
        </li>
        <li>
          <a class="" href="#">Kontakt</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>
<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 400px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
ul li a {
  font-weight: 700;
  font-size: 1rem;
  text-align: center;
  color: #454746;
  text-decoration: none;
  position: relative;
}
ul li a::before {
  content: '';
  position: absolute;
  display: block;
  width: 100%;
  height: 7px;
  bottom: -5px;
  left: 0;
  background-color: #007cc2;
  transform: scaleX(0);
  transition: transform 0.3s ease;
  border-radius: 5px;
}
ul li a:hover::before {
  transform: scaleX(1);
}
ul li.active a::before {
  transform: scaleX(1);
}
.navbar {
  display: flex;
  padding: 0 5rem;
}
.navbar-logo {
  margin-right: 4rem;
  color: #454746;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 700;
}
.navbar-logo-img {
  margin: 0.5rem 0;
  color: #454746;
  text-decoration: none;
  font-size: 1.5rem;
}
.collapse {
  display: none;
  flex-direction: column;
}
.dropdown-menu {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 100px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-menu a {
  margin: 0.5rem 0.75rem;
  text-decoration: none;
  display: block;
  font-size: 0.8rem;
}
.dropdown:hover .dropdown-menu {
  display: block;
}
.dropdown.active .dropdown-menu {
  display: block;
}

.toggler {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
}
.toggler.active {
  justify-content: flex-start;
}
.toggler-item {
  width: 100%;
  height: 5px;
  background-color: #007cc2;
  border-radius: 5px;
  transition: transform 0.3s ease, opacity 0.1s ease;
}
.toggler.active .toggler-item:nth-child(3) {
  opacity: 0;
}
.toggler.active .toggler-item:nth-child(1) {
  margin-top: 5px;
  transform: rotate(45deg);
}
.toggler.active .toggler-item:nth-child(2) {
  transform: rotate(-45deg) translateX(4px) translateY(-4px);
}

@media (min-width: 992px) {
  .navbar-expand {
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .toggler {
    display: none;
  }
}
</style>
