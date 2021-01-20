<template>
	<view class="order-detail">
		<view class="wrap">
			<!-- 待付款 -->
			<view class="wait">
				<view class="order-icon"><image src="../../../../static/enjoyBuyStrictly/png/littleshop.png" mode=""></image></view>
				<view class="wait-pay">
					<text class="wait-title">
						{{
							type == '待付款'
								? '待付款'
								: type == '待发货'
								? '待发货'
								: type == '已发货'
								? '已发货'
								: type == '已取消'
								? '已取消'
								: type == '交易关闭'
								? '交易关闭'
								: ''
						}}
					</text>
					<text class="wait-tips" v-if="type == '待付款'">订单已提交,请尽快完成支付</text>
					<text class="wait-tips" v-if="type == '待发货'">买家已付款,等待卖家发货</text>
					<text class="wait-tips" v-if="type == '已发货'">卖家已发货,请注意查收</text>
					<text class="wait-tips" v-if="type == '交易关闭'">支付已超时，订单已取消</text>
				</view>
			</view>
			<view class="pay-time" v-if="type == '待付款'">
				<text class="pat-text">支付剩余时间</text>
				<text>30分00秒</text>
			</view>
		</view>
		<view class="address">
			<image src="../../../../static/enjoyLife/adress.png" mode=""></image>
			<view class="adress-txt">
				<view class="name">
					<text>小瓶子</text>
					<text>137****9897</text>
				</view>
				<view class="adress"><text>陕西省西安市科技二路清华科技园</text></view>
			</view>
		</view>
		<view class="card-li">
			<view class="card-title"><text class="order-time">2020-11-03</text></view>
			<view class="main">
				<view class="order-img"><image :src="orderData.imgsrc" mode=""></image></view>
				<view class="order-details">
					<text class="order-desc">{{ orderData.desc }}</text>
					<view class="order-integral">
						<text class="integral">{{ orderData.integral }}积分</text>
						<text class="account">x1</text>
					</view>
				</view>
			</view>
			<view>
				<view class="order-code">
					<text class="total-account">订单编号</text>
					<text class="total-integral">202010260103</text>
				</view>
				<view class="order-code">
					<text class="total-account">商品总价</text>
					<text class="total-integral">{{ orderData.total }}积分</text>
				</view>
				<view class="total">
					<text class="total-account">实际支付</text>
					<text class="total-integral">{{ orderData.total }}积分</text>
				</view>
			</view>
		</view>
		<view class="pay-btn" v-if="type == '待付款'">
			<view>
				<text class="jifen">{{ orderData.total }}积分</text>
			</view>
			<view class="jifen-detail">
				<text>明细</text>
				<u-icon name="arrow-up" color="#333333" size="28"></u-icon>
			</view>
			<view><u-button type="primary" shape="circle">立即付款</u-button></view>
		</view>
		<view class="pay-btn btn-default" v-if="type == '待发货' || type == '交易关闭'">
			<view><u-button type="default" shape="circle" @click="deleteOrder">删除订单</u-button></view>
		</view>
		<view class="pay-btn alreaduy-btn" v-if="type == '已发货'">
			<view><u-button type="default" shape="circle" @click="deleteOrder">删除订单</u-button></view>
			<view><u-button type="primary" plain="true" shape="circle" @click="evaluate">评价订单</u-button></view>
			<view><u-button type="primary" plain="true" shape="circle" @click="electron">电子凭证</u-button></view>
		</view>
		<u-modal v-model="show" :show-title="showTitle" :show-cancel-button="showCancel" :content="content"></u-modal>
		<u-popup
			mode="center"
			v-model="codeShow"
			close-icon-color="#ffffff"
			close-icon-size="80"
			close-icon="close-circle
"
			:closeable="true"
		>
			<view class="code-img">
				<view class="title"><text>阿尔法乐园单词体验卡</text></view>
				<view>
					<view class="erweima-img"></view>
					<view class="code"><text>9570 3273 3455 12342</text></view>
					<view class="end-time"><text>有效期：2020-09-18 12:00 - 2022-12-11 12:00</text></view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
export default {
	name: 'UniNavBar',
	data() {
		return {
			type: '',
			show: false,
			showTitle: true,
			showCancel: false,
			codeShow: false,
			orderData: '',
			content: '删除后订单不可恢复，确认删除？'
		};
	},
	onLoad(data) {
		this.orderData = JSON.parse(decodeURIComponent(data.type));
		console.log(this.orderData);
		this.type = this.orderData.status;
	},
	methods: {
		// 删除订单
		deleteOrder() {
			this.show = true;
			this.showCancel = true;
		},
		// 电子凭证
		electron() {
			this.codeShow = true;
		},
		//评价订单
		evaluate() {
			uni.navigateTo({
				url: '/pages/tabBar/enjoyBuyStrictly/order/evaluateOrder'
			});
			// this.show = true;
			// this.showTitle = false;
			// this.showCancel = false;
			// this.content = "感谢您的评价~"
		}
	}
};
</script>

<style lang="less">
page {
	background-color: #f5f6f7;
	position: relative;
}
/deep/ .u-close {
	right: 286rpx;
	bottom: -824rpx;
}
.order-detail {
	background: url(../../../../static/mine/top-bg.webp) no-repeat;
	background-size: 100% 100%;
	height: 224rpx;
	.code-img {
		background: url(../../../../static/enjoyBuyStrictly/png/eletroc.png) no-repeat;
		background-size: 100% 100%;
		height: 740rpx;
		width: 640rpx;

		.code {
			padding: 0 136rpx;
			text {
				font-size: 32rpx;
				font-family: SourceHanSansCN, SourceHanSansCN-Medium;
				font-weight: 500;
				text-align: center;
				color: #333333;
				line-height: 66rpx;
			}
		}
		.end-time {
			text-align: center;
			text {
				font-size: 24rpx;
				font-family: SourceHanSansCN, SourceHanSansCN-Regular;
				font-weight: 400;
				text-align: center;
				color: #999999;
				line-height: 36rpx;
			}
		}
		.title {
			display: flex;
			justify-content: center;
			padding: 64rpx 0;
			text {
				color: #ffffff;
				font-size: 32rpx;
				font-weight: 500;
			}
		}
		.erweima-img {
			background: url(../../../../static/enjoyBuyStrictly/png/erweima.png) no-repeat;
			background-size: 100% 100%;
			height: 370rpx;
			width: 370rpx;
			margin-top: 64rpx;
			margin-left: 136rpx;
		}
	}
	.wrap {
		display: flex;
		padding: 74rpx 50rpx 0 60rpx;
		color: #ffffff;
		justify-content: space-between;
		align-items: center;
		.pay-time {
			display: flex;
			flex-direction: column;
			text {
				color: #ffffff;
				font-size: 24rpx;
			}
			.pat-text {
				opacity: 0.8;
				margin-bottom: 10rpx;
			}
		}
		.wait {
			display: flex;
			.order-icon {
				width: 58rpx;
				height: 64rpx;
				margin-right: 36rpx;
			}
			.wait-pay {
				display: flex;
				flex-direction: column;
				.wait-title {
					font-family: SourceHanSansCN, SourceHanSansCN-Medium;
					font-weight: 500;
				}
			}
			.wait-tips {
				font-size: 24rpx;
				opacity: 0.8;
				margin-top: 10rpx;
			}
		}
	}
	.address {
		padding: 40rpx 30rpx;
		background-color: #ffffff;
		margin: 30rpx 30rpx 0;
		border-radius: 20rpx;
		box-shadow: 0px 0px 12rpx 0px rgba(60, 61, 68, 0.09);
		display: flex;
		image {
			width: 64rpx;
			height: 64rpx;
			margin-right: 30rpx;
		}
	}
	.card-li {
		padding: 40rpx 30rpx 30rpx;
		background-color: #ffffff;
		margin: 30rpx;
		border-radius: 20rpx;
		box-shadow: 0px 0px 12rpx 0px rgba(60, 61, 68, 0.09);
		.card-title {
			display: flex;
			justify-content: space-between;
			height: 28rpx;
			line-height: 42rpx;
			.order-time {
				font-size: 28rpx;
				color: #666666;
			}
			.order-status {
				color: #ff3b30;
				font-size: 30rpx;
			}
		}
		.main {
			display: flex;
			margin-top: 28rpx;
			.order-img {
				margin-right: 24rpx;
				image {
					width: 240rpx;
					height: 180rpx;
					border-radius: 12rpx;
				}
			}
			.order-details {
				display: flex;
				flex-direction: column;
				padding-bottom: 18rpx;
				.order-integral {
					height: 36rpx;
					.account {
						color: #999999;
						font-size: 30rpx;
					}
					.integral {
						font-size: 30rpx;
						color: #333333;
					}
				}
				.order-desc {
					width: 366rpx;
					flex: 1;
					font-weight: 500;
					font-size: 30rpx;
					color: #333333;
				}
				.order-integral {
					display: flex;
					justify-content: space-between;
				}
			}
		}
		.order-code {
			margin: 20rpx 0;
			padding-left: 144rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.total-integral,
			.total-account {
				color: #666666;
				font-size: 24rpx;
			}
		}
		.total {
			margin: 20rpx 0;
			padding-left: 144rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.total-integral {
				color: #ff3b30;
				font-weight: 700;
				font-size: 28rpx;
			}
			.total-account {
				font-size: 24rpx;
				color: #333333;
			}
		}
	}
	.pay-btn {
		display: flex;
		align-items: center;
		justify-content: space-around;
		position: absolute;
		bottom: 0;
		padding: 20rpx 30rpx;
		width: 100%;
		align-items: center;
		background-color: #ffffff;
		height: 128rpx;
		.jifen-detail {
			text {
				font-size: 26rpx;
				color: #333333;
			}
		}
		.u-btn--primary {
			border-color: #206cfe;
			background-color: #206cfe;
			width: 300rpx;
			height: 88rpx;
		}
		.u-btn--default {
			border: 1px solid #c0c0c0;
		}
		.jifen {
			font-size: 40rpx;
			font-family: SourceHanSansCN, SourceHanSansCN-Medium;
			font-weight: 500;
			color: #ff0000;
			line-height: 60px;
		}
	}
	.btn-default {
		display: flex;
		justify-content: flex-end;
	}
	.alreaduy-btn {
		justify-content: flex-end;
		.u-btn {
			width: 176rpx;
			height: 64rpx;
			margin: 0 14rpx;
		}
		.u-btn--primary--plain {
			background-color: #fff !important;
		}
	}
}
</style>
