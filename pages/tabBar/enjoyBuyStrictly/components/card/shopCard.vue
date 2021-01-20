<template>
	<view class="shopCard">
		<view class="shopCard-title">
			<u-image src="../../../../../static/enjoyBuyStrictly/svg/littleshop.svg" mode="scaleToFill" style="width:16px;height:16px;"></u-image>
			<text>{{shopData.title}}</text>
			<view class="circle">
				<u-image src="../../../../../static/enjoyBuyStrictly/svg/focus.svg" mode="scaleToFill" style="width:16px;height:16px;"></u-image>
				<text>关注</text>
			</view>
		</view>
		<view class="shopCard-content">
			<card v-for="(i,index) in shopData.goodsList" little :key="index" :goods="i"></card>
		</view>
	</view>
</template>

<script>
	import card from "./card.vue"
	export default {
		components:{
			card
		},
		props: {
			shopData: {
				require: true,
			}
		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.shopCard {
		background: #ffffff;
		border-radius: 10px;
		box-shadow: 0px 2px 15px 0px rgba(26,33,73,0.09); 
		padding-top: 15px;
		.price {
			font-weight: 400;
			color: #ff3b30;
			font-family: SourceHanSansCN, SourceHanSansCN-Regular;
			margin: 0 15px 12px 15px;
		}

		.goods-name {
			font-weight: 550;
			color: #333333;
			margin: 12px 15px;
		}
		.circle{
			width: 60px;
			height: 24px;
			background: #ffffff;
			border: 1px solid #ff3b30;
			border-radius: 12px;
			display: flex;
			color: #ff3b30;
			text-align: center;
			padding: 3px 5px;
			align-items: center;
			uni-text{
				font-size: 14px;
			}
		}
		.shopCard-title{
			display: flex;
			justify-content: space-between;
			position: relative;
			align-items: center;
			>uni-text:nth-child(2){
				margin-left: 35px;
				font-weight: 550;
			}
			>.u-image{
				position: absolute;
			}
		}
		.shopCard-content{
			display: flex;
			margin-top: 15px;
		}
	}
</style>
