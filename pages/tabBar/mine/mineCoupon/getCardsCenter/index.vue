<template>
	<view>
		<view v-if="cardList.length">
			<view class="new-cards" v-for="(item, index) in cardList" :key="index">
				<view class="left">
					<view class="mgin-bot" style="color: #FF3B30;">
						<text class="font-15">￥</text>
						<text  class="font-36">{{item.number}}</text>
						<text class="font-15">{{item.message}}</text>
					</view>
					<view style="color: #FC5647;" class="mgin-bot">
						<text class="font-12">{{item.timeRange}}</text>
					</view>
					<view style="color: #FC5647;" class="mgin-bot">
						<text class="font-12">{{item.cardType}}</text>
					</view>
				</view>
				<view class="right">
					<view class="" style="margin-bottom: 10rpx;">
						<text class="font-11" style="color: #FC5647;">{{item.restCard}}</text>
					</view>
					<view class="" style="margin-bottom: 45rpx;">
						<u-button :custom-style="customStyle" type="error" shape="circle" @click="receveCardHandle(item.id)">领取</u-button>
					</view>
					<view class="">
						<text class="font-11" style="color: #FB4E44;">每人限领一张</text>
					</view>
				</view>
			</view>
		</view>
		
		<view class="emptyBox" v-else>
			<image src="../../../../../static/mine/empty-card.png" mode=""></image>
			<view class="">
				<text>抱歉，代金券已经全部领完了~</text>
			</view>
		</view>
		
		<u-modal v-model="gettedCardsshow" 
				width="640" 
				show-confirm-button 
				show-cancel-button 
				:show-title="false"
				confirm-text="去使用"
				content="恭喜您领取成功~"
				:content-style="contentStyle"
				:cancel-style="cancleStyle"
				@confirm="confirmHandle"
				></u-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				gettedCardsshow: false,
				customStyle: {
						background: '#ff3b30',
						width: '176rpx'
				},
				contentStyle: {
					'font-size': '36rpx',
					color: '#333333',
					margin: '27rpx 0'
				},
				cancleStyle: {
					color: '#999999'
				},
				cardList: [
					{
						id: 1,
						number: 30,
						message: '满300减30',
						timeRange: '2020.08.01~2021.06.01内有效',
						cardType: '万寿宫·遐昌阁代金券',
						restCard: '剩余181张'
					},
					{
						id: 2,
						number: 10,
						message: '满100减10',
						timeRange: '2020.08.01~2021.06.01内有效',
						cardType: '飞水谷',
						restCard: '剩余221张'
					},
				]
			}
		},
		methods: {
			receveCardHandle(id) {
				this.cardList = this.cardList.filter(item => item.id != id)
				this.gettedCardsshow = true
			},
			confirmHandle() {
				uni.navigateTo({
					url:'../index'
				})
			}
		}
	}
</script>

<style lang="scss" scope>
page {
	overflow-y: auto;
}
.font-11 {
	font-size: 22rpx;
}
.font-12 {
	font-size: 24rpx;
}
.font-15 {
	font-size: 30rpx;
}
.font-36 {
	font-size: 72rpx;
}
.mgin-bot {
	margin-bottom: 20rpx;
}
.new-cards {
	margin: 30rpx;
	display: flex;
	justify-content: space-between;
	padding: 34rpx;
	background: url(../../../../../static/mine/new-cards-bg.png) no-repeat;
	background-size: 100% 100%;
	.left {
		float: left;
		padding: 6rpx;
	}
	.right {
		float: right;
		padding: 0rpx 13rpx;
		text-align: center;
	}
}
.emptyBox {
	padding: 230rpx 30rpx 0;
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
