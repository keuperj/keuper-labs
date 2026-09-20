---
layout: publication
title: An evaluation of zero-cost proxies-from neural architecture performance prediction to model robustness
description: Can an untrained network reveal how robust it will become? This evaluation finds that robustness
  prediction is harder than clean-accuracy prediction and benefits from combining several zero-cost architecture
  proxies.
why: Cheap estimates of a network's future performance could save a great deal of training time. This study
  asks whether those estimates also predict resistance to attacks and image corruption. It finds that robustness
  is harder to infer, providing useful limits and guidance for efficient model search.
figures:
- label: Figure 1
  image: /images/publications/details/054-figure-1.webp
  alt: Correlations between zero-cost proxies and architecture accuracies.
  caption: Kendall tau rank correlation in absolute values between all zero-cost proxies computed on all architectures
    given in the robustness dataset (Jung et al., 2023) to the test accuracy and adversarial attacks for CIFAR-10
  source: https://link.springer.com/content/pdf/10.1007/s11263-024-02265-7.pdf#page=5
  width: 1156
  height: 666
- label: Figure 2
  image: /images/publications/details/054-figure-2.webp
  alt: Kendall tau rank correlation in absolute values between all zerocost proxies computed on all architectures
    given in the NAS-RobBench- 201 dataset (Wu et al., 2024) to the validation accuracy and adversarial attacks
    for CIFAR-10, calculated with clean input image data (left) and perturbed input data (right)
  caption: Kendall tau rank correlation in absolute values between all zerocost proxies computed on all architectures
    given in the NAS-RobBench- 201 dataset (Wu et al., 2024) to the validation accuracy and adversarial attacks
    for CIFAR-10, calculated with clean input image data (left) and perturbed input data (right)
  source: https://link.springer.com/content/pdf/10.1007/s11263-024-02265-7.pdf#page=6
  width: 547
  height: 448
bibtex: |
  @article{lukasik2024anevaluationof54,
    title = {{An evaluation of zero-cost proxies-from neural architecture performance prediction to model robustness}},
    author = {Jovita Lukasik and Michael Moeller and Margret Keuper},
    journal = {International Journal of Computer Vision},
    year = {2024},
    url = {https://link.springer.com/article/10.1007/s11263-024-02265-7},
    doi = {10.1007/s11263-024-02265-7}
  }
bibtex_file: /assets/bibtex/2024-an-evaluation-of-zero-cost-proxies-from-neural-architecture-performance-prediction-to-model-robustness.bib
abstract: |-
  Zero-cost proxies are nowadays frequently studied and used to search for neural architectures. They show an impressive ability to predict the performance of architectures by making use of their untrained weights. These techniques allow for immense search speed-ups. So far the joint search for well performing and robust architectures has received much less attention in the field of NAS. Therefore, the main focus of zero-cost proxies is the clean accuracy of architectures, whereas the model robustness should play an evenly important part. In this paper, we analyze the ability of common zero-cost proxies to serve as performance predictors for robustness in the popular NAS-Bench-201 search space. We are interested in the single prediction task for robustness and the joint multi-objective of clean and robust accuracy. We further analyze the feature importance of the proxies and show that predicting the robustness makes the prediction task from existing zero-cost proxies more challenging. As a result, the joint consideration of several proxies becomes necessary to predict a model’s robustness while the clean accuracy can be regressed from a single such feature. Our code is available at https://github.com/jovitalukasik/zcp_eval.
abstract_source: https://link.springer.com/content/pdf/10.1007/s11263-024-02265-7.pdf
content_status: complete
---
