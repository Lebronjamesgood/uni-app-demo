<template>
	<view>
		<view class="price">
			<text>支付金额：</text>
			<text class="count">￥0.02</text>
		</view>
		<view class="method">
			<view class="title">
				<text >请选择支付方式</text>
			</view>
			<u-cell-group>
				<u-cell-item title="微信支付"><u-icon size="40" slot="icon" color="#19be6b" custom-prefix="custom-icon" name="weixinzhifu1"></u-icon></u-cell-item>
				<u-cell-item title="快捷支付"><u-icon slot="icon" size="40" custom-prefix="custom-icon" name="kuaijiezhifuicon"></u-icon></u-cell-item>
			</u-cell-group>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	}
};
</script>

<style lang="less">
.price {
	background-color: #ffffff;
	padding: 40rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	.count {
		color: #00aaff;
		font-size: 40rpx;
		font-weight: bold;
	}
}
.method {
	margin-top: 16rpx;
	.title {
		padding: 26rpx 32rpx;
	}
	background-color: #ffffff;
}
/deep/ .u-cell_title{
	margin-left: 20rpx;
}
</style>
