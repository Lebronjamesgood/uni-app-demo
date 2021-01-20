<template>
	<view class="message-center">
		<u-navbar :is-back="true" title-size="36" title="我的消息" :title-color="backColor" :back-icon-color="backColor"></u-navbar>
		<view class="container">
			<v-tabs
				v-model="current"
				auto
				:tabs="tabObjectList"
				@change="changeTab"
				lineColor="#206CFE"
				activeColor="#206CFE"
				color="#333333"
				height="48px"
				fontSize="30rpx"
				activeFontSize="30rpx"
				:lineScale="0.2"
			></v-tabs>
			<view class="infoList">
				<view class="item " v-for="(item, index) in infoList" :key="index" @click="detail(item.index)">
					<view class="item-title" :class="item.isActive ? 'Unread' : 'read'">{{ item.title }}</view>
					<text class="item-upd">{{ item.updateTime }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import data from './data.js';
import vTabs from '@/components/v-tabs/v-tabs.vue';
export default {
	components: {
		vTabs
	},
	data() {
		return {
			index: 0,
			tabObjectList: ['我的回复', '我的评论', '服务通知'],
			current: 0,
			backColor: '#333333',
			infoList: data.index_data.replyList,
			tabValue: 1
		};
	},

	methods: {
		changeTab(index) {
			if (index === 0) {
				this.infoList = data.index_data.replyList;
			}
			if (index === 1) {
				this.infoList = data.index_data.commentList;
			}
			if (index === 2) {
				this.infoList = data.index_data.servicelist;
			}
			this.current = index;
		},
		detail(index) {
			uni.navigateTo({
				url: '/pages/message/detail?id=' + index + '&tab=' + this.tabValue
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.message-center {
	.infoList {
		background-color: #ffffff;
		margin: 0 30rpx;
		padding-bottom: 30rpx;
		border-radius: 20rpx;
		.item {
			position: relative;
			border-bottom: 1rpx solid #f2f2f2;
			padding: 20rpx 0 20rpx 0;
			.item-title {
				position: relative;
				font-size: 32rpx;
				font-weight: 500;
				color: #8c8c8c;
				line-height: 48rpx;
				padding-bottom: 10rpx;
			}
			.Unread {
				color: #000000;
				padding-left: 24rpx;
			}
			.Unread::before {
				position: absolute;
				top: 50%;
				left: 0;
				content: '';
				width: 12rpx;
				height: 12rpx;
				margin-top: -6rpx;
				border-radius: 50%;
				background-color: red;
			}

			.item-upd {
				font-size: 28rpx;
				font-weight: 400;
				color: #909090;
				line-height: 42rpx;
			}
		}
	}
}

/deep/.uni-tab {
	margin-top: 28rpx;
}
/deep/.uni-navbar__header-btns-left {
	width: 70rpx;
}
/deep/.uni-navbar__header-container {
	justify-content: center;
}
/deep/.uni-tab .uni-tab-item {
	opacity: 0.8;
	font-size: 32rpx;
	font-weight: 400;
	color: #262626;
	line-height: 48rpx;
}
/deep/.uni-tab .uni-tab-active {
	font-size: 36rpx;

	font-weight: 500;
	color: #206cfe !important;
	line-height: 54rpx;
}
</style>
