// pages/home/home.js
// import request from '../../service/network.js'
import {getMultiData, getGoodData} from '../../service/home.js'

const TOP_DISTANCE = 1000

Page({
  /**
   * 页面的初始数据
   */
  data: {
    banners:[],
    recommends:[],
    titles:['流行', '新款', '精选'],
    goods:{
      "pop" : { page: 0, list:[]},
      "new" : { page: 0, list:[]},
      "sell" : { page: 0, list:[]},
    },
    index:0,
    currentType:'pop',
    ctypes:['pop', 'new', 'sell'],
    isShow:false,
    isFied:false,
    tabControlTop:0
  },
  handleTabClick:function(event){
    // console.log(event)
    const index = event.detail.index
    const ctype = this.data.ctypes[index]
    this.setData({
      index : index,
      currentType : ctype
    })
    // this._getGoodData(this.data.currentType)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   this._getMultiData()
   
  //  this._getGoodData(this.data.currentType)
  this._getGoodData('pop')
  this._getGoodData('new')
  this._getGoodData('sell')
  },

  // 网络请求
  _getMultiData(){
    getMultiData().then((res) => {
      // console.log(res)
      const banners = res.data.data.banner.list
      const recommends = res.data.data.recommend.list
      this.setData({
        banners,
        recommends
      })
    })
  },

  _getGoodData(type){
    const page = this.data.goods[type].page + 1 ;
    let res = {}
    // 自己的版本
    if(page<3){
       res = getGoodData(type, page)
    }
    if(res.data){
      const data = res.data.list[page]
      const oldList = this.data.goods[type].list
      oldList.push(...data)
      const typekey = `goods.${type}.list`
      const pagekey = `goods.${type}.page`
      this.setData({
        [typekey] : oldList,
        [pagekey] : page
      })
    }
    
    // console.log( this.data.goods[type].list)

    // 原版
    // getGoodData(type, page).then((res)=>{
    //   console.log(res)
      // const data = res.data

      // const oldList = this.data.goods[type].list
      // oldList.push(...data)

      // const typekey = `goods.${type}.list`
      // const pagekey = `goods.${type}.page`
      // this.setData({
      //   [typekey] : oldList,
      //   [pagekey] : page
      // })
    // })
  },
  handleImageLoaded:function(){
    // 获取指定组件距离顶部的scrolltop
    wx.createSelectorQuery().select('#tab-control').boundingClientRect( rect =>{
      this.data.tabControlTop = rect.top
    }).exec()
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this._getGoodData(this.data.currentType)
  },
  /**
   * 监听页面滚动 这里面不要多次调用setData
   */
  onPageScroll:function(options){

    const scrollTop = options.scrollTop
    const flag1  = scrollTop >= TOP_DISTANCE
    if(flag1 != this.data.isShow){
      this.setData({
        isShow : scrollTop >= TOP_DISTANCE
      })
    }
    
    const flag2 = scrollTop >= this.data.tabControlTop
    if(flag2 != this.data.isFied){
      this.setData({
        isFied : scrollTop >= this.data.tabControlTop
      })
    }

  },
   /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})