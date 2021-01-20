<template>
	<view>
		<view class="to-card-center" @click="link('/pages/tabBar/mine/mineCoupon/getCardsCenter/index')">
			<view class="left">
				<image src="../../../../../static/mine/get-cards.png" mode=""></image>
				<text>去领券中心看看</text>
			</view>
			<u-icon class="right" name="arrow-right" size="12" color="#999999"></u-icon>
		</view>
		<view v-if="data.length">
			<view class="un-used" v-for="(el, ind) in data" :key="ind">
				<view class="font-30 card-title">
					{{el.title}}
				</view>
				<view class="un-used-card" v-for="(item, index) in el.dataList" :key="index">
					<view class="un-used-left">
						<view class="left-content">
							<text style="font-size: 30rpx;color: #ff3b30">￥</text>
							<text style="font-size: 72rpx;">{{item.number}}</text>
						</view>
					</view>
					
					<view class="center">
						<view class="title font-15" style="color: #333333;">
							{{item.message1}}
						</view>
						<view class="title font-12">
							{{item.message2}}
						</view>
						<view class="title font-12">
							{{item.message3}}
						</view>
						<view class="title font-12">
							{{item.message4}}
						</view>
					</view>
					
					<view :class="{right: true, 'un-used': item.status == 0, used: item.status == 1, 'dis-used': item.status == 2 } ">
						<text class="font-12">{{item.status == 0 ? '立即使用' : item.status == 1 ? '已用' : '失效'}}</text>
					</view>
				</view>
			</view>			
		</view>
		
		<view class="emptyBox" v-else>
			<image src="../../../../../static/mine/empty-card.png" mode=""></image>
			<view class="">
				<text>暂无优惠卷</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			data: {
				type: Array,
				required: true,
				default: {}
			}
		},
		data() {
			return {
			}
		},
		methods: {
			link(url){
				uni.navigateTo({
					url:url
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
.font-12 {
	font-size: 24rpx;
}
.font-15 {
	font-size: 30rpx;
}
.to-card-center {
	display: flex;
	justify-content: space-between;
	margin: 30rpx;
	padding: 30rpx;
	border: 2px solid #f6f6f6;
	box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.05); 
	.left {
		font-size: 30rpx;
		image {
			width:48rpx;
			height: 50rpx;
			margin-right: 20rpx;
			vertical-align: middle;
		}
	}
}
.un-used {
	padding: 0 30rpx;
	.card-title {
		font-weight: 500;
		margin-bottom: 40rpx;
	}
	.un-used-card {
		background: #ffffff;
		border: 4rpx solid #f6f6f6;
		border-radius: 16rpx;
		box-shadow: 0px 0px 20rpx 0px rgba(0,0,0,0.05); 
		height: 230rpx;
		margin-bottom: 40rpx;
		.un-used-left {
			float: left;
			width: 180rpx;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			.left-content {
				margin: 22rpx 0;
				padding: 36rpx 30rpx;
				color: #ff3b30;
				font-weight: 700;
				border-right: 2rpx dotted #cfcfcf;
			}
		}
		.center {
			float: left;
			padding:20rpx 26rpx;
			display: flex;
			flex-direction: column;
			.title {
				margin: 0 0 16rpx;
				color: #999999;
			}
		}
		.right {
			float: right;
			width: 110rpx;
			height: 220rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #FFFFFF;
		}
		.un-used {
			background: url(../../../../../static/mine/un-used.png) no-repeat;
			background-size: 100% 100%;
		}
		.used {
			background: url(../../../../../static/mine/used.png) no-repeat;
			background-size: 100% 100%;
		}
		.dis-used {
			background: url(../../../../../static/mine/dis-used.png) no-repeat;
			background-size: 100% 100%;
		}
	}
}
.un-used:first-child {
	padding-top: 30rpx;
}
.un-used:last-child {
	padding-bottom: 30rpx;
}
.emptyBox {
	padding: 60rpx 30rpx 0;
	text-align: center;
	color: #999999;
	font-size: 30rpx;
	image {
		width: 590rpx;
		height: 448rpx;
		margin-bottom: 8rpx;
	}
}
</style>
