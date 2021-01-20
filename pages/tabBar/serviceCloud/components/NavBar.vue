<template>
	<view class="header">
		<u-navbar :is-back="isBack" :title-size="titleSize">
			<text class="title">{{title}}</text>
			<u-search v-model="keyword" height="56" v-if="showAction" action-text="" placeholder="输入查询内容"></u-search>
			<view class="navbar-right" slot="right" v-if="rightMsg">
				<view class="right-item" @click="enterService">
					<image src="../../../../static/serviceCloud/kefu.svg"></image>
				</view>
				<view class="right-item" @click="toggleMessageBox">
					<image src="../../../../static/serviceCloud/message.svg"></image>
				</view>
			</view>
		</u-navbar>
		<view class="messageBox" v-show="showMessageBox" v-if="rightMsg">
			<u-cell-group v-for="(item, index) of messageList" :key="index">
				<u-cell-item :title="item.name" :arrow="false" center>
					<image :src="item.icon" slot="icon" class="icon"></image>
				</u-cell-item>
			</u-cell-group>
		</view>
		<view class="mask" v-show="showMessageBox" @click="toggleMessageBox" v-if="rightMsg"></view>
	</view>
</template>

<script>
	export default {
		props: {
			isBack: {
				type: Boolean,
				required: true,
				default: () => false
			},
			title: {
				type: String,
				required: true,
				default: () => ''
			},
			messageList: {
				type: Array,
				required: true,
				default: () => []
			},
			rightMsg: {
				type: Boolean,
				required: true,
				default: () => false
			},
			showAction: {
				type: Boolean,
				required: true,
				default: () => false
			},
			titleSize: {
				type: Number,
				required: true,
				default: () => 12
			}
		},
		data() {
			return {
				keyword: '',
				showMessageBox: false
			};
		},
		methods: {
			toggleMessageBox() {
				this.showMessageBox = !this.showMessageBox
			},
			enterService() {
				// 进入智能客服页面
				uni.navigateTo({
					url: '/components/customer-service/index'
				});
			}
		}
	}
</script>

<style lang="less" scoped>
	.header {
		padding-left: 20rpx;
		padding-right: 20rpx;
		// background-color: rgba(242, 242, 242, 0.8);
		/deep/.u-navbar-fixed {
			padding-left: 20rpx;
			padding-right: 20rpx;
			// background-color: rgba(242, 242, 242, 0.8) !important;
		}
		/deep/.u-search{
			padding-left: 10rpx;
			padding-right: 10rpx;
		}
		z-index: 999;
	}
	.title {
		// font-size: 42rpx;
		color: #333333;
		font-weight: bold;
	}
	.navbar-right{
		margin-right: 24rpx;
		display: flex;
	}
	.right-item {
		margin: 0 12rpx;
		position: relative;
		color: #ffffff;
		display: flex;
		width: 50rpx;
		height: 50rpx;
		uni-image {
			width: 50rpx;
			height: 50rpx;
		}
	}
	.icon {
		width: 40rpx;
		height: 40rpx;
		margin-right: 40rpx;
	}
	.messageBox {
		width: 300rpx;
		height: auto;
		position: fixed;
		right: 20rpx;
		top: 32px;
		box-shadow: 0rpx 4rpx 4rpx #bfbfbf;
		z-index: 1000;
		background: url(../../../../static/serviceCloud/bubble_bg.png) center center no-repeat;
		background-size: 100% 100%;
		padding: 20rpx;
		padding-right: 0px;
		padding-top: 60rpx;
	}
	/deep/.u-cell-item-box {
		background-color: transparent;
	}
	.mask {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		top: 0;
		background: rgba(0, 0, 0, 0.4);
		z-index: 90;
	}
	/deep/.u-content {
		// background-color: #FFFFFF !important;
	}
	/deep/.uni-input-wrapper {
		// background-color: #FFFFFF;
	}
	/deep/.uicon-search:before {
		color: #c0c0c0;
	}
</style>
