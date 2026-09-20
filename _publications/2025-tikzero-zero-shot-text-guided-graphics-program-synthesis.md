---
layout: publication
title: TikZero - Zero-Shot Text-Guided Graphics Program Synthesis
description: Turn a caption into editable graphics code without requiring aligned caption-program pairs for
  training. TikZero uses image representations as a bridge between text understanding and graphics-program
  synthesis, enabling precise, reusable figures.
why: A scientific figure is more useful when it can be edited as code instead of remaining a flat image. TikZero
  connects a written description to graphics-program generation without requiring paired descriptions and programs
  for training. It opens a route to reusable, editable illustrations from natural-language requests.
figures:
- label: Figure 1
  image: /images/publications/details/073-figure-1.webp
  alt: Scientific graphics synthesized as editable programs from text descriptions.
  caption: Qualitative comparison of our TikZero+ model (last two columns) and the end-to-end trained baseline
    AutomaTikZv2 (LLM; first two columns) on text-guided graphics program synthesis with TikZ. Our method generates
    outputs that more closely follow the given captions. Example program listings are in Appendix F.
  source: https://arxiv.org/pdf/2503.11509#page=1
  width: 533
  height: 463
- label: Figure 2
  image: /images/publications/details/073-figure-2.webp
  alt: Illustration of training data availability for graphics program synthesis.
  caption: Illustration of training data availability for graphics program synthesis. DeTikZify can leverage
    all graphics programs for training but lacks text guidance, while AutomaTikZ is constrained to the small
    intersection of captioned graphics programs, resulting in limited performance. Our approach, TikZero, trains
    independently on both graphics programs and captioned images, enabling more effective use of available
    data and yielding superior results.
  source: https://arxiv.org/pdf/2503.11509#page=2
  width: 546
  height: 370
bibtex: |
  @inproceedings{belouadi2025tikzerozeroshot73,
    title = {{TikZero - Zero-Shot Text-Guided Graphics Program Synthesis}},
    author = {Jonas Belouadi and Eddy Ilg and Margret Keuper and Hideki Tanaka and Masao Utiyama and Raj Dabre and Steffen Eger and Simone Paolo Ponzetto},
    booktitle = {Proceedings of the IEEE/CVF International Conference on Computer Vision (ICCV 2025)},
    year = {2025},
    url = {https://arxiv.org/abs/2503.11509}
  }
bibtex_file: /assets/bibtex/2025-tikzero-zero-shot-text-guided-graphics-program-synthesis.bib
abstract: |-
  Automatically synthesizing figures from text captions is a compelling capability. However, achieving high geometric precision and editability requires representing figures as graphics programs in languages like TikZ, and aligned training data (i.e., graphics programs with captions) remains scarce. Meanwhile, large amounts of unaligned graphics programs and captioned raster images are more readily available. We reconcile these disparate data sources by presenting TikZero, which decouples graphics program generation from text understanding by using image representations as an intermediary bridge. It enables independent training on graphics programs and captioned images and allows for zero-shot text-guided graphics program synthesis during inference. We show that our method substantially outperforms baselines that can only operate with caption-aligned graphics programs. Furthermore, when leveraging caption-aligned graphics programs as a complementary training signal, TikZero matches or exceeds the performance of much larger models, including commercial systems like GPT-4o. Our code, datasets, and select models are publicly available.
abstract_source: https://arxiv.org/pdf/2503.11509
content_status: complete
---
