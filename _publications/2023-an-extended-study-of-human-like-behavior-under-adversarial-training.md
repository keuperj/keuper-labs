---
layout: publication
title: An Extended Study of Human-like Behavior under Adversarial Training
description: Adversarial training can shift image recognition toward the shapes that humans rely on. We examine
  this effect across architectures and attack settings, using frequency analysis to investigate why more human-like
  visual preferences emerge.
why: People often recognize an object by its outline, while an AI model may rely on surface texture. This study
  examines how robustness training shifts that balance and investigates the role of coarse and fine image detail.
  It helps explain when a model's visual preferences become more human-like, without assuming that human-like
  behavior guarantees reliability.
figures:
- label: Figure 1
  image: /images/publications/details/026-figure-1.webp
  alt: Images illustrating appearance and shape changes in the robustness evaluation.
  caption: OOD examples from [2–4, 22] for the ImageNet class “elephant”.
  source: https://openaccess.thecvf.com/content/CVPR2023W/AML/papers/Gavrikov_An_Extended_Study_of_Human-Like_Behavior_Under_Adversarial_Training_CVPRW_2023_paper.pdf#page=2
  width: 543
  height: 461
- label: Figure 2
  image: /images/publications/details/026-figure-2.webp
  alt: Visualization of how we obtain the spectrum plots.
  caption: Visualization of how we obtain the spectrum plots. Each frequency measurement in the spectrum plot
    corresponds to the integral over the FFT power spectrum (frequency increases from the center to outer edges)
    up to that particular frequency.
  source: https://openaccess.thecvf.com/content/CVPR2023W/AML/papers/Gavrikov_An_Extended_Study_of_Human-Like_Behavior_Under_Adversarial_Training_CVPRW_2023_paper.pdf#page=3
  width: 542
  height: 255
bibtex: |
  @inproceedings{gavrikov2023anextendedstudy26,
    title = {{An Extended Study of Human-like Behavior under Adversarial Training}},
    author = {Paul Gavrikov and Janis Keuper and Margret Keuper},
    booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition Workshops (CVPRW 2023)},
    year = {2023},
    url = {https://openaccess.thecvf.com/content/CVPR2023W/AML/papers/Gavrikov_An_Extended_Study_of_Human-Like_Behavior_Under_Adversarial_Training_CVPRW_2023_paper.pdf}
  }
bibtex_file: /assets/bibtex/2023-an-extended-study-of-human-like-behavior-under-adversarial-training.bib
abstract: |-
  Neural networks have a number of shortcomings. Amongst the severest ones is the sensitivity to distribution shifts which allows models to be easily fooled into wrong predictions by small perturbations to inputs that are often imperceivable to humans and do not have to carry semantic meaning. Adversarial training poses a partial solution to address this issue by training models on worst-case perturbations. Yet, recent work has also pointed out that the reasoning in neural networks is different from humans. Humans identify objects by shape, while neural nets mainly employ texture cues. Exemplarily, a model trained on photographs will likely fail to generalize to datasets containing sketches. Interestingly, it was also shown that adversarial training seems to favorably increase the shift toward shape bias. In this work, we revisit this observation and provide an extensive analysis of this effect on various architectures, the common l2- and l∞-training, and Transformer-based models. Further, we provide a possible explanation for this phenomenon from a frequency perspective.
abstract_source: https://openaccess.thecvf.com/content/CVPR2023W/AML/papers/Gavrikov_An_Extended_Study_of_Human-Like_Behavior_Under_Adversarial_Training_CVPRW_2023_paper.pdf
content_status: complete
---
