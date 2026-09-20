---
layout: publication
title: AIM - Amending Inherent Interpretability via Self-Supervised Masking
description: AIM encourages models to rely on meaningful object features through self-supervised masking. It
  improves inherent interpretability alongside classification performance without requiring extra region annotations.
why: A useful explanation should reflect what a classifier actually uses, rather than being added only after
  the decision. AIM uses masking during training to encourage reliance on meaningful object features. It improves
  the connection between recognition and visible evidence without requiring extra region annotations.
figures:
- label: Figure 1
  image: /images/publications/details/074-figure-1.webp
  alt: Attribution maps showing where different image classifiers focus.
  caption: AIM uses self-supervised masking to focus more on the object of interest, relying only on the image
    label. As shown, and in terms of attribution localization, it outperforms baseline methods, even in challenging
    scenarios like the Water- Birds dataset.
  source: https://arxiv.org/pdf/2508.11502#page=1
  width: 543
  height: 562
- label: Figure 2
  image: /images/publications/details/074-figure-2.webp
  alt: Abstract Diagram of the [backbone]+AIM Architecture.
  caption: 'Abstract Diagram of the [backbone]+AIM Architecture. The architecture consists of a bottom-up backbone
    and a top-down masking pathway. The bottom-up pathway has four encoding stages (L = 0 to L = 3). The top-down
    pathway mirrors this structure, with each stage T corresponding to a bottom-up stage L. Each top-down stage
    has two parallel branches: one estimates a binary mask via a convolutional network with Gumbel-softmax,
    and the other processes features using a structure inspired by [21]. The estimated binary mask is element-wise
    multiplied with the processed features to create a spatially sparse feature map. These sparse maps are
    then iteratively combined with the output of the subsequent top-down stage through element-wise summation.'
  source: https://arxiv.org/pdf/2508.11502#page=4
  width: 1193
  height: 269
bibtex: |
  @inproceedings{alshami2025aimamendinginherent74,
    title = {{AIM - Amending Inherent Interpretability via Self-Supervised Masking}},
    author = {Eyad Alshami and Shashank Agnihotri and Bernt Schiele and Margret Keuper},
    booktitle = {Proceedings of the IEEE/CVF International Conference on Computer Vision (ICCV 2025)},
    year = {2025},
    url = {https://arxiv.org/abs/2508.11502}
  }
bibtex_file: /assets/bibtex/2025-aim-amending-inherent-interpretability-via-self-supervised-masking.bib
abstract: |-
  It has been observed that deep neural networks (DNNs) often use both genuine as well as spurious features. In this work, we propose “Amending Inherent Interpretability via Self-Supervised Masking” (AIM), a simple yet interestingly effective method that promotes the network’s utilization of genuine features over spurious alternatives without requiring additional annotations. In particular, AIM uses features at multiple encoding stages to guide a selfsupervised, sample-specific feature-masking process. As a result, AIM enables the training of well-performing and inherently interpretable models that faithfully summarize the decision process. We validate AIM across a diverse range of challenging datasets that test both out-of-distribution generalization and fine-grained visual understanding. These include general-purpose classification benchmarks such as ImageNet100, HardImageNet, and ImageWoof, as well as fine-grained classification datasets such as Waterbirds, TravelingBirds, and CUB-200. AIM demonstrates significant dual benefits: interpretability improvements, as measured by the Energy Pointing Game (EPG) score, and accuracy gains over strong baselines. These consistent gains across domains and architectures provide compelling evidence that AIM promotes the use of genuine and meaningful features that directly contribute to improved generalization and human-aligned interpretability.
abstract_source: https://arxiv.org/pdf/2508.11502
content_status: complete
---
