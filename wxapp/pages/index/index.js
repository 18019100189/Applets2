// pages/index/index.js
Page({
  gomoveTap: function(event){
    wx.navigateTo({
      url: '../move/move',
    })
  }
})