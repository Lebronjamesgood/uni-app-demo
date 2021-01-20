<template>
	<view class="container">
		<view class="content-area">
			<view class="content">
				<view class="title">服务描述</view>
				<view class="right"><u-input v-model="value1" placeholder-style="text-align:right" placeholder="请输入" /></view>
			</view>
			<view class="content">
				<view class="title">服务流程</view>
				<view class="right"><u-input v-model="value2" placeholder-style="text-align:right" placeholder="请输入" /></view>
			</view>
			<view class="content">
				<view class="title">温馨提示</view>
				<view class="right"><u-input v-model="value3" placeholder-style="text-align:right" placeholder="请输入" /></view>
			</view>
		</view>
		<view class="content-area">
			<view class="upload-item">
				<view class="title">添加图片</view>
				<u-upload :custom-btn="true" width="180" height="180" :action="action" :file-list="fileList" max-count="5">
					<view slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150"><u-icon name="camera-fill" size="70" color="#e3e5e8"></u-icon></view>
				</u-upload>
			</view>
		</view>
		<view class="btn-services"><u-button class="publish-services" @click="goPath(value1, value2, value3)">保存</u-button></view>
	</view>
</template>

<script>
import data from '../../../../data.js';
export default {
	components: {},
	data() {
		return {
			value1: '',
			value2: '',
			value3: '',
			action: '',
			fileList: []
		};
	},
	mounted() {
		this.categoryOption = data.businessCenter.myServices.categoryOption;
	},
	methods: {
		goPath(value1, value2, value3) {
			const value = value1 + value2 + value3;
			let describe = value === '' ? false : true;
			uni.navigateTo({
				url: '/pages/tabBar/enjoyLife/enjoyLifePages/businessCenter/myServices/personServices/publishServices?describe=' + describe
			});
		}
	}
};
</script>

<style lang="less" scoped>
.container {
	overflow-y: auto;
	height: 1090rpx;
	background-color: #f5f6f7;
}
.content-area {
	background: #ffffff;
	margin: 40rpx 30rpx 8rpx;
	border-radius: 20rpx;
	margin-top: 30rpx;
	padding: 0 30rpx;
	/deep/ .uni-input-input {
		text-align: right;
	}
}
.title {
	font-size: 30rpx;
	font-weight: 500;
	color: #333333;
	line-height: 84rpx;
}
.upload-item {
	padding: 10rpx 0 30rpx;
}
.content {
	line-height: 46rpx;
	font-size: 30rpx;
	padding: 8rpx 0rpx;
	font-weight: 550;
	color: #333333;
	border-bottom: 1px solid #f2f2f2;
	display: flex;
	justify-content: space-between;
}
.content-range {
	border: none;
	padding: 37rpx 0rpx 27rpx;
}
.right {
	color: #999999;
	font-weight: 400;
}
.slot-btn {
	width: 180rpx;
	height: 180rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	background: rgb(244, 245, 246);
	border-radius: 8rpx;
	margin: 0rpx 0 10rpx;
}
.slot-btn__hover {
	background-color: rgb(235, 236, 238);
}
.u-input {
	margin: 5rpx 0 10rpx;
}
/deep/ .u-btn {
	width: 690rpx;
	height: 88rpx;
	background: #206cfe;
	border-radius: 44rpx;
	position: fixed;
	bottom: 20rpx;
	left: 30rpx;
	right: 30rpx;
	color: #ffffff;
}
.btn-services {
	background-color: #ffffff;
	width: 100%;
	height: 128rpx;
	z-index: 999;
	position: fixed;
	bottom: 0;
}
</style>
