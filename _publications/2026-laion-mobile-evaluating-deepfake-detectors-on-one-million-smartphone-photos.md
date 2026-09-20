---
layout: publication
title: LAION-Mobile - Evaluating Deepfake Detectors On One Million Smartphone Photos
description: Ordinary smartphone photos are a demanding test for deepfake detectors. LAION-Mobile assembles
  roughly one million images with camera metadata and reveals serious generalization and threshold-calibration
  problems in existing detectors.
why: A deepfake detector should not label ordinary smartphone photographs as fabricated simply because their
  processing differs from its training data. LAION-Mobile tests that problem with roughly a million photos
  and camera metadata. It reveals how benchmark success can hide serious problems with real photographs and
  decision thresholds.
figures:
- label: Figure 1
  image: /images/publications/details/098-figure-1.webp
  alt: Detector operating points showing trade-offs between detection and false alarms.
  caption: 'The deepfake-detection reality gap. For each detector, we visualize three different measurements:
    paper-reported AUC on its own test set (green); NTIRE 2026 AUC [6] (orange, 95% bootstrap CI); and the
    LAION-Mobile false-alarm rate at the detector’s own NTIRE-calibrated EER threshold (red, n=9,115, DIRE
    on 738; the τ(NTIRE) column of table 4). Paper-AUC bars are published headlines under each method’s own
    protocol (context only); directly comparable are the NTIRE and LAION-Mobile columns under our uniform protocol
    (section 5.1). A deployable detector needs a high NTIRE AUC and a low LAION-Mobile FPR; across the roster
    the two are mutually exclusive. Results are sorted by descending NTIRE AUC.'
  source: https://arxiv.org/pdf/2609.11134#page=2
  width: 1156
  height: 861
- label: Figure 2
  image: /images/publications/details/098-figure-2.webp
  alt: Distillation funnel from re-LAION-5B to the cleaned LAION-Mobile pool.
  caption: Distillation funnel from re-LAION-5B to the cleaned LAION-Mobile pool. Each tier is annotated with
    its image count and the reduction factor from the stage above; bar width is proportional to log10(count),
    as the five stages span four orders of magnitude. The green tier is the 935,399-image cleaned pool from
    which all evaluation images are drawn (non-photo filtering detailed below).
  source: https://arxiv.org/pdf/2609.11134#page=3
  width: 1156
  height: 336
bibtex: |
  @inproceedings{stryk2026laionmobileevaluating98,
    title = {{LAION-Mobile - Evaluating Deepfake Detectors On One Million Smartphone Photos}},
    author = {Achim von Stryk and Janis Keuper},
    booktitle = {AI for Multimedia Forensics \& Disinformation Detection Workshop at ECCV 26},
    year = {2026},
    url = {https://openreview.net/pdf?id=nKXIRrwFYp}
  }
bibtex_file: /assets/bibtex/2026-laion-mobile-evaluating-deepfake-detectors-on-one-million-smartphone-photos.bib
abstract: |-
  Most Deepfake detectors report near-perfect AUC scores on their reference benchmarks. However, a recent ICML position paper argues that these evaluations collectively neglect the impact of modern smartphone photography: the widely used on-device neural image-signal processing pipelines (like multi-sensor fusion or noise and motion-blur suppression) increasingly shift the imaging paradigm from simple lens projections towards computational photography. Hence, devices actually generate, rather than record photos. This increases the risk that deepfake detectors may flag ordinary phone photos as fake. Due to the lack of large-scale datasets containing images from modern smartphones, this hypothesis has so far only been tested in small proof-ofconcept studies. The aim of this paper is to close this gap. We introduce “LAION-Mobile”, an open dataset containing ∼1 million smartphone images with EXIF metadata distilled from re-LAION-5B. Evaluating twelve state-of-the-art deepfake detectors with their original paper checkpoints on a 9,115-image evaluation sample of this pool (DIRE on 738), we report three key findings: (i) On modern AI content no detector exceeds AUC 0.624, and five of twelve fall below chance. (ii) Realphoto false-alarm rates are an artefact of threshold calibration: thresholds fitted on legacy GAN data make several detectors look deployable (≤11% FPR), yet the same detectors flag 17–91% of real photos once the identical criterion is refit on modern content. (iii) Consequently, no detector both beats chance on modern AI content and keeps a deployable real-photo false-alarm rate. Mirroring the device mix of web collections, the corpus probes the first neural-ISP generation (2018–2020); current flagships are essentially absent, leaving the modern-ISP regime as the open gap. The “LAION-Mobile” dataset, including per-image EXIF metadata is available at https://huggingface.co/datasets/laionmobile/laion-mobile.
abstract_source: https://arxiv.org/pdf/2609.11134
content_status: complete
---
