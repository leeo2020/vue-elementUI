<template>
<div class="lx-layout">
 <el-container class="layout">
    <el-aside width="150px" class="lx-aside">
      <Aside />
    </el-aside>
  <el-container class="lx-container-wrap">
        <el-header class="lx-header">
          <Header />
        </el-header>

        <el-main class="lx-main">
          <Main />
        </el-main>

  </el-container>
</el-container>
</div>
</template>

<script>
import {Aside,Header,Main} from './'
export default {
components:{
  Aside,Header,Main
}
}
</script>

<style lang="scss" scoped>
*{
  padding:0;
  margin:0;
}
 html,body{
   width:100%;
   height:100%;
 }
 .lx-layout{
   width:100%;
   height:100%;
   padding:0;
   .layout{
      width:100%;
      height:100%;
      padding:0;
   }
 }
.lx-container-wrap{
    position:absolute;
    left:150px;
    top:0;
    right:0;
    bottom:0;
    padding:0;
}

 .lx-aside{
    width:150px;
    height:100%;
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    padding:0;
    box-sizing: border-box;
    border:1px solid #eee;
 }
 .lx-header{
    position:absolute;
    left:0;
    top:0;
    right:0;
    height:60px;
    background-color:tomato;
 }
 .lx-main{
    position:absolute;
    left:0px;
    top:60px;
    right:0;
    bottom:0;
    background-color:cadetblue;
    }

</style>>
