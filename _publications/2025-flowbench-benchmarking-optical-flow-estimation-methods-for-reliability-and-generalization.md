---
layout: publication
title: FlowBench - Benchmarking Optical Flow Estimation Methods for Reliability and Generalization
description: FlowBench brings systematic robustness testing to optical-flow estimation. Its shared evaluation
  tools compare models under attacks and distribution shifts, helping researchers assess reliability beyond
  clean benchmark accuracy.
why: Optical flow estimates how things move between images, making reliability as important as clean benchmark
  accuracy. FlowBench evaluates models under a shared set of attacks and changed conditions. It helps identify
  whether newer methods are becoming more dependable as well as more accurate.
figures:
- label: Figure 1
  image: /images/publications/details/069-figure-1.webp
  alt: Optical-flow accuracy, reliability, and generalization compared across model release dates.
  caption: Optical flow estimation methods proposed over time and their reliability and generalization ability.
    In all three plots, the y-axis represents error, i.e., lower is better. The error of optical flow estimation
    methods on independent and identically distributed data samples (i.i.d.) has decreased over time, however,
    their reliability and generalization ability are stagnant if not deteriorating.
  source: https://pure.mpg.de/rest/items/item_3673945/component/file_3673946/content#page=2
  width: 1193
  height: 323
- label: Figure 2
  image: /images/publications/details/069-figure-2.webp
  alt: Examples of MPI Sintel images perturbed by adversarial attacks and the optical flow predictions using
    FlowFormer++.
  caption: Examples of MPI Sintel images perturbed by adversarial attacks and the optical flow predictions
    using FlowFormer++. These examples are intended to show the versatility of FlowBench. Here, the first column
    shows the clean unperturbed input, initial flow prediction −→f init and ground truth flow field −→f gt.
    The remaining columns show from left to right the CosPGD attack used as a targeted attack with targets
    −→0 and −→ −f, the PCFA attack, proposed as only a targeted attack, with target −→ −f, and last, the Adversarial
    Weather Attack with snow particles optimized as a non-targeted attack.
  source: https://pure.mpg.de/rest/items/item_3673945/component/file_3673946/content#page=10
  width: 1052
  height: 372
bibtex: |
  @article{agnihotri2025flowbenchbenchmarkingoptical69,
    title = {{FlowBench - Benchmarking Optical Flow Estimation Methods for Reliability and Generalization}},
    author = {Shashank Agnihotri and Julian Yuya Caspary and Luca Schwarz and Xinyan Gao and Jenny Schmalfuss and Andrés Bruhn and Margret Keuper},
    journal = {Transactions on Machine Learning Research},
    year = {2025},
    url = {https://openreview.net/forum?id=Kh4bj6YDNm}
  }
bibtex_file: /assets/bibtex/2025-flowbench-benchmarking-optical-flow-estimation-methods-for-reliability-and-generalization.bib
abstract: |-
  Optical flow estimation is a crucial computer vision task often applied to safety-critical real-world scenarios like autonomous driving and medical imaging. While optical flow estimation accuracy has greatly benefited from the emergence of deep learning, learning-based methods are also known for their lack of generalization and reliability. However, reliability is paramount when optical flow methods are employed in the real world, where safety is essential. Furthermore, a deeper understanding of the robustness and reliability of learningbased optical flow estimation methods is still lacking, hindering the research community from building methods safe for real-world deployment. Thus, we propose FlowBench, a robustness benchmark and evaluation tool for learning-based optical flow methods. FlowBench facilitates streamlined research into the reliability of optical flow methods by benchmarking their robustness to adversarial attacks and out-of-distribution samples. With FlowBench, we benchmark 57 checkpoints across 3 datasets under 9 diverse adversarial attacks and 23 established common corruptions, making it the most comprehensive robustness analysis of optical flow methods to date. Across this wide range of methods, we consistently find that methods with state-of-the-art performance on established standard benchmarks lack reliability and generalization ability. Moreover, we find interesting correlations between the performance, reliability, and generalization ability of optical flow estimation methods, under various lenses such as design choices used, number of parameters, etc. The open-source code and weights for FlowBench are available in this GitHub repository.
abstract_source: https://pure.mpg.de/rest/items/item_3673945/component/file_3673946/content
content_status: complete
---
