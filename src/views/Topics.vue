<template>
  <div>
    <div class="topic-body">
      <div class="topic-body-left">
        <div class="topic-body-left-topic">
          <div class="topic-body-left-topic-head">
            <span>{{tableData.subject_type}}</span>
            <el-divider direction="vertical"></el-divider>
            <span v-if='tableData.subject_label'>
              <el-tag v-for="(item,index) in tableData.subject_label.split(/\s+/)" :key='index'>{{item}}</el-tag>
            </span>
          </div>
          <el-divider class="divider-xy"></el-divider>
          <div class="topic-body-left-topic-body ql-snow">
            <div class="topic-body-left-topic-body-title">{{tableData.subject_name}}</div>
            <div v-html="tableData.subject_content" style="white-space: pre-line" class="topic-body-left-topic-body-content ql-editor"></div>
            <div v-if="isVisiable" style="white-space: pre-line" class="topic-body-left-topic-body-answer ql-editor">
              <div>解析：</div>
              <div v-html="tableData.subject_answer"></div>
            </div>
            <el-button :class="!isVisiable? 'topic-body-left-topic-body-button1':'topic-body-left-topic-body-button2'" @click="changeVisiable">{{!isVisiable? '文字解析':'隐藏文字解析'}}</el-button>
          </div>
          <el-divider class="divider-xy"></el-divider>
          <div class="topic-body-left-topic-actions">
            <ul>
              <li class="topic-body-left-topic-actions-li">
                <div style="cursor:pointer" @click="supportSubject" v-if="!isSupport" class="topic-body-left-topic-actions-div">
                  <svg t="1667786315984" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2579" width="200" height="200"><path d="M194.792475 478.69343c16.167215 0 29.330002-13.163811 29.330002-29.346375 0-16.092513-13.015432-29.212322-29.801746-29.212322-0.086981 0-0.177032 0-0.264013 0l-60.606333 0.177032c-1.560542-0.206708-3.149736-0.325411-4.76963-0.325411-21.291932 0-38.636972 17.537422-38.636972 39.09439l-0.323365 423.853427c0 21.645996 16.9613 38.578644 38.636972 38.578644l1.677199 0.057305c0.707105 0.029676 1.385557 0.059352 2.032286 0.059352 0.823761 0 1.64957-0.029676 1.826602-0.11768l59.926858 0.086981c0.559748 0 1.001817-0.11768 1.089821-0.11768 0 0-0.029676 0-0.116657 0.057305l3.76986-0.147356 0-0.382717c13.517875-2.236947 23.64656-13.84124 23.64656-27.799136 0-13.987572-10.129708-25.589818-23.64656-27.828812l0-0.766456-49.827849 0 1.413186-385.92356L194.792475 478.69036z" p-id="2580"></path><path d="M918.228001 436.301947c-18.199501-29.66974-45.204551-44.821835-82.22163-46.322002-1.883907-0.25071-3.799536-0.412392-5.77247-0.412392l-195.744149-0.648776c13.398148-40.359196 20.732184-83.750449 20.732184-122.740462 0-27.255761-3.00545-54.686507-8.894577-81.543178l-1.206478-3.196809-0.089028 0.01535c-12.161994-46.837748-53.477982-79.259158-101.626585-79.259158-55.393611 0-97.18032 46.248324-97.18032 107.576087l-0.059352 3.047406c-0.057305 2.222621-0.116657 4.40124 0.059352 6.16849-2.796696 101.715613-83.869153 187.397041-188.559517 199.324698l-3.358491 0.36839-0.76441 274.43128 0 228.491994 13.930267 0.005117 0.587378 0.11154 3.179412-0.027629 0.01535-0.081864 485.653959 0.198521 8.685823-0.236384c19.84907 0 31.038924-5.03569 48.621371-16.344247 16.22452-10.482749 29.359678-25.266453 37.751812-42.316781 2.562359-3.76986 4.418636-7.862062 5.565762-12.251022l75.30101-336.657506c1.089821-4.225231 1.472538-8.643867 1.149173-12.56006C935.660023 478.42737 930.212964 455.900308 918.228001 436.301947zM879.148961 488.807788l-0.912789 3.799536 0.295735 0.074701-80.129992 355.2387-0.148379 0.353041c-2.296299 5.536087-6.15314 10.160407-11.101849 13.340843-3.415796 2.209318-7.185656 3.622504-11.161201 4.239558-0.470721-0.057305-0.941442-0.057305-1.413186-0.057305l-3.03308 0.086981-462.84344-0.530073-0.177032-392.299781c79.540567-35.986609 148.155295-73.959455 183.080735-167.79868l0.295735 0.074701 1.119497-3.328815c3.709485-11.263531 6.596232-22.350031 8.598842-32.909527 5.447059-28.577872 5.212722-56.422034 5.183046-58.041928-1.766226-13.502525 1.206478-24.738427 8.80555-33.394574 8.598842-9.777691 21.673625-14.151301 30.744211-14.151301 22.586414 0.766456 45.526893 30.966269 45.61592 48.163953 0.029676 0.26606 5.38873 26.945699 5.418406 55.186903 0.057305 27.65178-2.651386 45.277206-3.858888 51.828412l-0.500397 0-0.589424 3.062755c-5.595438 29.522384-15.518438 57.794287-29.41903 84.003206l-0.972141 2.856048 0.118704 0.132006c-1.885953 4.696975-2.856048 9.643638-2.856048 14.709003 0 25.032116 27.121707 25.032116 41.697681 25.032116l233.381351 0.264013 7.15598 0.221034c1.266853 0.045025 2.503007 0.089028 3.592828 0.118704l0 0.425695 5.538133-0.248663c10.453073 0 19.937075 5.344728 25.412786 14.296611C880.709503 471.080032 881.829 480.283648 879.148961 488.807788z" p-id="2581"></path></svg>
                  <span>&nbsp;&nbsp;点赞</span>
                  <span>&nbsp;&nbsp;{{tableData.subject_support}}</span>
                </div>
                <div style="cursor:pointer" @click="unsupportSubject" v-if="isSupport" class="topic-body-left-topic-actions-div">
                  <svg t="1667788856144" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2735" width="200" height="200"><path d="M64 483.04V872c0 37.216 30.144 67.36 67.36 67.36H192V416.32l-60.64-0.64A67.36 67.36 0 0 0 64 483.04zM857.28 344.992l-267.808 1.696c12.576-44.256 18.944-83.584 18.944-118.208 0-78.56-68.832-155.488-137.568-145.504-60.608 8.8-67.264 61.184-67.264 126.816v59.264c0 76.064-63.84 140.864-137.856 148L256 416.96v522.4h527.552a102.72 102.72 0 0 0 100.928-83.584l73.728-388.96a102.72 102.72 0 0 0-100.928-121.824z" p-id="2736"></path></svg>
                  <span>&nbsp;&nbsp;已点赞</span>
                  <span>&nbsp;&nbsp;{{tableData.subject_support}}</span>
                </div>
              </li>
              <span class="topic-body-left-topic-actions-span"><el-divider direction="vertical"></el-divider></span>
              <li class="topic-body-left-topic-actions-li">
                <div style="cursor:pointer" @click="collectSubject" v-if="!isCollect">
                  <svg t="1664787025547" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9163" width="200" height="200"><path d="M335.008 916.629333c-35.914667 22.314667-82.88 10.773333-104.693333-25.557333a77.333333 77.333333 0 0 1-8.96-57.429333l46.485333-198.24a13.141333 13.141333 0 0 0-4.021333-12.864l-152.16-132.586667c-31.605333-27.52-35.253333-75.648-8.234667-107.733333a75.68 75.68 0 0 1 51.733333-26.752L354.848 339.2c4.352-0.362667 8.245333-3.232 10.026667-7.594667l76.938666-188.170666c16.032-39.2 60.618667-57.92 99.52-41.461334a76.309333 76.309333 0 0 1 40.832 41.461334l76.938667 188.16c1.781333 4.373333 5.674667 7.253333 10.026667 7.605333l199.712 16.277333c41.877333 3.413333 72.885333 40.458667 69.568 82.517334a76.938667 76.938667 0 0 1-26.08 51.978666l-152.16 132.586667c-3.541333 3.082667-5.141333 8.074667-4.021334 12.853333l46.485334 198.24c9.621333 41.013333-15.36 82.336-56.138667 92.224a75.285333 75.285333 0 0 1-57.525333-9.237333l-170.976-106.24a11.296 11.296 0 0 0-12.010667 0l-170.986667 106.24zM551.786667 756.032l170.976 106.24c2.624 1.621333 5.717333 2.122667 8.650666 1.408 6.410667-1.557333 10.56-8.426667 8.928-15.424l-46.485333-198.24a77.141333 77.141333 0 0 1 24.277333-75.733333L870.293333 441.706667c2.485333-2.165333 4.053333-5.312 4.330667-8.746667 0.565333-7.136-4.490667-13.173333-10.976-13.696l-199.712-16.288a75.989333 75.989333 0 0 1-64.064-47.168l-76.938667-188.16a12.309333 12.309333 0 0 0-6.538666-6.741333c-5.898667-2.496-12.725333 0.373333-15.328 6.741333l-76.949334 188.16a75.989333 75.989333 0 0 1-64.064 47.168l-199.701333 16.288a11.68 11.68 0 0 0-7.978667 4.181333 13.226667 13.226667 0 0 0 1.333334 18.261334l152.16 132.586666a77.141333 77.141333 0 0 1 24.277333 75.733334l-46.485333 198.229333a13.333333 13.333333 0 0 0 1.514666 9.877333c3.488 5.792 10.581333 7.530667 16.064 4.128l170.986667-106.229333a75.296 75.296 0 0 1 79.562667 0z" p-id="9164"></path></svg>
                  <span>&nbsp;&nbsp;收藏</span>
                </div>
                <div style="cursor:pointer" @click="uncollectSubject" v-if="isCollect">
                  <svg t="1667308956393" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2384" width="200" height="200"><path d="M525.5 112.1L647 359c2 4.1 5.9 6.9 10.5 7.6l271.9 39.6c11.4 1.7 15.9 15.6 7.7 23.7L740.3 622.1c-3.3 3.2-4.8 7.8-4 12.3l46.5 271.5c1.9 11.3-10 20-20.2 14.6L519.5 792.4c-4.1-2.1-8.9-2.1-12.9 0L263.4 920.5c-10.2 5.4-22.1-3.3-20.2-14.6l46.5-271.5c0.8-4.5-0.7-9.1-4-12.3L88.9 429.9c-8.2-8-3.7-22 7.7-23.7l271.9-39.6c4.5-0.7 8.4-3.5 10.5-7.6l121.6-246.9c5-10.4 19.8-10.4 24.9 0z" fill="#4F4F4F" p-id="2385"></path><path d="M769.1 942.9c-5.5 0-11.1-1.3-16.2-4L513 812.5 273.1 938.9c-11.8 6.2-25.8 5.2-36.6-2.6-10.8-7.8-16.1-20.8-13.8-33.9l45.8-267.9L74.3 444.8c-9.5-9.3-12.9-22.9-8.8-35.6 4.1-12.6 14.8-21.7 28-23.6l268.3-39.1 120-243.6c5.9-12 17.8-19.4 31.1-19.4s25.2 7.4 31.1 19.4l120 243.6 268.3 39.1c13.2 1.9 23.9 11 28 23.6 4.1 12.6 0.8 26.3-8.7 35.6L757.5 634.5l45.8 267.9c2.2 13.1-3.1 26.1-13.8 33.9-6.1 4.4-13.2 6.6-20.4 6.6zM113.4 424.8l186.8 182.4c8.2 8 11.9 19.4 10 30.7l-44.1 257.6 230.7-121.6c10.1-5.3 22.2-5.3 32.3 0l230.7 121.6-44.1-257.6c-1.9-11.3 1.8-22.7 10-30.7l186.8-182.4-258.1-37.6c-11.3-1.7-21.1-8.8-26.1-19L513 133.9 397.6 368.2c-5 10.2-14.8 17.4-26.1 19l-258.1 37.6z" fill="#4F4F4F" p-id="2386"></path></svg>
                  <span>&nbsp;&nbsp;已收藏</span>
                </div>
              </li>
              <span class="topic-body-left-topic-actions-span"><el-divider direction="vertical"></el-divider></span>
              <li class="topic-body-left-topic-actions-li">
                <div style="cursor:pointer" @click="copy">
                  <svg t="1665394641096" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2568" width="200" height="200"><path d="M763.84 896c-47.128 0-85.333-38.205-85.333-85.333s38.205-85.333 85.333-85.333c47.128 0 85.333 38.205 85.333 85.333 0 47.128-38.205 85.333-85.333 85.333M329.92 558.848c-14.895 26.231-42.641 43.638-74.453 43.638-47.128 0-85.333-38.205-85.333-85.333 0-16.097 4.457-31.152 12.204-44 14.935-24.769 42.098-41.333 73.13-41.333 47.128 0 85.333 38.205 85.333 85.333 0 15.317-4.035 29.691-11.101 42.117M763.84 128c47.128 0 85.333 38.205 85.333 85.333s-38.205 85.333-85.333 85.333c-47.128 0-85.333-38.205-85.333-85.333 0-47.128 38.205-85.333 85.333-85.333M763.84 682.667c-0.021 0-0.047 0-0.072 0-39.16 0-74.203 17.626-97.628 45.378l-289.885-167.063c4.932-13.101 7.787-28.245 7.787-44.055 0-0.105 0-0.209 0-0.314 0-0.072 0-0.177 0-0.281 0-15.81-2.855-30.953-8.077-44.942l295.544-169.566c23.265 24.363 56.001 39.509 92.275 39.509 0.020 0 0.039 0 0.059 0 70.689 0 127.997-57.308 127.997-128 0-70.692-57.308-128-128-128-70.692 0-128 57.308-128 128 0 18.965 4.224 36.907 11.627 53.099l-292.288 168.747c-23.653-28.833-59.285-47.084-99.18-47.084-70.692 0-128 57.308-128 128 0 0.188 0 0.376 0.001 0.564-0.001 0.123-0.001 0.304-0.001 0.484 0 70.692 57.308 128 128 128 39.895 0 75.526-18.251 99.001-46.86l289.373 166.752c-5.397 13.568-8.529 29.29-8.533 45.743 0 70.582 57.308 127.889 128 127.889 70.692 0 128-57.308 128-128 0-70.692-57.308-128-128-128z" fill="#3D3D3D" p-id="2569"></path></svg>
                  <span>&nbsp;&nbsp;分享</span>
                </div>
              </li>
              <span class="topic-body-left-topic-actions-span"><el-divider direction="vertical"></el-divider></span>
              <li class="topic-body-left-topic-actions-li">
                <div style="cursor:pointer" @click="dialogFormVisible1=true">
                  <svg t="1667799910949" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6380" width="200" height="200"><path d="M511.609097 961.619254" p-id="6381"></path><path d="M946.867272 147.167804l-70.839395-70.847581c-16.321734-16.08228-42.418089-16.08228-58.496276 0l-74.117045 74.108858 129.343857 129.343857 74.108858-73.882708C962.953645 189.347462 962.953645 163.245991 946.867272 147.167804L946.867272 147.167804 946.867272 147.167804zM721.512734 172.565241 320.671417 586.225515 287.815101 735.381603l149.146878-32.864502 411.561473-403.171386L721.512734 172.565241 721.512734 172.565241zM809.838386 511.651053l0 349.570607c0 11.887748-9.083889 23.541159-21.437242 23.541159-12.353352 0-626.900913-0.23536-626.900913-0.23536-13.049201 0-22.841218-12.583596-22.841218-23.305799L138.659013 236.654908c0-11.653411 10.952446-23.305799 24.705682-23.305799l348.170724 0 74.574463-74.573439-467.487204 0c-30.299073 0-54.536081 24.004717-54.536081 54.301743l0 711.496613c0 30.05655 24.470321 54.527894 54.536081 54.527894l711.49252 0c30.061666 0 54.296627-24.470321 54.296627-54.527894L884.411825 437.078637 809.838386 511.651053 809.838386 511.651053 809.838386 511.651053zM809.838386 511.651053" p-id="6382"></path></svg>
                  <span>&nbsp;&nbsp;反馈问题</span>
                </div>
                <el-dialog title="举报与反馈" :visible.sync="dialogFormVisible1" width="30%">
                <el-form :model="feedbackTable">
                  <el-form-item label="原因" label-width="80px">
                    <el-radio-group v-model="feedbackTable.reason">
                      <el-radio label="内容重复">内容重复</el-radio>
                      <el-radio label="内容错误">内容错误</el-radio>
                      <el-radio label="内容非法">内容非法</el-radio>
                      <el-radio label="涉嫌引流">涉嫌引流</el-radio>
                      <el-radio label="内容过期">内容过期</el-radio>
                      <el-radio label="其他">其他</el-radio>
                    </el-radio-group>
                  </el-form-item>
                  <el-form-item label="详情" label-width="80px">
                    <el-input type="textarea" v-model="feedbackTable.detail" rows="4"></el-input>
                  </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="dialogFormVisible1 = false">取 消</el-button>
                  <el-button type="primary" @click="uploadFeedback">确 定</el-button>
                </div>
              </el-dialog>
              </li>
            </ul>
          </div>
        </div>
        <div class="topic-body-left-answer">
          <div class="topic-body-left-answer-head">回答区</div>
          <el-divider></el-divider>
          <div class="topic-body-left-answer-publish">
            <span class="topic-body-left-answer-publish-span1">{{total}}个回答</span>
            <span class="topic-body-left-answer-publish-span2">
              <el-button @click="formVisible = true">写回答</el-button>
              <el-dialog
                title="写回答"
                :visible.sync="formVisible"
                @close="content = ''"
                width="60%">
                <quill-editor
                  class="editor"
                  ref="myQuillEditor"
                  v-model="content"
                  :options="editorOption"
                  @change="onEditorChange($event)"
                  />
                <span slot="footer" class="dialog-footer">
                  <el-button @click="formVisible = false">取 消</el-button>
                  <el-button type="primary" @click="saveComment">提 交</el-button>
                </span>
              </el-dialog>
            </span>
          </div>
          <el-divider></el-divider>
          <div v-show="!commentTable.length">
            <div class="topic-body-left-answer-svg"><svg t="1666159046170" class="icon1" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8230" width="64" height="40"><path d="M745.3 0H278.7c-52.3 0-99.4 31.9-118.8 80.5L4.6 468.6c-3 7.6-4.6 15.6-4.6 23.8V960c0 35.3 28.7 64 64 64h896c35.3 0 64-28.7 64-64V492.3c0-8.1-1.6-16.2-4.6-23.8l-155.2-388C844.7 31.9 797.7 0 745.3 0zM278.7 64h466.7c26.2 0 49.7 15.9 59.4 40.2L946.3 458c4.2 10.5-3.5 21.9-14.9 21.9H755.6c-13.8 0-26 8.8-30.4 21.9l-14 42.1-14 42.1c-4.4 13.1-16.6 21.9-30.4 21.9H357.2c-13.8 0-26-8.8-30.4-21.9l-14-42.1-14-42.1c-4.4-13.1-16.6-21.9-30.4-21.9H92.6c-11.3 0-19.1-11.4-14.9-21.9l141.5-353.8C229 79.9 252.5 64 278.7 64zM928 960H96c-17.7 0-32-14.3-32-32V576c0-17.7 14.3-32 32-32h143.6c3.4 0 6.5 2.2 7.6 5.5l26.3 78.8c8.7 26.1 33.2 43.8 60.7 43.8h355.7c27.5 0 52-17.6 60.7-43.8l26.3-78.8c1.1-3.3 4.1-5.5 7.6-5.5H928c17.7 0 32 14.3 32 32v352c0 17.7-14.3 32-32 32z" p-id="8231" fill="#bfbfbf"></path></svg></div>
            <div class="topic-body-left-answer-info">暂无数据</div>
          </div>
          <div v-show="commentTable.length">
            <div class="topic-body-left-answer-body">
              <div  v-for="(list,value) in commentTable" :key="value">
                <div class="topic-body-left-answer-body-portrait"><img class="" :src="list.user_portrait" alt=""></div>
                <div class="topic-body-left-answer-body-info">
                  <div class="topic-body-left-answer-body-info-name">{{list.user_name}}</div>
                  <div class="topic-body-left-answer-body-info-time">{{timeFormatSeconds(list.comment_release_time)}}</div>
                </div>
                <div class="ql-snow">
                  <div v-html="list.comment_content" class="topic-body-left-answer-body-content ql-editor"></div>
                </div>
                
                <el-divider></el-divider>
              </div>  
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
      </div>
      <div class="topic-body-right">
        <div class="topic-body-right-info">
          <div class="topic-body-right-info-title">题目信息</div>
          <el-divider></el-divider>
          <div class="topic-body-right-info-body">
            <div>浏览数：{{this.tableData.subject_views}}</div>
            <div>发布时间：{{this.tableData.subject_release_time}}</div>
            <div class="topic-body-right-info-body-div1">
              <span>上传者：</span>
              <img class="topic-body-right-info-body-img" :src="this.tableData.user_portrait" alt="">
              <span>{{this.tableData.user_name}}</span>
            </div>
          </div>
        </div>
        <div class="topic-body-right-subject">
          <div class="topic-body-right-info-title">相似题目</div>
          <el-divider></el-divider>
          <div class="topic-body-right-subject-list">
            <ul>
              <li v-for="item in similarTable" :key="item.subjectId">
                <router-link target="_blank" :to="{
                  name:'topics',
                  params:{
                    id:item.subjectId
                  }
                }">{{item.subjectName}}</router-link>
                <p>
                  <el-tag v-for="(items,index) in item.subjectLabel.split(/\s+/)" :key='index'>{{items}}</el-tag>
                </p>
                <div class="topic-body-right-subject-list-div">{{item.subjectType}}&nbsp;&nbsp;|&nbsp;&nbsp;{{item.subjectDifficulty}}&nbsp;&nbsp;|&nbsp;&nbsp;{{item.subjectReleaseTime}}</div>
                <div class="topic-body-right-subject-list-div">
                  <div class="topic-body-right-subject-list-div-1"><svg t="1665134131290" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3145" width="200" height="200"><path d="M505.477547 832c-184.96 0-368.64-129.706667-478.848-251.093333a102.698667 102.698667 0 0 1-0.085334-137.898667C136.837547 321.621333 320.517547 192 505.43488 192l6.912 0.042667 6.229333-0.042667c184.917333 0 368.682667 129.621333 478.976 250.922667 35.498667 39.381333 35.541333 98.645333 0.085334 137.941333-110.336 121.429333-294.4 251.136-480.170667 251.136l-5.845333-0.042667-6.144 0.042667z m12.288-64c164.693333 0 331.392-118.869333 432.469333-230.144a38.784 38.784 0 0 0-0.085333-52.010667c-101.034667-111.104-267.434667-229.888-431.189334-229.888L511.536213 256h-5.589333C341.59488 256 175.06688 374.784 74.032213 485.973333a38.784 38.784 0 0 0 0.085334 52.010667C175.06688 649.130667 341.59488 768 506.160213 768l5.632-0.042667 5.973334 0.042667z" p-id="3146"></path><path d="M512.048213 704a192.213333 192.213333 0 0 1-192-192c0-105.856 86.144-192 192-192s192 86.144 192 192-86.144 192-192 192zM512.09088 384a128.170667 128.170667 0 0 0-128.042667 128c0 70.570667 57.429333 128 128 128s128-57.429333 128-128S582.61888 384 512.09088 384z" p-id="3147"></path></svg>&nbsp;&nbsp;{{item.subjectViews}}</div>
                  <div class="topic-body-right-subject-list-div-4"><svg t="1667786315984" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2579" width="200" height="200"><path d="M194.792475 478.69343c16.167215 0 29.330002-13.163811 29.330002-29.346375 0-16.092513-13.015432-29.212322-29.801746-29.212322-0.086981 0-0.177032 0-0.264013 0l-60.606333 0.177032c-1.560542-0.206708-3.149736-0.325411-4.76963-0.325411-21.291932 0-38.636972 17.537422-38.636972 39.09439l-0.323365 423.853427c0 21.645996 16.9613 38.578644 38.636972 38.578644l1.677199 0.057305c0.707105 0.029676 1.385557 0.059352 2.032286 0.059352 0.823761 0 1.64957-0.029676 1.826602-0.11768l59.926858 0.086981c0.559748 0 1.001817-0.11768 1.089821-0.11768 0 0-0.029676 0-0.116657 0.057305l3.76986-0.147356 0-0.382717c13.517875-2.236947 23.64656-13.84124 23.64656-27.799136 0-13.987572-10.129708-25.589818-23.64656-27.828812l0-0.766456-49.827849 0 1.413186-385.92356L194.792475 478.69036z" p-id="2580"></path><path d="M918.228001 436.301947c-18.199501-29.66974-45.204551-44.821835-82.22163-46.322002-1.883907-0.25071-3.799536-0.412392-5.77247-0.412392l-195.744149-0.648776c13.398148-40.359196 20.732184-83.750449 20.732184-122.740462 0-27.255761-3.00545-54.686507-8.894577-81.543178l-1.206478-3.196809-0.089028 0.01535c-12.161994-46.837748-53.477982-79.259158-101.626585-79.259158-55.393611 0-97.18032 46.248324-97.18032 107.576087l-0.059352 3.047406c-0.057305 2.222621-0.116657 4.40124 0.059352 6.16849-2.796696 101.715613-83.869153 187.397041-188.559517 199.324698l-3.358491 0.36839-0.76441 274.43128 0 228.491994 13.930267 0.005117 0.587378 0.11154 3.179412-0.027629 0.01535-0.081864 485.653959 0.198521 8.685823-0.236384c19.84907 0 31.038924-5.03569 48.621371-16.344247 16.22452-10.482749 29.359678-25.266453 37.751812-42.316781 2.562359-3.76986 4.418636-7.862062 5.565762-12.251022l75.30101-336.657506c1.089821-4.225231 1.472538-8.643867 1.149173-12.56006C935.660023 478.42737 930.212964 455.900308 918.228001 436.301947zM879.148961 488.807788l-0.912789 3.799536 0.295735 0.074701-80.129992 355.2387-0.148379 0.353041c-2.296299 5.536087-6.15314 10.160407-11.101849 13.340843-3.415796 2.209318-7.185656 3.622504-11.161201 4.239558-0.470721-0.057305-0.941442-0.057305-1.413186-0.057305l-3.03308 0.086981-462.84344-0.530073-0.177032-392.299781c79.540567-35.986609 148.155295-73.959455 183.080735-167.79868l0.295735 0.074701 1.119497-3.328815c3.709485-11.263531 6.596232-22.350031 8.598842-32.909527 5.447059-28.577872 5.212722-56.422034 5.183046-58.041928-1.766226-13.502525 1.206478-24.738427 8.80555-33.394574 8.598842-9.777691 21.673625-14.151301 30.744211-14.151301 22.586414 0.766456 45.526893 30.966269 45.61592 48.163953 0.029676 0.26606 5.38873 26.945699 5.418406 55.186903 0.057305 27.65178-2.651386 45.277206-3.858888 51.828412l-0.500397 0-0.589424 3.062755c-5.595438 29.522384-15.518438 57.794287-29.41903 84.003206l-0.972141 2.856048 0.118704 0.132006c-1.885953 4.696975-2.856048 9.643638-2.856048 14.709003 0 25.032116 27.121707 25.032116 41.697681 25.032116l233.381351 0.264013 7.15598 0.221034c1.266853 0.045025 2.503007 0.089028 3.592828 0.118704l0 0.425695 5.538133-0.248663c10.453073 0 19.937075 5.344728 25.412786 14.296611C880.709503 471.080032 881.829 480.283648 879.148961 488.807788z" p-id="2581"></path></svg>&nbsp;&nbsp;{{item.subjectSupport}}</div>
                  <div class="topic-body-right-subject-list-div-2"><svg t="1664787025547" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9163" width="200" height="200"><path d="M335.008 916.629333c-35.914667 22.314667-82.88 10.773333-104.693333-25.557333a77.333333 77.333333 0 0 1-8.96-57.429333l46.485333-198.24a13.141333 13.141333 0 0 0-4.021333-12.864l-152.16-132.586667c-31.605333-27.52-35.253333-75.648-8.234667-107.733333a75.68 75.68 0 0 1 51.733333-26.752L354.848 339.2c4.352-0.362667 8.245333-3.232 10.026667-7.594667l76.938666-188.170666c16.032-39.2 60.618667-57.92 99.52-41.461334a76.309333 76.309333 0 0 1 40.832 41.461334l76.938667 188.16c1.781333 4.373333 5.674667 7.253333 10.026667 7.605333l199.712 16.277333c41.877333 3.413333 72.885333 40.458667 69.568 82.517334a76.938667 76.938667 0 0 1-26.08 51.978666l-152.16 132.586667c-3.541333 3.082667-5.141333 8.074667-4.021334 12.853333l46.485334 198.24c9.621333 41.013333-15.36 82.336-56.138667 92.224a75.285333 75.285333 0 0 1-57.525333-9.237333l-170.976-106.24a11.296 11.296 0 0 0-12.010667 0l-170.986667 106.24zM551.786667 756.032l170.976 106.24c2.624 1.621333 5.717333 2.122667 8.650666 1.408 6.410667-1.557333 10.56-8.426667 8.928-15.424l-46.485333-198.24a77.141333 77.141333 0 0 1 24.277333-75.733333L870.293333 441.706667c2.485333-2.165333 4.053333-5.312 4.330667-8.746667 0.565333-7.136-4.490667-13.173333-10.976-13.696l-199.712-16.288a75.989333 75.989333 0 0 1-64.064-47.168l-76.938667-188.16a12.309333 12.309333 0 0 0-6.538666-6.741333c-5.898667-2.496-12.725333 0.373333-15.328 6.741333l-76.949334 188.16a75.989333 75.989333 0 0 1-64.064 47.168l-199.701333 16.288a11.68 11.68 0 0 0-7.978667 4.181333 13.226667 13.226667 0 0 0 1.333334 18.261334l152.16 132.586666a77.141333 77.141333 0 0 1 24.277333 75.733334l-46.485333 198.229333a13.333333 13.333333 0 0 0 1.514666 9.877333c3.488 5.792 10.581333 7.530667 16.064 4.128l170.986667-106.229333a75.296 75.296 0 0 1 79.562667 0z" p-id="9164"></path></svg>&nbsp;&nbsp;{{item.subjectCollection}}</div>
                  <div class="topic-body-right-subject-list-div-3"><svg t="1665134377025" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4921" width="200" height="200"><path d="M511.999488 847.882863c-28.734592 0-56.729303-2.604314-83.969807-7.099698L231.232673 960.185602 231.232673 761.40735C128.618486 689.355337 62.772174 578.889433 62.772174 454.825836c0-217.07906 201.129864-393.058051 449.228338-393.058051 248.084146 0 449.228338 175.980014 449.228338 393.058051C961.227826 671.917176 760.083635 847.882863 511.999488 847.882863zM511.999488 117.91762c-217.086932 0-393.074156 150.851707-393.074156 336.907193 0 114.166179 66.421434 214.898395 167.761552 275.820929l-1.768346 130.234133 132.171551-79.455633c30.4487 6.497994 62.117231 10.308787 94.910422 10.308787 217.101258 0 393.073132-150.825101 393.073132-336.907193C905.073644 268.769326 729.10177 117.91762 511.999488 117.91762zM736.614169 510.976694c-31.011542 0-56.154182-25.128307-56.154182-56.150858 0-31.010271 25.14264-56.151881 56.154182-56.151881s56.154182 25.14161 56.154182 56.151881C792.768351 485.848387 767.624687 510.976694 736.614169 510.976694zM511.999488 510.976694c-31.010518 0-56.153158-25.128307-56.153158-56.150858 0-31.010271 25.14264-56.151881 56.153158-56.151881 31.011542 0 56.154182 25.14161 56.154182 56.151881C568.15367 485.848387 543.01103 510.976694 511.999488 510.976694zM287.385831 510.976694c-31.010518 0-56.153158-25.128307-56.153158-56.150858 0-31.010271 25.14264-56.151881 56.153158-56.151881s56.153158 25.14161 56.153158 56.151881C343.53899 485.848387 318.39635 510.976694 287.385831 510.976694z" p-id="4922"></path></svg>&nbsp;&nbsp;{{item.subjectComment}}</div>
                </div>
                <el-divider class="divider"></el-divider>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import axios from 'axios'
export default {
  name:'Topics',
  
  data() {
    return {
      tableData:[],
      similarTable:[],
      commentTable:[],
      dialogFormVisible1:false,
      feedbackTable:{
        reason:'内容重复',
        detail:''
      },
      formVisible:false,
      content:'',
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
      conversion:'',
      currentPage:1,
      pageSize:12,
      total:0,
      pageTable:[],
      isVisiable:false,
      isCollect:false,
      isSupport:false
    }
  },

  mounted() {
    axios.get(`http://localhost:8082/subjects/getsome/${this.$route.params.id}`)
      .then(response=>{
        this.tableData=response.data.data[0]
        console.log(this.tableData)
      }).catch((error)=> {
      console.log(error);
    })
 
    axios.get('http://localhost:8082/subjects')
      .then(response=>{
        this.similarTable=response.data.data.slice(0,3)
      }).catch((error)=> {
      console.log(error);
    })

    axios.get(`http://localhost:8082/comments/${this.$route.params.id}/${this.currentPage}/${this.pageSize}`)
      .then(response=>{
        this.commentTable=response.data.data.records
        this.total=response.data.data.total
        this.currentPage=response.data.data.current
      }).catch((error)=> {
      console.log(error)
    })

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
          axios.get('http://localhost:8082/view/isView',{
          params:{
            viewUserId:response.data.data.userId,
            viewSubjectId:this.$route.params.id
          }})
          .then((response1) => {
            if(!response1.data.hasOwnProperty('viewId')){
              axios.post("http://localhost:8082/view/add",{
                viewSubjectId:this.$route.params.id,
                viewUserId:response.data.data.userId
              })
            }
          })
          .catch((error) => {
            console.log(error)
          })


          axios.get('http://localhost:8082/collection/isCollect',{
            params:{
              collectionSubjectId:this.$route.params.id,
              collectionUserId:response.data.data.userId
            }
          })
          .then((response2)=>{
            if(response2.data.hasOwnProperty('collectionId')){
              this.isCollect = true
            }else{
              this.isCollect=false
            }
          })
          .catch((error)=>{
            console.log(error);
          })

          axios.get('http://localhost:8082/support/isSupport',{
            params:{
              supportSubjectId:this.$route.params.id,
              supportUserId:response.data.data.userId
            }
          })
          .then((response3)=>{
            if(response3.data.hasOwnProperty('supportId')){
              this.isSupport = true
            }else{
              this.isSupport=false
            }
          })
          .catch((error)=>{
            console.log(error);
          })

        })
        .catch((error) => {
          console.log(error)
        })
    }
  },

  methods: {
    handleCurrentChange(currentPage) {
      this.currentPage=currentPage
      axios.get(`http://localhost:8082/comments/${this.$route.params.id}/${this.currentPage}/${this.pageSize}`)
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

    // 内容改变事件
    onEditorChange() {
      this.conversion = this.escapeStringHTML(this.content)
    },
    // 转码
    escapeStringHTML(content) {
      content = content.replace(/&lt;/g, '<')
      content = content.replace(/&gt;/g, '>')
      return content
    },

    saveComment(){
      if(this.conversion != ''){
        this.formVisible = false
        this.$notify({
          title: '成功',
          message: '发表评论成功！',
          type: 'success'
        })
        let date = dayjs().format('YYYY-MM-DD') //年月日
        let time = dayjs().format('HH:mm:ss') //时间
        let timeBegin = `${date} ${time}`
        axios.post("http://localhost:8082/comments", {
          commentContent:this.conversion,
          commentSubjectId:this.$route.params.id,
          commentUserId:this.$store.state.userId,
          commentReleaseTime:timeBegin
          })
          .then((response) => {
             axios.get(`http://localhost:8082/comments/${this.$route.params.id}/${this.currentPage}/${this.pageSize}`)
              .then(response=>{
                this.commentTable=response.data.data.records
                this.total=response.data.data.total
                this.currentPage=response.data.data.current
              }).catch((error)=> {
              console.log(error)
            })
          })
          .catch((error) => {
            console.log(error);
          });
        this.content=''
      }else{
        this.$message.warning("评论不能为空！")
      }
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
    },

    changeVisiable(){
      this.isVisiable=!this.isVisiable
    },

    collectSubject(){
      axios.get('http://localhost:8082/collection/isCollect',{
        params:{
          collectionSubjectId:this.$route.params.id,
          collectionUserId:this.$store.state.userId
        }
      }).then((response) => {
        if(response.data.hasOwnProperty('collectionId')){
          this.isCollect = true
          this.$message.warning("已收藏请勿重复点击！")
        }else{
          axios.post("http://localhost:8082/collection/collect",{
            collectionSubjectId:this.$route.params.id,
            collectionUserId:this.$store.state.userId
          })
          .then((response) => {
            this.$message.success("收藏成功！")
            this.isCollect = true
          })
          .catch((error) => {
            console.log(error);
          });
        }
      })
      
      },
    uncollectSubject(){
      axios.get('http://localhost:8082/collection/isCollect',{
        params:{
          collectionSubjectId:this.$route.params.id,
          collectionUserId:this.$store.state.userId
        }
      })
      .then((response) => {
        if(response.data.hasOwnProperty('collectionId')){
          this.isCollect = false
          axios.delete('http://localhost:8082/collection/delete',{
            data:{
              collectionId:response.data.collectionId,
              collectionSubjectId:this.$route.params.id,
              collectionUserId:this.$store.state.userId
            }
          })
          .then((response) => {
            this.$message.success("取消收藏成功！")
          })
          .catch((error) => {
            console.log(error);
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
    },

    copy(){
      var domUrl = document.createElement("input")
      domUrl.value = window.location.href
      domUrl.id = "creatDom"
      document.body.appendChild(domUrl)
      domUrl.select() // 选择对象
      document.execCommand("Copy")// 执行浏览器复制命令
      let creatDom = document.getElementById("creatDom")
      creatDom.parentNode.removeChild(creatDom)
      this.$message.success("复制成功")
    },

    supportSubject(){
      axios.get('http://localhost:8082/support/isSupport',{
        params:{
          supportSubjectId:this.$route.params.id,
          supportUserId:this.$store.state.userId
        }
      }).then((response) => {
        if(response.data.hasOwnProperty('supportId')){
          this.isSupport = true
          this.$message.warning("已点赞请勿重复点击！")
        }else{
          axios.post("http://localhost:8082/support/collect",{
            supportSubjectId:this.$route.params.id,
            supportUserId:this.$store.state.userId
          })
          .then((response) => {
            this.$message.success("点赞成功！")
            this.isSupport = true
            axios.get(`http://localhost:8082/subjects/getsome/${this.$route.params.id}`)
              .then(response2=>{
                this.tableData=response2.data.data[0]
              })
              .catch((error)=> {
              console.log(error);
              })
            })
          .catch((error) => {
            console.log(error);
          });
        }
      })
    },

    unsupportSubject(){
      axios.get('http://localhost:8082/support/isSupport',{
        params:{
          supportSubjectId:this.$route.params.id,
          supportUserId:this.$store.state.userId
        }
      })
      .then((response) => {
        if(response.data.hasOwnProperty('supportId')){
          this.isSupport = false
          axios.delete('http://localhost:8082/support/delete',{
            data:{
              supportId:response.data.supportId,
              supportSubjectId:this.$route.params.id,
              supportUserId:this.$store.state.userId
            }
          })
          .then((response) => {
            this.$message.success("取消点赞成功！")
            axios.get(`http://localhost:8082/subjects/getsome/${this.$route.params.id}`)
              .then(response2=>{
                this.tableData=response2.data.data[0]
              })
              .catch((error)=> {
              console.log(error);
              })
          })
          .catch((error) => {
            console.log(error);
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
    },


    uploadFeedback(){
      axios.post("http://localhost:8082/feedback",{
        feedbackReason:this.feedbackTable.reason,
        feedbackDetail:this.feedbackTable.detail,
        feedbackSubjectId:this.$route.params.id,
        feedbackUserId:this.$store.state.userId
      })
      .then((response)=>{
        this.dialogFormVisible1 = false
        this.$message.success("反馈成功,万分感谢！")
        this.feedbackTable.reason=''
        this.feedbackTable.detail=''
      })
      .catch((error)=>{
        console.log(error);
      })
    }
  },
}
</script>

<style scoped>

.icon {
  height: 18px;
  width: 18px;
  vertical-align: middle;
}

.clear {
  clear: both;
}

.topic-body {
  margin-top: 30px;
  width: 1800px;
  margin: auto;
  box-sizing: border-box;
}

.topic-body-left {
  box-sizing: border-box;
  margin-top: 30px;
  width: 63%;
  float: left;
}

.topic-body-left-topic {
  background-color: #fff;
  width: 100%;
  float: left;
}

.topic-body-left-answer {
  margin-top: 30px;
  background-color: #fff;
  float: left;
  width: 100%;
}

.topic-body-left-topic-head {
  padding-top: 20px;
  padding-left: 20px;
  font-size: 18px;
  color: #000;
}



.topic-body-left-topic-body {
  padding-left: 17px;
  padding-right: 17px;
}


.topic-body-left-topic-body-title {
  font-size: 25px;
  font-weight: bolder;
  color: #000;
  margin-top: 30px;
  margin-left: 10px;
}

.topic-body-left-topic-body-content {
  font-size: 16px;
  color: rgb(90, 78, 78);
  padding-top: 20px;
}

.topic-body-left-topic-body-answer {
  font-size: 16px;
  color: rgb(90, 78, 78);
  padding-top: 20px;
  padding-bottom: 20px;
}

.topic-body-left-topic-body-button1 {
  background-color: #00a4ff;
  color: white;
}
.topic-body-left-topic-body-button1:focus {
  background-color: #00a4ff;
  color: white;
}

.topic-body-left-topic-body-button2 {
  background-color: #ff4d4f;
  color: white;
  background: #ff4d4f;
}

.topic-body-left-topic-body-button2:focus {
  background-color: #ff4d4f;
  color: white;
  background: #ff4d4f;
}

.topic-body-left-topic-actions {
  height: 50px;
}

.topic-body-left-topic-actions-li {
  height: 50px;
  width: 23.5%;
  text-align: center;
  margin-top: 10px;
}

.topic-body-left-topic-actions-div {
  height: 50px;
}

.topic-body-left-topic-actions-span {
  float: left;
}



li {
  float: left;
  list-style: none;
}

.divider-xy {
  margin: 10px 0;
}

.el-divider--vertical {
  height: 30px;
  margin-top: 5px;
}

.topic-body-right {
  margin-top: 30px;
  width: 35%;
  float: right;
}

.topic-body-right-info {
  background-color: #fff;
  width: 630px;
  float: left;
}

.topic-body-right-info-title {
  padding-top: 20px;
  padding-left: 30px;
  font-size: 18px;
  color: black;
}

.topic-body-right-info-body {
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 20px;
  font-size: 16px;
}
.topic-body-right-info-body div{
  margin-top: 20px;
}

.topic-body-right-info-body-img {
  height: 32px;
  width: 32px;
  border-radius: 50%;
  margin-right: 10px;
}

.topic-body-right-subject {
  background-color: #fff;
  margin-top: 30px;
  float: left;
  width: 630px;
}

.topic-body-right-subject-list {
  padding-left: 30px;
  padding-right: 30px;
}

.topic-body-right-subject-list ul li {
  width: 100%;
  float: left;
}

.topic-body-right-subject-list ul li a {
  display: block;
  font-weight:bold;
  font-size: 16px;
  color: black;
}

.topic-body-right-subject-list ul li p {
  padding-top: 20px;
}

.topic-body-right-subject-list-div {
  padding-top: 20px;
}

.topic-body-right-subject-list-div-1 {
  float: left;
  margin-left: 10px;
}
.topic-body-right-subject-list-div-2 {
  float: left;
  margin-left: 35px;
}
.topic-body-right-subject-list-div-3 {
  float: left;
  margin-left: 35px;
}

.topic-body-right-subject-list-div-4 {
  float: left;
  margin-left: 35px;
}

.topic-body-left-answer-head {
  padding-top: 20px;
  padding-left: 30px;
  font-size: 18px;
  color: black;
}

.topic-body-left-answer-svg {
  padding-top: 100px;
  text-align: center;
}

.topic-body-left-answer-info {
  padding-top: 10px;
  text-align: center;
  padding-bottom: 150px;
  color: #bfbfbf;
}

.el-pagination {
  float: right;
}

.topic-body-left-answer-body-portrait {
  display: inline-block;
  margin-left: 30px;
}

.topic-body-left-answer-body-portrait img {
  height: 35px;
  width: 35px;
  border-radius: 50%;
}

.topic-body-left-answer-body-info {
  display: inline-block;
  vertical-align: middle;
  margin-left: 20px;
}

.topic-body-left-answer-body-content {
  margin-left: 30px;
  margin-top: 20px;
  margin-right: 30px;
}

.topic-body-left-answer-body-info-name {
  font-size: 14px;
  color: #000;
  font-weight: bold;
}

.topic-body-left-answer-body-info-time {
  font-size: 14px;
  
}

.topic-body-left-answer-publish {
  padding-left: 30px;
  
  color: black;
}

.topic-body-left-answer-publish-span1 {
  margin-right: 900px;
  font-size: 16px;
}

.topic-body-left-answer-publish-span2 button {
  background-color: #00a4ff;
  color: white;
  font-size: 16px;
}

.editor :deep() .ql-container{
  min-height: 400px;
}

.el-radio {
  float: left;
  margin-bottom: 20px;
}
</style>