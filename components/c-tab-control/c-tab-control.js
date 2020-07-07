// components/c-tab-control/c-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type:Array,
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
    selectActive:function(event){
      // console.log('嘻嘻嘻')
      // console.log(event)
      const index = event.currentTarget.dataset.index
  
      this.setData({
        currentIndex : index
      })
      const data = { index : this.data.currentIndex }
      this.triggerEvent( "tabclick", data, {})
    },
  }
})
