<template>
	<view class="evaluation-manage">
		<view class="container">
			<view class="content" v-for="(item, index) in datalist" :key="index">
				<view class="content-item">
					<image :src="item.icon"></image>
					<view style="flex:1;margin-left: 30rpx;">
						<view class="con">
							{{ item.name }}
							<p>{{ item.time }}</p>
						</view>
						<u-rate :count="count" v-model="item.num" active-color="#FFBE1B" inactive-color="#B5B5B5"></u-rate>
					</view>
				</view>
				<view class="right">
					<p>{{ item.content }}</p>
					<image :src="item.imgUrl"></image>
					<view class="replay-words" v-for="(item, index) in item.replays" :key="index">{{ item }}</view>
					<view class="btn-group">
						<view class="btn-item" @click="cancelTop(index)" v-if="item.handleTop">取消置顶</view>
						<view class="btn-item" @click="handleTop(index)" v-else>置顶</view>
						<view class="btn-item" @click="handleReplay(index)">回复</view>
						<view class="btn-item del" @click="handleDelete(index)">删除</view>
					</view>
				</view>
			</view>
			<u-modal width="640rpx" v-model="show" :show-cancel-button="true" border-radius="20" title="回复评价" :title-style="titleStyle" @confirm="confirm">
				<view class="replay" slo>
					<u-input
						v-model="value"
						type="textarea"
						:custom-style="customStyle"
						height="250"
						placeholder-style="color:#999999;font-size:30rpx"
						placeholder="请输入您对客户的回复内容。"
					/>
				</view>
			</u-modal>
			<u-modal v-model="showDelete" :content="content" :show-cancel-button="true" @confirm="confirmDelete"></u-modal>
		</view>
	</view>
</template>

<script>
import data from '../../../data.js';
export default {
	components: {},
	data() {
		return {
			count: 5,
			datalist: [],
			show: false,
			showIndex: '',
			titleStyle: {
				color: '#333333',
				fontSize: '36rpx'
			},
			value: '',
			customStyle: {
				backgroundColor: '#F8F8F8',
				borderRadius: '20rpx',
				padding: '30rpx'
			},
			showDelete: false,
			content: '确认删除吗？'
		};
	},
	mounted() {
		this.datalist = data.businessCenter.evaluationManage;
	},
	methods: {
		handleDelete(index) {
			this.showDelete = true;
			this.showIndex = index;
		},
		handleReplay(index) {
			this.show = true;
			this.showIndex = index;
		},
		confirm() {
			if (this.value !== '') {
				this.datalist[this.showIndex].replays.push('回复：' + this.value);
				this.value = '';
			}
		},
		confirmDelete() {
			this.datalist.splice(this.showIndex, 1);
		},
		handleTop(index) {
			this.datalist.unshift(this.datalist[index]);
			this.datalist.splice(index + 1, 1);
			this.datalist[0].handleTop = true;
		},
		cancelTop(index) {
			const lng = this.datalist.length;
			this.datalist.push(this.datalist[index]);
			this.datalist.splice(index, 1);
			this.datalist[lng - 1].handleTop = false;
		}
	}
};
</script>

<style lang="less" scoped>
.evaluation-manage {
	background-color: #f5f6f7;
	overflow: auto;
	height: 100%;
}
.container {
	margin: 30rpx;
	background-color: #ffffff;
	border-radius: 20rpx;
	box-shadow: 0rpx 0rpx 20rpx 0rpx rgba(41, 41, 41, 0.05);
	padding: 0 30rpx;
}
.content {
	padding: 40rpx 0;
	border-bottom: 1rpx solid #f2f2f2;
}
.content-item {
	display: flex;
	image {
		width: 80rpx;
		height: 80rpx;
		vertical-align: middle;
	}
	.con {
		display: flex;
		justify-content: space-between;
		font-size: 30rpx;
		font-weight: 500;
		color: #333333;
		p {
			font-size: 24rpx;
			color: #868c96;
			font-weight: 400;
		}
	}
	.u-rate {
		margin-top: 10rpx;
	}
}
.right {
	margin-top: 30rpx;
}
.right p {
	color: #333333;
}
.right image {
	width: 169rpx;
	height: 120rpx;
	margin-top: 24rpx;
}
.replay-words {
	font-size: 28rpx;
	color: #f59200;
	margin-top: 16rpx;
}
.btn-group {
	display: flex;
	margin: 36rpx 0 0;
	color: #558efb;
}
.del {
	color: #ff3b30;
}
.btn-item {
	margin-right: 48rpx;
}
.replay {
	margin: 30rpx 40rpx;
}
</style>
