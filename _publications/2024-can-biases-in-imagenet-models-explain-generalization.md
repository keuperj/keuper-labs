---
layout: publication
title: Can Biases in ImageNet Models Explain Generalization?
description: Do familiar visual biases explain why some models generalize better? A controlled study of ImageNet
  models finds that shape and spectral biases alone cannot reliably predict performance across diverse distribution
  shifts.
why: It is tempting to use one appealing property, such as a preference for shape, as a shortcut for judging
  model reliability. This study finds that those relationships depend on the models and tests being considered.
  It encourages direct, varied evaluation instead of assuming a single visual bias explains generalization.
figures:
- label: Figure 1
  image: /images/publications/details/044-figure-1.webp
  alt: Visual biases compared against different measures of generalization.
  caption: 'We study the influence of three selected biases that separate models from humans on the generalization
    of ImageNet models. Our study suggests that no single bias correlates with generalization in a holistic
    sense. We measure the texture/shape bias [17], critical band [52], and low/high-frequency spectral biases
    [61] on 48 models and correlate these biases against generalization that we measure on several benchmarks
    belonging to four categories: in distribution, robustness, conceptual changes, and adversarial robustness.'
  source: https://arxiv.org/pdf/2404.01509#page=1
  width: 543
  height: 409
- label: Figure 2
  image: /images/publications/details/044-figure-2.webp
  alt: Biases often only correlate with specific aspects of generalization or model groups.
  caption: Biases often only correlate with specific aspects of generalization or model groups. We measure
    Spearman r correlations on all models (Total) and separately on adversarially-trained (AT), and all other
    models, as there is often a different trend. Non-significant correlations with p ≥0.05 are set to 0. Please
    note that r does not capture non-monotonic relations.
  source: https://arxiv.org/pdf/2404.01509#page=5
  width: 1193
  height: 230
bibtex: |
  @inproceedings{gavrikov2024canbiasesin44,
    title = {{Can Biases in ImageNet Models Explain Generalization?}},
    author = {Paul Gavrikov and Janis Keuper},
    booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR 2024)},
    year = {2024},
    url = {https://arxiv.org/pdf/2404.01509}
  }
bibtex_file: /assets/bibtex/2024-can-biases-in-imagenet-models-explain-generalization.bib
abstract: |-
  The robust generalization of models to rare, indistribution (ID) samples drawn from the long tail of the training distribution and to out-of-training-distribution (OOD) samples is one of the major challenges of current deep learning methods. For image classification, this manifests in the existence of adversarial attacks, the performance drops on distorted images, and a lack of generalization to concepts such as sketches. The current understanding of generalization in neural networks is very limited, but some biases that differentiate models from human vision have been identified and might be causing these limitations. Consequently, several attempts with varying success have been made to reduce these biases during training to improve generalization. We take a step back and sanitycheck these attempts. Fixing the architecture to the wellestablished ResNet-50, we perform a large-scale study on 48 ImageNet models obtained via different training methods to understand how and if these biases - including shape bias, spectral biases, and critical bands - interact with generalization. Our extensive study results reveal that contrary to previous findings, these biases are insufficient to accurately predict the generalization of a model holistically. We provide access to all checkpoints and evaluation code at https://github.com/paulgavrikov/biases_vs_generalization/
abstract_source: https://arxiv.org/pdf/2404.01509
content_status: complete
---
