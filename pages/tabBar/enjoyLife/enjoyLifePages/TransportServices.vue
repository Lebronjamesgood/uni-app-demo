<template>
	<view>
		<nav-bar :isBack="true" title="交通服务" searchMargin="0 0 0 32rpx"></nav-bar>
		<view class="container"><district :districtList="listtransport" :heightSize="104" :widthSize="104"></district></view>
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
			listtransport: []
		};
	},
	mounted() {
		this.listtransport = data.TransportServices.listtransport;
	},
	methods: {}
};
</script>
<style lang="less" scoped>
.container {
	padding: 30rpx;
}
</style>
