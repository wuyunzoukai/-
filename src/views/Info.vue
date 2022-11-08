<template>
  <div>
    <div class="personal-main-card">
      <img v-show="$store.state.isLoad" :src="$store.state.portrait" alt="">
      <img v-show="!$store.state.isLoad" src="../assets/icon.png" alt="">
      <div class="personal-main-card-detail">
        <div class="personal-main-card-detail-name">{{tableData.userName? tableData.userName:'请先登录'}}</div>
        <div class="personal-main-card-detail-info">{{tableData.userIntroduction? tableData.userIntroduction:'暂无'}}</div>
      </div>
    </div>
    <div class="personal-main-info">
      <div  class="personal-main-info-header">
        <div class="personal-main-info-header-title">信息</div>
        <div class="personal-main-info-header-extra">
          <button class="personal-main-info-header-extra-button" @click="dialogFormVisible = true" v-show="tableData.userName">编辑</button>
          <el-dialog title="修改信息" :visible.sync="dialogFormVisible">
            <el-form v-model="userTable">
              <el-form-item label="头像" :label-width="formLabelWidth">
                <el-upload
                  class="avatar-uploader"
		              action="http://localhost:8082/api/upload/picture"
		              :on-success="uploadSuccess"
		              :limit="1"
		              list-type="picture-card"
		              accept=".png, .jpg"
		            >
                  <i class="el-icon-plus"></i>
		              <!-- <el-button size="small" type="primary">点击上传</el-button>
		              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件</div> -->
		            </el-upload>
              </el-form-item>
              <el-form-item label="性别" :label-width="formLabelWidth">
                <el-radio v-model="userTable.userSex" label="男">男</el-radio>
                <el-radio v-model="userTable.userSex" label="女">女</el-radio>
              </el-form-item>
              <el-form-item label="简介" :label-width="formLabelWidth">
                <el-input v-model="userTable.userIntroduction" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="邮箱" :label-width="formLabelWidth">
                <el-input v-model="userTable.userEmail" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="updateInfo">确 定</el-button>
            </div>
          </el-dialog>
        </div>
      </div>
      <el-divider></el-divider>
      <div class="personal-main-info-body">
        <div class="personal-main-info-body-descriptions">
          <table>
            <tbody>
              <tr class="personal-main-info-body-descriptions-tr">
                <td class="personal-main-info-body-descriptions-td" colspan="1">
                  <div>
                    <span class="personal-main-info-body-descriptions-span1">性别</span>
                    <span class="personal-main-info-body-descriptions-span2">{{tableData.userSex?tableData.userSex:'暂无'}}</span>
                  </div>
                </td>
              </tr>
              <tr class="personal-main-info-body-descriptions-tr">
                <td class="personal-main-info-body-descriptions-td" colspan="1">
                  <div>
                    <span class="personal-main-info-body-descriptions-span1">简介</span>
                    <span class="personal-main-info-body-descriptions-span2">{{tableData.userIntroduction? tableData.userIntroduction:'暂无'}}</span>
                  </div>
                </td>
              </tr>
              <tr class="personal-main-info-body-descriptions-tr">
                <td class="personal-main-info-body-descriptions-td" colspan="1">
                  <div>
                    <span class="personal-main-info-body-descriptions-span1">邮箱</span>
                    <span class="personal-main-info-body-descriptions-span2">{{tableData.userEmail?tableData.userEmail:'暂无'}}</span>
                  </div>
                </td>
              </tr>
              <tr class="personal-main-info-body-descriptions-tr">
                <td class="personal-main-info-body-descriptions-td" colspan="1">
                  <div>
                    <span class="personal-main-info-body-descriptions-span1">注册时间</span>
                    <span class="personal-main-info-body-descriptions-span3">{{tableData.userRegtime?tableData.userRegtime:'暂无'}}</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'Info',
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: '120px',
      userTable:[],
      tableData:[],
      headers:{
        'token':window.localStorage.getItem("token")
      },
      EncodedEntryURI:'',
      imgUrl:''
    }
  },

  methods: {
    updateInfo() {
      this.dialogFormVisible = false
      axios.post('http://localhost:8082/users/update',{
        userId:this.tableData.userId,
        userPortrait:this.tableData.userPortrait,
        userSex:this.userTable.userSex,
        userIntroduction:this.userTable.userIntroduction,
        userEmail:this.userTable.userEmail
      })
      .then(response=>{
        location.reload()
      }).catch((error)=> {
      console.log(error);
      })
    },

    uploadSuccess(response) {
      this.tableData.userPortrait = response.data
      this.$store.commit('SETVALUE',response.data)
    },
  },

  mounted() {
    // if(this.$store.state.isLoad){
    //   axios.get(`http://localhost:8082/users/${this.$store.state.userId}`)
    //     .then(response=>{
    //         this.tableData=response.data.data
    //         console.log("1",response.data.data)
    //       }).catch((error)=> {
    //       console.log(error);
    //     })
    // }
    
    let token = window.localStorage.getItem("token")
    if(token){
      axios
        .post(
          "http://localhost:8082/users/tokentoinfo",
          {},
          {
            headers: {
              'token': token,
            },
          }
        )
        .then((response) => {
          this.tableData=response.data.data
          this.$store.commit("GETUSERID",this.tableData.userId)
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
}

</script>

<style scoped>
.personal-main-card {
  height: 140px;
  width: 1650px;
  background-color: #fff;
}

.personal-main-card img {
  height: 96px;
  width: 96px;
  border-radius: 50%;
  margin: 22px 22px;
  float: left;
}

.personal-main-card-detail {
  float: left;
  margin-top: 22px;
}

.personal-main-card-detail-name {
  font-weight: bold;
  font-size: 25px;
  color: black;
}

.personal-main-card-detail-info {
  margin-top: 15px;
}

.personal-main-info {
  height: 440px;
  width: 1650px;
  margin-top: 20px;
  background-color: #fff;
}

.personal-main-info-header {
  height: 65px;
  font-size: 20px;
}

.personal-main-info-header-title {
  float: left;
  margin-left: 35px;
  margin-top: 30px;
  
}

.personal-main-info-header-extra {
  margin-left: 1500px;
  margin-top: 30px;
}

.personal-main-info-header-extra-button {
  color: #00a4ff;
  margin-top: 5px;
  height: 80px;
  width: 120px;
  background-color: #fff;
  border: none;
  font-size: 15px;
}

.personal-main-info-body-descriptions {
  height: 330px;
  width: 1600px;
  margin-left: 25px;
  font-size: 20px;
  color: #000;
}

.personal-main-info-body-descriptions table {
  width: 100%;
  height: 300px;
}


.personal-main-info-body-descriptions-span2 {
  margin-left: 100px;
}


.personal-main-info-body-descriptions-span3 {
  margin-left: 60px;
}

.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>