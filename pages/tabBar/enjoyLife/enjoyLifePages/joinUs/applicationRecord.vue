<template>
	<view class="contanier">
		<view class="content">
			<view class="content-item" v-for="(item, index) in list" :key="index">
				<view class="left">
					<p>申请时间：{{ item.time }}</p>
					<p>申请类型：{{ item.type }}</p>
					<p>审批时间：{{ item.approval }}</p>
				</view>
				<view class="right">
					<image src="../../../../../static/enjoyLife/pass.svg" v-if="item.status === 1"></image>
					<image src="../../../../../static/enjoyLife/reject.svg" v-if="item.status === 0"></image>
					<p>详情 >></p>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import data from '../../data.js';
export default {
	data() {
		return {
			list: []
		};
	},
	mounted() {
		this.list = data.joinUs;
	},
	methods: {
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
.contanier {
	background-color: #f5f6f7;
}
.content {
	padding: 30rpx;
}
.content-item {
	background-color: #ffffff;
	border-radius: 12rpx;
	padding: 12rpx 24rpx;
	display: flex;
	justify-content: space-between;
	margin-bottom: 30rpx;
}
.content-item p {
	line-height: 64rpx;
}
.right image {
	width: 100rpx;
	height: 130rpx;
}
.right p {
	color: #2cb6d5;
}
</style>
