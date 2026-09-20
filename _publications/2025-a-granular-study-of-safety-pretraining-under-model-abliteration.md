---
layout: publication
title: A Granular Study of Safety Pretraining under Model Abliteration
description: Do safety-training gains survive edits to a model's internal activations? This checkpoint-level
  study tests refusal behavior before and after abliteration and examines how evaluation judges affect the
  conclusions.
why: Safety training should be tested against the ways an openly available model can actually be modified.
  This work examines a simple kind of internal edit and measures refusal behavior across training checkpoints.
  It also checks how the choice of evaluator changes the conclusion, making the assessment itself easier to
  scrutinize.
figures:
- label: Figure 1
  image: /images/publications/details/077-figure-1.webp
  alt: Evaluation pipeline comparing original and abliterated language-model responses.
  caption: Refusal–evaluation pipeline. A prompt (harmful or harmless) is sent to a response LLM (a Safety
    Pretraining checkpoint or its abliterated counterpart), which returns a response. An external refusal judge
    (for example, ChatGPT5) reads the prompt–response pair and outputs a binary label (REFUSAL or NON-REFUSAL).
    We repeat this over 100 prompts (50 harmful and 50 harmless) for 10 base models and their abliterated versions,
    giving 20 systems in total, and we aggregate per-judge refusal rates. A 10-prompt human-labeled subset
    is used to validate judge fidelity. The pipeline makes the effect of granular Safety Pretraining choices
    and inference-time abliteration directly measurable.
  source: https://arxiv.org/pdf/2510.02768#page=4
  width: 872
  height: 379
- label: Figure 2
  image: /images/publications/details/077-figure-2.webp
  alt: Refusal outcomes per model before and after abliteration, as judged by ChatGPT5.
  caption: Refusal outcomes per model before and after abliteration, as judged by ChatGPT5. Bars show counts
    out of 50 per prompt type (Harmful and Harmless) for REFUSED and NOT-REFUSED. Abliteration mainly turns
    harmful refusals into non-refusals, while harmless refusals stay low. Models with rephrase plus metatags
    and refusals degrade least. The suffix “-ALB” marks abliterated models.
  source: https://arxiv.org/pdf/2510.02768#page=5
  width: 1193
  height: 352
bibtex: |
  @inproceedings{agnihotri2025agranularstudy77,
    title = {{A Granular Study of Safety Pretraining under Model Abliteration}},
    author = {Shashank Agnihotri and Jonas Jakubassa and Priyam Dey and Sachin Goyal and Bernt Schiele and Venkatesh Babu Radhakrishnan and Margret Keuper},
    booktitle = {NeurIPS 25 Lock-LLM  Workshop},
    year = {2025},
    url = {https://arxiv.org/pdf/2510.02768?}
  }
bibtex_file: /assets/bibtex/2025-a-granular-study-of-safety-pretraining-under-model-abliteration.bib
abstract: |-
  Open-weight LLMs can be modified at inference time with simple activation edits, which raises a practical question for safety: do common safety interventions like refusal training or metatag training survive such edits? We study model abliteration, a lightweight projection technique designed to remove refusal-sensitive directions, and conduct a controlled evaluation across a granular sequence of Safety Pretraining checkpoints for SmolLM2-1.7B, alongside widely used open baselines. For each of 20 systems, original and abliterated, we issue 100 prompts with balanced harmful and harmless cases, classify responses as REFUSAL or NON-REFUSAL using multiple judges, and validate judge fidelity on a small human-labeled subset. We also probe whether models can identify refusal in their own outputs. Our study produces a checkpoint-level characterization of which data-centric safety components remain robust under abliteration, quantifies how judge selection influences evaluation outcomes, and outlines a practical protocol for integrating inference-time edits into safety assessments. Code: https://github.com/shashankskagnihotri/safety_pretraining.
abstract_source: https://arxiv.org/pdf/2510.02768
content_status: complete
---
