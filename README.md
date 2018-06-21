# Vue-Screen-Components

> Vue大屏项目组件库

## 结构说明
  - src/server api接口服务目录
  - src/components/cell 组件单元目录
  - src/components/pages 组件类预览页面目录
  - static/mock 组件数据源(json假数据)

## 组件通用属性说明
  - ```source``` 组件数据源，类型: ```[Array, Object]```, 如果是Object类型，需在```initData()```方法中格式化为```Array```类型
  - ```colorDic``` 组件颜色源，类型: ```[Object]```

## 组件通用方法说明
  - ```initData()``` 对数据源进行格式化
  - ```formatLabel``` 对label进行格式化

## 文档
  各类别组件编写规范，请见src/components/pages下各组件类文件夹下README.md

## Version Info

iview -> v2.8.0
vue -> v2.5.2

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
