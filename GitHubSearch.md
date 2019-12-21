## `github`搜索语法作弊表
### [搜索仓库](https://help.github.com/en/github/searching-for-information-on-github/searching-for-repositories#search-by-repository-name-description-or-contents-of-the-readme-file)

默认会在仓库名和仓库描述中进行搜索

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
