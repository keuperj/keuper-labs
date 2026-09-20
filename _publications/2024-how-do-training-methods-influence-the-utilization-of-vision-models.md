---
layout: publication
title: How Do Training Methods Influence the Utilization of Vision Models?
description: Which layers a network actually needs depends on how it was trained. By resetting layers across
  differently trained ImageNet models, we reveal substantial changes in where decision-critical information
  resides.
why: A network's size does not tell us which of its layers are essential to its decisions. This study tests
  that directly by resetting layers in models trained in different ways. It reveals how training changes the
  use of model capacity and helps explain why similar architectures can behave differently.
figures:
- label: Figure 1
  image: /images/publications/details/053-figure-1.webp
  alt: Layer criticality across differently trained vision models.
  caption: Training methods determine what layers become critical. We measure the criticality of fifty different
    ResNet-50-based models that all utilize the same exact network architecture and training data (ImageNet-1k)
    but differ in their training methods. Darker spots denote layers that are critical, i.e., in significantly
    different predictions and decreased performance after reset. Brighter spots are auxiliary, i.e., resetting
    these layers does not significantly affect the model. We denote the average (mean±std) layer criticality
    for both, a model across layers on the right, for a layer across model on the bottom.
  source: https://arxiv.org/pdf/2410.14470#page=2
  width: 705
  height: 1200
- label: Figure 2
  image: /images/publications/details/053-figure-2.webp
  alt: Adversarial training increases the average criticality proportional to the training attack budget ε.
  caption: Adversarial training increases the average criticality proportional to the training attack budget
    ε. We ablate l∞from l2-norm training but do not observe any significant differences in their trends. The
    marker size in the plot indicates the validation accuracy on ImageNet-1k (larger is better).
  source: https://arxiv.org/pdf/2410.14470#page=5
  width: 895
  height: 432
bibtex: |
  @inproceedings{gavrikov2024howdotraining53,
    title = {{How Do Training Methods Influence the Utilization of Vision Models?}},
    author = {Paul Gavrikov and Shashank Agnihotri and Margret Keuper and Janis Keuper},
    booktitle = {NeurIPS 24 Workshop on InterpretableAI},
    year = {2024},
    url = {https://arxiv.org/pdf/2410.14470?}
  }
bibtex_file: /assets/bibtex/2024-how-do-training-methods-influence-the-utilization-of-vision-models.bib
abstract: |-
  Not all learnable parameters (e.g., weights) contribute equally to a neural network’s decision function. In fact, entire layers’ parameters can sometimes be reset to random values with little to no impact on the model’s decisions. We revisit earlier studies that examined how architecture and task complexity influence this phenomenon and ask: is this phenomenon also affected by how we train the model? We conducted experimental evaluations on a diverse set of ImageNet-1k classification models to explore this, keeping the architecture and training data constant but varying the training pipeline. Our findings reveal that the training method strongly influences which layers become critical to the decision function for a given task. For example, improved training regimes and self-supervised training increase the importance of early layers while significantly under-utilizing deeper layers. In contrast, methods such as adversarial training display an opposite trend. Our preliminary results extend previous findings, offering a more nuanced understanding of the inner mechanics of neural networks. Code: https://github.com/paulgavrikov/layer_criticality
abstract_source: https://arxiv.org/pdf/2410.14470
content_status: complete
---
