## `github`搜索作弊表

可能你曾因为自己总是无法在`github`中找到想要的资源而气馁，也因为在开发过程中碰到一些问题而无法找到问题而烦躁。其实，如果你认真寻找的话，答案就在`github`中。

笔者在这里根据`github`的官方帮助整理了一些常用的搜索技巧，想看原文的同学可以点这里：[Searching for information on GitHub](https://help.github.com/en/github/searching-for-information-on-github)。希望大家可以在阅读之后能更快的找到自己想要的内容，提升工作和学习效率。

> 原文涉及到的搜索内容比较多，笔者这里只是整理了一些个人在工作中常用的内容

### [搜索仓库](https://help.github.com/en/github/searching-for-information-on-github/searching-for-repositories#search-by-repository-name-description-or-contents-of-the-readme-file)

**`github`默认会在仓库名和仓库描述中进行搜索**

修饰符(qualifier) | 例子(Example)
--- | --- 
`in:name` |  `react in:name` 仓库名中包含`react`
`in:description` |  `react in:name,descript` 仓库名或仓库描述中包含`react`
`in:readme` | `react in:readme` 仓库`readme`中包含`react` 
`followers:n`| `node followers:>=10000` 仓库名或仓库描述中包含`node`关键字且该仓库的`followers`大于等于10000人
`stars:n`| `react stars:>=10000` 仓库名或仓库描述中包含`react`且该仓库被大于等于10000的人`star`
`pushed:YYYY-MM-DD`| `react pushed:>=2019-01-01` 仓库名或仓库描述中包含`react`且该仓库的最后一次更新在2019年1月1日及之后
`created:YYYY-MM-DD`| `react created:>=2019-01-01` 仓库名或仓库描述中包含`react`且仓库的创建日期在2019-01-01及之后

综合搜索：
```text
在仓库名或仓库描述或仓库readme中包含react,且追随者超过10000人、星数超过10000、最后更新日期晚于2019年4月20日、仓库创建日期晚于2018年12月12日
in:name,description,readme followers:>=10000 stars:>=10000 pushed:>=2019-04-20 react created:>=2018-12-12
```

搜索结果：
![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/tools-skills-github-search-respository.png)

### [搜索`issue`](https://help.github.com/en/github/searching-for-information-on-github/searching-issues-and-pull-requests#search-only-issues-or-pull-requests)

**`github`默认会在`issue`的标题(`title`)、正文(`body`)以及评论(`comments`)中进行搜索**

修饰符(qualifier) | 例子(Example)
--- | --- 
`in:title` |  `ie in:name` `issue`标题中含有`ie`
`in:body` |  `ie in:name` `issue`正文中含有`ie`
`in:comments` |  `ie in:name` `issue`评论中含有`ie`

综合搜索：由于默认的搜索条件过于广泛，我们需要将搜索范围缩小到标题
```text
in:title ie 兼容
```
搜索结果展示： 
![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/tools-skill-github-issue-search.png)

### 结语

大家可以结合相应的语法进行实验，实际体验一下不同条件下的搜索结果。

原文在这里：[`github`搜索作弊表](https://github.com/wangkaiwd/WebStorm-Skills/blob/master/GitHubSearch.md)

之后笔者还会继续整理一些`Google`搜索技巧以及`WebStorm`使用技巧，如果内容对你有帮助的，希望能`star`给予鼓励，让社区中乐于分享的开发者创作出更好的作品。
