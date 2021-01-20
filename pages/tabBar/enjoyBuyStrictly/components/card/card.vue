<template>
	<view class="goodsCard" :style="{ border: !little ? '' : 'none', 'box-shadow': !little ? '' : 'none' }">
		<u-image :src="goods.url" mode="scaleToFill" :style="{ width: !little ? '232px' : '106px', height: !little ? '140px' : '80px' }"></u-image>
		<view class="goods-name" :class="{ 'word-break': little }" :style="{ width: !little ? '202px' : '106px'}">
			<text>{{ goods.name }}</text>
		</view>
		<view class="price" :style="{ 'text-align': !little ? 'left' : 'center' }">
			<text :style="{ 'font-size': !little ? '10px' : '1px' }">¥</text>
			<text style="font-size:18px;margin-left: 4px;">{{ goods.price }}</text>
			<text :class="{ line: little }" style="color: #ccc;text-decoration:line-through;font-size:12px;margin-left: 10px;">¥{{ goods.sincePrice }}</text>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		goods: {
			require: false,
			default: () => {
				return
					{
						// url: require("../../../../../static/enjoyBuyStrictly/png/rose.jpg"),
						// name: "魔法小玫瑰花茶",
						// price: "9.90",
						// sincePrice: "15.90"
					}

			}
		},
		little:{
			default:false
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
.goodsCard {
	text-align: left;
	margin: 2px;
	border-top-left-radius:5px;
	border-top-right-radius:5px;
	box-shadow: 0px 1px 2px 0px rgba(60, 61, 68, 0.09);
	background: #ffffff;

	/deep/ .u-image__image {
		border-radius: 6px !important;
	}
	.price {
		font-weight: 550;
		color: #ff3b30;
		font-family: SourceHanSansCN, SourceHanSansCN-Regular;
		margin: 0 15px 12px 15px;
	}
	.word-break {
		word-wrap: break-word;
		word-break: break-all;
		width: 100px;
		margin: 2px !important;
	}
	.goods-name {
		width: 96%;
		font-weight: 550;
		color: #333333;
		margin: 12px 15px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		text-align: center;
	}
	.line {
		display: block;
		margin-left: 0 !important;
	}
}
</style>
