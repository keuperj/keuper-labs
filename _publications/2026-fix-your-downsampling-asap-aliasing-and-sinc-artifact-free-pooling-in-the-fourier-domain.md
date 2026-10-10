---
layout: publication
title: Fix Your Downsampling ASAP! Aliasing and Sinc Artifact Free Pooling in the Fourier Domain
description: Downsampling can introduce aliasing and ringing artifacts that destabilize CNN features. FLC Pooling
  and ASAP operate in the Fourier domain to improve robustness against common corruptions and adversarial attacks
  while maintaining similar clean accuracy.
why: Reducing the resolution of CNN feature maps can distort the information a network uses to make predictions.
  This paper extends alias-free FLC Pooling with ASAP, which also suppresses sinc interpolation artifacts.
  Experiments on ImageNet-1k, ImageNet-C, and CIFAR show more stable features and improved robustness against
  corruptions and adversarial attacks, with clean accuracy similar to the baseline models.
figures:
- label: Figure 1
  image: /images/publications/details/104-figure-1.webp
  alt: Comparison of MaxPooling, strided downsampling, FLC Pooling, and ASAP on a zebra image.
  caption: MaxPooling and strided downsampling distort image structure or introduce aliasing. FLC Pooling removes
    aliasing but retains ringing artifacts; ASAP also suppresses these sinc interpolation artifacts. Reproduced
    from Grabinski et al. (2026), CC BY 4.0; converted to WebP.
  source: https://link.springer.com/content/pdf/10.1007/s11263-026-03005-9.pdf#page=2
  width: 936
  height: 937
- label: Figure 3
  image: /images/publications/details/104-figure-3.webp
  alt: FLC Pooling pipeline using FFT, a low-frequency cut, and inverse FFT to downsample feature maps without
    aliasing.
  caption: FLC Pooling transforms the input into the Fourier domain, retains the central low-frequency components,
    and returns to the spatial domain with an inverse FFT. Reproduced from Grabinski et al. (2026), CC BY 4.0;
    cropped from the PDF and converted to WebP.
  source: https://link.springer.com/content/pdf/10.1007/s11263-026-03005-9.pdf#page=4
  width: 485
  height: 224
bibtex_file: /assets/bibtex/2026-fix-your-downsampling-asap-aliasing-and-sinc-artifact-free-pooling-in-the-fourier-domain.bib
content_status: complete
abstract: Convolutional Neural Networks (CNNs) are successful in various computer vision tasks. From an image
  and signal processing point of view, this success is counter-intuitive, as the inherent spatial pyramid design
  of most CNNs is apparently violating basic signal processing laws, i.e. the Sampling Theorem in their downsampling
  operations. This issue has been broadly neglected until recent work in the context of adversarial attacks
  and distribution shifts showed that there is a strong correlation between the vulnerability of CNNs and aliasing
  artifacts induced by bandlimit-violating downsampling. As a remedy, we propose an alias-free downsampling
  operation in the frequency domain, denoted Frequency Low Cut Pooling (FLC Pooling) which we further extend
  to Aliasing and Sinc Artifact-free Pooling (ASAP). ASAP is alias-free and removes further artifacts from
  sinc-interpolation. Our experimental evaluation on ImageNet-1k, ImageNet-C and CIFAR datasets on various
  CNN architectures demonstrates that networks using FLC Pooling and ASAP as downsampling methods learn more
  stable features as measured by their robustness against common corruptions and adversarial attacks, while
  maintaining a clean accuracy similar to the respective baseline models.
abstract_source: https://link.springer.com/article/10.1007/s11263-026-03005-9
bibtex: "@article{grabinski2026asap,\n  title = {Fix Your Downsampling ASAP! Aliasing and Sinc Artifact Free\
  \ Pooling in the Fourier Domain},\n  author = {Grabinski, Julia and Jung, Steffen and Keuper, Janis and Keuper,\
  \ Margret},\n  journal = {International Journal of Computer Vision},\n  year = {2026},\n  volume = {134},\n\
  \  pages = {461},\n  doi = {10.1007/s11263-026-03005-9},\n  url = {https://link.springer.com/article/10.1007/s11263-026-03005-9}\n\
  }\n"
---
