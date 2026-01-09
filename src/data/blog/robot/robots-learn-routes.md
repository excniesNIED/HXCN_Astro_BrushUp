---
title: 机器人 学习路线
author: Nao
pubDatetime: 2025-03-24T00:00:00Z
slug: 2025-robots-learn-routes
featured: false
draft: false
tags:
description: 机器人 学习路线 v2.0
---
# 机器人学习路线 v2.0

第一步是确定你有没有兴趣，你可以看看下面的视频，来评估下自己的动力指数

斯坦福机器人学导论：[website](https://www.bilibili.com/video/BV17T421k78T/?spm_id_from=333.337.search-card.all.click)

目前主要分：
- 结构（硬件来组装机器人）
- 感知与决策（视觉和大模型）
- 机器人控制（ROS2）
- 空间感知（SLAM）
- 以及机器人领域的测试！（这个推荐基础稍差的同学作为就业方向考虑）

## 语言基础
- C++，目前公司主流，必须要学 <https://www.bilibili.com/video/BV1et411b73Z/?spm_id_from=333.337.search-card.all.click>
  - 书《C++ Primer Plus》
- Python，必须的备用品，同上黑马

## ROS基础
- 具身智能ROS1基础：<http://www.autolabor.com.cn/book/ROSTutorials/>
- 具身智能ROS2基础（目前看这个就行，1部分老机器人还在用）：<https://zhangzhiwei-zzw.github.io/ROS2%E5%AD%A6%E4%B9%A0/ROS2/>

## 控制论与机器人学基础

### 经典控制原理
- 理解系统、反馈
- 时域与频域分析
- 传递函数
- 理解前馈控制、反馈控制
- PID控制：[CSDN](https://blog.csdn.net/name_longming/article/details/115093338)

### 现代控制理论(线性系统控制)
- Modern Control Systems (14th edition), Robert. H. Bishop, Richard. C, Dorf. z: Book  
  > 注：原文 Book 为疑似非官方电子书下载链接，此处不挂载该链接。
- 状态方程
- 状态反馈与最优控制
- LQR控制

### 先进控制技术
- 鲁棒控制
- 彻底搞懂阻抗控制、导纳控制、力位混合控制: [CSDN](https://blog.csdn.net/a735148617/article/details/108564836)
- 模型预测控制 MPC
- 智能控制 (包含基于深度学习的控制)

## 机器人学导论

### 推荐材料
- 现代机器人学 <https://www.bilibili.com/video/BV1ku411q7de/?spm_id_from=333.337.search-card.all.click>
- 经典教材
  - 《机构学与机器人学的几何基础与旋量代数》 戴建生院士 著
  - 《现代机器人学：机构、规划与控制》凯文·M. 林奇, 朴钟宇 著
  - 《机器人学的现代数学理论基础》丁希仑 著

## 导航

机器人巡航（Robot Navigation）是一类要求智能体在未知场景中，通过获取并处理环境信息，实现达成某种目标的路径规划。机器人巡航是具身任务中的一个重要能力，是完成复杂任务不可缺少的基础技术。机器人巡航任务中，智能体一般接受传感器提供的RGB、深度、GPS等信息和相关目标指令，输出是一系列的动作指令。

按照任务类型分类，机器人巡航可以分为以下几个部分：
- 物体目标巡航（Object-Goal Navigation）：最常见和最广泛的巡航任务。智能体接受的指令是对一个特定物体的描述，目标是找寻到这个物体。
- 图像目标巡航（Image-Goal Navigation）：智能体接受的指令是一个图像，目标是找寻到这个图像所描述的场景。
- 视觉-语言巡航（Vision-Language Navigation，VLN）：智能体接受的指令是一个自然语言指令描述，目标是跟随该指令行进。

按照模型架构分类，机器人巡航可以分为以下几个类别：
- 端到端模型（End-to-End Model）：模型直接将传感器输入通过强化学习或模仿学习映射到动作指令。模型会先将传感器信息编码为视觉表征，结合历史动作作为输入，最后通过与环境交互获得reward实现动作决策的学习。端到端模型主要针对两方面进行优化：一是提升视觉表征能力，二是解决稀疏奖励等动作决策方面的问题。端到端模型的优势在于直截了当，但是面临着严重的过拟合和低泛化性问题，使得其在现实生活中的应用收到了挑战。
  - 经典工作：
    - [Learning Object Relation Graph and Tentative Policy for Visual Navigation](https://arxiv.org/abs/2007.11018)
    - [VTNet: Visual Transformer Network for Object Goal Navigation](https://openreview.net/forum?id=DILxQP08O3B)

- 模块化模型（Modular Model）：将传感器信息输入不同的模块，模块之间通过接口交互，输出动作指令。模块包括建图模块（Mapping，构建语义和占有地图），长期决策模块（Global Policy，决定长期的导航目标），短期决策模块（Local Policy，决定实现长期目标的具体操作）等。建图模块是模型的核心，包含有网格地图、包含预测的网格地图、图表示地图等多种形式。模块化模型的优势在于模块之间的解耦，大大加强了模型的可解释性。同时，独立的建图模块也使得模型更容易泛化到未知环境。但是模块化模型的建图模块仍然充斥着手动设计的规则，这一定程度上也限制了模型的通用性。
  - 经典工作：
    - [Object Goal Navigation using Goal-Oriented Semantic Exploration](https://arxiv.org/abs/2007.00643)：SemExp，最早提出语义地图的概念，学习区域和物体之间关联的语义先验，使智能体能够更好地判断目标物体可能在的方向。
    - [PONI: Potential Functions for ObjectGoal Navigation with Interaction-free Learning](https://openaccess.thecvf.com/content/CVPR2022/papers/Ramakrishnan_PONI_Potential_Functions_for_ObjectGoal_Navigation_With_Interaction-Free_Learning_CVPR_2022_paper.pdf)：PONI，提出了基于potential functions的语义地图预测，即基于已有的语义地图学习“补全”的完整地图，想象物体最可能在整个房间的哪个位置，使智能体能够迁移在其他样本中观察到的知识。
    - [3D-Aware Object Goal Navigation via Simultaneous Exploration and Identification](https://arxiv.org/abs/2212.00338)：把3D信息编码进巡航的经典工作，通过更精细的点云分割信息，避免了2D语义图在z轴上的信息损失，实现了更精确的语义地图构建。

- 零样本模型（Zero-shot Model）：模型不接触训练数据，直接在测试阶段完成任务。零样本模型往往利用具有知识先验的大规模预训练模型（CLIP, LLM等）实现。零样本模型的提出旨在解决基于学习的方法面临的过拟合和低泛化性问题，同时也更适合迁移到现实场景。但是零样本模型的缺陷在于推理速度较慢，且性能受限，需要进一步微调以实现更好的性能。
  - 经典工作：
    - [CoWs on Pasture: Baselines and Benchmarks for Language-Driven Zero-Shot Object Navigation](https://arxiv.org/abs/2203.10421)：开放语义物体巡航的提出工作。思路很简单：用CLIP寻找目标物体，找到了就走过去。在不常见物体、复杂描述上取得了很好的效果，同时也有着对不同属性的同类别物体的区分能力。
    - [L3MVN: Leveraging Large Language Models for Visual Target Navigation](https://arxiv.org/abs/2304.05501)：利用LLM决定“我要向哪个边界前进”。利用LLM的人类知识先验，判断物体可能在的房间，以及与其他物体之间的相关关系，实现更快速更有效的巡航。
    - [ESC: Exploration with Soft Commonsense Constraints for Zero-shot Object Navigation](https://arxiv.org/abs/2301.13166)：显式提出了区域对于巡航的影响，在语义地图上标注出区域占有的位置，作为输入的一部分输入给LLM。结合了语义地图连续性和LLM知识丰富的优势。
    - [SG-Nav: Online 3D Scene Graph Prompting for LLM-based Zero-shot Object Navigation](https://arxiv.org/abs/2410.08189)：在线构建多层场景图(Scene Graph)并输入给LLM，利用CoT实现LLM对于物体位置的推理。

常用数据集：
- [MatterPort3D(MP3D)](https://niessner.github.io/Matterport/)：真实场景采集，场景复杂庞大，数据量大，难度高。
- [Habitat-Matterport3D(HM3D)](https://aihabitat.org/datasets/hm3d/)：同上
- [RoboTHOR](https://ai2thor.allenai.org/robothor/)：仿真环境，场景小简单。

其他参考：
- [物体目标巡航综述](https://orca.cardiff.ac.uk/id/eprint/167432/1/ObjectGoalNavigationSurveyTASE.pdf)
- [awesome vision-language navigation](https://github.com/eric-ai-lab/awesome-vision-language-navigation)
- [Habitat Navigation Challenge](https://github.com/facebookresearch/habitat-challenge)(Habitat框架中整合了非常多常见的agent skill，例如语义地图构建，FBE和一些heuristic方法，非常适合模块化方法的开发)

## 机器人运动学和动力学
待补充

## 硬件大章
待补充

## 电子皮肤(Electronic Skin)

触觉感知的路径主要就是这两类。电子皮肤模拟人类皮肤的触觉能力，通常采用柔性电子材料(如压力传感薄膜、纳米传感器网络等)来感知外界压力、温度和形变，使机器人具备更接近生物的触觉感知能力。

- 优点：电子皮肤可 大面积覆盖 机器人表面，实现全身触觉感知；具有 高灵敏度，能够检测微小的力变化，实现精准反馈；同时 可伸缩性 使其适应复杂表面，提高耐久性。
- 缺点：电子皮肤的 制造复杂，材料和工艺要求高，成本较高；数据处理挑战，大规模触觉数据需要高效的计算与存储方案；此外，稳定性问题 可能导致长期使用后灵敏度下降，影响可靠性。

参考文献综述：[Toward an AI Era: Advances in Electronic Skins](https://pubs.acs.org/doi/10.1021/acs.chemrev.4c00049)

1. 触觉感知的应用和算法(视触觉)
- 3.1 姿态估计(Pose Estimation)
  - 估计in hand物体姿态
    - [3D Shape Perception from Monocular Vision, Touch, and Shape Priors](https://arxiv.org/abs/1808.03247)
  - in scene
    - [Fast Model-Based Contact Patch and Pose Estimation for Highly Deformable Dense Geometry Tactile Sensors](https://ieeexplore.ieee.org/document/8936859)
- 3.2 物体分类(Classification)
  - 区分不同液体、材料或透明物体。
    - [Understanding Dynamic Tactile Sensing for Liquid Property Estimation](https://arxiv.org/abs/2205.08771)
    - [Multimode Fusion Perception for Transparent Glass Recognition](https://www.semanticscholar.org/paper/Multimode-fusion-perception-for-transparent-glass-Zhang-Shan/90109f2eabba717d152a599fc8d8d5a3677c85e5)
- 3.3 触觉操控(Manipulation)
  - 物体装配
    - [Active Extrinsic Contact Sensing: Application to General Peg-in-Hole Insertion](https://ieeexplore.ieee.org/abstract/document/9812017)
    - [Building a Library of Tactile Skills Based on Fingervision](https://ieeexplore.ieee.org/abstract/document/9035000)
  - 线缆整理
    - [Cable Manipulation with a Tactile-Reactive Gripper](https://arxiv.org/abs/1910.02860)
  - 精细手部操作
    - [Manipulation by Feel: Touch-Based Control with Deep Predictive Models](https://arxiv.org/abs/1903.04128)
    - [NeuralFeels with Neural Fields: Visuotactile Perception for In-Hand Manipulation](https://www.science.org/doi/10.1126/scirobotics.adl0628)
- 3.4 触觉大模型(Large Tactile Models)
  - 以统一多模态触觉表示，提高通用性。
    - [Binding Touch to Everything: Learning Unified Multimodal Tactile Representations](https://openaccess.thecvf.com/content/CVPR2024/papers/Yang_Binding_Touch_to_Everything_Learning_Unified_Multimodal_Tactile_Representations_CVPR_2024_paper.pdf)

2. 传感器购买
市面上有一些成熟的视触觉传感器可供选择 🔗 [GelSight 官网](https://gelsight.com/)

## 常用的库
- [cuRobo](https://curobo.org/)：cuRobo, cuRobo是Nvidia的一个利用 CUDA 加速的机器人库, 提供了一套高效的机器人算法, 主要通过并行计算显著提升性能,
- [IKFast](https://moveit.github.io/moveit_tutorials/doc/ikfast/ikfast_tutorial.html)：IKFast, 经典IK库。
- [mplib](https://github.com/haosulab/mplib)：mplib, Maniskill Benchmark以及Sapien仿真平台的IK库。
