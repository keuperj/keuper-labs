---
layout: publication
title: STELLA a modular framework for SpatioTemporal Event-based Lagrangian particLe trAcking
description: Event cameras offer a fast, sparse view of moving particles. STELLA unifies alternative detection
  and tracking pipelines with synthetic and experimental benchmarks for studying detailed motion in fluid flows.
why: Event cameras record changes rather than complete frames, offering a different way to observe fast-moving
  particles. STELLA brings several tracking approaches into one modular framework and compares them on controlled
  and experimental data. It makes this imaging technology easier to investigate for detailed measurements of
  fluid motion.
figures:
- label: Figure 1
  image: /images/publications/details/091-figure-1.webp
  alt: STELLA event-camera detection and particle-tracking pipelines.
  caption: Schematic representation of established processing pipelines using either a dense representation
    or direct processing of events
  source: https://link.springer.com/content/pdf/10.1007/s00348-026-04253-8.pdf#page=3
  width: 1156
  height: 623
- label: Figure 2
  image: /images/publications/details/091-figure-2.webp
  alt: Schematic workflow of the proposed modular framework STELLA, integrating an iterative time-stepping
    scheme to enable data processing within the proposed processing pipelines
  caption: Schematic workflow of the proposed modular framework STELLA, integrating an iterative time-stepping
    scheme to enable data processing within the proposed processing pipelines
  source: https://link.springer.com/content/pdf/10.1007/s00348-026-04253-8.pdf#page=4
  width: 1156
  height: 554
bibtex: |
  @article{sachs2026stellaamodular91,
    title = {{STELLA a modular framework for SpatioTemporal Event-based Lagrangian particLe trAcking}},
    author = {Sebastian Sachs and Steffen Jung and Max Kahl and Margret Keuper and Christian Willert and Christian Cierpka},
    journal = {Experiments in Fluids},
    year = {2026},
    url = {https://link.springer.com/article/10.1007/s00348-026-04253-8},
    doi = {10.1007/s00348-026-04253-8}
  }
bibtex_file: /assets/bibtex/2026-stella-a-modular-framework-for-spatiotemporal-event-based-lagrangian-particle-tracking.bib
abstract: |-
  Event-based cameras have emerged as a powerful tool for object detection and tracking in autonomous driving, robotics, and experimental physics. In particular, they facilitate the study of complex turbulent fluid flows by enabling the tracking of numerous tiny tracer particles, while benefiting from the superior temporal resolution, high dynamic range, and low data rate of the asynchronous event stream. However, exploiting the sparse event stream requires precise and efficient data processing pipelines that either accumulate events into a dense representation or process them directly by clustering algorithms. In this study, we present a modular framework for SpatioTemporal Event-based Lagrangian particLe trAcking (STELLA), which integrates detection and tracking strategies from both pipelines into a unified tracking system. To benchmark the proposed framework, we introduce demanding synthetic and experimental datasets covering the motion of numerous particles, which are made publicly available. Leveraging the rich ground truth of these datasets, established recurrent vision transformer and heat conduction-based detection architectures are trained and applied to particle tracking in fluid flows for the first time. Using STELLA, robust and reliable particle tracking is demonstrated, achieving subpixel-accurate tracks and a mean absolute error in the predicted velocity down to 1.9 % of the peak velocity. Which is the best-performing processing pipeline strongly depends on the dynamics and composition of the considered dataset. In particular, approaches based on dense representations yield accurate tracks for high-frequency periodic particle motions. Conversely, direct processing of the event stream enables simultaneous tracking of more than 900 particles in the wake of a cylinder, with uncertainties comparable to stateof-the-art particle tracking velocimetry (PTV) using a high-speed camera. Despite significant spatial and temporal velocity gradients, slow- and fast-moving particles are precisely tracked in the event stream, challenging conventional approaches using frame-based cameras. Hence, the openly available framework STELLA paves the way for a versatile and easily accessible application of event-based cameras for flow diagnostics.
abstract_source: https://link.springer.com/content/pdf/10.1007/s00348-026-04253-8.pdf
content_status: complete
---
