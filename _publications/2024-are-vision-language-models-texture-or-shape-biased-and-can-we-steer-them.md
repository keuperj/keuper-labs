---
layout: publication
title: Are Vision Language Models Texture or Shape Biased and Can We Steer Them?
description: Language can change which visual cues a multimodal model follows. We measure texture and shape
  preferences across vision-language models and explore how prompting steers their decisions.
why: A model that understands both pictures and language may change its visual decision when the instructions
  change. This paper measures how such models balance object shape against texture and tests whether prompts
  can shift that preference. It makes the influence of everyday wording on visual reasoning measurable.
figures:
- label: Figure 1
  image: /images/publications/details/046-figure-1.webp
  alt: Texture and shape preferences under visual and language steering.
  caption: Unlike many unimodal models, vision language models (VLMs) prefer shape over texture for object
    recognition, but not to the same extent as humans. Further, we find that the (visual) texture/shape bias
    [1] can be steered through language alone, albeit not to the extent as through vision. Here we visualize
    the texture/shape bias of some exemplary VLMs, and highlight the steerability of InternVL-Chat 1.1 [2].
    This paper does not show details on vision steering for space reasons. The reader can assume that the shape
    bias can be steered by image modification to almost either end - at impact on accuracy.
  source: https://raw.githubusercontent.com/EliSchwartz/MMFM24/main/52.pdf#page=1
  width: 543
  height: 135
- label: Figure 2
  image: /images/publications/details/046-figure-2.webp
  alt: Most VLMs are slightly shape-biased but some models show differences when asked to describe an image
    compared to VQA.
  caption: Most VLMs are slightly shape-biased but some models show differences when asked to describe an image
    compared to VQA. We measure the shape bias on the cue-conflict dataset [1]. For reference, we also provide
    measurements on ResNet-50 [13], zero-shot classification (CLIP ViT- L/14 [9]), and a human average (over
    10 subjects [1]).
  source: https://raw.githubusercontent.com/EliSchwartz/MMFM24/main/52.pdf#page=2
  width: 543
  height: 301
bibtex: |
  @inproceedings{gavrikov2024arevisionlanguage46,
    title = {{Are Vision Language Models Texture or Shape Biased and Can We Steer Them?}},
    author = {Paul Gavrikov and Jovita Lukasik and Steffen Jung and Robert Geirhos and Bianca Lamm and Jehanzeb Mirza and Margret Keuper and Janis Keuper},
    booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition Workshops (CVPRw 2024)},
    year = {2024},
    url = {https://github.com/EliSchwartz/MMFM24/blob/main/52.pdf}
  }
bibtex_file: /assets/bibtex/2024-are-vision-language-models-texture-or-shape-biased-and-can-we-steer-them.bib
abstract: |-
  Vision language models (VLMs) have drastically changed the computer vision model landscape in only a few years, opening an exciting array of new applications from zero-shot image classification, over to image captioning, and visual question answering. Unlike pure vision models, they offer an intuitive way to access visual content through language prompting. The wide applicability of such models encourages us to ask whether they also align with human vision — specifically, how far they adopt human-induced visual biases through multimodal fusion, or whether they simply inherit biases from pure vision models. One important visual bias is the texture vs. shape bias, or the dominance of local over global information. In this paper, we study this bias in a wide range of popular VLMs. Interestingly, we find that VLMs are often more shape-biased than their vision encoders, indicating that visual biases are modulated to some extent through text in multimodal models. If text does indeed influence visual biases, this suggests that we may be able to steer visual biases not just through visual input but also through language: a hypothesis that we confirm through extensive experiments. For instance, we are able to steer shape bias from as low as 49% to as high as 72% through prompting alone. For now, the strong human bias towards shape (96%) remains out of reach for all tested VLMs.
abstract_source: https://raw.githubusercontent.com/EliSchwartz/MMFM24/main/52.pdf
content_status: complete
---
