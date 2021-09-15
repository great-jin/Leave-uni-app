<template>
	<view id="content">
		<view id="title">
			<navigator url="donelist" open-type="switchTab">
				<image src="../images/back-white.png" class="icon"></image>
			</navigator>
			<text class="tit-item">泉信疫情防控期间外出审批表</text>
		</view>
		<view class="indivudual">
			<text>个人基本信息</text>
		</view>
		<view class="info">
			<view class="peice">
				<text>学生姓名:</text>
				<view class="mes">{{list[1].name}}</view>
			</view>
			<view class="peice">
				<text>学号 *</text>
				<view class="mes">{{list[1].num}}</view>
			</view>
			<view class="peice">
				<text>宿舍号 *</text>
				<view class="mes">{{list[1].room}}</view>
			</view>
			<view class="peice">
				<text>专业年级 *</text>
				<view class="mes">{{list[1].class}}</view>
			</view>
			<view class="peice">
				<text>本人手机 *</text>
				<view class="mes">{{list[1].tel}}</view>
			</view>
		</view>

		<view class="traffic">
			<text>乘坐的交通工具</text>
			<view class="mes2">{{list[1].traffic}}</view>
		</view>

		<view class="privine">
			<text>外出是否离开福建省 *</text>
			<view class="mes2">{{list[1].prvin}}</view>
		</view>

		<view class="location">
			<text>外出目的及目的地</text>
			<view class="mes2">{{list[1].local}}</view>
		</view>

		<view class="time">
			<text class="content_a">
				<text>外出时间:</text>
				<text>{{list[1].date1}}</text>
			</text>
			<br />
			<text class="content_a">
				<text>归校时间:</text>
				<text>{{list[1].date2}}</text>
			</text>
		</view>

		<view class="sign">
			<view class="peice">
				<text>承诺人签名 *</text>
				<view class="mes">{{list[1].sign}}</view>
			</view>
			<view class="peice">
				<text>签名时间 *</text>
				<view class="mes">{{list[1].date3}}</view>
			</view>
			<view class="peice">
				<text>辅导员 *</text>
				<view class="mes">{{list[1].teach}}</view>
			</view>
		</view>

		<view class="proposal">
			<text>辅导员意见*</text>
			<view class="mes3">{{list[1].pro}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				list:[],
			}
		},
		onLoad() {
			let that = this;
			uni.request({
				url: "https://great.cn.utools.club",
				success: function(res) {
					that.list = res.data;
					console.log(res.data);
				}
			})
		}
	}
</script>

<style>
	* {
		padding: 0;
		margin: 0;
	}

	#content {
		display: flex;
		flex-direction: column;
	}

	#title {
		width: 750upx;
		height: 60upx;
		border-bottom: #C0C0C0 3upx solid;
		position: relative;
		margin-bottom: 20upx;
		background-color: #5AB432;
	}

	#title .icon {
		width: 60upx;
		height: 60upx;
	}

	#title .tit-item {
		height: 50upx;
		font-weight: 600;
		margin-left: 80upx;
		position: absolute;
		top: 10upx;
		color: #DCDFE6;
	}

	.indivudual {
		width: 350px;
		height: 35px;
		background-color: #F2F2F2;
		margin: 0 auto;
	}

	.indivudual text {
		color: #555555;
		height: 35px;
		line-height: 35px;
		margin-left: 5px;
	}

	.info {
		width: 375px;
		height: 175px;
		margin-bottom: 20px;
	}

	.peice {
		width: 375px;
		height: 35px;
		border-bottom: #C0C0C0 3upx solid;
		position: relative;
	}

	.peice text {
		height: 35px;
		color: #555555;
		position: absolute;
		top: 10px;
		left: 20px;
	}

	.peice .mes {
		display: inline-block;
		height: 35px;
		width: 180px;
		color: #555555;
		position: absolute;
		top: 10px;
		right: 70px;
	}

	.mes2 {
		height: 50px;
		color: #555555;
		font-size: 16px;
		margin: 2px 20px 0 20px;
	}

	.traffic {
		width: 375px;
		height: 80px;
	}

	.traffic text {
		color: #555555;
		margin-left: 35upx;
	}

	.privine {
		width: 375px;
		height: 90px;
		border-top: #999999 1px solid;
	}

	.privine text {
		color: #666666;
		margin-left: 35upx;
	}

	.privine .rad {
		width: 100px;
		margin-left: 35upx;
		font-size: 15px;
	}

	.location {
		width: 375px;
		height: 150px;
		border-top: 1px solid #999999;
	}

	.location text {
		color: #666666;
		margin-left: 35upx;
	}

	.time {
		width: 375px;
		height: 90px;
		border-top: 1px solid #999999;
	}

	.time text {
		display: inline-block;
		height: 10px;
		line-height: 60px;
		margin-left: 20upx;
		color: #666666;
	}

	.message {
		width: 375px;
		height: 220px;
		border-top: 1px solid #999999;
	}

	.message view {
		color: #555555;
		margin-left: 35upx;
	}

	.sign {
		width: 375px;
		height: 125px;
		border-top: 1px solid #999999;
	}

	.proposal {
		width: 375px;
		height: 70px;
	}

	.proposal text {
		color: #666666;
		font-size: 16px;
		margin-left: 16px;
	}

	.proposal .mes3 {
		height: 50px;
		color: #555555;
		font-size: 16px;
		margin: 5px 20px 0 20px;
	}
</style>
