<template>
	<div >
        <!-- 返回 -->
        <mt-header title="出售详情" class="recommendlists">
            <router-link to="/home" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>

		<div class="recommendlist" v-for='item in arr' :key='item.id'>
            <div class="recommendlist1">
                <img :src="item.img" alt="">
            </div>
            <div class="recommendlist2">
                <div>
                    <h4>{{item.title}}</h4>
                    <div>
                        <span>{{item.price}}</span>
                        <span>{{item.count}}</span>
                    </div>
                </div>

            </div>
            <div class="recommendlist3">
                <p>{{item.sum}}</p>
            </div>
            <div class="recommendlist4">

            </div>
        </div>
	</div>
</template>

<script>
import Vue from 'vue'
import { Header } from 'mint-ui';

Vue.component(Header.name, Header);
	export default{
        name:"recommendlist",
        data(){
            return{
                arr:[],
                arrs:{}
            }
        },
        created(){
            this.show()
        },
		methods:{
		    async show(){
                let id = this.$route.params.id;
                this.arr = await this.$ajax.douban("../../static/json/details.json")
                this.arr=this.arr.filter((res)=>res.id==id)

            //    this.arrs=this.arr.find((item)=>item.id==id)
              
            }
		}
	}
</script>
<style>
.recommendlists{
    background:  #01C7B4;
}
.recommendlist{
	width: 100%;
    display: flex;
    flex-direction: column;
    text-align: left;
   
}
.recommendlist1{
    width: 100%;
    
    height: 15rem;
    
    text-align:center;
    background: rgb(224, 234, 235);
}
.recommendlist1 img{
    margin-top: 3%;
    height: 100%;
    height: 90%;
}
.recommendlist2{
    height: 5rem;
   padding: 0.5rem;
   line-height: 5rem;
   border-bottom: solid 1px rgb(228, 235, 238);
}
.recommendlist2 h4{
    display: inline-block;
}
.recommendlist2>div> div{
    display: inline-block;
    float: right;
}
.recommendlist2 span:nth-last-child(1){
    color: rgb(155, 180, 180);
    font-size: 0.6rem;
    
    text-decoration:line-through;
}
.recommendlist2 span:nth-last-child(2){
    color: rgb(212, 21, 69);
    
}
.recommendlist3{
    padding: 0.5rem;
    font-size: 0.7rem;
    color: rgb(155, 180, 180);
}
</style>