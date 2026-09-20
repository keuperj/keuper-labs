---
layout: publication
title: Are Synthetic Corruptions A Reliable Proxy For Real-World Corruptions?
description: Do artificial corruptions tell us how models will behave in real adverse conditions? This large
  segmentation study finds useful aggregate correlations while showing why individual corruption types still
  need careful interpretation.
why: Artificial fog or noise is convenient for testing vision models, but it needs to tell us something about
  real conditions. This study compares synthetic tests with actual adverse-weather images. It identifies useful
  overall relationships while showing why conclusions about individual corruptions need more care.
figures:
- label: Figure 1
  image: /images/publications/details/062-figure-1.webp
  alt: Semantic segmentation under matched synthetic and real adverse conditions.
  caption: Comparing images with weather corruptions captured in the wild (ACDC [50]) and images corrupted
    using synthetic corruptions [31] and the predictions using a Mask2Former [13] with a Swin-Base [42] backbone
    trained on the Cityscapes [15] dataset.
  source: https://arxiv.org/pdf/2505.04835#page=1
  width: 1193
  height: 693
- label: Figure 2
  image: /images/publications/details/062-figure-2.webp
  alt: To empirically determine if synthetic common corruptions such as those proposed by [31] truly represent
    the distribution and domain shifts in the real world, we try to find correlations in evaluations on ACDC
    and 2D Common Corruptions.
  caption: 'To empirically determine if synthetic common corruptions such as those proposed by [31] truly represent
    the distribution and domain shifts in the real world, we try to find correlations in evaluations on ACDC
    and 2D Common Corruptions. Each model is trained on the training dataset of the Cityscapes dataset. Left
    plot: The y-axis represents values from evaluations on the ACDC dataset, and the x-axis represents mean
    performance from evaluations on the Common Corruptions at severity=3. We observe a high positive correlation.
    Centre plot: The y-axis again represents values from evaluations on the ACDC dataset, while the x-axis
    represents GAM3, which is the worst performance of the methods across all the Common Corruptions at severity=3.
    We observe a slightly higher positive correlation. Right plot: serves as a sanity check, where the y-axis
    represents GAM3 and the x-axis represents mean performance from evaluations on the Common Corruptions at
    the same severity. We observe a very high correlation in performance. Thus, given the high positive correlations
    between performance on the ACDC and mean performance against all synthetic common corruption, we conclude
    for relative analysis that synthetic corruptions do serve as a reliable proxy for real-world corruptions.'
  source: https://arxiv.org/pdf/2505.04835#page=4
  width: 1193
  height: 354
bibtex: |
  @inproceedings{agnihotri2025aresyntheticcorruptions62,
    title = {{Are Synthetic Corruptions A Reliable Proxy For Real-World Corruptions?}},
    author = {S. Agnihotri and D. Schader and N. Sharei and M. Keuper},
    booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition Workshops (CVPRw 2025)},
    year = {2025},
    url = {https://openreview.net/forum?id=mPqVEApjIw}
  }
bibtex_file: /assets/bibtex/2025-are-synthetic-corruptions-a-reliable-proxy-for-real-world-corruptions.bib
abstract: |-
  Deep learning (DL) models are widely used in real-world applications but remain vulnerable to distribution shifts, especially due to weather and lighting changes. Collecting diverse real-world data for testing the robustness of DL models is resource-intensive, making synthetic corruptions an attractive alternative for robustness testing. However, are synthetic corruptions a reliable proxy for real-world corruptions? To answer this, we conduct the largest benchmarking study on semantic segmentation models, comparing performance on real-world corruptions and synthetic corruptions datasets. Our results reveal a strong correlation in mean performance, supporting the use of synthetic corruptions for robustness evaluation. We further analyze corruption-specific correlations, providing key insights to understand when synthetic corruptions succeed in representing real-world corruptions. Open-source Code.
abstract_source: https://arxiv.org/pdf/2505.04835
content_status: complete
---
