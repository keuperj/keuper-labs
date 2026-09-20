---
layout: publication
title: Robust Models are less Over-Confident
description: Robustness training can also improve how cautiously a model makes predictions. This study examines
  the lower overconfidence of adversarially trained networks and the influence of activation functions and
  pooling on confidence.
why: Reliable AI should avoid sounding certain when it is wrong. This study examines how training against deliberately
  difficult inputs also changes confidence on normal images. It shows that both the training method and the
  model's internal building blocks influence this useful, sometimes overlooked behavior.
figures:
- label: Figure 1
  image: /images/publications/details/022-figure-1.webp
  alt: Prediction confidence distributions for standard and robust classifiers.
  caption: Mean model confidences on their correct (x-axis) and incorrect (y-axis) predictions over the full
    CIFAR10 dataset (top) and CIFAR100 dataset (bottom), clean (left) and perturbed with the attacks PGD (middle)
    and Squares (right). Each point represents a model. Circular points (purple color-map) represent non-robust
    models and diamond-shaped points (green color-map) represent robust models. The color of each point represents
    the models accuracy, darker signifies higher accuracy (better) on the given data samples. The star in the
    bottom right corner indicates the optimal model calibration and the gray area marks the area were the confidence
    distribution of the network is worse than random, i.e. more confident in incorrect predictions than in
    correct ones.
  source: https://arxiv.org/pdf/2210.05938#page=5
  width: 1193
  height: 511
- label: Figure 2
  image: /images/publications/details/022-figure-2.webp
  alt: Overconfidence (lower is better) bar plots of robust models and their non-robust counterparts trained
    on CIFAR10.
  caption: Overconfidence (lower is better) bar plots of robust models and their non-robust counterparts trained
    on CIFAR10. Non-robust models are highly overconfident, in contrast, their robust counterparts are less
    over-confident.
  source: https://arxiv.org/pdf/2210.05938#page=5
  width: 898
  height: 265
bibtex: |
  @inproceedings{grabinski2022robustmodelsare22,
    title = {{Robust Models are less Over-Confident}},
    author = {Julia Grabinski and Paul Gavrikov and Janis Keuper and Margret Keuper},
    booktitle = {Advances in Neural Information Processing Systems},
    year = {2022},
    url = {https://arxiv.org/pdf/2210.05938}
  }
bibtex_file: /assets/bibtex/2022-robust-models-are-less-over-confident-22.bib
abstract: |-
  Despite the success of convolutional neural networks (CNNs) in many academic benchmarks for computer vision tasks, their application in the real-world is still facing fundamental challenges. One of these open problems is the inherent lack of robustness, unveiled by the striking effectiveness of adversarial attacks. Current attack methods are able to manipulate the network’s prediction by adding specific but small amounts of noise to the input. In turn, adversarial training (AT) aims to achieve robustness against such attacks and ideally a better model generalization ability by including adversarial samples in the trainingset. However, an in-depth analysis of the resulting robust models beyond adversarial robustness is still pending. In this paper, we empirically analyze a variety of adversarially trained models that achieve high robust accuracies when facing state-of-the-art attacks and we show that AT has an interesting side-effect: it leads to models that are significantly less overconfident with their decisions, even on clean data than non-robust models. Further, our analysis of robust models shows that not only AT but also the model’s building blocks (like activation functions and pooling) have a strong influence on the models’ prediction confidences. Data & Project website: https://github.com/GeJulia/robustness_confidences_evaluation
abstract_source: https://arxiv.org/pdf/2210.05938
content_status: complete
---
