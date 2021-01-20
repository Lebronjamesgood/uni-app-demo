<template>
<view class="idea-page">
	<u-navbar :is-back="true" title="智能客服" title-size="36">
		<view class="navbar-right" slot="right" @click="goMessage()">
			<image src="../../../../static/idea-kefu/message.svg"></image>
		</view>
	</u-navbar>
    <scroll-view class="chat-content row" scroll-y="true" :scroll-into-view="domid">
		<!-- 提示语  s-->
        <view class="chat-item tips-message" key="welcome">
            <view class="chat-msg chat other">
                <!--不是用户消息,那么处理-->
                <image :src="kfavatar" class="chat-avatar"></image>
                <view class="content" :style="{backgroundColor:bgcolorl,color:colorl}">
                    <view class="arrow" :style="{borderColor:`transparent ${bgcolorl} transparent transparent `}"></view>
                    <!--普通文本消息-->
                    <view class="chat-msg-txt">
                        <slot name="welcome">你好!</slot>
                    </view>
                </view>
            </view>
        </view>
		<!-- 提示语  e -->
		<!-- 常见问题 s-->
		<view class="chat-item tips-message" key="question">
		    <view class="chat-msg chat other">
		        <!--不是用户消息,那么处理-->
		        <image :src="kfavatar" class="chat-avatar"></image>
		        <view class="content" :style="{backgroundColor:bgcolorl,color:colorl}">
		            <view class="arrow" :style="{borderColor:`transparent ${bgcolorl} transparent transparent `}"></view>
		            <!--普通文本消息-->
		            <view class="chat-msg-txt">
						<view class="question">
							<text class="title">猜你想问：</text>
							<text  v-for="(item,index) in questionList"  @click="showDetail(item.msg)"  :key="index">
								{{item.msg}}
							</text>
						</view>
		            </view>
		        </view>
		    </view>
		</view>
        <!-- 常见问题 e -->
		<!-- 点击出现详情 s -->
		<view class="chat-item" key="answer" v-show="showAnswer">
		    <view class="chat-msg chat other">
		        <!--不是用户消息,那么处理-->
		        <image :src="kfavatar" class="chat-avatar"></image>
		        <view class="content" :style="{backgroundColor:bgcolorl,color:colorl}">
		            <view class="arrow" :style="{borderColor:`transparent ${bgcolorl} transparent transparent `}"></view>
		            <!--普通文本消息-->
		            <view class="chat-msg-txt">
		                <slot name="answer"></slot>
		            </view>
		        </view>
		    </view>
		</view>
		<!-- 点击出现详情 e -->
		<view v-for="(msg,msgindex) in msglist" class="chat-item" :key="msgindex">
            <view class="chat-msg chat-tip" v-if="msg.cmd==11">
                <text class="text" v-text="msg.createat"></text>
            </view>
            <view class="chat-msg chat-tip" v-if="showtime && chatcmd.indexOf(msg.cmd)>-1">
                <text class="text" v-text="msg.createat"></text>
            </view>
            <view class="chat-msg chat" v-if="chatcmd.indexOf(msg.cmd)>-1" :id="msg.id" :class="{'mine':msg.position=='right','other':msg.position=='left'}">
                <!--如果是用户消息-->
                <image src="../../../../static/idea-kefu/avatar.jpg" v-if="visitorcmd.indexOf(msg.cmd)>-1" class="chat-avatar"></image>
                <!--不是用户消息,那么处理-->
                <image :src="kfavatar" class="chat-avatar" v-if="kefucmd.indexOf(msg.cmd)>-1"></image>
                <view class="content" :class="msg.detail?'detail-content': ''"    :style="{backgroundColor:msg.position=='left'?bgcolorl:bgcolorr,color:msg.position=='left'?colorl:colorr}">
                    <view class="arrow" :style="{borderColor:(msg.position=='left'?`transparent ${bgcolorl} transparent transparent `:`transparent  transparent transparent ${bgcolorr}`)}"></view>
                    <!--普通文本消息-->
                    <view v-if="(msg.cmd==1 || msg.cmd==2) && msg.media=='txt'&&!msg.detail" class="chat-msg-txt" v-text="msg.content">
					</view>
					<view v-if="(msg.cmd==1 || msg.cmd==2) && msg.media=='txt'&&msg.detail" class="chat-msg-txt" @click="goPath">
						<text class="detail-text">{{msg.content}}</text>
						<view class="detail-info">
							<text>详情</text>
						</view>
					</view>
                    <!--表情包消息-->
                    <image class="chat-msg-emoj" v-if="(msg.cmd==1 || msg.cmd==2) && msg.media=='emoj'" :src="buildemoj(msg.content)" />
                    <!--图片消息-->
                    <image @click="preview(msg.content)" class="chat-msg-pic" mode="widthFix" v-if="msg.media=='pic'" :src="msg.content"></image>
                    <!--文件消息-->
                    <view @click="downloadfile(msg.content)" v-if="(msg.cmd==1 || msg.cmd==2) && msg.media=='file'" class="chat-msg-file">
                        <image class="icon" src="../../../../static/idea-kefu/icon/file.png"></image>
                        <view class="desc">
                            <text class="name" v-text="msg.title"></text>
                            <text class="size" v-text="sizestr(msg.amount)"></text>
                        </view>
                    </view>
                   <!--视频消息-->
                    <view v-if="(msg.cmd==1 || msg.cmd==2) && msg.media=='video'" class="chat-msg-video">
						<video :src="msg.content" class="video">
							<cover-view class="controls-title">简单的自定义</cover-view>
						</video>
					</view>
                </view>
            </view>
        </view>
	</scroll-view>

    <!--输入区域-->
    <view class="chat-footer">
        <view class="chat-input btns">
            <!-- #ifndef H5-->
            <!-- #endif -->
            <view class="tb-text" @click="changeService">
			 <image src="../../../../static/idea-kefu/kefu.png" mode=""></image>
           	 <text>转人工</text>
            </view>
			<input v-if="audiostat==false" :cursor-spacing="5" class="txtarea" @keyup.enter="sendtxt" confirm-type="send" @confirm="sendtxt" :maxlength="140" placeholder="输入您想要咨询的问题" v-model="txtmsg" :auto-focus="false" />
            <image class="btn-icon" @click="showemoj" v-if="!txtmsg" src="../../../../static/idea-kefu/icon/face.png"></image>
            <image class="btn-icon" @click="openaddon" v-if="!txtmsg" src="../../../../static/idea-kefu/icon/plus.png"></image>
            <view @click="sendtxt" :style="{backgroundColor: btncolor +' !important'}" class="btn-send" v-if="!!txtmsg" :class="{'btn-default':!txtmsg,'btn-ok':!!txtmsg}">确定</view>
        </view>
        <slot name="footer">
        </slot>
    </view>
    <!--表情包面板-->
    <uni-popup ref="panelemoj" type="bottom">
        <view class="panel panelemoj">
            <image class="emoj" @click="sendemoj(item)" :src="item.url" :key="index" v-for="(item,index) in emoj"></image>
        </view>
    </uni-popup>

    <!--插件面板-->
    <uni-popup ref="paneladdon" type="bottom">
        <view class="panel paneladdon" style="width: 100%">
            <view class="addon" v-if="cfgimage.show">
                <image class="icon" @click="chooseImage" :src="cfgimage.pic"></image>
                <text class="label" v-text="cfgimage.txt">发图片</text>
            </view>
           <!-- <view class="addon" v-if="cfgfile.show">
                <image class="icon" @click="chooseFile" :src="cfgfile.pic"></image>
                <text class="label" v-text="cfgfile.txt">发文件</text>
            </view> -->
           <!-- <view class="addon" v-if="cfgvideo.show">
                <image class="icon" @click="chooseVideo" :src="cfgvideo.pic"></image>
                <text class="label" v-text="cfgvideo.txt">发视频</text>
            </view> -->
			<view class="addon" v-if="cfgvideo.show">
			     <image class="icon" @click="feekback" src="../../../../static/idea-kefu/feekback.png"></image>
			     <text class="label">反馈</text>
			 </view>
        </view>
    </uni-popup>
    <view style="text-align: center;">
        <view ref="sound-alert" class="rprogress" v-show="showprocess">
            <view class="rschedule"></view>
            <view class="r-sigh">!</view>
            <view id="audio-tips" class="rsalert" v-text="addiotip">手指上滑，取消发送</view>
        </view>
    </view>
	<!-- 加载动画 -->
	<view class="myLoad" v-show="myLoad">
		<text class="title">
			尝试理解中...
		</text>
		<u-loading mode="flower" size="50"></u-loading>
	</view>
	<u-toast ref="uToast"></u-toast>
</view>
</template>

<script>
const defaultobj = {
    "id": undefined,
    "name": "",
    "tel": "",
    "memo": ""
}
const defaultimage = {
    show: true,
    pic: "/static/idea-kefu/icon/image.png",
    txt: "发图片"
}
const defaultfile = {
    show: true,
    pic: "/static/idea-kefu/icon/fujian.png",
    txt: "发文件"
}
const defaultvideo = {
    show: true,
    pic: "/static/idea-kefu/icon/video.png",
    txt: "发视频"
}
const defaultform = {
    show: true,
    pic: "/static/idea-kefu/icon/shiyong.png",
    txt: "填表试用"
}
const defaultkefu = {
    avatar: "",
    id: 0,
    "name": "",
    "workno": ""
}
const version = "0.0.7"
import uniPopup from "../../components/uni-popup/uni-popup.vue"
export default {
    components: {
        uniPopup
    },
    props: {
        kfid: {
            type: [Number, String],
            default: 0
        },
        uid: {
            type: [String],
            default: "",
        },
        showtime: {
            type: [Boolean],
            default: false
        },
        audioduration: {
            type: [Number, String],
            default: 60
        },
        server: { //服务器地址
            default: "kefu.techidea8.com/api",
            type: String
        },
        logo: { //客服头像,也就是企业头像
            default: "/static/idea-kefu/avatar.jpg",
            type: String
        },
        bgcolorl: { //左侧bgcolor
            default: "#ffffff",
            type: String
        },
        colorl: { //左侧bgcolor
            default: "#000",
            type: String
        },
        bgcolorr: { //右侧bgcolor
            default: "#ffffff",
            type: String
        },
        btncolor: {
            default: "#206CFE",
            type: String
        },
        colorr: { //左侧bgcolor
            default: "#000",
            type: String
        },
        addonfile: {
            default: function () {
                return Object.assign({}, defaultfile)
            },
            type: Object
        },
        addonimage: {
            default: function () {
                return Object.assign({}, defaultimage)
            },
            type: Object
        },
        addonvideo: {
            default: function () {
                return Object.assign({}, defaultvideo)
            },
            type: Object
        }
    },
    components: {
        uniPopup
    },
    data() {
        return {
            postdata: Object.assign({}, defaultobj),
            externdata: {},
            kefucmd: [1, 3],
            visitorcmd: [2, 4, 20],
            chatcmd: [1, 2, 3, 4, 20],
            apiserver: "", //api服务器地址
            socketUrl: "", //websocket服务器地址
            formid: 0,
            inputBottom: 0,
            height: 0,
            screenHeight: 0,
            kbdheight: 0,
            title: 'Hello',
            txtmsg: "",
            uploadUrl: "",
            domid: "init",
            emoj: [],
            ttllive: 30,
            msglist: [],
            ctx: {
                corpid: 0,
                kfid: 0,
                cmd: 2,
                rid: 0,
                uid: ""
            },
            cfgimage: Object.assign({}, defaultimage),
            cfgvideo: Object.assign({}, defaultvideo),
            cfgform: Object.assign({}, defaultform),
            cfgfile: Object.assign({}, defaultfile),
            corpinfo: {
                numkefu: 0,
                stat: 0
            },
            clientInfo: {
                city: "",
                ip: "",
            },
            kefu: Object.assign({}, defaultkefu),
            position: "fixed",
            socketOpend: false,
            choosevideo: "",

            mimes: [".zip", ".rar", "application/x-rar-compressed", "application/zip", "application/x-zip-compressed", "application/octet-stream"],
            errmsg: "",
            audiostat: false,
            voicePath: "",
            recorderManager: {},
            innerAudioContext: {},
            showprocess: false,
            audiottl: 0,
            startx: 0,
            starty: 0,
            endx: 0,
            endy: 0,
            addiotip: "手指上滑,取消发送",
            timer: 0,
			//自定义加载动画
			myLoad: false,
			questionList: [
				{
					msg: '常用事项的签办单位，联系电话'
				},
				{
					msg: '身份证签发机关查询'
				},
				{
					msg: '身份证民族信息查询'
				},
				{
					msg: '籍贯地户口登记信息查询'
				}
			],
			detailMsg: '',
			answerList: [],
			showAnswer: false
        };
    },
    computed: {
        kfavatar() {
            if (this.kefu.avatar) {
                return this.kefu.avatar
            } else {
                return this.logo
            }
        }
    },
    created() {
        this.$emit("version", version)
        //初始化配置
        this.cfgimage = Object.assign({}, defaultimage, this.addonimage)
        this.cfgvideo = Object.assign({}, defaultvideo, this.addonvideo)
        this.initemoj()
        //初始化获得数据即可
        this.initscrollviewheight()
    },

    methods: {
		// 点击跳转到消息列表页
		goMessage() {
			this.$refs.uToast.show({
				title:'正在跳转...',
				type: 'default',
				url: '/pages/message/index'
			});
		},
		// 点击转人工客服
		changeService() {
			this.$refs.uToast.show({
				title:'人工客服功能待开发',
				type: 'default'
			});
		},
		feekback() {
			this.$refs.uToast.show({
				title:'反馈功能待开发',
				type: 'default'
			});
		},
		// 点击问题详情跳转
		goPath() {
			this.$refs.uToast.show({
				title:'正在跳转...',
				type: 'default',
				url: '/pages/tabBar/serviceCloud/address/index'
			});
		},
		// 点击+号
		openaddon() {
			this.$refs.paneladdon.open()
		},
		// 初始高度
		initscrollviewheight(){
			uni.getSystemInfo({
				success:(res)=>{
					this.screenHeight = res.screenHeight
					this.height = this.screenHeight	
				}
			})
		},
		// 展示表情包
        showemoj() {
            this.$refs.panelemoj.open()
        },
		// 初始化表情包
        initemoj() {
            let tmp = []
            for (var i = 0; i < 40; i++) {
                tmp.push({
                    url: this.buildemoj(i),
                    key: i
                })
            }
            this.emoj = tmp
        },
        buildemoj(k) {
            return "../../static/idea-kefu/emoj/" + k + ".gif"
        },
		// 点击常见问题-出现常见问题详情
		showDetail(msg) {
			const answer = {
				cmd: 1,
				content: msg,
				media: 'txt'
			}
			this.detailMsg = answer
			this.showmsg(answer)
		},
		//发送消息
        sendmsg(msg) {
            msg.corpid = this.ctx.corpid
            msg.kfid = this.ctx.kfid
            if (typeof msg.cmd == "undefined") {
                msg.cmd = this.ctx.cmd
            }
            msg.rid = this.ctx.rid
            msg.uid = this.ctx.uid
            this.showmsg(msg)
			this.myLoad = true
			setTimeout(()=>{
				this.toRobot(msg)
			},2000)
        },
		// 消息展示
        showmsg(msg) {
			msg.id = "dom" + new Date().getTime()
			if (msg.cmd == 2 || msg.cmd == 4 || msg.cmd == 20) {
			    msg.position = 'right'
			} else {
			    msg.position = 'left'
			}
			
			if (this.detailMsg === '') {
				msg.detail = false
				this.msglist.push(msg)
				//一定要用这个才可
				this.$nextTick(() => {
				    this.domid = msg.id
				})
				this.myLoad = false
			} else {
				msg.detail = true
				this.msglist.push(msg)
				//一定要用这个才可
				this.$nextTick(() => {
				    this.domid = msg.id
				})
				this.myLoad = false
			}
        },
		//机器人回应：
		toRobot(msg) {
			// 机器人回应 H5不调取接口，默认无法理解
			// #ifdef H5
			const answer = {
				cmd: 1,
				content: '还在学习中,没能明白您的问题,您点击下方提交反馈与问题,我们会尽快人工处理',
				media: 'txt'
			}
			this.showmsg(answer)
			// #endif
			// 机器人回应 APP调取图灵机器人服务-100条/天(次数限制)
			// #ifdef APP-PLUS
			// const answer = {
			// 	cmd: 1,
			// 	content: '还在学习中,没能明白您的问题,您点击下方提交反馈与问题,我们会尽快人工处理',
			// 	media: 'txt'
			// }
			// this.showmsg(answer)
			const params = {
				"key": 'a67f679e578a49b996d5d495cf314743',
				"info": msg.content,
				"userid": plus.device.uuid
			}
			uni.request({
			    url: 'http://www.tuling123.com/openapi/api', //仅为示例，并非真实接口地址。
			    data: params,
			    header: {
			      Accept: "application/json",
			    },
			    success: (res) => {
					const robotMsg = {
						cmd: 1,
						content: res.data.text,
						media: 'txt'
					}
			       console.log('回应的信息', res.data.text);
			       this.showmsg(robotMsg)
			    }
			});
			// #endif
			
		},
		// 点击下载所上传文件
        downloadfile(url) {
			this.$refs.uToast.show({
				title:'下载文件功能待开发',
				type: 'default'
			});
            // const downloadTask = uni.downloadFile({
            //     url: url, //仅为示例，并非真实的资源
            //     success: (res) => {
            //         if (res.statusCode === 200) {
            //             this.toastmsg('下载成功');
            //             uni.hideLoading()
            //         }
            //         window.open(res.tempFilePath)
            //     }
            // });
            // downloadTask.onProgressUpdate((res) => {
            //     uni.showLoading({
            //         title: res.progress + "%",
            //         mask: false
            //     })
            // });
        },
		// 图片预览
        preview(url) {
            let urls = []
            this.msglist.forEach(o => {
                if (o.media == "pic") {
                    urls.push(o.content)
                }
            })
            uni.previewImage({
                urls: urls,
                current: url
            })
        },
		// 发送文本信息
        sendtxt() {
            let msg = {}
            msg.content = this.txtmsg
            msg.media = "txt"
            this.txtmsg = ""
			this.detailMsg = ''
            this.sendmsg(msg)

        },
		// 发送文件
        sendfile(file) {
            let msg = Object.assign({}, file)
            msg.title = file.name
            msg.content = file.url
            msg.amount = file.size
            msg.media = "file"
			this.detailMsg = ''
            this.sendmsg(msg)
        },
		// 发送图片
        sendimage(fileurl) {
            let msg = {}
            msg.content = fileurl
            msg.media = "pic"
			this.detailMsg = ''
            this.sendmsg(msg)
        },
		// 发送视频
        sendvideo(fileurl) {
            let msg = {}
            msg.content = fileurl
            msg.media = "video"
			this.detailMsg = ''
            this.sendmsg(msg)
        },
		// 发送标签包
        sendemoj(emoj) {
            let tmp = Object.assign({}, emoj)
            tmp.url = ""
			this.detailMsg = ''
            tmp.content = "" + emoj.key
            tmp.media = 'emoj'
            this.sendmsg(tmp)
            this.$refs.panelemoj.close()
        },
		// 选择文件-上传文件服务功能暂不添加
        chooseFile() {
            let input = document.createElement("input")
            input.setAttribute("type", "file")
            input.setAttribute("accept", this.mimes.join(","))
			console.log(input.files[0])
            input.onchange = (event) => {
				this.sendfile(input.files[0])
                // this.uploadfilefromlocal(input.files[0], event).then(res => {
                //     this.sendfile(res)
                // })
            }
            input.click()
            this.$refs.paneladdon.close()
        },
		// 上传所选择的文件-便于下载
        uploadfilefromlocal(file, event) {
			console.log(file)
            return new Promise((resolve, reject) => {
                const task = uni.uploadFile({
                    url: this.uploadUrl,
                    files: [{
                        name: "file",
                        file: file,
                        uri: './'
                    }],
                    success: (res) => {
                        if (res.statusCode === 200) {
                            let result = JSON.parse(res.data)
                            let f = {}
                            f.url = result.data
                            f.name = file.name
                            f.size = file.size
                            resolve(f)
                        } else {
                            reject("网络繁忙请稍后再试")
                        }
                    },
                    fail: (res) => {
                        reject(res.errMsg)
                    },
                    complete: () => {
                        uni.hideLoading()
                    }
                })
                task.onProgressUpdate((res) => {
                    uni.showLoading({
                        title: res.progress + "%",
                        mask: false
                    })
                });
            })
        },
		// 选择图片
        chooseImage() {
            uni.chooseImage({
                count: 1,
                success: (e) => {
                    var pathArr = e.tempFilePaths
                    this.sendimage(pathArr[0])
                },
            })
            this.$refs.paneladdon.close()
        },
		// 文件大小
        sizestr(num) {
            if (num < 1024) {
                return "1kb"
            } else if (num < 1024 * 1024) {
                return (num / 1024).toFixed(2) + "kb"
            } else if (num < 1024 * 1024 * 1024) {
                return (num / 1024 / 1024).toFixed(2) + "kb"
            } else {
                ">1gb"
            }
        },
		// 选择视频
        chooseVideo() {
            uni.chooseVideo({
                count: 1,
                success: (e) => {
                    var pathArr = [e.tempFilePath]
					console.log(pathArr)
					this.sendvideo(pathArr[0])
                },
            })
            this.$refs.paneladdon.close()
        },
		// 上传文件服务
        uploadfile(filepath) {
            let _self = this
            return new Promise((resolve, reject) => {
                const task = uni.uploadFile({
                    url: '/',
                    filePath: filepath,
                    name: "file",
                    success: (res) => {
                        uni.hideLoading()
                        if (res.statusCode === 200) {
                            let result = JSON.parse(res.data)
                            resolve(result)
                        } else {
                            reject("网络繁忙请稍后再试")
                        }
                    },
                    fail: (res) => {
                        reject(res.errMsg)
                        uni.hideLoading()
                    },
                    complete: () => {
                        uni.hideLoading()
                    }
                })
                task.onProgressUpdate((res) => {
                    //只有大于512KB的才显示
                    if (res.totalBytesExpectedToSend > 1024 * 512) {
                        return
                    }
                    uni.showLoading({
                        title: res.progress + "%",
                        mask: false
                    })

                    if (res.progress > 99) {
                        uni.hideLoading()
                    }
                });
            })
        }
    }
}
</script>

<style lang="less">
uni-page-body {
    height: 100%;
}

.idea-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px 0px 0px 0px;
    font-size: 14px;
    background-color: #f0f0f0;
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
}

.panel {
    background-color: white;
}

.row {
    width: 100%;
    display: flex;
    position: relative;
}

.chat-content {
    background-color: #f0f0f0;
    display: flex;
    height: calc(100%);
    flex-direction: column;

    .chat-item {
        &:last-child {
            margin-bottom: 48rpx !important;
        }
        &:first-child {
            margin-top: 48rpx !important;
        }
        .chat-msg {
            clear: both;
            display: flex;
            margin-bottom: 32rpx !important;
            &:last-child {
                margin-bottom: 45px;
            }
        }

    }

}

//chat下面的一下
.chat {
    justify-content: flex-start;
    align-items: flex-start;
    display: flex;
    &.other {
        flex-direction: row;
        .chat-avatar {
            margin-left: 10px;
            margin-right: 10px;
        }
        .arrow {
            border: 8px solid;
            border-color: transparent #FFFFFF transparent transparent;
            // left: -30px;
            // top: 5px;
            position: absolute;
			left: -6px;
			top: 0px;
			transform: rotate(-90deg);
        }
        .content {
           background-color: #FFFFFF;
           margin-left: 30rpx;
           margin-right: 30rpx
        }
    }
    &.mine {
        flex-direction: row-reverse;
        .chat-avatar {
            margin-left: 10px;
            margin-right: 10px;
        }
        .arrow {
            border: 8px solid;
            border-color: transparent transparent transparent #4887FC !important;
            position: absolute;
            // right: -30px;
   //          top: 5px;
			right: -6px;
			top: 0px;
			transform: rotate(90deg);
        }
        .content {
            background:  linear-gradient(270deg, #4887FC, #4D53FF);
            margin-left:30rpx;
			margin-right: 30rpx;
			min-width: auto;
			.chat-msg-txt {
				color: #FFFFFF;
				font-size: 28rpx;
			}
        }
    }
}
.content {
    position: relative;
    // min-width: 100rpx;
    max-width: calc(100% - 180px);
    clear: both;
    display: inline-block;
    padding: 32rpx 30rpx 32rpx 30rpx;
    font: 16px/20px 'Noto Sans', sans-serif;
    border-radius: 20rpx;
    margin-bottom: 32rpx;
	box-shadow: 0px 0px 20rpx rgba(41,41,41,0.05);
	min-width: fit-content;
}
// 区分content的width
.tips-message {
	.content {
		min-width: 550rpx;
	}
}
.detail-content {
	padding-left: 30rpx;
	padding-right: 30rpx;
	// min-width: 434rpx;
}
.uni-input-placeholder {
	font-size: 28rpx;
	color: #C0C0C0;
	font-family: SourceHanSansCN, SourceHanSansCN-Normal;
	line-height: 42rpx;
	left: 32rpx;
}
.detail-text {
	text-align: left;
	display: inline-block;
	width: 100%;
	font-size: 28rpx;
}
.chat-msg-file {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .icon {
        width: 24px !important;
        height: 24px !important;
        margin: 5px 5px 5px 5px;
    }
    .desc {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        .name {
            font-size: 28rpx;
			color: #ffffff;
			font-family: SourceHanSansCN, SourceHanSansCN-Normal;
        }
        .size {
            color: #FFFDEF;
            font-size: 12px;
			font-family: SourceHanSansCN, SourceHanSansCN-Normal;
        }
    }
}
.chat-msg-emoj {
    width: 48rpx;
    height: 48rpx;
}
.chat-avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
	display: none;

}
.chat-tip {
    width: 100%;
    float: left;
    margin: 8px 0;
    text-align: center;
    color: #fff;
    font-size: 12px;
    justify-content: center;
    text {
        background-color: #c9ced3;
        border-radius: 4px;
        padding: 1px 3px;
    }
}
.chat-msg-pic {
    width: 260rpx;
    height: 260rpx;
    margin: 3px 3px 3px 3px;
}
.chat-msg-audio {
    display: flex;
    justify-content: row;
    align-items: center;
    justify-items: center;
}
.other {
    .chat-msg-audio {
        flex-direction: row-reverse;

        image {
            transform: rotate(180deg);
        }
    }
}
//操作区域
.chat-footer {
    position: sticky;
    bottom: 0;
    flex-direction: column;
    flex-grow: 1;
    width: 100%;
    .chat-input {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        flex-grow: 1;
        padding-left: 34rpx;
        padding-right: 34rpx;
        background-color: #FFFFFF;
        z-index: 99;
        height: 104rpx;
        padding-top: 16rpx;
        padding-bottom: 16rpx;
        // width: calc(100% - 68px);
        .btn-icon {
            width: 48rpx;
            height: 48rpx;
            // margin-left: 5px;
            // margin-right: 5px;
			margin-right: 30rpx;
        }
		/deep/.uni-input-input{
			text-indent: 32rpx;
		}
		.btn-icon:last-child {
			margin-right: 0px;
		}
        .btn-send {
            width: 40px;
            border-radius: 4px;
            height: 30px;
            text-align: center;
            line-height: 30px;
            color: #fff;
            cursor: pointer;
            font-size: 13px;
            margin-left: 5px;
            margin-right: 5px;
        }
        .btn-ok {
            background-color: #42b8f4 !important;
			color: #FFFFFF;
			font-size: 32rpx;
			font-family: SourceHanSansCN, SourceHanSansCN-Normal;
			width: 60px;
        }
        .btn-default {
            background-color: #ccc !important;
        }
        .txtarea {
            background-color: #F6F7F9;
            height: 72rpx;
            flex: 1;
            line-height: 72rpx;
            word-wrap: break-word;
			margin-left: 34rpx;
			margin-right: 30rpx;
			width: 434rpx;
			border-radius: 36rpx;
        }
    }
}
.form {
    .form-title {
        height: 80rpx;
        line-height: 80rpx;
        padding-left: 4%;
        border-bottom: 1px solid #f5f5f5;
    }
    .btn {
        width: 91%;
        margin: 0 auto;
        height: 84rpx;
        border-radius: 84rpx;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #4a8be9;
    }
    .tri {
        width: 0;
        height: 0;
        border-left: 8rpx solid transparent;
        border-right: 8rpx solid transparent;
        right: 30rpx !important;
        border-top: 16rpx solid #545151;
    }
    .form-item {
        margin-top: 30rpx;
        height: 100rpx;
        width: 92%;
        margin: 0 auto;
        border-bottom: 1px solid #f5f5f5;
        display: flex;
        .form-control {
            .tips {
                color: #9a9a9c;
                font-weight: bold;
            }
            flex: 1;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: relative;

            .place-class {
                color: #dbdbdb;
            }
        }
        .form-label {
            display: flex;
            width: 20%;
            align-items: center;
            height: 100%;
            font-weight: bold;
            color: #000000;
        }
        .input {
            padding-right: 20rpx;
            height: 100%;
            width: 70%;
            text-align: left;
            font-size: 28rpx;
            color: #545151;
        }
        .picker {
            height: 100%;
            justify-content: flex-start;
            display: flex;
            align-content: center;
            width: 500rpx;
        }
        picker {
            height: 84rpx;
            line-height: 84rpx;
        }
    }
    font-size: 28upx;
    overflow: hidden;
    color: #6b8082;
    position: relative;
}
//emoj区域
.panelemoj {
    .emoj {
        margin: 5px 5px 5px 5px;
        width: 30px;
        height: 30px;
    }
}
//下面是
.paneladdon {
    display: flex;
    flex-direction: row;
    justify-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    background-color: #f0f0f0;
    min-height: 220px;
    .addon {
        margin: 5px 5px 5px 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-items: center;
        justify-content: center;
        width: 64px;
        height: 64px;
        border-radius: 10px;
        background-color: white;
        .icon {
            width: 32px;
            height: 32px;

        }
        .label {
            text-align: center;
            font-size: 8px;
            color: #333;
        }
    }
}
.rprogress {
    position: absolute;
    left: 45%;
    top: 45%;
    width: 140px;
    height: 140px;
    margin-left: -70px;
    margin-top: -70px;
    background-image: url("data:image/png;base64,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");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 30px 30px;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 5px;
    -webkit-transition: .15s;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.rschedule {
    background-color: rgba(0, 0, 0, 0);
    border: 5px solid rgba(0, 183, 229, 0.9);
    opacity: .9;
    border-left: 5px solid rgba(0, 0, 0, 0);
    border-right: 5px solid rgba(0, 0, 0, 0);
    border-radius: 50px;
    box-shadow: 0 0 15px #2187e7;
    width: 46px;
    height: 46px;
    -webkit-animation: spin 1s infinite linear;
    animation: spin 1s infinite linear;
    z-index: 1000;
}
.r-sigh {
    display: none;
    border-radius: 50px;
    box-shadow: 0 0 15px #2187e7;
    width: 46px;
    height: 46px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -23px;
    margin-top: -23px;
    text-align: center;
    line-height: 46px;
    font-size: 40px;
    font-weight: bold;
    color: #2187e7;
}
.rprogress-sigh {
    background-image: none !important;
}
.rprogress-sigh .rschedule {
    display: none !important;
}
.rprogress-sigh .r-sigh {
    display: block !important;
}
.rsalert {
    font-size: 12px;
    color: #bbb;
    text-align: center;
    position: absolute;
    border-radius: 5px;
    width: 130px;
    margin: 5px 5px;
    padding: 5px;
    left: 0px;
    bottom: 0px;
}
@-webkit-keyframes spin {
    0% {
        -webkit-transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
    }
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
// 自定义样式
.container {
	background-color: #F5F6F7;
	height: 100%;
}
.navbar-right {
	width: 48rpx;
	height: 48rpx;
}
/deep/.u-slot-right {
	padding: 5px 16px 5px 0px;
}
.u-back-wrap {
	padding: 5px 0px 5px 16px;
}
/deep/.u-title {
	font-weight: 500;
	font-family: SourceHanSansCN, SourceHanSansCN-Normal;
}
.tb-text {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	/deep/.uicon-server-man::before {
	  font-size: 48rpx;	
	}
	uni-text {
		font-size: 22rpx;
		color: #206CFE;
		line-height: 34rpx;
		font-family: SourceHanSansCN, SourceHanSansCN-Normal;
	}
	/deep/uni-image {
		width: 48rpx;
		height: 48rpx;
	}
}
.myLoad {
	width: 320rpx;
	height: 120rpx;
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(0,0,0,.6);
	flex-direction: row;
	padding: 20rpx;
	border-radius: 20rpx;
	uni-text {
		color: #FFFFFF;
		font-size: 28rpx;
	}
}
// 自定义样式
.question{
	display: flex;
	flex-direction: column;
	text{
		margin: 24rpx 0rpx 24rpx 0rpx;
		color: #206CFE;
		font-size: 28rpx;
		font-family: SourceHanSansCN, SourceHanSansCN-Normal;
		line-height: 28rpx;
	}
	.title {
		font-size: 32rpx;
		color: #1D1D1D;
		font-weight: 500;
		font-family: SourceHanSansCN, SourceHanSansCN-Normal;
		border-bottom: solid 1px #F2F2F2;
		padding-bottom: 40rpx;
	}
}
.detail-info {
	border-top: solid 1px #F2F2F2;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 28rpx;
	padding-top: 30rpx;
	uni-text {
		font-size: 28rpx;
		color: #206CFE;
		line-height: 24rpx;
	}
}
.chat-msg-txt {
	font-size: 28rpx;
	color: #585858;
	font-family: SourceHanSansCN, SourceHanSansCN-Normal;
	line-height: 48rpx;
}
/deep/uni-video{
	width: 260rpx;
	height: 260rpx;
}
.uni-video-video {
	width: 260rpx;
	height: 260rpx;
}
.chat-msg-video {
}
/deep/.uni-scroll-view-content {
	padding-left: 30rpx;
	padding-right: 30rpx;
	width: auto;
}
</style>
