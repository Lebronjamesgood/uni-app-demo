<template>
	<view class="ticket-comp">
		<u-search placeholder="输入查询内容" v-model="keyword"></u-search>
		<view class="place-list" v-for="(item, index) in dataList" :key="index" @click="link('/pages/tabBar/enjoyBuyStrictly/scenicSpotsTicket/tickets/placeDetail')">
			<view class="left">
				<image :src="item.imgSrc" mode=""></image>
			</view>
			<view class="right">
				<view class="top">
					<text class="font-17">{{item.placeName}}</text>
				</view>
				<view class="content">
					<text class="font-13">{{item.pointer}}</text>
					<text class="font-13">丨</text>
					<text class="font-13">{{item.remarks}}</text>
				</view>
				<view class="bottom">
					<image src="../../../../../static/enjoyBuyStrictly/png/position.png" mode=""></image>
					<text class="font-13">{{item.distance}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				keyword: '',
				dataList: [
					{
						imgSrc: '../../../../../static/enjoyBuyStrictly/png/place-img1.png',
						placeName: '万寿宫·遐昌阁',
						pointer: '78人点赞',
						remarks: '0条评论',
						distance: '距我20.0公里'
					},
					{
						imgSrc: '../../../../../static/enjoyBuyStrictly/png/place-img2.png',
						placeName: '勾良苗寨',
						pointer: '15人点赞',
						remarks: '0条评论',
						distance: '距我25.0公里'
					},
					{
						imgSrc: '../../../../../static/enjoyBuyStrictly/png/place-img3.png',
						placeName: '飞水谷',
						pointer: '20人点赞',
						remarks: '0条评论',
						distance: '距我18.0公里'
					},
					{
						imgSrc: '../../../../../static/enjoyBuyStrictly/png/place-img4.png',
						placeName: '老家寨',
						pointer: '102人点赞',
						remarks: '0条评论',
						distance: '距我10.0公里'
					},
					{
						imgSrc: '../../../../../static/enjoyBuyStrictly/png/place-img5.png',
						placeName: '奇梁洞',
						pointer: '33人点赞',
						remarks: '0条评论',
						distance: '距我30.0公里'
					},
					{
						imgSrc: '../../../../../static/enjoyBuyStrictly/png/place-img2.png',
						placeName: '沈从文故居',
						pointer: '47人点赞',
						remarks: '0条评论',
						distance: '距我13.0公里'
					}
				]
			}
		},
		methods: {
			link(url){
				uni.navigateTo({
					url:url
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
page {
	overflow-y: auto;
}
/deep/.u-action {
	margin-left: 30rpx;
	font-size: 30rpx;
}
.font-13 {
	font-size: 26rpx;
}
.font-17 {
	font-size: 34rpx;
}
.ticket-comp {
	padding: 24rpx 30rpx 0;
	.place-list {
		margin: 30rpx 0;
		display: flex;
		justify-content: flex-start;
		.left {
			margin-right: 24rpx;
			image {
				width:240rpx;
				height: 180rpx;
			}
		}
		.right {
			.top {
				color: #262626;
				margin-bottom: 30rpx;
			}
			.content {
				color: #666666;
				margin-bottom: 30rpx;
			}
			.bottom {
				color: #666666;
				image {
					width: 30rpx;
					height: 32rpx;
					vertical-align: middle;
				}
			}
		}
	}
}

</style>
