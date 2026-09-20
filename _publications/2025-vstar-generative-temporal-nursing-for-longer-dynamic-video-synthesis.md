---
layout: publication
title: VSTAR Generative Temporal Nursing for Longer Dynamic Video Synthesis
description: Longer generated videos need meaningful change over time. VSTAR combines a sequence of text prompts
  with temporal-attention regularization to guide pretrained video models toward more dynamic, evolving scenes.
why: A longer generated video is not necessarily a more interesting one if little changes over time. VSTAR
  uses a sequence of descriptions and changes to temporal attention to guide how a scene evolves. It extends
  the usefulness of pretrained video generators for prompts that describe a developing sequence of events.
figures:
- label: Figure 1
  image: /images/publications/details/057-figure-1.webp
  alt: Generated video frames comparing temporal evolution with and without VSTAR.
  caption: Our VSTAR can generate a 64-frame video with dynamic visual evolution in a single pass. Images are
    subsampled from the video. Note that the first column is a GIF, best viewed in Acrobat Reader.
  source: https://arxiv.org/pdf/2403.13501#page=2
  width: 1193
  height: 436
- label: Figure 2
  image: /images/publications/details/057-figure-2.webp
  alt: Method overview.
  caption: 'Method overview. Our VSTAR consists of two strategies: Video Synopsis Prompting (left) and Temporal
    Attention Regularization (right).'
  source: https://arxiv.org/pdf/2403.13501#page=4
  width: 896
  height: 419
bibtex: |
  @inproceedings{li2025vstargenerativetemporal57,
    title = {{VSTAR Generative Temporal Nursing for Longer Dynamic Video Synthesis}},
    author = {Yumeng Li and William Beluch and Margret Keuper and Dan Zhang and Anna Khoreva},
    booktitle = {International Conference on Learning Representations},
    year = {2025},
    url = {https://yumengli007.github.io/VSTAR/}
  }
bibtex_file: /assets/bibtex/2025-vstar-generative-temporal-nursing-for-longer-dynamic-video-synthesis.bib
abstract: |-
  Despite tremendous progress in the field of text-to-video (T2V) synthesis, opensourced T2V diffusion models struggle to generate longer videos with dynamically varying and evolving content. They tend to synthesize quasi-static videos, ignoring the necessary visual change-over-time implied in the text prompt. At the same time, scaling these models to enable longer, more dynamic video synthesis often remains computationally intractable. To address this challenge, we introduce the concept of Generative Temporal Nursing (GTN), where we aim to alter the generative process on the fly during inference to improve control over the temporal dynamics and enable generation of longer videos. We propose a method for GTN, dubbed VSTAR, which consists of two key ingredients: 1) Video Synopsis Prompting (VSP) - automatic generation of a video synopsis based on the original single prompt leveraging LLMs, which gives accurate textual guidance to different visual states of longer videos, and 2) Temporal Attention Regularization (TAR) - a regularization technique to refine the temporal attention units of the pre-trained T2V diffusion models, which enables control over the video dynamics. We experimentally showcase the superiority of the proposed approach in generating longer, visually appealing videos over existing open-sourced T2V models. We additionally analyze the temporal attention maps realized with and without VSTAR, demonstrating the importance of applying our method to mitigate neglect of the desired visual change over time.
abstract_source: https://arxiv.org/pdf/2403.13501
content_status: complete
---
