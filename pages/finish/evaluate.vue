<template>
	<view id="content">
		<view class="title">
			<navigator url="donelist" open-type="switchTab">
				<image src="../images/back-white.png" class="icon"></image>
			</navigator>
			<text class="tit-item">评价</text>
		</view>
		<view class="location">
			<text>给出您的评价</text>
			<textarea placeholder-style="color:#A5A5A5" placeholder="给出您的意见或建议" />
		</view>
		<navigator url="donelist" open-type="switchTab">
			<button class="hand">提交</button>
		</navigator>
	</view>
</template>

<script>
</script>

<style>
	*{
		padding: 0;
		margin: 0;
	}
	#content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.title{
		width: 750upx;
		height: 60upx;
		border-bottom: #C0C0C0 3upx solid;
		position: relative;
		margin-bottom: 20upx;
		background-color: #145EA7;
	}
	.title .icon{
		width: 60upx;
		height: 60upx;
	}
	.title .tit-item{
		height: 50upx;
		font-weight: 600;
		margin-left: 100upx;
		position: absolute;
		top: 10upx;
		color: #DCDFE6;
	}
	.location{
		width: 375px;
		height: 150px;
		border-top: 1px solid #999999;
	}
	.location text{
		color: #007AFF;
		display: inline-block;
		margin: 10px 0px 10px 20px;
	}
	.location textarea{
		width: 340px;
		height: 300px;
		margin: 0 auto;
		border: 2px solid #999999;
	}
	.hand{
		width: 340px;
		height: 50px;
		background-color: #007AFF;
		color: #DCDFE6;
		margin-top: 210px;
	}
</style>
