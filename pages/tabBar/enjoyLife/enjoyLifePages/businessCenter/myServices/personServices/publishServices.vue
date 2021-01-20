<template>
	<view class="container">
		<view class="content-area">
			<view class="content">
				<view class="title">服务类别</view>
				<view class="right" @click="categoryShow = true">
					{{ category }}
					<u-icon name="arrow-right" size="15" color="#C3CBCF"></u-icon>
				</view>
			</view>
			<view class="upload-item">
				<view class="title">标题</view>
				<u-input v-model="value" type="text" placeholder="请清晰准确描述您提供的服务" placeholder-style="color:#999999;font-size: 30rpx;font-weight:400;" maxlength="20" />
				<u-upload :custom-btn="true" width="180" height="180" :action="action" :file-list="fileList" max-count="5">
					<view slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150"><u-icon name="camera-fill" size="70" color="#e3e5e8"></u-icon></view>
				</u-upload>
			</view>
		</view>
		<u-select v-model="categoryShow" mode="mutil-column-auto" :list="categoryOption" @confirm="confirm"></u-select>
		<view class="content-area">
			<view class="content">
				<view class="title">服务描述</view>
				<view class="right" @click="goPath('/pages/tabBar/enjoyLife/enjoyLifePages/businessCenter/myServices/personServices/servicesEdit')">
					{{ describe }}
					<u-icon name="arrow-right" size="15" color="#C3CBCF"></u-icon>
				</view>
			</view>
			<view class="content">
				<view class="title">
					服务收费
					<span>到店自取</span>
				</view>
				<view class="right" @click="goPath('/pages/tabBar/enjoyLife/enjoyLifePages/businessCenter/myServices/personServices/servicesCharge')">
					已编辑
					<u-icon name="arrow-right" size="15" color="#C3CBCF"></u-icon>
				</view>
			</view>
			<view class="content">
				<view class="title">接单类型</view>
				<view class="right" @click="goPath('/pages/tabBar/enjoyLife/enjoyLifePages/businessCenter/myServices/personServices/orderType')">
					已编辑
					<u-icon name="arrow-right" size="15" color="#C3CBCF"></u-icon>
				</view>
			</view>
			<view class="content content-range">
				<view class="title">服务范围</view>
				<view class="right" @click="goPath('/pages/tabBar/enjoyLife/enjoyLifePages/businessCenter/myServices/personServices/servicesRange')">
					<u-icon name="map-fill" size="30" color="#206CFE"></u-icon>
				</view>
			</view>
		</view>

		<view class="agreement">
			<span style="color:#FF3B30;margin-left: 30rpx;">*</span>
			点击发布代表您已经阅读并同意《
			<span>平台用户服务协议</span>
			》
		</view>
		<view class="btn-services"><u-button class="publish-services" @click="show = true">确认发布</u-button></view>
		<u-popup v-model="show" mode="center" length="86%" border-radius="12">
			<view class="introPopup">
				<image src="../../../../../../../static/enjoyLife/published.svg" mode=""></image>
				<p>已提交，待上架</p>
				<p style="color: #999999;font-weight: 400;font-size:28rpx">我们会在一个工作日内完成审核</p>
			</view>
		</u-popup>
	</view>
</template>

<script>
import data from '../../../../data.js';
export default {
	components: {},
	data() {
		return {
			value: '',
			action: '',
			fileList: [],
			category: '请选择',
			categoryShow: false,
			categoryOption: [],
			describe: '未编辑',
			show: false
		};
	},
	onLoad: function(option) {
		if (option.describe === undefined || option.describe === 'false') {
			this.describe = '未编辑';
		} else {
			this.describe = '已编辑';
		}
	},
	mounted() {
		this.categoryOption = data.businessCenter.myServices.categoryOption;
	},
	methods: {
		goPath(path) {
			uni.navigateTo({
				url: path
			});
		},
		confirm(e) {
			if (e[1].label === '暂无服务') {
				this.category = '请选择';
			} else {
				this.category = e[0].label + '-' + e[1].label;
			}
		}
	}
};
</script>

<style lang="less" scoped>
.container {
	background-color: #f5f6f7;
	overflow-y: auto;
	height: 100%;
}
.content-area {
	background: #ffffff;
	margin: 40rpx 30rpx 8rpx;
	border-radius: 20rpx;
	margin-top: 30rpx;
	padding: 0 30rpx;
}
.title {
	font-size: 30rpx;
	font-weight: 500;
	color: #333333;
	line-height: 46rpx;
}
.upload-item {
	margin-top: 30rpx;
	padding-bottom: 30rpx;
}
.content {
	line-height: 46rpx;
	font-size: 30rpx;
	padding: 30rpx 0rpx 20rpx;
	font-weight: 550;
	color: #333333;
	border-bottom: 1px solid #f2f2f2;
	display: flex;
	justify-content: space-between;
	span {
		color: #199ed8;
		margin-left: 20rpx;
		font-weight: 400;
		border: 1rpx solid #199ed8;
		padding: 2rpx 5rpx;
		font-size: 24rpx;
	}
}
.content-range {
	border: none;
	padding: 37rpx 0rpx 27rpx;
}
.right {
	color: #999999;
	font-weight: 400;
}
.u-icon {
	margin-left: 12rpx;
}
.slot-btn {
	width: 180rpx;
	height: 180rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	background: rgb(244, 245, 246);
	border-radius: 8rpx;
	margin-bottom: 10rpx;
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
.agreement {
	margin: 30rpx;
	font-size: 24rpx;
	color: #777777;
	span {
		color: #206cfe;
	}
}
.btn-services {
	background-color: #ffffff;
	width: 100%;
	height: 128rpx;
	z-index: 999;
	position: fixed;
	bottom: 0;
}
.introPopup {
	padding: 120rpx 0;
	line-height: 64rpx;
	text-align: center;
	color: #333333;
	font-size: 36rpx;
	font-weight: 500;
	image {
		width: 80rpx;
		height: 80rpx;
	}
}
</style>
