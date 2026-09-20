---
layout: publication
title: Urban Sound Propagation - a Benchmark for 1-Step Generative Modeling of Complex Physical Systems
description: Urban sound propagation turns a complex physical process into a concrete test for generative models.
  This benchmark pairs city layouts with simulated sound maps, revealing where fast learned predictions capture
  physics and where they fall short.
why: Predicting how sound spreads through a city is a useful test of whether image-generating AI can learn
  physical relationships. This benchmark pairs urban layouts with simulated noise maps and compares several
  model families. It makes both the promise of fast prediction and its remaining inaccuracies visible in a
  concrete application.
figures:
- label: Figure 1
  image: /images/publications/details/041-figure-1.webp
  alt: Urban map processing from satellite imagery to simulated sound propagation.
  caption: Starting with the selection of a 500m2 area (a), buildings are identified, followed by placing a
    receiver grid (b). The urban layout (c) and the corresponding sound propagation, simulated using the NoiseModelling
    Framework from a central signal source, are then used in the dataset (d).
  source: https://arxiv.org/pdf/2403.10904#page=3
  width: 1193
  height: 299
- label: Figure 2
  image: /images/publications/details/041-figure-2.webp
  alt: Comparing the ground-truth simulation with the predictions from U-Net, GAN, and diffusion model for
    a single sample within the reflection task.
  caption: Comparing the ground-truth simulation with the predictions from U-Net, GAN, and diffusion model
    for a single sample within the reflection task.
  source: https://arxiv.org/pdf/2403.10904#page=4
  width: 1193
  height: 314
bibtex: |
  @inproceedings{spitznagel2024urbansoundpropagation41,
    title = {{Urban Sound Propagation - a Benchmark for 1-Step Generative Modeling of Complex Physical Systems}},
    author = {Martin Spitznagel and Janis Keuper},
    booktitle = {DMLR Workshop at International Conference on Learning Representations ( 24)},
    year = {2024},
    url = {https://www.urban-sound-data.org/}
  }
bibtex_file: /assets/bibtex/2024-urban-sound-propagation-a-benchmark-for-1-step-generative-modeling-of-complex-physical-systems.bib
abstract: |-
  Data-driven modeling of complex physical systems is receiving a growing amount of attention in the simulation and machine learning communities. Since most physical simulations are based on compute-intensive, iterative implementations of differential equation systems, a (partial) replacement with learned, 1-step inference models has the potential for significant speedups in a wide range of application areas. In this context, we present a novel benchmark for the evaluation of 1-step generative learning models in terms of speed and physical correctness. Our Urban Sound Propagation benchmark is based on the physically complex and practically relevant, yet intuitively easy to grasp task of modeling the 2d propagation of waves from a sound source in an urban environment. We provide a dataset with 100k samples, where each sample consists of pairs of real 2d building maps drawn from OpenStreetmap, a parameterized sound source, and a simulated ground truth sound propagation for the given scene. The dataset provides four different simulation tasks with increasing complexity regarding reflection, diffraction and source variance. A first baseline evaluation of common generative U-Net, GAN and Diffusion models shows, that while these models are very well capable of modeling sound propagations in simple cases, the approximation of sub-systems represented by higher order equations systematically fails. Information about the dataset, download instructions and source codes are provided on our website: https://www.urban-sound-data.org.
abstract_source: https://arxiv.org/pdf/2403.10904
content_status: complete
---
