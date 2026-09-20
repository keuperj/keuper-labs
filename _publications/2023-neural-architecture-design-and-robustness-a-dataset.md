---
layout: publication
title: Neural Architecture Design and Robustness - A Dataset
description: Architecture design has a measurable impact on robustness, even at similar parameter counts. This
  dataset evaluates NAS-Bench-201 architectures under attacks and corruptions, enabling repeatable searches
  for networks that are both accurate and resilient.
why: Two neural networks with similar size can react very differently to corrupted or manipulated images. This
  dataset makes those differences measurable across thousands of designs. Researchers can use it to compare
  choices and search for reliable networks without repeating every expensive robustness experiment themselves.
figures:
- label: Figure 1
  image: /images/publications/details/024-figure-1.webp
  alt: Neural architecture search space and its cell operations.
  caption: (top) Macro architecture. Gray highlighted cells differ between architectures, while the other components
    stay fixed. (bottom) Cell structure and the set of possible, predefined operations. (Figure adapted from
    (Dong & Yang, 2020))
  source: https://arxiv.org/pdf/2306.06712#page=3
  width: 895
  height: 231
- label: Figure 2
  image: /images/publications/details/024-figure-2.webp
  alt: Accuracy boxplots over all 6 466 unique architectures in NAS-Bench-201 for different adversarial attacks
    (FGSM (Goodfellow et al., 2015), PGD (Kurakin et al., 2017), APGD (Croce & Hein, 2020), Square (Andriushchenko
    et al., 2020)) and perturbation magnitude values ε, evaluated on CIFAR-10.
  caption: Accuracy boxplots over all 6 466 unique architectures in NAS-Bench-201 for different adversarial
    attacks (FGSM (Goodfellow et al., 2015), PGD (Kurakin et al., 2017), APGD (Croce & Hein, 2020), Square
    (Andriushchenko et al., 2020)) and perturbation magnitude values ε, evaluated on CIFAR-10. Red line corresponds
    to guessing. The large spread indicates towards architectural influence on robust performance.
  source: https://arxiv.org/pdf/2306.06712#page=4
  width: 896
  height: 237
bibtex: |
  @inproceedings{jung2023neuralarchitecturedesign24,
    title = {{Neural Architecture Design and Robustness - A Dataset}},
    author = {Steffen Jung and Jovita Lukasik and Margret Keuper},
    booktitle = {International Conference on Learning Representations},
    year = {2023},
    url = {https://steffen-jung.github.io/robustness/}
  }
bibtex_file: /assets/bibtex/2023-neural-architecture-design-and-robustness-a-dataset.bib
abstract: |-
  Deep learning models have proven to be successful in a wide range of machine learning tasks. Yet, they are often highly sensitive to perturbations on the input data which can lead to incorrect decisions with high confidence, hampering their deployment for practical use-cases. Thus, finding architectures that are (more) robust against perturbations has received much attention in recent years. Just like the search for well-performing architectures in terms of clean accuracy, this usually involves a tedious trial-and-error process with one additional challenge: the evaluation of a network’s robustness is significantly more expensive than its evaluation for clean accuracy. Thus, the aim of this paper is to facilitate better streamlined research on architectural design choices with respect to their impact on robustness as well as, for example, the evaluation of surrogate measures for robustness. We therefore borrow one of the most commonly considered search spaces for neural architecture search for image classification, NAS-Bench-201, which contains a manageable size of 6 466 non-isomorphic network designs. We evaluate all these networks on a range of common adversarial attacks and corruption types and introduce a database on neural architecture design and robustness evaluations. We further present three exemplary use cases of this dataset, in which we (i) benchmark robustness measurements based on Jacobian and Hessian matrices for their robustness predictability, (ii) perform neural architecture search on robust accuracies, and (iii) provide an initial analysis of how architectural design choices affect robustness. We find that carefully crafting the topology of a network can have substantial impact on its robustness, where networks with the same parameter count range in mean adversarial robust accuracy from 20% −41%. Code and data is available at http://robustness.vision/.
abstract_source: https://arxiv.org/pdf/2306.06712
content_status: complete
---
