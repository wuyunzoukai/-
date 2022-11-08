<template>
  <div>
    <div class="test-search">
      <div class="test-search-body">
        <el-form label-position="left" label-width="150px" v-model="searchData">
          <el-form-item label="搜索">
            <el-input @change="search" style="width:1000px" v-model="searchData.testName" placeholder="输入试卷名搜索"></el-input>
            <!-- <button @click="search" class="search-button"><svg t="1659948975809" class="icon1" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2563" width="20" height="20"><path d="M966.4 924.8l-230.4-227.2c60.8-67.2 96-156.8 96-256 0-217.6-176-390.4-390.4-390.4-217.6 0-390.4 176-390.4 390.4 0 217.6 176 390.4 390.4 390.4 99.2 0 188.8-35.2 256-96l230.4 227.2c9.6 9.6 28.8 9.6 38.4 0C979.2 950.4 979.2 934.4 966.4 924.8zM102.4 441.6c0-185.6 150.4-339.2 339.2-339.2s339.2 150.4 339.2 339.2c0 89.6-35.2 172.8-92.8 233.6-3.2 0-3.2 3.2-6.4 3.2-3.2 3.2-3.2 3.2-3.2 6.4-60.8 57.6-144 92.8-233.6 92.8C256 780.8 102.4 627.2 102.4 441.6z" p-id="2564" fill="#ffffff"></path></svg></button> -->
          </el-form-item>
          <el-form-item label="筛选">
            <el-input @change="search" v-model="searchData.testLabel" placeholder="类别、公司、方向"></el-input>
          </el-form-item>
       </el-form>
      </div>
    </div>
    <div  class="test-list">
      <div v-show="testList.length">
        <div class="test-list-head">大厂面试真题</div>
        <el-divider></el-divider>
        <div class="test-list-body">
          <ul>
            <li class="test-list-body-li"  v-for="item in testList" :key="item.testId">
              <div>
                <router-link target="_blank" :to="{
                  name:'papers',
                  params:{
                    id:item.testId
                  }
                }"><div class="test-list-body-li-name">{{item.testName}}</div></router-link>
                <div class="test-list-body-li-img">
                  <img v-if="item.testCompany=='百度'" src="../assets/baidu.png" alt="">
                  <img v-else-if="item.testCompany=='阿里巴巴'" src="../assets/alibaba.jpeg" alt="">
                  <img v-else-if="item.testCompany=='腾讯'" src="../assets/tencent.jpeg" alt="">
                  <img v-else-if="item.testCompany=='字节跳动'" src="../assets/字节跳动.png" alt="">
                  </div>
                <div class="test-list-body-li-div">
                  <span>{{item.testReleaseTime}}</span>
                  <el-divider direction="vertical"></el-divider>
                  <span>{{item.testViews}}</span>
                </div>
                <div class="test-list-body-li-tag"><el-tag class="test-list-body-li-tag1"  v-for="(items,index) in item.testLabel.split(/\s+/)" :key='index'>{{items}}</el-tag></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div v-show="!testList.length">
        <div class="test-list-svg"><svg t="1666159046170" class="icon1" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8230" width="64" height="40"><path d="M745.3 0H278.7c-52.3 0-99.4 31.9-118.8 80.5L4.6 468.6c-3 7.6-4.6 15.6-4.6 23.8V960c0 35.3 28.7 64 64 64h896c35.3 0 64-28.7 64-64V492.3c0-8.1-1.6-16.2-4.6-23.8l-155.2-388C844.7 31.9 797.7 0 745.3 0zM278.7 64h466.7c26.2 0 49.7 15.9 59.4 40.2L946.3 458c4.2 10.5-3.5 21.9-14.9 21.9H755.6c-13.8 0-26 8.8-30.4 21.9l-14 42.1-14 42.1c-4.4 13.1-16.6 21.9-30.4 21.9H357.2c-13.8 0-26-8.8-30.4-21.9l-14-42.1-14-42.1c-4.4-13.1-16.6-21.9-30.4-21.9H92.6c-11.3 0-19.1-11.4-14.9-21.9l141.5-353.8C229 79.9 252.5 64 278.7 64zM928 960H96c-17.7 0-32-14.3-32-32V576c0-17.7 14.3-32 32-32h143.6c3.4 0 6.5 2.2 7.6 5.5l26.3 78.8c8.7 26.1 33.2 43.8 60.7 43.8h355.7c27.5 0 52-17.6 60.7-43.8l26.3-78.8c1.1-3.3 4.1-5.5 7.6-5.5H928c17.7 0 32 14.3 32 32v352c0 17.7-14.3 32-32 32z" p-id="8231" fill="#bfbfbf"></path></svg></div>
        <div class="test-list-info">暂无数据</div>
      </div>
      <div class="test-list-foot">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="pageSize"
          layout="total,prev, pager, next"
          :total="total">
        </el-pagination>
      </div>
    </div>
    
    
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'Test',
  data() {
    return {
      searchData:{
        testName:'',
        testLabel:''
      },
      testList:[],
      currentPage:1,
      pageSize:12,
      total:0
    }
  },

  mounted(){
    axios.get(`http://localhost:8082/tests/${this.currentPage}/${this.pageSize}`)
      .then(response=>{
        this.testList=response.data.data.records
        this.total=response.data.data.total
        this.currentPage=response.data.data.current
      }).catch((error)=> {
      console.log(error);
    });
  },

  methods: {
    handleCurrentChange(currentPage) {
      this.currentPage=currentPage
      // axios.get(`http://localhost:8082/tests/${this.currentPage}/${this.pageSize}`)
      //   .then(response=>{
      //     this.testList=response.data.data.records
      //     this.total=response.data.data.total
      //     this.currentPage=response.data.data.current
      //   }).catch((error)=> {
      //   console.log(error);
      // })
      this.search()
      this.$nextTick(() => {
	      window.scroll(0,0);
      })
    },

    search(){
      let param=''
      param = '?testName='+this.searchData.testName
      param += '&testLabel='+this.searchData.testLabel
      axios.get(`http://localhost:8082/tests/${this.currentPage}/${this.pageSize}${param}`)
        .then(response=>{
          this.testList=response.data.data.records
          this.total=response.data.data.total
          this.currentPage=response.data.data.current
        }).catch((error)=> {
        console.log(error);
        })
    }
  },
}
</script>

<style scoped> 
.test-search {
  width: 1850px;
  margin: auto;
  margin-top: 90px;
  background-color: #fff;
}

.test-search-body {
  padding: 30px 40px;
}

.search-button {
  width: 70px;
  vertical-align: middle;
  height: 40px;
  background-color: #00a4ff;
  border: none;
}

.test-list {
  float: left;
  width: 1850px;
  margin-top: 30px;
  background-color: #fff;
  margin-left: 26.5px;
}

.test-list-head {
  padding-top: 20px;
  padding-left: 30px;
  font-size: 18px;
  color: black;
}

.test-list-body {
  width: 1850px;
  float: left;
}


.test-list-body-li {
  float: left;
  width: 16%;
  margin-left: 10px;
  border:1px solid #f0f0f0;
  margin-bottom: 10px;
  height: 300px;
}

img {
  width: 64px;
  height: 64px;
}

.test-list-body-li-name {
  font-size: 15px;
  color: black;
  font-weight: bold;
  margin: 30px 40px;
  height: 30px;
}

.test-list-body-li-img {
  text-align: center;
  margin-bottom: 30px;
}

.test-list-body-li-div {
  margin-left: 40px;
  margin-bottom: 20px;
}

.test-list-body-li-tag {
  margin-left: 40px;
  margin-right: 40px;
}

.test-list-body-li-tag1 {
  margin-right: 7px;
  margin-bottom: 7px;
  
}

.test-list-foot {
  float: right;
}

.test-list-svg {
  padding-top: 100px;
  text-align: center;
}

.test-list-info {
  padding-top: 10px;
  text-align: center;
  padding-bottom: 150px;
  color: #bfbfbf;
}
</style>