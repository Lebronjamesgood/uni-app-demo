<template>
	<view>
		<view class="order-card">
			<view class="card-list">
				<view class="card-li" v-for="(item,index) in dataList.goodsList" :key="index">
					<view class="card-title">
						<text class="order-time">{{ item.orderTime }}</text>
						<text class="order-status" :class="item.status == '待发货' ? 'send' : item.status == '已发货' ? 'alr-send': ''">{{item.status  }}</text>
					</view>
					<view class="main">
						<view class="order-img">
							<u-image  border-radius="12" :src="item.imgsrc" style="width: 240rpx;
						height: 180rpx;" ></u-image>
							<!-- <image src="../../static/enjoyLife/banner2.jpg" mode=""></image> -->
							</view>
						<view class="order-detail">
							<text class="order-desc">{{ item.desc }}</text>
							<view class="order-integral">
								<text class="integral">{{ item.integral }}积分</text>
								<text class="account">x{{ item.account }}</text>
							</view>
						</view>
					</view>
					<view class="total">
						<text class="total-account">合计</text>
						<text class="total-integral">{{ item.total }}积分</text>
					</view>
					<view class="btn" v-if="item.status !== '待发货'">
						<view></view>
						<view class="btn-s">
							<u-button :plain="false" shape="circle" v-if="item.status == '已发货'" @click="toDetail(item)">查看物流</u-button>
							<u-button :plain="false" shape="circle" style="color:#ff3b30" @click="toDetail(item)" v-else>立即付款</u-button>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'UniNavBar',
	props: {
		dataList: {
			type: Object,
			required: true,
			default: () => {}
		}
	},
	data() {
		return {};
	},
	methods: {
		toDetail(item){
			uni.navigateTo({
				url:"/pages/tabBar/enjoyBuyStrictly/order/orderDetail?type="+encodeURIComponent(JSON.stringify(item))
			})
		}
		// scroll-view到底部加载更多
		
	}
};
</script>

<style lang="less" >
.order-card {
	.card-list {
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
				.send{
					color: #206cfe;
				}
				.alr-send{
					color:#999999;
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
				.order-detail {
					display: flex;
					flex-direction: column;
					padding-bottom: 18rpx;
					.order-integral {
						height: 36rpx;
					}
					.order-desc {
						width: 366rpx;
						flex: 1;
						font-weight: 500;
						font-size: 30rpx;
						color: #333333;
						line-height: 24px;
					}
					.order-integral {
						display: flex;
						justify-content: space-between;
					}
				}
			}
			.total {
				margin: 28rpx 0;
				padding-left: 192rpx;
				display: flex;
				justify-content: space-between;
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
			.btn {
				display: flex;
				justify-content: space-between;
				.btn-s {
					width: 176rpx;
					display: flex;
					justify-content: right;
					uni-button {
						background: #ffffff;
						border-color: #ff3b30 !important;
						width: 176rpx;
						height: 64rpx;
						border-radius: 32rpx;
					}
				}
			}
		}
	}
}
</style>
