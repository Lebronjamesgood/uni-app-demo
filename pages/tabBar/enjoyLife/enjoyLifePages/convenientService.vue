<template>
	<view>
		<nav-bar :isBack="true" title="便民服务" searchMargin="0 0 0 32rpx"></nav-bar>
		<view class="container"><district :districtList="list" :heightSize="104" :widthSize="104"></district></view>
	</view>
</template>

<script>
import data from '../data.js';
import district from '../components/district.vue';
export default {
	components: {
		district
	},
	data() {
		return {
			list: []
		};
	},
	mounted() {
		this.list = data.convenientService.list;
	},
	methods: {}
};
</script>

<style lang="less" scoped>
.container {
	padding: 30rpx;
}
</style>
