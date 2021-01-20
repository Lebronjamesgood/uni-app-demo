<template>
	<view class="expose-container">
		<!-- <nav-bar :isBack="isBack" :title="title" :messageList="messageList" :rightMsg="false" :showAction="false" :titleSize="22"></nav-bar> -->
		<u-navbar :is-back="isBack" :title="title" :titleSize="36"></u-navbar>
		<view class="main" v-show="hasMounted">
			<u-form class="container"  labelWidth="150" :model="form" ref="uForm" :errorType="errorType">
			   <!-- #ifdef APP-PLUS -->
			   <file-upload ref="lFile" @up-success="onSuccess"></file-upload>
			   <!-- #endif -->
			   <!-- #ifdef H5 -->
			   <create-input-file ref="createFile" @up-success="onSuccess"></create-input-file>
			   <!-- #endif -->
			  <u-form-item label="现象" prop="attach" class="form-item upload-file radius-style starStyle radius-style radius-style-bottom starStyle marginBottom" :style="{height: height}" v-if="title==='全民治理'" required>
			  	<text class="tip">图片数量（{{imageList.length}}/{{count.length}})</text>
			  	<view class="attach-box">
					<view class="image-item" v-for="(item, index) in imageList">
						<image :src="item" :data-src="item" 
						:key="index"></image>
					</view>
					<view @click="addImage" class="btnsa zhili">点击上传附件</view>
				</view>
			  	<text class="tip-count">图片最多上传5个</text>
			  </u-form-item>
			   <u-form-item label="类型" prop="type" class="form-item radius-style align-right" v-else>
			   	<u-input v-model="form.type"  disabled/>
			   </u-form-item>
				<u-form-item :label="titleLabel" prop="title" class="form-item" required :class="fromZhili? 'fromZhili': ''">
					<u-input v-model="form.title" placeholder="请填写" maxlength="50"  />
				</u-form-item>
				<u-form-item :label="contentName" prop="summaryDesc" class="form-item textarea-item"  :class="starStyle? 'starStyle': ''"  required>
					<textarea v-model="form.summaryDesc" placeholder="请填写" maxlength="200" :data-maxnum="form.summaryDesc.length+'/200'"/>
				</u-form-item>
				<u-form-item label="发生地址" prop="lonLat" class="form-item radius-style-bottom location" label-position="top">
					<view class="line">
						<u-input v-model="form.lonLat" name="input" placeholder="请选择发生地址" class="address-box" @click="getlocations" disabled/>
						<image src="../../../../static/serviceCloud/location.svg" mode="" class="location-style" @tap="handleClickLocation"></image>
					</view>
				</u-form-item>
				<u-form-item label="附件" prop="attaches" class="form-item upload-file file-box radius-style radius-style-bottom starStyle" :style="{height: height}" v-if="title!=='全民治理'" required >
					<text class="tip tipshow">支持word，pdf，png，jpg格式</text>
					<!-- #ifdef APP-PLUS -->
					<view @click="onUpload" class="btnsa marginTop">点击上传附件</view>
					<!-- #endif -->
					<!-- #ifdef H5 -->
					<view @click="openFileDialog" class="btnsa marginTop">点击上传附件</view>
					<!-- #endif -->
					<view
						v-for="(item, index) in attach"
						:key="index"
						class="file-item"
					>
						<text  class="file-name">{{ item.name }}</text>
						<text @click="delsattch(index)" class="file-clear">点击删除</text>
					</view>
					<text class="tip-count">附件最多上传4个</text>
					<u-input v-model="form.attaches" display="none"  type="hide" style="height: 0px;" placeholder="" class="hide-input"/>
				</u-form-item>
				<u-form-item :label="title === '全民治理'?'爆料人': '联系人'" prop="username" class="form-item  radius-style star-style" required :class="fromZhili? 'fromZhili2': ''">
					<u-input v-model="form.username" name="input" placeholder="请输入你的真实姓名" maxlength="50" />
				</u-form-item>
				<u-form-item label="回访电话" prop="phone" class="form-item radius-style-bottom"  required>
					<u-input v-model="form.phone" name="input" placeholder="请输入你的联系电话" maxlength="50" />
				</u-form-item>
			</u-form>
		</view>
		<view class="tip-box">
			<view class="tips">
				<text>{{tip}}</text>
				<view class="reward" v-if="title==='全民治理'">
					<image src="../../../../static/serviceCloud/tip_icon.svg" mode=""></image>
					<text>{{reward}}</text>
				</view>
			</view>
		</view>
		<view class="commit"><button type="primary" @click="submit">确认发布</button></view>
		<u-toast ref="uToast"></u-toast>
		<TakePhoto :sourceType="sourceType" :sizeType="sizeType" :count="count" :sourceTypeIndex="2" ref="takePhoto" from="" @chooseImageSuccess="chooseImageSuccess"></TakePhoto>
	</view>
</template>

<script>
//#ifdef APP-PLUS	
import fileUpload from '@/components/l-file/l-file.vue';
//#endif
// #ifdef H5
import createInputFile from './components/createInputFile.vue'
// #endif
// import { FILE_BASE_URL } from '@/config/index.js';
// import request from '@/common/js/request';
import TakePhoto from '../components/TakePhoto.vue'
export default {
	components: {
		TakePhoto,
		//#ifdef APP-PLUS
		fileUpload
		//#endif
		//#ifdef H5
		createInputFile
		//#endif
	},
	data() {
		return {
			// 标题
			isBack: true,
			messageList: [],
			list: [],
			title: '投诉建议',
			form: {
				type: '投诉建议',
				title: '',
				summaryDesc: '',
				lonLat: '',
				username: '',
				phone: '',
				attachment: [],
				address: '',
				attaches: ''
			},
			rules: {
				title: [
					{ required: true, message: '请输入', trigger: ['change', 'blur']},
					{ max: 50, message: '不能多于50个字', trigger: ['change', 'blur']}
				],
				phone: [
					{ required: true, message: '请输入手机号', trigger: ['change', 'blur']},
					{ validator: (rule, value, callback) => {
						return this.$u.test.mobile(value);
					},
					message: '手机号码不正确',
					trigger: ['change', 'blur']
				}],
				summaryDesc: [
					{	required: true,	message: '请简单描述的内容',	trigger: ['change', 'blur']},
					{	max:200,	message: '最多可输入200字的内容',	trigger: ['change', 'blur']}
				],
				username: [
					{ required: true, message: '请输入你的真实姓名', trigger: ['change', 'blur']},
					{ max: 50, message: '不能多于50个字', trigger: ['change', 'blur']}
				],
				lonLat:[
					{ required: false, message: '请选择发生地址', trigger: ['change']},
				],
				attaches: [
					{ required: true, message: '请上传附件', trigger: ['change']},
				]
				
			},
			category: 'image',
			attaches: [],
			attach: [],
			dialogFlag: false,
			address: '',
			lonLat: '',
			height: '',
			errorType: ['toast'],
			hasMounted: false,
			tip: '感谢您对共建和谐社会的关注和关心，您的建议，举报，投诉对我们的工作和创建和谐社会至关重要。我们承诺，严格保密您的个人信息，尽快落实处理，请保持电话畅通，工作人员会回访核实您提供的信息。',
			titleLabel: '事件主题',
			submitType: 0,
			imageList: [],
			//全民治理
			sourceType: ['拍照', '相册', '拍照或相册'],
			sizeType: ['压缩', '原图', '压缩或原图'],
			count: [1, 2, 3, 4, 5],
			//模拟上传相关
			realUpload: false,
			reward: '如果您的爆料被采纳，将奖励您100 凤币哦！',
			contentName: '',
			starStyle: false,
			fromZhili: false
		};
	},
	onReady() {
		this.$refs.uForm.setRules(this.rules)
	},
	onTabItemTap() {
		this.resetFrom()
	},
	onLoad(options) {
		if (options.title === '投诉建议') {
			this.title = options.title
			this.form.type = '投诉建议'
			this.titleLabel = '事件主题'
			this.submitType = 0
			this.contentName = '投诉内容'
			this.starStyle = false
			this.fromZhili = false
		} else if(options.title === '咨询') {
			this.title = '事件咨询'
			this.form.type = '事件咨询'
			this.titleLabel = '事件主题'
			this.submitType = 1
			this.contentName = '内容'
			this.starStyle = true
			this.fromZhili = false
		} else if(options.title === '调解') {
			this.title = '矛盾调解'
			this.form.type = '矛盾调解'
			this.titleLabel = '调解事件'
			this.submitType = 2
			this.contentName = '内容'
			this.starStyle = true
			this.fromZhili = false
		} else if(options.title === '爆料') {
			this.title = options.title
			this.title = '全民爆料'
			this.form.type = '全民爆料'
			this.titleLabel = '爆料主题'
			this.contentName = '详细内容'
			this.submitType = 3
			this.starStyle = false
			this.fromZhili = false
		} else if(options.title === '全民治理') {
			this.title = '全民治理'
			this.form.type = '全民治理'
			this.titleLabel = '爆料主题'
			this.submitType = 4
			this.contentName = '爆料内容'
			this.starStyle = false
			this.fromZhili = true
			this.imageList = this.imageList.concat(JSON.parse(options.imageList));
		}
	},
	//#ifdef APP-PLUS
	mounted() {
		const that = this
		setTimeout(function(){
			that.hasMounted = true
		},300)
	},
	//#endif
	//#ifdef H5
	mounted() {
		this.$nextTick(()=>{
			// 创建附件上传
			var _self = this;
			setTimeout(function(){
				_self.hasMounted = true
			},300)
			//创建元素
			var input = document.createElement('input');
			//添加file类型
			input.type = 'file';
			//添加class
			input.className = 'file';
			input.style.position = 'absolute';
			input.style.zIndex = '93';
			input.style.left = '0';
			input.style.right = '0';
			input.style.top = '0';
			input.style.bottom = '0';
			input.style.height = '40px';
			input.style.width = '100%';
			input.style.opacity = '0';
			input.onchange = (event) => {
				_self.h5ChooseFileUpload(input, event)
			}		
			const parent = _self.$refs.createFile.$el.lastChild.lastChild.lastChild
			parent.appendChild(input)
			// console.log(_self.$refs.createFile.$el.lastChild.lastChild.lastChild)
		})
	},
	//#endif
	methods: {
		// 地图获取位置
		getlocations(){
		  var that = this
		  uni.chooseLocation({
		    success: function(res) {
			 that.form.lonLat = res.address  
		     that.address = res.address
			 that.form.address = res.address
		     that.lonLat = res.longitude + ',' + res.latitude
		    }
		  })
		},
		//点击位置图标
		handleClickLocation() {
			var that = this;
			uni.chooseLocation({
				success: function(res) {
					 that.form.lonLat = res.address
					 that.address = res.address
					 that.form.address = res.address
					 that.lonLat = res.longitude + ',' + res.latitude
				}
			});
		},
		//#ifdef H5
		openFileDialog() {
			if (this.attach.length > 3) {
				uni.showToast({
					title: '最多上传4个',
					mask: true,
					icon: 'none',
					duration: 2000
				})
				return
			}
			this.$refs.createFile.openFileDialog();
		},
		h5ChooseFileUpload(input, event) {
			// const {...formData} = {}
			// const param = {
			// 	url: FILE_BASE_URL + '/fastDFS/uploadFile',
			// 	key: 'file',
			// 	formData: formData,
				
			// }
			const {...formData} = {}
			const param = {
				url: '/',
				key: 'file',
				formData: formData,
				
			}
			this.$refs.createFile.fileChange(param.url,param.key,param.formData);
		},
		//#endif
		onSuccess(res) {
			var a = JSON.parse(res.data.id)
			var arr = {
				name: res.fileName,
				url: a.datas
			}
			// var url = a.datas + '$' + res.fileName
			this.attaches.push(arr)
			this.getHeight();
			this.attach = this.attaches
			var url = '';
			//模拟上传后文件地址
			if (this.realUpload) {
				url = a.datas
			} else {
				url = '上传文件:' + res.fileName
			}
			
			this.form.attachment.push(url)
			this.form.attaches = JSON.stringify(this.form.attachment)
			console.log(this.form.attachment)
		},
		onUpload() {
			if (this.attach.length > 3) {
				uni.showToast({
					title: '最多上传4个',
					mask: true,
					icon: 'none',
					duration: 2000
				})
				return
			}
			// this.$refs.lFile.upload({
			// 	// #ifdef APP-PLUS
			// 	// nvue页面使用时请查阅nvue获取当前webview的api，当前示例为vue窗口
			// 	currentWebview: this.$mp.page.$getAppWebview(),
			// 	// #endif
			// 	url: FILE_BASE_URL + '/fastDFS/uploadFile',
			// 	//默认file,上传文件的key
			// 	name: 'file'
			// 	// header: {'Authorization':'token'},
			// 	//...其他参数
			// })
			this.$refs.lFile.upload({
				// #ifdef APP-PLUS
				// nvue页面使用时请查阅nvue获取当前webview的api，当前示例为vue窗口
				currentWebview: this.$mp.page.$getAppWebview(),
				// #endif
				url: '/',
				//默认file,上传文件的key
				name: 'file'
				// header: {'Authorization':'token'},
				//...其他参数
			})
		},
		delsattch(e) {
			this.attach.splice(e, 1)
			this.form.attachment.splice(e, 1)
			this.attaches = this.attach
			this.getHeight();
		},
		getHeight() {
			const that = this	
			if(that.attaches.length===1) {
				that.height = 326 + 80 +'rpx'
			} else if(that.attaches.length===2){
				that.height = 326 + 160 + 'rpx'
			} else if(that.attaches.length===3){
				that.height = 326 + 180 + 86 +'rpx'
			} else if(that.attaches.length===4){
				that.height = 326 + 220 + 86 +'rpx'
			} else {
				that.height = 'auto'
			}
		},
		submit() {
			const that = this
			that.$refs.uForm.validate(val => {
				if (val) {
					that.form.attachment = that.form.attachment.toString()
					delete this.form.attaches
					// uni.showLoading({
					// 	title: '提交中',
					// 	mask: true
					// })
					/*经纬度和网格id传递测试..*/
					const params = {
						title: that.form.title,
						summaryDesc: that.form.summaryDesc,
						// 测试网格
						lonLat: '109.6,27.95',
						address: that.form.address,
						agencyId: that.form.agencyId,
						username: that.form.username,
						phone: that.form.phone,
						attachment: that.form.attachment
					}
					console.log('提交的信息', params)
					if (this.submitType === 0) {
						that.$refs.uToast.show({
							title:'投诉提交...',
							type: 'success'
						});
					} else if(this.submitType === 1) {
						that.$refs.uToast.show({
							title:'咨询提交...',
							type: 'success'
						});
					} else if(this.submitType === 2) {
						that.$refs.uToast.show({
							title:'调解提交...',
							type: 'success'
						});
					} else if(this.submitType === 3) {
						that.$refs.uToast.show({
							title:'爆料提交...',
							type: 'success'
						});
						uni.navigateTo({
							url: '/pages/tabBar/serviceCloud/brokeNews/index'
						});
					} else if(this.submitType === 4) {
						delete params.attachment
						params.imageList = this.imageList
						console.log(params)
						that.$refs.uToast.show({
							title:'全民治理提交...',
							type: 'success'
						});
						
					}
					// this.resetFrom()
				} else {
					console.log('验证失败');
				}
								
			})
		},
		resetFrom() {
			// this.form = {
			// 	title: '',
			// 	summaryDesc: '',
			// 	lonLat: '',
			// 	username: '',
			// 	phone: '',
			// 	attachment: [],
			// 	address: ''
			// }
			this.form.title = ''
			this.form.summaryDesc = ''
			this.form.lonLat = ''
			this.form.username = ''
			this.form.phone = ''
			this.form.attachment = []
			this.form.address = ''
			this.attach = []
			this.attaches = []
			this.handleindex = ''
			this.communityIndex = ''
			this.imageList = []
			this.getHeight()
			// this.$refs.uForm.resetFields()
		},
		addImage() {
			if (this.imageList.length <= 4) { 
				this.$refs.takePhoto.chooseImage()
			} else {
				this.$refs.uToast.show({
					title:'不允许超过5张',
					type: 'error'
				});
			}
			
		},
		chooseImageSuccess(e) {
			this.imageList = this.imageList.concat(e.imageList);
		}
	}
};
</script>

<style lang="less" scoped>
.expose-container {
   width: 100%;	
  .nav-bar {
	  border: none;
	  background-color: #306FFE;
	  /deep/.uni-navbar__header {
	    background-color: #306FFE !important;
		.uni-nav-bar-text {
		   color: #FFFFFF !important;
		}
	  }
	  
  }
  .no-list {
  		height: calc(100vh - 750rpx);
  		text-align: center;
  		uni-image {
  			margin-top: 288rpx;
  			width: 454rpx;
  			height: 245rpx;
  		}
  		.no-text {
  			height: 48rpx;
  			font-size: 34rpx;
  			text-align: center;
  			color: rgba(0, 0, 0, 0.3);
  			line-height: 48rpx;
  			margin-top: 18rpx;
  		}
  }
  .main {
	  background-color: #F4F5F6;
	  padding: 30rpx;
	  padding-bottom: 0px;
	  .upload-file {
		  min-height: 300rpx !important;
		  height: auto;
		  /deep/.uploader-input-box {
			  width: 156rpx;
			  height: 156rpx;
			  background-color: #F6F6F6;
			  margin-top: 84rpx;
		  }
		  /deep/.uploader-input-box::before,
		  /deep/.uploader-input-box::after{
		  	  background-color: #D7D7D7;
		  }
		  /deep/.uploader-input-box::before{
			   width: 2px;
			   height:52rpx ;
		  }
		   /deep/.uploader-input-box::after{
			   height: 2px;
			   width: 52rpx;
		   }
		   .file-item {
			   justify-content: space-between; 
			   border-radius: 10rpx; 
			   margin: 20rpx 0rpx 0rpx 0rpx; 
			   display: flex; 
			   background-color: #f0f2f5; 
			   width: 400rpx; 
			   height: 50rpx; 
			   line-height: 50rpx;
			   .file-name {
				   margin-left: 20rpx; 
				   text-overflow: ellipsis; 
				   display: block; 
				   overflow: hidden; 
				   white-space: nowrap; 
				   width: 200rpx;
			   }
			   .file-clear {
				   margin-right: 20rpx; 
				   color: #007AFF;
			   }
		   }
		   .file-item:nth-child(3){
			   margin-bottom: 0px;
		   }
	    /deep/.u-form-item__body{
			display: inline-block !important;
		}
		/deep/.u-form-item--right__content__slot {
			display: inline-block;
		}
	  }
	  .form-item {
		  padding-left: 46rpx;
		  padding-right: 46rpx;
		  line-height: 86rpx;
		  min-height: 86rpx;
		  font-size: 28rpx;
		  background-color: #FFFFFF;
		  padding-top: 20rpx;
		  padding-bottom: 20rpx;
		  .tip{
			  font-size: 24rpx;
			  color: #666666;
			  position: absolute;
			  left: 160rpx;
			  top: 24rpx;
			  font-size: 24rpx;
			  color: #666666;
			  font-family: SourceHanSansCN, SourceHanSansCN-Normal;
			  line-height: 36rpx;
		  }
		  .tip-count{
			  font-size: 26rpx;
			  color: #CCCCCC;
		  }
		  /deep/.item-con, uni-input {
			  font-size: 28rpx;
			  height: 86rpx;
			  line-height: 86rpx;
		  }
		  uni-input {
			  color: #333333;
			  font-size: 28rpx;
			  width: 100%;
		  }
		  uni-picker {
			  width: 100%;
		  }
		   /deep/.item-required {
			  left: 0rpx;
			  top: 0rpx;
			  font-size: 26rpx;
			  color: #F02020;
			  position: absolute;
		   }
		   /deep/.label-inline {
			    position: relative;
		   }
		   /deep/.item-label {
				 padding-left: 34rpx;
		   }
		   .line {
			  display: inline-block;
			  width: 100%;
			  position: relative;
			  .uni-icons {
				position: absolute;
				right: 0px;
				top: 0px;
				display: none;
			  }
			  .arrow-right {
				position: absolute;
				right: 0px;
				top: 0px;
				width: 12px;
				height: 100%;  
			  } 
			  .location-style {
				   position: absolute;
				   right: 0px;
				   top: 0px;
				   width: 12px;
				   height: 100%;
			   }
		   }
		   /deep/.uni-input-placeholder{
			   color: #B1B2B3 !important;
			   font-size: 30rpx;
			   font-family: SourceHanSansCN, SourceHanSansCN-Normal;
			   text-align: right;
		   }
	  }
	  .textarea-item {
		  padding-bottom: 24rpx;
		    /deep/.u-form-item__body{
				display: inline-block !important;
			}
			/deep/uni-textarea{
				width: 100%;
				height: 104rpx;
				color: #333333;
				padding-bottom: 40rpx;
			}
			/deep/uni-textarea::after{
				content: attr(data-maxnum);
				position: absolute;
				right: 5px;
				bottom: 0px;
				font-size: 12px;
				color: #CCCCCC;
				font-size: 28rpx;
				display: none;
			}
			/deep/.item-con{
				height: auto;
				line-height: normal;
			}
			/deep/.uni-textarea-placeholder{
				  padding-left: 0px;
				  color: #CCCCCC;
				  font-size: 28rpx;
			}
			/deep/.label-inline{
				align-items: flex-start !important;
				display: inline-block;
				width: 100%;
			}
			/deep/.uni-textarea-textarea{
				 padding-left: 0rpx;
				 font-size: 28rpx;
				 color: #333333;
			}
		}
  
  }
}
.marginTop {
	margin-top: 32rpx;
}
.addimg {
	font-size: 28rpx;
	margin-top: 24rpx;
	padding: 10rpx 30rpx 20rpx 30rpx;
	background-color: #FFFFFF;
}
.btnsa{
	// width: 156rpx;
	// height: 156rpx;
	width: 180rpx;
	height: 180rpx;
	background: url("../../../../static/serviceCloud/upload-icon.svg") center center no-repeat;
	color: transparent;
}
.zhili {
	background: url("../../../../static/serviceCloud/zhili.svg") center center no-repeat;
}
.tip-dialog{
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,0.5);
	position: fixed;
	top: 0;
	left: 0;
	.title{
		width: 610rpx;
		height: 300rpx;
		margin: 0 auto;
		margin-top: 40vh;
		border-radius: 24rpx;
		box-shadow: 0px 6px 12px 0px rgba(0,0,0,0.12);
		background-color: #FFFFFF;
		.tip-style{
			height: 200rpx;
			text-align: center;
			line-height: 200rpx;
			font-size: 32rpx;
			color: rgba(0,0,0,0.8);
			font-weight: bolder;
		}	
		.btn-style{
			display: flex;
			font-size: 28rpx;
			height: 100rpx;
			line-height: 100rpx;
			color: rgba(0,0,0,0.6);
			text-align: center;
			border-top: 1px solid #e6e9ed;
			.cancel{
				flex: 1;
				height: 99rpx;
				border-right: 1px solid #E6E9ED;}
			.confirm{
				flex: 1;
				text-align: center;
				color: #4886ff;
			}
		}
    }
	}
.choice-style {
	color: #CCCCCC;
}
/deep/.u-form-item__body{
	padding-left: 12rpx !important;
}
/deep/.u-form-item--left__content--required{
	left: 58px;
}
.star-style {
	/deep/.u-form-item--left__content--required{
		left: 40px;
	}
}
.starStyle {
	/deep/.u-form-item--left__content--required{
		left: 28px;
	}
}
.u-border-bottom:after{
	    width: 182.8%;
	    border-bottom: 1px solid #EDEDED;
		left: 30rpx;
		right: 30rpx;
}
.address-box{
	width: 94%;
	/deep/.uni-input-input{
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		display: inline-block;
	}
}
/deep/.u-picker-header {
	.u-picker__title {
		font-size: 34rpx;
		color: #333333;
		font-weight: bold;
	}
	.u-btn-picker{
		font-size: 30rpx;
		color: #999999 !important;
	}
	.u-btn-picker--primary{
		color: #306FFE !important;
	}
}
/deep/.u-picker-body{
	height: 170px;
}
.tip-box {
	background-color: #F4F5F6;
	padding-top: 42rpx;
	padding-bottom: 42rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	.tips {
		padding: 10rpx 20rpx;
		background-color: #F4F5F6;
		width: 690rpx;
		uni-text {
			font-size: 24rpx;
			color: #666666;
			font-family: SourceHanSansCN, SourceHanSansCN-Normal;
			line-height: 46rpx;
		}
		.reward {
			display: flex;
			justify-content: left;
			align-items: center;
			margin-top: 26rpx;
			uni-image {
				align-items: center;
				width: 28rpx;
				height: 26rpx;
				margin-right: 14rpx;
			}
			uni-text {
				color: #FF3B30;
			}
		}
	}
}
// 全民治理图片
.image-item {
	margin-top: 10rpx;
	width: 180rpx;
	height: 180rpx;
	margin-right: 10rpx;
	border-radius: 8rpx;
	uni-image {
		align-items: center;
		width: 180rpx;
		height: 180rpx;
		border-radius: 8rpx;
	}
}
// UI调整
/deep/.u-form-item--left {
	// margin-bottom: 30rpx !important;
	// margin-top: 50rpx;
	.u-form-item--left__content__label {
		font-size: 30rpx;
		color: #333333;
		font-family: SourceHanSansCN, SourceHanSansCN-Normal;
		height: 46rpx;
		line-height: 46rpx;
		font-weight: 500;
	}
}
.tip {
	display: none;
}
.tip-count {
	display: none;
}
.tipshow {
	display: inline-block;
}
// 现象图片list
.attach-box {
	// display: flex;
	.btnsa {
		display: inline-block;
		vertical-align: top;
		background-size: 100% 100%;
		border-radius: 8rpx;
	}
	.image-item {
		margin-top: 0px;
		display: inline-block;
		uni-image {
			margin-left: 0px;
			margin-right: 20rpx;
		}
	}
}
/deep/.uni-input-input {
	font-size: 30rpx;
	color: #333333;
	font-family: SourceHanSansCN, SourceHanSansCN-Normal;
}
/deep/.u-input__input {
	// min-height: auto !important;
}
/deep/.file-box {
	margin-top: 30rpx;
	margin-bottom: 30rpx;
	.u-form-item--right{
		padding-bottom: 0rpx;
	}
}
.commit{
		  padding-bottom: 12rpx;
		  button{
				width: 630rpx;
				height: 88rpx;
				line-height: 88rpx;
				background: #206CFE;
				border-radius: 44rpx;
				box-shadow: 0rpx 16rpx 32rpx 0rpx rgba(53,118,254,0.25);
				color: #FFFFFF;
				font-size: 30rpx;
				margin: 20rpx auto;
				margin-bottom: 0px;
				font-family: SourceHanSansCN, SourceHanSansCN-Normal;
		  }
	  }
.radius-style {
	border-top-left-radius: 20rpx;
	border-top-right-radius: 20rpx;
}
.radius-style-bottom {
	border-bottom-left-radius: 20rpx;
	border-bottom-right-radius: 20rpx;
}
.fromZhili {
	margin-top: 30rpx;
	border-top-left-radius: 20rpx;
	border-top-right-radius: 20rpx;
}
.fromZhili2 {
	margin-top: 30rpx;
}
/deep/.location {
	.uni-input-placeholder {
		text-align: left !important;
	}
}
/deep/.u-input__right-icon{
	height: 29px;
}
.align-right {
	/deep/.uni-input-input {
		text-align: right;
	}
}
.marginBottom {
	margin-bottom: 30rpx;
}
/deep/.hide-input {
	.uni-input-input {
		height: 0px;
	}
}
</style>
