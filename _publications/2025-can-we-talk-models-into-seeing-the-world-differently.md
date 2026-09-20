---
layout: publication
title: Can we talk models into seeing the world differently?
description: Can instructions change how a model sees an object? We study texture and shape preferences in
  vision-language models, revealing both the influence of multimodal training and the limits of steering perception
  with language.
why: Instructions can influence what a vision-language model notices, but that influence has limits. This study
  tests whether words can steer models toward object shape or surface texture. The results clarify both the
  usefulness and the limitations of prompting as a tool for controlling visual behavior.
figures:
- label: Figure 1
  image: /images/publications/details/058-figure-1.webp
  alt: Vision-language model preferences under texture and shape steering.
  caption: Language can be used to steer visual cue preferences (biases) in vision language models (VLMs).
    Here we illustrate the (visual) texture/shape bias (Geirhos et al., 2019) of some exemplary VLMs, and highlight
    the steerability of InternVL-Chat 1.1 (Chen et al., 2024) through the processing of vision and text inputs
    (prompts).
  source: https://arxiv.org/pdf/2403.09193#page=1
  width: 896
  height: 216
- label: Figure 2
  image: /images/publications/details/058-figure-2.webp
  alt: Most VLMs prioritize shapes over texture cues.
  caption: Most VLMs prioritize shapes over texture cues. We measure the shape bias on the cue-conflict dataset
    (Geirhos et al., 2019). For reference, we also provide measurements on an ImageNet-trained ResNet-50 (He
    et al., 2015), zero-shot classification with CLIP ViT-L/14 (Radford et al., 2021), and a human average
    (over 10 subjects (Geirhos et al., 2019)). The results in table format are shown in Appendix B.
  source: https://arxiv.org/pdf/2403.09193#page=5
  width: 894
  height: 477
bibtex: |
  @inproceedings{gavrikov2025canwetalk58,
    title = {{Can we talk models into seeing the world differently?}},
    author = {Paul Gavrikov and Jovita Lukasik and Steffen Jung and Robert Geirhos and Muhammad Jehanzeb Mirza and Margret Keuper and Janis Keuper},
    booktitle = {International Conference on Learning Representations},
    year = {2025},
    url = {https://tinyurl.com/bdnmxph9}
  }
bibtex_file: /assets/bibtex/2025-can-we-talk-models-into-seeing-the-world-differently.bib
abstract: |-
  Unlike traditional vision-only models, vision language models (VLMs) offer an intuitive way to access visual content through language prompting by combining a large language model (LLM) with a vision encoder. However, both the LLM and the vision encoder come with their own set of biases, cue preferences, and shortcuts, which have been rigorously studied in uni-modal models. A timely question is how such (potentially misaligned) biases and cue preferences behave under multi-modal fusion in VLMs. As a first step towards a better understanding, we investigate a particularly well-studied vision-only bias - the texture vs. shape bias and the dominance of local over global information. As expected, we find that VLMs inherit this bias to some extent from their vision encoders. Surprisingly, the multi-modality alone proves to have important effects on the model behavior, i.e., the joint training and the language querying change the way visual cues are processed. While this direct impact of language-informed training on a model’s visual perception is intriguing, it raises further questions on our ability to actively steer a model’s output so that its prediction is based on particular visual cues of the user’s choice. Interestingly, VLMs have an inherent tendency to recognize objects based on shape information, which is different from what a plain vision encoder would do. Further active steering towards shape-based classifications through language prompts is however limited. In contrast, active VLM steering towards texture-based decisions through simple natural language prompts is often more successful.
abstract_source: https://arxiv.org/pdf/2403.09193
content_status: complete
---
