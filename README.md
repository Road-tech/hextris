Hextris
==========

<img src="images/twitter-opengraph.png" width="100px"><br>

An addictive puzzle game inspired by Tetris. Play it at [www.hextris.io](http://www.hextris.io), or [https://hextris.github.io/hextris](https://hextris.github.io/hextris).

By:
 - Logan Engstrom ([@lengstrom](http://loganengstrom.com/))
 - Garrett Finucane ([@garrettdreyfus](http://github.com/garrettdreyfus))
 - Noah Moroze ([@nmoroze](http://github.com/nmoroze))
 - Michael Yang ([@themichaelyang](http://github.com/themichaelyang))

## 游戏玩法

Hextris 是一款基于俄罗斯方块灵感的益智游戏，目标是阻止方块离开灰色六边形区域。

### 操作方式

**桌面端：**
- 按 **左/右方向键** 旋转六边形
- 按 **下方向键** 加速方块下落
- 按 **Enter 键** 开始游戏
- 按 **空格键** 暂停游戏

**移动端：**
- 点击屏幕左侧或右侧旋转六边形

### 得分规则

- 让 3 个或更多相同颜色的方块相邻即可消除得分
- 连续消除可触发连击，获得更高分数
- 连击剩余时间由六边形外圈的彩色线条表示

## 快速开始

### 本地开发

直接在浏览器中打开 `index.html` 即可运行游戏。

```bash
# 使用 Python 快速启动本地服务器
python3 -m http.server 8080

# 或使用 Node.js
npx serve -l 8080
```

访问 http://localhost:8080 即可开始游戏。

### Docker 部署

项目已配置 Docker，可一键构建和运行：

```bash
# 构建 Docker 镜像
docker build -t hextris .

# 运行容器（映射端口 8889）
docker run -d -p 8889:80 --name hextris hextris
```

访问 http://localhost:8889 即可开始游戏。

## 项目结构

```
hextris/
├── index.html          # 主页面
├── js/                 # JavaScript 源码
│   ├── i18n.js         # 国际化/本地化支持
│   ├── view.js         # 视图渲染
│   ├── render.js       # Canvas 渲染
│   ├── main.js         # 主逻辑
│   ├── input.js        # 输入处理
│   ├── initialization.js # 初始化
│   ├── checking.js     # 消除检测
│   ├── update.js       # 更新逻辑
│   ├── Hex.js          # 六边形类
│   ├── Block.js        # 方块类
│   ├── Text.js         # 文本效果
│   ├── comboTimer.js   # 连击计时器
│   ├── wavegen.js      # 波形生成
│   ├── math.js         # 数学工具
│   └── save-state.js   # 存档管理
├── style/              # 样式文件
├── images/             # 图片资源
├── vendor/             # 第三方库
│   ├── jquery.js       # jQuery
│   ├── hammer.min.js   # 触摸手势
│   ├── sweet-alert.min.js # 弹窗
│   └── ...
├── Dockerfile          # Docker 配置
├── nginx.conf          # Nginx 配置
└── manifest.webmanifest # PWA 配置
```

## 功能特性

- 🎮 **流畅的游戏体验**：60 FPS Canvas 渲染
- 🌍 **多语言支持**：内置中文和英文，自动检测浏览器语言
- 📱 **响应式设计**：支持桌面端和移动端
- 💾 **本地存档**：自动保存最高分
- ⚡ **连击系统**：连续消除获得更高分数
- 🐳 **Docker 支持**：一键部署

## 国际化

游戏支持中文和英文两种语言：

- 中文用户打开游戏时自动切换为中文界面
- 可通过右上角语言按钮手动切换语言
- 已汉化内容：
  - 游戏界面（最高分、游戏结束、排行榜）
  - 游戏教程（操作提示、得分说明）
  - 暂停提示、开始提示

## Citation

Did you use Hextris in your research? Cite us as follows:

```
  @misc{engstrom2015hextris,
    author = {Logan Engstrom, Garrett Finucane, Noah Moroze, Michael Yang},
    title = {hextris},
    year = {2015},
    howpublished = {\url{https://github.com/hextris/hextris/}},
    note = {commit xxxxxxx}
  }
```

# Contributions

This project is not very actively maintained, as we are all very busy these days. But feel free to open an issue or PR, and we'll eventually take a look.

# About

Hextris was created by a group of high school friends in 2014.

## Press kit

http://hextris.github.io/presskit/info.html

## License

Copyright (C) 2018 Logan Engstrom

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
