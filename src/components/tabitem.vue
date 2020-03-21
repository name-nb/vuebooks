<template>
	<div>
        <div class="tabitem" @click="fn()">
            <span v-show='!bol'><slot name='img1'></slot></span>
            <span v-show='bol'><slot name='img2'></slot></span>
            <p :class="{active:bol}">{{title}}</p>
	    </div>
    </div>
</template>

<script>

	export default{
        name:"tabitem",
        data(){
            return{
                selected:'sellbook'
            }
        },
        computed:{
            bol(){
                if(this.mark==this.selected){
                        return false
                    }
                if(this.mark==this.active){
                    
                    return true
                }else{
                    return false
                }
            }
        },
        props:["title","mark","active"],
        methods:{
            fn(){
                this.$emit("myzi",this.mark)
                this.$router.push("/"+this.mark)
                
            }
        }
	}
</script>
<style>
	.tabitem {
		width: 20%;
		float: left;
		text-align: center;
        font-size: 0.8rem;
	}
	.tabitem img{
        width: 1.7rem;
        padding: 0.3rem 0 0.3rem 0;
    }
	.tabitem  .active{ color:rgb(66,189,86)}

</style>