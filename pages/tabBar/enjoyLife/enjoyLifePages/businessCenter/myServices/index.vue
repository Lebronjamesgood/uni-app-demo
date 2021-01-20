<template>
	<view>
		<view class="container">
			<view class="content">
				<view class="content-item" @click="goPath('/pages/tabBar/enjoyLife/enjoyLifePages/businessCenter/myServices/orderReceiveServices/index')">
					<image src="../../../../../../static/enjoyLife/order-ser.svg" mode=""></image>
					<view class="words">
						<p>接单服务</p>
						<span>一键登录，公司派单</span>
					</view>
				</view>
			</view>
			<view class="content">
				<view class="content-item" @click="goPath('/pages/tabBar/enjoyLife/enjoyLifePages/businessCenter/myServices/personServices/index')">
					<image src="../../../../../../static/enjoyLife/person-ser.svg" mode=""></image>
					<view class="words">
						<p>个人服务</p>
						<span>一键登录，公司派单</span>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	components: {},
	data() {
		return {};
	},
	mounted() {},
	methods: {
		goPath(path) {
			if (path) {
				uni.navigateTo({
					url: path
				});
			} else {
				uni.showToast({
					title: '暂未开发,敬请期待……',
					icon: 'none'
				});
			}
		}
	}
};
</script>

<style lang="less" scoped>
.container {
	padding: 32rpx 30rpx;
}
.content {
	margin-bottom: 32rpx;
	padding: 18rpx 28rpx;
	background: #ffffff;
	border-radius: 16rpx;
	box-shadow: 0rpx 0rpx 20rpx 0rpx rgba(41, 41, 41, 0.05);
	.uni-icons {
		line-height: 104rpx;
	}
}
.content-item {
	display: flex;
	image {
		width: 104rpx;
		height: 104rpx;
		vertical-align: middle;
	}
}
.words {
	margin-left: 32rpx;
}
.content p {
	font-size: 28rpx;
	font-weight: 500;
	color: #353535;
	line-height: 42rpx;
	margin-bottom: 16rpx;
}
.content span {
	font-size: 24rpx;
	color: #676767;
	line-height: 36rpx;
}
</style>
