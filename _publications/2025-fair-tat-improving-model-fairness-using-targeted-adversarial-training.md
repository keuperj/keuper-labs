---
layout: publication
title: FAIR-TAT - Improving Model Fairness Using Targeted Adversarial Training
description: Average robustness can hide large differences between classes. FAIR-TAT uses targeted adversarial
  training to improve the balance of class-wise performance and explore fairer trade-offs on clean and perturbed
  inputs.
why: A good average robustness score can hide poor performance on particular object categories. FAIR-TAT directs
  training toward reducing those differences. It brings the distribution of protection across classes into
  focus, rather than treating the overall average as the whole story.
figures:
- label: Figure 1
  image: /images/publications/details/056-figure-1.webp
  alt: Class-wise confusion scores for several image-classification architectures.
  caption: Class False Positive Scores (CF P S) on the CIFAR-10 dataset using adversarially trained models.
  source: https://arxiv.org/pdf/2410.23142#page=4
  width: 543
  height: 415
- label: Figure 2
  image: /images/publications/details/056-figure-2.webp
  alt: We visualize the main idea of FAIR-TAT for a hypothetical three classes scenario in a two-dimensional
    latent space.
  caption: We visualize the main idea of FAIR-TAT for a hypothetical three classes scenario in a two-dimensional
    latent space. Here, both classes red (circles) and blue (squares) are hard to distinguish from each other
    (and hence data points in the latent space are close to each other and the decision boundary), while green
    (triangles) is a distinctive class where data points are far from the decision boundary. When perturbed
    via an adversarial attack, data points move (and cross) the decision boundary along indicated paths (arrows).
    (left) During untargeted adversarial training, data points cross the decision boundary that is closest
    to them, which means no data point is perturbed towards the green class. Hence, the resulting new decision
    boundary (dashed red) is pushed away from the green class, which further improves its robustness and weakens
    the robustness of classes red and blue. (right) During targeted adversarial training, targets are sampled
    based on CF P S and therefore some red and blue data points are also targeted towards class green. This
    leads to an overall more fair decision boundary (dashed blue).
  source: https://arxiv.org/pdf/2410.23142#page=5
  width: 546
  height: 257
bibtex: |
  @inproceedings{medi2025fairtatimproving56,
    title = {{FAIR-TAT - Improving Model Fairness Using Targeted Adversarial Training}},
    author = {Tejaswini Medi and Steffen Jung and Margret Keuper},
    booktitle = {IEEE/CVF Winter Conference on Applications of Computer Vision},
    year = {2025},
    url = {https://arxiv.org/pdf/2410.23142}
  }
bibtex_file: /assets/bibtex/2025-fair-tat-improving-model-fairness-using-targeted-adversarial-training.bib
abstract: |-
  Deep neural networks are susceptible to adversarial attacks and common corruptions, which undermine their robustness. In order to enhance model resilience against such challenges, Adversarial Training (AT) has emerged as a prominent solution. Nevertheless, adversarial robustness is often attained at the expense of model fairness during AT, i.e., disparity in class-wise robustness of the model. While distinctive classes become more robust towards such adversaries, hard to detect classes suffer. Recently, research has focused on improving model fairness specifically for perturbed images, overlooking the accuracy of the most likely non-perturbed data. Additionally, despite their robustness against the adversaries encountered during model training, state-of-the-art adversarial trained models have difficulty maintaining robustness and fairness when confronted with diverse adversarial threats or common corruptions. In this work, we address the above concerns by introducing a novel approach called Fair Targeted Adversarial Training (FAIR-TAT). We show that using targeted adversarial attacks for adversarial training (instead of untargeted attacks) can allow for more favorable trade-offs with respect to adversarial fairness. Empirical results validate the efficacy of our approach.
abstract_source: https://arxiv.org/pdf/2410.23142
content_status: complete
---
