<template>
  <div class="contain">
      <div class="books">
          <div class="top">
              <div class="name"><a>图书</a><a> 电子书</a></div>
              <div class="classify">
                  <ul>
                      <li>最新上架</li>
                      <li>独家畅品</li>
                      <li>重点推荐</li>
                      <li>电子书</li>
                  </ul>
              </div>
              <hr>
          </div>
          <div class="middle">
              <a href=""><img src="http://img57.ddimg.cn/9001320258587417.jpg" alt=""></a>
              <ul>
                  <li>书</li>
                  <li>书</li>
                  <li>书</li>
                  <li>书</li>
                  <li>书</li>
                  <li>书</li>
                  <li>书</li>
                  <li>书</li>
                  <li>书</li>
              </ul>
          </div>
      </div>
      <div class="rank">

      </div>
  </div>
</template>

<script>
export default {
    name:'Books'
}
</script>

<style scoped>
.contain{
    width: 1200px;
    margin: 50px auto;
}
.books{
    width: 900px;
    height: 440px;
    /* border: 1px solid burlywood; */
}
.top{
    border-bottom: 2px solid black;
}
.name{
    display: inline-block;
    width: 200px;
    font-size: 200%;
    height: 44px;
}
.name a{
    color: black;
    text-align: center;
    line-height: 44px;
}
.name a:hover{
    color: red;
}
.classify {
    display: inline-block;
    margin-left: 234px;
    margin-bottom: -16px;
}
.classify ul li{
    display: inline;
    width: 114px;
    height: 42px;
    float: left;
    text-align: center;
    line-height: 42px;
    border: 0.5px solid rgb(226, 223, 223); 
    background-color: rgb(226, 223, 223);
}
.classify ul li:hover{
    background-color: #fff;
    border-top: 2px solid black;
    border-left: 2px solid black;
    border-right: 2px solid black;
}
.middle{
    height: 440px;
}
.middle ul{
    width: 238px;
    height: 84px;
    margin-top: -84px;
    position: absolute;
    background-color: #fff ;
}
.middle ul li{
    display: inline-block;
    width: 33.3%;
    text-align: center;
}
</style>