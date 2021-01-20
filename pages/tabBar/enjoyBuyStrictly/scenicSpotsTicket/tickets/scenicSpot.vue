<template>
	<view class="confirm-order">
		<view class="wrap">
			<view class="title"><text>阿西里西大草原景区票</text></view>
			<view class="select-date">
				<view class="txt">选择日期</view>
				<view class="date-li">
					<view class="today date" :class="activeIndex == 'today' ? 'active' : ''" @click="selected('today')">{{ tody() }}</view>
					<view class="today tomorrow" :class="activeIndex == 'tomorrow' ? 'active' : ''" @click="selected('tomorrow')">{{ tomorrow() }}</view>
					<view class="today" :class="activeIndex == 'next' ? 'active' : ''" @click="selected('next')">{{ nextTomorrow() }}</view>
					<view class="more today" @click="selected('more')">
						<text>更多</text>
						<u-icon name="arrow-right"></u-icon>
					</view>
				</view>
				<view class="desc">
					<view class="fl">
						<view class="fl-v">不支持退票</view>
						<view class="fl-v">|</view>
						<view class="fl-v">当日有效</view>
					</view>
					<view class="fr">
						<view>购买须知</view>
						<u-icon name="arrow-right"></u-icon>
					</view>
				</view>
			</view>
			<view class="buy-count">
				<view class="buy-count-title">购买数量</view>
				<view class="count"><u-number-box v-model="value" :input-width="68" :input-height="68" @change="valChange"></u-number-box></view>
			</view>
		</view>
		<view class="wrap">
			<view class="passenger-title">
				<text class="txt">游客信息</text>
				<text>
					须填
					<text class="number">1</text>
					位，用于入园身份验证
				</text>
			</view>
			<view class="passenger-info">
				<view class="today" :class="infoActiveIndex == index ? 'active' : ''" @click="selectInfo(index)" v-for="(item, index) in list" :key="index">{{ item.name }}</view>
				<view class="today">
					新增更换
					<u-icon name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="info">
				<view class="name">
					<view>游客</view>
					<u-icon name="close-circle" color="#999999" size="32"></u-icon>
				</view>
				<view class="name-info">
					<view>张三</view>
					<view>身份证 622625187909871234</view>
					<view>手机号 18394667706</view>
				</view>
			</view>
		</view>
		<view class="bottom order-bottom">
			<view class="bottom-wrap">
				<view class="price">￥180.00</view>
				<view class="detail" @click="expand">
					<text>明细</text>
					<u-icon name="arrow-up" color="#333333" size="24" ></u-icon>
				</view>
				<view class="btn"><u-button type="primary" shape="circle" style="width:150px">提交订单</u-button></view>
			</view>
		</view>
		<u-popup v-model="show" mode="bottom" border-radius="40">
			<view class="bottom">
			<view class="expand">
				<view class="expand-top"><text>价格明细</text></view>
				<view class="expand-bottom">
					<view>阿西里西大草原【成人票】</view>
					<view class="expand-bottom-price">
						<text>￥180</text>
						<text>x1份</text>
					</view>
				</view>
			</view>
			<view class="bottom-wrap">
				<view class="price">￥180.00</view>
				<view class="detail" @click="expand">
					<text>明细</text>
					<u-icon name="arrow-down" color="#333333" size="24" ></u-icon>
				</view>
				<view class="btn"><u-button type="primary" shape="circle" style="width:150px">提交订单</u-button></view>
			</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
export default {
	data() {
		return {
			activeIndex: 'today',
			value: 0,
			infoActiveIndex: 0,
			arrowPosition: 'arrow-up',
			show: false,
			list: [
				{
					name: '李四'
				},
				{
					name: '张三'
				}
			]
		};
	},
	onLoad() {},
	methods: {
		expand() {
			this.show = !this.show;
		},
		valChange(e) {
			console.log('当前值为: ' + e.value);
		},
		selectInfo(index) {
			this.infoActiveIndex = index;
		},
		selected(index) {
			this.activeIndex = index;
		},
		tody() {
			return `${new Date().getMonth() + 1}月${new Date().getDate()}日`;
		},
		tomorrow() {
			let long = new Date().getTime() + 1000 * 3600 * 24;
			return `${new Date(long).getMonth() + 1}月${new Date(long).getDate()}日`;
		},
		nextTomorrow() {
			let long = new Date().getTime() + 1000 * 3600 * 24 * 2;
			return `${new Date(long).getMonth() + 1}月${new Date(long).getDate()}日`;
		}
	}
};
</script>

<style lang="less">
page {
	background: #f5f6f7;
	position: relative;
}
.confirm-order {
	.wrap {
		margin: 30rpx;
		background-color: #ffffff;
		border-radius: 20rpx;
		box-shadow: 0px 0px 20rpx 0px rgba(41, 41, 41, 0.05);
		padding: 40rpx 30rpx;
		.passenger-title {
			padding: 20rpx 0;
			.txt {
				color: #333333;
				font-size: 32rpx;
				margin-right: 20rpx;
			}
			.number {
				color: #206cfe;
				font-size: 26rpx;
				font-weight: 550;
			}
			text {
				font-size: 24rpx;
				color: #999999;
				letter-spacing: 1px;
			}
		}
		.passenger-info {
			display: flex;
			padding-bottom: 30rpx;
			border-bottom: 1px solid #e4e4e4;
		}
		.active {
			position: relative;
			background: rgba(32, 108, 254, 0.1);
			color: #206cfe !important;
			border-color: #206cfe;
		}
		.active:after {
			content: '';
			background: url(../../../../../static/mine/selected.png) no-repeat;
			background-size: 100% 100%;
			position: absolute;
			bottom: 0;
			right: 0;
			width: 40rpx;
			height: 38rpx;
		}
		.title {
			padding-bottom: 40rpx;
			border-bottom: 1px solid #e4e4e4;
			color: #333333;
			font-weight: 500;
		}
		.today {
			width: 158rpx;
			height: 68rpx;
			line-height: 68rpx;
			text-align: center;
			border: 1px solid #d4d4d4;
			border-radius: 8rpx;
			color: #333333;
			fong-size: 28rpx;
			margin: 0 10rpx 0 0;
			position: relative;
		}
		.select-date {
			.txt {
				margin: 30rpx 0;
				color: #333333;
				font-weight: 500;
			}
			.date-li {
				display: flex;
				.tomorrow {
					color: #333333;
				}
				.date {
					color: #d4d4d4;
				}
				.more {
					width: 124rpx;
					color: #333333;
				}
			}
		}
		.buy-count {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 30rpx 0;
			/deep/.u-number-input {
				background-color: #ffffff !important;
			}
			/deep/.u-icon-minus,
			/deep/.u-icon-plus {
				width: 68rpx;
			}
		}
		.info {
			display: flex;
			align-items: center;
			color: #666666;
			font-size: 24rpx;
			    padding-top: 20rpx;
			.name {
				display: flex;
				flex-direction: column;
				align-items: center;
				line-height: 60rpx;
				margin-right: 80rpx;
			}
			.name-info {
				line-height: 40rpx;
			}
		}
	}
	.order-bottom{
			position: absolute;
	}
	.bottom {
		padding: 20rpx 30rpx;
		background-color: #ffffff;
		// position: absolute;
		bottom: 0;
		width: 100%;
		.expand {
			box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.1);
			padding-bottom: 40rpx;
			.expand-bottom {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-top: 24rpx;
				border-bottom: 1px solid #f5f6f7;
				padding-bottom: 40rpx;
				.expand-bottom-price{
					width: 200rpx;
					display: flex;
					justify-content: space-between;
				}
			}
		}
		.bottom-wrap {
			display: flex;
			justify-content: space-around;
			align-items: center;
			.u-btn--primary {
				background: #206cfe;
				font-size: 24rpx;
			}
			.price {
				color: #ff0000;
				font-weight: 550;
			}
			.detail {
				text {
					color: #333333;
					font-size: 24rpx;
				}
			}
		}
	}
	.desc {
		background: #f8f8f8;
		border-radius: 12rpx;
		padding: 20rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #666666;
		font-size: 24rpx;
		margin-top: 20rpx;
		.fl {
			display: flex;
			justify-content: space-between;

			.fl-v {
				margin: 0 10rpx;
			}
		}
		.fr {
			display: flex;
			align-items: center;
		}
	}
}
</style>
