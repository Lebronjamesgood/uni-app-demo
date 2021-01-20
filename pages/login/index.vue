<template>
	<view class="container">
		<view class="login-text">你好，欢迎登录！</view>
		<view class="content">
			<u-form :model="form" ref="uForm" :rules="rules">
				<u-form-item label="" prop="account">
					<text class="mobile-pre">+86</text>
					<u-icon name="arrow-down" color="#ffffff" size="20" class="mobile-icon"></u-icon>
					<u-input v-model="form.account" placeholder="请输入手机号" class="form-inp" />
				</u-form-item>
				<u-form-item label="" prop="securityCode" v-if="!isPassword">
					<u-input v-model="form.securityCode" placeholder="请输入验证码" />
					<u-verification-code :seconds="seconds" :change-text="changeText" ref="uCode" @change="codeChange"></u-verification-code>
					<u-button @tap="getCode" class="form-code">{{ tips }}</u-button>
				</u-form-item>
				<u-form-item label="" prop="password" v-if="isPassword">
					<u-input v-model="form.password" placeholder="请输入密码" :type="type" />
					<view class="eye-check" @click="showPassword">
						<image src="../../static/login/eye.svg" v-if="isShowPassword"></image>
						<image src="../../static/login/eye-secret.svg" v-if="!isShowPassword"></image>
					</view>
				</u-form-item>
			</u-form>
		</view>
		<view class="btn">
			<text @click="changeIsPassword" class="loginBtn">{{ isPassword ? '账户登录' : '密码登录' }}</text>
			<text @click="routeTo('/pages/regist/index')" class="registBtn">注册账户</text>
		</view>
		<button class="btn-style" v-if="ischecked && form.account && form.securityCode" @click="login">登录</button>
		<button
			v-else
			class="btn-style"
			style="background: #AFB7D1;
		"
		>
			登录
		</button>
		<view class="protocal">
			<view class="radio-check" @click="ischeckedAgree">
				<image src="../../static/login/radio-uncheck.svg" v-if="!ischecked"></image>
				<image src="../../static/login/radio-checked.svg" v-if="ischecked"></image>
			</view>
			<text>已阅读并同意《用户隐私协议》</text>
		</view>
	</view>
</template>
<script>
export default {
	data() {
		const validateTelephone = (rule, value, callback) => {
			const regPhone = /^1[34578]\d{9}$/;
			if (regPhone.test(value)) {
				// 符合规则
				return callback();
			} else {
				callback(new Error('请输入正确格式的手机号码'));
			}
		};
		const validatePass = (rule, value, callback) => {
			const regPass = /^[a-zA-Z]\w{8,18}$/;
			if (regPass.test(value)) {
				// 符合规则
				return callback();
			} else {
				callback(new Error('密码以字母开头 长度在8~18之间 只能包含字母、数字和下划线'));
			}
		};
		return {
			isPassword: false,
			ischecked: false,
			iseye: false,
			isShowPassword: true,
			type: '',
			passwordIcon: true,
			tips: '',
			seconds: 60,
			changeText: 'X秒',
			form: {
				account: '',
				securityCode: '',
				password: ''
			},
			rules: {
				account: [
					{
						required: true,
						message: '请输入手机号',
						validator: validateTelephone,
						// 可以单个或者同时写两个触发验证方式
						trigger: ['change', 'blur']
					}
				],
				password: [
					{
						required: true,
						message: '请输入密码',
						validator: validatePass,
						trigger: 'change'
					}
				]
			}
		};
	},
	onLoad(option) {},
	onReady() {
		this.$refs.uForm.setRules(this.rules);
	},
	methods: {
		// 登录
		login() {
			this.$refs['uForm'].validate(valid => {
				if (valid) {
					uni.switchTab({
						url: '/pages/tabBar/home/index'
					});
				} else {
					console.log('error submit!!');
					return false;
				}
			});
		},
		// 获取验证码
		getCode() {
			if(this.form.account===""){
				this.$u.toast('请填写手机号');
				return
			}
			if (this.$refs.uCode.canGetCode) {
				// 模拟向后端请求验证码
				// uni.showLoading({
				// 	title: '正在获取验证码'
				// });
				setTimeout(() => {
					// uni.hideLoading();
					// 这里此提示会被this.start()方法中的提示覆盖
					this.$u.toast('验证码已发送');
					// 通知验证码组件内部开始倒计时
					this.$refs.uCode.start();
				}, 2000);
			} else {
				this.$u.toast('倒计时结束后再发送');
			}
		},
		// 重新获取验证码
		codeChange(text) {
			this.tips = text;
		},
		// 跳转到指定页面
		routeTo(url) {
			if (url) {
				uni.navigateTo({
					url: url
				});
			}
		},
		// 密码的显示与隐藏
		showPassword() {
			this.isShowPassword = !this.isShowPassword;
			if (!this.isShowPassword) {
				this.type = 'password';
			} else {
				this.type = '';
			}
		},
		// 密码登录与验证码登录
		changeIsPassword() {
			this.isPassword = !this.isPassword;
		},
		// 协议的同意与取消
		ischeckedAgree() {
			this.ischecked = !this.ischecked;
		}
	}
};
</script>

<style lang="scss" scoped>
.container {
	background-image: url(/static/login/background.png);
	width: 100%;
	height: 100%;
	position: relative;
	background-size: 100% 100%;
	padding: 0 60rpx;
	.login-text {
		font-size: 48rpx;
		font-weight: 700;
		text-align: left;
		color: #ffffff;
		line-height: 72rpx;
		padding-top: 250rpx;
		letter-spacing: 2rpx;
	}

	.content {
		margin-top: 32rpx;
		.mobile-pre {
			font-size: 30rpx;

			font-weight: Normal;
			text-align: left;
			color: #ffffff;
			line-height: 46rpx;
			letter-spacing: 1rpx;
		}
		.mobile-icon {
			padding: 0 10rpx;
			opacity: 0.5;
		}

		.form-inp {
			min-height: 40px;
		}
		.form-code {
			background: none;
			font-size: 30rpx;
			text-align: right;
			color: #ffffff;
			line-height: 46rpx;
			letter-spacing: 1rpx;
			box-shadow: none;
			padding: 0;
		}
		.eye-check {
			display: flex;
			padding-right: 10rpx;
			uni-image {
				width: 40rpx;
				height: 40rpx;
			}
		}
	}
	.btn {
		padding-top: 47rpx;
		display: flex;
		justify-content: space-between;
		font-size: 30rpx;
		font-weight: 400;
		text-align: left;
		color: #ffffff;
		line-height: 46rpx;
		letter-spacing: 1rpx;
	}

	.type-line {
		font-size: 28rpx;
		color: #999999;
		line-height: 40rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 22rpx;
		.password-style {
			display: flex;
			align-items: center;
		}
	}

	.box-select {
		transform: scale(0.7);
	}

	.btn-style {
		margin-top: 80rpx;
	}

	// .type-userPass {
	// 	font-size: 28rpx;
	// 	color: #999999;
	// 	line-height: 40rpx;
	// 	display: flex;
	// 	justify-content: flex-end;
	// 	padding-top: 20rpx;
	// }

	// .regist {
	// 	color: #306ffe;
	// 	font-size: 28rpx;
	// 	text-align: center;
	// 	margin-top: 40rpx;
	// }

	button {
		height: 88rpx;
		background: linear-gradient(90deg, #5ea8ff, #306ffe);
		border-radius: 52rpx;
		box-shadow: 0rpx 16rp；x 32rpx 0rpx rgba(53, 118, 254, 0.25);
		color: #ffffff;
		font-size: 32rpx;
	}
	// width 630rpx

	.protocal {
		font-size: 26rpx;
		text-align: left;
		color: #ffffff;
		line-height: 32px;
		display: flex;
		align-items: center;
		margin-top: 34rpx;
		left: 18%;
		.radio-check {
			display: flex;
			padding-right: 10rpx;
			uni-image {
				width: 30rpx;
				height: 30rpx;
			}
		}
		.check-radio {
			transform: scale(0.7);
		}
	}
}
</style>
<style scoped>
/deep/.u-hairline-border:after {
	border: none;
}
/deep/.u-input__input {
	color: #ffffff;
	font-size: 30rpx;

	text-align: left;
	color: #ffffff;
	line-height: 46rpx;
	letter-spacing: 1rpx;
}
/deep/uni-checkbox .uni-checkbox-input {
	border-radius: 50%;
}
/deep/.u-default-hover {
	color: '';
	border-colore: none !important;
	background-color: none !important;
}
</style>
