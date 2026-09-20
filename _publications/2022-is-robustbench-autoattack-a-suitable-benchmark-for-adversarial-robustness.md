---
layout: publication
title: Is RobustBench/AutoAttack a suitable Benchmark for Adversarial Robustness?
description: A high robustness score is only useful when the benchmark reflects the intended threat. We examine
  the detectability and resolution dependence of AutoAttack perturbations, questioning how far common benchmark
  rankings transfer to practical settings.
why: A model's score on a popular safety test is only as informative as the test itself. This study shows that
  the visibility of attack patterns and the image resolution can change what a robustness benchmark measures.
  It encourages evaluations that match the conditions and threats a system is actually expected to face.
figures:
- label: Figure 1
  image: /images/publications/details/010-figure-1.webp
  alt: Detection rates for different adversarial attacks across image datasets.
  caption: 'Attack Success Rates under Defence (ASRD) of different adversarial attack methods on several datasets
    for a simple defense:Whitebox Fourier domain detector with random forest (Harder et al. 2021): RobustBench’s
    AutoAttack are so easy to detect that successful attacks are very unlikely compared with other methods.'
  source: https://arxiv.org/pdf/2112.01601#page=1
  width: 548
  height: 399
- label: Figure 2
  image: /images/publications/details/010-figure-2.webp
  alt: Blackbox ASRD comparison using a Random Forest classifier on different 32 × 32 datasets.
  caption: Blackbox ASRD comparison using a Random Forest classifier on different 32 × 32 datasets.
  source: https://arxiv.org/pdf/2112.01601#page=3
  width: 548
  height: 397
bibtex: |
  @inproceedings{lorenz2022isrobustbenchautoattack10,
    title = {{Is RobustBench/AutoAttack a suitable Benchmark for Adversarial Robustness?}},
    author = {Peter Lorenz and Dominik Strassel and Margret Keuper and Janis Keuper},
    booktitle = {The AAAI-22 Workshop on Adversarial Machine Learning and Beyond},
    year = {2022},
    url = {https://openreview.net/pdf?id=aLB3FaqoMBs}
  }
bibtex_file: /assets/bibtex/2022-is-robustbench-autoattack-a-suitable-benchmark-for-adversarial-robustness.bib
abstract: |-
  Recently, RobustBench (Croce et al. 2020) has become a widely recognized benchmark for the adversarial robustness of image classification networks. In its most commonly reported sub-task, RobustBench evaluates and ranks the adversarial robustness of trained neural networks on CIFAR-10 under AutoAttack (Croce and Hein 2020b) with l∞perturbations limited to ε = 8/255. With leading scores of the currently best-performing models of around 60% of the baseline, it is fair to characterize this benchmark to be challenging. Despite its general acceptance in recent literature, we aim to foster discussion about the suitability of RobustBench as a key indicator for robustness which could be generalized to practical applications. Our line of argumentation against this is twofold and supported by excessive experiments presented in this paper: We argue that I) the alternation of data by AutoAttack with l∞, ε = 8/255 is unrealistically strong, resulting in close to perfect detection rates of adversarial samples even by simple detection algorithms while other attack methods are much harder to detect and achieve similar success rates, II) results on low-resolution data sets like CIFAR-10 do not generalize well to higher resolution images as gradient-based attacks appear to become even more detectable with increasing resolutions. Source code: SpectralDefense Framework
abstract_source: https://arxiv.org/pdf/2112.01601
content_status: complete
---
