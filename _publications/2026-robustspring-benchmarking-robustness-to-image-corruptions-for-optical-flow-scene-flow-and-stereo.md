---
layout: publication
title: RobustSpring - Benchmarking Robustness to Image Corruptions for Optical Flow, Scene Flow and Stereo
description: RobustSpring tests motion and depth estimation under corruptions that remain consistent across
  time, viewpoints, and scene depth. Its benchmark complements accuracy scores with robustness measurements,
  exposing weaknesses that clean images can conceal.
why: Motion and depth algorithms need tests in which visual changes remain consistent across frames and camera
  views. RobustSpring provides such corruptions instead of treating each image in isolation. It supports more
  realistic comparisons of how vision systems handle difficult conditions.
figures:
- label: Figure 1
  image: /images/publications/details/080-figure-1.webp
  alt: Consistent scene corruptions for optical-flow, stereo, and scene-flow evaluation.
  caption: RobustSpring is a novel image corruption benchmark for optical flow, scene flow, and stereo. It
    evaluates 20 image corruptions including blurs, color changes, noises, quality degradations, and weather,
    applied to stereo video data from Spring. For comprehensive robustness evaluations, RobustSpring’s image
    corruptions are integrated in time, stereo, and depth, where applicable.
  source: https://www.collaborative-ai.org/publications/oei26_iclr.pdf#page=1
  width: 894
  height: 343
- label: Figure 2
  image: /images/publications/details/080-figure-2.webp
  alt: Overview of RobustSpring’s image corruptions.
  caption: Overview of RobustSpring’s image corruptions.
  source: https://www.collaborative-ai.org/publications/oei26_iclr.pdf#page=4
  width: 885
  height: 313
bibtex: |
  @inproceedings{oei2026robustspringbenchmarkingrobustness80,
    title = {{RobustSpring - Benchmarking Robustness to Image Corruptions for Optical Flow, Scene Flow and Stereo}},
    author = {Victor Oei and Jenny Schmalfuss and Lukas Mehl and Madlen Bartsch and Shashank Agnihotri and Margret Keuper and Andreas Bulling and Andres Bruhn},
    booktitle = {International Conference on Learning Representations},
    year = {2026},
    url = {https://openreview.net/forum?id=RebPBMrMmk}
  }
bibtex_file: /assets/bibtex/2026-robustspring-benchmarking-robustness-to-image-corruptions-for-optical-flow-scene-flow-and-stereo.bib
abstract: |-
  Standard benchmarks for optical flow, scene flow, and stereo vision algorithms generally focus on model accuracy rather than robustness to image corruptions like noise or rain. Hence, the resilience of models to such real-world perturbations is largely unquantified. To address this, we present RobustSpring, a comprehensive dataset and benchmark for evaluating robustness to image corruptions for optical flow, scene flow, and stereo models. RobustSpring applies 20 different image corruptions, including noise, blur, color changes, quality degradations, and weather distortions, in a time-, stereo-, and depth-consistent manner to the highresolution Spring dataset, creating a suite of 20,000 corrupted images that reflect challenging conditions. RobustSpring enables comparisons of model robustness via a new corruption robustness metric. Integration with the Spring benchmark enables two-axis evaluations of both accuracy and robustness. We benchmark a curated selection of initial models, observing that robustness varies widely by corruption type, and experimentally show that evaluations on RobustSpring indicate real-world robustness. RobustSpring is a new computer vision benchmark to treat robustness as a first-class citizen, fostering models that are accurate and resilient.
abstract_source: https://www.collaborative-ai.org/publications/oei26_iclr.pdf
content_status: complete
---
