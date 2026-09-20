---
layout: publication
title: Watch your Up-Convolution - CNN Based Generative Deep Neural Networks are Failing to Reproduce Spectral
  Distributions
description: Why do generated images leave detectable frequency fingerprints? We trace these artifacts to common
  upsampling operations and introduce spectral regularization that helps generators better reproduce natural-image
  statistics.
why: An AI-generated photograph can look convincing while still containing patterns that a person would never
  notice. This paper identifies how common image-building steps create those patterns and shows how to reduce
  them. The finding helps explain both why some fake-image detectors work and how to build more faithful image
  generators.
figures:
- label: Figure 1
  image: /images/publications/details/001-figure-1.webp
  alt: Power spectra of real and generated images before and after spectral regularization.
  caption: 'Common up-convolution methods are inducing heavy spectral distortions into generated images. The
    top figure shows the statistics (mean and variance) after azimuthal integration over the power-spectrum
    (see Section 2.1) of real and GAN generated images. Evaluation on the CelebA [34] data set, here all GANs
    (DCGAN [47], DRA- GAN [32], LSGAN [37], WGAN-GP [20]) are using “transposed convolutions” (see Section
    2.2) for up-sampling. Bottom: Results of the same experiments as above, adding our proposed spectral loss
    during GAN training.'
  source: https://openaccess.thecvf.com/content_CVPR_2020/papers/Durall_Watch_Your_Up-Convolution_CNN_Based_Generative_Deep_Neural_Networks_Are_CVPR_2020_paper.pdf#page=1
  width: 543
  height: 611
- label: Figure 2
  image: /images/publications/details/001-figure-2.webp
  alt: Example for the azimuthal integral (AI).
  caption: 'Example for the azimuthal integral (AI). (Left) 2D Power Spectrum of an image. (Right) 1D Power
    Spectrum: each frequency component is the radial integral over the 2D spectrum (red and green examples).'
  source: https://openaccess.thecvf.com/content_CVPR_2020/papers/Durall_Watch_Your_Up-Convolution_CNN_Based_Generative_Deep_Neural_Networks_Are_CVPR_2020_paper.pdf#page=3
  width: 543
  height: 220
bibtex: |
  @inproceedings{durall2020watchyourup1,
    title = {{Watch your Up-Convolution - CNN Based Generative Deep Neural Networks are Failing to Reproduce Spectral Distributions}},
    author = {Ricard Durall and Margret Keuper and Janis Keuper},
    booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR 2020)},
    year = {2020},
    url = {https://openaccess.thecvf.com/content_CVPR_2020/papers/Durall_Watch_Your_Up-Convolution_CNN_Based_Generative_Deep_Neural_Networks_Are_CVPR_2020_paper.pdf}
  }
bibtex_file: /assets/bibtex/2020-watch-your-up-convolution-cnn-based-generative-deep-neural-networks-are-failing-to-reproduce-spectral-distributions.bib
abstract: |-
  Generative convolutional deep neural networks, e.g. popular GAN architectures, are relying on convolution based up-sampling methods to produce non-scalar outputs like images or video sequences. In this paper, we show that common up-sampling methods, i.e. known as upconvolution or transposed convolution, are causing the inability of such models to reproduce spectral distributions of natural training data correctly. This effect is independent of the underlying architecture and we show that it can be used to easily detect generated data like deepfakes with up to 100% accuracy on public benchmarks. To overcome this drawback of current generative models, we propose to add a novel spectral regularization term to the training optimization objective. We show that this approach not only allows to train spectral consistent GANs that are avoiding high frequency errors. Also, we show that a correct approximation of the frequency spectrum has positive effects on the training stability and output quality of generative networks.
abstract_source: https://openaccess.thecvf.com/content_CVPR_2020/papers/Durall_Watch_Your_Up-Convolution_CNN_Based_Generative_Deep_Neural_Networks_Are_CVPR_2020_paper.pdf
content_status: complete
---
