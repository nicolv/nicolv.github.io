(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{214:function(a,t,s){"use strict";s.r(t);var r=s(0),n=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"js-编译与运行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js-编译与运行"}},[a._v("#")]),a._v(" JS 编译与运行")]),a._v(" "),s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),s("p",[a._v("在编程过程中，需要用到状态，而状态被存在变量中。那么变量该怎么存？Javascript 使用作用域规则来存储变量。\n那么，程序又是如何找到这些变量，从而使用他们？JavaScript 根据作用域规则来找到变量。\n综上，作用域的规则在一门编程语言设计过程中，是很重要的。")]),a._v(" "),s("hr"),a._v(" "),s("h2",{attrs:{id:"编译与运行过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编译与运行过程"}},[a._v("#")]),a._v(" 编译与运行过程")]),a._v(" "),s("p",[a._v("下面是 JavaScript 语句，定义了一个变量 a，并为 a 赋值为 1。那么 JS 引擎、编译器和作用域具体是如何协作实现这个功能的呢？")]),a._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("实现这个功能，主要分成两个阶段：编译阶段、运行阶段。")]),a._v(" "),s("h3",{attrs:{id:"_1）编译阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1）编译阶段"}},[a._v("#")]),a._v(" 1）编译阶段")]),a._v(" "),s("p",[a._v("JavaScript 引擎与编译器编译的过程，通常只需要几微妙。主要有以下三个步骤：")]),a._v(" "),s("h4",{attrs:{id:"_1-分词-词法分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-分词-词法分析"}},[a._v("#")]),a._v(" 1. 分词 / 词法分析")]),a._v(" "),s("p",[s("strong",[a._v("编译器")]),a._v(" 将上面的 code 分成 "),s("code",[a._v("var")]),a._v("、"),s("code",[a._v("a")]),a._v("、"),s("code",[a._v("=")]),a._v("、"),s("code",[a._v("1")]),a._v("、"),s("code",[a._v(";")])]),a._v(" "),s("h4",{attrs:{id:"_2-语法分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-语法分析"}},[a._v("#")]),a._v(" 2. 语法分析")]),a._v(" "),s("p",[s("strong",[a._v("编译器")]),a._v(" 生成抽象语法树（Abstract Syntax Tree）"),s("br"),a._v("\nVariableDeclaration"),s("br"),a._v("\n　├ Identifier (a)"),s("br"),a._v("\n　├ AssignmentExpression(1)")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://esprima.org/demo/parse.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("在线语法树生成器"),s("OutboundLink")],1)]),a._v(" "),s("h4",{attrs:{id:"_3-代码生成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-代码生成"}},[a._v("#")]),a._v(" 3. 代码生成")]),a._v(" "),s("p",[a._v("在这个阶段，"),s("strong",[a._v("编译器")]),a._v(" 和 "),s("strong",[a._v("JS 引擎")]),a._v(" 将 AST 生成可执行代码（机器指令）。并且，代码会被分为两部分：")]),a._v(" "),s("ol",[s("li",[s("code",[a._v("var a")]),a._v("  这部分会在代码生成阶段被解释")]),a._v(" "),s("li",[s("code",[a._v("a = 1")]),a._v("  这部分会在代码执行阶段被执行")])]),a._v(" "),s("p",[a._v("对于第一部分，"),s("strong",[a._v("编译器")]),a._v(" 询问 "),s("strong",[a._v("作用域")]),a._v(" 是否存在一个名叫 "),s("code",[a._v("a")]),a._v(" 的变量")]),a._v(" "),s("ul",[s("li",[a._v("是：忽略 "),s("code",[a._v("var a")])]),a._v(" "),s("li",[a._v("否："),s("br"),a._v("\n编译器 创建一个名叫 "),s("code",[a._v("a")]),a._v(" 的变量"),s("br"),a._v("\n编译器 为 "),s("code",[a._v("a")]),a._v(" 创建内存")])]),a._v(" "),s("p",[a._v("而第二部分交给 "),s("strong",[a._v("JavaScript 引擎")]),a._v(" 在代码执行阶段执行。")]),a._v(" "),s("h3",{attrs:{id:"_2）代码执行阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2）代码执行阶段"}},[a._v("#")]),a._v(" 2）代码执行阶段")]),a._v(" "),s("p",[a._v("JavaScript 引擎 询问 "),s("strong",[a._v("当前作用域")]),a._v(" 是否存在变量 "),s("code",[a._v("a")])]),a._v(" "),s("ul",[s("li",[a._v("是："),s("strong",[a._v("JavaScript 引擎")]),a._v(" 为 "),s("code",[a._v("a")]),a._v(" 赋值为 "),s("code",[a._v("1")])]),a._v(" "),s("li",[a._v("否："),s("strong",[a._v("JavaScript 引擎")]),a._v(" 继续在 "),s("strong",[a._v("上级作用域")]),a._v(" 中查找变量 "),s("code",[a._v("a")])]),a._v(" "),s("li",[a._v("查了所有 "),s("strong",[a._v("上级作用域")]),a._v(" 依然没找到 "),s("code",[a._v("a")]),a._v("："),s("br"),a._v(" "),s("strong",[a._v("JavaScript 引擎")]),a._v(" 抛出 "),s("code",[a._v("ReferenceError")])])]),a._v(" "),s("hr"),a._v(" "),s("h2",{attrs:{id:"一些术语"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一些术语"}},[a._v("#")]),a._v(" 一些术语")]),a._v(" "),s("h3",{attrs:{id:"lhs-查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lhs-查询"}},[a._v("#")]),a._v(" LHS 查询")]),a._v(" "),s("p",[a._v("表示 在作用域中查找变量，并接下来要执行赋值操作。"),s("br"),a._v("\n就像在上述代码中，就是为 "),s("code",[a._v("= 2")]),a._v(" 这个操作找到一个目标 "),s("code",[a._v("a")]),a._v("。")]),a._v(" "),s("p",[a._v("严格模式下，找不到变量，抛出"),s("code",[a._v("ReferenceError")]),s("br"),a._v("\n非严格模式下，找不到变量，编译器将创建这个变量")]),a._v(" "),s("h3",{attrs:{id:"rhs-查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rhs-查询"}},[a._v("#")]),a._v(" RHS 查询")]),a._v(" "),s("p",[a._v("表示 在作用域中取得对象的值。"),s("br"),a._v("\n例如："),s("code",[a._v("console.log(a)")])]),a._v(" "),s("p",[a._v("如果在作用域中找不到这个对象，抛出"),s("code",[a._v("ReferenceError")]),s("br"),a._v("\n如果在作用域中找到这个对象，但是不存在它的属性，抛出"),s("code",[a._v("TypeError")]),s("br"),a._v("\ne.g.")]),a._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("  \nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("如果在作用域中找到这个对象，但是对它进行不合理操作，抛出"),s("code",[a._v("TypeError")]),s("br"),a._v("\ne.g.")]),a._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("hr"),a._v(" "),s("h2",{attrs:{id:"练习"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#练习"}},[a._v("#")]),a._v(" 练习")]),a._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" c "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 5")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])]),s("p",[a._v("在这段代码中，有 3 处 LHS 查询")]),a._v(" "),s("ul",[s("li",[a._v("b =")]),a._v(" "),s("li",[a._v("a =")]),a._v(" "),s("li",[a._v("c =")])]),a._v(" "),s("p",[a._v("有 5 处 RHS 查询")]),a._v(" "),s("ul",[s("li",[a._v("foo(...")]),a._v(" "),s("li",[a._v("a...")]),a._v(" "),s("li",[a._v("...b")]),a._v(" "),s("li",[a._v("...c")]),a._v(" "),s("li",[a._v("console.log(...")])]),a._v(" "),s("hr"),a._v(" "),s("h2",{attrs:{id:"遗留的问题（todo）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#遗留的问题（todo）"}},[a._v("#")]),a._v(" 遗留的问题（TODO）")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("javascript 引擎如何进行对性能进行优化？在哪个阶段进行优化？")])]),a._v(" "),s("li",[s("p",[a._v("词法分析和分词有什么区别？")])])]),a._v(" "),s("hr"),a._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[a._v("#")]),a._v(" 参考")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://lmjben.github.io/blog/js-principle.html#%E7%BC%96%E8%AF%91%E8%BF%87%E7%A8%8B",target:"_blank",rel:"noopener noreferrer"}},[a._v("Imjben 的 blog"),s("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);