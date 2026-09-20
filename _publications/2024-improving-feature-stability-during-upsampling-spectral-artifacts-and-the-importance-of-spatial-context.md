---
layout: publication
title: Improving Feature Stability during Upsampling-Spectral Artifacts and the Importance of Spatial Context
description: Upsampling must recover fine detail while keeping predictions stable. We investigate spectral
  artifacts and show why access to a larger spatial context matters for robust, high-quality pixel-wise outputs.
why: When a model enlarges its internal images, it can introduce artifacts that affect every predicted pixel.
  This work studies that problem and shows why information from a larger surrounding area is important. The
  findings help guide the design of models that restore images or assign labels accurately at fine spatial
  resolution.
figures:
- label: Figure 1
  image: /images/publications/details/036-figure-1.webp
  alt: Restoration outputs and frequency spectra illustrating upsampling artifacts.
  caption: Image restoration example using NAFNet [16] variants on GoPro [63]. Upsampling techniques like Pixel
    Shuffle [77] (first row) and transposed convolution [22] using small learnable filters (2×2 or 3×3) (second
    row) are used by most prior art. Both lead to spectral artifacts for which the model needs to compensate.
    The clean (in-domain) restored images look appealing - while adversaries (here 5-step PGD [49] attack)
    can leverage aliases such that artifacts become easily visible. When observed in the frequency domain,
    they manifest as repeating peaks all over the spectra. Based on sampling theoretic considerations, we propose
    Large Context Transposed Convolutions (7×7 or larger) (bottom row). They significantly increase the model’s
    stability during upsampling, observable in the restored image under attack and the frequency spectrum.
  source: https://pure.mpg.de/rest/items/item_3611850_1/component/file_3611851/content#page=2
  width: 784
  height: 457
- label: Figure 2
  image: /images/publications/details/036-figure-2.webp
  alt: (Left) Linear interpolation (pink) of the samples (green) causes aliases.
  caption: (Left) Linear interpolation (pink) of the samples (green) causes aliases. (Right) Optimal signal
    reconstruction (pink) is achieved by sinc interpolation. In practice our spatial context is limited and
    the interpolation function is discrete. Yet, increasing the kernel size enables the approximation of larger
    sinc-like structures.
  source: https://pure.mpg.de/rest/items/item_3611850_1/component/file_3611851/content#page=6
  width: 784
  height: 164
bibtex: |
  @inproceedings{agnihotri2024improvingfeaturestability36,
    title = {{Improving Feature Stability during Upsampling-Spectral Artifacts and the Importance of Spatial Context}},
    author = {Shashank Agnihotri and Julia Grabinski and Margret Keuper},
    booktitle = {Proceedings of the 18th European Conference on Computer Vision (ECCV 24)},
    year = {2024},
    url = {https://pure.mpg.de/rest/items/item_3611850_1/component/file_3611851/content}
  }
bibtex_file: /assets/bibtex/2024-improving-feature-stability-during-upsampling-spectral-artifacts-and-the-importance-of-spatial-context.bib
abstract: |-
  Pixel-wise predictions are required in a wide variety of tasks such as image restoration, image segmentation, or disparity estimation. Common models involve several stages of data resampling, in which the resolution of feature maps is first reduced to aggregate information and then increased to generate a high-resolution output. Previous works have shown that resampling operations are subject to artifacts such as aliasing. During downsampling, aliases have been shown to compromise the prediction stability of image classifiers. During upsampling, they have been leveraged to detect generated content. Yet, the effect of aliases during upsampling has not yet been discussed w.r.t. the stability and robustness of pixel-wise predictions. While falling under the same term (aliasing), the challenges for correct upsampling in neural networks differ significantly from those during downsampling: when downsampling, some high frequencies can not be correctly represented and have to be removed to avoid aliases. However, when upsampling for pixel-wise predictions, we actually require the model to restore such high frequencies that can not be encoded in lower resolutions. The application of findings from signal processing is therefore a necessary but not a sufficient condition to achieve the desirable output. In contrast, we find that the availability of large spatial context during upsampling allows to provide stable, high-quality pixel-wise predictions, even when fully learning all filter weights.
abstract_source: https://pure.mpg.de/rest/items/item_3611850_1/component/file_3611851/content
content_status: complete
---
