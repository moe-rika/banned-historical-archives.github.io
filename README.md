# Banned Historical Archives
# 和谐历史档案馆

和谐历史档案馆收录各类受官方封锁的文稿，包含中央发表的文件，中央高层会议纪要，主要人物的通知、著作、谈话/对话/讲话、宣言/声明、电报、通讯、书信、消息、评论/批语/批注/批示、意见、指示/命令。同时收录一部分公开文稿便于版本对比和校验。

其中主要人物包括毛泽东，江青、姚文元、张春桥、王洪文。

## 计划收录

|名称|作者及出版社|内部文件|官方|收录状态|
|---|---|---|---|---
中共党史参考资料| 中国人民解放军政治学院（国防大学前身之一）党史教研室|Y|Y|待解析
建国以来毛泽东的文稿(13卷)|中央文献出版社|Y|Y|待解析
建国以来重要文件选编|中共中央文献研究室 中央文献出版社出版|N|Y|无
毛泽东文集（共8卷）||N|Y|已收录
毛泽东选集（共5卷）||N|Y|无
毛泽东外交文选|中华人民共和国外交部和中共中央文献研究室合作编辑|N|Y|无
毛泽东选集静火版|静火|N|N|已收录
毛泽东思想万岁|王晁星|N|N|已收录
江青文选|新湖大革命委员会政宣部编|N|Y|无
江青十年讲话汇编（1966-1976）||N|Y|无
王洪文文集||N|N|无
春桥文录||N|N|无
姚文元文录||N|N|无

## 开发
### 0.安装依赖
docker, nodejs, mysql
### 1.初始化 docker image
```
docker build -f ./paddle/docker/DockerFile ./paddle/docker -t paddle-ocr-lac
```
### 2.安装 node_modules
```
npm install
```
### 3.初始化/重置数据库
```
npm run dev:update-db
```
### 4.本地预览
```
npm run dev
```