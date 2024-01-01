<script setup>
const props = defineProps({
  show: Boolean
})
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-backdrop">
      <div class="modal-container">
        <div class="modal-header">
          <slot name="header"> </slot>
        </div>

        <div class="modal-body">
          <slot name="body"></slot>
        </div>

        <div class="modal-footer">
          <slot name="footer"> </slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style lang="less" scoped >
@import '../assets/base.less';

.modal-backdrop {
  position: fixed;
  .dflex-center();
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;

  .modal-container {
    width: 325px;
    height: 20rem;
    margin: auto;
    padding: 1rem 0px;background: #FFFFFF 0% 0% no-repeat padding-box;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
  }

  .modal-header h3 {
    margin-top: 0;
  }

  .modal-body {
    margin: 20px 0;
  }

  .modal-default-button {
    float: right;
  }
}
</style>