---
layout: publication
title: CosPGD - an efficient white-box adversarial attack for pixel-wise prediction tasks
description: CosPGD provides a common adversarial test for pixel-wise prediction tasks. Its smooth, prediction-alignment
  weighting produces effective attacks across both classification and regression outputs, from segmentation
  to optical flow.
why: Systems that estimate motion or label every pixel need stress tests that go beyond ordinary image classification.
  CosPGD provides a shared way to construct challenging inputs across these tasks. It helps researchers compare
  reliability and uncover weaknesses that clean-image accuracy alone can conceal.
figures:
- label: Figure 1
  image: /images/publications/details/048-figure-1.webp
  alt: Optical-flow predictions before and after PGD and CosPGD attacks.
  caption: Optical flow predictions using RAFT (Teed & Deng, 2020) on Sintel (Butler et al., 2012; Wulff et
    al., 2012) validation. (a) and (b) show two consecutive frames for which the initial optical flow in (d)
    was predicted. The results of attacking the model with target −→0 (c) are depicted in (e) for PGD and (f)
    for CosPGD. For the same perturbation magnitude and number of iterations, the proposed CosPGD alters the
    estimated optical flow more strongly and brings it closer to target (c).
  source: https://arxiv.org/pdf/2302.02213#page=1
  width: 541
  height: 417
- label: Figure 2
  image: /images/publications/details/048-figure-2.webp
  alt: Change in pixel-wise image gradients over attack iterations on DeepLabV3 performing semantic segmentation
    on PASCAL VOC 2012 validation subset.
  caption: Change in pixel-wise image gradients over attack iterations on DeepLabV3 performing semantic segmentation
    on PASCAL VOC 2012 validation subset. We observe that the absolute difference between gradient values (top)
    is larger for PGD and increasing for SegPGD, while being stable for CosPGD. Further, CosPGD has fewer changes
    in gradient direction over attack iterations (bottom) compared to PGD and SegPGD. This shows CosPGD is
    more stable during optimization compared to PGD and SegPGD.
  source: https://arxiv.org/pdf/2302.02213#page=5
  width: 538
  height: 594
bibtex: |
  @inproceedings{agnihotri2024cospgdanefficient48,
    title = {{CosPGD - an efficient white-box adversarial attack for pixel-wise prediction tasks}},
    author = {Shashank Agnihotri and Stefen Jung and Margret Keuper},
    booktitle = {International Conference on Machine Learning},
    year = {2024},
    url = {https://openreview.net/forum?id=CXZqGJonmt}
  }
bibtex_file: /assets/bibtex/2024-cospgd-an-efficient-white-box-adversarial-attack-for-pixel-wise-prediction-tasks.bib
abstract: |-
  While neural networks allow highly accurate predictions in many tasks, their lack of robustness towards even slight input perturbations often hampers their deployment. Adversarial attacks such as the seminal projected gradient descent (PGD) offer an effective means to evaluate a model’s robustness and dedicated solutions have been proposed for attacks on semantic segmentation or optical flow estimation. While they attempt to increase the attack’s efficiency, a further objective is to balance its effect, so that it acts on the entire image domain instead of isolated pointwise predictions. This often comes at the cost of optimization stability and thus efficiency. Here, we propose CosPGD, an attack that encourages more balanced errors over the entire image domain while increasing the attack’s overall efficiency. To this end, CosPGD leverages a simple alignment score computed from any pixelwise prediction and its target to scale the loss in a smooth and fully differentiable way. It leads to efficient evaluations of a model’s robustness for semantic segmentation as well as regression models (such as optical flow, disparity estimation, or image restoration), and it allows it to outperform the previous SotA attack on semantic segmentation. We provide code for the CosPGD algorithm and example usage at https://github.com/shashankskagnihotri/cospgd.
abstract_source: https://arxiv.org/pdf/2302.02213
content_status: complete
---
