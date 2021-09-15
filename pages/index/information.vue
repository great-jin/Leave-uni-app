<template>
	<view id="content">
		<view id="title">
			<navigator url="index" open-type="switchTab">
				<image src="../images/back.png" class="icon"></image>
			</navigator>
			<text class="tit-item">个人中心</text>
		</view>

		<view class="info">
			<view class="peice" style="border-top:#C0C0C0 2upx solid">
				<text>学号</text>
				<view class="AA">
					<uni-easyinput v-model="addressData.id" class="tt" />
				</view>
			</view>
			<view class="peice">
				<text>姓名</text>
				<view class="AA">
					<uni-easyinput v-model="addressData.name" class="tt" />
				</view>
			</view>
			<view class="peice">
				<text @tap="toOpen">性别</text>
				<picker class="BB" style="margin-left: 200px;" v-model="addressData.sex" @change="bindPickerChange1" :value="index1" :range="array1">
					<view>{{array1[index1]}}</view>
				</picker>
			</view>
			<view class="peice">
				<text>身份</text>
				<picker class="BB" style="margin-left: 200px;" v-model="addressData.identity" @change="bindPickerChange4" :value="index4" :range="array4">
					<view>{{array4[index4]}}</view>
				</picker>
			</view>
		</view>

		<view class="contact">
			<view class="peice" style="border-top:#C0C0C0 2upx solid">
				<text>手机</text>
				<view class="AA">
					<uni-easyinput v-model="addressData.phone" class="tt" />
				</view>
			</view>
			<view class="peice">
				<text>邮箱</text>
				<view class="AA">
					<uni-easyinput v-model="addressData.emil" class="tt" />
				</view>
			</view>
			<view class="peice">
				<text>Q Q</text>
				<view class="AA">
					<uni-easyinput style="margin-left: 170px;" v-model="addressData.qq" class="tt" />
				</view>
			</view>
		</view>

		<view class="country">
			<view class="peice" style="border-top:#C0C0C0 2upx solid">
				<text>国籍</text>
				<picker class="BB" style="margin-left: 200px;" v-model="addressData.country" @change="bindPickerChange2" :value="index2" :range="array2">
					<view>{{array2[index2]}}</view>
				</picker>
			</view>
			<view class="peice">
				<text @tap="toOpen">类型</text>
				<picker class="BB" style="margin-left: 200px;" v-model="addressData.idtype" @change="bindPickerChange3" :value="index3" :range="array3">
					<view>{{array3[index3]}}</view>
				</picker>
			</view>
			<view class="peice">
				<text>号码</text>
				<view class="AA">
					<uni-easyinput v-model="addressData.idnum" class="tt" />
				</view>
			</view>
		</view>

		<view class="school">
			<view class="peice" style="border-top:#C0C0C0 2upx solid">
				<text>部门</text>
				<picker class="BB" style="margin-left: 200px;" v-model="addressData.department" @change="bindPickerChange5" :value="index5" :range="array5">
					<view>{{array5[index5]}}</view>
				</picker>
			</view>
			<view class="peice">
				<text>年级</text>
				<picker class="BB" style="margin-left: 200px;" v-model="addressData.grade" @change="bindPickerChange6" :value="index6" :range="array6">
					<view>{{array6[index6]}}</view>
				</picker>
			</view>
			<view class="peice">
				<text>学院</text>
				<picker class="BB" style="margin-left: 200px;" v-model="addressData.school" @change="bindPickerChange7" :value="index7" :range="array7">
					<view>{{array7[index7]}}</view>
				</picker>
			</view>
			<view class="peice">
				<text>专业</text>
				<picker class="BB" style="margin-left: 200px;" v-model="addressData.major" @change="bindPickerChange8" :value="index8" :range="array8">
					<view>{{array8[index8]}}</view>
				</picker>
			</view>
			<view class="peice">
				<text>班级</text>
				<picker class="BB" style="margin-left: 200px;" v-model="addressData.class1" @change="bindPickerChange10" :value="index10" :range="array10">
					<view>{{array10[index10]}}</view>
				</picker>
			</view>
			<view class="peice">
				<text>校区</text>
				<picker class="BB" style="margin-left: 200px;" v-model="addressData.local" @change="bindPickerChange9" :value="index9" :range="array9">
					<view>{{array9[index9]}}</view>
				</picker>
			</view>
			<view class="peice">
				<text>宿舍</text>
				<view class="AA">
					<uni-easyinput v-model="addressData.roomnum" class="tt" />
				</view>
			</view>
		</view>
		<navigator url="index" open-type="switchTab">
			<button @click="jump" class="sava">保存修改</button>
		</navigator>
		
	</view>
</template>

<script>
	import datas from '../data/datas.js'
	export default {
		data() {
			return {
				value: '',
				item: '',
				title: 'picker',
				index1: 0,
				index2: 0,
				index3: 0,
				index4: 0,
				index5: 0,
				index6: 0,
				index7: 0,
				index8: 0,
				index9: 0,
				index10: 0,
				array1: ['男', '女'],
				array2: ['中国', '美国', '巴西', '日本', '英国', '加拿大'],
				array3: ['身份证', '护照','驾照'],
				array4: ['学生', '老师'],
				array5: ['无','学生会', '自律会', '易班', '体育部'],
				array6: ['2017', '2018','2019', '2020',"2021"],
				array7: ['软件学院', '经济与管理', '土木学院', '国际学院', '法学院', '医学院'],
				array8: ['软件工程', '机器人开发','国际商务', '金融', '口腔医学', '土木工程', '工程造价', '数据挖掘'],
				array9: ['丰泽校区', '江南校区'],
				array10: ['1班', '2班', '3班', '4班', '5班'],
				addressData: {
					id: '',
					name: '',
					identity: '',
					sex: '',
					phone: '',
					email: '',
					qq: '',
					country: '',
					idtype: '',
					idnum: '',
					department: '',
					grade: '',
					school: '',
					major: '',
					class1: '',
					local: '',
					roomnum: '',
				}
			}
		},
		methods: {
			jump() {
				datas.id = this.addressData.id;
				datas.name = this.addressData.name;
			},
			bindPickerChange1: function(e) {
				this.index1 = e.target.value
			},
			bindPickerChange2: function(e) {
				this.index2 = e.target.value
			},
			bindPickerChange3: function(e) {
				this.index3 = e.target.value
			},
			bindPickerChange4: function(e) {
				this.index4 = e.target.value
			},
			bindPickerChange5: function(e) {
				this.index5 = e.target.value
			},
			bindPickerChange6: function(e) {
				this.index6 = e.target.value
			},
			bindPickerChange7: function(e) {
				this.index7 = e.target.value
			},
			bindPickerChange8: function(e) {
				this.index8 = e.target.value
			},
			bindPickerChange9: function(e) {
				this.index9 = e.target.value
			},
			bindPickerChange10: function(e) {
				this.index10 = e.target.value
			}
		},
	}
</script>

<style>
	* {
		margin: 0px;
		padding: 0px;
	}

	.content {
		display: flex;
		flex-direction: column;
	}

	#title {
		width: 750upx;
		height: 60upx;
		border-bottom: #C0C0C0 3upx solid;
		position: relative;
		margin-bottom: 20upx;
	}

	#title .icon {
		width: 60upx;
		height: 60upx;
	}

	#title .tit-item {
		width: 150upx;
		height: 50upx;
		font-weight: 600;
		margin-left: 80upx;
		position: absolute;
		top: 10upx;
	}
	
	.info {
		width: 375px;
		height: 145px;
		margin-bottom: 20px;
	}

	.contact {
		width: 375px;
		height: 105px;
		margin-bottom: 20px;
	}

	.country {
		width: 375px;
		height: 105px;
		margin-bottom: 20px;
	}

	.school {
		width: 375px;
		height: 250px;
	}

	.peice {
		width: 375px;
		height: 35px;
		border-bottom: #C0C0C0 3upx solid;
	}

	.peice text {
		height: 35px;
		color: #555555;
		line-height: 35px;
		margin-left: 15upx;
	}
	
	.tt {
		width: 160px;
		margin-left: 170px;
	}
	
	.AA {
		display: inline-block;
		height: 37px;
	}
	
	.BB {
		display: inline-block;
		height: 37px;
		color: #555555;
	}
	.sava {
		margin-top: 10px;
	}
</style>
