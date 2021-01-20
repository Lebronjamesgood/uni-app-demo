<template>
	<view class="message-detail">
		<u-navbar :is-back="true" title-size="36" title="详情" :title-color="backColor" :back-icon-color="backColor"></u-navbar>
		<view class=" detail-data">
			<view class="content">{{ detailData.content }}</view>
			<view class="time">{{ detailData.updateTime }}</view>
		</view>
	</view>
</template>

<script>
import data from './data.js';
export default {
	data() {
		return {
			detailData: {},
			backColor: '#333333',
		};
	},
	methods: {
		onLoad: function(option) {
			const id = parseInt(option.id);
			const tabValue = parseInt(option.tab);
			if (tabValue != null && id != null) {
				this.getDetailInfo(tabValue, id);
			}
		},
		getDetailInfo(value1, value2) {
			if (value1 === 1) {
				this.detailData = data.index_data.replyList[value2];
			}
			if (value1 === 2) {
				this.detailData = data.index_data.commentList[value2];
			}
			if (value1 === 3) {
				this.detailData = data.index_data.servicelist[value2];
			}
		},
		
	}
};
</script>

<style lang="scss" scoped>
.message-detail {
	.detail-data {
		background-color: #ffffff;
		margin: 32rpx 30rpx;
		padding: 28rpx 30rpx;
		padding-bottom: 24px;
		border-radius: 20rpx;
		box-shadow: 0px 0px 12px 0px rgba(60, 61, 68, 0.09);
		.content {
			font-size: 32rpx;
			font-weight: 400;
			text-align: justify;
			color: #2f2f2f;
			line-height: 56rpx;
		}
		.time {
			display: flex;
			justify-content: flex-end;
			font-size: 28rpx;
			font-weight: 400;
			color: #909090;
			line-height: 42rpx;
			padding-top: 30rpx;
		}
	}
}
/deep/.uni-navbar__header-btns-left {
	width: 60rpx;
}
/deep/.uni-page-body {
	background: #f5f6f7;
}
</style>
