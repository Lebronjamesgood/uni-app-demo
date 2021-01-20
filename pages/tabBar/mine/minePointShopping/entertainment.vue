<template>
	<view>
		<uni-nav-bar left-icon="back" background-color="none" border="none" status-bar="false" @clickLeft="goBack">
			<view class="font-18" style="text-align: center;width: 100%;">
				休闲娱乐
			</view>
			<view slot="right">
				<view class="right-icon">
					<u-image src="../../../../static/mine/share.webp" width="48" height="48"></u-image>
					<u-image src="../../../../static/mine/shop-mine-icon.webp" width="48" height="48"  style="margin-left:30rpx;"></u-image>
				</view>
			</view>
		</uni-nav-bar>
		<view class="filter-label">
			<view class="left" @click="sortHandle(false)">
				<text :class="{'left-label': true, 'font-15': true, active: activeIndex === '1'}">推荐</text>
			</view>
			<view class="right" @click="sortHandle(true)">
				<text :class="{'font-15': true, active: activeIndex === '2'}">积分排序</text>
				<u-image src="../../../../static/mine/time-select-icon.png" width="28" height="28"></u-image>
			</view>
		</view>
		
		<view class="shop-content">
			<view class="view-item" v-for="(item, index) in shopList" :key="index">
				<image :src="item.src" class="img-list"></image>
				<view class="grid-text font-13">{{item.title}}</view>
				<view class="price">
					<u-image src="../../../../static/mine/price-icon.svg" width="26" height="32"></u-image>
					<text class="line-first">{{item.priceNow}}</text>
					<text class="line-second">{{item.priceLast}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex: '1',
				shopList: [],
				defaultData: [
					{
						src: '../../../../static/mine/shop-list1.webp',
						title: '贝磁磁力建构5-6岁儿童智力拓展积木36...',
						priceNow: '3000',
						priceLast: '298元'
					},
					{
						src: '../../../../static/mine/shop-list2.webp',
						title: '智力快车S2型只能儿童电话手表',
						priceNow: '3200',
						priceLast: '310元'
					},
					{
						src: '../../../../static/mine/shop-list3.webp',
						title: '博客苏儿童玩具收纳箱',
						priceNow: '1000',
						priceLast: '68元'
					},
					{
						src: '../../../../static/mine/shop-list4.webp',
						title: 'Hanvon汉王出头鸟儿智能遥控玩具',
						priceNow: '2700',
						priceLast: '230元'
					},
				],
				sortData: [
					{
						src: '../../../../static/mine/shop-list2.webp',
						title: '智力快车S2型只能儿童电话手表',
						priceNow: '3200',
						priceLast: '310元'
					},
					{
						src: '../../../../static/mine/shop-list1.webp',
						title: '贝磁磁力建构5-6岁儿童智力拓展积木36...',
						priceNow: '3000',
						priceLast: '298元'
					},
					{
						src: '../../../../static/mine/shop-list4.webp',
						title: 'Hanvon汉王出头鸟儿智能遥控玩具',
						priceNow: '2700',
						priceLast: '230元'
					},
					{
						src: '../../../../static/mine/shop-list3.webp',
						title: '博客苏儿童玩具收纳箱',
						priceNow: '1000',
						priceLast: '68元'
					},
					
				]
			}
		},
		methods: {
			goBack() {
				uni.navigateBack()
			},
			sortHandle(val) {
				if(val) {
					this.activeIndex = '2'
					this.shopList = [].concat(this.sortData)
				}else {
					this.activeIndex = '1'
					this.shopList = [].concat(this.defaultData)
				}
			}
		},
		mounted() {
			this.shopList = [].concat(this.defaultData)
		}
	}
</script>

<style lang="scss" scoped>
page {
	overflow-y: auto;
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
.font-20 {
	font-size: 40rpx;
}
.right-icon {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-right: 60rpx;
}
.filter-label {
	display: flex;
	justify-content: center;
	.left {
		width: 50%;
		display: flex;
		justify-content: center;
		padding: 40rpx 0;
		.left-label {
			width: 100%;
			border-right: 2rpx solid #bac8e8;
			text-align: center;
		}
	}
	.right {
		width: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 40rpx 0;
	}
	.active {
		color: #206CFE;
	}
}
.shop-content {
	padding: 0 22rpx;
	display: flex;
	flex-wrap: wrap;
	.view-item:nth-child(odd) {
		margin-right: 22rpx;
	}
	.view-item {
		border-radius: 16px;
		box-shadow: 0px 0px 20px 0px rgba(26,33,73,0.05);
		margin-bottom: 30rpx;
		width: calc(50% - 12rpx);
		text-align: center;
		.img-list {
			width: 220rpx;
			height: 262rpx;
			padding: 32rpx 58rpx 44rpx 54rpx;
		}
		.grid-text {
			text-align: left;
			font-size: 30rpx;
			padding: 0 20rpx;
			height: 80rpx;
		}
		.price {
			padding: 0 20rpx;
			font-size: 24rpx;
			display: flex;
			align-items: center;
			.line-first {
				color: #FF0000;
				margin: 26rpx 14rpx 24rpx 14rpx;
			}
			.line-second {
				color: #C8C8C8;
				text-decoration: line-through;
			}
		}
	}
	
}

</style>
