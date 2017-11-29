<template>
	<div id="app">
    <left/>
    <right/>
    <bottom/>
	</div>
</template>

<script>
import left from "@/components/left";
import right from "@/components/right";
import bottom from "@/components/footer";
export default {
  components: { left, right, bottom }
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.border {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
  margin-bottom: 20px;
}
html,
body {
  height: 100%;
}
#app {
  width: 920px;
  margin: 10px auto;
  font-size: 13px;
  padding: 20px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
}

hr {
  margin: 15px -10px;
}
.title::before {
  content: "";
  border-left: 0.5rem solid #f66;
  position: relative;
  left: -0.5rem;
  height: 75%;
}
.box{
  padding: 10px
}
  input {
    width: 102px;
    height: 25px;
    outline: none;
    padding-left: 5px;
    border-radius: 3px;
    border: 1px solid #ccc;
  }
</style>
