<template>
	<view id="content">
		<view class="search">
			<uni-easyinput class="A" v-model="value" focus placeholder="搜索" />
		</view>

		<view class="table">
			<navigator url="../finish/done">
				<text style="margin-left: 10px; font-size: 14px;">学生疫情期间外出审批表</text>
				<br />
			</navigator>
			<text style="margin-left: 10px; font-size: 14px;">_{{addressData.id}}_{{addressData.id}}</text>
			<br />
			<text style="margin-left: 10px; font-size: 14px; color: #8F8F94;">流水号：100043</text>
			<br />
			<navigator url="evaluate">
				<text class="estimate">评价</text>
			</navigator>
		</view>

		<view class="table">
			<navigator url="../finish/done2">
				<text style="margin-left: 10px; font-size: 14px;">学生疫情期间外出审批表</text>
				<br />
			</navigator>
			<text style="margin-left: 10px; font-size: 14px;">_{{addressData.id}}_{{addressData.id}}</text>
			<br />
			<text style="margin-left: 10px; font-size: 14px; color: #8F8F94;">流水号：156843</text>
			<br />
			<navigator url="evaluate">
				<text class="estimate">评价</text>
			</navigator>
		</view>

		<view class="table">
			<navigator url="../finish/done">
				<text style="margin-left: 10px; font-size: 14px;">学生疫情期间外出审批表</text>
				<br />
			</navigator>
			<text style="margin-left: 10px; font-size: 14px;">_{{addressData.id}}_{{addressData.id}}</text>
			<br />
			<text style="margin-left: 10px; font-size: 14px; color: #8F8F94;">流水号：259043</text>
			<br />
			<navigator url="evaluate">
				<text class="estimate">评价</text>
			</navigator>
		</view>

	</view>
</template>

<script>
	import datas from '../data/datas.js'
	export default {
		data() {
			return {
				value: '',
				title: 'Hello',
				addressData: {
					id: '',
					name: ''
				}
			}
		},
		onShow() {
			if (datas) {
				this.addressData.name = datas.name;
				this.addressData.id = datas.id;
			}
		},
		methods: {}
	}
</script>

<style>
	* {
		padding: 0;
		margin: 0;
	}

	.content {
		display: flex;
		flex-direction: column;
	}

	.title {
		width: 375px;
		height: 35px;
		line-height: 35px;
		font-weight: 600;
		padding-left: 20px;
		border-bottom: #999999 1px solid;
	}
	.search {
		width: 375px;
		height: 30px;
	}

	.table {
		width: 365px;
		height: 75px;
		margin: 5px ;
		border: #999999 1px solid;
		position: relative;
	}

	.estimate {
		position: absolute;
		top: 40px;
		right: 10px;
		color: #F0AD4E;
		font-size: 14px;
		border-bottom: #007AFF 1px solid;
	}
</style>
