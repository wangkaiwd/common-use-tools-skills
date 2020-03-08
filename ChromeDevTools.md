## Chrome DevTools
> 资料来源： [掘金小册:你不知道的Chrome调试技巧](https://juejin.im/book/5c526902e51d4543805ef35e)

### copy(...)
在`console.log`里`copy`任何你能拿到的资源

### Store as global variable

### Copy HTML
可以直接使用`ctrl + c`复制`html`

### Increment/Decrement
* ↑↓: Increment/Decrement value
* shift + ↑↓: Increment/Decrement value by 10
* option + ↑↓: Increment/Decrement value by 0.1
* command + ↑↓: Increment/Decrement value by 100

### Run Command
快捷键：command + shift + p(或command + P 输入 >),类似于`WebStorm`中的`Find Actions`(command + shift + a)

可以通过该命令搜索对应的操作：
* capture full size screenshot

### console 中的 `$`
* $: `document.querySelector`
* $$: `Array.from(document.querySelectorAll)`
* $0: 当前选中的`html`节点的引用
* $1~$4: 前n次我们选择的节点的引用
* $_: 上次执行结果的引用
* $i('package-name'): 可以将`npm`包引入到`console`中进行测试，需要安装[`console importter`](https://chrome.google.com/webstore/detail/console-importer/hgajpakhafplebkdljleajgbpdmplhie?hl=en-US)谷歌浏览器扩展

### console.log 的 `bug`
console.log()打印的是对象的引用，所以在对象更改后，console.log()打印出的原始值也会更改

解决方法： 
* 断点
* 打印对象的深拷贝结果

### conditional breakpoint && console.log
条件断点结合console.log进行打印，可以不用再在源码中添加console.log