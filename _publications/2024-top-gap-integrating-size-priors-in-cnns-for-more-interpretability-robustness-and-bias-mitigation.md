---
layout: publication
title: Top-GAP - Integrating Size Priors in CNNs for more Interpretability, Robustness, and Bias Mitigation
description: Top-GAP encourages a classifier to focus on compact, informative image regions. The resulting
  representations reduce background dependence while improving interpretability, localization, and robustness.
why: A classifier can get the right answer for the wrong reason by relying on the background around an object.
  Top-GAP encourages it to concentrate on a smaller, informative region. That makes its decisions easier to
  locate in the image and can reduce dependence on misleading surroundings.
figures:
- label: Figure 1
  image: /images/publications/details/039-figure-1.webp
  alt: Localization maps produced with different spatial size priors.
  caption: Example images from a biological classification dataset (a) and ImageNet (b), where we limit the
    locations in the output feature map that the CNN can use to make predictions. Increasing the allowed pixel
    count leads to more pixels being highlighted in the class activation map (CAM). If the object size is not
    known or variable, the pixel constraint with the highest accuracy can be selected.
  source: https://arxiv.org/pdf/2409.04819#page=2
  width: 784
  height: 379
- label: Figure 2
  image: /images/publications/details/039-figure-2.webp
  alt: Example of our architecture applied to a backbone with 3 feature maps (e.g.
  caption: Example of our architecture applied to a backbone with 3 feature maps (e.g. 7 × 7, 14 × 14, 28 ×
    28). For all convolutions except the final one, a kernel size of 3 and 256 filters is used. The last convolution
    employs a kernel size of 1, with the number of filters set to match the number of output classes. The CAM
    is as large as the biggest feature map (here F3). Our pooling layer ("Top-GAP") averages the CAMs given
    by the last convolutional layer ("Conv") to create a vector containing the probability for each class.
    For the CAM, we disable "Top-GAP" and perform min-max scaling.
  source: https://arxiv.org/pdf/2409.04819#page=6
  width: 784
  height: 257
bibtex: |
  @inproceedings{nieradzik2024topgapintegrating39,
    title = {{Top-GAP - Integrating Size Priors in CNNs for more Interpretability, Robustness, and Bias Mitigation}},
    author = {Lars Nieradzik and Henrike Stephani and Janis Keuper},
    booktitle = {eCVX Workshop at ECCV 24},
    year = {2024},
    url = {https://arxiv.org/pdf/2409.04819}
  }
bibtex_file: /assets/bibtex/2024-top-gap-integrating-size-priors-in-cnns-for-more-interpretability-robustness-and-bias-mitigation.bib
abstract: |-
  This paper introduces Top-GAP, a novel regularization technique that enhances the explainability and robustness of convolutional neural networks. By constraining the spatial size of the learned feature representation, our method forces the network to focus on the most salient image regions, effectively reducing background influence. Using adversarial attacks and the Effective Receptive Field, we show that Top-GAP directs more attention towards object pixels rather than the background. This leads to enhanced interpretability and robustness. We achieve over 50% robust accuracy on CIFAR-10 with PGD ε = 8/255 and 20 iterations while maintaining the original clean accuracy. Furthermore, we see increases of up to 5% accuracy against distribution shifts. Our approach also yields more precise object localization, as evidenced by up to 25% improvement in Intersection over Union (IOU) compared to methods like GradCAM and Recipro-CAM.
abstract_source: https://arxiv.org/pdf/2409.04819
content_status: complete
---
