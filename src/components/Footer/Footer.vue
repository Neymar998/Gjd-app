<template>
  <div class="footer">
    <div class="footer-container">
      <div class="footerList">
        <div class="footerItem">
          <h4>购物指南</h4>
          <ul class="footerItemCon">
            <li>购物流程</li>
            <li>发票制度</li>
            <li>服务协议</li>
            <li>会员优惠</li>
          </ul>
        </div>
        <div class="footerItem">
          <h4>支付方式</h4>
          <ul class="footerItemCon">
            <li>网上支付</li>
            <li>礼品卡支付</li>
            <li>银行卡转账</li>
            <li>礼券支付</li>
          </ul>
        </div>
        <div class="footerItem">
          <h4>订单服务</h4>
          <ul class="footerItemCon">
            <li>配送服务查询</li>
            <li>订单状态说明</li>
            <li>自动取消订单</li>
            <li>自动修改订单</li>
          </ul>
        </div>
        <div class="footerItem">
          <h4>配送方式</h4>
          <ul class="footerItemCon">
            <li>当日递</li>
            <li>当日达</li>
            <li>订单自提</li>
            <li>验货与签收</li>
          </ul>
        </div>
        <div class="footerItem">
          <h4>退换货</h4>
          <ul class="footerItemCon">
            <li>退换货服务查询</li>
            <li>自动申请退换货</li>
            <li>退换货进度查询</li>
            <li>退款方式和时间</li>
          </ul>
        </div>
        <div class="footerItem">
          <h4>商家服务</h4>
          <ul class="footerItemCon">
            <li>商家中心</li>
            <li>运营服务</li>
            
          </ul>
        </div>
      </div>
      <div class="copyright">
        <ul class="helpLink">
          <li>
            公司简介
            <span class="space"></span>
          </li>
          <li>
            诚聘英才
            <span class="space"></span>
          </li>
          <li>
            网站联盟
            <span class="space"></span>
          </li>
          <li>
            当当招商
            <span class="space"></span>
          </li>
          <li>
            机构销售
            <span class="space"></span>
          </li>
          <li>
            手机当当
            <span class="space"></span>
          </li>
          <li>
            官方Blog
            <span class="space"></span>
          </li>
          <li>
            知识产权
            <span class="space"></span>
          </li>
          <li>
            热词搜索
            <span class="space"></span>
          </li>
          <li>关于我们</li>
        </ul>
        <p>互联网违法和不良信息举报电话：4001066666-5，涉未成年举报电话：4001066666-9，邮箱：jubao_cbw@dangdang.com</p>
        <p>京ICP备17043473号-1</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.footer {
  background-color: #eaeaea;
}

.footer .footer-container {
  width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.footer .footer-container .footerList {
  padding: 20px;
  border-bottom: 1px solid #e4e1e1;
  border-top: 1px solid #e4e1e1;
  overflow: hidden;
  padding-left: 40px;
}

.footer .footer-container .footerList .footerItem {
  width: 16.6666667%;
  float: left;
}

.footer .footer-container .footerList .footerItem h4 {
  font-size: 14px;
}

.footer .footer-container .footerList .footerItem .footerItemCon li {
  line-height: 18px;
}

.footer .footer-container .footerList .footerItem:last-child img {
  width: 121px;
}

.footer .footer-container .copyright {
  padding: 20px;
}

.footer .footer-container .copyright .helpLink {
  text-align: center;
}

.footer .footer-container .copyright .helpLink li {
  display: inline;
}

.footer .footer-container .copyright .helpLink li .space {
  border-left: 1px solid #666;
  width: 1px;
  height: 13px;
  background: #666;
  margin: 8px 10px;
}

.footer .footer-container .copyright p {
  margin: 10px 0;
  text-align: center;
}
</style>