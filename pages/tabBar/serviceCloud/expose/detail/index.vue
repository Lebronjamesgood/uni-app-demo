<template>
	<view class="container">
		<view class="content">
			<!-- <u-navbar :is-back="isBack" :title="title" :titleSize="36"></u-navbar> -->
			<Detail :detail="detail" :isExpose="true" from="曝光台" :evaluateValue="evaluateValue" :isSubmit="isSubmit"></Detail>
		</view>
	</view>
</template>

<script>
	import Detail from '../../components/detail.vue'
	export default {
		components: {
		   Detail
		},
		props: {},
		data() {
			return {
				// 标题
				isBack: true,
				messageList: [],
				list: [],
				title: '详情',
				detail: {},
				evaluateValue: -1,
				isSubmit: false
			};
		},
		onLoad(options) {
			this.detail = JSON.parse(options.item)
		},
		methods: {
		}
	}
</script>

<style lang="less" scoped>
	.content {
		padding: 30rpx;
		background-color: #F5F6F7;
	}
</style>
