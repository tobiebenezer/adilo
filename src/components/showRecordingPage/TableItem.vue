<template>
  <tr >
    <td class="thumbnail">
      <img :src="record.thumbnail" alt="" />
    </td>
    <td class="data-title">
      <span class="title">{{ record.title }}</span>
      <span class="description">
        {{ record.description }}
      </span>
    </td>
    <td>{{ record.view }}</td>
    <td>{{ record.size }}</td>
    <td>{{ record.updatedAt }}</td>
    <td class="action">{{ record.action }}</td>
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

