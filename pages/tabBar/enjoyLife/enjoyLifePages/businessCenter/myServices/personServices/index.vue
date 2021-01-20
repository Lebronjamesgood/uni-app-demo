<template>
	<view>
		<view class="person-services">
			<view class="tabs">
				<view class="tab-text" v-for="(item, index) in tabObjectList" :key="index">
					<text class="tab-text-txt" :class="activeIndex == index ? 'active' : ''" @click="chage(index)">{{ item.name }}({{ item.value }})</text>
					<view class="active-line" v-show="index == activeIndex"></view>
				</view>
			</view>
			<view class="container">
				<view class="content" v-for="(item, index) in dataList" :key="index">
					<view class="title">
						<view class="time">2020-11-12 12:12:12</view>
						<view class="status">待审核</view>
					</view>
					<view class="content-item">
						<u-image :src="item.imgUrl" border-radius="12" width="240" height="180"></u-image>
						<view class="right">
							{{ item.typeName }}
							<p class="type">
								<text>{{ item.type }}</text>
								<text>{{ item.category }}</text>
							</p>
							<view class="contuen">
								<p>按价目表收费</p>
								<span>已服务{{ item.num }}次</span>
							</view>
						</view>
					</view>
					<view class="btn">
						<u-button shape="circle">删除</u-button>
						<u-button shape="circle">查看</u-button>
						<u-button shape="circle" style="border-color:#307fff;color: #307fff;">修改</u-button>
						<!-- <u-button  shape="circle" v-if="noOnline">上架</u-button> -->
					</view>
				</view>
			</view>
			<view class="btn-services" v-if="noOnline"><button type="primary" shape="circle" class="publish-services" @click="goPath">发布服务</button></view>
		</view>
	</view>
</template>

<script>
import data from '../../../../data.js';
export default {
	components: {},
	data() {
		return {
			activeIndex: 0,
			tabList: ['售卖中', '未上线'], //普通数据赋值
			tabObjectList: [
				{
					name: '售卖中',
					value: 1
				},
				{
					name: '未上线',
					value: 2
				}
			],
			dataList: [],
			noOnline: false
		};
	},
	mounted() {
		this.dataList = data.businessCenter.myServices.shopping;
	},
	methods: {
		chage(index) {
			this.activeIndex = index;
			this.dataList = [];
			this.noOnline = false;
			if (index === 0) {
				this.dataList = data.businessCenter.myServices.shopping;
			}
			if (index === 1) {
				this.dataList = data.businessCenter.myServices.noOnline;
				this.noOnline = true;
			}
		},
		// objectChange(e) {
		// 	this.dataList = [];
		// 	this.noOnline = false;
		// 	if (e.tab.value === 1) {
		// 		this.dataList = data.businessCenter.myServices.shopping;
		// 	}
		// 	if (e.tab.value === 2) {
		// 		this.dataList = data.businessCenter.myServices.noOnline;
		// 		this.noOnline = true;
		// 	}
		// },
		goPath() {
			uni.navigateTo({
				url: '/pages/tabBar/enjoyLife/enjoyLifePages/businessCenter/myServices/personServices/publishServices'
			});
		}
	}
};
</script>

<style lang="less" scoped>
.person-services {
	background: #f5f6f7;
}
.tabs {
	display: flex;
	padding: 32rpx 50rpx;
	background-color: #ffffff;
	height: 96rpx;
	.tab-text {
		margin-right: 164rpx;
		line-height: 32rpx;
		.tab-text-txt {
			color: #333333;
			font-size: 30rpx;
		}
	}
	.active {
		color: #206cfe !important;
	}
	.active-line {
		background: url(../../../../../../../static/enjoyLife/line.svg);
		background-size: 100%;
		height: 8rpx;
		width: 48rpx;
		margin: 16rpx auto 8rpx;
	}
}
/deep/ .uni-navbar--border {
	border: none;
}
.container {
	padding-bottom: 140rpx;
}
.content {
	padding: 30rpx 30rpx;
	background-color: #ffffff;
	margin: 30rpx;
	background: #ffffff;
	border-radius: 10px;
	box-shadow: 0px 0px 10px 0px rgba(41, 41, 41, 0.05);
	display: flex;
	flex-direction: column;
	.title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		.time {
			font-size: 28rpx;
			color: #6666;
		}
		.status {
			font-size: 30rpx;
			color: #ff3b30;
			margin-bottom: 20rpx;
		}
	}
}
.content-item {
	display: flex;
	border-bottom: 1rpx solid #f1f1f1;
	padding-bottom: 24rpx;
	margin-bottom: 24rpx;
	align-items: flex-end;
	image {
		border-radius: 12px;
	}
}
.contuen {
	display: flex;
	align-items: center;
	margin-top: 50rpx;
}
.right {
	font-weight: 500;
	color: #000000;
	margin-left: 24rpx;
}
.right .type {
	margin: 20rpx 0;
}
.right .type text {
	color: #206cfe;
}
.right p text {
	padding: 8rpx;
	border: 1px solid #206cfe;
	border-radius: 8rpx;
	font-size: 24rpx;
	margin-right: 32rpx;
}
.contuen p {
	color: #333333;
	font-size: 30rpx;
	margin-right: 40rpx;
}
.contuen span {
	color: #999999;
}
.btn {
	display: flex;
	justify-content: flex-end;
	flex-wrap: wrap;
}
.btn .u-btn {
	height: 64rpx;
	margin: 0 10rpx;
	background: rgba(216, 216, 216, 0);
	border-color: #c0c0c0;
	padding: 18rpx 60rpx;
	font-size: 28rpx;
}
.btn-services {
	background-color: #ffffff;
	width: 100%;
	height: 128rpx;
	z-index: 999;
	position: fixed;
	bottom: 0;
	line-height: 128rpx;
	padding: 20rpx 30rpx;
	box-shadow: 0rpx -4rpx 30rpx 0rpx rgba(26, 33, 73, 0.09);
}
.publish-services {
	width: 90%;
	border-radius: 44rpx;
}
</style>
