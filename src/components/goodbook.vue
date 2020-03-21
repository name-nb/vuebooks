<template>
	<div >
        <!-- 返回 -->
        <mt-header title="好书推荐" class="goodbooks">
            <router-link to="/home" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>

        <div class="goodbook">
            <router-link tag='div' active-class='bg' to='/goodbook/suoyou'>所有分类</router-link >
            <router-link tag='div' active-class='bg' to='/goodbook/wenxue'>文学艺术</router-link >
            <router-link tag='div' active-class='bg' to='/goodbook/renwen'>人文社科</router-link >
            <router-link tag='div' active-class='bg' to='/goodbook/jingji'>经济管理</router-link >
            <router-link tag='div' active-class='bg' to='/goodbook/shenghuo'>生活休闲</router-link >
             <router-link tag='div' active-class='bg' to='/goodbook/shenghuo'>生活休闲</router-link >
        </div>
        <div class="dang"></div>
        <router-view></router-view>
		
	</div>
</template>

<script>
	import Vue from 'vue'
import { Header } from 'mint-ui';

Vue.component(Header.name, Header);
	export default{
		name:"goodbook",
		components:{
			
		}
	}
</script>
<style>
.goodbooks{
    background:  #01C7B4;
    position:sticky;
    top: 0;
}
.goodbook{
    position:sticky;
    top: 2.3rem;
    background: white;
    display: -webkit-box;
    overflow-x: auto;
    font-size: 0.8rem;
            /*适应苹果*/
    -webkit-overflow-scrolling:touch;
}
.goodbook div{
    width: 22%;
	height: 40px;
	line-height: 40px;
}
.goodbook::-webkit-scrollbar{
            display: none;
       }
.bg{
	color: rgb(0, 197, 49);
}
</style>