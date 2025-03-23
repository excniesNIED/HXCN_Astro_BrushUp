---
title: Saas71421. 简易计算器
author: 萑澈
pubDatetime: 2025-03-22T00:00:00Z
slug: lanqiao71421
featured: false
draft: false
tags:
  - 蓝桥杯
  - 算法
  - python
description: Saas71421. 简易计算器
---
### 问题描述

可可在学习计算基础算术表达式，目前她只需要计算形式为 `a+b` 的表达式，其中 `a` 和 `b` 是从 0 到 9 的整数。请你帮助可可计算这个表达式的结果。
### 输入格式

输入仅一行，包含一个形式为 `a+b` 的表达式，其中 0≤a,b≤9，整数与 `+` 符号之间没有空格。
### 输出格式

输出一个整数，即表达式的结果。

### 样例输入

```
3+6
```
### 样例输出

```
9
```
### 代码
```python
def main():
    s=input().strip().split('+')
    a=int(s[0])
    b=int(s[1])
    print(a+b)
if __name__=="__main__":
    main()
```