---
layout: publication
title: Happy People -- Image Synthesis as Black-Box Optimization Problem in the Discrete Latent Space of Deep
  Generative Models
description: Explore the edge of a generator's training distribution by optimizing its discrete latent space.
  Using smiling faces as an illustrative test case, our approach combines tree-based optimization with weighted
  retraining to produce samples with stronger target attributes.
why: Can a generator deliberately produce examples beyond the typical range of its training images? This paper
  uses increasingly happy-looking faces as a controlled demonstration of that question. The value is a principled
  way to study and optimize a generator's outputs, rather than a claim that smile generation itself solves
  an important application problem.
figures:
- label: Figure 1
  image: /images/publications/details/027-figure-1.webp
  alt: Generated faces with increasingly strong smiles compared with the training examples.
  caption: In contrast to previous latent space optimization (LSO) approaches (middle), our proposed method
    is able to synthesize smiling faces with high quality and less artifacts (bottom). Furthermore, the generated
    images have a significantly higher degree of smiling compared to the best points in the restricted training
    dataset (top, restricted to smiling degree ≤2) that was used to train the models. LSO is performed to maximize
    smiling degree, and FID to the target distribution (unseen smiling degrees 3 −5) improves from 50.51 to
    41.69.
  source: https://arxiv.org/pdf/2306.06684#page=1
  width: 1012
  height: 240
- label: Figure 2
  image: /images/publications/details/027-figure-2.webp
  alt: Proposed Framework.
  caption: 'Proposed Framework. a) The encoder and decoder of a VQ-VAE are initially pre-trained and periodically
    fine-tuned on weighted data X. Images are encoded in a discrete latent space. b) Optimization is performed
    in the discrete latent space: a tree-based ensemble model is learned from the latent training data representations
    ZX , encoded as a constrained mixed integer optimization problem and globally solved to determine the next
    (optimal) query point ̃z according to the black-box evaluation function. This procedure is repeated r times
    before the VQ-VAE is fine-tuned on the queried data points. For this, the corresponding decoded images
    ̃x = d( ̃z) are added to the training data and the weight for each training image is updated.'
  source: https://arxiv.org/pdf/2306.06684#page=3
  width: 1193
  height: 444
bibtex: |
  @inproceedings{jung2023happypeopleimage27,
    title = {{Happy People -- Image Synthesis as Black-Box Optimization Problem in the Discrete Latent Space of Deep Generative Models}},
    author = {Steffen Jung and Jan Christian Schwedhelm and Claudia Schillings and Margret Keuper},
    booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition Workshops (CVPRW 2023)},
    year = {2023},
    url = {https://arxiv.org/pdf/2306.06684}
  }
bibtex_file: /assets/bibtex/2023-happy-people-image-synthesis-as-black-box-optimization-problem-in-the-discrete-latent-space-of-deep-generative-mode.bib
abstract: |-
  In recent years, optimization in the learned latent space of deep generative models has been successfully applied to black-box optimization problems such as drug design, image generation or neural architecture search. Existing models thereby leverage the ability of neural models to learn the data distribution from a limited amount of samples such that new samples from the distribution can be drawn. In this work, we propose a novel image generative approach that optimizes the generated sample with respect to a continuously quantifiable property. While we anticipate absolutely no practically meaningful application for the proposed framework, it is theoretically principled and allows to quickly propose samples at the mere boundary of the training data distribution. Specifically, we propose to use tree-based ensemble models as mathematical programs over the discrete latent space of vector quantized VAEs, which can be globally solved. Subsequent weighted retraining on these queries allows to induce a distribution shift. In lack of a practically relevant problem, we consider a visually appealing application: the generation of happily smiling faces (where the training distribution only contains less happy people) - and show the principled behavior of our approach in terms of improved FID and higher smile degree over baseline approaches.
abstract_source: https://arxiv.org/pdf/2306.06684
content_status: complete
---
