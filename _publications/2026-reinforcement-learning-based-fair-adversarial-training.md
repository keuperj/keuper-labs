---
layout: publication
title: Reinforcement Learning Based Fair Adversarial Training
description: Robustness should extend across classes, rather than concentrating on the easiest ones. RL-FAT
  combines reinforcement-learning-inspired feedback with a fairness-focused loss to reduce class-wise disparities
  during adversarial training.
why: Training a model to resist attacks can protect some categories much better than others. RL-FAT uses feedback
  during training to respond to those differences. It aims to improve both overall robustness and the balance
  of protection across classes, making performance more informative than one average score.
figures:
- label: Figure 1
  image: /images/publications/details/100-figure-1.webp
  alt: Class-wise clean and robust accuracies illustrating fairness gaps.
  caption: Per-class clean and AutoAttack robust accuracy at ε = 8/255 on CIFAR-10. The shaded region indicates
    the clean-to-robust performance gap, while dotted horizontal lines denote the corresponding mean average
    clean and robust accuracies.
  source: https://arxiv.org/pdf/2608.29247#page=2
  width: 811
  height: 318
- label: Figure 2
  image: /images/publications/details/100-figure-2.webp
  alt: Overview of the proposed RL-FAT framework.
  caption: Overview of the proposed RL-FAT framework. The model is first initialized using warm-up adversarial
    training to learn stable robust representations from clean and adversarial examples. After warm-up, RL-FAT
    performs reinforcement-inspired fair adversarial training. Given an adversarial input, the model prediction
    distribution is interpreted as a state, a class prediction is sampled as an action, and a reward is assigned
    according to prediction correctness. A class-wise running value estimate is used to compute the advantage,
    which guides the reinforcement loss LRL. In parallel, the fairness-emphasis loss Lfair assigns stronger
    training pressure to classes with above-average adversarial loss. The final postwarm-up objective combines
    both components as LRL +λLfair.
  source: https://arxiv.org/pdf/2608.29247#page=5
  width: 745
  height: 292
bibtex: |
  @inproceedings{medi2026reinforcementlearningbased100,
    title = {{Reinforcement Learning Based Fair Adversarial Training}},
    author = {Tejaswini Medi and Levan Mikeladze and Margret Keuper},
    booktitle = {British Machine Vision Conference},
    year = {2026},
    url = {https://arxiv.org/abs/2608.29247}
  }
bibtex_file: /assets/bibtex/2026-reinforcement-learning-based-fair-adversarial-training.bib
abstract: |-
  Deep neural networks remain highly vulnerable to adversarial perturbations, and adversarial training (AT) has become a widely used approach for improving robustness. However, improvements in average robust accuracy often mask substantial class-wise disparities: while some classes become more robust, others may remain disproportionately vulnerable under attack. This imbalance raises an important adversarial fairness concern, particularly in vision tasks where reliable robustness is expected across all categories. To address this challenge, we propose RL-FAT, a reinforcement-learninginspired fair adversarial training framework that uses policy-gradient based feedback from adversarial predictions. RL-FAT interprets the prediction distribution as a policy and combines correctness-based prediction rewards with class-wise value estimates to compute class-specific advantages for policy-gradient optimization. This enables the model to adaptively focus on class-wise misclassification. Furthermore, we introduce a fairness-emphasis adversarial loss that assigns stronger training pressure to classes with high adversarial loss, thereby mitigating class-wise robustness disparity. By combining reinforcement-driven adaptation with fairness-emphasis regularization, RL-FAT improves adversarial robustness while promoting a more balanced robustness distribution across classes. Extensive experiments demonstrate that our method achieves competitive robust accuracy and substantially reduces class-wise robustness imbalance compared with standard adversarial training baselines.
abstract_source: https://arxiv.org/pdf/2608.29247
content_status: complete
---
