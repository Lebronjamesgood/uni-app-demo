<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	@import "./static/iconfont.css";
	/* 每个页面公共css */
	@font-face {
		font-family: uniicons;
		src: url('/static/uni.ttf');
	}
</style>
<style lang="scss">
	text{
		font-size: 32rpx;
	}
	uni-tabbar, uni-tabbar .uni-tabbar{  
	      box-shadow: 0px -4rpx 6rpx 0px rgba(11,32,76,0.05) !important; 
	    }
	@import "uview-ui/index.scss";
	@import "common/common.css";
	
</style>
