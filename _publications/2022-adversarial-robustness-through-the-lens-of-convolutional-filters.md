---
layout: publication
title: Adversarial Robustness Through the Lens of Convolutional Filters
description: Robustness leaves a signature in learned convolution filters. By comparing adversarially trained
  networks with standard models, we uncover changes in filter diversity, sparsity, and early-layer filtering
  that help explain their different behavior.
why: Training a model to resist attacks changes the small visual patterns it learns to recognize. This paper
  makes those changes visible by comparing the filters inside robust and conventionally trained networks. Understanding
  those differences helps move robustness research from reporting scores toward explaining how the models work.
figures:
- label: Figure 1
  image: /images/publications/details/015-figure-1.webp
  alt: Distribution of convolution-filter differences across network depth.
  caption: Filter structure divergence between learned 3 × 3 filter structures of robust and normal models
    by depth decile. The first convolutional layer is displayed separately. The most significant shifts (large
    KL values) appear in the primary convolution layer and deeper stages.
  source: https://openaccess.thecvf.com/content/CVPR2022W/ArtOfRobust/papers/Gavrikov_Adversarial_Robustness_Through_the_Lens_of_Convolutional_Filters_CVPRW_2022_paper.pdf#page=1
  width: 543
  height: 392
- label: Figure 2
  image: /images/publications/details/015-figure-2.webp
  alt: Filter basis and (cumulative) explained variance ratio per component (below) for filters from (a) all
    models, (b) adversarially-robust models, (c) normal models.
  caption: Filter basis and (cumulative) explained variance ratio per component (below) for filters from (a)
    all models, (b) adversarially-robust models, (c) normal models. Basis vectors are sorted by decreasing
    variance.
  source: https://openaccess.thecvf.com/content/CVPR2022W/ArtOfRobust/papers/Gavrikov_Adversarial_Robustness_Through_the_Lens_of_Convolutional_Filters_CVPRW_2022_paper.pdf#page=3
  width: 542
  height: 359
bibtex: |
  @inproceedings{gavrikov2022adversarialrobustnessthrough15,
    title = {{Adversarial Robustness Through the Lens of Convolutional Filters}},
    author = {Paul Gavrikov and Janis Keuper},
    booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition Workshops (CVPRW 2022)},
    year = {2022},
    url = {https://openaccess.thecvf.com/content/CVPR2022W/ArtOfRobust/html/Gavrikov_Adversarial_Robustness_Through_the_Lens_of_Convolutional_Filters_CVPRW_2022_paper.html}
  }
bibtex_file: /assets/bibtex/2022-adversarial-robustness-through-the-lens-of-convolutional-filters.bib
abstract: |-
  Deep learning models are intrinsically sensitive to distribution shifts in the input data. In particular, small, barely perceivable perturbations to the input data can force models to make wrong predictions with high confidence. An common defense mechanism is regularization through adversarial training which injects worst-case perturbations back into training to strengthen the decision boundaries, and to reduce overfitting. In this context, we perform an investigation of 3 × 3 convolution filters that form in adversariallytrained models. Filters are extracted from 71 public models of the l∞-RobustBench CIFAR-10/100 and ImageNet1k leaderboard and compared to filters extracted from models built on the same architectures but trained without robust regularization. We observe that adversarially-robust models appear to form more diverse, less sparse, and more orthogonal convolution filters than their normal counterparts. The largest differences between robust and normal models are found in the deepest layers, and the very first convolution layer, which consistently and predominantly forms filters that can partially eliminate perturbations, irrespective of the architecture. Data & Project website: https://github.com/paulgavrikov/cvpr22w_RobustnessThroughTheLens
abstract_source: https://openaccess.thecvf.com/content/CVPR2022W/ArtOfRobust/papers/Gavrikov_Adversarial_Robustness_Through_the_Lens_of_Convolutional_Filters_CVPRW_2022_paper.pdf
content_status: complete
---
