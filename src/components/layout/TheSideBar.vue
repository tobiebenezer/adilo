
<template>
  <main>
    <div class="sidebar">
      <ul>
        <li><RouterLink to="/recentrecording">
          <span>My Recodings</span>
        </RouterLink>
      </li>
        <li>Request</li>
      </ul>
    </div>
    <div class="content">
      <div class="top">
        <RouterLink to="/recentrecording">
          <span>Recodings</span>
        </RouterLink>
      <div class="title">
        <div class="record">
          <h4>Total recordings 0</h4>
        </div>
        <div>
          <button class="btn btn-outline">By Date</button>
          <button class="btn btn-outline">Add Filter</button>
          <button class="btn btn-blue">New Request</button>
        <button class="btn btn-red">Start Recording</button>
        </div>
      </div>
    </div>
      <slot></slot>
    </div>
  </main>
</template>

<script setup>
import { RouterLink } from "vue-router";

</script>

<style lang="less" scoped>
@import '../../assets/base.less';

main {
  display:flex;
  
  
  .sidebar {
    position: sticky; 
    background: #ebf2f6;
    min-height: 90vh;
    width: 16rem;
    top: 0;
    padding: 1.3rem;
  
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
  
  .content {
    padding:0.6rem 0.6rem 0.6rem 3rem; 
    width: 80vw; 
    .top{
    margin-left:1rem;
    span{
      margin-left:12.5rem;
    }

    .record{
      text-align: center
    }
    .title {
      .dflex-center();
      justify-content: space-between;
      div {
        width:37vw;
        .dflex-center();
        gap:1rem;
        .btn-red {
          width:10rem;
        }

        .btn-blue {
          width:9rem;
        }

      }
    }
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