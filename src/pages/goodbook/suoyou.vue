<template>
	<div >
		<div class="suoyou" v-for='item in arr' :key='item.id'>
			<div class="suoyou1">
				<div class="suoyou1-1">
					<img :src="item.head" alt="">
				</div>
				<div class="suoyou1-2">
					<span>{{item.name}}</span>
				</div>
				<div class="suoyou1-3">
					<span>{{item.school}}</span>
				</div>
			</div>
			<div class="suoyou2">
				<div class="suoyou2-1">
					<img :src="item.imgs" alt="">
				</div>
				<div class="suoyou2-2">
					<h4>{{item.title}}</h4>
					<span v-for="res in item.brieft">{{res}}丨</span>
					<p><span>{{item.price}}</span><span>{{item.count}}</span></p>
				</div>
			</div>
			<div class="dang">
				
			</div>
		</div>
	</div>
</template>

<script>
	
	export default{
		name:"suoyou",
		created(){
			this.show()
		},
		data(){
			return{
				arr:[]
			}
		},
		methods:{
			async show(){
				let res = await this.$ajax.douban("../../../static/json/personal.json")
				this.arr=res;
			}
		}
	}
</script>
<style>
.dang{
	padding: 0;
	margin: 0;
}
.suoyou{
	display: flex;
	flex-direction: column;

}
.suoyou1{
	flex: 1;
	display: flex;
	padding: 0rem 0 0.7rem 0;
	border-bottom:solid 1px rgb(248, 245, 242) ;
	font-size: 0.8rem;
		padding: 0.4rem;
}
.suoyou1-1{
	width: 10%;
	display: flex;
	border: solid 1px black;
	box-sizing: border-box;
	background: rgb(189, 186, 184);
	border-radius: 50% ;
}
.suoyou1-1 img{
	width: 100%;
}
.suoyou1-2{
	width: 60%;
	margin-left: 1rem;
	display: flex;
	align-items: center;
}
.suoyou1-3{
	width: 30%;
	display: flex;
	text-align: right;
	align-items: center;
}
.suoyou2{
	padding-top: 0.5rem;
	flex: 1;
	display: flex;
	text-align: left;
}
.suoyou2-1{
	width: 30%;
	padding: 0.4rem;
}
.suoyou2-1 img{
	width: 80%;
}
.suoyou2-2{
	width: 70%;
	padding: 0.5rem;
}
.suoyou2-2>span{
	font-size: 0.7rem;
	display: inline-block;
	padding: 1rem 0 1rem 0;
}
.suoyou2-2>p> span:nth-last-child(1){
    color: rgb(155, 180, 180);
    font-size: 0.6rem;
    margin-left: 1rem;
    text-decoration:line-through;
}
.suoyou2-2>p> span:nth-last-child(2){
    color: #01C7B4;
    
}
</style>