---
layout: publication
title: PhysicsGen - Can Generative Models Learn from Images to Predict Complex Physical Relations?
description: Fast predictions are not enough if a learned simulator gets the physics wrong. PhysicsGen benchmarks
  generative models on three image-based simulation tasks, making both their speed potential and physical limitations
  visible.
why: A plausible-looking simulation is not necessarily a physically correct one. PhysicsGen tests image-based
  generative models on several physical problems so that their errors can be examined systematically. It helps
  researchers judge where fast learned approximations are useful and where stronger physical constraints are
  needed.
figures:
- label: Figure 1
  image: /images/publications/details/066-figure-1.webp
  alt: Physical simulations, image-pair prediction, and physics-based evaluation in PhysicsGen.
  caption: 'Overview of the physical problems, baseline generative models and their evaluation. A: We introduce
    three complex physical simulation tasks with 100k input-output image pairs each, providing ground truth
    simulations based on differential equations with varying complexity. B: We evaluate all tasks on independently
    trained image translation models; only results for the sound propagation task are visualized in this figure.
    C: While the evaluation of the baseline models shows a general ability of generative image models to learn
    physical relations from images, we observe significant performance drops for tasks that require a higher
    order term in the differential equations of their simulation.'
  source: https://arxiv.org/pdf/2503.05333#page=1
  width: 573
  height: 724
- label: Figure 2
  image: /images/publications/details/066-figure-2.webp
  alt: The sampling pipeline for the sound propagation dataset utilizes the NoiseModelling framework [4] to
    generate sound propagation maps based on specific urban layouts.
  caption: The sampling pipeline for the sound propagation dataset utilizes the NoiseModelling framework [4]
    to generate sound propagation maps based on specific urban layouts. The generators are then trained to
    replicate these sound propagation patterns for given locations and source parameters. Predictions are evaluated
    by specifically analyzing errors in relation to the line of sight (see appendix B.1 for details).
  source: https://arxiv.org/pdf/2503.05333#page=4
  width: 698
  height: 228
bibtex: |
  @inproceedings{spitznagel2025physicsgencangenerative66,
    title = {{PhysicsGen - Can Generative Models Learn from Images to Predict Complex Physical Relations?}},
    author = {Martin Spitznagel and Jan Vailant and Janis Keuper},
    booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR 2025)},
    year = {2025},
    url = {https://arxiv.org/abs/2503.05333}
  }
bibtex_file: /assets/bibtex/2025-physicsgen-can-generative-models-learn-from-images-to-predict-complex-physical-relations.bib
abstract: |-
  The image-to-image translation abilities of generative learning models have recently made significant progress in the estimation of complex (steered) mappings between image distributions. While appearance based tasks like image in-painting or style transfer have been studied at length, we propose to investigate the potential of generative models in the context of physical simulations. Providing a dataset of 300k image-pairs and baseline evaluations for three different physical simulation tasks, we propose a benchmark to investigate the following research questions: i) are generative models able to learn complex physical relations from input-output image pairs? ii) what speedups can be achieved by replacing differential equation based simulations? While baseline evaluations of different current models show the potential for high speedups (ii), these results also show strong limitations toward the physical correctness (i). This underlines the need for new methods to enforce physical correctness. Data, baseline models and evaluation code: http://www.physics-gen.org.
abstract_source: https://arxiv.org/pdf/2503.05333
content_status: complete
---
