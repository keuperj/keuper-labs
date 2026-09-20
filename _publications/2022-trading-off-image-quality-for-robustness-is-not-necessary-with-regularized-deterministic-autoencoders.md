---
layout: publication
title: Trading off Image Quality for Robustness is not Necessary with Regularized Deterministic Autoencoders
description: Better robustness does not have to come at the expense of generated-image quality. We regularize
  deterministic autoencoders using perturbed examples and latent-distribution comparisons to improve both representation
  stability and synthesis fidelity.
why: Making an image model harder to disrupt is often assumed to require sacrificing image quality. This work
  presents an approach that improves the stability of its internal representation while preserving strong image
  generation. It shows that the two goals can support each other when the training objective is chosen carefully.
figures:
- label: Figure 1
  image: /images/publications/details/023-figure-1.webp
  alt: Latent-space distributions under adversarial perturbations and regularization.
  caption: A schematic of latent representations and adversarial examples in a two-component Gaussian mixture.
    Coupling the original and perturbed representations through the proposed regularization keeps adversarial
    examples closer to their original samples.
  source: https://pure.mpg.de/rest/items/item_3473164/component/file_3473165/content#page=5
  width: 895
  height: 262
- label: Figure 2
  image: /images/publications/details/023-figure-2.webp
  alt: Observed attack losses for (a) latent space attack (eqn (12)) and (b) maximum damage attack (eqn (13))
    with varying λ values.
  caption: Observed attack losses for (a) latent space attack (eqn (12)) and (b) maximum damage attack (eqn
    (13)) with varying λ values. We report the observed mean and standard deviation by attacking 100 randomly
    chosen test images in 10 different trials. Higher loss indicates more robustness.
  source: https://pure.mpg.de/rest/items/item_3473164/component/file_3473165/content#page=7
  width: 894
  height: 456
bibtex: |
  @inproceedings{saseendran2022tradingoffimage23,
    title = {{Trading off Image Quality for Robustness is not Necessary with Regularized Deterministic Autoencoders}},
    author = {Amrutha Saseendran and Kathrin Skubch and Margret Keuper},
    booktitle = {Advances in Neural Information Processing Systems},
    year = {2022},
    url = {https://pure.mpg.de/rest/items/item_3473164/component/file_3473165/content}
  }
bibtex_file: /assets/bibtex/2022-trading-off-image-quality-for-robustness-is-not-necessary-with-regularized-deterministic-autoencoders.bib
abstract: |-
  The susceptibility of Variational Autoencoders (VAEs) to adversarial attacks indicates the necessity to evaluate the robustness of the learned representations along with the generation performance. The vulnerability of VAEs has been attributed to the limitations associated with their variational formulation. Deterministic autoencoders could overcome the practical limitations associated with VAEs and offer a promising alternative for image generation applications. In this work, we propose an adversarially robust deterministic autoencoder with superior performance in terms of both generation and robustness of the learned representations. We introduce a regularization scheme to incorporate adversarially perturbed data points to the training pipeline without increasing the computational complexity or compromising the generation fidelity when compared to the robust VAEs by leveraging a loss based on the two-point Kolmogorov–Smirnov test between representations. We conduct extensive experimental studies on popular image benchmark datasets to quantify the robustness of the proposed approach based on the adversarial attacks targeted at VAEs. Our empirical findings show that the proposed method achieves significant performance in both robustness and fidelity when compared to the robust VAE models. An implementation is available at https://github.com/boschresearch/Robust_GMM_DAE.
abstract_source: https://pure.mpg.de/rest/items/item_3473164/component/file_3473165/content
content_status: complete
---
