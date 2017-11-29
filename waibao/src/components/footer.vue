<template>
  		<div class="footer">
			<el-tabs v-model="initTab" >
				<el-tab-pane label="停止运动" name="1"></el-tab-pane>
				<el-tab-pane label="手动控制关" name="2">手动控制关</el-tab-pane>
				<el-tab-pane label="卫星数据库" name="3">卫星数据库</el-tab-pane>
				<el-tab-pane label="寻星精灵" name="4">寻星精灵</el-tab-pane>
				<el-tab-pane label="高级功能" name="5">
					<el-checkbox-group style="margin-top:5px;" class="border box" v-model="checkList">
						<div class="mt">
							<el-checkbox label="俯仰校准"/>
							<input class="mr"  type="text" name="" id="">
						</div>
						<div  class="mt"> 
							<el-checkbox label="方位校准"/>
							<input class="mr" type="text" name="" id="">
						</div>
						<div  class="mt">
							<el-checkbox label="极化校准"/>
							<input class="mr"  type="text" name="" id="">
						</div>
						<el-button size="small" type="info" v-text="'写下机位'" plain/>
					</el-checkbox-group>
				</el-tab-pane>
			</el-tabs>
		</div>
</template>

<script>
const cityOptions = ["上海", "北京", "广州", "深圳"];
export default {
  data() {
    return {
      initTab: "5",
      checkList: ["选中且禁用", "复选框 A"]
    };
  }
};
</script>

<style scoped>
.footer {
  padding: 0 20px;
  padding-bottom: 20px;
  margin-top: 20px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
}
.mr {
  margin-left: 20px;
}
.mt {
  margin: 5px 0;
}
input {
  width: 50px;
  outline: none;
}
</style>
