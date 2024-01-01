<template>
  <section>
    <div class="title">
      <span>Live Preview</span>
    </div>
    <div class="preview">
      <video src=""></video>
    </div>
    <div>
      <button class="btn">Start recording</button>
    </div>
  </section>
</template>

<script></script>

<style lang="less" scoped>

@import '../assets/base.less';
section {
    .dflex-center();
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.6rem;
    gap:1rem;
    height: 89vh;
  .title {
    color: #637c8e;
    font-size: 12px;
    align-self: start;
    margin-left:14rem ;
  }

  .preview {
    background: #21455e 0% 0% no-repeat padding-box;
    border-radius: 8px;
    video {
        height: 60vh;
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
    margin-top:1.8rem;
  }
}
</style>