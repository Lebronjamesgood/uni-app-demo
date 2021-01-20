<template>
	<view class="district">
		<view v-for="(item, index) in districtList" :key="index" class="district-item">
			<view class="district-icon">
				<u-image :src="item.imgUrl" :height="heightSize" :width="widthSize" @tap="goPath(item.path)"></u-image>
				<span>{{ item.name }}</span>
			</view>
			<view class="arrow"><u-icon name="arrow-right" color="#C3CBCF" size="28"></u-icon></view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		districtList: {
			type: Array,
			required: true,
			default: () => []
		},
		heightSize: {
			type: Number,
			default: () => 100
		},
		widthSize: {
			type: Number,
			default: () => 100
		}
	},
	data() {
		return {};
	},
	methods: {
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
		}
	}
};
</script>

<style lang="less" scoped>
.district {
	.district-icon {
		display: flex;
		align-items: center;

		span {
			margin-left: 32rpx;
			font-size: 28rpx;
			color: #353535;
			font-weight: 500;
		}
	}
}
.district-item {
	display: flex;
	padding: 18rpx 30rpx;
	background: #ffffff;
	border-radius: 8px;
	box-shadow: 0px 0px 10px 0px rgba(41, 41, 41, 0.05);
	margin-bottom: 30rpx;
	align-items: center;
	justify-content: space-between;
}
</style>
