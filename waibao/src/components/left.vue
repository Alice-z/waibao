<template>
	<div id="left">
			<!-- 通信方式 start -->
			<el-tag type="info">通信方式</el-tag>
			<div class="border info">
				<div class="line">
					<span>串口通信 串口号:</span>
          <input type="text" name="" id="" v-model="value" size="mini" :disabled="gorgeType?false:true"  style="width:60px">
					<el-button @click="gorge" :type="gorgeType?'success':'danger'" size="mini">{{gorgeType?'串口开':'串口关'}} </el-button>
				</div>
				<div class="line">
					<span>网络通信:</span>
					<input :disabled="portType?false:true"></input>
					<el-button @click="set_port" :type="portType?'success':'danger'" size="mini">{{portType?'网络开':'网络关'}} </el-button>
				</div>
			</div>
			<!-- 通信方式 end -->

			<!-- 自动对星 start -->
			<el-tag type="info">自动对星操作</el-tag>
			<div class="border start">
				<div class="line title">第一步 确认GPS信息</div>
				<div class="line">
					<label>经度</label>
					<input type="text" class="mr">
					<label>区域</label>
					<el-select v-model="value" size="mini" style="width:60px">
						<el-option v-for="item in options" :key="item.value" :disabled="gorgeType?false:true" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</div>
				<div class="line">
					<label>纬度</label>
					<input type="text" class="mr">
					<label>位置</label>
					<el-select v-model="value" size="mini" style="width:60px">
						<el-option v-for="item in options" :key="item.value" :disabled="gorgeType?false:true" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</div>
				<hr>
				<div class="line title">第二步 设置卫星参数</div>
				<div class="line">
					<label>卫星名称:</label>
					<el-select class="mr" v-model="value" size="mini" style="width:60px">
						<el-option v-for="item in options" :key="item.value" :disabled="gorgeType?false:true" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
					<label>卫星经度:</label>
					<input type="text">
				</div>
				<div class="line">
					<label>极化方式:</label>
					<el-select class="mr" v-model="value" size="mini" style="width:60px">
						<el-option v-for="item in options" :key="item.value" :disabled="gorgeType?false:true" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
					<label>卫星频率:</label>
					<input type="text">
				</div>
				<hr style="opacity:0" >
				<hr >
				<!-- 自动寻星 -->
				<div class="line title">第三步 自动寻星</div>
				<el-button style="margin-left:70px" type="info" icon="el-icon-search">寻星</el-button>
				<el-button style="margin-left:70px" type="info" icon="el-icon-star-on">收藏</el-button>
			</div>
			<!-- 自动对星 end -->
		</div>
</template>

<script>
export default {
  data() {
    return {
      gorgeType: true,
      port: "192.168.0.102",
      portType: true,
      options: [
        {
          value: "1",
          label: "1"
        }
      ],
      value: 1
    };
  },
  methods: {
    gorge() {
      this.gorgeType = !this.gorgeType;
    },
    set_port() {
      this.portType = !this.portType;
    }
  },
  created() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#left {
  width: 450px;
  height: 500px;
  float: left;
  &::after {
    display: block;
    content: "";
    clear: both;
  }
  .info {
    height: 100px;
    padding: 20px;
  }
  .sele {
    width: 70px;
    height: 20px;
  }

  .line {
    margin-bottom: 10px;
  }
  .el-select-dropdown__item {
    padding: 0 10px !important;
    height: 20px !important;
  }
  .start {
    height: 360px;
    padding: 20px;
  }
label {
  margin-right: 10px;
}
  .mr {
    margin-right: 20px;
  }

}
</style>
