<template>
	<view>
		<view class="container">
			<image src="../../../../../../static/enjoyLife/empty.png" mode=""></image>
			<p>暂无收支明细~</p>
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
	methods: {}
};
</script>

<style lang="less" scoped>
.container {
	font-size: 30rpx;
	text-align: center;
	color: #999999;
	line-height: 64rpx;
	image {
		width: 528rpx;
		height: 424rpx;
		margin-top: 220rpx;
	}
}
</style>
