---
layout: publication
title: MaxSup - Overcoming Representation Collapse in Label Smoothing
description: Label smoothing can unintentionally reinforce mistakes and collapse feature diversity. MaxSup
  targets the largest prediction logit instead, preserving richer representations while reducing overconfidence
  more consistently.
why: A common technique for reducing overconfidence can unintentionally make learned representations less informative.
  This paper explains that failure mode and proposes a more targeted alternative. The result is a way to moderate
  confidence while retaining features that remain useful for other tasks.
figures:
- label: Figure 1
  image: /images/publications/details/075-figure-1.webp
  alt: Feature distributions and attribution maps under different regularization methods.
  caption: 'Comparison of Label Smoothing (LS) and MaxSup. Left: MaxSup mitigates the intra-class compression
    induced by LS while preserving inter-class separability. Right: Grad-CAM visualizations show that MaxSup
    more effectively highlights class-discriminative regions than LS.'
  source: https://arxiv.org/pdf/2502.15798#page=2
  width: 895
  height: 176
- label: Figure 2
  image: /images/publications/details/075-figure-2.webp
  alt: 'Grad-CAM [29] visualizations for DeiT- Small models under three training setups: MaxSup (2nd row),
    Label Smoothing (3rd row), and a baseline (4th row).'
  caption: 'Grad-CAM [29] visualizations for DeiT- Small models under three training setups: MaxSup (2nd row),
    Label Smoothing (3rd row), and a baseline (4th row). The first row shows the original images. Compared
    to Label Smoothing, MaxSup more effectively filters out non-target regions and highlights essential features
    of the target class, reducing instances where the model partially or entirely focuses on irrelevant areas.'
  source: https://arxiv.org/pdf/2502.15798#page=10
  width: 462
  height: 418
bibtex: |
  @inproceedings{zhou2025maxsupovercomingrepresentation75,
    title = {{MaxSup - Overcoming Representation Collapse in Label Smoothing}},
    author = {Yuxuan Zhou and Heng Li and Zhi-Qi Cheng and Xudong Yan and Yifei Dong and Mario Fritz and Margret Keuper},
    booktitle = {Advances in Neural Information Processing Systems},
    year = {2025},
    url = {https://arxiv.org/pdf/2502.15798}
  }
bibtex_file: /assets/bibtex/2025-maxsup-overcoming-representation-collapse-in-label-smoothing.bib
abstract: |-
  Label Smoothing (LS) is widely adopted to reduce overconfidence in neural network predictions and improve generalization. Despite these benefits, recent studies reveal two critical issues with LS. First, LS induces overconfidence in misclassified samples. Second, it compacts feature representations into overly tight clusters, diluting intra-class diversity, although the precise cause of this phenomenon remained elusive. In this paper, we analytically decompose the LS-induced loss, exposing two key terms: (i) a regularization term that dampens overconfidence only when the prediction is correct, and (ii) an error-amplification term that arises under misclassifications. This latter term compels the network to reinforce incorrect predictions with undue certainty, exacerbating representation collapse. To address these shortcomings, we propose Max Suppression (MaxSup), which applies uniform regularization to both correct and incorrect predictions by penalizing the top-1 logit rather than the ground-truth logit. Through extensive feature-space analyses, we show that MaxSup restores intra-class variation and sharpens inter-class boundaries. Experiments on large-scale image classification and multiple downstream tasks confirm that MaxSup is a more robust alternative to LS.
abstract_source: https://arxiv.org/pdf/2502.15798
content_status: complete
---
