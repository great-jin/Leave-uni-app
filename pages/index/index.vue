<template>
	<view class="container">
		<view id="back">
			<image src="../images/dragon.png" class="icon"></image>
			<text class="name">{{addressData.name}}</text>
			<br />
			<text class="num">{{addressData.id}}</text>
		</view>
		<view id="content">
			<navigator url="../question/inform">
				<view class="peice">
					<image class="icon" src="../images/horn.png"></image>
					<text class="info">通知公告</text>
				</view>
			</navigator>

			</navigator>
			<navigator url="information">
				<view class="peice">
					<image class="icon" src="../images/man.png"></image>
					<text class="info">个人信息</text>
				</view>
			</navigator>

			<navigator url="../question/problem">
				<view class="peice">
					<image class="icon" src="../images/about.png"></image>
					<text class="info">常见问题</text>
				</view>
			</navigator>
		</view>
		<button class="bing" @click="reset">解除绑定 </button>
	</view>
</template>

<script>
	import datas from '../data/datas.js'
	export default {
		data() {
			return {
				title: 'Hello',
				addressData: {
					id: '',
					name: ''
				}
			}
		},
		onShow() {
			if(datas){
				this.addressData.name = datas.name;
				this.addressData.id = datas.id;
			}
		},
		methods: {
			reset() {
				datas.id = '';
				datas.name = '';
				this.addressData.id = datas.id;
				this.addressData.name = datas.name;
				uni.showToast({
				    title: '解绑成功',
				    duration: 2000
				});
			}
		},
	}
</script>

<style>
	* {
		margin: 0px;
		padding: 0px;
	}

	.container {
		display: flex;
		flex-direction: column;
	}

	#title {
		width: 750upx;
		height: 60upx;
	}

	#title .icon {
		width: 60upx;
		height: 50upx;
	}

	#back {
		width: 750upx;
		height: 400upx;
		background-color: #145EA7;
		position: relative;
	}

	#back .icon {
		width: 180upx;
		height: 180upx;
		position: absolute;
		left: 290upx;
		top: 50upx;
	}

	#back .name {
		width: 750upx;
		height: 60upx;
		display: inline-block;
		color: #C0C0C0;
		font-size: 38upx;
		text-align: center;
		margin-top: 240upx;
	}

	#back .num {
		width: 750upx;
		height: 60upx;
		display: inline-block;
		color: #C0C0C0;
		font-size: 30upx;
		text-align: center;
	}

	#content {
		width: 750upx;
		height: 300upx;
	}

	#content .peice {
		width: 750upx;
		height: 90upx;
		border-bottom: 1px #666666 solid;
		position: relative;
	}

	#content .peice .icon {
		width: 60upx;
		height: 60upx;
		margin: 10px 0 0 20px;
	}

	#content .peice .info {
		color: #3B4144;
		font-size: 18px;
		font-weight: 600;
		margin-left: 15px;
		position: absolute;
		top: 11px;
	}

	.bing {
		width: 280px;
		height: 45px;
		background-color: #DD524D;
		font-weight: 600;
		color: #F0F0F0;
		margin: 10px auto;
	}
</style>
