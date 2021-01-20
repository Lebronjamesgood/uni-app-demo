<template>
	<view>
		<view>
			<u-search
				:show-action="true"
				action-text="搜索"
				:animation="true"
				height="64"
				bg-color="#F6F7F9"
				search-icon-color="#C0C0C0"
				placeholder-color="#C0C0C0"
				margin="30rpx"
			></u-search>
			<view class="title">热门问题</view>
			<view class="problem-list">
				<view class="list-item" v-for="(item, index) in datalist" :key="index">
					<p>{{ item.problem }}</p>
					<uni-icons type="arrowright" color="#C3CBCF" @click="goPath(index)"></uni-icons>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import data from '../../../data.js';
export default {
	components: {},
	data() {
		return {
			datalist: []
		};
	},
	mounted() {
		this.datalist = data.businessCenter.hotIssues;
	},
	methods: {
		goPath(index) {
			uni.navigateTo({
				url: '/pages/tabBar/enjoyLife/enjoyLifePages/businessCenter/commonProblem/problemDetail?index=' + index
			});
		}
	}
};
</script>

<style lang="less" scoped>
.title {
	font-size: 36rpx;
	font-weight: 500;
	text-align: left;
	color: #333333;
	line-height: 54rpx;
	border-left: 6rpx solid #206cfe;
	text-indent: 24rpx;
	margin-top: 30rpx;
}
.problem-list {
	margin: 40rpx 30rpx;
	padding: 0 30rpx;
	background: #ffffff;
	border-radius: 20rpx;
	box-shadow: 0rpx 0rpx 20rpx 0rpx rgba(41, 41, 41, 0.05);
}
.list-item {
	display: flex;
	justify-content: space-between;
	border-bottom: 1rpx solid #ededed;
	padding: 30rpx 0;
	font-size: 32rpx;
	color: #333333;
	line-height: 48rpx;
}
.list-item:last-child{
  border: none;
}
.list-item p {
	width: 90%;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
</style>
