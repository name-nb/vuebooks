<template>
	<div>
        <div class="tabbar">
            <Tabitem title="首页" mark="home" :active="sel" @myzi="getVal">
                <img src="../../static/img/images/home.png" slot='img1' alt="">
                <img src="../../static/img/images/home_active.png" slot='img2' alt="">
            </Tabitem>
            <Tabitem title="书友" mark="friendbook" :active="sel" @myzi="getVal">
                <img src="../../static/img/images/user_list.png" slot='img1' alt="">
                <img src="../../static/img/images/user_list_active.png" slot='img2' alt="">
            </Tabitem>
            <Tabitem title="出售" mark="sellbook" :active="sel" @myzi="getVal">
                <img src="../../static/img/images/add.png" slot='img1' alt="">

            </Tabitem>
            <Tabitem title="消息" mark="newsbook" :active="sel" @myzi="getVal">
                <img src="../../static/img/images/message.png" slot='img1' alt="">
                <img src="../../static/img/images/message_active.png" slot='img2' alt="">
            </Tabitem>
            <Tabitem title="我的" mark="mybooks" :active="sel" @myzi="getVal">
                <img src="../../static/img/images/user.png" slot='img1' alt="">
                <img src="../../static/img/images/user_active.png" slot='img2' alt="">
            </Tabitem>
        </div>
    </div>
</template>

<script>
import Tabitem from './tabitem'
	export default{
        name:"tabbar",
        components:{
            Tabitem
        },
        data(){
            return{
                sel:"home",
            }
        },
        methods:{
            getVal(val){
                this.sel=val
            }
        }
	}
</script>
<style>
.tabbar{
    width: 100%;
    height: 4rem;
    position: fixed;
    bottom: 0;
    background: white;
}
</style>