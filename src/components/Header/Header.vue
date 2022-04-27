<template>
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <div class="in">
            <span>送至：</span>
            <span>北京</span>
          </div>
        </div>
        <div class="typeList">
          <ul>
            <li>
              <p v-show="!phone">
                <router-link to="/login">登录</router-link>
                <span>成为会员</span>
              </p>
              <p v-show="phone">
                <span>当当欢迎您：{{ phone }}</span>
                <a href="" @click.prevent="leavelogin">退出登录</a>
              </p>
            </li>
            <li>
              <a href="" @click.prevent="gotoshopcart">购物车</a>
            </li>
            <li>
              <a href="###">我的云书房</a>
            </li>
            <li>
              <a href="###">我的当当</a>
              <div>
                <a href="">银铃铛抵现</a>
                <a href="">我的收藏</a>
                <a href="">我的余额</a>
                <a href="">我的评论</a>
                <a href="">礼券礼品卡</a>
              </div>
            </li>
            <li>
              <a href="###">当当拼团</a>
              <div><a href="">当当拼团</a></div>
            </li>
            <li><a href="###">我的订单</a></li>
            <li><a href="###">小说投稿</a></li>
            <li>
              <a href="###">企业采购</a>
              <div>
                <a href="">大宗采购</a>
                <a href="">礼品卡采购</a>
                <a href="">礼品卡激活</a>
                <a href="">礼品卡使用</a>
                <a href="">分销/荐购</a>
                <a href="">礼品卡专区</a>
              </div>
            </li>
            <li>
              <a href="###">客服服务</a>
              <div>
                <a href="">帮助中心</a>
                <a href="">自动退换货</a>
                <a href="">自动发票</a>
                <a href="">联系客服</a>
                <a href="">我要投诉</a>
              </div>
            </li>

            <li><a href="###">切换无障碍</a></li>
          </ul>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <router-link class="logo" to="/home">
          <img src="./images/logo.png" />
        </router-link>
      </h1>
      <div class="searchArea">
        <form action="###" class="searchForm">
          <input
            type="text"
            id="autocomplete"
            class="input-error input-xxlarge"
            v-model="keyword"
          />
          <button
            class="sui-btn btn-xlarge btn-danger"
            type="button"
            @click="goSearch"
          >
            搜索
          </button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      keyword:'',
      searchParams:{
        category1Id:'',
        category3Id:'',
        category2Id:'',
        categoryName:'',
        keyword:this.keyword,
        order:'',
        pageNo:1,
        pageSize:3,
        props:[],
        trademark:'',
      },
    };
  },
  computed:{
    phone(){
      return localStorage.getItem('phone')
    }
  },
  methods: {
    goSearch() {
    if(this.$route.path!='search'){
      this.$router.push({
        name: "search",
        // params: { keyword: this.keyword },
        // query: { k: this.keyword.toUpperCase() },
      });
    }
    //Object.assign(this.searchParams,this.$route.query,this.$route.params)
    this.$store.dispatch('getSearchList',this.searchParams)
    this.$store.dispatch('getgoods')
    },
    leavelogin(){
      localStorage.clear()
    },
    gotoshopcart(){
      if(localStorage.getItem('phone')){
        this.$router.push('/shoppingcart')
      }
      else{
        if(confirm('请先登录')){
          this.$router.push('/login')
        }
      }
    }
  },
};
</script>
<style scoped>
.header > .top {
  background-color: #f9f9f9;
  height: 30px;
  line-height: 30px;
}

.header > .top .container {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}

.header > .top .container .loginList {
  float: left;
}

.header > .top .container .typeList p {
  float: left;
}
.header > .top .container .loginList .in .place {
  display: none;
}

.header > .top .container .typeList {
  float: right;
}
.header > .top .container .typeList p a {
  color: red;
  margin-right: -10px;
}
.header > .top .container .typeList ul li {
  float: left;
  position: relative;
  text-align: center;
}
.header > .top .container .typeList ul li:hover div {
  display: block;
}
.header > .top .container .typeList ul li:hover > a {
  color: #ea4a36;
  text-decoration: none;
}
.header > .top .container .typeList ul li div {
  width: 84px;
  /* position: absolute; */
  background-color: white;
  display: none;
}
.header > .top .container .typeList ul li div a {
  /* display:table-cell;
    vertical-align:middle; */
  display: block;
  text-align: center;
}
.header > .top .container .typeList ul li a {
  padding: 0 10px;
}

.header > .bottom {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}

.header > .bottom .logoArea {
  float: left;
}

.header > .bottom .logoArea .logo img {
  width: 175px;
  margin: 25px 45px;
}

.header > .bottom .searchArea {
  float: right;
  margin-top: 35px;
}

.header > .bottom .searchArea .searchForm {
  overflow: hidden;
}

.header > .bottom .searchArea .searchForm input {
  box-sizing: border-box;
  width: 490px;
  height: 32px;
  padding: 0px 4px;
  border: 2px solid #ea4a36;
  float: left;
}
.header > .bottom .searchArea .searchForm input:focus {
  outline: none;
}

.header > .bottom .searchArea .searchForm button {
  height: 32px;
  width: 68px;
  background-color: #ea4a36;
  border: none;
  color: #fff;
  float: left;
  cursor: pointer;
}

.header > .bottom .searchArea .searchForm button:focus {
  outline: none;
}
</style>