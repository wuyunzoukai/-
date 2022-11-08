<template>
  <div class="mysubject-body">
    <div class="mysubject-body-head">我的题目( {{total}} )</div>
    <el-divider></el-divider>
    <div v-show="!uploadTable.length">
      <div class="mysubject-body-svg"><svg t="1666159046170" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8230" width="64" height="40"><path d="M745.3 0H278.7c-52.3 0-99.4 31.9-118.8 80.5L4.6 468.6c-3 7.6-4.6 15.6-4.6 23.8V960c0 35.3 28.7 64 64 64h896c35.3 0 64-28.7 64-64V492.3c0-8.1-1.6-16.2-4.6-23.8l-155.2-388C844.7 31.9 797.7 0 745.3 0zM278.7 64h466.7c26.2 0 49.7 15.9 59.4 40.2L946.3 458c4.2 10.5-3.5 21.9-14.9 21.9H755.6c-13.8 0-26 8.8-30.4 21.9l-14 42.1-14 42.1c-4.4 13.1-16.6 21.9-30.4 21.9H357.2c-13.8 0-26-8.8-30.4-21.9l-14-42.1-14-42.1c-4.4-13.1-16.6-21.9-30.4-21.9H92.6c-11.3 0-19.1-11.4-14.9-21.9l141.5-353.8C229 79.9 252.5 64 278.7 64zM928 960H96c-17.7 0-32-14.3-32-32V576c0-17.7 14.3-32 32-32h143.6c3.4 0 6.5 2.2 7.6 5.5l26.3 78.8c8.7 26.1 33.2 43.8 60.7 43.8h355.7c27.5 0 52-17.6 60.7-43.8l26.3-78.8c1.1-3.3 4.1-5.5 7.6-5.5H928c17.7 0 32 14.3 32 32v352c0 17.7-14.3 32-32 32z" p-id="8231" fill="#bfbfbf"></path></svg></div>
      <div class="mysubject-body-info">您还没有上传过题目哦</div>
    </div>
    <div v-show="uploadTable.length">
      <div v-for="(list,value) in uploadTable" :key="value" class="mysubject-body-list">
        <div class="mysubject-body-list-title">{{list.upload_name}}</div>
        <div class="mysubject-body-list-tag">
          <el-tag class="mysubject-body-list-tags" v-for="(items,index) in list.upload_label.split(/\s+/)" :key='index'>{{items}}</el-tag>
        </div>
        <div class="mysubject-body-list-state">
          <el-tag v-if="list.upload_state=='正在审核'" class="mysubject-body-list-state-tag">{{list.upload_state}}</el-tag>
          <el-tag v-else-if="list.upload_state=='通过'" class="mysubject-body-list-state-tag1">{{list.upload_state}}</el-tag>
          <el-tag v-else class="mysubject-body-list-state-tag2">{{list.upload_state}}</el-tag>
        </div>
        <div class="mysubject-body-list-reason" v-if="list.upload_state=='未通过'">
          <span>原因：{{list.upload_reason}}</span>
        </div>
        <div class="mysubject-body-list-info">
          {{list.upload_type}}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;{{list.upload_difficulty}}&nbsp;&nbsp;&nbsp;
          <el-button v-if="list.upload_state=='正在审核'" @click="updateSubject(list)">修改</el-button>&nbsp;&nbsp;&nbsp;
          <el-popconfirm
            confirm-button-text='确定'
            cancel-button-text='取消'
            icon="el-icon-info"
            icon-color="red"
            title="确认删除么，操作无法撤销"
            @confirm="deleteSubject(list.upload_id)"
          >
            <el-button v-if="list.upload_state=='正在审核'" slot="reference">删除</el-button>
          </el-popconfirm>
        </div>
        <el-divider class="divider"></el-divider>
      </div>
      <el-dialog title="修改题目" :visible.sync="dialogFormVisible">
        <el-form label-position="left" label-width="200px" :model="tableData">
          <el-form-item label="题型">
            <el-radio-group v-model="tableData.upload_type">
              <el-radio label="简答题">简答</el-radio>
              <el-radio label="单选题">单选</el-radio>
              <el-radio label="不定项题">不定项</el-radio>
              <el-radio label="填空题">填空</el-radio>
              <el-radio label="编程题">编程</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="难度">
            <el-radio-group v-model="tableData.upload_difficulty">
              <el-radio label="简单">简单</el-radio>
              <el-radio label="中等">中等</el-radio>
              <el-radio label="困难">困难</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="标签">
            <el-input v-model="tableData.upload_label" placeholder="不同标签以空格分隔"></el-input>
          </el-form-item>
          <el-form-item label="题目">
            <el-input v-model="tableData.upload_name" placeholder="请输入题目内容"></el-input>
          </el-form-item>
          <el-form-item label="内容">
            <quill-editor
              class="editor"
              v-model="tableData.upload_content"
              :options="editorOption"
              @change="onEditorChange($event)"
            />
          </el-form-item>
          <el-form-item label="参考解析">
            <quill-editor
              class="editor"
              v-model="tableData.upload_answer"
              :options="editorOption"
              @change="onEditorChange1($event)"
              />
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="updateContent">确 定</el-button>
        </div>
      </el-dialog>
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
  name:'MySubject',

  data() {
    return {
      uploadTable:[],
      currentPage:1,
      pageSize:12,
      total:0,
      dialogFormVisible:false,
      tableData:[],
      conversion:'',
      conversion1:'',
      editorOption: {
        // 编辑器配置
        placeholder: '请在这里输入',
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'], //加粗，斜体，下划线，删除线
            ['blockquote', 'code-block'], //引用，代码块
            [{ list: 'ordered' }, { list: 'bullet' }], //列表
            [{ script: 'sub' }, { script: 'super' }], // 上下标
            [{ size: ['small', false, 'large', 'huge'] }], // 字体大小
            [{ header: [1, 2, 3, 4, 5, 6, false] }], //几级标题
            [{ color: [] }, { background: [] }], // 字体颜色，字体背景颜色
            [{ font: [] }], //字体
            [{ align: [] }], //对齐方式
            ['clean'], //清除字体样式
            ["link", "image"], //上传图片、上传视频 ['image', 'video']
          ],
        },
      },
    }
  },

  mounted() {
    axios.get(`http://localhost:8082/upload/${this.$store.state.userId}/${this.currentPage}/${this.pageSize}`)
      .then(response=>{
        this.uploadTable=response.data.data.records
        this.total=response.data.data.total
        this.currentPage=response.data.data.current
      }).catch((error)=> {
      console.log(error)
    })
  },

  methods: {

    onEditorChange() {
      this.conversion = this.escapeStringHTML(this.tableData.upload_content)
    },
    onEditorChange1() {
      this.conversion1 = this.escapeStringHTML(this.tableData.upload_answer)
    },

    // 转码
    escapeStringHTML(content) {
      content = content.replace(/&lt;/g, '<')
      content = content.replace(/&gt;/g, '>')
      return content
    },


    handleCurrentChange(currentPage) {
      this.currentPage=currentPage
      axios.get(`http://localhost:8082/upload/${this.$store.state.userId}/${this.currentPage}/${this.pageSize}`)
        .then(response=>{
          this.uploadTable=response.data.data.records
          this.total=response.data.data.total
          this.currentPage=response.data.data.current
        }).catch((error)=> {
        console.log(error)
        })
      this.$nextTick(() => {
	      window.scroll(0,0)
      })
    },

    deleteSubject(id){
      // this.visible=false
      axios.delete(`http://localhost:8082/upload/${id}`)
        .then(response=>{
          this.$message.success("删除成功")
          axios.get(`http://localhost:8082/upload/${this.$store.state.userId}/${this.currentPage}/${this.pageSize}`)
            .then(response=>{
              this.uploadTable=response.data.data.records
              this.total=response.data.data.total
              this.currentPage=response.data.data.current
            }).catch((error)=> {
            console.log(error)
            })
          }).catch((error)=> {
          console.log(error)
        })
    },

    updateSubject(list) {
      this.dialogFormVisible=true
      this.tableData=list
      this.onEditorChange()
      this.onEditorChange1()
    },

    updateContent(){
      axios.put("http://localhost:8082/upload",{
        uploadId:this.tableData.upload_id,
        uploadName:this.tableData.upload_name,
        uploadContent:this.conversion,
        uploadAnswer:this.conversion1,
        uploadType:this.tableData.upload_type,
        uploadDifficulty:this.tableData.upload_difficulty,
        uploadLabel:this.tableData.upload_label,
        uploadUserId:this.tableData.upload_user_id
      })
      .then(response=>{
        this.$message.success("修改成功！")
        this.dialogFormVisible=false
        axios.get(`http://localhost:8082/upload/${this.$store.state.userId}/${this.currentPage}/${this.pageSize}`)
          .then(response=>{
            this.uploadTable=response.data.data.records
            this.total=response.data.data.total
            this.currentPage=response.data.data.current
          }).catch((error)=> {
          console.log(error)
          })
      }).catch((error)=> {
      console.log(error)
      })
    }
  },
}
</script>

<style scoped>
.mysubject-body {
  width: 1650px;
  background-color: #fff;
  float: left;
}

.mysubject-body-head {
  padding-top: 20px;
  padding-left: 30px;
  font-size: 18px;
  color: black;
}

.mysubject-body-svg {
  padding-top: 100px;
  text-align: center;
}

.mysubject-body-info {
  padding-top: 10px;
  text-align: center;
  padding-bottom: 150px;
  color: #bfbfbf;
}

.el-pagination {
  float: right;
}

.mysubject-body-list-title {
  font-size: 16px;
  color: #000;
  font-weight: bold;
  margin-left: 30px;
  margin-bottom: 10px;
}

.mysubject-body-list-tag {
  margin-left: 30px;
  margin-bottom: 10px;
}

.mysubject-body-list-state {
  margin-left: 30px;
  margin-bottom: 10px;
}

.mysubject-body-list-state-tag {
  color: white;
  background: #64cbdd;

}

.mysubject-body-list-state-tag1 {
  color: #389e0d;
  background: #f6ffed;
  border-color: #b7eb8f
}

.mysubject-body-list-state-tag2 {
  background-color: #f85c5f;
  color: white;
  background: #f85c5f;
}

.mysubject-body-list-reason {
  margin-left: 30px;
  margin-bottom: 10px;
  font-size: 14px;
  color: #000;
}

.mysubject-body-list-info {
  margin-left: 30px;
}

.editor {
  line-height: 0px !important;
}
</style>