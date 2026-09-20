---
layout: publication
title: DispBench - Benchmarking Disparity Estimation to Synthetic Corruptions
description: Accurate stereo matching is only part of dependable depth perception. DispBench systematically
  evaluates disparity models under adversarial attacks and image corruptions, making reliability and generalization
  easier to compare.
why: Estimating depth from two cameras is useful only if it remains dependable when the images deteriorate.
  DispBench puts stereo models through a common collection of corruption and attack tests. It makes weaknesses
  and trade-offs easier to compare before relying on depth estimates in changing conditions.
figures:
- label: Figure 1
  image: /images/publications/details/060-figure-1.webp
  alt: Disparity-estimation error across increasing corruption severity.
  caption: 'Analyzing the generalization ability of some Disparity estimation methods: GWCNet [26], CFNet [55],
    and STTR and STTR-light [39] proposed over time. The y-axis represents the mean End-Point-Error (EPE) on
    Syntheticc Corruptions (2D Common Corrruptions [31]) at different severalties (severity=0 is i.i.d. performance)
    using the FlyingThings3D [41], i.e., lower is better. We observe that disparity estimation methods lack
    the generalization ability to common corruptions and, thus, are not safe for real-world deployment.'
  source: https://arxiv.org/pdf/2505.05091#page=1
  width: 551
  height: 265
- label: Figure 2
  image: /images/publications/details/060-figure-2.webp
  alt: Example of performing adversarial attacks on STTR using KITTI2015 dataset under different attacks.
  caption: Example of performing adversarial attacks on STTR using KITTI2015 dataset under different attacks.
    We show the samples before and after the attacks and the predictions before and after the respective adversarial
    attacks.
  source: https://arxiv.org/pdf/2505.05091#page=4
  width: 538
  height: 1200
bibtex: |
  @inproceedings{agnihotri2025dispbenchbenchmarkingdisparity60,
    title = {{DispBench - Benchmarking Disparity Estimation to Synthetic Corruptions}},
    author = {S. Agnihotri and A. Ansari and A. Dackermann and F. Rösch and M. Keuper},
    booktitle = {Synthetic Data for Computer Vision Workshop@ CVPR 2025},
    year = {2025},
    url = {https://openreview.net/forum?id=yIEInigSp9}
  }
bibtex_file: /assets/bibtex/2025-dispbench-benchmarking-disparity-estimation-to-synthetic-corruptions.bib
abstract: |-
  Deep learning (DL) has surpassed human performance on standard benchmarks, driving its widespread adoption in computer vision tasks. One such task is disparity estimation, estimating the disparity between matching pixels in stereo image pairs, which is crucial for safety-critical applications like medical surgeries and autonomous navigation. However, DL-based disparity estimation methods are highly susceptible to distribution shifts and adversarial attacks, raising concerns about their reliability and generalization. Despite these concerns, a standardized benchmark for evaluating the robustness of disparity estimation methods remains absent, hindering progress in the field. To address this gap, we introduce DISPBENCH, a comprehensive benchmarking tool for systematically assessing the reliability of disparity estimation methods. DISPBENCH evaluates robustness against synthetic image corruptions such as adversarial attacks and out-of-distribution shifts caused by 2D Common Corruptions across multiple datasets and diverse corruption scenarios. We conduct the most extensive performance and robustness analysis of disparity estimation methods to date, uncovering key correlations between accuracy, reliability, and generalization. Open-source code for DISPBENCH.
abstract_source: https://arxiv.org/pdf/2505.05091
content_status: complete
---
