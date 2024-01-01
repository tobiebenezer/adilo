<template>
  <tr >
    <td class="thumbnail">
      <img src="../../assets/recordings/thumbnaiil.png" alt="" />
    </td>
    <td class="data-title">
      <span class="title">Getting it right first time</span>
      <span class="description">
        the vdeo description is shown here <br />
        if the user has added it
      </span>
    </td>
    <td>324</td>
    <td>923kb</td>
    <td>3 <i class="mdi mdi-application-parentheses-outline:"></i> ago</td>
    <td class="action">...</td>
  </tr>
</template>

<script setup>

const props = defineProps({
  record: Object
});

</script>

<style lang="less" scoped>
@import '../../assets/base.less';

tr {
  .thumbnail {
    img {
      border-radius: 6px;
      height: 45px;
    }
  }

  .data-title {
    display: flex;
    flex-direction: column;
    .title {
      font-size: 11px;
      color: black;
    }
    .description {
      font-size: 10px;
      color: @textcolor;
    }
  }
}

th,
td {
  padding: 0.1rem 1rem;
}
</style>

