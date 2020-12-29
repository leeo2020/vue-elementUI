<template>
     <el-menu
      :default-openeds="['1', '3']"
      class="lx-menu"
      text-color="e54def"
      active-text-color="ffd04f"
      >
        <el-submenu
          v-for="group in routes"
          :key="group.id"
          :index="group.id+''"
          class="lx-submenu"
          >
          <template slot="title">
            <i :class="group.icon">{{group.text}}</i>
          </template>
              <el-menu-item-group>
                <el-menu-item
                v-for="nav in group.arr"
                :key="nav.id"
                :index="nav.id+''"
                >
                  <router-link
                    :to="nav.path"
                    v-text="nav.text"
                    tag="div">
                  </router-link>
                </el-menu-item>
              </el-menu-item-group>
        </el-submenu>
      </el-menu>
</template>

<script>
import routes from '@/index'
export default {
  name:'Aside',
  data:function(){
    return {
      routes
      }
  }
}
</script>

<style lang="scss">
.lx-aside{
  width:150px;
  height:100%;
  padding:0;
     .lx-menu{
        width:150px;
        height:100%;
        background-color:#469;
        padding:0;
        .lx-submenu{
          width:150px;
          padding-left:20px 0;
          height:50px;
          .el-submenu__title{
            height:50px;
            padding:0;
          }
        }
     }
  }
</style>
