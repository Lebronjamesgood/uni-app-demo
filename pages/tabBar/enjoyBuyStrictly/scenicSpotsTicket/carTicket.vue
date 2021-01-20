<template>
	<view class="car-ticket">
		<view class="tab-road">
			<u-tabs :list="dataList" :is-scroll="true" :current="current" @change="change"></u-tabs>
			<!-- 			<view class="tab-road-item" :class="activeIndex === index ? 'active' : ''" v-for="(item, index) in dataList" :key="index" @click="change(index)">
				<text>{{ item.name }}</text>
			</view> -->
		</view>
		<view class="road-line"><image src="../../../../static/ticket/2.png" mode=""></image></view>
		<view class="road-line-select" :class="activeIndex === 0 ? 'activeA' : activeIndex === 1 ? 'activeB' : 'activeC'">
			<view class="road-part">
				<text>{{ roadName }}</text>
			</view>
			<view class="road-part-point">
				<!-- <text>停靠点：城北游客中心→天下凤凰大酒店→新华书店→南华路</text> -->
				<text>
					停靠点：
					<text v-for="(item, index) in lineList" :key="index">{{ item }}→</text>
				</text>
				<text>→景秀凤凰大酒店→城北游客中心</text>
			</view>
		</view>
		<view class="car-title">
			<view class="car-title-item">
				<image src="../../../../static/serach/history.png" mode=""></image>
				<text>运营时间：08：00-23：00</text>
			</view>
			<view class="car-title-item">
				<text>电子乘车码，便捷乘车</text>
			</view>
		</view>
		<view class="select-ticket">
			<view class="title"><view class="slice"></view><text>选择车票</text></view>
			<view class="ticket-list">
				<view class="ticket-li" v-for="(item, index) in ticketList" :key="index">
					<view class="ticket-left"><u-image :src="item.imgSrc" width="98" height="98"  mode=""></u-image></view>
					<view class="ticket-right">
						<view class="name">
							<text>{{ item.name }}</text>
						</view>
						<view class="price">
							<text><text class="fuhao">￥</text>{{ item.price }}</text>
							<u-button shape="circle" size="mini" :ripple="true" @click="buy" type="error">立即购买</u-button>
						</view>
						<view class="description">
							<text>说明：{{ item.description }}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			activeIndex: 0,
			current: 0,
			dataList: [
				{
					name: '接驳线路A',
					roadList: ['城北游中心', '天下凤凰大酒店', '新华书店', '南华路'],
					ticketList: [
						{
							name: 'A线运营特惠票',
							price: '0.01',
							description: '有效期五天，可乘坐6次',
							imgSrc:require("../../../../static/ticket/4.png")
						},
						{
							name: 'A线运营特惠票',
							price: '0.08',
							description: '有效期五天，可乘坐6次',
							imgSrc:require("../../../../static/ticket/3.png")
						}
					]
				},
				{
					name: '接驳线路B',
					roadList: ['城北游客中心', '天下凤凰大酒店', '新华书店', '南华路'],
					ticketList: [
						{
							name: 'B线运营特惠票',
							price: '0.01',
							description: '有效期五天，可乘坐6次'
						},
						{
							name: 'B线运营特惠票',
							price: '0.08',
							description: '有效期五天，可乘坐6次'
						}
					]
				},
				{
					name: '接驳线路C',
					roadList: ['城北游客中心', '天下凤凰大酒店', '新华书店', '南华路'],
					ticketList: [
						{
							name: 'C线运营特惠票',
							price: '0.01',
							description: '有效期五天，可乘坐6次'
						},
						{
							name: 'C线运营特惠票',
							price: '0.08',
							description: '有效期五天，可乘坐6次'
						}
					]
				},
				{
					name: '接驳线路D',
					roadList: ['城北游客中心', '天下凤凰大酒店','新华书店', '南华路'],
					ticketList: [
						{
							name: 'C线运营特惠票',
							price: '0.01',
							description: '有效期五天，可乘坐6次'
						},
						{
							name: 'C线运营特惠票',
							price: '0.08',
							description: '有效期五天，可乘坐6次'
						}
					]
				},
				{
					name: '接驳线路E',
					roadList: ['城北游客中心', '天下凤凰大酒店', '新华书店', '南华路'],
					ticketList: [
						{
							name: 'C线运营特惠票',
							price: '0.01',
							description: '有效期五天，可乘坐6次'
						},
						{
							name: 'C线运营特惠票',
							price: '0.08',
							description: '有效期五天，可乘坐6次'
						}
					]
				}
			],
			lineList: '',
			ticketList: '',
			roadName: ''
		};
	},
	onLoad() {
		this.lineList = this.dataList[0].roadList;
		this.ticketList = this.dataList[0].ticketList;
		this.roadName = this.dataList[0].name;
	},
	methods: {
		buy() {
			uni.navigateTo({
				url: '/pages/tabBar/enjoyBuyStrictly/scenicSpotsTicket/confirmCarOrder'
			});
		},
		change(index) {
			this.current = index;
			this.lineList = this.dataList[index].roadList;
			this.ticketList = this.dataList[index].ticketList;
			this.roadName = this.dataList[index].name;
		}
	}
};
</script>

<style lang="less">
.car-ticket {
	.road-line {
		background: #ffffff;
		height: 320rpx;
		margin-bottom: 20rpx;
	}
	.car-title {
		display: flex;
		justify-content: space-between;
		padding: 20rpx 30rpx;

		.car-title-item {
			display: flex;
			align-items: center;
			image {
				width: 30rpx;
				height: 30rpx;
				margin-right: 10rpx;
			}
			text {
				font-size: 24rpx;
				color: #666666;
			}
		}
	}
	.road-line-select {
		color: #ffffff;
		margin: 0 30rpx;
		padding: 36rpx 52rpx 36rpx 20rpx;
		border-radius: 20rpx;
		.road-part {
			text {
				font-size: 30rpx;
			}
		}
		.road-part-point {
			padding-left: 20rpx;
			margin-top: 8rpx;
			text {
				line-height: 1.5;
				font-size: 26rpx;
			}
		}
	}
	.activeA {
		background: #206cfe;
	}
	.activeB {
		background: #206cfe;
	}
	.activeC {
		background: #206cfe;
	}
	.select-ticket {
		/deep/ .u-btn--error {
			background: linear-gradient(270deg, #ff7800, #ffbc07);
		}
		.title {
			margin-bottom: 12rpx;
			display: flex;
			align-items: center;
			.slice{
				width: 6rpx;
				height: 36rpx;
				background: #206cfe;
				margin-right: 24rpx;
			}
			text {
				font-size: 40rpx;
				color: #333333;
				    height: 60rpx;
			}
		}
		.ticket-list {
			.ticket-li {
				box-shadow: 0px 0px 6px 0px rgba(60, 61, 68, 0.09);
				border-radius: 10rpx;
				padding: 20rpx;
				display: flex;
				align-items: center;
				margin: 20rpx 30rpx;
				.ticket-left {
					width: 98rpx;
					height: 98rpx;
					margin-right: 30rpx;
				}
				.ticket-right {
					width: 80%;
					.price {
						display: flex;
						align-items: center;
						justify-content: space-between;
						margin-top: 10rpx;
						padding-right: 10rpx;
						text {
							color: #ff0000;
							font-size: 36rpx;
						}
						.fuhao{
							font-size: 24rpx;
						}
						/deep/ uni-button {
							padding: 0 42rpx;
							margin: inherit;
							height: 68rpx;
							line-height: 68rpx;
						}
					}
					.description {
						margin-top: 12rpx;
						border-top: 1px solid #e4e4e4;;
						text {
							color: #999999;
							font-size: 24rpx;
						}
					}
				}
			}
		}
	}
}
</style>
