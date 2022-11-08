<template>
  <el-container class="subject">
    <el-aside class="subject-aside" width="210px">
      <el-menu :unique-opened="true" @select="handleSelect">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>编程语言</template>
          <el-menu-item-group>
            <el-menu-item index="java">java</el-menu-item>
            <el-menu-item index="python">python</el-menu-item>
            <el-menu-item index="c++">c++</el-menu-item>
            <el-menu-item index="c语言">c语言</el-menu-item>
            <el-menu-item index="golang">golang</el-menu-item>
            <el-menu-item index="javascript">javascript</el-menu-item>
            <el-menu-item index="php">php</el-menu-item>
            <el-menu-item index="c#">c#</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>学科知识</template>
          <el-menu-item-group>
            <el-menu-item index="数据结构">数据结构</el-menu-item>
            <el-menu-item index="算法">算法</el-menu-item>
            <el-menu-item index="软件工程">软件工程</el-menu-item>
            <el-menu-item index="数据库">数据库</el-menu-item>
            <el-menu-item index="操作系统">操作系统</el-menu-item>
            <el-menu-item index="网络">网络</el-menu-item>
            <el-menu-item index="设计模式">设计模式</el-menu-item>
            <el-menu-item index="分布式">分布式</el-menu-item>
            <el-menu-item index="Linux">Linux</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-setting"></i>备战目标</template>
          <el-menu-item-group>
            <el-menu-item index="实习">实习</el-menu-item>
            <el-menu-item index="校招">校招</el-menu-item>
            <el-menu-item index="社招">社招</el-menu-item>
            <el-menu-item index="比赛">比赛</el-menu-item>
            <el-menu-item index="考试">考试</el-menu-item>
            <el-menu-item index="考研">考研</el-menu-item>
            <el-menu-item index="考证">考证</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title"><i class="el-icon-setting"></i>领域方向</template>
          <el-menu-item-group>
            <el-menu-item index="前端">前端</el-menu-item>
            <el-menu-item index="后端">后端</el-menu-item>
            <el-menu-item index="人工智能">人工智能</el-menu-item>
            <el-menu-item index="大数据">大数据</el-menu-item>
            <el-menu-item index="云计算">云计算</el-menu-item>
            <el-menu-item index="物联网">物联网</el-menu-item>
            <el-menu-item index="软件测试">软件测试</el-menu-item>
            <el-menu-item index="Android开发">Android开发</el-menu-item>
            <el-menu-item index="IOS开发">IOS开发</el-menu-item>
            <el-menu-item index="运维">运维</el-menu-item>
            <el-menu-item index="安全">安全</el-menu-item>
            <el-menu-item index="产品">产品</el-menu-item>
            <el-menu-item index="设计">设计</el-menu-item>
            <el-menu-item index="小程序">小程序</el-menu-item>
            <el-menu-item index="区块链">区块链</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-main class="subject-main">
      <div class="subject-main-search">
        <div class="subject-main-search-body">
          <el-form label-position="left" label-width="120px" v-model="searchData">
            <el-form-item label="搜索">
              <el-input @change="search" style="width:700px" v-model="searchData.subjectName" placeholder="按题目名称搜索"></el-input>
              <!-- <button @click="search" class="search-button"><svg t="1659948975809" class="icon1" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2563" width="20" height="20"><path d="M966.4 924.8l-230.4-227.2c60.8-67.2 96-156.8 96-256 0-217.6-176-390.4-390.4-390.4-217.6 0-390.4 176-390.4 390.4 0 217.6 176 390.4 390.4 390.4 99.2 0 188.8-35.2 256-96l230.4 227.2c9.6 9.6 28.8 9.6 38.4 0C979.2 950.4 979.2 934.4 966.4 924.8zM102.4 441.6c0-185.6 150.4-339.2 339.2-339.2s339.2 150.4 339.2 339.2c0 89.6-35.2 172.8-92.8 233.6-3.2 0-3.2 3.2-6.4 3.2-3.2 3.2-3.2 3.2-3.2 6.4-60.8 57.6-144 92.8-233.6 92.8C256 780.8 102.4 627.2 102.4 441.6z" p-id="2564" fill="#ffffff"></path></svg></button> -->
            </el-form-item>
            <el-form-item label="筛选">
              <el-input @change="search" v-model="searchData.subjectLabel" placeholder="类别、公司、方向"></el-input>
            </el-form-item>
            <el-form-item label="题型">
              <div>
                <el-radio-group @change="search" v-model="searchData.subjectType">
                  <el-radio-button label="简答"></el-radio-button>
                  <el-radio-button label="单选"></el-radio-button>
                  <el-radio-button label="不定项"></el-radio-button>
                  <el-radio-button label="填空"></el-radio-button>
                  <el-radio-button label="编程"></el-radio-button>
                </el-radio-group>
              </div>
            </el-form-item>
            <el-form-item label="难度">
              <div>
                <el-radio-group @change="search" v-model="searchData.subjectDifficulty">
                  <el-radio-button label="简单"></el-radio-button>
                  <el-radio-button label="中等"></el-radio-button>
                  <el-radio-button label="困难"></el-radio-button>
                </el-radio-group>
              </div>
            </el-form-item>
          </el-form>
        </div>
        <div class="subject-main-search-body-footer">
          <el-button class="subject-main-search-body-footer-button" @click="reset">重置</el-button>
        </div>
      </div>
      <div class="subject-main-list">
        <div v-show="tableData.length" class="subject-main-list-card">
          <ul>
            <li v-for="item in tableData" :key="item.subjectId">
              <router-link target="_blank" :to="{
                name:'topics',
                params:{
                  id:item.subjectId
                }
              }">{{item.subjectName}}</router-link>
              <p>
                <el-tag v-for="(items,index) in item.subjectLabel.split(/\s+/)" :key='index'>{{items}}</el-tag>
              </p>
              <div class="subject-main-list-div">{{item.subjectType}}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;{{item.subjectDifficulty}}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;{{item.subjectReleaseTime}}</div>
              <div class="subject-main-list-div">
                <div class="subject-main-list-div-1"><svg t="1665134131290" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3145" width="200" height="200"><path d="M505.477547 832c-184.96 0-368.64-129.706667-478.848-251.093333a102.698667 102.698667 0 0 1-0.085334-137.898667C136.837547 321.621333 320.517547 192 505.43488 192l6.912 0.042667 6.229333-0.042667c184.917333 0 368.682667 129.621333 478.976 250.922667 35.498667 39.381333 35.541333 98.645333 0.085334 137.941333-110.336 121.429333-294.4 251.136-480.170667 251.136l-5.845333-0.042667-6.144 0.042667z m12.288-64c164.693333 0 331.392-118.869333 432.469333-230.144a38.784 38.784 0 0 0-0.085333-52.010667c-101.034667-111.104-267.434667-229.888-431.189334-229.888L511.536213 256h-5.589333C341.59488 256 175.06688 374.784 74.032213 485.973333a38.784 38.784 0 0 0 0.085334 52.010667C175.06688 649.130667 341.59488 768 506.160213 768l5.632-0.042667 5.973334 0.042667z" p-id="3146"></path><path d="M512.048213 704a192.213333 192.213333 0 0 1-192-192c0-105.856 86.144-192 192-192s192 86.144 192 192-86.144 192-192 192zM512.09088 384a128.170667 128.170667 0 0 0-128.042667 128c0 70.570667 57.429333 128 128 128s128-57.429333 128-128S582.61888 384 512.09088 384z" p-id="3147"></path></svg>&nbsp;&nbsp;&nbsp;{{item.subjectViews}}</div>
                <div class="subject-main-list-div-4"><svg t="1667786315984" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2579" width="200" height="200"><path d="M194.792475 478.69343c16.167215 0 29.330002-13.163811 29.330002-29.346375 0-16.092513-13.015432-29.212322-29.801746-29.212322-0.086981 0-0.177032 0-0.264013 0l-60.606333 0.177032c-1.560542-0.206708-3.149736-0.325411-4.76963-0.325411-21.291932 0-38.636972 17.537422-38.636972 39.09439l-0.323365 423.853427c0 21.645996 16.9613 38.578644 38.636972 38.578644l1.677199 0.057305c0.707105 0.029676 1.385557 0.059352 2.032286 0.059352 0.823761 0 1.64957-0.029676 1.826602-0.11768l59.926858 0.086981c0.559748 0 1.001817-0.11768 1.089821-0.11768 0 0-0.029676 0-0.116657 0.057305l3.76986-0.147356 0-0.382717c13.517875-2.236947 23.64656-13.84124 23.64656-27.799136 0-13.987572-10.129708-25.589818-23.64656-27.828812l0-0.766456-49.827849 0 1.413186-385.92356L194.792475 478.69036z" p-id="2580"></path><path d="M918.228001 436.301947c-18.199501-29.66974-45.204551-44.821835-82.22163-46.322002-1.883907-0.25071-3.799536-0.412392-5.77247-0.412392l-195.744149-0.648776c13.398148-40.359196 20.732184-83.750449 20.732184-122.740462 0-27.255761-3.00545-54.686507-8.894577-81.543178l-1.206478-3.196809-0.089028 0.01535c-12.161994-46.837748-53.477982-79.259158-101.626585-79.259158-55.393611 0-97.18032 46.248324-97.18032 107.576087l-0.059352 3.047406c-0.057305 2.222621-0.116657 4.40124 0.059352 6.16849-2.796696 101.715613-83.869153 187.397041-188.559517 199.324698l-3.358491 0.36839-0.76441 274.43128 0 228.491994 13.930267 0.005117 0.587378 0.11154 3.179412-0.027629 0.01535-0.081864 485.653959 0.198521 8.685823-0.236384c19.84907 0 31.038924-5.03569 48.621371-16.344247 16.22452-10.482749 29.359678-25.266453 37.751812-42.316781 2.562359-3.76986 4.418636-7.862062 5.565762-12.251022l75.30101-336.657506c1.089821-4.225231 1.472538-8.643867 1.149173-12.56006C935.660023 478.42737 930.212964 455.900308 918.228001 436.301947zM879.148961 488.807788l-0.912789 3.799536 0.295735 0.074701-80.129992 355.2387-0.148379 0.353041c-2.296299 5.536087-6.15314 10.160407-11.101849 13.340843-3.415796 2.209318-7.185656 3.622504-11.161201 4.239558-0.470721-0.057305-0.941442-0.057305-1.413186-0.057305l-3.03308 0.086981-462.84344-0.530073-0.177032-392.299781c79.540567-35.986609 148.155295-73.959455 183.080735-167.79868l0.295735 0.074701 1.119497-3.328815c3.709485-11.263531 6.596232-22.350031 8.598842-32.909527 5.447059-28.577872 5.212722-56.422034 5.183046-58.041928-1.766226-13.502525 1.206478-24.738427 8.80555-33.394574 8.598842-9.777691 21.673625-14.151301 30.744211-14.151301 22.586414 0.766456 45.526893 30.966269 45.61592 48.163953 0.029676 0.26606 5.38873 26.945699 5.418406 55.186903 0.057305 27.65178-2.651386 45.277206-3.858888 51.828412l-0.500397 0-0.589424 3.062755c-5.595438 29.522384-15.518438 57.794287-29.41903 84.003206l-0.972141 2.856048 0.118704 0.132006c-1.885953 4.696975-2.856048 9.643638-2.856048 14.709003 0 25.032116 27.121707 25.032116 41.697681 25.032116l233.381351 0.264013 7.15598 0.221034c1.266853 0.045025 2.503007 0.089028 3.592828 0.118704l0 0.425695 5.538133-0.248663c10.453073 0 19.937075 5.344728 25.412786 14.296611C880.709503 471.080032 881.829 480.283648 879.148961 488.807788z" p-id="2581"></path></svg>&nbsp;&nbsp;{{item.subjectSupport}}</div>
                <div class="subject-main-list-div-2"><svg t="1664787025547" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9163" width="200" height="200"><path d="M335.008 916.629333c-35.914667 22.314667-82.88 10.773333-104.693333-25.557333a77.333333 77.333333 0 0 1-8.96-57.429333l46.485333-198.24a13.141333 13.141333 0 0 0-4.021333-12.864l-152.16-132.586667c-31.605333-27.52-35.253333-75.648-8.234667-107.733333a75.68 75.68 0 0 1 51.733333-26.752L354.848 339.2c4.352-0.362667 8.245333-3.232 10.026667-7.594667l76.938666-188.170666c16.032-39.2 60.618667-57.92 99.52-41.461334a76.309333 76.309333 0 0 1 40.832 41.461334l76.938667 188.16c1.781333 4.373333 5.674667 7.253333 10.026667 7.605333l199.712 16.277333c41.877333 3.413333 72.885333 40.458667 69.568 82.517334a76.938667 76.938667 0 0 1-26.08 51.978666l-152.16 132.586667c-3.541333 3.082667-5.141333 8.074667-4.021334 12.853333l46.485334 198.24c9.621333 41.013333-15.36 82.336-56.138667 92.224a75.285333 75.285333 0 0 1-57.525333-9.237333l-170.976-106.24a11.296 11.296 0 0 0-12.010667 0l-170.986667 106.24zM551.786667 756.032l170.976 106.24c2.624 1.621333 5.717333 2.122667 8.650666 1.408 6.410667-1.557333 10.56-8.426667 8.928-15.424l-46.485333-198.24a77.141333 77.141333 0 0 1 24.277333-75.733333L870.293333 441.706667c2.485333-2.165333 4.053333-5.312 4.330667-8.746667 0.565333-7.136-4.490667-13.173333-10.976-13.696l-199.712-16.288a75.989333 75.989333 0 0 1-64.064-47.168l-76.938667-188.16a12.309333 12.309333 0 0 0-6.538666-6.741333c-5.898667-2.496-12.725333 0.373333-15.328 6.741333l-76.949334 188.16a75.989333 75.989333 0 0 1-64.064 47.168l-199.701333 16.288a11.68 11.68 0 0 0-7.978667 4.181333 13.226667 13.226667 0 0 0 1.333334 18.261334l152.16 132.586666a77.141333 77.141333 0 0 1 24.277333 75.733334l-46.485333 198.229333a13.333333 13.333333 0 0 0 1.514666 9.877333c3.488 5.792 10.581333 7.530667 16.064 4.128l170.986667-106.229333a75.296 75.296 0 0 1 79.562667 0z" p-id="9164"></path></svg>&nbsp;&nbsp;&nbsp;{{item.subjectCollection}}</div>
                <div class="subject-main-list-div-3"><svg t="1665134377025" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4921" width="200" height="200"><path d="M511.999488 847.882863c-28.734592 0-56.729303-2.604314-83.969807-7.099698L231.232673 960.185602 231.232673 761.40735C128.618486 689.355337 62.772174 578.889433 62.772174 454.825836c0-217.07906 201.129864-393.058051 449.228338-393.058051 248.084146 0 449.228338 175.980014 449.228338 393.058051C961.227826 671.917176 760.083635 847.882863 511.999488 847.882863zM511.999488 117.91762c-217.086932 0-393.074156 150.851707-393.074156 336.907193 0 114.166179 66.421434 214.898395 167.761552 275.820929l-1.768346 130.234133 132.171551-79.455633c30.4487 6.497994 62.117231 10.308787 94.910422 10.308787 217.101258 0 393.073132-150.825101 393.073132-336.907193C905.073644 268.769326 729.10177 117.91762 511.999488 117.91762zM736.614169 510.976694c-31.011542 0-56.154182-25.128307-56.154182-56.150858 0-31.010271 25.14264-56.151881 56.154182-56.151881s56.154182 25.14161 56.154182 56.151881C792.768351 485.848387 767.624687 510.976694 736.614169 510.976694zM511.999488 510.976694c-31.010518 0-56.153158-25.128307-56.153158-56.150858 0-31.010271 25.14264-56.151881 56.153158-56.151881 31.011542 0 56.154182 25.14161 56.154182 56.151881C568.15367 485.848387 543.01103 510.976694 511.999488 510.976694zM287.385831 510.976694c-31.010518 0-56.153158-25.128307-56.153158-56.150858 0-31.010271 25.14264-56.151881 56.153158-56.151881s56.153158 25.14161 56.153158 56.151881C343.53899 485.848387 318.39635 510.976694 287.385831 510.976694z" p-id="4922"></path></svg>&nbsp;&nbsp;&nbsp;{{item.subjectComment}}</div>
              </div>
              <el-divider class="divider"></el-divider>
            </li>
          </ul>
        </div>
        <div v-show="!tableData.length">
          <div class="subject-main-list-svg"><svg t="1666159046170" class="icon1" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8230" width="64" height="40"><path d="M745.3 0H278.7c-52.3 0-99.4 31.9-118.8 80.5L4.6 468.6c-3 7.6-4.6 15.6-4.6 23.8V960c0 35.3 28.7 64 64 64h896c35.3 0 64-28.7 64-64V492.3c0-8.1-1.6-16.2-4.6-23.8l-155.2-388C844.7 31.9 797.7 0 745.3 0zM278.7 64h466.7c26.2 0 49.7 15.9 59.4 40.2L946.3 458c4.2 10.5-3.5 21.9-14.9 21.9H755.6c-13.8 0-26 8.8-30.4 21.9l-14 42.1-14 42.1c-4.4 13.1-16.6 21.9-30.4 21.9H357.2c-13.8 0-26-8.8-30.4-21.9l-14-42.1-14-42.1c-4.4-13.1-16.6-21.9-30.4-21.9H92.6c-11.3 0-19.1-11.4-14.9-21.9l141.5-353.8C229 79.9 252.5 64 278.7 64zM928 960H96c-17.7 0-32-14.3-32-32V576c0-17.7 14.3-32 32-32h143.6c3.4 0 6.5 2.2 7.6 5.5l26.3 78.8c8.7 26.1 33.2 43.8 60.7 43.8h355.7c27.5 0 52-17.6 60.7-43.8l26.3-78.8c1.1-3.3 4.1-5.5 7.6-5.5H928c17.7 0 32 14.3 32 32v352c0 17.7-14.3 32-32 32z" p-id="8231" fill="#bfbfbf"></path></svg></div>
          <div class="subject-main-list-info">暂无数据</div>
        </div>
        <el-pagination
          class="pagination"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="pageSize"
          layout="total, prev, pager, next, jumper"
          :total="total">
        </el-pagination>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import axios from 'axios'
export default {
  name:'Subject',
  data() {
    return {
      tableData:[],
      searchData:{
        subjectName:'',
        subjectLabel:'',
        subjectType:'',
        subjectDifficulty:''
      },
      currentPage:1,
      pageSize:12,
      total:0,
      select:[]
    }
  },

  mounted() {
    this.$router.afterEach((to,from,next)=>{
      window.scrollTo(0,0)
    })
    axios.get(`http://localhost:8082/subjects/${this.currentPage}/${this.pageSize}`)
      .then(response=>{
        this.tableData=response.data.data.records
        this.total=response.data.data.total
        this.currentPage=response.data.data.current
      }).catch((error)=> {
      console.log(error);
    })
    this.searchData.subjectName=this.$store.state.content
    this.search()
    this.$store.state.content=''
  },

  methods: {
    handleCurrentChange(currentPage) {
      this.currentPage=currentPage
      // axios.get(`http://localhost:8082/subjects/${this.currentPage}/${this.pageSize}`)
      //   .then(response=>{
      //     this.tableData=response.data.data.records
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
      param = '?subjectName='+this.searchData.subjectName
      param += '&subjectLabel='+this.searchData.subjectLabel
      param += '&subjectType='+this.searchData.subjectType
      param += '&subjectDifficulty='+this.searchData.subjectDifficulty
      axios.get(`http://localhost:8082/subjects/${this.currentPage}/${this.pageSize}${param}`)
        .then(response=>{
          this.tableData=response.data.data.records
          this.total=response.data.data.total
          this.currentPage=response.data.data.current
        }).catch((error)=> {
        console.log(error);
    });
    },

    handleSelect(keyPath){
      this.searchData.subjectLabel = keyPath
      this.search()
    },


    reset(){
      this.searchData.subjectType=''
      this.searchData.subjectDifficulty=''
      this.searchData.subjectName=''
      this.searchData.subjectLabel=''
      axios.get(`http://localhost:8082/subjects/${this.currentPage}/${this.pageSize}`)
      .then(response=>{
        this.tableData=response.data.data.records
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
.subject-aside {
  position: fixed;
  height: 100%;
  background-color: #fff;
}

.subject-main {
  margin-left: 210px;
}

.subject-main-search {
  height: 340px;
  width: 1650px;
  background-color: white;
  float: left;
}

.subject-main-list {
  width: 1650px;
  background-color: white;
  margin-top: 20px;
  float: left;
}

.subject-main-search-body {
  /* padding: 30px 40px; */
  padding-top: 30px;
  padding-left: 40px;
  padding-right: 40px;
}

.search-button {
  width: 70px;
  vertical-align: middle;
  height: 40px;
  background-color: #00a4ff;
  border: none;
}

.subject-main-list ul li {
  
  width: 100%;
}

.subject-main-list ul li a {
  display: block;
  font-weight:bold;
  font-size: 16px;
  color: black;
}

.subject-main-list ul li p {
  padding-top: 20px;
}

.subject-main-list-div {
  padding-top: 20px;
}

.subject-main-list-div-1 {
  float: left;
  margin-left: 10px;
}
.subject-main-list-div-2 {
  float: left;
  margin-left: 35px;
}
.subject-main-list-div-3 {
  float: left;
  margin-left: 35px;
}
.subject-main-list-div-4 {
  float: left;
  margin-left: 35px;
}

.icon {
  height: 15px;
  width: 15px;
  vertical-align: middle;
}

.divider {
  margin-top: 40px;
}

.subject-main-list-card {
  padding: 20px 16px;
  float: left;
  width: 1650px;
}

.pagination {
  margin-left: 1250px;
  padding-bottom: 20px;
  float: right;
}

.subject-main-list-svg {
  padding-top: 100px;
  text-align: center;
}

.subject-main-list-info {
  padding-top: 10px;
  text-align: center;
  padding-bottom: 150px;
  color: #bfbfbf;
}

.subject-main-search-body-footer {
  margin-left: 30px;
}

.subject-main-search-body-footer-button{
  background-color: #00a4ff;
  color: white;
}
</style>