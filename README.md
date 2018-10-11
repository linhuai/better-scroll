# better-scroll

### 安装

```
npm i -D better-scroll
```

### 引入

```
import BScroll from 'better-scroll'
```

### 常用参数

##### pullUpLoad

类型：Boolean | Object

默认值：false (不开启 上拉加载更多 功能)


```
// 启用 上拉加载更多 配置
pullUpLoad: {
	threshold: 50
}
```

##### pullDownRefresh

类型：Boolean | Object

默认值：false (不开启 下拉刷新 功能)

```
// 启用 下拉刷新 配置
pullDownRefresh: {
	threshold: 50,
	stop: 20
}
```

### 常用方法

##### refresh()

参数： 无 

返回值： 无

作用：重新计算 better-scroll, 当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常

##### finishPullDown()

参数： 无

返回值： 无

作用： 当下拉刷新数据加载完毕后，需要调用此方法告诉 better-scroll 数据已加载

##### finishPullUp()

参数：无

返回值： 无

作用： 当上拉加载数据加载完毕后，需要调用此方法告诉 better-scroll 数据已加载

### 常用事件

##### pullingDown

参数：无

触发时机：在一次下拉刷新的动作后，这个时间一般去后台请求数据

##### pullingUp

参数： 无

触发时机：在一次上拉加载的动作后，这个时间一般去后台请求数据




---来源： http://ustbhuangyi.github.io/better-scroll/doc/zh-hans/events.html


