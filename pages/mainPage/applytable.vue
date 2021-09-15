<template>
	<view id="content">
		<view class="title">
			<navigator url="mainpage" open-type="switchTab">
				<image src="../images/back-white.png" class="icon"></image>
			</navigator>
			<text class="tit-item">泉信疫情防控期间外出审批表</text>
		</view>
		<view class="indivudual">
			<text>个人基本信息</text>
		</view>
		<view class="info">
			<view class="peice">
				<text>学生姓名 *</text>
				<text style="margin-left: 210px; color: #555555">{{addressData.name}}</text>
			</view>
			<view class="peice">
				<text>学号 *</text>
				<text style="margin-left: 210px; color: #555555">{{addressData.id}}</text>
			</view>
			<view class="peice">
				<text>宿舍号 *</text>
				<view class="AA">
					<uni-easyinput class="tt" v-model="apply.room" />
				</view>
			</view>
			<view class="peice">
				<text>专业年级 *</text>
				<view class="AA">
					<uni-easyinput class="tt" v-model="apply.year" />
				</view>
			</view>
			<view class="peice">
				<text>本人手机 *</text>
				<view class="AA">
					<uni-easyinput class="tt" v-model="apply.phone" />
				</view>
			</view>
		</view>
		<view class="traffic">
			<text>乘坐的交通工具</text>
			<checkbox-group class="check" @change="checkboxChange">
				<checkbox value="plane"/>飞机
				<checkbox value="train"/>火车
				<checkbox value="bus"/>大巴
				<br />
				<checkbox value="car"/>自驾
				<checkbox value="foot"/>步行
				<checkbox value="other"/>其它
			</checkbox-group>
		</view>
		<view class="privine">
			<text>外出是否离开福建省 *</text>
			<view class="rad">
				<radio-group style="color: #666666" @change="radioChange">
					<radio value="yes" style="margin-top: 5px;" />是
					<br />
					<radio value="no" style="margin-top: 5px;" />否
				</radio-group>
			</view>
		</view>
		<view class="location">
			<text>外出目的及目的地</text>
			<textarea placeholder-style="color:#A5A5A5" placeholder="目的地及原因" v-model="apply.locate" />
		</view>
		<view class="time">
			<text class="content_a">
				<text>外出时间:{{date}}</text>
			</text>
			<br />
			<text class="content_a">
				<text @tap="showPicker">归校时间:{{dateTime}}</text>
				<w-time-picker ref="picker" @confirm="onConfirm" @cancel="onCancel":afterDays="7" :step="30"></w-time-picker>
			</text>
		</view>
		<view class="message">
			<view>本人承诺:</view>
			<view>1、以上信息真实有效，我已想家长汇报我的外出安排，家长对此完全知情并同意我外出</view>
			<view>2、学校老师已想我宣讲减少外出，不参加聚集活动，加强个人防护，尽量不乘坐公共交通工具。</view>
			<view>3、外出期间我将自觉遵守国家法律法规和校纪校规，切实做好应对疫情的个人防护，去报通讯通畅，外出期间一切安全责任由本人承担</view>
			<view>4、按时返校并主动销假，返校后及时吸收，身体不适及时上报辅导员</view>
		</view>
		<view class="sign">
			<view class="peice">
				<text>承诺人签名 *</text>
				<view class="AA">
					<uni-easyinput class="tt" v-model="apply.sign" />
				</view>
			</view>
			<view class="peice">
				<text>选择辅导员 *</text>
				<picker class="BB" style="margin-left: 245px;" @change="bindPickerChange1":value="index1" :range="array1">
					<view>{{array1[index1]}}</view>
				</picker>
			</view>
		</view>
		<view class="low">
			<navigator url="mainpage" open-type="switchTab">
				<button class="save">保存草稿</button>
			</navigator>
			<navigator url="mainpage" open-type="switchTab">
				<button class="timinate">Timinate</button>
			</navigator>
			<navigator url="mainpage" open-type="switchTab">
				<button class="submit" @click="sava">Submit</button>
			</navigator>
		</view>
	</view>
</template>

<script>
	import datas from '../data/datas.js'
	import applydatas from '../data/applydatas.js'
	import wTimePicker from "@/components/w-time-picker/w-time-picker.vue"
	export default {
		components: {
			wTimePicker
		},
		onShow() {
			this.addressData.id = datas.id;
			this.addressData.name = datas.name;
			this.apply.time1 = new Date().toISOString().slice(0, 19);
			applydatas.time1 = this.apply.time1;
		},
		data() {
			return {
				title: 'Hello',
				dateTime: "",
				date: new Date().toISOString().slice(0, 19),
				index1: 0,
				array1: ['无','于小庆', '陈剑玉', '陈连木'],
				addressData: {
					id: '',
					name: ''
				},
				apply: {
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
		methods: {
			showPicker() {
				this.$refs.picker.show();
			},
			onConfirm(res) {
				this.dateTime = res;
				this.apply.time2 = this.dateTime;
				applydatas.time2 = this.apply.time2;
			},
			onCancel() {
				console.log("取消选择");
			},
			bindPickerChange1: function(e) {
				this.index1 = e.target.value
				if(e.detail.value=='1'){
					this.apply.teach='于小庆'
					applydatas.teach = this.apply.teach;
				}
				if(e.detail.value=='2'){
					this.apply.teach='陈剑玉'
					applydatas.teach = this.apply.teach;
				}
				if(e.detail.value=='3'){
					this.apply.teach='陈连木'
					applydatas.teach = this.apply.teach;
				}
			},
			sava(){
				applydatas.room = this.apply.room;
				applydatas.year = this.apply.year;
				applydatas.phone = this.apply.phone;
				applydatas.traffic = this.apply.traffic;
				applydatas.privince = this.apply.privince;
				applydatas.locate = this.apply.locate;
				applydatas.time1 = this.apply.time1;
				applydatas.time2 = this.apply.time2;
				applydatas.sign = this.apply.sign;
				applydatas.teach = this.apply.teach;
			},
			checkboxChange(e){
				if(e.detail.value=='plane'){
					this.apply.traffic='飞机'
					applydatas.traffic = this.apply.traffic;
				}
				if(e.detail.value=='train'){
					this.apply.traffic='火车'
					applydatas.traffic = this.apply.traffic;
				}
				if(e.detail.value=='bus'){
					this.apply.traffic='大巴'
					applydatas.traffic = this.apply.traffic;
				}
				if(e.detail.value=='car'){
					this.apply.traffic='自驾'
					applydatas.traffic = this.apply.traffic;
				}
				if(e.detail.value=='foot'){
					this.apply.traffic='步行'
					applydatas.traffic = this.apply.traffic;
				}
				if(e.detail.value=='other'){
					this.apply.traffic='其它'
					applydatas.traffic = this.apply.traffic;
				}
			},
			radioChange(e){
				if(e.detail.value=='yes'){
					this.apply.privince='是'
					applydatas.privince = this.apply.privince;
				}
				if(e.detail.value=='no'){
					this.apply.privince='否'
					applydatas.privince = this.apply.privince;
				}
			}
		}
	}
</script>

<style>
	* {
		padding: 0;
		margin: 0;
	}

	.content_a {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50upx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}

	#content {
		display: flex;
		flex-direction: column;
	}

	.title {
		width: 750upx;
		height: 60upx;
		border-bottom: #C0C0C0 3upx solid;
		position: relative;
		margin-bottom: 20upx;
		background-color: #5AB432;
	}

	.title .icon {
		width: 60upx;
		height: 60upx;
	}

	.title .tit-item {
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
		left: 20px
	}

	.AA {
		display: inline-block;
		height: 37px;
	}

	.tt {
		width: 150px;
		position: absolute;
		right: 0px;
	}

	.traffic {
		width: 375px;
		height: 80px;
	}

	.traffic text {
		color: #555555;
		margin-left: 35upx;
	}

	.traffic .check {
		width: 250px;
		margin-left: 100px;
		margin-top: 5px;
		color: #666666;
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
		height: 180px;
		border-top: 1px solid #999999;
	}

	.location text {
		color: #666666;
		margin-left: 35upx;
	}

	.location textarea {
		width: 345px;
		margin: 0 auto;
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
		height: 250px;
		border-top: 1px solid #999999;
	}

	.message view {
		color: #555555;
		margin-left: 35upx;
	}

	.sign {
		width: 375px;
		height: 95px;
		border-top: 1px solid #999999;
	}

	.BB {
		display: inline-block;
		height: 37px;
		color: #555555;
		margin-top: 7px;
	}

	.low {
		width: 375px;
		height: 39px;
		position: relative;
	}

	.low button {
		width: 110px;
		height: 35px;
		color: #EEEEEE;
		display: inline-block;
		background-color: #4CD964;
		font-size: 15px;
		margin-right: 10px;
	}

	.low .save {
		position: absolute;
		left: 10px;
		top: 0px;
	}

	.low .timinate {
		position: absolute;
		left: 132px;
		top: 0px;
	}

	.low .submit {
		position: absolute;
		right: 2px;
		top: 0px;
	}
</style>
