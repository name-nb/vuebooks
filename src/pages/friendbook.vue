<template>
	<div class="friendbook">
		<Tops>
			<div class="tops" slot="p1">
				<div class="tops3">
					<ul class="friend">
						<li>最新注册</li>
						<li>最多关注</li>
						<li>最多出售</li>
						<li><img src="../../static/img/home/ic_group_tab_search.png" alt=""></li>
					</ul>
				</div>
			</div>
		</Tops>
		<div>
				friendbook
		</div>
	</div>
</template>

<script>
import Tops from "../components/tops"
	export default{
		name:"friendbook",
		components:{
			Tops
		}
	}
</script>
<style>

</style>