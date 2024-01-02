<script setup>
import { useModalStore } from '@/store/ModalStore';

const modalStore = useModalStore();

</script>

<template v-slot="toggleModal">
  <main>
    
    <section class="section1">
      <div class="img">
        <img src="../assets/home/file.png" alt="" />
      </div>
      <div class="text">
        <h4>Say hello to tho world!</h4>
        <span>Record you first video/audio and share it what your tean, friends.</span> <br/>
        <span>follower and customers.</span>
      </div>
      <div>
        <button class="btn btn-red" @click="modalStore.toggleModal()">  <font-awesome-icon :icon="['fas', 'circle']" style="padding-right: 0.3rem;" /> Start Recording</button>
         <button class="btn btn-blue"> <font-awesome-icon :icon="['fas', 'video']" style="padding-right: 0.3rem;" /> New Request</button>
      </div>
    </section>
    <section class="section2">
      <div class="sideimg">
        <img src="../assets/home/filer.png" alt="" />
      </div>
      <div class="description">
        <span>Want more controls & better
          <br/> recordings?</span>
        <button class="btn btn-blue">Download the desktop recorder</button>
      </div>
    </section>
  </main>
</template>

<style lang="less" scoped>
@import '../assets/base.less';

main {
  
  

  .section1 {
    margin: 1.4rem 0;
    border: 1px dashed #A3BAC6;
    border-radius: 38px;
    height: 60vh ;
    .dflex-center();
    flex-direction: column;
    gap:1rem;

    .text {
      text-align: center;
      font-size: 10px;
      color:@textcolor;
      h4 {
        color:black;
        font-size:11px;
      }
    }

    .btn-blue {
      margin-left:0.5rem; ;
    }
  }

  .section2 {
    display:flex;
    .sideimg {
      flex:1 1;
      .dflex-center();
      justify-content: end;
      padding-right: 3rem;
      img{
        box-shadow: 0px 3px 48px #0000001A;
      }
    }

    .description {
      flex:1 1;
      display:flex;
      justify-content: center;
      align-items: start;
      flex-direction: column;
      gap:1rem;
      font-size:13px;
    }
  }

  .btn-red {
    background: #ef5350 0% 0% no-repeat padding-box;
    border: none;
    color:#E2E5ED;
  }
  .btn-blue {
    background: #0DABD8 0% 0% no-repeat padding-box;
    border:none;
    color:#E2E5ED;
  }

  .btn-outline {
    border: 1px solid #E2E5ED;
    color: @textcolor;
  }
  .btn {
    padding: 0.5rem 0.9rem;
    border-radius: 28px;
    font-size:10px;
    
  }
}
</style>