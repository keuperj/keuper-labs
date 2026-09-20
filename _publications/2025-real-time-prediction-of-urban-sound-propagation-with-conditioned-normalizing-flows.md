---
layout: publication
title: Real-time Prediction of Urban Sound Propagation with Conditioned Normalizing Flows
description: Explore changes to an urban sound map in a fraction of a second. Conditioned normalizing flows
  learn to predict sound propagation from city layouts, enabling rapid comparison of source and geometry changes.
why: Urban planners may need to compare many changes to roads, buildings, or noise sources. Detailed sound
  simulations can make that interactive exploration slow. This learned model predicts sound maps rapidly, offering
  a practical way to explore alternatives before undertaking more expensive analysis.
figures:
- label: Figure 1
  image: /images/publications/details/076-figure-1.webp
  alt: City layout with sound maps for baseline, diffraction, and reflection simulation regimes.
  caption: 'Example data pair: (a) Input urban layout from OSM, and corresponding ground truth simulations
    for (b) Baseline, (c) Diffraction, and (d) Reflection scenarios.'
  source: https://arxiv.org/pdf/2510.04510#page=3
  width: 894
  height: 277
- label: Figure 2
  image: /images/publications/details/076-figure-2.webp
  alt: Visual comparison of our model’s predictions (center column) against the ground truth (left column)
    for the Baseline, Reflection, and Diffraction scenarios.
  caption: Visual comparison of our model’s predictions (center column) against the ground truth (left column)
    for the Baseline, Reflection, and Diffraction scenarios. The absolute error maps (right column) confirm
    high physical fidelity across all cases.
  source: https://arxiv.org/pdf/2510.04510#page=4
  width: 892
  height: 665
bibtex: |
  @inproceedings{eckerle2025realtimeprediction76,
    title = {{Real-time Prediction of Urban Sound Propagation with Conditioned Normalizing Flows}},
    author = {Achim Eckerle and Martin Spitznage and Janis Keuper},
    booktitle = {NeurIPS 25 Workshop on UrbanAI},
    year = {2025},
    url = {https://arxiv.org/pdf/2510.04510}
  }
bibtex_file: /assets/bibtex/2025-real-time-prediction-of-urban-sound-propagation-with-conditioned-normalizing-flows.bib
abstract: |-
  Accurate and fast urban noise prediction is pivotal for public health and for regulatory workflows in cities, where the Environmental Noise Directive mandates regular strategic noise maps and action plans, often needed in permission workflows, rightof-way allocation, and construction scheduling. Physics-based solvers are too slow for such time-critical, iterative “what-if” studies. We evaluate conditional Normalizing Flows (Full-Glow) for generating for generating standards-compliant urban sound-pressure maps from 2D urban layouts in real time (≈102 ms per 256×256 map on a single RTX 4090), enabling interactive exploration directly on commodity hardware. On datasets covering Baseline, Diffraction, and Reflection regimes, our model accelerates map generation by >2000× over a reference solver while improving NLoS accuracy by up to 24% versus prior deep models; in Baseline NLoS we reach 0.65 dB MAE with high structural fidelity. The model reproduces diffraction and interference patterns and supports instant recomputation under source or geometry changes, making it a practical engine for urban planning, compliance mapping, and operations (e.g., temporary road closures, night-work variance assessments).
abstract_source: https://arxiv.org/pdf/2510.04510
content_status: complete
---
