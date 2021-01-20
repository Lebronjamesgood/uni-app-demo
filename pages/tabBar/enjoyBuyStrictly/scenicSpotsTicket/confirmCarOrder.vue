<template>
	<view class="order-page">
		<view class="order-li">
			<view class="order-left">
				<image src="../../../../static/serach/u14341.png" mode=""></image>
				<view class="order-txt"><text>A线运营特惠票</text></view>
			</view>
		</view>
		<view>
			<u-cell-group>
				<u-cell-item :arrow="false" title="张数" value="2张"></u-cell-item>
				<u-cell-item title="选择购票日期" :value="nowDate" @click="getDate"></u-cell-item>
			</u-cell-group>
			<view class="ticket-type">
				<view class="title">票种</view>
				<view class="type-right">
					<view class="type">
						<view class="ticket-one " :class="ticketIndex == index ? 'border-active' : ''" v-for="(item, index) in typeList" @click="selectTicket(index)" :key="index">{{ item }}</view>
					</view>
					<view class="txt">提示：身份证为430开头的本地居民可购买</view>
				</view>
			</view>
			<view class="passenger">
				<text>乘客</text>
				<view class="passenger-name">
					<view class="name-li" :class="activeIndex == index ? 'active' : ''" v-for="(item, index) in passengerList" :key="index" @click="selectPass(index)">{{ item }}</view>
				</view>
				<view class="add-passenger" @click="addPassenger">
					<u-icon name="plus-circle" color="#206cfe" size="40"></u-icon>
					<text>添加乘客</text>
				</view>
			</view>
		</view>
		<u-cell-group><u-cell-item :arrow="false" title="应付" value="￥0.01"></u-cell-item></u-cell-group>
		<view class="description">
			<u-radio-group>
				<u-radio>
					已购买并同意
					<text class="need-know know"><车票购买/使用须知></text>
				</u-radio>
			</u-radio-group>
			<view class="des">
				<text>提示：</text>
				<text><text class="need-know">车票自购买之日起5日内有效.</text></text>
			</view>
			<view class="tips">
				<view class="title">温馨提示</view>
				<text class="main">
					<text>节假日客运高峰，建议提前半小时到达车站候车，若取票出现异常，请咨询车站工作人员</text>
					。
				</text>
			</view>
		</view>

		<view class="pay-button"><u-button type="primary" :ripple="true" shape="circle" @click="pay">确认支付</u-button></view>
		<u-calendar v-model="show" :mode="mode" @change="change"></u-calendar>
	</view>
</template>

<script>
export default {
	data() {
		return {
			ticketIndex:0,
			activeIndex: 0,
			typeList: ['成人票', '本地特惠'],
			passengerList: ['王磊', '王蓉'],
			show: false,
			mode: 'date',
			nowDate: '2010-02-18'
		};
	},
	methods: {
		getDate() {
			this.show = true;
		},
		// 选择票类型
		selectTicket(index){
			this.ticketIndex = index
		},
		// 选择乘客
		selectPass(index) {
			this.activeIndex = index;
		},
		change(e) {
			this.nowDate = e.result;
		},
		// 去支付
		pay() {
			uni.navigateTo({
				url: '/pages/tabBar/enjoyBuyStrictly/scenicSpotsTicket/payMethods'
			});
		},
		// 添加乘客
		addPassenger() {
			let str = '张三';
			this.passengerList.push(str);
		}
	}
};
</script>

<style lang="less">
page {
	background: #f5f6f7;
}
.order-page {
	margin: 30rpx;
	.u-cell {
		padding: 20rpx 24rpx;
	}
	/deep/.u-cell-item-box {
		border-top-right-radius: 20rpx;
		border-top-left-radius: 20rpx;
	}
	.order-li {
		width: 690rpx;
		height: 168rpx;
		background: #ffffff;
		box-shadow: 0px 0px 6px 0px rgba(60, 61, 68, 0.09);
		margin-bottom: 20rpx;
		border-radius: 20rpx;
		display: flex;
		align-items: center;
		padding: 36rpx 0 34rpx 30rpx;
		justify-content: space-between;
		.order-left {
			display: flex;
			justify-content: space-between;
			align-items: center;
			.order-txt {
				text {
					font-size: 36rpx;
					font-weight: bold;
					color: #333333;
				}
			}
			image {
				width: 100rpx;
				height: 100rpx;
				margin-right: 30rpx;
			}
		}
	}
	.ticket-type {
		display: flex;
		background-color: #ffffff;
		padding: 0rpx 32rpx;
		padding-top: 20rpx;
		flex-direction: column;
		.title {
			margin-right: 40rpx;
		}
		.type-right {
			display: flex;
			flex-direction: column;
			.type {
				display: flex;
				margin-top: 20rpx;
			}
			.ticket-one {
				width: 164rpx;
				height: 68rpx;
				line-height: 68rpx;
				margin-right: 30rpx;
				border: 1px solid #999999;
				border-radius: 8px;
				text-align: center;
				color: #333333;
				}
			.txt {
				color: #ff0000;
				font-size: 24rpx;
			}
			.border-active {
				position: relative;
				border-color: #206cfe;
				background: rgba(32,108,254,0.10);
				color: #206cfe;
			}
			.border-active::after {
				content: '';
				background: url(../../../../static/mine/selected.png) no-repeat;
				background-size: 100% 100%;
				position: absolute;
				right: 0;
				bottom: 0;
				width: 40rpx;
				height: 39rpx;
			}
		}
	}
	.passenger {
		background: #fff;
		padding: 0rpx 32rpx;
		border-bottom: 1px solid #f4f4f4;
		margin-bottom: 30rpx;
		padding-top: 20rpx;
		border-bottom-right-radius: 20rpx;
		border-bottom-left-radius: 20rpx;
		.passenger-name {
			display: flex;
			flex-wrap: wrap;
			margin-top: 20rpx;

			.name-li {
				display: flex;
				width: 128rpx;
				height: 64rpx;
				border: 1px solid #999999;
				line-height: 64rpx;
				margin-right: 20rpx;
				border-radius: 20rpx;
				color: #999999;
				display: flex;
				justify-content: center;
				margin-top: 20rpx;
			}
		}
		.add-passenger {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 14rpx 0;
		}
	}
	.description {
		background-color: #ffffff;
		padding: 20rpx 32rpx;
		border-bottom-right-radius: 20rpx;
		border-bottom-left-radius: 20rpx;
		/deep/ .u-radio__label {
			font-size: 26rpx !important;
		}
		.need-know {
			color: #999999;
			font-size: 26rpx;
		}
		.know {
			color: #ff0000;
		}
		.des {
			text {
				font-size: 26rpx;
			}
		}
	}
	.tips {
		padding: 20rpx 32rpx;
		background: #f8f8f8;
		border-radius: 20rpx;
		.main {
			text {
				color: #666666;
				font-size: 26rpx;
				line-height: 42rpx;
			}
		}
	}
	.pay-button {
		margin-top: 96rpx;
	}
	.active {
		position: relative;
		background: rgba(32, 108, 254, 0.1);
		border: 1px solid #206cfe !important;
		color: #206cfe !important;
	}
	.active::after {
		content: '';
		background: url(../../../../static/mine/selected.png) no-repeat;
		background-size: 100% 100%;
		position: absolute;
		right: 0;
		bottom: 0;
		width: 40rpx;
		height: 39rpx;
	}
}
</style>
