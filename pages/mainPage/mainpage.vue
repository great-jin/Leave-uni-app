<template>
	<view id="content">
		<view class="title">服务中心</view>
		<view class="search">
			<uni-easyinput class="A"  v-model="value" focus placeholder="搜索"/>
		</view>
		<navigator url="applytable">
			<view class="table">
				<image class="icon" src="../images/pencil.png"></image>
				<text>学生疫情期间外出审批表</text>
				<image class="star" src="../images/star.png"></image>
				<image class="love" src="../images/love.png"></image>
			</view>
		</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: ''
			}
		},
		methods: {
		}
	}
</script>

<style>
	*{
		padding: 0;
		margin: 0;
	}
	.content{
		display: flex;
		flex-direction:column;
	}
	.title{
		width: 375px;
		height: 35px;
		line-height: 35px;
		font-weight: 600;
		padding-left: 20px;
		background-color: #007AFF;
		color: #F0F0F0;
		border-bottom: #999999 1px solid;
	}
	.search{
		width: 375px;
		height: 30px;
	}
	.table{
		width: 365px;
		height: 60px;
		margin: 10px 5px;
		border: #999999 1px solid;
		position: relative;
	}
	.table .icon{
		width: 50px;
		height: 50px;
		margin: 5px 0 0 5px;
	}
	.table text{
		position: absolute;
		top: 10px;
		margin-left: 10px;
	}
	.table .love{
		width: 25px;
		height: 25px;
		position: absolute;
		right: 10px;
	}
	.table .star{
		width: 70px;
		height: 20px;
		position: absolute;
		top: 32px;
		margin-left: 5px;
	}
</style>
