<template>
	<view>
		<view class="page-body">
			<view class="page-section page-section-gap"><map style="width: 100%; height: 100vh;" :latitude="latitude" :longitude="longitude" :markers="covers"></map></view>
		</view>
	</view>
</template>

<script>
export default {
	components: {},
	data() {
		return {
			id: 0, // 使用 marker点击事件 需要填写id
			title: 'map',
			latitude: 34.27,
			longitude: 108.95,
			covers: [
				{
					latitude: 34.27,
					longitude: 108.95,
					iconPath: '../../../../../../../static/app-plus/location@3x.png'
				},
				{
					latitude: 32.3,
					longitude: 108.89,
					iconPath: '../../../../../../../static/app-plus/location@3x.png'
				}
			]
		};
	},
	mounted() {},
	methods: {}
};
</script>

<style lang="less" scoped></style>
