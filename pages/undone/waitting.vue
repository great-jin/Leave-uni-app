<template>
	<view id="content">
		<view id="title">
			<navigator url="waitlist" open-type="switchTab">
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
				<view class="mes">{{apply.name}}</view>
			</view>
			<view class="peice">
				<text>学号 *</text>
				<view class="mes">{{apply.id}}</view>
			</view>
			<view class="peice">
				<text>宿舍号 *</text>
				<view class="mes">{{apply.room}}</view>
			</view>
			<view class="peice">
				<text>专业年级 *</text>
				<view class="mes">{{apply.year}}</view>
			</view>
			<view class="peice">
				<text>本人手机 *</text>
				<view class="mes">{{apply.phone}}</view>
			</view>
		</view>
		
		<view class="traffic">
			<text>乘坐的交通工具</text>
			<view class="mes2">{{apply.traffic}}</view>
		</view>
		
		<view class="privine">
			<text>外出是否离开福建省 *</text>
			<view class="mes2">{{apply.privince}}</view>
		</view>
		
		<view class="location">
			<text>外出目的及目的地</text>
			<view class="mes2">{{apply.locate}}</view>
		</view>
		
		<view class="time">
			<text class="content_a">
				<text >外出时间:</text>
				<text>{{apply.time1}}</text>
			</text>
			<br />
			<text class="content_a">
				<text>归校时间:</text>
				<text>{{apply.time2}}</text>
			</text>
		</view>
		
		<view class="sign">
			<view class="peice">
				<text>承诺人签名 *</text>
				<view class="mes">{{apply.sign}}</view>
			</view>
			<view class="peice">
				<text>签名时间 *</text>
				<view class="mes">{{apply.time1}}</view>
			</view>
			<view class="peice">
				<text>辅导员 *</text>
				<view class="mes">{{apply.teach}}</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import datas from '../data/datas.js'
	import applydatas from '../data/applydatas.js'
	export default {
	    data() {
	    	return {
	    		title: 'Hello',
	    		list:[],
				apply: {
					id: '',
					name: '',
					room: '',
					year: '',
					phone: '',
					traffic: '',
					privince: '',
					locate: '',
					time1: '',
					time2: '',
					sign: '',
					teach: ''
				}
	    	}
	    },
		onShow() {
			if(applydatas){
				this.apply.id = datas.id;
				this.apply.name = datas.name;
				this.apply.room = applydatas.room;
				this.apply.year = applydatas.year;
				this.apply.phone = applydatas.phone;
				this.apply.traffic = applydatas.traffic;
				this.apply.privince = applydatas.privince;
				this.apply.locate = applydatas.locate;
				this.apply.time1 = applydatas.time1;
				this.apply.time2 = applydatas.time2;
				this.apply.sign = applydatas.sign;
				this.apply.teach = applydatas.teach;
			}
		},
	}
</script>

<style>
	*{
		padding: 0;
		margin: 0;
	}
	#content{
		display: flex;
		flex-direction:column;
	}
	#title{
		width: 750upx;
		height: 60upx;
		border-bottom: #C0C0C0 3upx solid;
		position: relative;
		margin-bottom: 20upx;
		background-color: #5AB432;
	}
	#title .icon{
		width: 60upx;
		height: 60upx;
	}
	#title .tit-item{
		height: 50upx;
		font-weight: 600;
		margin-left: 80upx;
		position: absolute;
		top: 10upx;
		color: #DCDFE6;
	}
	
	.indivudual{
		width: 350px;
		height: 35px;
		background-color: #F2F2F2;
		margin: 0 auto;
	}
	.indivudual text{
		color: #555555;
		height: 35px;
		line-height: 35px;
		margin-left: 5px;
	}
	
	.info{
		width: 375px;
		height: 175px;
		margin-bottom: 20px;
	}
	.peice{
		width: 375px;
		height: 35px;
		border-bottom: #C0C0C0 3upx solid;
		position: relative;
	}
	.peice text{
		height: 35px;
		color: #555555;
		position: absolute;
		top:10px;
		left:20px;
	}
	.peice .mes{
		display: inline-block;
		height: 35px;
		width: 180px;
		color: #555555;
		position: absolute;
		top:10px;
		right:70px;
	}
	
	.mes2{
		height: 50px;
		color: #555555;
		font-size: 16px;
		margin: 2px 20px 0 20px;
	}
	.traffic{
		width: 375px;
		height: 80px;
	}
	.traffic text{
		color: #555555;
		margin-left: 35upx;
	}
	.privine {
		width: 375px;
		height: 90px;
		border-top: #999999 1px solid;
	}
	.privine text{
		color: #666666;
		margin-left: 35upx;
	}
	.privine .rad{
		width: 100px;
		margin-left: 35upx;
		font-size: 15px;
	}
	.location{
		width: 375px;
		height: 150px;
		border-top: 1px solid #999999;
	}
	.location text{
		color: #666666;
		margin-left: 35upx;
	}
	.time{
		width: 375px;
		height: 90px;
		border-top: 1px solid #999999;
	}
	.time text{
		display: inline-block;
		height: 10px;
		line-height: 60px;
		margin-left: 20upx;
		color: #666666;
	}
	.message{
		width: 375px;
		height: 220px;
		border-top: 1px solid #999999;
	}
	.message view{
		color: #555555;
		margin-left: 35upx;
	}
	.sign{
		width: 375px;
		height: 125px;
		border-top: 1px solid #999999;
	}
</style>
