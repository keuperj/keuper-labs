---
layout: publication
title: As large as it gets-Studying Infinitely Large Convolutions via Neural Implicit Frequency Filters
description: How large would convolution filters grow if their size were no longer expensive? Neural Implicit
  Frequency Filters make this question testable and reveal that many learned filters remain spatially compact
  even when much larger ones are available.
why: Bigger image filters are often promoted as a way to improve neural networks, but how much of that extra
  space do models actually use? This work removes much of the cost barrier to studying very large filters.
  Its findings help distinguish useful spatial context from size that adds complexity without being fully used.
figures:
- label: Figure 1
  image: /images/publications/details/047-figure-1.webp
  alt: Learned convolution kernels and their spatial extent.
  caption: 'PCA components of learned kernel weights in the first layer of a ResNet50 trained on ImageNet-1k:
    the 1st row shows the learned NIFF kernels transformed to the spatial domain. Row 2 visualizes a zoomed-in
    version with explained variance for each component. The 3rd row shows PCA and explained variance for a
    standard CNN with the standard kernel size 3 × 3. The 4th row shows that NIFF actually learns large and
    highly structured spatial filters for the 4th layer of the same network, while the baseline model is limited
    to small filters. This PCA analysis is one of the tools we apply to answer the central question of this
    paper: How large do CNN kernels really need to be? It demonstrates that networks which can learn filter
    kernels as large as their featuremaps, still learn well-localized, small kernels. Yet, these kernels are
    larger than the typically applied 3 × 3 kernels.'
  source: https://arxiv.org/pdf/2307.10001#page=2
  width: 1193
  height: 515
- label: Figure 2
  image: /images/publications/details/047-figure-2.webp
  alt: While learning large kernels increases the number of learnable parameters quadratically (here N×N (left)),
    neural implicit functions use a fixed amount of learnable parameters (middle).
  caption: While learning large kernels increases the number of learnable parameters quadratically (here N×N
    (left)), neural implicit functions use a fixed amount of learnable parameters (middle). When using a simple
    MLP, the input is a 2D vector containing the ωx and ωy coordinates of the desired filter position. Our
    NIFF (right) implements the MLP efficiently using several 1×1 convolutions which start with an input channel
    size of two, encoding the ωx and ωy direction. Hence, there is no need to iterate over each coordinate
    separately. Following, we include some hidden layers and activations to learn and at the last layer, the
    number of output channels is set to the desired number of element-wise multiplication weights.
  source: https://arxiv.org/pdf/2307.10001#page=5
  width: 1193
  height: 294
bibtex: |
  @article{grabinski2024aslargeas47,
    title = {{As large as it gets-Studying Infinitely Large Convolutions via Neural Implicit Frequency Filters}},
    author = {Julia Grabinski and Janis Keuper and Margret Keuper},
    journal = {Transactions on Machine Learning Research},
    year = {2024},
    url = {https://arxiv.org/abs/2307.10001}
  }
bibtex_file: /assets/bibtex/2024-as-large-as-it-gets-studying-infinitely-large-convolutions-via-neural-implicit-frequency-filters.bib
abstract: |-
  Recent work in neural networks for image classification has seen a strong tendency towards increasing the spatial context during encoding. Whether achieved through large convolution kernels or self-attention, models scale poorly with the increased spatial context, such that the improved model accuracy often comes at significant costs. In this paper, we propose a module for studying the effective filter size of convolutional neural networks (CNNs). To facilitate such a study, several challenges need to be addressed: (i) we need an effective means to train models with large filters (potentially as large as the input data) without increasing the number of learnable parameters, (ii) the employed convolution operation should be a plug-and-play module that can replace conventional convolutions in a CNN and allow for an efficient implementation in current frameworks, (iii) the study of filter sizes has to be decoupled from other aspects such as the network width or the number of learnable parameters, and (iv) the cost of the convolution operation itself has to remain manageable i.e. we can not naïvely increase the size of the convolution kernel. To address these challenges, we propose to learn the frequency representations of filter weights as neural implicit functions, such that the better scalability of the convolution in the frequency domain can be leveraged. Additionally, due to the implementation of the proposed neural implicit function, even large and expressive spatial filters can be parameterized by only a few learnable weights. Interestingly, our analysis shows that, although the proposed networks could learn very large convolution kernels, the learned filters are well localized and relatively small in practice when transformed from the frequency to the spatial domain. We anticipate that our analysis of individually optimized filter sizes will allow for more efficient, yet effective, models in the future. Our code is available at https://github.com/GeJulia/NIFF.
abstract_source: https://arxiv.org/pdf/2307.10001
content_status: complete
---
