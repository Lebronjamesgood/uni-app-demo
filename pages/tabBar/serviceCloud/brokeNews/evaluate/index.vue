<template>
	<view class="evaluate-container">
		<!-- <u-navbar :is-back="isBack" :title="title" :titleSize="36"></u-navbar> -->
		<!-- 评价 s -->
		<view class="evaluate">
			<text class="tip">您对爆料结果满意吗?</text>
			<text class="min-tip">请为本次处理结果评分</text>
			<view class="slot-content">
				<view class="flower">
					<image v-for="(item,index) in evalutList" :key="item.id" :src="activeIndex >= index ? item.activeImage : item.imageUrl" class="evaluate-img" @click="clickFlower(item.sorce,index)"></image>
				</view>
				<text class="rate">{{ evaluateValue === 0 ? '非常不满意' : evaluateValue === 1 ? '不满意' : evaluateValue === 2 ? '比较满意': evaluateValue === 3 ? '满意' :evaluateValue === 4 ? '非常满意，无可挑剔': '' }} </text>
			</view>
			<u-line color="#F2F2F2" class="line"/>
			<u-form :model="form" ref="uForm">
				<u-form-item label="" prop="content">
					<textarea v-model="form.content" @input="mouseup(form.content)"   placeholder="说出您的评价，将是我们前进的动力…" auto-height maxlength="500"  type="textarea"  :data-maxnum="'已填写'+form.content.length+'字'"/>
				</u-form-item>
				<view class="count-box">
					<view class="tip-word">已填写<text>{{count}}</text>字</view>
				</view>
				<view class="commit"><button type="primary" @click="evaluateValueEvent">提交</button></view>
			</u-form>	
		</view>
		<!-- 评价 e -->
		<u-toast ref="uToast"></u-toast>
	</view>
</template>

<script>
	export default {
		props: {
		},
		data() {
			return {
				evalutList:[
					{imageUrl: require('../../../../../static/serviceCloud/badFlower.svg'), sorce: 0,activeImage: require('../../../../../static/serviceCloud/goodFlower.svg')},
					{imageUrl: require('../../../../../static/serviceCloud/badFlower.svg'), sorce: 1,activeImage: require('../../../../../static/serviceCloud/goodFlower.svg')},
					{imageUrl: require('../../../../../static/serviceCloud/badFlower.svg'), sorce: 2,activeImage: require('../../../../../static/serviceCloud/goodFlower.svg')},
					{imageUrl: require('../../../../../static/serviceCloud/badFlower.svg'), sorce: 3,activeImage: require('../../../../../static/serviceCloud/goodFlower.svg')},
					{imageUrl: require('../../../../../static/serviceCloud/badFlower.svg'), sorce: 4,activeImage: require('../../../../../static/serviceCloud/goodFlower.svg')},
				],
				activeIndex:null,
				modelShow: false,
				evaluateValue: 0,
				form: {
					content: ''
				},
				// 标题
				isBack: true,
				title: '评价',
				count: 0,
				isSubmit: false
			};
		},
		onShow() {
			this.isSubmit = false
		},
		methods: {
			mouseup(value) {
				this.count = value.length
			},
			clickFlower (value,index) {
				this.evaluateValue = value
				this.activeIndex = index
			},
			evaluateValueEvent() {
				this.$refs.uToast.show({
					title:'已评价',
					type: 'success'
				});
				this.isSubmit = true
				uni.navigateBack({
					delta: 1
				});
				uni.$emit("evaluateValueEvent",{
					'params': {
						'evaluateValue': this.evaluateValue,
						'isSubmit': this.isSubmit
					}
				});
			},
			initData() {
				this.form.content = ''
				this.activeIndex=null
				this.evaluateValue= 0
			}
		}
	}
</script>

<style lang="less" scoped>
	 .evaluate-container {
		 padding: 30rpx;
		 background-color: #F5F6F7;
		 height: 100vh;
	 }
	.evaluate {
		width: 690rpx;
		background-color: #FFFFFF;
		border-radius: 20rpx;
		padding: 18rpx 30rpx;
		.line {
			margin-top: 48rpx !important;
			margin-bottom: 40rpx !important;
		}
		.tip {
			display: block;
		    width: 100%;
		    font-size: 32rpx;
		    color: #333333;
		    font-weight: 500;
			text-align: center;
			font-family: SourceHanSansCN, SourceHanSansCN-Normal;
			margin-top: 30rpx;
			margin-bottom: 30rpx;
			letter-spacing: 1px;
		}
		.min-tip {
			font-size:28rpx;
			color: #999999;
			font-family: SourceHanSansCN, SourceHanSansCN-Normal;
			display: block;
			width: 100%;
			text-align: center;
			text-indent: -8px;
		}
		.slot-content {
			display: flex;
			justify-content: center;
			align-items: center;
			// height: 160rpx;
			margin-top: 48rpx;
			display: flex;
			flex-direction: column;
			.evaluate-img {
				width:40rpx ;
				height: 40rpx;
				margin-right: 28rpx;
			}
			.evaluate-img:last-child {
				margin-right: 0px;
			}
			.flower {
				margin-bottom: 20rpx;
			}
			.rate {
				color: #FFBE1B;
				font-size: 28rpx;
			    font-family: SourceHanSansCN, SourceHanSansCN-Normal;
			}
		}
		/deep/uni-textarea {
			min-height: 133px;
			width: 100%;
		}
		/deep/.uni-textarea-placeholder {
			font-size: 30rpx;
			color: #B1B2B3;
			font-family: SourceHanSansCN, SourceHanSansCN-Normal;
		}
		/deep/.uni-textarea-textarea {
			font-size: 30rpx;
			font-family: SourceHanSansCN, SourceHanSansCN-Normal;
		}
		/deep/.u-border-bottom::after {
			border: none;
		}
	}
	.count-box{
		padding-bottom: 40rpx;
		.tip-word {
			color: #999999;
			font-size: 24rpx;
			text-align: right;
			uni-text {
				color: #FF3B30;
				margin-left: 4rpx;
				margin-right: 4rpx;
			}
		}
	}
	.commit{
		padding-bottom: 10rpx;
		position: fixed;
		bottom: 10px;
		left: 0px;
		right: 0px;
		background-color: #F5F6F7;
			button{
				width: 630rpx;
				height: 88rpx;
				// background: linear-gradient(90deg,#5ea8ff, #306ffe);
				background-color: #206CFE;
				border-radius: 44rpx;
				box-shadow: 0rpx 16rpx 32rpx 0rpx rgba(53,118,254,0.25);
				color: #FFFFFF;
				font-size: 32rpx;
				margin: 100rpx auto;
				margin-bottom: 0px;
			}
	}
</style>
