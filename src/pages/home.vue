<template>
	<div>
        <!-- 头部 -->
        <Tops>
            <div class="tops" slot="img1">
                <div class="tops1">
                    <img src="../../static/img/home/ic_channel_content_location_flag.png" alt="">
                </div>
                <div class="tops2">
                    <div class="tops2-1">
                        <img src="../../static/img/home/ic_group_tab_search.png" alt="">
                    </div>
                    <div class="tops2-2">
                        <input type="text" placeholder="请输入书名">
                    </div>
                </div>
            </div>
        </Tops>
        <Homemenu></Homemenu>
         <Cecommend></Cecommend>
	</div>
</template>

<script>
import Tops from "../components/tops" //头部
import Homemenu from "../components/homemenu" //所有分类
import Cecommend from "../components/recommend"
	export default{
                name:"home",
                components:{
                Tops,Homemenu,Cecommend
                }
	}
</script>
<style>
</style>