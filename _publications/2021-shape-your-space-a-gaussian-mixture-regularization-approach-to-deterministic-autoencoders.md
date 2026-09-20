---
layout: publication
title: Shape your Space - A Gaussian Mixture Regularization Approach to Deterministic Autoencoders
description: Shape your Space gives deterministic autoencoders an expressive, multimodal latent distribution
  during training. This makes sampling straightforward while avoiding a separate density-fitting step after
  training.
why: An image generator first needs a useful way to organize what it has learned. This paper gives that internal
  representation room for several distinct groups instead of forcing everything into one simple pattern. The
  result is a more flexible generator that can be trained without a separate step to fit its internal data
  distribution.
figures:
- label: Figure 1
  image: /images/publications/details/005-figure-1.webp
  alt: Training curves comparing latent-distribution matching and reconstruction.
  caption: 'Uni-modal latent regularization in one and two dimensions for varying numbers of samples (x-axis)
    from different distributions: In two dimensions (right), the simplistic KS distance can not differentiate
    the target prior (blue) from other probability distributions. By contrast, our proposed regularization
    scheme successfully matches correlations across different dimensions.'
  source: https://proceedings.neurips.cc/paper/2021/file/3c057cb2b41f22c0e740974d7a428918-Paper.pdf#page=5
  width: 895
  height: 341
- label: Figure 2
  image: /images/publications/details/005-figure-2.webp
  alt: Qualitative analysis on image generation across datasets, MNIST, SVHN and CELEBA.
  caption: Qualitative analysis on image generation across datasets, MNIST, SVHN and CELEBA. Row 1 shows the
    randomly generated samples; row 2 shows the reconstructed samples by the decoder on test dataset after
    training, first row in each sections corresponds to the ground truth and the second one its corresponding
    reconstruction; row 3 shows randomly interpolated samples in the learned latent space of our model.
  source: https://proceedings.neurips.cc/paper/2021/file/3c057cb2b41f22c0e740974d7a428918-Paper.pdf#page=7
  width: 898
  height: 1016
bibtex: |
  @inproceedings{saseendran2021shapeyourspace5,
    title = {{Shape your Space - A Gaussian Mixture Regularization Approach to Deterministic Autoencoders}},
    author = {Amrutha Saseendran and Kathrin Skubch and Stefan Falkner and Margret Keuper},
    booktitle = {Advances in Neural Information Processing Systems},
    year = {2021},
    url = {https://proceedings.neurips.cc/paper/2021/file/3c057cb2b41f22c0e740974d7a428918-Paper.pdf}
  }
bibtex_file: /assets/bibtex/2021-shape-your-space-a-gaussian-mixture-regularization-approach-to-deterministic-autoencoders.bib
abstract: |-
  Variational Autoencoders (VAEs) are powerful probabilistic models to learn representations of complex data distributions. One important limitation of VAEs is the strong prior assumption that latent representations learned by the model follow a simple uni-modal Gaussian distribution. Further, the variational training procedure poses considerable practical challenges. Recently proposed regularized autoencoders offer a deterministic autoencoding framework, that simplifies the original VAE objective and is significantly easier to train. Since these models only provide weak control over the learned latent distribution, they require an ex-post density estimation step to generate samples comparable to those of VAEs. In this paper, we propose a simple and end-to-end trainable deterministic autoencoding framework, that efficiently shapes the latent space of the model during training and utilizes the capacity of expressive multi-modal latent distributions. The proposed training procedure provides direct evidence if the latent distribution adequately captures complex aspects of the encoded data. We show in experiments the expressiveness and sample quality of our model in various challenging continuous and discrete domains. An implementation is available at https://github.com/boschresearch/GMM_DAE.
abstract_source: https://proceedings.neurips.cc/paper/2021/file/3c057cb2b41f22c0e740974d7a428918-Paper.pdf
content_status: complete
---
