---
layout: publication
title: MultiMax - Sparse and Multi-Modal Attention Learning
description: Attention should suppress irrelevant entries without losing several useful alternatives. MultiMax
  addresses this balance with an adaptive normalization function that preserves multiple modes while encouraging
  sparsity.
why: An attention mechanism needs to ignore irrelevant information without discarding several useful possibilities.
  MultiMax changes how attention weights are assigned to support both goals. Its evaluations show why this
  small mathematical component can matter across image and language tasks.
figures:
- label: Figure 1
  image: /images/publications/details/049-figure-1.webp
  alt: Attention distributions illustrating sparsity and preservation of multiple modes.
  caption: We evaluate SoftMax, SparseMax, EntMax, EvSoftMax and MultiMax (using the parameters of a hidden
    layer MultiMax trained on ImageNet directly) functions on a series of example input points v ∈R3 and project
    the resulting distribution on a simplex ∆2. Informally, the interior of the simplex stands for trimodal
    distributions, the edges constitute the set of bimodal distributions, and the vertices are unimodal distributions.
    Notably, the above figures highlight the advantage of MultiMax’s multi-modality. EntMax, Sparsemax and
    SoftMax with small temperature (blue colored line) yield a (quasi) uni-modal distribution, which ignore
    the second largest entry. In contrary, SoftMax with higher temperatures (green and orange colored line)
    fails to ignore the negative entry.
  source: https://arxiv.org/pdf/2406.01189#page=2
  width: 1193
  height: 457
- label: Figure 2
  image: /images/publications/details/049-figure-2.webp
  alt: Illustration of different reweighting functions in the twodimensional case.
  caption: Illustration of different reweighting functions in the twodimensional case. It can be seen clearly
    that MultiMax weigh the entries at small and large value ranges in a different manner, thus it does not
    suffer from the trade-off between sparse and multi-modal.
  source: https://arxiv.org/pdf/2406.01189#page=5
  width: 543
  height: 261
bibtex: |
  @inproceedings{zhou2024multimaxsparseand49,
    title = {{MultiMax - Sparse and Multi-Modal Attention Learning}},
    author = {Y. Zhou and Mario Fritz and Margret Keuper},
    booktitle = {International Conference on Machine Learning},
    year = {2024},
    url = {https://openreview.net/forum?id=IC9UZ8lm25}
  }
bibtex_file: /assets/bibtex/2024-multimax-sparse-and-multi-modal-attention-learning.bib
abstract: |-
  SoftMax is a ubiquitous ingredient of modern machine learning algorithms. It maps an input vector onto a probability simplex and reweights the input by concentrating the probability mass at large entries. Yet, as a smooth approximation to the Argmax function, a significant amount of probability mass is distributed to other, residual entries, leading to poor interpretability and noise. Although sparsity can be achieved by a family of SoftMax variants, they often require an alternative loss function and do not preserve multi-modality. We show that this trade-off between multi-modality and sparsity limits the expressivity of SoftMax as well as its variants. We provide a solution to this tension between objectives by proposing a piece-wise differentiable function, termed MultiMax, which adaptively modulates the output distribution according to input entry range. Through comprehensive analysis and evaluation, we show that MultiMax successfully produces a distribution that supresses irrelevant entries while preserving multimodality, with benefits in image classification, language modeling and machine translation. The code is available at https://github.com/ZhouYuxuanYX/MultiMax.
abstract_source: https://arxiv.org/pdf/2406.01189
content_status: complete
---
