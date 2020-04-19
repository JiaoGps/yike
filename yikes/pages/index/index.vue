<template>
	<view class="content">
		<view class="top-bar">
			<navigator url="../userhome/userhome?id=1" hover-class="none">
				<view class="top-bar-left">
					<image src="../../static/images/img/fulib1.jpg" class="Avatar-img"></image>
				</view>
			</navigator>
			<view class="top-bar-center">
				<image class="logo" src="../../static/images/index/logo.png" ></image>
			</view>
			<view class="top-bar-right">
				<view class="search" @tap="toSearch">
					<image src="../../static/images/index/search.png" mode=""></image>
				</view>
				<view class="add">
					<image src="../../static/images/index/add.png" mode=""></image>
				</view>
			</view>
		</view>

		<view class="main">
			<view class="apply">
				<view class="friends-list">
					<view class="friends-list-l">
						<text class="tip">1</text>
						<image src="../../static/images/img/fulibl3.png" mode=""></image>
					</view>
					<view class="friends-list-r">
						<view class="top">
							<view class="name">好友申请</view>
							<view class="time">23:23</view>
						</view>
						<view class="news">test</view>
					</view>
				</view>
			</view>
			<view class="friends">
				<view class="friends-list" v-for="(item ,index) in friends" :key="index">
					<view  class="friends-list-l">
						<text class="tip" v-if="item.tip>0">{{item.tip}}</text>
						<image :src="item.imgurl" mode=""></image>
					</view>
					<view class="friends-list-r">
						<view class="top">
							<view class="name">{{item.name}}</view>
							<view class="time">{{changTime(item.time)}}</view>
						</view>
						<view class="news">{{item.news}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import datas from '../../commons/js/datas.js'
	import myfun from '../../commons/js/myfun.js'
	export default {
		data() {
			return {
				friends: [],
			}
		},
		onLoad() {
			this.getFrinds()
		},
		methods: {
			changTime: function(date) {
				return myfun.dateTime(date)
			},
			getFrinds: function() {
				this.friends = datas.friends();
				for (let i in this.friends) {
					this.friends[i].imgurl = '../../static/images/img/' + this.friends[i].imgurl
				}

				console.log(this.friends)
			},
			//跳转到注册页面
			toSearch: function() {
				uni.navigateTo({
					url: '../search/search',
				});
			},
		}
	}
</script>

<style lang="scss">
	@import "../../commons/css/mycss.scss";

	// .content {
	// 	display: flex;
	// 	flex-direction: column;
	// 	align-items: center;
	// 	justify-content: center;
	// 	padding-top: var(--status-bar-height);
	// }
	.top-bar {
		background: rgba(255, 255, 255, 0.96);
		border-bottom: 1rpx solid $uni-border-color;
	}
	
	.main {
		padding-top: 104rpx;
		padding-bottom: $uni-spacing-col-lg;
		//border: 1px solid red;
		//width: 90%;
	}

	.friends-list {

		height: 96rpx;
		padding: 16rpx $uni-spacing-col-base;

		&:active {
			background-color: $uni-bg-color-grey;
		}

		.friends-list-l {
			position: relative;
			float: left;

			image {
				width: 96rpx;
				height: 96rpx;
				border-radius: $uni-border-radius-base;
				background-color: $uni-color-primary;
			}

			.tip {
				position: absolute;
				z-index: 10;
				top: -8rpx;
				left: 68rpx;
				min-width: 20rpx;
				padding: 0 8rpx;
				height: 36rpx;
				background: $uni-color-warning;
				border-radius: 18rpx;
				font-size: $uni-font-size-sm;
				color: $uni-text-color-inverse;
				line-height: 36rpx;
				text-align: center;
			}
		}

		.friends-list-r {
			padding-left: 128rpx;

			.top {
				height: 50rpx;

				.name {
					float: left;
					font-size: 36rpx;
					font-weight: 400;
					color: $uni-text-color;
					line-height: 50rpx;
				}

				.time {
					//display: none;
					float: right;
					font-size: $uni-font-size-sm;
					color: $uni-text-color-disable;
					line-height: 50rpx;
				}
			}
		}

		.news {
			font-size: $uni-font-size-base;
			color: $uni-text-color-grey;
			line-height: 40rpx;
			white-space: normal;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 1;
			-webkit-box-orient: vertical;
			word-break: break-all;
		}
	}
</style>
