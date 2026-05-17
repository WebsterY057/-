# 🌿 AI体质食疗 · 养生版

纯静态中医体质辨识 + 食疗推荐应用，基于中华中医药学会 9 种体质分类标准（王琦），无后端、无 API、免费部署。

## 功能

- **体质测试** — 18 题体质辨识问卷，精准判定平和/气虚/阳虚/阴虚/痰湿/湿热/血瘀/气郁/特禀体质
- **食材查询** — 125 种食材数据库，支持名称/功效/机理搜索，性味归经筛选，按体质标记宜忌
- **每日推荐** — 根据体质个性化推荐食材，支持收藏
- **食谱中心** — 46 道体质/季节食谱，含详细步骤，支持收藏和购物清单复制
- **时令养生** — 24 节气健康提示 + 四季养生方案
- **打卡系统** — 每日养生打卡，连续天数记录，打卡后随机健康贴士
- **体质报告** — 评分可视化、体质详情、宜食慎食、运动方案，支持分享
- **收藏系统** — 食材和食谱统一收藏管理
- **运动营养** — 增肌/减脂/耐力三套方案，结合体质差异建议
- **亮暗主题** — 暖玉绿色调，支持主题切换
- **体质揭晓动画** — 评测完成后粒子动画展现结果

## 技术栈

- 纯前端 HTML + CSS + JavaScript（无依赖）
- 数据持久化：localStorage
- 部署：Netlify（自动部署 GitHub main 分支）

## 本地运行

直接用浏览器打开 `index.html`，或任意静态服务器：

```bash
npx serve .
```

## 部署

推送到 `main` 分支后，Netlify 自动部署。

[![Netlify Status](https://api.netlify.com/api/v1/badges/xxx/deploy-status)](https://app.netlify.com/sites/xxx/deploys)

## 数据说明

- 体质分类依据：中华中医药学会《中医体质分类与判定》标准（2009，王琦）
- 食材功效、性味归经参考《本草纲目》《本草拾遗》《神农本草经》等中医典籍
- 所有数据均为静态，以 JSON 形式内嵌在 `js/data.js` 中

## 项目结构

```
├── index.html        # 单页应用入口
├── css/style.css     # 亮暗主题样式
├── js/
│   ├── app.js        # 应用逻辑（~1400 行）
│   └── data.js       # 数据（体质、食材、食谱、节气、运动方案）
├── miniprogram/      # 微信小程序 WebView 壳
│   ├── project.config.json
│   ├── app.json / app.js / app.wxss
│   └── pages/index/  # 单页 WebView 加载 H5
└── assets/           # 静态资源
```

## 微信小程序

项目自带微信小程序壳（`miniprogram/`），使用 WebView 加载 H5 页面。

### 部署步骤

1. 在 [mp.weixin.qq.com](https://mp.weixin.qq.com) 注册小程序（个人号 30 元/年）
2. 获取 AppID，填入 `miniprogram/project.config.json` 的 `appid` 字段
3. 在微信公众平台 → 开发 → 开发管理 → 服务器域名中，添加 Netlify 域名到 `request` 和 `webview` 白名单
4. 修改 `miniprogram/pages/index/index.js` 中的 `H5_URL` 为你的 Netlify 地址

### 预览

用微信开发者工具打开 `miniprogram/` 目录，填入 AppID 即可预览。

### 更新策略

- 数据/功能更新改 H5 即可（`data.js` / `app.js`），push 后 WebView 自动加载最新内容
- 只有 UI 结构变化时才需要发新版小程序（走微信审核）

## 许可

MIT
