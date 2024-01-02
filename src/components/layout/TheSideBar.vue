
<template>
  <main>
    <div class="sidebar">
      <ul>
        <li>
          <font-awesome-icon :icon="['fas', 'film']" />
          <RouterLink to="/recentrecording">
            <span>  My Recodings</span>
          </RouterLink>
        </li>
        <li> <font-awesome-icon :icon="['fas', 'share-nodes']" /> Request</li>
      </ul>
    </div>
    <div class="content">
      <div class="top">
        
          <span class="breadcrumb">Snapbyte  <font-awesome-icon :icon="['fas', 'chevron-right']"  /> <RouterLink to="/recentrecording"> My Recodings</RouterLink> </span>
        
        <div class="title">
          <div class="record">
            My Recording <span class="num">25</span>
          </div>
          <div>
            <button class="btn btn-outline"><font-awesome-icon :icon="['fas', 'arrow-down-short-wide']" style="padding-right: 0.3rem;" /> By Date</button>
            <button class="btn btn-outline"> <font-awesome-icon :icon="['fas', 'filter']" style="padding-right: 0.3rem;" /> Add Filter</button>
            <button class="btn btn-blue"> <font-awesome-icon :icon="['fas', 'video']" style="padding-right: 0.3rem;" /> New Request</button>
            <button class="btn btn-red" @click="modalStore.toggleModal()">  <font-awesome-icon :icon="['fas', 'circle']" style="padding-right: 0.3rem;" /> Start Recording</button>
          </div>
        </div>
      </div>
      <TheModal :show="modalStore.showModal">
        <template #header>
          <div class="header">
            <h4>New Recording</h4>
            <span @click="modalStore.toggleModal()"> X </span>
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
              <span @click="recordSettings.toggleRadio('screen')" :class="[recordSettings.toggleButton('screen')]"><span></span></span>
            </div>

            <div class="toggler">
              <span class="toggler-title">Record Camera</span>
              <span @click="recordSettings.toggleRadio('camera')" :class="[recordSettings.toggleButton('camera')]"><span></span></span>
            </div>

            <div class="toggler">
              <span class="toggler-title">Record mic</span>
              <span @click="recordSettings.toggleRadio('mic')" :class="recordSettings.toggleButton('mic')"><span></span></span>
            </div>
          </div>
        </template>
        <template #footer>
          <div class="card-footer">
            <button class="btn btn-blue" @click="recordSettings.startRecord()">Start Recording</button>
          </div>
        </template>
      </TheModal>
      <slot :toggleModal="toggleModal" ></slot>
    </div>
  </main>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import TheModal from '../TheModal.vue'
import {useModalStore} from "@/store/ModalStore";
import {useRecordSettings} from "@/store/RecorderSettingsStore"

const modalStore= useModalStore();
const recordSettings = useRecordSettings();


</script>

<style lang="less" scoped>
@import '../../assets/base.less';
@textcolor:#637C8E;
main {
  display: flex;

  .sidebar {
    position: sticky;
    background: #ebf2f6;
    min-height: 90vh;
    width: 16rem;
    top: 0;
    padding: 1.3rem;
    color:#21455E;

    border-right: solid 2px gray;

    li {
      display: flex;
      gap: 0.7rem;
      align-items: center;
      list-style: none;
      padding: 0.7rem 1.2rem;
      margin: 0.4rem 0;
      white-space: nowrap; 

      &:nth-child(1) {
        background: #e2e5ed 0% 0% no-repeat padding-box;
        border: 1px solid #0dabd838;
        border-radius: 10px;
      }
    }
  }

  .num{
    color:@textcolor;
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
      .breadcrumb {
        margin-left: 12.5rem;
        color: @textcolor;
        font-size:12px;
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