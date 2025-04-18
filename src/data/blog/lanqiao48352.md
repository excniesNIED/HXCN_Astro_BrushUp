---
title: Saas48352. 字母数
author: 萑澈
pubDatetime: 2025-03-23T00:00:00Z
slug: lanqiao48352
featured: false
draft: false
tags:
  - 蓝桥杯
  - 算法
  - python
  - 算法基础
  - 进制转换
description: Saas48352. 字母数
---
### 问题描述

请找到一个大于 2022 的最小数，这个数转换成十六进制之后，所有的数位（不含前导 0）都为字母（A 到 F）。

请将这个数的十进制形式作为答案提交。

### 答案提交

这是一道结果填空的题，你只需要算出结果后提交即可。本题的结果为一个整数，在提交答案时只填写这个整数，填写多余的内容将无法得分。
### xxxxxxxxxx def main():    print(2021%20)if __name__ == "__main__":    main()python
```python
n = 2023
while True:
    hex_str = hex(n)[2:].upper()  # 转换为十六进制并去除前缀
    if all(c in 'ABCDEF' for c in hex_str):
        print(n)
        break
    n += 1
```


```python
def check(x):
    while x:
        if x % 16 <= 9:
            return False
        else:
            x //= 16
    return True

x = 2022
while True:
    if check(x):
        break
    x += 1
print(x)
```
### 答案
```
2730（0xAAA）
```
