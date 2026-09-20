---
layout: publication
title: Impact of realistic properties of the point spread function on classification tasks to reveal a possible
  distribution shift
description: Real lenses produce more complex blur than standard corruption benchmarks assume. We evaluate
  direction- and wavelength-dependent optical effects, exposing classification changes that simpler blur tests
  can miss.
why: A real camera lens blurs different colors and directions in different ways. This paper shows that those
  effects can change a classifier's behavior in ways that standard blur tests miss. More realistic optical
  tests can help researchers understand how a model will respond to the camera that supplies its images.
figures:
- label: Figure 1
  image: /images/publications/details/021-figure-1.webp
  alt: Optical blur kernels and the resulting image distortions.
  caption: 'Left: PSFs representing the different "severities" 1-5 from left to right: First row visualizes
    the corruption kernels, the second row astigmatic optical kernels showing chromatic aberration. Right:
    Visual examples from the modified datasets with increasing severities: 2 (a), 3 (b-c) and 4 (d-e). The
    first row visualizes the effects of corruption kernels and the second of optical kernels. Read example:
    Chromatic aberration visible at the reddish and greenish branches (a) and at the window blind (b), while
    the simple kernels do not create color fringes.'
  source: https://pure.mpg.de/rest/items/item_3473172/component/file_3473173/content#page=4
  width: 912
  height: 247
- label: Figure 2
  image: /images/publications/details/021-figure-2.webp
  alt: (a) Difference in mSSIM for all severities.
  caption: (a) Difference in mSSIM for all severities. The mSSIM for severities 3-5 is ≤1.1 %. (b,c) Difference
    in top1-error between modified and unmodified ImageNet for corruption datasets and optical datasets. The
    average difference in mSSIM is below 1.1 % for severities 3-5. Classification results (b,c) with a + denote
    worse classification for optical datasets (higher top1-error).
  source: https://pure.mpg.de/rest/items/item_3473172/component/file_3473173/content#page=4
  width: 896
  height: 265
bibtex: |
  @inproceedings{muller2022impactofrealistic21,
    title = {{Impact of realistic properties of the point spread function on classification tasks to reveal a possible distribution shift}},
    author = {Patrick Müller and Alexander Braun and Margret Keuper},
    booktitle = {NeurIPS 2022 Workshop on Distribution Shifts - Connecting Methods and Applications},
    year = {2022},
    url = {https://pure.mpg.de/rest/items/item_3473172/component/file_3473173/content}
  }
bibtex_file: /assets/bibtex/2022-impact-of-realistic-properties-of-the-point-spread-function-on-classification-tasks-to-reveal-a-possible-distributi.bib
abstract: |-
  Image classification is a long-standing task in computer vision with deep neural networks (DNN) producing excellent results on various challenges. However, they are required not only to perform highly accurate on benchmarks such as ImageNet, but also to robustly handle images in adverse conditions, such as modified lighting, sharpness, weather conditions and image compression. Various benchmarks aimed to measure robustness show that neural networks perform differently well under distribution shifts. While datasets such as ImageNet-C model for example common corruptions such as blur and adverse weather conditions, we argue that the properties of the optical system and the potentially resulting complex lens blur are insufficiently well studied in the literature. This study evaluates the impact of realistic optical corruptions on the ImageNet classification. The proposed complex corruption kernels are direction and wavelength dependent and include chromatic aberration, which are all to be expected in realistic scenarios such as autonomous driving applications. Our experiments on twelve different DNN models show significant differences of more than 5% in the top1 classification error, when compared to the model performances on matched ImageNet-C blur kernels.
abstract_source: https://pure.mpg.de/rest/items/item_3473172/component/file_3473173/content
content_status: complete
---
