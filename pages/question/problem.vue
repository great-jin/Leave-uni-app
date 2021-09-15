<template>
	<view id="content">
		<text class="label">1. 校园码是什么？</text>
		<text class="info">校园码是师生在学校内的身份证明，可以在身份认证、消费等各种场景使用。</text>
		
		<text class="label">2. 为什么需要开通免密支付？</text>
		<text class="info">免密支付是在学校内商户消费后，自动扣费的一种途径。师生通过刷码进行消费，无需预充值，消费后扣除相应金额即可。</text>
		
		<text class="label">3. 刷校园码支付安全吗？</text>
		<text class="info">校园码内含师生的身份信息，并采用了多重加密技术，可以有效防止伪造、盗用，保证资金安全。请放心使用。</text>
		
		<text class="label">4. 为什么会突然收到校园码交易提醒？</text>
		<text class="info">这是正常的，请勿担心。少部分情况由于POS上传延迟，导致交易及扣款通知会晚一点推送，但不会出现重复扣款、误扣款的现象。扣款通知中有详细的消费时间及商户名称，可查阅确认。</text>
		
		<text class="label">5. 刷码时没反应怎么办？</text>
		<text class="info">请调整手机与扫码口的距离、位置、屏幕亮度。</text>
		
		<text class="label">6. 领取的红包哪里能看到？</text>
		<text class="info">开学季红包的查询方式：在校园码页面分享领取，刷码消费时可使用。领取后可以在“微信→我→卡包”的列表中找到红包。常规红包的查询方式：使用校园码支付后摇一摇或点击领取，领取后直接返现到微信支付钱包。</text>
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
