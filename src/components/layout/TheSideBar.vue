
<template>
  <main>
    <div class="sidebar">
      <ul>
        <li>My Record</li>
        <li>Request</li>
      </ul>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </main>
</template>

<script setup>
</script>

<style lang="less" scoped>
@import '../../assets/base.less';

main {
  background: #ebf2f6;
  height: 90vh;
  width: 16rem;
  position: sticky;
  top: 0;
  padding: 1.3rem;
  flex: 1 1;
  border-right:solid 2px gray ;

  li {
    display: flex;
    gap: 0.7rem;
    align-items: center;
    list-style: none;
    padding: 0.7rem 1.2rem;
    margin: 0.4rem 0;

    &:nth-child(1) {
      background: #E2E5ED 0% 0% no-repeat padding-box;
      border: 1px solid #0dabd838;
      border-radius: 10px;
    }
  }
}
</style>