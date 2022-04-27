
import requests from "./request";
import mockreq from './mock'
export const reqCategoryList = () => {
    return requests({
        url: '/product/getBaseCategoryList',
        method: 'GET'
    })
}
export const reqBannerList = () => {
    return mockreq({
        url: 'banner',
        method: 'GET'
    })
}
export const reqFoodList = () => {
    return mockreq({
        url: 'food',
        method: 'GET'
    })
}
//获取验证码
export const reqGetCode = (phone) => requests({ url: `/user/passport/sendCode/${phone}`, method: 'get' });
//用户注册
export const reqUserRegister = (data)=>requests({url:'/user/passport/register',data,method:'post'});

export const reqLogin = (data)=>{
    return requests({
        url:"/user/passport/login",
        data,
        method:'POST'
    })
}
//搜索信息
export const reqGetSearchinfo = (params) =>requests({url:'/list',method:"post",data:params})
export const reqGoods = () =>{
    return mockreq({
        url:"goods",
        method:'get'
    })
}

