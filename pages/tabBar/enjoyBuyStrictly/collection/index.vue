<template>
	<view class="collection">
		<uni-nav-bar left-icon="back" @clickLeft="back" title="我的收藏" fixed="true"></uni-nav-bar>
		<view class="container">
			<u-search placeholder="请输入关键字" action-text="搜索" @input="filter()"></u-search>
			<sun-tab :value.sync="index" @change="objectChange" :tabList="tabObjectList" rangeKey="name"></sun-tab>
			<view class="content">
				<card v-for="item in 6" :key="item"></card>
			</view>
		</view>
	</view>
</template>

<script>
	import card from "../components/card/card.vue"
	export default{
		components:{card},
		data(){
			return{
				index: 0,
				tabObjectList: [
					{
						name: '收藏商品',
						value: 1
					},
					{
						name: '收藏商家',
						value: 2
					}
				],
			}	
		},
		methods:{
			back(){
				uni.navigateBack({
					
				})
			},
			filter(){
				
			},
			objectChange(){}
		}
		
	}
</script>

<style lang="scss" scoped>
	.collection{
		.container{
			padding: 20rpx;
		}
		.u-search{
			padding: 10px 0;
		}
	/deep/	.u-content ,/deep/ .u-input{
			background-color: #fff !important;
		}
	/deep/	.u-action-active{
			margin-left: -40px;
		}
		.content{
			background-color: #fff;
			border-radius: 5px;
			display: flex;
			flex-wrap: wrap;
		}
	}
</style>
