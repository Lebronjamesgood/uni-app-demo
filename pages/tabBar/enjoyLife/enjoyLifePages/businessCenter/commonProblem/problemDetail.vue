<template>
	<view class="problem-item">
		<view class="content">
			<view class="title">{{ probleMDetail.problem }}</view>
			<p>{{ probleMDetail.content }}</p>
		</view>
	</view>
</template>

<script>
import data from '../../../data.js';
export default {
	components: {},
	data() {
		return {
			probleMDetail: {}
		};
	},
	onLoad: function(option) {
		const selectindex = parseInt(option.index);
		this.probleMDetail = data.businessCenter.hotIssues[selectindex];
	},
	mounted() {},
	methods: {}
};
</script>

<style lang="less" scoped>
.problem-item {
	background-color: #f5f6f7;
	height: 100%;
	overflow: auto;
}
.content {
	background-color: #ffffff;
	padding: 30rpx;
	margin: 30rpx;
	background: #ffffff;
	border-radius: 20rpx;
	box-shadow: 0rpx 0rpx 12rpx 0rpx rgba(60, 61, 68, 0.09);
}
.title {
	font-size: 36rpx;
	font-weight: 500;
	color: #333333;
	line-height: 54rpx;
	margin-bottom: 48rpx;
}
.content p {
	text-align: justify;
	color: #2f2f2f;
	line-height: 56rpx;
	font-size: 32rpx;
	text-indent: 64rpx;
}
</style>
