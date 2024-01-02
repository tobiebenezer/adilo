<template>
  <section>
    <table>
      <thead>
        <th class="thumbnail">Recordings</th>
        <th class="title">Title</th>
        <th>Views</th>
        <th>Size</th>
        <th>last Modified</th>
        <th class="action"></th>
      </thead>
      <tbody v-for="record in recordingStore.recordings">
        <TableItem key="item" :record="record" />
      </tbody>
    </table>
  </section>
</template>

<script setup>
import TableItem from "@/components/showRecordingPage/TableItem.vue";
import {useRecordings} from "@/store/RecordingsStore"

const recordingStore = useRecordings();

// const recordings = ref([1,2,3,4,5,5,6,54,4,]);


</script>

<style lang="less" scoped>
@import '../assets/base.less';

section {
  .dflex-center();
  table {
    width: 80vw;
    margin-top: 1.2rem;
    text-align: left;
    color: #21455e;
    font: normal normal medium 18px/27px Poppins;
    font-size: 12px;
    .thumbnail{
        width:5vw;
    }

    .action {
        width:10vw;
    }
    .title {
      width: 30vw;
    }
    th,td {
        padding:0.1rem 1rem;
    }
  }

 
}
</style>
