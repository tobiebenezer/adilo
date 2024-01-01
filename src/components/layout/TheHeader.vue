<template>
  <header>
    <div class="wrapper">
      <div class="logo">
        <img src="@/assets/header/logo.png" />
      </div>

      <div>
        <nav>
          <ul class="nav">
            <li class="nav-item">Projects</li>
            <li class="nav-item" @click="toggleDropdown()">Tools & App</li>

            <ul v-if="showDropdown" class="dropdown">
              <li class="dropdown-item" >Snapbyte Recoder</li>
              <li class="dropdown-item">Audio Bounce</li>
              <li class="dropdown-item">Sugar Voice</li>
            </ul>

            <li class="nav-item">Channels</li>
            <li class="nav-item">Anaytics</li>
            <li class="nav-item">Settings</li>
          </ul>
          <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink> -->
        </nav>
      </div>

      <div class="help">
        <div>Help</div>
        <div>
          <span>
            <img src="../../assets/header/profile.png" />
          </span>
          <span>
            <H4>Cody Fisher</H4>
            <span>codyfisher@gmail.com</span>
          </span>
        </div>
      </div>
    </div>
  </header>
</template>


<script setup >
import {ref} from "vue"

let showDropdown = ref(false);

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
}

</script>

<style lang="less" scoped>
@import '../../assets/base.less';

.wrapper {
  .dflex-center();
  font-size: 14px;
  color: #707070;
  border: 1px solid #E2E5ED;
  width: 100vw;
  justify-content: space-between;
  padding: 1.7rem 2rem;

  height: 10vh;

  .logo {
    .dflex-center();
    width: 15rem;
  }

  nav {
    .dflex-center();
    width: 60vw;

    position: relative;

    .nav {
      .dflex-center();
      gap: 4rem;

      .nav-item {
        display: flex;
        gap: 0.7rem;
        align-items: center;
        list-style: none;
        padding: 0.7rem 1.2rem;
        margin: 0.4rem 0;
      }    
        
        .dropdown {
        display: block;
        position: absolute;
        top: 50px;
        left: 25%;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        text-align: left;
        border: 1px solid #E2E5ED;
        box-shadow: 0px 3px 24px #0000001A;
        border-radius: 8px;
       
        .dropdown-item {
          border-bottom: 1px solid #E2E5ED;
          margin: 0;
          padding: 0.7rem 1.2rem;
        }

        .dropdown:last-child {
          border: none;
        }
      }
      
    }
  }

  .help {
    .dflex-center();
    gap:1rem;
    div:nth-of-type(1) {
      padding: 0.7rem;
      font-size:14px;
      border-right: solid 2px rgb(204, 204, 204);
    }
    
    div {
      .dflex-center();
      font-size:11px;
    }
  }

  li {
    list-style: none;
  }
}
</style>