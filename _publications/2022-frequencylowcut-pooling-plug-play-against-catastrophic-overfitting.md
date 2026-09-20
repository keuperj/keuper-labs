---
layout: publication
title: FrequencyLowCut Pooling--Plug & Play against Catastrophic Overfitting
description: A small change to downsampling can make adversarial training more stable. FrequencyLowCut pooling
  removes aliasing and helps prevent catastrophic overfitting during fast, single-step adversarial training.
why: Fast robustness training is attractive, but it can suddenly lose nearly all of its protective effect.
  This paper tackles one cause by changing how a network reduces the resolution of its internal images. The
  replacement operation is designed to fit existing networks and makes this inexpensive training approach more
  stable.
figures:
- label: Figure 1
  image: /images/publications/details/017-figure-1.webp
  alt: Comparison of CNN downsampling architectures with FrequencyLowCut pooling.
  caption: 'Standard down-sampling operations used in CNNs. Left: down-sampling via convolution with stride
    two. First the feature map is padded and the actual convolution is executed. The stride defines the step-size
    of the kernel. Hence, for stride two, the kernel is moved two spatial units. In practice, this down-sampling
    is often implemented by a standard convolution with stride one and then discarding every second point in
    every spatial dimension. Right: down-sampling via MaxPooling. Here the max value for each spatial window
    location is chosen and the striding is implemented accordingly.'
  source: https://arxiv.org/pdf/2204.00491#page=5
  width: 784
  height: 218
- label: Figure 2
  image: /images/publications/details/017-figure-2.webp
  alt: Examples of AT facing catastrophic overfitting and its relationship to aliasing as well as robust overfitting
    and our FLC pooling.
  caption: Examples of AT facing catastrophic overfitting and its relationship to aliasing as well as robust
    overfitting and our FLC pooling. While FGSM training is prone to catastrophic overfitting, PGD training
    takes much longer and is also prone to robust overfitting. Our method, FLC pooling, is able to train with
    the fast FGSM training while preventing catastrophic overfitting.
  source: https://arxiv.org/pdf/2204.00491#page=5
  width: 784
  height: 231
bibtex: |
  @inproceedings{grabinski2022frequencylowcutpoolingplug17,
    title = {{FrequencyLowCut Pooling--Plug \& Play against Catastrophic Overfitting}},
    author = {Julia Grabinski and Steffen Jung and Janis Keuper and Margret Keuper},
    booktitle = {European Conference on Computer Vision},
    year = {2022},
    url = {https://arxiv.org/pdf/2204.00491}
  }
bibtex_file: /assets/bibtex/2022-frequencylowcut-pooling-plug-play-against-catastrophic-overfitting.bib
abstract: |-
  Over the last years, Convolutional Neural Networks (CNNs) have been the dominating neural architecture in a wide range of computer vision tasks. From an image and signal processing point of view, this success might be a bit surprising as the inherent spatial pyramid design of most CNNs is apparently violating basic signal processing laws, i.e. Sampling Theorem in their down-sampling operations. However, since poor sampling appeared not to affect model accuracy, this issue has been broadly neglected until model robustness started to receive more attention. Recent work [18] in the context of adversarial attacks and distribution shifts, showed after all, that there is a strong correlation between the vulnerability of CNNs and aliasing artifacts induced by poor downsampling operations. This paper builds on these findings and introduces an aliasing free down-sampling operation which can easily be plugged into any CNN architecture: FrequencyLowCut pooling. Our experiments show, that in combination with simple and Fast Gradient Sign Method (FGSM) adversarial training, our hyper-parameter free operator substantially improves model robustness and avoids catastrophic overfitting. Our code is available at https://github.com/GeJulia/flc_pooling
abstract_source: https://arxiv.org/pdf/2204.00491
content_status: complete
---
