[//]:#(块级元素练习)

* ### 块级元素练习
----------------

[//]:<> "标题练习:#"

# 1.现在是什么点
## 2.应该吃点啥
### 3.外卖
#### 4.红烧鱼+麻婆豆腐
##### 5.红烧鱼+麻婆豆腐

[//]:#(标题练习：=-)

新一级标题
=========
新二级标题
---------

[//]:#(块引用练习)
> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

[//]:#(嵌套块级引用)
> > This is nested blockquote.

[//]:#(列表练习：分为有序和无序列表)
[//]:#(无序列表：*-+都是等价的)
*   red
    > * This is nested blockquot
    > * This is nested blockquot
*   blue
    > 1.This is nested blockquot
*   green
    > > 1.This is nested blockquot
*   black
    > > 1.This is nested blockquot
*   yellow
    This is the second paragraph in the list item. You're
    only required to indent the first line. Lorem ipsum dolor
    sit amet, consectetuer adipiscing elit.

[//]:#(有序列表：使用数字加句号)

1. 颜色
2. 作用域
3. 时间
4. 事件

[//]:#(转译方式:"\")

1989\. What a great season.

[//]:#(代码块)

    const aaa = (a, b, c) => {
        return a + b + c
    }
    aaa(1,2,3)

[//]:#(水平线练习)

----------------
***
- - - 
* * * 

[//]:#(内联元素练习)

*  ### 内联元素练习

----------------

[//]:#(链接练习:内联&引用)

[//]:#(内联练习)

This is [an example](http://example.com/ "Title") inline link.
[This link](http://example.net/) has no title attribute.

[//]:#(引用练习)

This is [an example] [引用练习] reference-style link.
This is [an example] [a] reference-style link.
This is [an example] [b] reference-style link.
This is [an example] [c] reference-style link.
This is [an example] [d] reference-style link.

[//]:#(可以放在文档中的任意位置:一般倾向于将它们直接放在引用位置下面)

[引用练习]: https://www.baidu.com/  "Optional Title Here"
[a]: https://www.baidu.com/  "a"
[b]: https://www.baidu.com/  "b"
[c]: https://www.baidu.com/  "c"
[d]: https://www.baidu.com/  "d"

* 方括号中包含链接标识符 (可以用三个以上的空白符来添加缩进);
* 跟着是冒号;
* 跟着是一个以上的空白符和水平制表符;
* 跟着是链接的 URL;
* 跟着是可选的标题属性, 可以用单引号, 双引号, 或者圆括号包围;

[//]:#(强调)

This is the *second* paragraph in the list item.
This is the _second_ paragraph in the list item.
This is the **second** paragraph in the list item.
This is the __second__ paragraph in the list item.

[//]:#(代码)

[//]:#(重音符号)

Use the `printf()` function.
A backtick-delimited string in a code span: ``foo``
```There is a `literal` backtick (`) here.```
`&#8212;` is the decimal-encoded equivalent of `&mdash;`.

[//]:#(图片:分为内联和引用)

[//]:#(内联图片练习)

![Alt text](/path/to/img.jpg "Optional title")

* 一个感叹号: !;
* 紧跟着一对方括号, 包含了图片的 alt 属性;
* 紧跟着一对圆括号, 包含了图片的 URL 或者路径, 以及一个可选的用单引号或双引号包裹的 title 属性.

[//]:#(引用图片练习)

![Alt text][id]
![Alt text][aa]
![Alt text][bb]

[id]:url/to/image  "Optional title attribute"
[aa]:url/to/image  "Optional title attribute"
[bb]:url/to/image  "Optional title attribute"

[//]:#(表格练习)

表头|表头|表头|表头
---|:--:|:--:|---:
内容|内容|内容|内容
内容|内容|内容|内容
内容|内容|内容|内容

    第二行分割表头和内容
    文字默认居左
    -两边加：表示文字居中
    -右边加：表示文字居右


```flow
st=>start: 开始
op=>operation: My Operation
cond=>condition: Yes or No?
e=>end
st->op->cond
cond(yes)->e
cond(no)->op
&```






    
