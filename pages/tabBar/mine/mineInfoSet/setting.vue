<template>
	<view class="setting">
		<u-cell-group>
			<u-cell-item title="账号与安全" :arrow="true" arrow-direction="right"></u-cell-item>
			<u-cell-item title="消息管理" :arrow="true" arrow-direction="right"></u-cell-item>
			<u-cell-item title="隐私管理" :arrow="true" arrow-direction="right"></u-cell-item>
			<u-cell-item title="清空缓存" :arrow="true" arrow-direction="right"></u-cell-item>
			<u-cell-item title="刷新提醒" :arrow="true" arrow-direction="right" value="关闭"></u-cell-item>
			<u-cell-item title="夕阳无限好" :arrow="false" label="系统开启深色模式后,同步适配">
				<u-switch slot="right-icon" v-model="checked"></u-switch>
			</u-cell-item>
			<u-cell-item title="给我们评价" :arrow="true" arrow-direction="right"></u-cell-item>
			<u-cell-item title="客户服务" :arrow="true" arrow-direction="right"></u-cell-item>
			<u-cell-item title="关于" :arrow="true" arrow-direction="right"></u-cell-item>
			<u-cell-item title="退出" :arrow="true" arrow-direction="right" @click="backOut"></u-cell-item>
		</u-cell-group>
		<u-modal v-model="show" :content="content" @confirm="confirm()" :show-cancel-button="true"></u-modal>
	</view>
</template>

<script>
export default {
	data() {
		return {
			checked: true,
			show: false,
			content: '确定退出系统吗？'
		};
	},
	methods: {
		link(url) {
			uni.navigateTo({
				url: url
			});
		},
		backOut() {
			this.show = true;
		},
		confirm() {
			uni.reLaunch({
				url: '/pages/login/index'
			});
		}
	}
};
</script>

<style></style>
