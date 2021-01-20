<template>
	<view class="subtitle">
		<u-cell-group>
			<u-cell-item :title="msg.left.name" :arrow="false" :value="msg.right.name" center @click="goPath(msg.url)">
				<image :src="src"  slot="right-icon"  class="icon right-icon" v-if="msg.right.hasIcon"></image>
			</u-cell-item>
		</u-cell-group>
	</view>
</template>

<script>
	export default {
		props: {
			msg: {
				type: Object,
				required: true,
				default: () => {}
			},
			title: {
				type: String,
				required: true,
				default: ''
			}
		},
		data() {
			return {
				src: require('../../../../static/serviceCloud/arrow.svg')
			}
		},
		methods: {
			goPath(name) {
				uni.navigateTo({
					url: name+'?title=' + this.title
				});
			}
		}
	}
</script>

<style lang="less" scoped>
	.subtitle {
		padding-left: 30rpx;
		padding-right: 30rpx;
		background-color: #FFFFFF;
		margin-top: 36rpx;
		margin-bottom: 12rpx;
		height: 40rpx;
		line-height: 54rpx;
		/deep/.u-cell__value {
			color: #36383A;
			font-size: 24rpx;
			font-family: SourceHanSansCN, SourceHanSansCN-Normal;
			line-height: 36rpx;
		}
		/deep/.u-cell_title {
			font-size: 36rpx;
			color: #333333;
			font-weight: 500;
			position: relative;
			font-family: SourceHanSansCN, SourceHanSansCN-Normal;
		}
		
		color: #36383A;
	}
	.icon {
		width: 6px;
		height: 10px;
		margin-left: 12rpx;
	}
	.right-icon {
	}
	.u-cell {
		padding: 0px;
	}
	/deep/.u-cell_title::before {
		background-color: #206CFE;
		display: block;
		position: absolute;
		left: -30rpx;
		content: '|';
		top: 4px;
		color: transparent;
		width: 3px;
		height: 36rpx;
	}
	/deep/.u-cell-hover {
		  background-color: #FFFFFF !important;
	}
</style>
