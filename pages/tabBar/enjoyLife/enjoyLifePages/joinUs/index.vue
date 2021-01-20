<template>
	<view class="container">
		<u-navbar  :is-back="true" title="加入我们" :border-bottom="false" :background="bgColor" back-icon-color="#ffffff" title-color="#ffffff"></u-navbar>
		<view class="merchant">
			<view class="content" @click="goToMer('/pages/tabBar/enjoyLife/enjoyLifePages/joinUs/personMerchant')">
				<view>
				<uni-icons type="personadd" size="24" color="#000"></uni-icons>
				<span>个体商户</span>
				</view>
				<uni-icons type="arrowright" @click="goToMer('/pages/tabBar/enjoyLife/enjoyLifePages/joinUs/personMerchant')" size="24" color="#000"></uni-icons>
			</view>
			<view class="content" @click="goToMer('/pages/tabBar/enjoyLife/enjoyLifePages/joinUs/enterpriseMerchant')">
				<view>
					<uni-icons type="shop" size="24" color="#000"></uni-icons>
				<span>企业商户</span>
				</view>
				<uni-icons type="arrowright" @click="goToMer('/pages/tabBar/enjoyLife/enjoyLifePages/joinUs/enterpriseMerchant')" size="24" color="#000"></uni-icons>
			</view>
		</view>
		<view class="bottom" @click="goToMer('/pages/tabBar/enjoyLife/enjoyLifePages/joinUs/applicationRecord')">申请记录 >>></view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			bgColor:{ background: "rgba(28, 187, 180,0)" }
		};
	},
	mounted() {},
	methods: {
		back() {
			uni.navigateBack({
				delta: 1
			});
		},
		goToMer(path) {
			if (path) {
				uni.navigateTo({
					url: path
				});
			}
		}
	}
};
</script>

<style lang="less" scoped>
	.container{
		background: url(../../../../../static/enjoyLife/joinus.png) no-repeat;
		background-size: 100% 100%;
		height: 100vh;
	}
.content {
	background: rgba(255, 255, 255, 0.7);
	width: 90%;
	border-radius: 12rpx;
	height: 100rpx;
	margin: 24rpx auto;
	padding: 0 24rpx;
	line-height: 100rpx;
	display: flex;
	justify-content: space-between;
}
.content span {
	font-size: 32rpx;
	margin-left: 58rpx;
}
.merchant {
	margin-top: 200rpx;
}
.bottom {
	width: 100%;
	// font-size: 28rpx;
	color: #ffffff;
	position: fixed;
	bottom: 36rpx;
	text-align: center;
}
</style>
