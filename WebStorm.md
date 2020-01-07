## 压箱底的`WebStorm`使用技巧，让你效率翻倍，不再加班！
> 由于`WebStorm`的学习资料基本都是来自国外，所以本文大部分内容需要科学上网才能查看，请读者自备

在日常开发中，我们接触最多的莫过于代码编辑器。在各种编辑器中，我最喜欢的是`WebStorm`，它极大的提升了我的日常开发效率和代码质量。

工欲善其事必先利其器，这里我将我自己知道的`WebStorm`技巧分享出来，希望能让同样喜欢`WebStorm`的小伙伴效率翻倍、告别加班。

出于对`WebStorm`的热爱，有人搜集了`WebStorm`各版本的启动动画，确实很酷。图片来源：[戳我](https://twitter.com/Fuzzel_/status/1207054049897517062)
![](https://pbs.twimg.com/media/EMBRQIoWkAAal-U?format=jpg&name=4096x4096)


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
* [笔者的快捷键设置](https://github.com/wangkaiwd/WebStorm-Skills/blob/master/WebStormKeymap.md)
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

如下是一些笔者常用的配置：
![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/tools-skills-webstorm-js-code-style-sipmle.png)

> 尾逗号可以在为`JavaScript`元素添加元素、参数、属性等时，不用再为前一行添加分号，使我们更愉快的编码。更为详细的介绍在这里： [尾逗号](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Trailing_commas)

### 自动导入(`import`)

#### 复制代码

#### 快捷键导入

#### 优化导入

### 代码重构
重构功能可以很方便的帮助我们对完成的代码进行结构以及命名的整理和优化，对应的快捷键为`control + t`。在按键之后的弹窗中我们可以通过模糊搜索来选择想要进行的操作，也可以通过操作对应的数字来进行快速选择。

下面笔者介绍一些工作中经常用到的功能。

#### 变量重命名

#### [提取接口](https://twitter.com/WebStormIDE/status/1077949657962156034?s=20)
在`TypeScript`中，我们可以使用提取接口功能来基于对象结构创建一个新的接口(点击图片查看动图)：
[![](https://pbs.twimg.com/tweet_video_thumb/Du8sWaGXcAE0MzX.jpg)](https://video.twimg.com/tweet_video/Du8sWaGXcAE0MzX.mp4)

#### [移动文件](https://twitter.com/aaronadler/status/1156726433101885440)
`WebStorm`会在我们移动文件后，自动修复文件对应的导入路径，这将为我们节省很多时间
![](https://pbs.twimg.com/media/EA2EjycXYAExPhy?format=png&name=900x900)

#### [安全删除](https://twitter.com/WebStormIDE/status/1181661319843463170)
当你删除项目中的一个文件时，可能会担心文件会在其它地方被用到，删除之后将导致项目运行出错。`WebStorm`为我们提供了安全删除(safe delete)选项，会再次确认删除的文件没有在项目中的任何地方被导入使用，并作出相应的提示(点击查看动图)：
[![](https://pbs.twimg.com/tweet_video_thumb/EGYaqN0W4AYSGkd.jpg)](https://video.twimg.com/tweet_video/EGYaqN0W4AYSGkd.mp4)

### 同步配置文件
为了实现一次配置多次使用，而不用每次在更换电脑时再进行繁琐而重复的配置，`WebStorm`为我们提供了将配置与`GitHub`仓库之间相互同步的功能。

操作步骤如下：  
1. 在`GitHub`中创建一个单独的仓库来专门存储`WebStorm`的配置
2. 在`File/Settings Repository`中进行同步配置

在`WebStorm`中的具体操作如下：
![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/tools-skills-sync-settings-file.png)
![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/tools-skills-webstorm-sync-config-repository-set.png)

如果有小伙伴想要使用一个现成的配置的话，可以直接使用笔者的[配置仓库](https://github.com/wangkaiwd/syncWebstormConfig): `git@github.com:wangkaiwd/syncWebstormConfig.git`来直接覆盖自己的配置。

> 注意： 笔者使用的是`mac`系统，如果你使用的是`Windows`系统的话，直接导入配置会造成快捷键混乱，操作时要慎重！ 

### 草稿文件
有时你可能会记录一些临时笔记或者测试代码，这些代码并不需要添加到项目中。此时你可能会新开一个编辑器或者记事本，或者在项目中随意些写一些代码(由于临时测试可能由于忘记删除而引发`bug`)。

针对这种情况，`WebStorm`为我们提供了临时文件的功能：
![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/tools-skills-webstorm-stratch-file.png)

只需在编辑器的项目工具窗口中右键`Scratches and Consoles`，然后点击`new scratch file`即可选择符合要求的临时文件进行创建。

临时文件可以做下面这些事：
* 起草代码结构
* 进行`HTTP request`测试
* 书写`JSON`文档
* 记录自己的临时想法，并可以在多个项目中共享
* ...

> Tips: 草稿文件没有存储到你的项目目录中，在使用`WebStorm`打开其它项目时也可以打开并访问草稿文件。这方便了我们在多个项目中共享我们的草稿文件中的笔记和想法。

### [请求测试](https://twitter.com/WebStormIDE/status/1167101970777288705)
在日常工作中，我们常常需要测试接口是否可以正常调用，`WebStorm`可以帮助我们测试接口，具体操作如下(点击播放动图)：
[![](https://pbs.twimg.com/tweet_video_thumb/EDJhCQyXsAAYwIf.jpg)](https://video.twimg.com/tweet_video/EDJhCQyXsAAYwIf.mp4)

当然，我们可以结合`WebStorm`的草稿文件来使用，避免为项目添加多余的代码。

### 设置背景图片
我们可以为`WebStorm`设置喜欢背景壁纸，来增加编码的愉悦感(其实并没有什么卵用)。具体设置：preferences/Appearances & Behavior/Background image
![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/tools-skills-webstorm-background.png)

设置效果如下，大家可以自行尝试玩耍：
![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/tools-skills-webstorm-background-preview.png)

### 图片预览
只需要按下`option + space`,你就可以在项目目录中直接预览图片：  

[![](https://pbs.twimg.com/tweet_video_thumb/EFPoNFnXoAA68LJ.jpg)](https://video.twimg.com/tweet_video/EFPoNFnXoAA68LJ.mp4)

### [开源项目申请免费版](https://www.jetbrains.com/opensource/)
如果你的非商业开源项目满足这些需求，可以免费获得`JetBrains`工具的`licenses`:
* 你的项目满足[开源定义](https://opensource.org/docs/osd)
* 你的项目至少有3个月的开发历史
* 你的项目活跃并且定期开发
* 你是项目的领导或者是一个活跃的提交者
* 你的项目没有被商业公司或组织赞助并且没有付薪员工
* 你的项目不提供围绕软件的商业服务(例如咨询或者培训)，你的项目也不能发布付费版本

简单来说,你的项目持续维护或开发至少3个月，并且项目有预览链接、遵循`MIT`许可证，基本上以及满足申请免费版的资格了。满足要求的小伙伴赶快行动起来吧：[申请地址](https://www.jetbrains.com/shop/eform/opensource?product=ALL)


### 结语

文中介绍的内容主要来自于以下资料：
* [`WebStorm`官方文档](https://www.jetbrains.com/help/webstorm/meet-webstorm.html) 
* [`WebStorm`官方博客](https://blog.jetbrains.com/webstorm/)
* [`WebStorm`推特](https://twitter.com/WebStormIDE)

如果你想了解`WebStorm`的更多使用细节和技巧，那么你可以阅读它的帮助文档，这里有你想知道的一切。在`WebStorm`的官方推特账号中，会有对应操作技巧的操作动图，更方便大家理解对应操作的用途，并且为学习增添了极大的趣味性。

最后祝愿大家都能在阅读完本文后能提升工作效率，更加熟练的使用`WebStorm`。当然，如果你有更好的学习方法或者使用技巧，欢迎留言讨论。

原文地址在这里：[传送门](https://github.com/wangkaiwd/WebStorm-Skills/blob/master/WebStorm.md),欢迎喜欢的小伙伴`star`
