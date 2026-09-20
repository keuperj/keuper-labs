---
layout: publication
title: Neural Architecture Design and Robustness -- A Dataset
description: What makes one neural architecture more robust than another? This workshop study introduces robustness
  evaluations across NAS-Bench-201 and demonstrates their use for architecture search, robustness prediction,
  and analysis of design choices.
why: Choosing a network architecture also means choosing how it will behave when its inputs change. This benchmark
  records robustness across a large collection of designs and demonstrates ways to use those measurements.
  It makes the relationship between architecture and reliability easier to investigate and compare.
figures:
- label: Figure 1
  image: /images/publications/details/029-figure-1.webp
  alt: NAS-Bench-201 macro architecture and candidate cell operations.
  caption: (top) Macro architecture. Gray highlighted cells differ between architectures, while the other components
    stay fixed. (bottom) Cell structure and the set of possible, predefined operations. (Figure adapted from
    [5])
  source: https://robustart.github.io/short_paper/33.pdf#page=1
  width: 543
  height: 241
- label: Figure 2
  image: /images/publications/details/029-figure-2.webp
  alt: (top) Accuracy (FGSM [6] and PGD [11]) boxplots over all 6 466 unique architectures in NAS-Bench-201
    for different perturbation magnitudes evaluated on CIFAR-10.
  caption: (top) Accuracy (FGSM [6] and PGD [11]) boxplots over all 6 466 unique architectures in NAS-Bench-201
    for different perturbation magnitudes evaluated on CIFAR-10. (bottom) Accuracy boxplots for different corruption
    types at different severity levels evaluated on CIFAR-10-C. Red line corresponds to guessing.
  source: https://robustart.github.io/short_paper/33.pdf#page=2
  width: 542
  height: 534
bibtex: |
  @inproceedings{jung12023neuralarchitecturedesign29,
    title = {{Neural Architecture Design and Robustness -- A Dataset}},
    author = {Steffen Jung1 and Jovita Lukasik and Margret Keuper},
    booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition Workshops (CVPRW 2023)},
    year = {2023},
    url = {https://robustart.github.io/short_paper/33.pdf}
  }
bibtex_file: /assets/bibtex/2023-neural-architecture-design-and-robustness-a-dataset-29.bib
abstract: |-
  Finding architectures that are (more) robust against perturbations requires expensive evaluations. We introduce a database on neural architecture design and robustness evaluations to facilitate research in this direction. For this, we evaluate a whole neural architecture search space (NAS-Bench-201) on a range of common adversarial attacks and corruption types. We further present three exemplary use cases of this dataset, in which we (i) benchmark robustness measurements based on Jacobian and Hessian matrices for their robustness predictability, (ii) perform neural architecture search on robust accuracies, and (iii) provide an initial analysis of how architectural design choices affect robustness. We find that carefully crafting the topology of a network can have substantial impact on its robustness, where networks with the same parameter count range in mean adversarial robust accuracy from 20% −41%. Code and data is available at http://robustness.vision/.
abstract_source: https://robustart.github.io/short_paper/33.pdf
content_status: complete
---
