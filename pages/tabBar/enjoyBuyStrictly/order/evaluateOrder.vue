<template>
	<view class="evaluate-page">
		<view class="input-wrap">
			<view class="input-title">
				<text>商品评价</text>
				<u-rate :count="count" size="40" v-model="value"></u-rate>
			</view>
			<view class="input-text">
				<u-input v-model="textValue" placeholder="感觉怎么样,和大家分享一下吧~" type="textarea" />
				<view class="input-account">
					<text>已写</text>
					<text class="txt">{{ textValue.length }}</text>
					<text>个字</text>
				</view>
			</view>
			<view class="anonymous">
				<u-radio-group v-model="radioValue" shape="square"><u-radio :label-disabled="false" icon-size="10" label-size="20">匿名评价</u-radio></u-radio-group>
			</view>
		</view>
		<view class="btn"><u-button type="primary" @click="btn" shape="circle">提交评论</u-button></view>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
export default {
	data() {
		return {
			count: 5,
			value: 2,
			radioValue:"",
			account: 0,
			textValue: '',
			isBack: false
		};
	},
	methods: {
		btn() {
			if (this.textValue == '') {
				this.$refs.uToast.show({
					title: '请输入评价内容',
					type: 'erro'
				});
			} else {
				this.$refs.uToast.show({
					title: '评价成功',
					type: 'success',
					back: true,
					duration: 1000
				});
			}
		}
	}
};
</script>

<style lang="less">
page {
	background-color: #f5f6f7;
	position: relative;
}
.btn {
	position: absolute;
	bottom: 30rpx;
	width: 92%;
	margin: 30rpx;
	.u-btn--primary {
		background-color: #206cfe;
		border-color: #206cfe;
	}
}
.input-wrap {
	margin: 30rpx;
	background: #ffffff;
	border-radius: 10px;
	box-shadow: 0px 0px 6px 0px rgba(60, 61, 68, 0.09);
	padding: 30rpx;
	.input-title {
		padding: 10rpx 0;
		border-bottom: 1px solid #f2f2f2;
		padding-bottom: 20rpx;
		text {
			font-size: 32rpx;
			color: #333333;
			margin-right: 46rpx;
		}
	}
	.input-text {
		.input-account {
			text-align: right;
			.txt {
				color: #ff3b30;
			}
			text {
				font-size: 24rpx;
			}
		}
		/deep/ .u-input__textarea {
			height: 352rpx !important;
			padding-top: 20rpx;
		}
	}
}
</style>
