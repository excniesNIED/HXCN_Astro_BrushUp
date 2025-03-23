---
title: Saas44714. 九进制转十进制
author: 萑澈
pubDatetime: 2025-03-23T00:00:00Z
slug: lanqiao44714
featured: false
draft: false
tags:
  - 蓝桥杯
  - 算法
  - python
  - 算法基础
  - 进制转换
description: Saas44714. 九进制转十进制
---
### 问题描述

**本题为填空题，只需要算出结果后，在代码中使用输出语句将所填结果输出即可。**

九进制正整数 $(2022)_9$ 转换成十进制等于多少？
### 代码

#### 方法一：使用Python内置函数`int()`

直接利用`int()`函数指定进制转换：

```python
decimal = int('2022', 9)
print(decimal)  # 输出：1478
```

#### 方法二：手动计算每一位的权值

通过遍历每一位数字，计算其对应的权值并累加：

```python
num = "2022"  
base = 9  
result = 0  
​  
for i in range(len(num)):  
    digit = int(num[i])  
    power = len(num) - i - 1  # 计算当前位的权值指数  
    result += digit * (base ** power)  
​  
print(result)  # 输出：1478
```

#### 计算过程分解

- $2 \times 9^3 = 2 \times 729 = 1458$
    
- $0 \times 9^2 = 0 \times 81 = 0$
    
- $2 \times 9^1 = 2 \times 9 = 18$
    
- $2 \times 9^0 = 2 \times 1 = 2$

累加结果： $1458 + 0 + 18 + 2 = 1478$

两种方法均得到十进制结果 **1478**。

