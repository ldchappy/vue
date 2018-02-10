<template>
	<div class="commend_">
		<div class="commend_header">
			<h3>推荐歌单</h3>
		</div>
		<div class="commend_main">
			<ul v-for="item in gedan">
				<li><span>{{item.playCount}}</span><img class="img" src="" alt=""><p>{{item.name}}</p></li>
			</ul>
		</div>
	</div>
</template>

<script>
	import commonUrl from './common.js'
	export default{
		data(){
			return{
				gedan : [],
			}
		},
		created(){
			this.getGedan()
		},
		methods:{
			getGedan:function(){
				const url = commonUrl.apihost + '/personalized';
				this.$http.get(url).then(function(response){
					this.gedan = response.body.result
				},function(error){

				})
			}

		}
	}
</script>
<style src="../css/commend.scss" lang="scss" scoped></style>
