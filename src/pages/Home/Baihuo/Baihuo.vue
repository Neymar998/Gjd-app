<template>
  <div class="contain">
    <div class="top">
      <h1><a href="">日用百货</a></h1>
      <h2><a href="">滴露旗舰店</a></h2>
      <h2><a href="">水星家纺旗舰店</a></h2>
      <h2><a href="">戴森旗舰店</a></h2>
      <h2><a href="">碧然德旗舰店</a></h2>
      <h2><a href="">蕉下旗舰店</a></h2>
    </div>
    <div class="border">
      <div class="middle">
        <div class="left">
          <div v-for="one in baihuolist.one" :key="one.id">
            <img :src="one.imgUrl" alt="">
          </div>
        </div>
        <div class="middle-middle">
          <div>
            <img :src="baihuolist.two[0].imgUrl" alt="">
          </div>
        </div>
        <div class="right">
          <div v-for="three in baihuolist.three" :key="three.id">
            <img :src="three.imgUrl" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
            <ul>
                <li v-for="footter in baihuolist.footer" :key="footter.id">
                    <img :src="footter.imgUrl" alt="">
                </li>
            </ul>
        </div>
  </div>
</template>

<script>
export default {
  name: "Baihuo",
  props: ["baihuolist"],
};
</script>

<style scoped>
.contain {
  width: 1202px;
  margin: 30px auto;
}
.contain .top h2,
h1 {
  display: inline-block;
  margin-right: 30px;
}
.contain .top a:hover {
  color: red;
}
.contain .border {
  border: 1px solid rgb(227, 211, 211);
}
.contain .border .middle {
  display: flex;
  flex-direction: row;
}
.contain .border .middle .left {
  flex: 1;
  display: inline-block;
}
.contain .border .middle .left div{
  display: inline-block;
  border-right: 1px solid  rgb(227, 211, 211);
  border-bottom: 1px solid  rgb(227, 211, 211);
}
.contain .border .middle .middle-middle {
  flex: 1;
}
.contain .border .middle .right {
  flex: 1;
  height: 340px;
  display: block;
}
.contain .border .middle .right> div{
  display: inline-block;
    border-right: 1px solid  rgb(227, 211, 211);
  border-bottom: 1px solid  rgb(227, 211, 211);
}
.footer{
  display: block;
  height: 65px;
}
.footer ul {
    display: flex;
    flex-wrap: nowrap;
}
.footer ul > li {
    flex:1;
    float:left;
    height: 60px ;
}
.footer ul > li img{
    /* 水平居中 */
    margin-top: 8px;
    margin-left: 50%;
    transform: translateX(-50%);
}
</style>