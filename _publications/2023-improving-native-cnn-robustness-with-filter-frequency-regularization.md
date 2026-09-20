---
layout: publication
title: Improving Native CNN Robustness with Filter Frequency Regularization
description: Encourage robustness directly through the filters a CNN learns. Frequency regularization promotes
  lower-frequency representations and improves resilience to attacks and distribution shifts without requiring
  adversarial examples during training.
why: Building a more resilient vision model does not always require generating costly adversarial examples
  during training. This method instead encourages its learned filters to emphasize more stable, coarse-scale
  information. It offers another route to robustness by shaping what the network learns to look for.
figures:
- label: Figure 1
  image: /images/publications/details/035-figure-1.webp
  alt: Frequency distributions in convolution filters and the first convolutional layer.
  caption: Our proposed regularization decreases the reliance on high-frequency information of a ResNet-20
    trained on CIFAR-10 (b-d) as visible in mean DCT-II coefficients magnitudes (= frequency distribution;
    computation shown in (a)).
  source: https://pure.mpg.de/rest/items/item_3583280/component/file_3583281/content#page=2
  width: 1193
  height: 350
- label: Figure 2
  image: /images/publications/details/035-figure-2.webp
  alt: The full DCT-II basis for different resolutions.
  caption: The full DCT-II basis for different resolutions.
  source: https://pure.mpg.de/rest/items/item_3583280/component/file_3583281/content#page=5
  width: 565
  height: 254
bibtex: |
  @article{lukasik2023improvingnativecnn35,
    title = {{Improving Native CNN Robustness with Filter Frequency Regularization}},
    author = {Jovita Lukasik and Paul Gavrikov and Janis Keuper and Margret Keuper},
    journal = {Transactions on Machine Learning Research},
    year = {2023},
    url = {https://openreview.net/forum?id=2wecNCpZ7Y}
  }
bibtex_file: /assets/bibtex/2023-improving-native-cnn-robustness-with-filter-frequency-regularization.bib
abstract: |-
  Neural networks tend to overfit the training distribution and perform poorly on out-ofdistribution data. A conceptually simple solution lies in adversarial training, which introduces worst-case perturbations into the training data and thus improves model generalization to some extent. However, it is only one ingredient towards generally more robust models and requires knowledge about the potential attacks or inference time data corruptions during model training. This paper focuses on the native robustness of models that can learn robust behavior directly from conventional training data without out-of-distribution examples. To this end, we study the frequencies in learned convolution filters. Clean-trained models often prioritize high-frequency information, whereas adversarial training enforces models to shift the focus to low-frequency details during training. By mimicking this behavior through frequency regularization in learned convolution weights, we achieve improved native robustness to adversarial attacks, common corruptions, and other out-of-distribution tests. Additionally, this method leads to more favorable shifts in decision-making towards low-frequency information, such as shapes, which inherently aligns more closely with human vision.
abstract_source: https://pure.mpg.de/rest/items/item_3583280/component/file_3583281/content
content_status: complete
---
