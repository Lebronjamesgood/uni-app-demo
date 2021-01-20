<template>
	<view class="district">
		<view v-for="(item, index) in districtList" :key="index" class="district-item">
			<view class="district-icon">
				<u-image :src="item.imgUrl" :height="heightSize" :width="widthSize" @tap="goPath(item.path)"></u-image>
			</view>
			<span>{{ item.name }}</span>
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
	methods:{
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
	display: flex;
	justify-content: flex-start;
	flex-flow: row wrap;
}
.district-item {
	width: 25%;
	text-align: center;
	margin-top: 25rpx;
}
.district-item span {
	color: rgba(0,0,0,0.7);
	font-size: 26rpx;
	font-weight: 500;
	line-height: 60rpx;
}
.u-image {
	margin: 0 auto;
}
</style>
