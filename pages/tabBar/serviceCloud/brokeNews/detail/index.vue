<template>
	<view class="container">
		<view class="content">
			<!-- <u-navbar :is-back="isBack" :title="title" :titleSize="36"></u-navbar> -->
			<Detail :detail="detail" :isExpose="false" from="爆料" :evaluateValue="evaluateValue" :isSubmit="isSubmit"></Detail>
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
				title: '爆料详情',
				detail: {},
				evaluateValue: -1,
				isSubmit: false
			};
		},
		onShow() {
			//是否点赞
			this.isThumb = this.detail.handled.isThumb
			uni.$on("evaluateValueEvent", res => {
				this.evaluateValue = res.params.evaluateValue
				this.isSubmit = res.params.isSubmit
				console.log(this.evaluateValue)
			    // 清除监听
			    uni.$off('evaluateValueEvent');
			})
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
		height: 100vh;
	}
	.u-title {
		font-size: 36rpx;
		color: #333333;
		font-weight: 500;
		line-height: 54rpx;
	}
	/deep/.uicon-nav-back:before {
		color: #333333;
	}
</style>
