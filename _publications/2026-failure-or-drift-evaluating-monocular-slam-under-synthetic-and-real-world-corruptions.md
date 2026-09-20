---
layout: publication
title: Failure or Drift? Evaluating Monocular SLAM under Synthetic and Real-World Corruptions
description: A tracker that keeps running may still accumulate serious drift. This study separates tracking
  failure from trajectory degradation and tests when synthetic corruptions reproduce conclusions drawn from
  real adverse conditions.
why: A camera-based mapping system can keep running while its estimated path becomes increasingly wrong. This
  study separates complete tracking failures from that quieter accumulation of error. It also tests when artificial
  image corruptions reproduce conclusions from real conditions, making tracker comparisons more useful for
  deployment.
figures:
- label: Figure 1
  image: /images/publications/details/094-figure-1.webp
  alt: Tracking completion and trajectory drift for classical and learned SLAM systems.
  caption: Clean and corrupted inputs reveal different aspects of failure. (a) All three systems return an
    evaluable trajectory on each clean KITTI sequence; under synthetic corruption, ORB-SLAM2 frequently returns
    no evaluable trajectory, while DPVO and DROID-SLAM remain valid in every archived attempt. Missing, unexecuted
    configurations are excluded from the denominators. (b) Conditional APE across clean KITTI sequences 00–10;
    diamonds mark sequence 00, the nominal reference used for the corruption sweep. The clean distribution
    shows strong route dependence and is not a matched degradation curve for every corrupted archive. (c) Conditional
    APE for paired DPVO and DROID-SLAM settings after tracking continues.
  source: https://arxiv.org/pdf/2608.30690#page=7
  width: 787
  height: 505
- label: Figure 2
  image: /images/publications/details/094-figure-2.webp
  alt: The corruption model changes tracker selection.
  caption: The corruption model changes tracker selection. Each point is a paired condition with complete DPVO
    and DROID-SLAM results; ∆APE > 0 favors DROID-SLAM. DPVO has lower APE in 30/43 image-space settings, whereas
    DROID-SLAM has lower APE in 33/33 geometry-aware settings and 14/15 compound settings.
  source: https://arxiv.org/pdf/2608.30690#page=8
  width: 789
  height: 340
bibtex: |
  @inproceedings{thomas2026failureordrift94,
    title = {{Failure or Drift? Evaluating Monocular SLAM under Synthetic and Real-World Corruptions}},
    author = {Abhay Skaria Thomas and Shashank Agnihotri and Margret Keuper},
    booktitle = {NeuSLAM Workshop at ECCV 26},
    year = {2026},
    url = {https://arxiv.org/abs/2608.30690}
  }
bibtex_file: /assets/bibtex/2026-failure-or-drift-evaluating-monocular-slam-under-synthetic-and-real-world-corruptions.bib
abstract: |-
  Visual SLAM is commonly evaluated on clean trajectories, although deployment failures are often caused by adverse weather, illumination, blur, and sensor artifacts. Controlled corruptions are attractive because they isolate such factors, but a synthetic stress test is useful only when it leads to the same engineering conclusion as the condition it is intended to approximate. This work examines that question for monocular SLAM. We evaluate a classical feature-based system and two learned trackers under image-space, geometry-aware, and compound corruptions, and compare their behavior with adverse conditions from 4Seasons. Rather than reducing robustness to a single trajectory error, the evaluation separates explicit tracking failure from drift accumulated by methods that remain active. The results show that learned trackers largely replace catastrophic loss with sustained, and sometimes severe, drift. More importantly, the apparent ordering of the learned systems changes with the physical fidelity of the corruption: structured rain and fog proxies preserve the real-world ordering, whereas a simple illumination proxy does not. Code is available in this: GitHub repository.
abstract_source: https://arxiv.org/pdf/2608.30690
content_status: complete
---
