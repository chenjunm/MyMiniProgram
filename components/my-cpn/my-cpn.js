// pages/mycpn/my-cpn.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type: Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    selectClick:function(event){
      console.log(event)
      const index = event.currentTarget.dataset.index

      this.setData({
        currentIndex : index
      })
    }
  }
})
