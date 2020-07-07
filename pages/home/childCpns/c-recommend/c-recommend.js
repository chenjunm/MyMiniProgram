// pages/home/childCpns/c-recommend/c-recommend.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    recommends:{
      type:Array,
      value:[]
      
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    flag:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleImageLoad:function(){
      if(!this.data.flag){
        this.data.flag = true
        this.triggerEvent('imageLoad')
      }
    }
  }
})
