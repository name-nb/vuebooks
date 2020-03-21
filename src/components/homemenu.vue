<template>
	<div>
		<div class="homemenu">
            <div class="homemenu1">
                <img src="../../static/img/images/Screenshot_2020-03-19-12-02-36-43_a013aec3aaebb7e_03.png" alt="">
                <p>所有分类</p>
            </div>
            <div class="homemenu2">
                 <img src="../../static/img/images/Screenshot_2020-03-19-12-02-36-43_a013aec3aaebb7e_05.png" alt="">
                 <p>文学艺术</p>
            </div>
            <div class="homemenu3">
                <img src="../../static/img/images/Screenshot_2020-03-19-12-02-36-43_a013aec3aaebb7e_07.png" alt="">
                 <p>人文社科</p>
            </div>
            <div class="homemenu4">
                <img src="../../static/img/images/Screenshot_2020-03-19-12-02-36-43_a013aec3aaebb7e_09.png" alt="">
                 <p>经济管理</p>

            </div>
            <div class="homemenu5">
                <img src="../../static/img/images/Screenshot_2020-03-19-12-02-36-43_a013aec3aaebb7e_11.png" alt="">
                 <p>生活休闲</p>
            </div>
            <div class="homemenu6">
                <img src="../../static/img/images/Screenshot_2020-03-19-12-02-36-43_a013aec3aaebb7e_18.png" alt="">
                 <p>外语学习</p>
            </div>
            <div class="homemenu7">
                <img src="../../static/img/images/Screenshot_2020-03-19-12-02-36-43_a013aec3aaebb7e_19.png" alt="">
                 <p>自然科学</p>
            </div>
            <div class="homemenu8">
                <img src="../../static/img/images/Screenshot_2020-03-19-12-02-36-43_a013aec3aaebb7e_20.png" alt="">
                 <p>考试教育</p>
            </div>
            <div class="homemenu9">
                <img src="../../static/img/images/Screenshot_2020-03-19-12-02-36-43_a013aec3aaebb7e_21.png" alt="">
                 <p>计算机</p>
            </div>
            <div class="homemenu9">
                <img src="../../static/img/images/Screenshot_2020-03-19-12-02-36-43_a013aec3aaebb7e_22.png" alt="">
                 <p>医学</p>
            </div>
        </div>
	</div>
</template>

<script>

	export default{
		name:"homemenu",
		components:{
			
		}
	}
</script>
<style>
.homemenu{
    width: 100%;
    display: flex;
     flex-wrap:wrap;
}
.homemenu div{
    height: 4rem;
    padding: 0.3rem;
    width: 17%;
    
}
.homemenu img{
    width: 2.3rem;
}
.homemenu p{
    font-size: 0.6rem;
}

</style>