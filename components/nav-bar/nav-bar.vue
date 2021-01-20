<template>
	<view class="header">
		<u-navbar :is-back="isBack" back-icon-color="#333333">
			<text class="title">{{ title }}</text>
			<u-search
				v-model="keyword"
				height="64"
				bg-color="#F6F7F9"
				search-icon-color="#C0C0C0"
				placeholder-color="#C0C0C0"
				:margin="searchMargin"
				:showAction="showAction"
				@focus="goPath('/pages/common/homeSearch')"
			></u-search>
			<view class="navbar-right" slot="right" v-if="rightMsg">
				<view class="right-item" @click="enterService"><image src="../../static/nav-icon/customer-service.svg"></image></view>
				<view class="right-item" v-if="shoppingCart"><image src="../../static/nav-icon/goods-car.svg"></image></view>
				<view class="right-item" @click="toggleMessageBox"><image src="../../static/nav-icon/nav-more.svg"></image></view>
			</view>
		</u-navbar>
		<view class="messageBox" v-show="showMessageBox" v-if="rightMsg">
			<view class="cell" v-for="(item, index) of messageList" :key="index" @click="goPath(item.path)">
				<image :src="item.icon"></image>
				<text>{{ item.name }}</text>
			</view>
		</view>
		<view class="mask" v-show="showMessageBox" @click="toggleMessageBox" v-if="rightMsg"></view>
	</view>
</template>

<script>
export default {
	props: {
		isBack: {
			type: Boolean,
			required: true,
			default: () => false
		}, //是否带返回
		title: {
			type: String,
			required: true,
			default: () => ''
		},
		messageList: {
			type: Array,
			default: () => []
		}, //下拉框列表
		rightMsg: {
			type: Boolean,
			default: () => false
		}, //右侧控件
		showAction: {
			type: Boolean,
			default: () => false
		}, //搜索框右侧的"搜索"按钮
		searchMargin: {
			type: String,
			default: () => '0 0 0 20rpx'
		}, //搜索框与其他上下左右元素之间的距离
		shoppingCart: {
			type: Boolean,
			default: () => false
		} //购物车图标
	},
	data() {
		return {
			keyword: '',
			showMessageBox: false
		};
	},
	methods: {
		toggleMessageBox() {
			this.showMessageBox = !this.showMessageBox;
		},
		goPath(path) {
			if (path) {
				uni.navigateTo({
					url: path
				});
			} else {
				uni.showToast({
					title: '暂未开发,敬请期待……',
					icon: 'none'
				});
			}
		},
		enterService() {
			// 进入智能客服页面
			uni.navigateTo({
				url: '/components/customer-service/index'
			});
		}
	}
};
</script>

<style lang="less" scoped>
.header {
	padding-left: 20rpx;
	padding-right: 20rpx;
	/deep/.u-navbar-fixed {
		padding-left: 30rpx;
		padding-right: 30rpx;
	}
	/deep/ .u-content {
		padding: 0 30rpx;
	}
	z-index: 999;
}
.title {
	font-size: 36rpx;
	color: #262626;
	font-weight: 500;
	line-height: 54rpx;
}
/deep/ .u-back-wrap {
	padding-left: 0;
	padding-right: 20rpx;
}
.navbar-right {
	display: flex;
}
.right-item {
	margin-left: 30rpx;
	position: relative;
	color: #ffffff;
	display: flex;
	width: 50rpx;
	height: 50rpx;
	uni-image {
		width: 48rpx;
		height: 48rpx;
	}
}
.messageBox {
	width: 250rpx;
	height: auto;
	position: fixed;
	right: 20rpx;
	border-radius: 4px;
	box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
	z-index: 1000;
	background: #ffffff;
	padding: 0 30rpx 30rpx;
}
.cell {
	margin-top: 38rpx;
	display: flex;
	align-items: center;
	text {
		color: #333333;
		font-size: 30rpx;
	}
	image {
		width: 40rpx;
		height: 40rpx;
		margin-right: 20rpx;
	}
}
/deep/.u-cell-item-box {
	background-color: transparent;
}
.mask {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	width: 100%;
	top: 0;
	background: rgba(0, 0, 0, 0.4);
	z-index: 90;
}
</style>
