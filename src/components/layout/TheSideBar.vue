
<template>
  <main>
    <div class="sidebar">
      <ul>
        <li>
          <RouterLink to="/recentrecording">
            <span>My Recodings</span>
          </RouterLink>
        </li>
        <li>Request</li>
      </ul>
    </div>
    <div class="content">
      <div class="top">
        <RouterLink to="/recentrecording">
          <span>Snapbyte My Recodings</span>
        </RouterLink>
        <div class="title">
          <div class="record">
            <h4>Total recordings 0</h4>
          </div>
          <div>
            <button class="btn btn-outline">By Date</button>
            <button class="btn btn-outline">Add Filter</button>
            <button class="btn btn-blue">New Request</button>
            <button class="btn btn-red" @click="toggleModal()">Start Recording</button>
          </div>
        </div>
      </div>
      <TheModal :show="showModal" @toggleModal="toggleModal()">
        <template #header>
          <div class="header">
            <h4>New Recording</h4>
            <span @click="toggleModal()"> X </span>
          </div>
        </template>
        <template #body>
          <div class="card-body">
            <div class="select-input">
              <span class="title">Save the recording in</span>
              <div>
                <select name="" id="">
                  <option value="">Select a project</option>
                </select>
              </div>
            </div>
            <div class="toggler">
              <span class="toggler-title">Record Screen</span>
              <span @click="toggleRadio('screen')" :class="[toggleButton('screen')]"><span></span></span>
            </div>

            <div class="toggler">
              <span class="toggler-title">Record Camera</span>
              <span @click="toggleRadio('camera')" :class="[toggleButton('camera')]"><span></span></span>
            </div>

            <div class="toggler">
              <span class="toggler-title">Record mic</span>
              <span @click="toggleRadio('mic')" :class="toggleButton('mic')"><span></span></span>
            </div>
          </div>
        </template>
        <template #footer>
          <div class="card-footer">
            <button class="btn btn-blue" @click="startRecord">Start Recording</button>
          </div>
        </template>
      </TheModal>
      <slot></slot>
    </div>
  </main>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import TheModal from '../TheModal.vue'
import { ref } from 'vue'
import router from '@/router'

const showModal = ref(true)
const checked = ref ({
  screen:true, camera:true, mic:false
})

const toggleModal = () => {
  showModal.value = !showModal.value
}

const toggleButton = (btnName) => {
  return checked.value[btnName] ? "toggler-button" :"toggler-button-off" ;
} 

const toggleRadio = (btnName) => {
  checked.value[btnName] =  !checked.value[btnName];
}

const startRecord = () => {
  router.push({ name: 'preview'});
}

</script>

<style lang="less" scoped>
@import '../../assets/base.less';

main {
  display: flex;

  .sidebar {
    position: sticky;
    background: #ebf2f6;
    min-height: 90vh;
    width: 16rem;
    top: 0;
    padding: 1.3rem;

    border-right: solid 2px gray;

    li {
      display: flex;
      gap: 0.7rem;
      align-items: center;
      list-style: none;
      padding: 0.7rem 1.2rem;
      margin: 0.4rem 0;

      &:nth-child(1) {
        background: #e2e5ed 0% 0% no-repeat padding-box;
        border: 1px solid #0dabd838;
        border-radius: 10px;
      }
    }
  }

  .header {
    border-bottom: 1px solid #e2e5ed;
    padding: 0rem 1rem 0.5rem 1rem;
    font-size: 13px;
    .dflex-center();
    justify-content: space-between;
  }

  .card-body {
    padding: 0rem 1rem 0.5rem 1rem;
    font-size: 13px;
    display: flex;
    justify-content: start;
    align-content: center;
    gap: 0.6rem;
    flex-direction: column;

    .select-input {
      height: 4rem;
      font-size: 12px;
      select {
        width: 18.5rem;
        height: 2rem;
        padding: 0.4rem;
        border: 1px solid #e2e5ed;
        border-radius: 5px;
      }
    }
  }

  .card-footer {
    padding: 0.6rem 0.6rem 0.6rem 1rem;
    text-align: center;

    .btn {
      width: 15rem;
      padding: 0.7rem 0;
      font-size: 12px;
    }
  }

  .content {
    padding: 0.6rem 0.6rem 0.6rem 3rem;
    width: 80vw;
    .top {
      margin-left: 1rem;
      span {
        margin-left: 12.5rem;
      }

      .record {
        text-align: center;
      }
      .title {
        .dflex-center();
        justify-content: space-between;
        div {
          width: 37vw;
          .dflex-center();
          gap: 1rem;
          .btn-red {
            width: 10rem;
          }

          .btn-blue {
            width: 9rem;
          }
        }
      }
    }
  }

  .toggler {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .toggler-button {
      height: 13px;
      width: 30px;
      padding: 1px;
      border: none;
      background-color: #0ad688;
      border-radius: 6px;
      display: flex;
      align-items:center;
      

      span {
        width: 12px;
        height: 12px;
        background: #ffffff 0% 0% no-repeat padding-box;
        border-radius: 6px;
      }
    }

    .toggler-button-off{
       height: 13px;
      width: 30px;
      padding: 1px;
      border: none;
      background-color: #A3BAC6;
      border-radius: 6px;
      display: flex;
      align-items:center;
      justify-content:end;      

      span {
        width: 12px;
        height: 12px;
        background: #ffffff 0% 0% no-repeat padding-box;
        border-radius: 6px;
      }
    
    }
  }
  .btn-red {
    background: #ef5350 0% 0% no-repeat padding-box;
    border: none;
    color: #e2e5ed;
  }
  .btn-blue {
    background: #0dabd8 0% 0% no-repeat padding-box;
    border: none;
    color: #e2e5ed;
  }

  .btn-outline {
    border: 1px solid #e2e5ed;
    color: @textcolor;
  }
  .btn {
    padding: 0.5rem 0.9rem;
    border-radius: 28px;
    font-size: 10px;
  }
}
</style>