<template>
	<view>
		<nav-bar :isBack="true" title="公共服务" searchMargin="0 0 0 32rpx"></nav-bar>
	<view class="container">
		<u-tabs :list="list" :is-scroll="true" :current="current" @change="change"></u-tabs>
		<view class="content">
			<district :districtList="tabList" active-color="#206CFE" :heightSize="104" :widthSize="104"></district>
		</view>
		
	</view>
	</view>
</template>

<script>
import data from '../data.js';
import district from '../components/district.vue';
export default {
	components: {
		district
	},
	data() {
		return {
			publicService: [],
			list: [],
			current: 0,
			tabList: []
		};
	},
	mounted() {
		this.publicService = data.publicService;
		this.tabList = this.publicService[0].list;
		this.publicService.forEach((item, index) => {
			this.list.push({
				name: item.name
			});
		});
	},
	methods: {
		change(index) {
			this.current = index;
			this.tabList = this.publicService[index].list;
		}
	}
};
</script>

<style lang="less" scoped>
.container {
	padding:10rpx 30rpx;
	span {
		font-size: 36rpx;
		font-weight: 550;
		color: #333333;
		line-height: 54rpx;
	}
	.content{
		margin-top: 30rpx;
	}
}
</style>
