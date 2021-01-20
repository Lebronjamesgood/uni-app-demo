<template>
	<view class="service-charge">
		<view class="container">
			<view class="content">
				<view class="title">服务方式</view>
				<view style="display: flex;">
					<view class="content-item" v-for="(item, index) in list" :key="index" @click="onCheck(item, index)">
						<p :class="{ active: index == n }">{{ item.type }}</p>
					</view>
				</view>
			</view>
			<view class="content-charge">
				<view class="title">
					服务收费
					<view @click="add()"><image src="../../../../../../../static/enjoyLife/plus.svg" mode=""></image></view>
				</view>
				<view class="charge-list" v-for="(item, index) in dataTable" :key="index">
					<view style="border-bottom: 1rpx solid #ededed;padding-bottom: 10rpx;">
						<view class="charge-item">
							<view class="item-title">服务流程</view>
							{{ item.project }}
						</view>
						<view class="charge-item">
							<view class="item-title">价格</view>
							{{ item.price }}
						</view>
						<view class="charge-item">
							<view class="item-title">计价单位</view>
							{{ item.company }}
						</view>
					</view>
					<view class="deleted" @click="handleDelete(index)">
						<image src="../../../../../../../static/enjoyLife/delete.svg" mode=""></image>
						删除
					</view>
				</view>
				<view class="charge-list" v-if="formDeleteBtn">
					<view style="border-bottom: 1rpx solid #ededed;padding-bottom: 10rpx;">
						<view class="charge-item">
							<view class="item-title">服务流程</view>
							<u-input v-model="form.project" placeholder-style="text-align:right;color: #999999" placeholder="请输入项目名称" />
						</view>
						<view class="charge-item">
							<view class="item-title">价格</view>
							<u-input v-model="form.price" placeholder-style="text-align:right;color: #999999" placeholder="请输入价格" />
						</view>
						<view class="charge-item">
							<view class="item-title">计价单位</view>
							<view @click="show = true" class="company">
								<p v-if="form.company">{{ form.company }}</p>
								<span v-else>请选择</span>
								<u-icon name="arrow-right" color="#c3cbcf" size="20"></u-icon>
							</view>
						</view>
						<u-select v-model="show" :list="companyList" @confirm="confirm"></u-select>
					</view>
					<view class="deleted" @click="formDelete">
						<image src="../../../../../../../static/enjoyLife/delete.svg" mode=""></image>
						删除
					</view>
				</view>
			</view>
		</view>
		<u-toast ref="uToast" />
		<u-modal v-model="showDelete" :content="content" :show-cancel-button="true" @confirm="confirmDelete"></u-modal>
		<view class="btn-services"><u-button class="publish-services" @click="goPath()">保存</u-button></view>
	</view>
</template>

<script>
export default {
	components: {},
	data() {
		return {
			list: [{ type: '上门服务', name: 0 }, { type: '到店服务', name: 1 }],
			n: 0,
			tablebox: false,
			companyList: [
				{
					value: '1',
					label: '元/个'
				},
				{
					value: '2',
					label: '元/次'
				},
				{
					value: '2',
					label: '元/人/小时'
				}
			],
			form: {
				project: '',
				price: '',
				company: ''
			},
			show: false,
			dataTable: [
				{
					project: '数学家教',
					price: 100,
					company: '元/人/小时'
				}
			],
			showIndex: '',
			showDelete: false,
			content: '确认删除吗？',
			formDeleteBtn: true
		};
	},
	mounted() {},
	methods: {
		onCheck(item, index) {
			this.n = index;
		},
		confirm(e) {
			this.form.company = e[0].label;
		},
		add() {
			if (!this.formDeleteBtn) {
				this.formDeleteBtn = true;
			} else if (this.form.project === '' || this.form.price === '' || this.form.company === '') {
				this.$refs.uToast.show({
					title: '请将服务列表输入完整'
				});
			} else {
				this.dataTable.push(this.form);
				this.form = {
					project: '',
					price: '',
					company: ''
				};
			}
		},
		handleDelete(index) {
			this.showDelete = true;
			this.showIndex = index;
		},
		confirmDelete() {
			this.dataTable.splice(this.showIndex, 1);
		},
		formDelete() {
			this.formDeleteBtn = false;
		},
		goPath() {
			uni.navigateTo({
				url: '/pages/tabBar/enjoyLife/enjoyLifePages/businessCenter/myServices/personServices/publishServices'
			});
		}
	}
};
</script>

<style lang="less" scoped>
.service-charge {
	background-color: #f5f6f7;
	height: 100%;
	overflow: auto;
}
.container {
	margin: 30rpx;
	background: #ffffff;
	border-radius: 20rpx;
	padding: 30rpx;
	max-height: 1060rpx;
	overflow: auto;
	.title {
		display: flex;
		justify-content: space-between;
		font-size: 30rpx;
		font-weight: 500;
		color: #333333;
		line-height: 46rpx;
		image {
			width: 36rpx;
			height: 36rpx;
			vertical-align: middle;
		}
	}
	.content {
		border-bottom: 1rpx solid #ededed;
		padding-bottom: 40rpx;
		.content-item {
			margin-top: 24rpx;
			margin-right: 48rpx;
			background: url(../../../../../../../static/enjoyLife/select.svg) no-repeat;
			background-size: 42rpx 44rpx;
			background-position: 100% 28rpx;
		}
		p,
		.active {
			width: 184rpx;
			height: 64rpx;
			background: #ffffff;
			border: 1rpx solid #e3e3e3;
			border-radius: 8rpx;
			font-size: 30rpx;
			text-align: center;
			color: #333333;
			line-height: 64rpx;
		}
		.active {
			background: rgba(32, 108, 254, 0.1);
			border: 1rpx solid #206cfe;
			color: #206cfe;
		}
	}
	.content-charge {
		margin-top: 30rpx;
	}
	.charge-list {
		margin-top: 30rpx;
		padding: 10rpx 30rpx;
		background: #fafafa;
		border-radius: 16rpx;
	}
	.company {
		display: flex;
		line-height: 66rpx;
		p {
			margin-right: 14rpx;
		}
		span {
			margin-right: 14rpx;
			color: #999999;
		}
	}
	.charge-item {
		display: flex;
		justify-content: space-between;
		/deep/ .uni-input-input {
			text-align: right;
			font-size: 28rpx;
			color: #333333;
		}
	}
	.item-title {
		font-size: 28rpx;
		font-weight: 500;
		color: #353535;
		line-height: 70rpx;
	}
}
.deleted {
	text-align: center;
	margin: 10rpx auto;
	image {
		width: 40rpx;
		height: 40rpx;
		vertical-align: middle;
		margin-right: 8rpx;
	}
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
