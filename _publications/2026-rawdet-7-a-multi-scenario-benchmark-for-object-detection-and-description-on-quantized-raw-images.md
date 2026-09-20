---
layout: publication
title: RAWDet-7 A Multi-Scenario Benchmark for Object Detection and Description on Quantized RAW Images
description: What useful visual information survives directly in low-bit RAW sensor data? RAWDet-7 benchmarks
  object detection and description across cameras, environments, and quantization levels, bringing sensor constraints
  into model evaluation.
why: Camera processing is usually designed to make pictures pleasant for people, but machines may need different
  information. RAWDet-7 tests recognition and description directly on sensor data with different levels of
  numerical precision. It provides evidence for studying the trade-off between data efficiency and useful visual
  information.
figures:
- label: Figure 1
  image: /images/publications/details/090-figure-1.webp
  alt: RAW image scenes with object detections and region-level descriptions.
  caption: Comparing ground truth annotations provided in the original datasets and the new ones proposed in
    RAWDET-7. Our proposed annotations are more fine-grained, as seen for PASCAL RAW, which originally annotated
    only one instance of the cars in the image; we now annotate all the other instances of cars in the image
    (with a 20% overlap threshold i.e. at least 20% area of the bounding box should be non-overlapping). RAW
    NOD (-Nikon and -Sony), RAOD (-Day and -Night) original annotations contain hallucinations as seen here
    for RAW NOD, which hallucinates a bicycle in the center right of the frame. Original annotations even contain
    some misclassifications, as seen for RAOD, which misclassified a motorcycle as a person. RAWDET-7 (bottom)
    overcomes these drawbacks.
  source: https://arxiv.org/pdf/2602.03760#page=2
  width: 1193
  height: 437
- label: Figure 2
  image: /images/publications/details/090-figure-2.webp
  alt: Benchmarking performance on RAWDET-7.
  caption: Benchmarking performance on RAWDET-7. Baselines such as logarithmic quantization and jointly learnt
    γ improve results across quantization levels and architectures.
  source: https://arxiv.org/pdf/2602.03760#page=5
  width: 543
  height: 309
bibtex: |
  @article{fatima2026rawdet7a90,
    title = {{RAWDet-7 A Multi-Scenario Benchmark for Object Detection and Description on Quantized RAW Images}},
    author = {M. Fatima and S. Agnihotri and K. V. Gandikota and M. Moeller and Margret Keuper},
    journal = {Transactions on Machine Learning Research},
    year = {2026},
    url = {https://openreview.net/forum?id=UHTJrsYieo}
  }
bibtex_file: /assets/bibtex/2026-rawdet-7-a-multi-scenario-benchmark-for-object-detection-and-description-on-quantized-raw-images.bib
abstract: |-
  Most vision models are trained on RGB images processed through ISP pipelines optimized for human perception, which can discard sensor-level information useful for machine reasoning. RAW images preserve unprocessed scene data, enabling models to leverage richer cues for both object detection and object description, capturing finegrained details, spatial relationships, and contextual information often lost in processed images. To support research in this domain, we introduce RAWDET-7, a large-scale dataset of ∼25k training and 7.6k test RAW images collected across diverse cameras, lighting conditions, and environments, densely annotated for seven object categories following MS-COCO and LVIS conventions. In addition, we provide object-level descriptions derived from the corresponding high-resolution sRGB images, facilitating the study of object-level information preservation under RAW image processing and low-bit quantization. The dataset allows evaluation under simulated 4-bit, 6-bit, and 8-bit quantization, reflecting realistic sensor constraints, and provides a benchmark for studying detection performance, description quality & detail, and generalization in low-bit RAW image processing. Dataset & code upon acceptance.
abstract_source: https://arxiv.org/pdf/2602.03760
content_status: complete
---
