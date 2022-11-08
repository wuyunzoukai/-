<template>
  <div class="upload-body">
    <div class="upload-body-left">
      <div class="upload-body-left-head">上传题目</div>
      <el-divider></el-divider>
      <div class="upload-body-left-body">
        <el-form label-position="left" label-width="200px" :model="tableData">
          <el-form-item label="题型">
            <el-radio-group v-model="tableData.uploadType">
              <el-radio label="简答题">简答</el-radio>
              <el-radio label="单选题">单选</el-radio>
              <el-radio label="不定项题">不定项</el-radio>
              <el-radio label="填空题">填空</el-radio>
              <el-radio label="编程题">编程</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="难度">
            <el-radio-group v-model="tableData.uploadDifficulty">
              <el-radio label="简单">简单</el-radio>
              <el-radio label="中等">中等</el-radio>
              <el-radio label="困难">困难</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="标签">
            <el-input v-model="tableData.uploadLabel" placeholder="不同标签以空格分隔"></el-input>
          </el-form-item>
          <el-form-item label="题目">
            <el-input v-model="tableData.uploadName" placeholder="请输入题目内容"></el-input>
          </el-form-item>
          <el-form-item label="内容">
            <quill-editor
              class="editor"
              v-model="tableData.uploadContent"
              :options="editorOption"
              @change="onEditorChange($event)"
            />
          </el-form-item>
          <el-form-item label="参考解析">
            <quill-editor
              class="editor"
              v-model="tableData.uploadAnswer"
              :options="editorOption"
              @change="onEditorChange1($event)"
              />
          </el-form-item>
        </el-form>
      </div>
      <div class="upload-body-left-foot">
        <el-button @click="uploadSubject">提交</el-button>
      </div>
    </div>
    <div class="upload-body-right">
      我是右侧
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'Upload',
  data() {
    return {
      tableData:{
        uploadType:'简答题',
        uploadDifficulty:'简单',
        uploadName:'',
        uploadLabel:'',
        uploadContent:'',
        uploadAnswer:''
    },
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

  methods: {
    onEditorChange() {
      this.conversion = this.escapeStringHTML(this.tableData.uploadContent)
    },
    onEditorChange1() {
      this.conversion1 = this.escapeStringHTML(this.tableData.uploadAnswer)
    },

    // 转码
    escapeStringHTML(content) {
      content = content.replace(/&lt;/g, '<')
      content = content.replace(/&gt;/g, '>')
      return content
    },

    uploadSubject(){
      axios.post("http://localhost:8082/upload", {
        uploadName:this.tableData.uploadName,
        uploadType:this.tableData.uploadType,
        uploadDifficulty:this.tableData.uploadDifficulty,
        uploadLabel:this.tableData.uploadLabel,
        uploadContent:this.conversion,
        uploadAnswer:this.conversion1,
        uploadUserId:this.$store.state.userId
        })
        .then((response) => {
          this.$message.success("上传题目成功，请等待管理员审批")
          this.tableData.uploadName='',
          this.tableData.uploadType='简答题',
          this.tableData.uploadDifficulty='简单',
          this.tableData.uploadLabel='',
          this.tableData.uploadContent='',
          this.tableData.uploadAnswer=''
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
}
</script>

<style scoped>
.upload-body {
  margin-top: 30px;
  width: 1800px;
  margin:auto;
  background-color: pink;
}

.upload-body-left {
  margin-top: 30px;
  width: 74%;
  float: left;
  background-color: #fff;
}

.upload-body-right {
  margin-top: 30px;
  width: 24%;
  float: right;
  background-color: #fff;
}

.upload-body-left-head {
  padding-top: 20px;
  padding-left: 30px;
  font-size: 18px;
  color: black;
}

.upload-body-left-body {
  padding-left: 40px;
  padding-right: 40px;
}

.upload-body-left-foot{
  padding-left: 240px;
}

.editor :deep() .ql-container{
  min-height: 300px;
}

.editor {
  line-height: 0px !important;
}
</style>