<template>
	<div>
		<div class="dang1"></div>
		<div class="tops">
			<slot name='img1'></slot>
			<slot name='p1'></slot>
			<slot name='p2'></slot>
		
		</div>
	</div>
</template>

<script>
	export default{
		name:"tops"
	}
</script>
<style>
.dang1{
	 width: 100%;
    height: 3rem;
}
.tops{
    width: 100%;
    height: 3rem;
    position:fixed;
    top: 0;
    background: #01C7B4;
	display: flex;
	color: white;
}
.tops1 img{
	width: 1.7rem;
	margin: 0.6rem;
}
.tops2{
	width: 15rem;
	height: 1.8rem;
	margin: 0.6rem 0rem 0 1.5rem;
	border-radius: 20rem;
	background: #52806a;
	display: flex;
	overflow: hidden;
}
.tops2-1{
	width: 15%;
	
}
.tops2-1 img{
	margin-top: 0.2rem;
	width: 1.5rem;
}
.tops2-2{
	width: 85%;
}
.tops2-2 input{
	width: 100%;
	height: 100%;
	outline: none; 
	background: #52806a;
	border: none;
}
input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
    color: white;
                /*  text-align: right;*/
}
.tops3{
	margin-top:0.3rem ;
	flex: 1;
	text-align: center;
	font-size: 0.8rem;
	
}
.friend li{
	display: inline-block;
	margin-left: 1rem;
	padding: 0.2rem 0.6rem 0.2rem 0.6rem;
	border: solid 1px white;
	border-radius:20rem ;
}
.friend img{
	width: 1.8rem;
	margin-bottom:-0.5rem ;
}
.friend :nth-last-child(1){
	border:none;
	margin-left: 1.5rem;

}
.tops4{
	width: 100%;
	line-height: 3rem;
	text-align: center;
}
</style>