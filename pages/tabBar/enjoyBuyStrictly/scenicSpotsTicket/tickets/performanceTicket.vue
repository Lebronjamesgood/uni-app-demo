<template>
	<view>
		<view class="ticket-content">
			<view class="title">
				<text class="font-18">苗家故事篝火晚会演出双人票</text>
			</view>
			<view class="select-time">
				<view class="type-title font-16">
					选择日期
				</view>
				<view class="">
					<text :class="{'font-14': true, 'time-btn': true, active: activeBtn == '1'}"  @click="activeBtn = '1'">{{tody}}</text>
					<text :class="{'font-14': true, 'time-btn': true, active: activeBtn  == '2'}"  @click="activeBtn = '2'">{{tomorrow}}</text>
					<text :class="{'font-14': true, 'time-btn': true, active: activeBtn  == '3'}"  @click="activeBtn = '3'">{{nextTomorrow}}</text>
					<text :class="{'font-14': true, 'time-btn': true}" >更多></text>
				</view>
			</view>
			<view class="select-number">
				<view class="type-title font-16">
					场次
				</view>
				<view class="number-btn-group">
					<text :class="{'font-14': true, 'number-btn': true, active: activeNum == '1'}"  @click="activeNum = '1'">七月29日
					17:00-19:00</text>
					<text :class="{'font-14': true, 'number-btn': true, active: activeNum  == '2'}"  @click="activeNum = '2'">七月29日
					19:00-21:00</text>
					<text :class="{'font-14': true, 'number-btn': true, active: activeNum  == '3'}"  @click="activeNum = '3'">七月29日
					21:00-23:00</text>
				</view>
			</view>
			<view class="tip-row">
				<u-image style="margin-right: 14rpx;" src="../../../../../static/enjoyBuyStrictly/png/info-tip.png" width="32" height="32"></u-image>
				<text class="font-14">当前场馆为苗家故事一号场馆</text>
			</view>
			<view class="select-type">
				<view class="type-title font-16">
					选择票种
				</view>
				<view class="number-btn-group">
					<text :class="{'font-14': true, 'btn': true, active: activeType == '1'}"  @click="activeType = '1'">成人票</text>
					<text :class="{'font-14': true, 'btn': true, active: activeType  == '2'}"  @click="activeType = '2'">本地特惠</text>
				</view>
			</view>
			<view class="select-place">
				<view class="type-title font-16">
					选择座位
				</view>
				<view class="number-btn-group">
					<text :class="{'font-14': true, 'btn': true, active: activePlace == '1'}"  @click="activePlace = '1'">A区</text>
					<text :class="{'font-14': true, 'btn': true, active: activePlace  == '2'}"  @click="activePlace = '2'">B区</text>
				</view>
			</view>
			
			<view class="tip-warn">
				<view class="">
					<text class="font-14">不支持退票</text>
					<text class="font-14">丨</text>
					<text class="font-14">当日有效</text>
				</view>
				<view class="">
					<text class="font-14">购买须知></text>
				</view>
			</view>
			
			<view class="line-row"></view>
			
			<view class="shop-size">
				<view class="left">
					<text class="font-16">购买数量</text>
				</view>
				<view class="right">
					<u-number-box v-model="defaultNum" size="36"></u-number-box>
				</view>
			</view>
		</view>
		
		<view class="person-info">
			<view class="title">
				<text class="font-18" style="margin-right: 16rpx;">游客信息</text>
				<text class="font-13" style="color: #999999;">需填</text>
				<text class="font-13" style="color: #206CFE;">1</text>
				<text class="font-13" style="color: #999999;">位用于入园身份验证</text>
			</view>
			<view class="line-row"></view>
			<view class="add-info">
				<text class="font-15" style="margin-right: 104rpx;color: #666666;">游客</text>
				<text class="font-15" style="color: #206CFE;">点击补全用户信息</text>
			</view>
		</view>
		
		<view class="bottom order-bottom">
			<view class="bottom-wrap">
				<view class="price">￥120.00</view>
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
					<view>苗家故事篝火晚会演出双人票【学生票】</view>
					<view class="expand-bottom-price">
						<text>￥180</text>
						<text>x1份</text>
					</view>
				</view>
			</view>
			<view class="bottom-wrap">
				<view class="price">￥120.00</view>
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
			activeBtn: 1,
			activeNum: 1,
			activeType: 1,
			activePlace: 1,
			defaultNum: 0,
			show: false
		}
	},
	computed: {
		tody() {
			return `${new Date().getMonth() + 1}月${new Date().getDate()}日`
		},
		tomorrow() {
			let long = new Date().getTime() + 1000*3600*24
			return `${new Date(long).getMonth() + 1}月${new Date(long).getDate()}日`
		},
		nextTomorrow() {
			let long = new Date().getTime() + 1000*3600*24*2
			return `${new Date(long).getMonth() + 1}月${new Date(long).getDate()}日`
		}
	},
	methods: {
		expand() {
			this.show = !this.show;
		},
	}
}
</script>

<style lang="scss" scoped>
page {
	overflow-y: auto;
	background-color: #F5F6F7;
	// position: relative;
}
.font-12 {
	font-size: 24rpx;
}
.font-13 {
	font-size: 26rpx;
}
.font-14 {
	font-size: 28rpx;
}
.font-15 {
	font-size: 30rpx;
}
.font-16 {
	font-size: 32rpx;
}
.font-18 {
	font-size: 36rpx;
}
.ticket-content {
	margin: 30rpx;
	padding: 30rpx;
	background-color: #ffffff;
	border-radius: 20rpx;
	box-shadow: 0 0 20rpx 0 rgba(41,41,41,0.05); 
	.title {
		padding: 10rpx 0 40rpx;
		border-bottom: 1rpx solid #e4e4e4;
	}
	.select-time {
		
		.type-title {
			margin: 40rpx 0 30rpx;
		}
		.time-btn {
			display: inline-block;
			width: 158rpx;
			height: 68rpx;
			text-align: center;
			line-height: 68rpx;
			border: 1rpx solid #d4d4d4;
			border-radius: 8rpx;
			margin-right: 10rpx;
		}
		.time-btn:last-child {
			width: 124rpx;
			margin-right: 0;
		}
	}
	.select-number, .select-place, .select-type {
		.type-title {
			margin: 40rpx 0 30rpx;
		}
		.number-btn-group {
			display: flex;
			justify-content: flex-start;
			.number-btn {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 203rpx;
				height: 120rpx;
				text-align: center;
				border: 1rpx solid #d4d4d4;
				border-radius: 8rpx;
				margin-right: 10rpx;
			}
			.btn {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 164rpx;
				height: 68rpx;
				text-align: center;
				border: 1rpx solid #d4d4d4;
				border-radius: 8rpx;
				margin-right: 10rpx;
			}
			
		}
		
	}
}
.active {
	position: relative;
	background: rgba(32,108,254,0.10);
	border: 1px solid #206cfe;
	color: #206CFE;
}
.active::after {
	content: '';
	background: url(../../../../../static/mine/selected.png) no-repeat;
	background-size: 100% 100%;
	position: absolute;
	right: 0;
	bottom: 0;
	width: 40rpx;
	height: 39rpx;
}
.tip-row {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 20rpx;
	background-color: #F5F6F7;
	margin: 30rpx 0 40rpx;
}
.tip-warn {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20rpx;
	margin: 30rpx 0 38rpx;
	background-color: #F5F6F7;
	color: #666666;
}
.line-row {
	width: 100%;
	height: 0;
	border-bottom: 1rpx solid #e4e4e4;
}
.shop-size {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 40rpx 0 25rpx;
}
/deep/ .u-icon-plus {
	color: #206CFE!important;
	background: rgba(32,108,254,0.10)!important;
}
.person-info {
	margin: 30rpx 30rpx 150rpx;
	padding: 30rpx;
	background-color: #ffffff;
	border-radius: 20rpx;
	box-shadow: 0 0 20rpx 0 rgba(41,41,41,0.05); 
	.title {
		padding: 10rpx 0 40rpx;
		
	}
	.add-info {
		display: flex;
		justify-content: flex-start;
		padding: 40rpx 0 25rpx;
	}
}
.order-bottom{
	position: fixed;
	
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
</style>
