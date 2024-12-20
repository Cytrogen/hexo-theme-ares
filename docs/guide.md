# 使用说明

## 目录 <!-- omit in toc -->

- [使用说明](#使用说明)
  - [元描述](#元描述)
  - [标题](#标题)
  - [显示帖子预览](#显示帖子预览)
  - [警告块](#警告块)
  - [折叠内容](#折叠内容)
  - [代码块](#代码块)
  - [网站图标](#网站图标)
  - [Mermaid](#mermaid)

## 元描述

如果要设置元描述信息，请为每篇文章设置 `desc` 属性和值。更好的方法是在脚手架文件中设置默认的 `desc` 属性，就像这样：

```markdown
---
title: 测试
date: 2024-04-01 00:00:00
desc: 巴拉巴拉巴拉
---

巴拉巴拉巴拉巴拉巴拉巴拉。
```

生成结果：

```html
<meta name="description" content="巴拉巴拉巴拉。">
```

如果没有 `desc` 属性或值，Hexo-Theme-Ares 将使用 `page.title` 和 `page.author` 代替。

## 标题

Hexo-Theme-Ares 仅支持三种标题：

- `h1` 为大标题
- `h2` 和 `h3` 为中标题
- `h4` 到 `h6` 都是小标题

这样做的目的是保持博文结构的简洁性和可读性，而不是嵌套多个层次，分散对内容的注意力。

## 显示帖子预览

如果希望在博客索引中包含一些文章预览文本，可以包含 `<!-- more -->` 语句。

在 `<!-- more -->` 语句之前的所有内容都将被解析并显示在索引中。

```markdown
---
title: 测试
date: 2024-04-01 00:00:00
desc: 巴拉巴拉巴拉。
---

在博客首页中会在标题下出现的文字。

<!-- more -->

必须进入文章页面内才能看到的内容。
```

## 警告块

使用类为 `danger` 的 `div` 标签来呈现警告块：

```html
<div class="danger">

这是一个例子！		
		
</div>
```

## 折叠内容

使用 `details` 和 `summary` 标签来实现折叠内容：

```html
<details>
<summary>点击展开</summary>

这里是被折叠的内容...
可以包含任何 markdown 内容

- 列表项
- 代码块
- 等等

</details>
```

不写 `summary` 的话则显示默认的“Details”。

## 代码块

使用代码块的完整语法如下：

````markdown
```[语言] [标题] [链接] [链接文本] [其他选项]
代码内容
```
````

其中：

- 语言: 指定代码语言
- 标题: 代码块的标题
- 链接: 代码的来源链接
- 链接文本: 链接的显示文本
- 其他选项: 其他选项，参考 [Hexo 文档](https://hexo.io/zh-cn/docs/tag-plugins#%E4%BB%A3%E7%A0%81%E5%9D%97)
- 代码内容: 代码内容

## 网站图标

在 `themes/source` 目录中找到 `favicon.png`，将你想要使用的图片重命名为 `favicon.png` 并顶替掉原有的图片。图片必须是 `256 * 256` 的。

## Mermaid

目前 Hexo-Theme-Ares 想要启动 Mermaid 功能，依然需要用到 [Hexo-Mermaid-Diagrams](https://github.com/mslxl/hexo-mermaid-diagrams) 依赖。步骤也较为繁琐：

1. 首先需要在根目录下创建 `libs` 目录，并在内安装 Hexo-Mermaid-Diagrams。

    > 你可以选择直接使用 NPM 安装。
    >
    > 但是，由于 Hexo-Mermaid-Diagrams 使用的是旧版本的 Mermaid（9.1.7），如果想要使用新版本的 Mermaid，就需要对其文件进行修改。而 `node_modules` 目录默认不会被 Git 追踪，因此不推荐使用 NPM 安装。

2. 将 `libs/hexo-mermaid-diagrams/index.html` 修改为：

    ```html
    <!doctype html>
    <html>
      <head>
        <link rel="stylesheet" href="./fontawesome-free/css/all.min.css">
      </head>
      <body>
        <div id="container"></div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/mermaid/10.9.1/mermaid.min.js" integrity="sha512-6a80OTZVmEJhqYJUmYd5z8yHUCDlYnj6q9XwB/gKOEyNQV/Q8u+XeSG59a2ZKFEHGTYzgfOQKYEBtrZV7vBr+Q==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
      </body>
    </html>
    ```

    > 如果你有发现更新的 `mermaid.min.js`，可以自行将上面的 `<script>` 标签进行替换。

3. 接着删除 `libs/hexo-mermaid-diagrams/mermaid.min.js`。

使用方式非常简单：

```markdown
{% mermaid %}
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
{% endmermaid %}
```

语法请自行查阅 [Mermaid 官网](https://mermaid.js.org/intro/)。