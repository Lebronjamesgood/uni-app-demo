<template>
	<view class="goodsCard">
		<u-waterfall v-model="flowList" ref="uWaterfall">
			<template v-slot:left="{leftList}">
				<view v-for="(item,index) in leftList" :key="index" class="goodsCard-list">
					<u-image :src="item.url" mode="scaleToFill" style="width: 100%;height: 180px;"></u-image>
					<view class="goods-name">
						<text>{{item.name}}</text>
					</view>
					<view class="price">
						<view class="goods-prople">
							<u-image src="../../../../../static/enjoyBuyStrictly/png/rose.png" mode="aspectFill" style="width: 16px; height: 16px;border-radius: 50%;"></u-image>
							<text style="font-size:18px;margin-left: 4px;">{{item.people}}</text>
						</view>
						<view class="goods-heart">
							<u-icon name="heart" color="#d8d8d8" inactive-color="#d8d8d8"></u-icon>
							<text>{{item.focus}}</text>
						</view>
					</view>
				</view>
			</template>
			<template v-slot:right="{rightList}">
				<view v-for="(item,index) in rightList" :key="index" class="goodsCard-list">
					<u-image :src="item.url" mode="scaleToFill" style="width: 100%;height: 180px;"></u-image>
					<view class="goods-name">
						<text>{{item.name}}</text>
					</view>
					<view class="price">
						<view class="goods-prople">
							<u-image src="../../../../../static/enjoyBuyStrictly/png/rose.png" mode="aspectFill" style="width: 16px; height: 16px;border-radius: 50%;"></u-image>
							<text style="font-size:18px;margin-left: 4px;">{{item.people}}</text>
						</view>
						<view class="goods-heart">
							<u-icon name="heart" color="#d8d8d8" inactive-color="#d8d8d8"></u-icon>
							<text>{{item.focus}}</text>
						</view>
					</view>
				</view>
			</template>
		</u-waterfall>
		<u-loadmore bg-color="rgb(240, 240, 240)" :status="loadStatus" @loadmore="addRandomData"></u-loadmore>
	</view>
</template>

<script>
	export default {
		props: {
			goodsIndex: {
				require: true,
				default: 0
			},
		},
		data() {
			return {
				loadStatus: 'loadmore',
				flowList: [],
				goodslist: [
					[{
							url: require("../../../../../static/enjoyBuyStrictly/png/clouth.png"),
							name: "中国大陆.主推韩版男装积雨Giyu三件套男生衣服帅气穿搭，春秋冬撞色外套",
							people: "会飞的鱼",
							focus: "223"
						},
						{
							url: require("../../../../../static/enjoyBuyStrictly/png/toothpaste.png"),
							name: "日本.如珍珠般一口美牙LION狮王 CLINICA酵素美白牙膏130g鲜果薄荷",
							people: "会飞的鱼",
							focus: "223"
						},
						{
							url: require("../../../../../static/enjoyBuyStrictly/png/Mask.png"),
							name: "中国防尘防晒网红同款口罩",
							people: "会飞的鱼",
							focus: "223"
						},
						{
							url: require("../../../../../static/enjoyBuyStrictly/png/pot.png"),
							name: "麦板石不粘锅",
							people: "会飞的鱼",
							focus: "223"
						},
						{
							url: require("../../../../../static/enjoyBuyStrictly/png/shoes.png"),
							name: "回力、高帮鞋运动鞋",
							people: "会飞的鱼",
							focus: "223"
						},
					],
					[
						{
							url: require("../../../../../static/enjoyBuyStrictly/png/cigarette.png"),
							name: "中华2号香烟",
							people: "会飞的鱼",
							focus: "223"
						},
						{
							url: require("../../../../../static/enjoyBuyStrictly/png/Moutai.png"),
							name: "飞天茅台",
							people: "会飞的鱼",
							focus: "223"
						},
						{
							url: require("../../../../../static/enjoyBuyStrictly/png/guobin.png"),
							name: "国宾茅台6瓶/箱",
							people: "会飞的鱼",
							focus: "223"
						},
						{
							url: require("../../../../../static/enjoyBuyStrictly/png/Wuliangye.png"),
							name: "五粮液6瓶/箱",
							people: "会飞的鱼",
							focus: "223"
						},
						{
							url: require("../../../../../static/enjoyBuyStrictly/png/zhongnanhai.jpg"),
							name: "中南海香烟",
							people: "会飞的鱼",
							focus: "223"
						},
					],
					[{
							url: require("../../../../../static/enjoyBuyStrictly/png/xiaoqingxin.png"),
							name: "春秋女生小清新套装",
							people: "会飞的鱼",
							focus: "223"
						},
						{
							url: require("../../../../../static/enjoyBuyStrictly/png/zhichang.png"),
							name: "春秋女生职场套装",
							people: "会飞的鱼",
							focus: "223"
						},
						{
							url: require("../../../../../static/enjoyBuyStrictly/png/chaonan.png"),
							name: "街头潮男必备套装",
							people: "会飞的鱼",
							focus: "223"
						},
						{
							url: require("../../../../../static/enjoyBuyStrictly/png/xingnan.png"),
							name: "欧美系型男穿搭必备",
							people: "会飞的鱼",
							focus: "223"
						},
						{
							url: require("../../../../../static/enjoyBuyStrictly/png/zhichangnanxing.png"),
							name: "型男职场必备穿搭",
							people: "会飞的鱼",
							focus: "223"
						},
					],
					[{
							url: require("../../../../../static/enjoyBuyStrictly/png/ad.png"),
							name: "迎战夏日逆境开练 阿迪达斯2018CLIMACOOL清风系列席卷而来",
							people: "会飞的鱼",
							focus: "223"
						},
						{
							url: require("../../../../../static/enjoyBuyStrictly/png/naike.png"),
							name: "耐克/nike男跑步系列运动鞋554954-050",
							people: "会飞的鱼",
							focus: "223"
						},
						{
							url: require("../../../../../static/enjoyBuyStrictly/png/lining.jpg"),
							name: "李宁运动鞋男跑步鞋男鞋 透气 减震跑鞋arhh085",
							people: "会飞的鱼",
							focus: "223"
						},
						{
							url: require("../../../../../static/enjoyBuyStrictly/png/yaseshi.png"),
							name: "亚瑟士k21",
							people: "会飞的鱼",
							focus: "223"
						},
						{
							url: require("../../../../../static/enjoyBuyStrictly/png/xinbailun.jpg"),
							name: "风运动鞋女休闲鞋跑步鞋韩版",
							people: "会飞的鱼",
							focus: "223"
						},
					],
					[{
							url: require("../../../../../static/enjoyBuyStrictly/png/clouth.png"),
							name: "中国大陆.主推韩版男装积雨Giyu三件套男生衣服帅气穿搭，春秋冬撞色外套",
							people: "会飞的鱼",
							focus: "223"
						},
						{
							url: require("../../../../../static/enjoyBuyStrictly/png/toothpaste.png"),
							name: "日本.如珍珠般一口美牙LION狮王 CLINICA酵素美白牙膏130g鲜果薄荷",
							people: "会飞的鱼",
							focus: "223"
						},
						{
							url: require("../../../../../static/enjoyBuyStrictly/png/Mask.png"),
							name: "中国防尘防晒网红同款口罩",
							people: "会飞的鱼",
							focus: "223"
						},
						{
							url: require("../../../../../static/enjoyBuyStrictly/png/pot.png"),
							name: "麦板石不粘锅",
							people: "会飞的鱼",
							focus: "223"
						},
						{
							url: require("../../../../../static/enjoyBuyStrictly/png/shoes.png"),
							name: "回力、高帮鞋运动鞋",
							people: "会飞的鱼",
							focus: "223"
						},
					],
				]
			}
		},
		mounted() {
			this.addRandomData();
		},
		onReachBottom() {
			this.loadStatus = 'loading';
			// 模拟数据加载
			setTimeout(() => {
				this.addRandomData();
				this.loadStatus = 'loadmore';
			}, 1000)
		},
		watch: {
			goodsIndex: {
				handler(oldValue, newValue) {
					this.clear()
					this.flowList=[]
					this.$nextTick(function() {
						this.addRandomData()
					})
					
				}
			}
		},
		methods: {
			clear() {
				this.$refs.uWaterfall.clear();
			},
			addRandomData() {
				let list = this.goodslist[this.goodsIndex]
				for (let i = 0; i < list.length; i++) {
					list[i]['id'] = this.$u.guid();
					let j = Math.floor(Math.random() * (i+1));
					[list[i] , list[j]] = [list[j] , list[i]]
					this.flowList = [...this.flowList,...list]
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
	.goodsCard {


		.goodsCard-list {
			margin: 4px;
			background: #ffffff;
			border-radius: 8px;
			box-shadow: 0px 1px 2px 0px rgba(60, 61, 68, 0.09);
		}

		/deep/ .u-image__image {
			border-radius: 6px !important;
		}

		.price {
			display: flex;
			justify-content: space-between;
			margin: 12px 10px;
		}

		.goods-prople,
		.goods-heart {
			display: flex;
			align-items: center;

			uni-text {
				color: #868c96;
				font-weight: 400;
				font-size: 12px !important;
			}

		}

		.goods-name {
			font-weight: 550;
			color: #333333;
			margin: 12px 10px;
		}
	}
</style>
