<template>
  <div class="paper-body">
    <div class="paper-body-left">
      <div class="paper-body-left-head">
        <span class="paper-body-left-head-title">百度2018校园招聘-机器学习</span> 
        <el-button v-if="!isVisiable" @click="isVisiable=!isVisiable" class="paper-body-left-head-button">隐藏解析</el-button>
        <el-button v-if="isVisiable" @click="isVisiable=!isVisiable" class="paper-body-left-head-button">显示解析</el-button>
        </div>
      <el-divider></el-divider>
      <div class="paper-body-left-list" v-for="(item,value) in tableData" :key="value">
        <div class="paper-body-left-list-type">{{value+1}}.{{item.subject_type}}</div>
        <router-link target="_blank" :to="{
          name:'topics',
          params:{
            id:item.subject_id
          }
        }">
          <div class="paper-body-left-list-name">{{item.subject_name}}</div>
        </router-link>
        <div style="white-space: pre-line" class="paper-body-left-list-content">{{item.subject_content}}</div>
        <div v-if="!isVisiable" class="paper-body-left-list-answer">解析：{{item.subject_answer}}</div>
        <el-divider></el-divider>
      </div>
    </div>
    <div class="paper-body-right">
      <div class="paper-body-right-head">试卷信息</div>
      <el-divider></el-divider>
      <div class="paper-body-right-view">浏览数：{{tableData1.test_views}}</div>
      <div class="paper-body-right-label">标签：<el-tag v-for="(items,index) in tableData2" :key='index'>{{items}}</el-tag></div>
      <div class="paper-body-right-time">发布时间：{{tableData1.test_release_time}}</div>
      <div class="paper-body-right-user">上传者：{{tableData1.user_name}}</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'Papers',
  data() {
    return {
      tableData:[],
      tableData1:[],
      tableData2:[],
      isVisiable:false
    }
  },

  mounted() {
    axios.get(`http://localhost:8082/tests/getsome/${this.$route.params.id}`)
      .then(response=>{
        this.tableData=response.data.data
        this.tableData1=response.data.data[0]
        this.tableData2=this.tableData1.test_label.split(/\s+/)
      }).catch((error)=> {
      console.log(error);
    })
  },
}
</script>

<style>
.paper-body {
  margin-top: 30px;
  width: 1800px;
  margin: auto;
}

.paper-body-left {
  margin-top: 30px;
  width: 63%;
  float: left;
  background-color: #fff;
}

.paper-body-left-head {
  font-size: 25px;
  font-weight: bold;
  color: #000;
  padding-top: 30px;
  /* padding-left: 30px; */
  height: 70px;
}

.paper-body-left-head-title{
  float: left;
  margin-left: 30px;
  margin-right: 650px;
}
.paper-body-left-head-button {
  float: left;
}

.paper-body-right {
  margin-top: 30px;
  width: 35%;
  float: right;
  background-color: #fff;
}

.paper-body-left-list-type {
  margin: 30px 30px;
  font-size: 18px;
  font-weight: bold;
  color: #000;
}

.paper-body-left-list-name {
  margin: 30px 30px;
  font-size: 16px;
  font-weight: bold;
  color: #000;
}

.paper-body-left-list-content {
  margin: 30px 30px;
  font-size: 15px;
  color: #000;
}

.paper-body-left-list-answer {
  margin: 30px 30px;
  font-size: 15px;
  color: #000;
}

.paper-body-right-head {
  font-size: 16px;
  font-weight: bold;
  margin-top: 30px;
  margin-left: 30px;
  color: #000;
}

.paper-body-right-view {
  font-size: 16px;
  color: #000;
  margin-top: 30px;
  margin-left: 30px;
}

.paper-body-right-label {
  font-size: 16px;
  color: #000;
  margin-top: 20px;
  margin-left: 30px;
}

.el-tag {
  margin-right: 10px;
}

.paper-body-right-time {
  font-size: 16px;
  color: #000;
  margin-top: 20px;
  margin-left: 30px;
}

.paper-body-right-user {
  font-size: 16px;
  color: #000;
  margin-top: 20px;
  margin-left: 30px;
  margin-bottom: 30px;
}
</style>