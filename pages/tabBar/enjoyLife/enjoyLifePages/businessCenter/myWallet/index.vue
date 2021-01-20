<template>
	<view>
		<view class="content">
			<view class="top">
				<view class="general-term">
					本月收入(元)
					<image src="../../../../../../static/enjoyLife/eyes.svg"></image>
				</view>
				<view class="contact">
					100.00
					<span>(0.00元可提现)</span>
				</view>
				<view class="num">
					<view class="line">
						2000.00
						<p>今日交易额</p>
					</view>
					<view>
						1
						<p>今日订单</p>
					</view>
				</view>
			</view>
			<view class="content-num">
				<view class="content-item">
					<view>
						<image src="../../../../../../static/enjoyLife/wallet1.svg" mode=""></image>
						<span>我的收支明细</span>
					</view>
					<uni-icons type="arrowright" color="#C3CBCF" @tap="goPath('/pages/tabBar/enjoyLife/enjoyLifePages/businessCenter/myWallet/reExpDetail')"></uni-icons>
				</view>
				<view class="content-item">
					<view>
						<image src="../../../../../../static/enjoyLife/wallet2.svg" mode=""></image>
						<span>我的提现记录</span>
					</view>
					<uni-icons type="arrowright" color="#C3CBCF" @tap="goPath('/pages/tabBar/enjoyLife/enjoyLifePages/businessCenter/myWallet/withDrawal')"></uni-icons>
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
			uni.navigateTo({
				url: path
			});
		}
	}
};
</script>

<style lang="less" scoped>
.top {
	width: 100%;
	height: 364rpx;
	padding: 12rpx 24rpx;
	background: url(../../../../../../static/enjoyLife/center-top.png) no-repeat;
	background-size: 100% 100%;
	color: #314268;
}
.general-term {
	font-size: 26rpx;
	text-align: center;
	color: #475b88;
	margin-top: 44rpx;
	image {
		width: 32rpx;
		height: 32rpx;
		margin-left: 18rpx;
		vertical-align: middle;
	}
}
.contact {
	font-size: 36rpx;
	text-align: center;
	color: #314268;
	font-weight: 700;
	line-height: 80rpx;
	span {
		opacity: 0.8;
		font-size: 24rpx;
		font-weight: 400;
		text-align: center;
		color: #475b88;
		line-height: 36rpx;
		margin-left: 8rpx;
	}
}
.num {
	display: flex;
	font-size: 32rpx;
	text-align: center;
	margin-top: 30rpx;
	font-weight: 500;
}
.line {
	border-right: 1rpx solid #bac8e8;
}
.num view {
	width: 50%;
}
.num p {
	margin: 10rpx auto;
	font-size: 26rpx;
	font-weight: 400;
}
.content-num {
	position: absolute;
	left: 30rpx;
	right: 30rpx;
	top: 336rpx;
}
.content-item {
	color: #353535;
	margin-bottom: 30rpx;
	background-color: #ffffff;
	padding: 30rpx;
	display: flex;
	justify-content: space-between;
	border-radius: 16rpx;
	box-shadow: 0rpx 0rpx 20rpx 0rpx rgba(41, 41, 41, 0.05);
	line-height: 42rpx;
}
.content-item image {
	width: 48rpx;
	height: 48rpx;
	vertical-align: middle;
	margin-right: 22rpx;
}
.uni-icons {
	line-height: 56rpx;
}
</style>
