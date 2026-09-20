---
layout: publication
title: Multi-Class Multi-Instance Count Conditioned Adversarial Image Generation
description: Tell a generator how many objects of each class to include. Our count-conditioned GAN combines
  image synthesis with object counting, enabling explicit control over scene composition even against complex
  backgrounds.
why: Asking a generator for a street scene is easier than asking for exactly two cars and three people. This
  paper makes object counts an explicit part of image generation and checks those counts during training. That
  brings more direct control to a task in which visually attractive results can otherwise ignore basic instructions.
figures:
- label: Figure 1
  image: /images/publications/details/007-figure-1.webp
  alt: CityCount street scenes and generated images with specified numbers of cars and people.
  caption: Real and generated CityCount images by our model based on the multiple-class count input.
  source: https://openaccess.thecvf.com/content/ICCV2021/papers/Saseendran_Multi-Class_Multi-Instance_Count_Conditioned_Adversarial_Image_Generation_ICCV_2021_paper.pdf#page=1
  width: 543
  height: 414
- label: Figure 2
  image: /images/publications/details/007-figure-2.webp
  alt: 'MC2-StyleGAN2 architecture: The input to the generator is a multiple-class count vector where each
    index of the vector corresponds to each object class and the value at each index represents the multiplicity
    of the corresponding object class.'
  caption: 'MC2-StyleGAN2 architecture: The input to the generator is a multiple-class count vector where each
    index of the vector corresponds to each object class and the value at each index represents the multiplicity
    of the corresponding object class. In the given CityCount example, the count vector [2,1] corresponds to
    2 cars and 1 person respectively.'
  source: https://openaccess.thecvf.com/content/ICCV2021/papers/Saseendran_Multi-Class_Multi-Instance_Count_Conditioned_Adversarial_Image_Generation_ICCV_2021_paper.pdf#page=3
  width: 543
  height: 357
bibtex: |
  @inproceedings{saseendran2021multiclassmulti7,
    title = {{Multi-Class Multi-Instance Count Conditioned Adversarial Image Generation}},
    author = {Amrutha Saseendran and Kathrin Skubch and Margret Keuper},
    booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR 2021)},
    year = {2021},
    url = {https://openaccess.thecvf.com/content/ICCV2021/papers/Saseendran_Multi-Class_Multi-Instance_Count_Conditioned_Adversarial_Image_Generation_ICCV_2021_paper.pdf}
  }
bibtex_file: /assets/bibtex/2021-multi-class-multi-instance-count-conditioned-adversarial-image-generation.bib
abstract: |-
  Image generation has rapidly evolved in recent years. Modern architectures for adversarial training allow to generate even high resolution images with remarkable quality. At the same time, more and more effort is dedicated towards controlling the content of generated images. In this paper, we take one further step in this direction and propose a conditional generative adversarial network (GAN) that generates images with a defined number of objects from given classes. This entails two fundamental abilities (1) being able to generate high-quality images given a complex constraint and (2) being able to count object instances per class in a given image. Our proposed model modularly extends the successful StyleGAN2 architecture with a count-based conditioning as well as with a regression subnetwork to count the number of generated objects per class during training. In experiments on three different datasets, we show that the proposed model learns to generate images according to the given multiple-class count condition even in the presence of complex backgrounds. In particular, we propose a new dataset, CityCount, which is derived from the Cityscapes street scenes dataset, to evaluate our approach in a challenging and practically relevant scenario. An implementation is available at https://github.com/boschresearch/MCCGAN.
abstract_source: https://openaccess.thecvf.com/content/ICCV2021/papers/Saseendran_Multi-Class_Multi-Instance_Count_Conditioned_Adversarial_Image_Generation_ICCV_2021_paper.pdf
content_status: complete
---
