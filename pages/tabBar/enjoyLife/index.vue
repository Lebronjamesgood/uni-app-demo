<template>
	<view>
		<nav-bar :isBack="false" title="智享生活" :messageList="messageList" :rightMsg="true"></nav-bar>
		<u-swiper height="280" :list="info" mode="dot" border-radius="0"></u-swiper>
		<view class="container">
			<view class="service"><district :districtList="listservice" :widthSize="136" :heightSize="134"></district></view>
			<view style="margin-top:-34rpx;padding:0 30rpx 24rpx"><district :districtList="listcommon" :widthSize="58" :heightSize="56"></district></view>
			<view class="join-us"><image src="../../../static/enjoyLife/join-us-bg.png"></image></view>
			<view class="dynamic-info">
				<view class="title">动态信息流</view>
				<view class="content">
					<view class="tab">
						<view class="tab-top">
							<view class="tab-list">
								<view class="tab-text" @click="changeTab(index)" v-for="(item, index) in tabObjectList" :key="index">
									<text :class="activeIndex === index ? 'active' : ''">{{ item.name }}</text>
									<view class="active-line" v-show="activeIndex === index"><image src="../../../static/mine/line.png" mode=""></image></view>
								</view>
							</view>
							<view class="right-icon">
								<span>更多</span>
								<uni-icons type="arrowright" color="#B6B8BB" size="12"></uni-icons>
							</view>
						</view>
					</view>
					<view class="content-item" v-for="(item, index) in dataList" :key="index">
						<view class="msg-content">
							{{ item.content }}
							<image src="../../../static/enjoyLife/new.svg" mode=""></image>
						</view>
						<view class="per-introduce">
							<view>{{ item.name }}-{{ item.phone }}</view>
							<view class="rtime">{{ item.rtime }}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import data from './data.js';
export default {
	data() {
		return {
			info: [],
			listservice: [],
			listcommon: [],
			index: 1,
			activeIndex: 1,
			tabObjectList: [
				{
					name: '需求发布',
					value: 1
				},
				{
					name: '提供服务',
					value: 2
				}
			],
			dataList: [],
			messageList: []
		};
	},
	mounted() {
		this.messageList = data.index_data.messageList;
		this.info = data.index_data.info;
		this.listservice = data.index_data.listservice;
		this.listcommon = data.index_data.listcommon;
		this.dataList = data.index_data.dynamic_info_list.provideList;
	},
	methods: {
		changeTab(index) {
			this.activeIndex = index;
			this.dataList = [];
			if (index === 0) {
				this.dataList = data.index_data.dynamic_info_list.demandList;
			}
			if (index === 1) {
				this.dataList = data.index_data.dynamic_info_list.provideList;
			}
		}
	}
};
</script>

<style lang="less" scoped>
page {
	overflow-y: auto;
}
.container {
	background-color: #ffffff;
}
.service {
	padding-bottom: 24rpx;
	margin: 0 30rpx;
	background-color: #ffffff;
	border-radius: 20rpx;
	box-shadow: 0rpx 4rpx 30rpx 0rpx rgba(26, 33, 73, 0.09);
	position: relative;
	top: -42rpx;
}
.join-us {
	margin: 0 30rpx;
}
.join-us image {
	width: 100%;
	height: 120rpx;
}
.dynamic-info {
	margin-top: 60rpx;
}
.title {
	font-size: 36rpx;
	font-weight: 500;
	text-align: left;
	color: #333333;
	line-height: 36rpx;
	border-left: 6rpx solid #206cfe;
	text-indent: 24rpx;
}
.tab-top {
	display: flex;
	justify-content: space-between;

	.right-icon {
		font-size: 24rpx;
		color: #36383a;
		span {
			margin-right: 12rpx;
			line-height: 86rpx;
		}
	}
}
.tab-list {
	display: flex;
	align-items: center;
	padding-top: 20rpx;
	justify-content: left;
	padding-left: 10rpx;
	.tab-text {
		padding-bottom: 10rpx;
		margin-right: 116rpx;
		cursor: pointer;
		text {
			font-size: 32rpx;
			color: #262626;
		}
		.active {
			color: #206cfe;
			font-weight: 500;
			font-size: 36rpx;
		}
	}
	.active-line {
		width: 44rpx;
		height: 8rpx;
		margin: 0 auto;
	}
}
.content {
	padding: 10rpx 30rpx;
}
.content-item {
	padding: 30rpx 0;
	margin: 30rpx 0;
	border-bottom: 2rpx solid #f2f2f2;
}
.content-item image {
	width: 48rpx;
	height: 20rpx;
	margin-left: 20rpx;
}
.msg-content {
	font-size: 32rpx;
	font-weight: 500;
	text-align: justify;
	color: #262626;
	line-height: 52rpx;
}
.per-introduce {
	display: flex;
	justify-content: space-between;
	font-size: 28rpx;
	color: #333333;
	line-height: 42rpx;
	margin-top: 24rpx;
}
.rtime {
	font-size: 26rpx;
	color: #868c96;
}
</style>
