<template>
	<view class="content">
		<view class="top-bar">
			<view class="top-bar-right" @tap="toSignUp">
				<view class="text">注册</view>
			</view>
		</view>
		<view class="logo">
			<image src="../../static/images/sign/logo1.png" mode=""></image>
		</view>
		<view class="mian">
			<view class="title">登录</view>
			<view class="slogan">您好,欢迎来到 mm !</view>
			<view class="inputs">
				<input type="text" class="user" value="" placeholder-style="color:#aaa;font-weight:400" placeholder="用户名/邮箱" @blur="getUser" />
				<input type="password" class="pws" value="" placeholder-style="color:#aaa;font-weight:400" placeholder="密码" @blur="getPsw" />
			</view>
			<view class="tips">输入用户或密码错误!</view>
		</view>
		<view class="submit" @tap="testfun">登录</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user: "",
				psw: ""
			}
		},
		methods: {
			//test登录
			testfun: function() {
				uni.request({
					url: 'http://192.168.88.108:3000/singup/add',
					data: {
						mail:'xiaoyu@qq.com',
						name:'小鱼',
						pwd:'12345678'
					},
					method: 'POST',
					success: (data) => {
						console.log(data) 
					}
				})
			},
			//跳转到注册页面
			toSignUp: function() {
				uni.navigateTo({
					url: '../signup/signup',
				});
			},
			//获取用户名/邮箱
			getUser: function(e) {
				this.user = e.detail.value
			},
			//获取密码
			getPsw: function(e) {
				this.psw = e.detail.value
			},
			//登录提交
			login: function() {
				if (this.user && this.psw) {
					console.log(this.user, this.psw)
				}
			}
		}
	}
</script>

<style lang="scss">
	@import "../../commons/css/mycss.scss";

	.logo {
		text-align: center;

		image {
			padding-top: 256rpx;
			width: 194rpx;
			height: 92rpx;
			margin: 0 auto;
		}
	}

	.mian {
		padding: 54rpx $uni-spacing-row-lg 120rpx;

		//width: 100%;
		.title {
			font-size: 56rpx;
			font-weight: 500;
			color: $uni-text-color;
			line-height: 80rpx;
		}

		.slogan {
			font-size: 40rpx;
			color: $uni-text-color-grey;
			line-height: 56rpx;
		}

		.inputs {
			padding-top: 8rpx;

			input {
				padding-top: 40rpx;
				height: 88rpx;
				font-size: $uni-font-size-lg;
				font-weight: 500;
				color: $uni-text-color;
				line-height: 88rpx;
				border-bottom: 1rpx solid $uni-border-color;
			}
		}

		.tips {
			float: left;
			font-size: $uni-font-size-lg;
			color: $uni-color-warning;
			line-height: 56rpx;
		}
	}

	.submit {
		margin: 0 auto;
		width: 520rpx;
		height: 96rpx;
		background: $uni-color-primary;
		box-shadow: 0px 50rpx 32rpx -36rpx rgba(255, 228, 49, 0.4);
		border-radius: 48rpx;
		font-size: $uni-font-size-lg;
		font-weight: 500;
		color: $uni-text-color;
		line-height: 96rpx;
		text-align: center;
	}
</style>
