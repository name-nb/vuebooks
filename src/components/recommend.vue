<template>
	<div class="bbb">
        <div class="dang"></div>
        <div class="recommend">

            <span>好书推荐</span>
            <span @click="skip()">更多></span>
        </div>
		<div class="recommendbook">
            <div v-for="item in arrs" @click="fn(item.id)" :key="item.id">
                <img :src="item.img" alt="">
                <p>{{item.title}}</p>
                <div>
                    <span>{{item.price}}</span>
                    <span>{{item.count}}</span>
                </div>
            </div>
            
        </div>
        <div class="diban"></div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default{
        name:"recommend",
        data(){
            return{
                arr:[],
                arrs:{
                    
                }
            }
        },
		created(){ 
            this.show()
            
        },
        methods:{
           async show(){
                let res = await this.$ajax.douban("../../static/json/list.json")
                this.arr=res
                this.arrs=this.arr.filter((res)=>res.img)
            },
            fn(id){
                this.$router.push("/recommendlist/"+id)
            },
            skip(){
                this.$router.push("/goodbook")
            }
        }
        
	}
</script>
<style>

.dang{
    width: 100%;
    height: 0.5rem;
    background: rgb(217, 221, 223);
}
.recommend{
    width: 100%;
    height: 3rem;
    border-bottom: solid 1px rgb(217, 221, 223);
    box-sizing: border-box;
    font-size: 0.7rem;
}
.recommend span{
    display: inline-block;
    line-height: 3rem;
}
.recommend span:nth-last-child(1){
    float: right;
    color: springgreen;
}
.recommend span:nth-last-child(2){
    padding-left: 0.4rem;
    float: left;
    border-left:solid 0.3rem rgb(160, 149, 233) ;
}


.recommendbook{
    width: 100%;
    display: flex;
    justify-content:space-around;
    flex-wrap:wrap;
    font-size: 0.7rem;
}
.recommendbook>div{
    width: 30%;
    margin-top: 0.4rem;
}
.recommendbook div img{
    width: 100%;
}
.recommendbook span:nth-last-child(1){
    color: rgb(155, 180, 180);
    text-decoration:line-through;
}
.recommendbook span:nth-last-child(2){
    color: rgb(38, 194, 160);
    
}
.diban{
    width: 100%;
    height: 4rem;
}
</style>