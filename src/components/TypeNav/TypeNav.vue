<template>
  <div class="type-nav">
    <div class="container" @mouseleave="leavenotshow">
      <h2 class="all" @mouseenter="entershow">全部商品分类</h2>
      <nav class="nav">
        <a href="###">图书</a>
        <a href="###">电子书</a>
        <a href="###">童装童鞋</a>
        <a href="###">女装</a>
        <a href="###">食品</a>
        <a href="###">母婴玩具</a>
      </nav>
      <div class="sort" v-show="show">
        <div class="all-sort-list2">
          <div class="item" v-for="c1 in categorylist" :key="c1.categoryId">
            <h3>
              <a href="">{{ c1.categoryName }}</a>
            </h3>
            <div class="item-list clearfix">
              <div
                class="subitem"
                v-for="c2 in c1.categoryChild"
                :key="c2.categoryId"
              >
                <dl class="fore">
                  <dt>{{ c2.categoryName }}</dt>
                  <dd>
                    <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                      <a href="">{{ c3.categoryName }}</a>
                    </em>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "TypeNav",
  data() {
    return {
      show: true,
    };
  },
  mounted() {
    //Vuex发送请求，返回数据存储在仓库中
    this.$store.dispatch("getcategoryList");
    if (this.$route.path != "/home") {
      this.show = false;
    }
  },
  methods: {
    entershow() {
      if (this.$route.path != "/home") {
        this.show = true;
      }
    },
    leavenotshow() {
      if (this.$route.path != "/home") {
        this.show = false;
      }
    },
  },
  computed: {
    ...mapState({
      categorylist(state) {
        //console.log('state:',state)
        return state.categorylist;
      },
    }),
  },
};
</script>

<style>
.type-nav {
  border-bottom: 2px solid #e1251b;
}

.type-nav .container {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  position: relative;
}

.type-nav .container .all {
  width: 210px;
  height: 45px;
  background-color: #e1251b;
  line-height: 45px;
  text-align: center;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
}

.type-nav .container .nav a {
  height: 45px;
  margin: 0 22px;
  line-height: 45px;
  font-size: 16px;
  color: #333;
}

.type-nav .container .sort {
  left: 0;
  top: 45px;
  width: 210px;
  height: 461px;
  position: absolute;
  background: #fafafa;
  z-index: 999;
}

.type-nav .container .sort .all-sort-list2 .item h3 {
  line-height: 27px;
  font-size: 14px;
  font-weight: 400;
  overflow: hidden;
  padding: 0 20px;
  margin: 0;
}

.type-nav .container .sort .all-sort-list2 .item h3 a {
  color: #333;
}

.type-nav .container .sort .all-sort-list2 .item h3 a:hover {
  color: #ff2832;
}

.type-nav .container .sort .all-sort-list2 .item h3:hover {
  border-top: #c81623 solid 2px;
  border-left: #c81623 solid 2px;
  border-bottom: #c81623 solid 2px;
}

.type-nav .container .sort .all-sort-list2 .item .item-list {
  display: none;
  position: absolute;
  width: 734px;
  min-height: 460px;
  background: #f7f7f7;
  left: 210px;
  border: 1px solid #ddd;
  top: 0;
  z-index: 9999 !important;
}

.type-nav .container .sort .all-sort-list2 .item .item-list .subitem {
  float: left;
  width: 650px;
  padding: 0 4px 0 8px;
  border: #e1251b 2px;
}

.type-nav .container .sort .all-sort-list2 .item .item-list .subitem dl {
  border-top: 1px solid #eee;
  padding: 6px 0;
  overflow: hidden;
  zoom: 1;
  border: #e1251b 2px;
}

.type-nav .container .sort .all-sort-list2 .item .item-list .subitem dl.fore {
  border-top: 0;
}

.type-nav .container .sort .all-sort-list2 .item .item-list .subitem dl dt {
  float: left;
  width: 54px;
  line-height: 22px;
  text-align: right;
  padding: 3px 6px 0 0;
  font-weight: 700;
}

.type-nav .container .sort .all-sort-list2 .item .item-list .subitem dt {
  color: #ff2832;
}

.type-nav .container .sort .all-sort-list2 .item .item-list .subitem dl dd {
  float: left;
  width: 415px;
  padding: 3px 0 0;
  overflow: hidden;
}

.type-nav .container .sort .all-sort-list2 .item .item-list .subitem dl dd em {
  float: left;
  height: 14px;
  line-height: 14px;
  padding: 0 8px;
  margin-top: 5px;
  border-left: 1px solid #ccc;
}

.type-nav .container .sort .all-sort-list2 .item:hover .item-list {
  display: block;
}
</style>