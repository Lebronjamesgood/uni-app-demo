<template>
	<view class="expose-container">
		<view class="main">
			<u-form class="container"  labelWidth="150" :model="form" ref="uForm" :errorType="errorType">
				<u-form-item label="服务类型" prop="type" class="form-item radius-style" required>
					<u-input v-model="form.type" placeholder="请输入服务类型"/>
				</u-form-item>
				<u-form-item label="公司名称" class="form-item"  prop="gsname" required>
					<u-input v-model="form.gsname" placeholder="请输入公司名称"/>
				</u-form-item>
				<u-form-item label="法人姓名" class="form-item"  prop="name" required>
					<u-input v-model="form.name" placeholder="请输入法人姓名"/>
				</u-form-item>
				<u-form-item label="联系电话" prop="phone" class="form-item"  required>
					<u-input v-model="form.phone" name="input" placeholder="请输入联系电话" maxlength="50" />
				</u-form-item>
				<u-form-item label="通信地址" prop="lonLat" class="form-item radius-style-bottom location" label-position="top">
					<view class="line">
						<u-input v-model="form.lonLat" name="input" placeholder="请选择通信地址" class="address-box" @click="show = true" disabled/>
						<image src="../../../../../static/serviceCloud/location.svg" mode="" class="location-style" @tap="show = true"></image>
					</view>
				</u-form-item>
				<u-form-item label="身份证"  class="form-item star-style fromZhili2 radius-style" prop="intro">
					<u-input v-model="form.intro" />
				</u-form-item>
				<view class="addimg radius-style-bottom">
					<span>证件照:</span>
					<u-upload :action="action" :file-list="fileList" height="120" width="120"></u-upload>
				</view>
				<view class="addimg radius-style radius-style-bottom fromZhili2">
					<span>统一社会信用代码证:</span>
					<u-upload :action="action" :file-list="fileList" height="120" width="120"></u-upload>
				</view>
				<!-- <view class="address">
					<u-form-item label="通信地址:" >
					<u-picker mode="region" v-model="show" :area-code="['13', '1303', '130304']"></u-picker>
				</u-form-item>
					<uni-icons type="arrowright" @click="show = true" ></uni-icons>
				</view> -->
			</u-form>
			<u-picker mode="region" v-model="show" :area-code="['13', '1303', '130304']" @confirm="confirmDes"></u-picker>
			<view class="commit"><button type="primary" @click="submit">确认</button></view>
		</view>
		<u-toast ref="uToast"></u-toast>
	</view>
</template>

<script>
export default {
	components: {},
	data() {
		const checkIdCard = (rule, value, callback) => {
		  if (!rule.required) {
		    if (value === '') {
		      return callback()
		    }
		  }
		  const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
		  if (!reg.test(value)) {
		    return callback(new Error('请输入正确的身份证'))
		  } else {
		    callback()
		  }
		}
		return {
			form: {
				type: '',
				title: '',
				lonLat: '',
				gsname: '',
				name: '',
				phone: '',
				intro: ''
			},
			rules: {
				type: [
					{ required: true, message: '请输入服务类型', trigger: ['change', 'blur']}
				],
				gsname: [
					{ required: true, message: '请输入企业名称', trigger: ['change', 'blur']},
					{ max: 50, message: '不能多于50个字', trigger: ['change', 'blur']}
				],
				name: [
					{ required: true, message: '请输入法人姓名', trigger: ['change', 'blur']},
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
				lonLat:[
					{ required: false, message: '请选择通信地址', trigger: ['change']},
				],
				intro: [
					{ required: false, validator: checkIdCard, trigger: ['change', 'blur'] }
				]
				
			},
			action: 'http://www.example.com/upload',
			fileList: [
				{
					url: 'http://pics.sc.chinaz.com/files/pic/pic9/201912/hpic1886.jpg'
				}
			],
			show: false,
			errorType: ['toast']
		};
	},
	onReady() {
		this.$refs.uForm.setRules(this.rules)
	},
	mounted() {},
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
		confirmDes(e) {
			this.form.lonLat = e.province.label + '-' + e.city.label+ '-' + e.area.label
		},
		submit() {
			const that = this
			that.$refs.uForm.validate(val => {
				if (val) {
					// that.form.attachment = that.form.attachment.toString()
					// delete this.form.attaches
					const params = {
						type: that.form.type,
						title: that.form.title,
						lonLat: that.lonLat,
						gsname: that.form.gsname,
						name: that.form.name,
						phone: that.form.phone,
						intro: that.form.intro,
					}
					console.log('提交的信息', params)
					that.$refs.uToast.show({
						title:'提交...',
						type: 'success'
					});
					// that.resetFrom()
				} else {
					console.log('验证失败');
				}
								
			})
		},
		resetFrom() {
			this.form = {
				type: '',
				title: '',
				lonLat: '',
				gsname: '',
				name: '',
				phone: '',
				intro: ''
			}	
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
	  height: 100vh;
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
	// margin-top: 24rpx;
	padding: 10rpx 30rpx 20rpx 30rpx;
	background-color: #FFFFFF;
}
.btnsa{
	// width: 156rpx;
	// height: 156rpx;
	width: 180rpx;
	height: 180rpx;
	background: url("../../../../../static/serviceCloud/upload-icon.svg") center center no-repeat;
	color: transparent;
}
.zhili {
	background: url("../../../../../static/serviceCloud/zhili.svg") center center no-repeat;
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
	text-indent: 24rpx;
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
		  padding-top: 12rpx;
		  margin-top: 20rpx;
		  position: absolute;
		  bottom: 10rpx;
		  left: 30rpx;
		  right: 30rpx;
		  button{
				width: 630rpx;
				height: 88rpx;
				line-height: 88rpx;
				background: #206CFE;
				border-radius: 44rpx;
				// box-shadow: 0rpx 16rpx 32rpx 0rpx rgba(53,118,254,0.25);
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
