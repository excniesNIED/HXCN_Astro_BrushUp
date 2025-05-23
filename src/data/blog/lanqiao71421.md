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
### 题解
### **1. `input().strip()`**

- **作用**：去除输入字符串 **首尾** 的空白字符（如空格、换行符 `\n`、制表符 `\t` 等）。
    
- **返回值**：一个 **字符串**。
    
- **示例**：
    
    user_input = input().strip()
    
    - 输入：`" Hello World! "`（前后有空格）
        
    - 输出：`"Hello World!"`（首尾空格被去除）
---

### **2. `input().split()`**

- **作用**：将输入字符串按 **分隔符**（默认是空格）分割成多个子字符串。
    
- **返回值**：一个 **列表**，包含分割后的子字符串。
    
- **示例**：
    
    user_input = input().split()
    
    - 输入：`"Hello Python World"`（中间多个空格）
        
    - 输出：`['Hello', 'Python', 'World']`（自动合并连续空格）
---

### **3. 区别总结**

|**方法**|作用对象|返回值|典型场景|
|---|---|---|---|
|`input().strip()`|字符串首尾空格|字符串|清理用户输入的前后空格|
|`input().split()`|字符串内容|列表|将输入拆分为多个独立的数据项|

---

### **4. 联合使用：`input().strip().split()`**

- **场景**：先清理首尾空格，再分割字符串，避免空元素。
    
- **示例**：
    
    user_input = input().strip().split()
    
    - 输入：`" 1 2 3 "`（前后有空格）
        
    - 输出：`['1', '2', '3']`（先`strip()`再`split()`）

---

### **5. 关键细节**

- **`split()`的分隔符**：默认按空格分割（多个连续空格视为一个），也可指定其他分隔符，如 `split(",")`。
    
- **不清理中间空格**：`strip()`只处理首尾，中间的空格由`split()`处理。