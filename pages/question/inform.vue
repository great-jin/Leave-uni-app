<template>
	<view id="content">
		<text class="label">欢迎使用校园卡</text>
		<text class="info">
			欢迎使用微信校园卡，微信校园卡是学校官方与腾讯微校合作推出的虚拟电子卡，集成了校园服务，形成校园移动化门户，并且完美发挥了手机、微信的天然优势，永远随身，永不折损。
		</text>
	</view>
</template>

<script>
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
	.label{
		display: inline-block;
		width: 350px;
		height: 30px;
		margin: 0 auto;
		line-height: 30px;
		margin-top: 5px;
	}
	.info{
		display: inline-block;
		width: 350px;
		margin: 0 auto;
		border-bottom: #999999 1px solid;
		color: #555555;
		padding: 5px;
		font-size: 14px;
	}
</style>
