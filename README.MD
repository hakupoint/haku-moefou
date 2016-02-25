# Haku-moefou NONE API条目的子条目

采用es6编写代码使用babel-none,使用API Key 认证,OAuth 授权接口均未实现

## 安装
    npm install

## 应用

```js
import Moefou from './lib/api.js';
var moefou = new Moefou('your_key');
moefou.wikis({
  wiki_type: 'music'
}).then((result) =>{
    console.log(result)
});
```

## 测试

    npm test

## TODO

### 条目相关
 - [x] 获取条目
 - [x] 放映列表
 - [x] 条目基础资料
 - [x] 条目的子条目
 - [x] 收藏记录
 - [x] 评分记录
 - [x] 关联条目
 - [x] 相似条目

### 子条目
 - [x] 子条目基础资料
 - [x] 子条目收藏记录
 - [x] 评分记录
 - [x] 关联条目

### 用户相关
 - [x] 用户基本资料
 - [x] 用户收藏条目
 - [x] 用户收藏的子条目

### 搜索
 - [x] 搜索条目
 - [x] 搜索子条目

### 电台
 - [x] 电台音乐播放列表
 - [x] 发现音乐
 - [ ] 音乐专辑
 - [ ] 专辑曲目
 - [ ] 专辑收藏
