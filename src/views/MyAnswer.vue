<template>
  <div class="myanswer-body">
    <div class="myanswer-body-head">我的回答( {{total}} )</div>
    <el-divider></el-divider>
    <div v-show="!commentTable.length">
      <div class="myanswer-body-svg"><svg t="1666159046170" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8230" width="64" height="40"><path d="M745.3 0H278.7c-52.3 0-99.4 31.9-118.8 80.5L4.6 468.6c-3 7.6-4.6 15.6-4.6 23.8V960c0 35.3 28.7 64 64 64h896c35.3 0 64-28.7 64-64V492.3c0-8.1-1.6-16.2-4.6-23.8l-155.2-388C844.7 31.9 797.7 0 745.3 0zM278.7 64h466.7c26.2 0 49.7 15.9 59.4 40.2L946.3 458c4.2 10.5-3.5 21.9-14.9 21.9H755.6c-13.8 0-26 8.8-30.4 21.9l-14 42.1-14 42.1c-4.4 13.1-16.6 21.9-30.4 21.9H357.2c-13.8 0-26-8.8-30.4-21.9l-14-42.1-14-42.1c-4.4-13.1-16.6-21.9-30.4-21.9H92.6c-11.3 0-19.1-11.4-14.9-21.9l141.5-353.8C229 79.9 252.5 64 278.7 64zM928 960H96c-17.7 0-32-14.3-32-32V576c0-17.7 14.3-32 32-32h143.6c3.4 0 6.5 2.2 7.6 5.5l26.3 78.8c8.7 26.1 33.2 43.8 60.7 43.8h355.7c27.5 0 52-17.6 60.7-43.8l26.3-78.8c1.1-3.3 4.1-5.5 7.6-5.5H928c17.7 0 32 14.3 32 32v352c0 17.7-14.3 32-32 32z" p-id="8231" fill="#bfbfbf"></path></svg></div>
      <div class="myanswer-body-info">您还没有写过回答哦</div>
    </div>
    <div v-show="commentTable.length">
      <div v-for="(list,value) in commentTable" :key="value">
        <router-link target="_blank" :to="{
          name:'topics',
          params:{
            id:list.subject_id
          }
        }">
          <div class="myanswer-body-list-name">{{list.subject_name}}</div>
        </router-link>
        <div class="myanswer-body-list-portrait"><img  :src="list.user_portrait" alt=""></div>
        <div class="myanswer-body-list-info">
          <div class="myanswer-body-list-info-name">{{list.user_name}}</div>
          <div class="myanswer-body-list-info-time">{{timeFormatSeconds(list.comment_release_time)}}</div>
        </div>
        <div class="ql-snow">
          <div v-html="list.comment_content" class="myanswer-body-list-content ql-editor"></div>
        </div>
        <el-divider></el-divider>
      </div>
    </div>
    <div>
      <el-pagination
        layout="prev, pager, next"
        :current-page="currentPage"
        :page-size="pageSize"
        @current-change="handleCurrentChange"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'MyAnswer',
  data() {
    return {
      currentPage:1,
      pageSize:12,
      total:0,
      commentTable:[]
    }
  },

  mounted() {
    axios.get(`http://localhost:8082/comments/user/${this.$store.state.userId}/${this.currentPage}/${this.pageSize}`)
      .then(response=>{
        this.commentTable=response.data.data.records
        this.total=response.data.data.total
        this.currentPage=response.data.data.current
      }).catch((error)=> {
      console.log(error)
    })
  },

  methods: {
    handleCurrentChange(currentPage) {
      this.currentPage=currentPage
      axios.get(`http://localhost:8082/comments/user/${this.$store.state.userId}/${this.currentPage}/${this.pageSize}`)
        .then(response=>{
          this.commentTable=response.data.data.records
          this.total=response.data.data.total
          this.currentPage=response.data.data.current
        }).catch((error)=> {
        console.log(error)
      })
      this.$nextTick(() => {
	      window.scroll(0,0)
      })
    },

    timeFormatSeconds(time) {
      var d = time ? new Date(time) : new Date();
      var year = d.getFullYear();
      var month = d.getMonth() + 1;
      var day = d.getDate();
      var hours = d.getHours();
      var min = d.getMinutes();
      var seconds = d.getSeconds();

      if (month < 10) month = '0' + month;
      if (day < 10) day = '0' + day;
      if (hours < 0) hours = '0' + hours;
      if (min < 10) min = '0' + min;
      if (seconds < 10) seconds = '0' + seconds;

      return (year + '-' + month + '-' + day + ' ' + hours + ':' + min + ':' + seconds);
    }
  },
}
</script>

<style scoped>
.myanswer-body {
  width: 1650px;
  background-color: #fff;
  float: left;
}

.myanswer-body-head {
  padding-top: 20px;
  padding-left: 30px;
  font-size: 18px;
  color: black;
}

.myanswer-body-svg {
  padding-top: 100px;
  text-align: center;
}

.myanswer-body-info {
  padding-top: 10px;
  text-align: center;
  padding-bottom: 150px;
  color: #bfbfbf;
}

.el-pagination {
  float: right;
}

.myanswer-body-list-portrait {
  display: inline-block;
  margin-left: 30px;
}

.myanswer-body-list-portrait img {
  height: 40px;
  width: 40px;
  border-radius: 50%;
}

.myanswer-body-list-info {
  display: inline-block;
  vertical-align: middle;
  margin-left: 30px;
}

.myanswer-body-list-info-name {
  font-size: 16px;
  color: #000;
  font-weight: bold;
}

.myanswer-body-list-info-time {
  font-size: 16px;
  
}

.myanswer-body-list-name {
  margin-left: 30px;
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 20px;
}

.myanswer-body-list-content {
  margin-left: 20px;
  margin-right: 20px;
}
</style>