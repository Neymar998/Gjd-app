import Mock from 'mockjs'
import banner from './banner'
import food from './food'
import goods from './goods'
Mock.mock('/mock/banner',{code:200,data:banner})
Mock.mock('/mock/food',{code:200,data:food})
Mock.mock('/mock/goods',{code:200,data:goods})