<template>
	<view>
		<view class="container">
			<view class="pict"><image src="../../../../../../../static/enjoyLife/card.png" mode=""></image></view>
			<view class="content-top">
				<view class="item-info">
					<view class="title">钢琴培训一对一</view>
					<text class="tag1">免费预约</text>
					<text class="tag2">上门服务</text>
				</view>
				<view class="third" @click="show = true">价格透明，拒绝乱收，平台交易，全程保障。查看上门费收取/退款说明</view>
				<view class="bottom">
					保障
					<image src="../../../../../../../static/enjoyLife/icon-success.svg" mode=""></image>
					未服务随时退
					<image src="../../../../../../../static/enjoyLife/icon-success.svg" mode=""></image>
					明码标价
				</view>
				暂无评分
				<u-rate :count="count" v-model="value"></u-rate>
			</view>
			<view class="title_info">服务价目表</view>
			<view class="content">
				<text class="name">钢琴培训</text>
				<text class="price">
					￥100元
					<span>/次</span>
				</text>
			</view>
			<view class="title_info">服务详情</view>
			<view class="content">钢琴培训一对一，信誉保证，安全可靠。</view>
			<view class="title_info">温馨提示</view>
			<view class="notice">
				<p>1、下单前请充分理解订单金额、服务时间、服务项等具体细节，以免影响您的选择。</p>
				<p>2、平台服务由第三方提供，在线支付的订单是您唯一的售后维权。为了您的个人权益和信息安全，请务必在平台下单支付</p>
			</view>
		</view>
		<u-popup v-model="show" mode="bottom" length="43%" border-radius="20" :closeable="true">
			<view class="introPopup">
				<view class="title">服务说明</view>
				<view class="head-title">
					<!-- <image src="../../../../../../../static/enjoyLife/icon-min.svg" mode=""></image> -->
					未服务随时退
					<p>商家未接单，商家接单未开始服务前，均支持全额退款.用户可以通过在线或致电客服进行取消完成退款操作。</p>
				</view>
				<view class="head-title">
					<!-- <image src="../../../../../../../static/enjoyLife/icon-min.svg" mode=""></image> -->
					明码标价
					<p>商家承诺，服务项目按照一口价或服务价目表金额进行收费。如商家有乱收费行为，用户可拒绝支付并向平台投诉。</p>
				</view>
				<p>注：若商家未按上述标准进行服务，请联系客服：4001111111</p>
				<!-- <u-button type="primary" @click="show = false">知道了</u-button> -->
			</view>
		</u-popup>
	</view>
</template>

<script>
import data from '../../../../data.js';
export default {
	components: {},
	data() {
		return {
			count: 5,
			value: 0,
			show: false,
			detailInfo: []
		};
	},
	mounted() {},
	// onLoad: function(option) {
	// 	//option为object类型，会序列化上个页面传递的参数
	// 	if (option.id !== null) {
	// 		this.detailInfo = data.businessCenter.myServices.myservices[option.id];
	// 		console.log(this.detailInfo);
	// 	}
	// },
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
	background-color: #f5f6f7;
	height: 100%;
	overflow: auto;
}
.content-top {
	background: #ffffff;
	border-radius: 20px;
	margin: 0 24rpx;
	padding: 40rpx 30rpx;
	box-shadow: 0px 4px 30px 0px rgba(26, 33, 73, 0.09);
	font-size: 24rpx;
	color: #666666;
	line-height: 24rpx;
	position: relative;
	margin-top: -28rpx;
}
.content-top .item-info {
	display: flex;
}
.content-top .item-info .title {
	font-size: 36rpx;
	font-weight: 500;
	color: #333333;
	line-height: 54rpx;
	margin-right: 32rpx;
}
.content-top .item-info .tag1,
.content-top .item-info .tag2 {
	background: #206cfe;
	border-radius: 8rpx;
	font-size: 24rpx;
	padding: 8rpx 12rpx;
	font-weight: 400;
	color: #ffffff;
	line-height: 36rpx;
}
.content-top .tag2 {
	margin-left: 16rpx;
}

.content {
	display: flex;
	justify-content: space-between;
	background-color: #ffffff;
	padding: 30rpx;
	margin: 30rpx 24rpx;
	border-radius: 20rpx;
	box-shadow: 0rpx 0rpx 20rpx 0rpx rgba(41, 41, 41, 0.05);
	font-size: 28rpx;
	font-weight: 400;
	text-align: justify;
	color: #333333;
	line-height: 44rpx;
}
.content .name {
	font-size: 32rpx;
	font-weight: 500;
	color: #333333;
}
.content .price {
	font-size: 28rpx;
	color: #999999;
}
.content span {
	color: #ff0000;
}
.title_info {
	font-size: 40rpx;
	font-weight: 500;
	color: #333333;
	line-height: 60rpx;
	margin: 60rpx 30rpx 30rpx auto;
	border-left: 3px solid #206cfe;
	text-indent: 12px;
}
.bun {
	margin-top: 20rpx;
}
.bun span {
	border: 1rpx solid #ff9900;
	margin-right: 16rpx;
	padding: 4rpx 10rpx;
	color: #ff9900;
}
.bun span:first-child {
	color: #ffffff;
	background-color: #ff9900;
}
.third {
	font-size: 24rpx;
	color: #206cfe;
	line-height: 40rpx;
	margin-top: 20rpx;
}
.u-rate {
	margin: 12rpx 24rpx 0 20rpx;
}
.pict image {
	width: 750rpx;
	height: 460rpx;
}
.bottom {
	margin-top: 24rpx;
}
.bottom image {
	width: 22rpx;
	height: 22rpx;
	margin-left: 50rpx;
	margin-right: 8rpx;
	vertical-align: middle;
}

.notice {
	margin: 30rpx;
	background-color: #ffffff;
	padding: 20rpx 30rpx 40rpx 30rpx;
	font-size: 28rpx;
	font-weight: 400;
	text-align: justify;
	color: #898989;
	line-height: 44rpx;

	border-radius: 20rpx;
	box-shadow: 0px 0px 20rpx 0px rgba(41, 41, 41, 0.05);
}

.introPopup {
	padding: 40rpx 54rpx 20rpx 54rpx;
}
.introPopup p {
	margin: 24rpx 0;
	font-size: 28rpx;
	font-weight: 400;
	text-align: justify;
	color: #206cfe;
	line-height: 44rpx;
}
.title {
	text-align: center;
	font-size: 36rpx;
	font-weight: 500;
}
.head-title {
	font-size: 28rpx;
	font-weight: 500;
	color: #000000;
	line-height: 42rpx;
	margin-top: 45rpx;
}
.head-title image {
	width: 32rpx;
	height: 32rpx;
	vertical-align: middle;
	margin-right: 10rpx;
}
.head-title p {
	font-weight: 400;
	color: #898989;
	line-height: 44rpx;
	margin-top: 16rpx;
}
</style>
