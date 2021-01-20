<template>
	<view class="goodsCard">
		<u-card :title="title" :sub-title="subTitle" :thumb="thumb">
				<view class="" slot="">
					
				</view>
		</u-card>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.goodsCard{
	width: 30%;
	text-align: left;
	padding: 10px;
	border: 1px solid #ccc;
	margin: 5px;
	border-radius: 5rpx;
}
</style>
