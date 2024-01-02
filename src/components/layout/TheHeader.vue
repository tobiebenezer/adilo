<template>
  <header>
    <div class="wrapper">
      <div class="logo">
        <li class="dropdown-item">
          <RouterLink to="/">
            <img src="@/assets/header/logo.png" />
          </RouterLink>
        </li>
      </div>
      <div class="header-left">
        <nav>
          <ul class="nav">
            <li class="nav-item">Projects</li>
            <li class="nav-item active" style="white-space: nowrap" @click="toggleDropdown()">
              Tools & App
              <font-awesome-icon :icon="['fas', 'chevron-down']" />
            </li>

            <ul v-if="showDropdown" class="dropdown">
              <li class="dropdown-item">
                <RouterLink to="/recentrecording">
                  <span>Snapbyte Recoder</span>
                </RouterLink>
              </li>
              <li class="dropdown-item">Audio Bounce</li>
              <li class="dropdown-item">Sugar Voice</li>
            </ul>

            <li class="nav-item">Channels</li>
            <li class="nav-item">Contact</li>
            <li class="nav-item">Anaytics</li>
            <li class="nav-item">Settings</li>
          </ul>
          <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink> -->
        </nav>

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
    </div>
  </header>
</template>


<script setup >
import { ref } from 'vue'

let showDropdown = ref(false)

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value
}
</script>

<style lang="less" scoped>
@import '../../assets/base.less';

.wrapper {
  .dflex-center();
  font-size: 14px;
  color: #707070;
  border: 1px solid #e2e5ed;
  max-width: 100vw;
  justify-content: start;
  padding: 1.7rem 2rem;
  height: 10vh;

  .logo {
    .dflex-center();
    width: 15rem;
  }

  .header-left {
    display: flex;
    justify-items: start;
    align-content: center;
    justify-content: space-between;
      width: 80vw;
    

    nav {
      .dflex-center();
      width: 60vw;
      position: relative;
  
      .nav {
        .dflex-center();
        justify-self: start;
        justify-content: space-between;
  
        .nav-item {
          display: flex;
          gap: 0.7rem;
          align-items: center;
  
          list-style: none;
          padding: 0.7rem 1.2rem;
          margin: 0.4rem 0;
        }
        .active {
          border-top: solid 3px #0dabd8;
          color: #21455e;
        }
        .dropdown {
          display: block;
          position: absolute;
          top: 50px;
          left: 20%;
          background: #ffffff 0% 0% no-repeat padding-box;
          text-align: left;
          border: 1px solid #e2e5ed;
          box-shadow: 0px 3px 24px #0000001a;
          border-radius: 8px;
  
          .dropdown-item {
            border-bottom: 1px solid #e2e5ed;
            margin: 0;
            padding: 0.7rem 1.2rem;
  
            a:visited {
              text-decoration: none;
              color: #707070;
            }
          }
  
          .dropdown:last-child {
            border: none;
          }
        }
      }
    }
  
    .help {
      .dflex-center();
      gap: 1rem;
      div:nth-of-type(1) {
        padding: 0.7rem;
        font-size: 14px;
        border-right: solid 2px rgb(204, 204, 204);
      }
  
      div {
        .dflex-center();
        font-size: 11px;
      }
    }
  }


  li {
    list-style: none;
  }
}
</style>