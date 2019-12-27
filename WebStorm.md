## 9大`WebStorm`技巧，让你效率翻倍，不再加班！

在日常开发中，我们接触最多的莫过于代码编辑器。在各种编辑器中，我最喜欢的是`WebStorm`，它极大的提升了我的日常开发效率和代码质量。

工欲善其事必先利其器，这里我将我自己知道的`WebStorm`技巧分享出来，希望能让同样喜欢`WebStorm`的小伙伴效率翻倍、告别加班。

### 基本入门配置
1. 禁用自动保存(可选),并添加未保存标签的样式
    ![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/tools-skill-webstorm-don't-auto-save.png)
    ![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/tools-skills-webstorm-mark-modified-asterisk.png)
3. 关闭安全保存
   ![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/tools-skill-webstorm-safe-write-close.png)
   这里有一则`stackoverflow`的相关讨论：[Webpack watch not working on Webstorm on Windows?
](https://stackoverflow.com/a/34225091)
4. 设置编辑器字体（这是笔者喜欢的配置，大家可以参考）
   ![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/webstorm-skill-font.png)
   主题使用默认的`Darcula`,可以在`preferences/Editor/Color Scheme`下进行设置
   
   附一张截图代码截图：
   ![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/tools-skills-webstorm-display.png)
5. 在`css`缩写中开启模糊搜索
   ![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/tools-skill-webstorm-css-abbreviation.png)
   开启之后可以这样写`css`:
   ![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/tools-skills-webstorm-css-abbreviation.gif)

### 必须掌握的快捷键
#### Double ⇧ : Search Everywhere
双击`shift`是`WebStorm`中的最强大的一个快捷键，没有之一。

通过双击`shift`,可以搜索你项目中任何与`WebStorm`相关的内容，如打开文件、执行操作或者搜索文件。

#### ⌥⏎ : Show intention actions and quick-fixes
`option + enter`用来显示你可能会进行的行为以及快速修复代码中的一些问题。

它可以帮我们解决高亮错误或者警告，也可以帮我们提升或改进代码结构。这也是`WebStorm`中一个极其重要的快捷键，基本在任何时候都会用到它。有关它的用法我们会在之后详细介绍。

### 快捷键设置
在`WebStorm`的快捷键配置界面如下(preferences/keymap)：
![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/tools-skills-webstorm-kemap-view.png)
![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/tools-skills-webstorm-keymap-gif1.gif)

当我们只记得对应的快捷键而忘了该快捷键对应的操作的时候，通过快捷键来反向查询是一个特别实用的技巧。

当然我们也可以通过Double ⇧来搜索对应的操作,可以很方便查看功能及其对应的键位：
 ![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/tools-webstorm-find-actions.png)

以下的快捷键键位可以进行参考：
* [笔者的快捷键设置]()
* [官方文档的快捷键pdf](https://resources.jetbrains.com/storage/products/webstorm/docs/WebStorm_ReferenceCard.pdf?_ga=2.153677624.1821999752.1577150178-1331372459.1577150178)

`WebStorm`的快捷键是特别多的，为了帮助我们更好的学习快捷键，社区为我们提供了[`Key Promoter X`](https://plugins.jetbrains.com/plugin/9792-key-promoter-x/)来帮助我们学习。每当我们使用鼠标进行操作后，插件都会提示对应操作的快捷键来帮我们进行记忆。

### 识别`webpack`配置
在日常开发中，我们可能会苦恼于下面的路径并不能很好的被编辑器识别跳转以及进行代码补全：
```js
import someThing form '@/path/to/someThing'
```
在`WebStorm`中，我们可以通过识别`webpack`的配置文件来支持绝对路径的跳转： 
![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/tools-skills-webstorm-webpack-config.png)

不过在现在流行的脚手架中，一般都会隐藏`webpack`配置文件，这种情况下，我们可以创建一个假的`webpack`配置文件来让`WebStorm`识别，从而支持路径跳转：
```js
const path = require('path');
const absPath = dir => path.resolve(__dirname, `./src/${dir}`);

// 该文件只是为了让WebStorm识别别名以及扩展名，并无实际用途
module.exports = {
  resolve: {
    alias: {
      router: absPath('router'),
      layout: absPath('layout'),
      styles: absPath('assets/styles'),
      views: absPath('views'),
      components: absPath('components'),
      mock: absPath('mock'),
      helper: absPath('helper'),
    },
    extensions: ['.js', '.jsx', '.json', '.scss']
  }
};
```

在`vue`项目中，我们可以在如下目录中找到对应的`webpack`配置文件：
![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/tools-skills-webstorm-webpack-config-vue.png)

配置完成后，小伙伴们就可在项目中完美的实现代码跳转以及路径补全提示了。

### 设置代码风格
在`WebStorm`中，我们可以很方便的对不同语言的代码风格进行配置：  
![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/tools-skills-webstorm-code-style.png)

在该界面，我们可以配置不同语言的代码缩进、行末是否加分号等，然后通过格式化快捷键(`reformat code`)将代码整理成对应的格式。
### 自动导入(`import`)

#### 复制代码

#### 快捷键导入

#### 优化导入

### 代码重构
重构功能可以很方便的帮助我们对完成的代码进行结构以及命名的整理和优化，对应的快捷键为`control + t`。在按键之后的弹窗中我们可以通过模糊搜索来选择想要进行的操作，也可以通过操作对应的数字来进行快速选择。

下面笔者介绍一些工作中经常用到的功能。

#### 变量重命名

#### 提取接口
在`TypeScript`中，我们可以使用提取接口功能来基于对象结构创建一个新的接口：
[![](https://pbs.twimg.com/tweet_video_thumb/Du8sWaGXcAE0MzX.jpg)](https://video.twimg.com/tweet_video/Du8sWaGXcAE0MzX.mp4)

#### 提取组件

#### 移动文件

#### 安全删除

### 请求测试


### 草稿文件

### 设置背景图片
我们可以为`WebStorm`设置喜欢背景壁纸，来增加编码的愉悦感(其实并没有什么卵用)。具体设置：preferences/Appearances & Behavior/Background image
![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/tools-skills-webstorm-background.png)

设置效果如下，大家可以自行尝试玩耍：
![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/tools-skills-webstorm-background-preview.png)

### 图片预览
只需要按下`option + space`,你就可以在项目目录中直接预览图片：  

[![](https://pbs.twimg.com/tweet_video_thumb/EFPoNFnXoAA68LJ.jpg)](https://video.twimg.com/tweet_video/EFPoNFnXoAA68LJ.mp4)

### 结语

文中介绍的内容主要来自于以下资料：
* [`WebStorm`官方文档](https://www.jetbrains.com/help/webstorm/meet-webstorm.html) 
* [`WebStorm`推特](https://twitter.com/WebStormIDE)

如果你想了解`WebStorm`的更多使用细节和技巧，那么你可以阅读它的帮助文档，这里有你想知道的一切。而`WebStorm`的官方推特账号中，会有对应操作技巧的操作动图，更方便大家理解对应操作的用途，并且为学习增添了极大的趣味性。

最后祝愿大家都能在阅读完本文后能提升工作效率，更加熟练的使用`WebStorm`。当然，如果你有更好的学习方法或者使用技巧，欢迎留言讨论。

原文地址在这里：[传送门](https://github.com/wangkaiwd/WebStorm-Skills/blob/master/WebStorm.md),欢迎喜欢的小伙伴`star`
