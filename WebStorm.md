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

这里笔者整理了一下自己常用的快捷键，有需要的小伙伴可以作为参考： 
* 

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

### 自动导入(`import`)

### 代码重构

### 请求测试

### 草稿文件

### 设置背景图片

### 图片预览


