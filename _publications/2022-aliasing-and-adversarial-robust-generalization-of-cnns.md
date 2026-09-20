---
layout: publication
title: Aliasing and adversarial robust generalization of CNNs
description: Aliasing reveals when adversarial training starts to lose its robustness. This extended study
  connects downsampling artifacts to robust overfitting and proposes an aliasing-based early-stopping criterion.
why: A network can become less reliable even while its training continues to improve. This study links that
  loss of robustness to artifacts introduced when internal images are reduced in size. Monitoring those artifacts
  offers a practical signal for stopping training before its benefits start to disappear.
figures:
- label: Figure 1
  image: /images/publications/details/014-figure-1.webp
  alt: Original, correctly downsampled, aliased, and adversarially perturbed cat images.
  caption: Illustration of downsampling, with (top right) and without anti-aliasing filter (bottom right) as
    well as an adversarial example (bottom left). The top left image shows the original. In the top right,
    the image is correctly down-sampled with an anti-aliasing filter. In the bottom right, no filter is applied,
    leading to aliasing. The adversarial example (bottom left) shows visually similar artifacts. In this paper,
    we investigate the role of aliasing for adversarial robustness
  source: https://link.springer.com/content/pdf/10.1007/s10994-022-06222-8.pdf#page=2
  width: 509
  height: 443
- label: Figure 2
  image: /images/publications/details/014-figure-2.webp
  alt: Abstract example of aliasing in the frequency domain.
  caption: Abstract example of aliasing in the frequency domain. Left a 1D signal with the xmax as maximal
    width is shown in the frequency domain. When this signal is down-sampled, the original signal is replicated
    and placed next to each other, depending on the sampling rate. If we sample at a sufficiently large sampling
    rate, the distance between the replica is large and the signals will not overlap (middle). If the sampling
    rate is too small we under-sample the signal and get aliases due to the overlapping replica (right)
  source: https://link.springer.com/content/pdf/10.1007/s10994-022-06222-8.pdf#page=6
  width: 813
  height: 237
bibtex: |
  @article{grabinski2022aliasingandadversarial14,
    title = {{Aliasing and adversarial robust generalization of CNNs}},
    author = {Julia Grabinski and Janis Keuper and Margret Keuper},
    journal = {Machine Learning},
    year = {2022},
    url = {https://link.springer.com/article/10.1007/s10994-022-06222-8},
    doi = {10.1007/s10994-022-06222-8}
  }
bibtex_file: /assets/bibtex/2022-aliasing-and-adversarial-robust-generalization-of-cnns.bib
abstract: |-
  Many commonly well-performing convolutional neural network models have shown to be susceptible to input data perturbations, indicating a low model robustness. To reveal model weaknesses, adversarial attacks are specifically optimized to generate small, barely perceivable image perturbations that flip the model prediction. Robustness against attacks can be gained by using adversarial examples during training, which in most cases reduces the measurable model attackability. Unfortunately, this technique can lead to robust overfitting, which results in non-robust models. In this paper, we analyze adversarially trained, robust models in the context of a specific network operation, the downsampling layer, and provide evidence that robust models have learned to downsample more accurately and suffer significantly less from downsampling artifacts, aka. aliasing, than baseline models. In the case of robust overfitting, we observe a strong increase in aliasing and propose a novel early stopping approach based on the measurement of aliasing.
abstract_source: https://link.springer.com/content/pdf/10.1007/s10994-022-06222-8.pdf
content_status: complete
---
