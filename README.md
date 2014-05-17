font-icon
=============

> 凤巢前端字体图标库


### 介绍 

通过Web Font的方式来显示一些图标，好处是图标可以被任意缩放、改变颜色，你需要做的只是像修改文字样式那样修改图标样式。典型的应用方案是font awsome, 但fontawsome 字体库与凤巢前端设计风格有冲突，因此需要有一套自己的字体方案；font-icon是基于icomoon平台生成的一套字体库；下面介绍如何在icomoon中生成定制的字体图标库；

- icomoon在线平台

[http://icomoon.io/app/#/select](http://icomoon.io/app/#/select)


### 项目创建流程

![](https://www.evernote.com/shard/s222/sh/60877a9a-4852-46c3-b0c1-041d1beaa347/5417436ece268758b57d1b2ac8ccecc8/res/f4b15e37-f12c-4b3d-bcf5-57a1c6780eed.png?resizeSmall&width=832)


1\. 【sign in】注册并登记

- 注册方便项目管理
- 能够在云端保存字体库
- 生成在线字体样式文件

2\. 【new Project】创建一个新项目

- 配置项目信息项目

3\. 修改本地svg文件

- 准备好本地svg文件，单个文件表示一个icon
- 给svg起名符合icon语义；不带前缀


4\. 【import icons】导入本地项目字体库


5\. 可以选择导入第三方字体库

6\. 设置字体

- 字体大小
- 字体名
- 字体编号
- 字体前缀
- 字体排序


6\. 导出font压缩包

- 包含合成的字体文件
- demo文件
- css 引用文件

7\. 检查并部署到项目



### 编辑项目信息


![](https://www.evernote.com/shard/s222/sh/60877a9a-4852-46c3-b0c1-041d1beaa347/5417436ece268758b57d1b2ac8ccecc8/res/d59168b6-f5b1-4472-852a-25507af800b6.png?resizeSmall&width=832)


在打开信息层中点击【edit Metadata】

![](https://www.evernote.com/shard/s222/sh/60877a9a-4852-46c3-b0c1-041d1beaa347/5417436ece268758b57d1b2ac8ccecc8/res/dd33a880-097b-450f-9ffc-774cb19aae81.png?resizeSmall&width=832)


### 编辑图标信息

![](https://www.evernote.com/shard/s222/sh/60877a9a-4852-46c3-b0c1-041d1beaa347/5417436ece268758b57d1b2ac8ccecc8/res/caa8cea4-f463-427c-8a44-e809c83939ae.png?resizeSmall&width=832)

- 选择需要转化的字体；或者使用【select all】

![](https://www.evernote.com/shard/s222/sh/60877a9a-4852-46c3-b0c1-041d1beaa347/5417436ece268758b57d1b2ac8ccecc8/res/0f2c117d-952c-4321-8b90-b2aa6cfdf38e/Image.png?resizeSmall&width=832)

- 点击【font】按钮，进入字体设置页面


![](https://www.evernote.com/shard/s222/sh/60877a9a-4852-46c3-b0c1-041d1beaa347/5417436ece268758b57d1b2ac8ccecc8/res/92b476a4-251d-4969-9f34-c342ba078f91.png?resizeSmall&width=832)


- 【codes】可以设置字体编码起始编号

- 【preferences】进入字体的偏好设置


![](https://www.evernote.com/shard/s222/sh/60877a9a-4852-46c3-b0c1-041d1beaa347/5417436ece268758b57d1b2ac8ccecc8/res/0ce458d8-7423-4678-afe5-58958ae3ce6d.png?resizeSmall&width=832)


- class Prefix 决定我们使用的方式, 比如设置classn前缀


[use Class Selector] 必须添加；方便扩展及提高编码效率


- 预览字体文件


![](https://www.evernote.com/shard/s222/sh/60877a9a-4852-46c3-b0c1-041d1beaa347/5417436ece268758b57d1b2ac8ccecc8/res/ffd4a347-4e51-4c96-802e-1802d8d7b86e.png?resizeSmall&width=832)


- 下载字体文件或者svg文件


![](https://www.evernote.com/shard/s222/sh/60877a9a-4852-46c3-b0c1-041d1beaa347/5417436ece268758b57d1b2ac8ccecc8/res/09e668ac-a2e9-4c79-8c5d-afac45f5c9ec.png?resizeSmall&width=832)

- 解压字体库
