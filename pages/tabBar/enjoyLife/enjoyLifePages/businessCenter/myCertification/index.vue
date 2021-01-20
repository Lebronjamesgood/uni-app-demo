<template>
	<view>
		<view class="content">
			<view class="subtitle">身份认证</view>
			<view class="content-item">
				<image src="../../../../../../static/enjoyLife/csertification-icon1.svg" mode=""></image>
				<span>个人商户</span>
				<p>去认证/认证成功</p>
			</view>
			<view class="content-item">
				<image src="../../../../../../static/enjoyLife/csertification-icon2.svg" mode=""></image>
				<span>企业商户</span>
				<p></p>
			</view>
			<view class="subtitle">
				行业证书
				<text>（选传）</text>
			</view>
			<view class="content-item">
				<image src="../../../../../../static/enjoyLife/csertification-icon3.svg" mode=""></image>
				<span>行业证书</span>
				<p>去认证</p>
			</view>
		</view>
	</view>
</template>

<script>
import subTitle from '@/components/sub-title/index.vue';
export default {
	components: {
		subTitle
	},
	data() {
		return {
			sub1: {
				url: '/',
				left: {
					name: '身份认证'
				},
				right: {
					hasIcon: false,
					name: ''
				}
			},
			sub2: {
				url: '/',
				left: {
					name: '行业证书'
				},
				right: {
					hasIcon: false,
					name: ''
				}
			},
			// 标题
			isBack: true,
			title: '我的认证'
		};
	},
	mounted() {},
	methods: {
		goPath(path) {
			uni.navigateTo({
				url: path
			});
		}
	}
};
</script>

<style lang="less" scoped>
page {
	background-color: #ffffff;
}
.content {
	padding: 0 30rpx;
}
.content p {
	font-size: 32rpx;
	font-weight: 500;
	color: #000000;
}
.content-item {
	background-color: #ffffff;
	border-radius: 8rpx;
	padding: 24rpx;
	display: flex;
	justify-content: space-between;
	margin: 24rpx 0;
}
.content-item image {
	width: 104rpx;
	height: 104rpx;
	margin-top: 30rpx;
	margin-bottom: 30rpx;
}
.content-item span {
	font-size: 46rpx;
	font-weight: 500;
	color: #6ed296;
	line-height: 134rpx;
}
.content-item p {
	color: #16a8e1;
	font-size: 24rpx;
	margin-top: 0;
	width: 220rpx;
	text-align: right;
}
.subtitle {
	font-size: 36rpx;
	color: #333333;
	font-family: SourceHanSansCN, SourceHanSansCN-Normal;
	position: relative;
	margin-top: 60rpx;
	margin-bottom: 40rpx;
	uni-text {
		font-size: 32rpx;
		color: #333333;
	}
}
/deep/.subtitle::before {
	background-color: #206cfe;
	display: block;
	position: absolute;
	left: -12px;
	content: '|';
	top: 4px;
	color: transparent;
	width: 3px;
	height: 36rpx;
}
.content-item {
	box-shadow: 0 0 20rpx rgba(41, 41, 41, 0.05);
	height: 138rpx;
	padding: 18rpx 28rpx;
	margin-bottom: 32rpx;
	border-radius: 20rpx;
	uni-image {
		width: 104rpx;
		height: 104rpx;
		margin: 0px;
		margin-right: 32rpx;
	}
	span {
		line-height: initial;
		height: 104rpx;
		line-height: 104rpx;
		font-size: 28rpx;
		color: #353535;
		font-family: SourceHanSansCN, SourceHanSansCN-Normal;
		font-weight: 500;
		flex: 1;
	}
	p {
		font-size: 24rpx;
		color: #206cfe;
		font-family: SourceHanSansCN, SourceHanSansCN-Normal;
		height: 104rpx;
		line-height: 104rpx;
	}
}
</style>
