<template>
  <div class="header">
    <div class="header-icon">
      <img src="../assets/icon.png" alt="" />
      <span>冲鸭</span>
    </div>
    <div class="header-nav">
      <ul>
        <li>
          <router-link to="/homepage"
            ><svg
              t="1659946860912"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2539"
              width="200"
              height="200"
            >
              <path
                d="M362.666667 895.914667V639.850667c0-36.266667 33.109333-63.850667 72.533333-63.850667h153.6c39.253333 0 72.533333 27.648 72.533333 63.850667v256.064h59.904c61.269333 0 110.762667-47.957333 110.762667-106.730667V414.165333L557.162667 139.328a63.808 63.808 0 0 0-90.325334 0L192 414.165333v375.018667c0 58.88 49.386667 106.730667 110.762667 106.730667H362.666667z m42.666666 0h213.333334V639.850667c0-10.709333-12.586667-21.184-29.866667-21.184h-153.6c-17.408 0-29.866667 10.389333-29.866667 21.184v256.064z m469.333334-439.082667v332.352c0 82.645333-68.885333 149.397333-153.429334 149.397333H302.762667C218.133333 938.581333 149.333333 871.936 149.333333 789.184V456.832l-27.584 27.584a21.333333 21.333333 0 1 1-30.165333-30.165333L436.672 109.162667a106.474667 106.474667 0 0 1 150.656 0l345.088 345.088a21.333333 21.333333 0 0 1-30.165333 30.165333L874.666667 456.832z"
                p-id="2540"
              ></path></svg
            >首页</router-link
          >
        </li>
        <li>
          <router-link to="/subject"
            ><svg
              t="1659946941363"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2844"
              width="200"
              height="200"
            >
              <path
                d="M811.115789 1005.136842H212.884211a194.290526 194.290526 0 0 1-194.021053-194.021053V212.884211A194.290526 194.290526 0 0 1 212.884211 18.863158h598.231578a194.290526 194.290526 0 0 1 194.021053 194.021053v598.231578a194.290526 194.290526 0 0 1-194.021053 194.021053zM212.884211 72.757895a140.126316 140.126316 0 0 0-140.126316 140.126316v598.231578a140.126316 140.126316 0 0 0 140.126316 140.126316h598.231578a140.126316 140.126316 0 0 0 140.126316-140.126316V212.884211a140.126316 140.126316 0 0 0-140.126316-140.126316z"
                p-id="2845"
              ></path>
              <path
                d="M788.210526 350.315789H439.781053a25.6 25.6 0 1 1 0-50.930526h348.429473a25.6 25.6 0 0 1 0 50.930526zM292.109474 350.315789H233.903158a26.947368 26.947368 0 0 1 0-53.894736h58.206316a26.947368 26.947368 0 0 1 0 53.894736zM788.210526 538.947368H439.781053a25.6 25.6 0 1 1 0-50.930526h348.429473a25.6 25.6 0 0 1 0 50.930526zM292.109474 540.564211H233.903158a26.947368 26.947368 0 0 1 0-53.894737h58.206316a26.947368 26.947368 0 0 1 0 53.894737zM788.210526 745.094737H439.781053a25.6 25.6 0 1 1 0-50.930526h348.429473a25.6 25.6 0 0 1 0 50.930526zM292.109474 746.442105H233.903158a26.947368 26.947368 0 1 1 0-53.894737h58.206316a26.947368 26.947368 0 0 1 0 53.894737z"
                p-id="2846"
              ></path></svg
            >题目</router-link
          >
        </li>
        <li>
          <router-link to="/test"
            ><svg
              t="1664774312330"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="7131"
              width="200"
              height="200"
            >
              <path
                d="M864 96H256c-35.346 0-64 28.654-64 64v640H96v64c0 35.347 28.654 64 64 64h608c35.346 0 64-28.653 64-64V224h96v-64c0-35.346-28.654-64-64-64zM160 896c-17.673 0-32-14.327-32-32v-32h544v32a63.692 63.692 0 0 0 8.583 32H160z m640-736v704c0 17.673-14.327 32-32 32h-32c-17.673 0-32-14.327-32-32v-64H224V160c0-17.673 14.327-32 32-32h552.584A63.682 63.682 0 0 0 800 160z m96 32h-64v-32c0-17.673 14.327-32 32-32s32 14.327 32 32v32z m-560 96h160c8.836 0 16-7.164 16-16s-7.164-16-16-16H336c-8.836 0-16 7.164-16 16s7.164 16 16 16z m0 128h352c8.837 0 16-7.164 16-16s-7.163-16-16-16H336c-8.836 0-16 7.164-16 16s7.164 16 16 16z m0 128h224c8.837 0 16-7.163 16-16s-7.163-16-16-16H336c-8.836 0-16 7.163-16 16s7.164 16 16 16z m0 128h352c8.837 0 16-7.163 16-16s-7.163-16-16-16H336c-8.836 0-16 7.163-16 16s7.164 16 16 16z"
                p-id="7132"
              ></path></svg
            >试卷</router-link
          >
        </li>
        <li>
          <router-link to="/personal"
            ><svg
              t="1659946962842"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3793"
              width="200"
              height="200"
            >
              <path
                d="M948.429 924.731c-2.46-8.109-4.002-16.502-6.582-24.567-48.391-151.257-148.057-251.827-298.776-301.767-13.726-4.548-27.874-7.663-42.694-10.852 116.843-42.834 185.898-168.401 157.277-292.451-25.574-110.841-122.337-191.856-237.502-194.88-118.3-3.107-220.4 73.21-250.717 186.853-14.685 55.046-11.042 109.374 11.298 161.853 28.16 66.151 76.767 111.652 144.08 138.664-4.912 1.034-8.846 1.739-12.718 2.696-131.402 32.463-229.755 108.08-294.957 226.599-18.699 33.989-31.715 70.273-40.614 108.044-0.846 3.591 0.017 4.229 3.352 4.136 7.161-0.199 14.342-0.304 21.492 0.037 3.833 0.183 5.379-0.903 6.352-4.762 17.117-67.826 48.557-128.318 96.605-179.128C308.262 635.295 436.09 591.203 585.098 615.75c113.252 18.657 202.833 78.216 269.556 171.561 29.623 41.443 50.259 87.253 62.539 136.729 0.996 4.011 2.541 5.29 6.634 5.064 6.978-0.386 13.996-0.238 20.991-0.05 3.392 0.092 4.827-0.314 3.611-4.323zM512.483 573C390.066 572.974 290.991 473.883 291 351.484c0.009-122.39 99.131-221.496 221.52-221.484 122.395 0.012 221.491 99.126 221.48 221.52-0.011 122.398-99.136 221.506-221.517 221.48z"
                p-id="3794"
              ></path></svg
            >个人</router-link
          >
        </li>
      </ul>
    </div>
    <div class="header-search">
      <input
        v-model="$store.state.content"
        type="text"
        placeholder="全站搜索面试题目"
      />
      <router-link to="/subject"
        ><button>
          <svg
            t="1659948975809"
            class="icon1"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2563"
            width="20"
            height="20"
          >
            <path
              d="M966.4 924.8l-230.4-227.2c60.8-67.2 96-156.8 96-256 0-217.6-176-390.4-390.4-390.4-217.6 0-390.4 176-390.4 390.4 0 217.6 176 390.4 390.4 390.4 99.2 0 188.8-35.2 256-96l230.4 227.2c9.6 9.6 28.8 9.6 38.4 0C979.2 950.4 979.2 934.4 966.4 924.8zM102.4 441.6c0-185.6 150.4-339.2 339.2-339.2s339.2 150.4 339.2 339.2c0 89.6-35.2 172.8-92.8 233.6-3.2 0-3.2 3.2-6.4 3.2-3.2 3.2-3.2 3.2-3.2 6.4-60.8 57.6-144 92.8-233.6 92.8C256 780.8 102.4 627.2 102.4 441.6z"
              p-id="2564"
              fill="#ffffff"
            ></path>
          </svg></button
      ></router-link>
    </div>
    <div class="header-upload">
      <router-link to="/upload"><button>上传</button></router-link>
    </div>
    <div class="header-portrait">
      <el-button @click="dialogFormVisible = true" v-show="!$store.state.isLoad"
        >登录</el-button
      >
      <el-dialog
        :title="isRegist ? '注册' : '登录'"
        :visible.sync="dialogFormVisible"
        :modal-append-to-body="false"
      >
        <el-form :model="tableData" v-show="!isRegist">
          <el-form-item label="手机号" label-width="120px">
            <el-input
              v-model="tableData.userAccount"
              placeholder="请输入手机号"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" label-width="120px">
            <el-input
              type="password"
              v-model="tableData.userPassword"
              placeholder="请输入密码"
            >
            </el-input>
          </el-form-item>
        </el-form>
        <el-form :model="tableData" v-show="isRegist">
          <el-form-item label="手机号" label-width="120px">
            <el-input
              v-model="tableData.userAccount"
              placeholder="请输入手机号"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" label-width="120px">
            <el-input v-model="tableData.userPassword" placeholder="请输入密码">
            </el-input>
          </el-form-item>
          <el-form-item label="昵称" label-width="120px">
            <el-input v-model="tableData.userName" placeholder="请输入昵称">
            </el-input>
          </el-form-item>
          <el-form-item label="性别" label-width="120px">
            <el-input v-model="tableData.userSex" placeholder="请输入性别">
            </el-input>
          </el-form-item>
          <el-form-item label="电子邮箱" label-width="120px">
            <el-input v-model="tableData.userEmail" placeholder="请输入邮箱">
            </el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="text" @click="isRegist = !isRegist">{{
            isRegist ? "已注册？点击登录" : "未注册？点击注册"
          }}</el-button>
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" v-show="!isRegist" @click="login"
            >登录</el-button
          >
          <el-button type="primary" v-show="isRegist" @click="register"
            >注册</el-button
          >
        </div>
      </el-dialog>
      <!-- <img v-show="isLoad" src="../assets/icon.png" alt=""> -->
      <el-dropdown @command="logOut">
        <span class="el-dropdown-link">
          <img v-show="$store.state.isLoad" :src="$store.state.portrait" alt="" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import axios from "axios"
export default {
  name: "Nav",
  data() {
    return {
      isRegist: false,
      dialogFormVisible: false,
      tableData: {
        userAccount: "",
        userPassword: "",
        userName: "",
        userSex: "",
        userEmail: "",
        userPortrait:''
      },
      content: "",
    };
  },

  mounted() {
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
          this.$store.state.isLoad = response.data.flag
          this.$store.commit('SETVALUE',response.data.data.userPortrait)
          this.$store.commit('GETUSERID',response.data.data.userId)
        })
        .catch((error) => {
          console.log(error);
        });
    }
    
  },
  watch:{
    'this.tableData.userPortrait':{
      handler(){
        location.reload()
      }
    }
  },

  methods: {
    login() {
      axios
        .post("http://localhost:8082/users/login", {
          userAccount: this.tableData.userAccount,
          userPassword: this.tableData.userPassword,
        })
        .then((response) => {
          if (response.data.code == 1) {
            this.$message.success("登陆成功")
            this.tableData.userAccount=''
            this.tableData.userPassword=''
            window.localStorage.setItem("token", response.data.data)
            this.dialogFormVisible = !this.dialogFormVisible
            let token = window.localStorage.getItem("token")
              axios
                .post(
                  "http://localhost:8082/users/tokentoinfo",
                  {},
                  {
                    headers: {
                      token: token,
                    },
                  }
                )
                .then((response) => {
                  this.$store.state.isLoad = response.data.data
                  this.$store.commit('SETVALUE',response.data.data.userPortrait)
                })
                .catch((error) => {
                  console.log(error);
                });
          } else {
            this.$message.error("登陆失败");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    register() {
      if (
        this.tableData.userAccount != "" &&
        this.tableData.userPassword != "" &&
        this.tableData.userName != ""
      ) {
        let date = dayjs().format('YYYY-MM-DD') //年月日
        let time = dayjs().format('HH:mm:ss') //时间
        let timeBegin = `${date} ${time}`
        axios
          .post("http://localhost:8082/users/register", {
            userAccount: this.tableData.userAccount,
            userPassword: this.tableData.userPassword,
            userName: this.tableData.userName,
            userSex: this.tableData.userSex,
            userEmail: this.tableData.userEmail,
            userRegtime:timeBegin
          })
          .then((response) => {
            console.log(response.data);
            if (response.data.code == 1) {
              this.$message.success("注册成功");
              this.dialogFormVisible=false
              this.isRegist=false
              this.tableData.userAccount=''
              this.tableData.userPassword=''
              this.tableData.userName=''
              this.tableData.userSex=''
              this.tableData.userEmail=''
            }
            if (response.data.msg == "昵称重复了请修改") {
              this.$message.warning("昵称重复了请修改");
            }
            if (response.data.msg == "该手机已经注册") {
              this.$message.warning("该手机已经注册");
            }
            if (response.data.msg == "密码不能为空！") {
              this.$message.warning("密码不能为空！");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        this.$message.warning("手机、昵称、密码不能为空！");
      }
    },

    logOut() {
      this.$store.state.isLoad = false;
      this.$message.success("登出成功！");
      this.$store.state.userInfo = [];
      window.localStorage.removeItem('token')
    },
  },
};
</script>

<style scoped>
.el-dropdown-link {
  cursor: pointer;
}

.header {
  position: fixed;
  top: 0;
  height: 64px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 20px;
  background-color: #fff;
  width: 100%;
  z-index: 2;
}

.header-icon {
  float: left;
  vertical-align: middle;
  line-height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 50px;
}

img {
  height: 32px;
  width: 32px;
  display: block;
}

.header-icon span {
  margin: 0 15px;
}

li {
  float: left;
  list-style: none;
  margin-left: 15px;
}

.header-nav li a {
  display: block;
  height: 64px;
  padding: 0 30px;
  line-height: 64px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.85);
}

.header-nav li a:hover {
  border-bottom: 3px solid #00a4ff;
  color: #00a4ff;
  fill: #00a4ff;
}

.icon {
  margin-right: 30px;
  height: 18px;
  width: 18px;
}

.header-nav {
  float: left;
  height: 64px;
  margin-left: 50px;
}

.header-search {
  float: left;
  height: 64px;
  width: 600px;
  margin-left: 100px;
}

.header-search input {
  float: left;
  width: 550px;
  height: 44px;
  border: 1px solid #00a4ff;
  border-right: 0;
  margin-top: 10px;
}

.header-search button {
  float: left;
  width: 50px;
  height: 44px;
  background-color: #00a4ff;
  margin-top: 10px;
  border: none;
}

.header-upload {
  float: left;
  width: 100px;
  height: 64px;
  margin-left: 70px;
}

.header-upload button {
  float: left;
  width: 90px;
  height: 40px;
  margin: 12px 5px;
  background-color: #00a4ff;
  border: none;
  color: white;
}

.header-portrait {
  float: right;
  width: 100px;
  height: 64px;
  margin-right: 20px;
}

.header-portrait img {
  border-radius: 30px;
  margin: 16px 34px;
}

.header-portrait button {
  margin-top: 12px;
  margin-left: 20px;
}

.router-link-active {
  border-bottom: 3px solid #00a4ff;
  color: #00a4ff;
  fill: #00a4ff;
}
</style>