<template>
	<view class="container">
		<view class="login-text">注册账户</view>
		<view class="content">
			<u-form :model="form" ref="uForm" :rules="rules">
				<u-form-item label="" prop="phoneNumber">
					<text class="mobile-pre">+86</text>
					<u-icon name="arrow-down" color="#ffffff" size="20" class="mobile-icon"></u-icon>
					<u-input v-model="form.phoneNumber" placeholder="请输入手机号" class="form-inp" />
				</u-form-item>
				<u-form-item label="" prop="name"><u-input v-model="form.name" placeholder="请输入真实姓名" class="form-inp" /></u-form-item>
				<u-form-item label="" prop="idCard"><u-input v-model="form.idCard" placeholder="请输入身份证号码" class="form-inp" /></u-form-item>
				<u-form-item label="" prop="securityCode" v-if="!isPassword">
					<u-input v-model="form.securityCode" placeholder="请输入验证码" />
					<u-verification-code :seconds="seconds" ref="uCode" @change="codeChange"></u-verification-code>
					<u-button @tap="getCode" class="form-code">{{ tips }}</u-button>
				</u-form-item>
				<!-- <u-form-item label="" prop="password" v-if="isPassword"><u-input v-model="form.password" placeholder="请输入密码" /></u-form-item> -->
			</u-form>
		</view>

		<button class="btn-style regist-text" v-if=" form.phoneNumber && form.name && form.idCard && form.securityCode" @click="regist">注册</button>
		<button
			v-else
			class="btn-style"
			style="background: #AFB7D1;"
		>
			注册
		</button>
		<text @click="routeTo('/pages/login/index')" class="btn-login">登录</text>
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
		const validateID = (rule, value, callback) => {
			const regID = /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
			if (regID.test(value)) {
				// 符合规则
				return callback();
			} else {
				callback(new Error('请输入合法的身份证号码'));
			}
		};

		return {
			isPassword: false,
			tips: '',
			seconds: 60,
			form: {
				phoneNumber: '',
				name: '',
				idCard: '',
				securityCode: ''
			},
			rules: {
				phoneNumber: [
					{
						required: true,
						message: '请输入手机号',
						validator: validateTelephone,
						// 可以单个或者同时写两个触发验证方式
						trigger: ['change', 'blur']
					}
				],
				name: [{ required: true, message: '请输入姓名', trigger: 'blur' }, { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }],
				idCard: [
					{
						required: true,
						message: '请输入身份证号',
						validator: validateID,
						// 可以单个或者同时写两个触发验证方式
						trigger: ['change', 'blur']
					}
				],
				securityCode: [
					{
						required: true,
						message: '请输入验证码',
						trigger: 'change'
					}
				]
			}
		};
	},
	onReady() {
		this.$refs.uForm.setRules(this.rules);
	},
	methods: {
		// 登录
		regist() {
	
			this.$refs['uForm'].validate(valid => {
				if (valid) {
					this.$u.toast('注册成功,请登录');
					uni.navigateTo({
						url: '/pages/login/index'
					});
				} else {
					console.log('error submit!!');
					return false;
				}
			});
		},
		// 获取验证码
		getCode() {
			if(this.form.phoneNumber===""){
				this.$u.toast('请填写手机号');
				return
			}
			if (this.$refs.uCode.canGetCode) {
				// // 模拟向后端请求验证码
				// uni.showLoading({
				// 	title: '正在获取验证码'
				// });
				setTimeout(() => {
					uni.hideLoading();
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
		}
	}
};
</script>

<style lang="scss">
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
		letter-spacing: 1rpx;
		padding-top: 250rpx;
	}
	.content {
		margin-top: 80rpx;
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
		}
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
		border-radius: 24px;
		background: #bbbdd1;
	}
	.regist-text {
		font-size: 36rpx;
		font-weight: 500;
		// text-align: left;
		color: #ffffff;
		background: #206cfe;
		// line-height: 54rpx;
		letter-spacing: 1rpx;
		opacity: 1;
	}
	
	.btn-login {
		display: flex;
		justify-content: center;
		padding-top: 46rpx;
		font-size: 30rpx;
		text-align: left;
		color: #ffffff;
		line-height: 46rpx;
	}

	.type-userPass {
		font-size: 28rpx;
		color: #999999;
		line-height: 40rpx;
		display: flex;
		justify-content: flex-end;
		padding-top: 20rpx;
	}

	.regist {
		color: #306ffe;
		font-size: 28rpx;
		text-align: center;
		margin-top: 40rpx;
	}

	button {
		// width 630rpx
		height: 88rpx;
		background: linear-gradient(90deg, #5ea8ff, #306ffe);
		border-radius: 52rpx;
		box-shadow: 0rpx 16rpx 32rpx 0rpx rgba(53, 118, 254, 0.25);
		color: #ffffff;
		font-size: 32rpx;
	}

	.protocal {
		font-size: 24rpx;
		color: #333333;
		display: flex;
		align-items: center;
		left: 18%;
		margin-top: 40px;
		.check-radio {
			transform: scale(0.7);
		}
	}
	.toLogin {
		// position: fixed;
		// bottom: 40rpx;
		// right: 40rpx;

		&:hover {
			color: #6aa9de;
		}
	}
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
}
</style>
