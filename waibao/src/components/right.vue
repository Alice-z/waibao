<template>
	<div id="right">
    <el-tag v-text="'天线状态信息'"  type="info" />
    <div class="border box"  >
      <div>
      <label  for="" v-text="'方位:'"/>
      <input class="label" type="text" disabled placeholder="00:00">
      <label  for="" v-text="'俯仰:'"/>
      <input class="label" type="text" disabled placeholder="00:00">
      </div>
      <div>
      <label  for="" v-text="'极化:'"/>
      <input class="label" type="text" disabled placeholder="00:00">
      <label  for="" v-text="'电平:'"/>
      <input class="label" type="text" disabled placeholder="00:00">
      </div>
    </div>
    <el-tag v-text="'手动控制操作'"  type="info" />
    <div class="border box">
      <div style="width:50%;margin:0 auto">
        <el-radio-group size="mini" v-model="radio">
          <el-radio-button label="连续运动"/>
          <el-radio-button label="点动运动"/>
        </el-radio-group>
        <p>
        <el-button size="small" type="info" class="size none el-icon-arrow-up"  plain/>
        <el-button size="small" type="info" class="size el-icon-caret-top"  plain/>
        <el-button size="small" type="info" class="size none el-icon-arrow-up"  plain/>
      </p> 
      <p> 
        <el-button size="small" type="info" class="size el-icon-caret-left"  plain/>
        <el-button size="small" type="info" class="size el-icon-menu red" plain/>
        <el-button size="small" type="info" class="size el-icon-caret-right"   plain/>
      </p> 
      <p> 
        <el-button size="small" type="info" class="size" v-text="'顺'"  plain/>
        <el-button size="small" type="info" class="size el-icon-caret-bottom"  plain/>
        <el-button size="small" type="info" class="size" v-text="'逆'"  plain/>
      </p>
      </div>
    </div>
    <el-tag v-text="'天线状态信息'"  type="info" />
    <div class="border box">
      <textarea name="" id="" cols="60" rows="6">Send:(M)
      </textarea>
    </div>    
	</div>
</template>

<script>
export default {
data(){
  return{
    radio:''
  }
}
}
</script>

<style scoped>
#right {
  margin-left: 470px;
  height: 540px;
}
.none{
  opacity: 0;
}

.label{
  margin: 5px 0
}
.size{
  font-size: 20px;
  margin: 4px 2px;
  color: blue
}
.red{
  color: red
}
input{
  background: #878d99;
  color: green;
  border: none;
  height: 30px;
  width: 100px;
  text-align: center;
  font-size: 20px
}
textarea{
  outline: none
}
</style>
