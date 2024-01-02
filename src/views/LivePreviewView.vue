<template>
  <section>
    <div>
      <div class="title">
        <font-awesome-icon :icon="['fas', 'record-vinyl']" style="color: #ec0909; margin-right: 0.3rem;" />
        <span>Live Preview</span>
      </div>
      <div class="preview">
        <video :style="{height:(recordSettings.screen || recordSettings.camera)?'':'60vh'}" id="previewVideo" ></video>
      </div>
    </div>
      <div>

      <button class="btn" @click="recordSettings.startVRecord('previewVideo')">Start recording</button>
    </div>
  </section>
</template>

<script setup>
import { useRecordSettings } from '@/store/RecorderSettingsStore';
import { onMounted } from 'vue'
const recordSettings = useRecordSettings();

onMounted(() => {
  recordSettings.previewRecord('previewVideo');
  console.log(`the component is now mounted.`)
})



</script>

<style lang="less" scoped>

@import '../assets/base.less';
section {
    .dflex-center();
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top:1rem;
    padding: 1.6rem;
    gap:0.5rem;
    height: 89vh;
  .title {
    color: #637c8e;
    font-size: 12px;
    align-self: start;
    
  }

  .preview {
    background: #21455e 0% 0% no-repeat padding-box;
    border-radius: 8px;
    video {
        max-height: 70vh;
        width:65vw;
    }
  }

  .btn {
    background-color:#0DABD8;
    color :white;
    border: none;
    font-size: 13px;
    padding: 0.8rem 0.7rem;
    width:14rem;
    margin-top:0.5rem;
  }
}
</style>