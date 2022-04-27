<template>
  <div class="contain">
    <div class="top">
      <h1><a href="">孕婴童</a></h1>
      <h2><a href="">童书畅销榜</a></h2>
      <h2><a href="">童书3-6岁榜</a></h2>
      <h2><a href="">童书7-10岁榜</a></h2>
    </div>
    <div class="border">
        <div class="picture">
            <div class="one">
                <div class="one-one" v-for="oneone in babylist.one" :key="oneone.id">
                    <img :src="oneone.imgUrl">
                </div>
               
            </div>
            <div class="two">
                <img :src="babylist.two[0].imgUrl" alt="">
            </div>
            <div class="three">
                <div class="three-one" v-for="threeone in babylist.three" :key="threeone.id">
                    <img :src="threeone.imgUrl" alt="">
                </div>
               
            </div>
            <div class="four">
                <div class="four-one" v-for="fourone in babylist.four" :key="fourone.id">
                    <img :src="fourone.imgUrl" alt="">
                </div>
            </div>
            <div class="five">
                <div class="five-one" v-for="fiveone in babylist.five" :key="fiveone.id">
                    <img :src="fiveone.imgUrl" alt="">
                </div>
            </div>
        </div>
        <div class="footer">
            <ul>
                <li v-for="footter in babylist.footer" :key="footter.id">
                    <img :src="footter.imgUrl" alt="">
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Baby",
  props:["babylist"]
}
</script>

<style scoped>
.contain {
  width: 1200px;
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
.picture{
    display: flex;
    flex-direction: row;
    height: 400px;
}
.one{
    flex:1
}
.one-one{
    border-bottom: 1px solid  rgb(227, 211, 211) ;
    width: 100%;
    height: 50%;
}
.two{
    width: 314px;
}
.three{
    flex:1
}
.three-one{
    border-bottom: 1px solid  rgb(227, 211, 211) ;
    width: 100%;
    height: 50%;
}
.four{
    flex:1
}
.four-one{
    border-bottom: 1px solid  rgb(227, 211, 211) ;
    width: 100%;
    height: 50%;
}
.five{
    flex:1
}
.five-one{
    border-bottom: 1px solid  rgb(227, 211, 211) ;
    width: 100%;
    height: 50%;
}
.one,.two,.three,.four{
    border-right: 1px solid  rgb(227, 211, 211);
}
.footer{
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