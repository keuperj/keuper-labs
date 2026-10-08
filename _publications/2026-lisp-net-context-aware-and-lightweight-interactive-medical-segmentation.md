---
layout: publication
title: 'LISP-Net: Context-Aware and Lightweight Interactive Medical Segmentation'
description: LISP-Net propagates a single densely annotated 2D slice through a medical scan using a lightweight
  convolutional model and feedback to limit structural drift. It runs with low memory use and improves segmentation
  under simulated interactive refinement, while nnInteractive remains stronger in the single-prompt setting.
why: Medical image annotation needs models that can follow the user’s chosen boundaries across a scan without retraining
  for every new target. LISP-Net uses a densely labeled reference slice to guide nearby slices, with automatic feedback
  and optional user corrections to limit drift. Its compact convolutional design supports low-memory inference and
  a browser research prototype. The reported advantage over nnInteractive depends on simulated corrections using
  ground-truth masks; nnInteractive performs better when only one prompt is provided.
figures:
- label: Figure 1
  image: /images/publications/details/102-figure-1.webp
  alt: Comparison of supervised, prompt-conditioned, and interactive LISP-Net segmentation, showing a dense prompt
    propagated across slices with feedback.
  caption: Overview of segmentation paradigms. (Upper left) Classic supervised ML trains a fixed model per task
    and fails on unseen tasks, requiring expensive retraining for each new anatomical target. (Lower left) Standard
    prompt-conditioned models use prompts to define new tasks without retraining but offer no correction mechanism,
    so a single misprediction propagates uncorrected. (Right) LISP-Net combines interactive prompt conditioning
    with a single dense 2D prompt. Within-volume visual correspondence propagates the user’s annotation with strong
    alignment to the user’s intent and high accuracy over medium-range offsets. Structural drift is handled automatically
    by SSF or manually by the user, both of which refresh the prompt context. Physically, LISP-Net derives its segmentation
    target from the visual content of the dense prompt rather than from a fixed anatomical prior learned during
    training, which allows it to transfer to out-of-distribution data without retraining.
  source: https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=11666858#page=2
  width: 1814
  height: 788
- label: Figure 2
  image: /images/publications/details/102-figure-2.webp
  alt: LISP-Net dual-encoder architecture with a heavy prompt encoder, lightweight query stream, SE attention, additive
    fusion, and decoder skip connections.
  caption: Detailed architectural overview of the asymmetrical LISP-Net. A 2D query image and a 2D prompt (reference
    image paired with its full segmentation mask) enter two parallel five-stage encoding streams. The heavy Prompt
    Encoder extracts structural and contrast semantics from the offset prompt slice, while a lightweight bottleneck
    keeps the lowest-resolution stage parameter-efficient. At each encoder stage, prompt features are refined by
    a convolution and recalibrated by an SE channel-attention block that suppresses uninformative channels and emphasizes
    salient boundaries, then fused into the Query Encoder stream through element-wise addition, which avoids the
    memory cost of large feature-concatenation arrays. Skip connections from the Query Encoder carry this SE-gated
    prompt information into a streamlined decoder that upsamples via bilinear interpolation plus convolution (avoiding
    the checkerboard artifacts of transposed convolutions) and refines boundaries. A final 1 × 1 convolution with
    a sigmoid activation produces a dense probability map, thresholded at 0.5 to yield the binary segmentation of
    the query slice.
  source: https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=11666858#page=6
  width: 1836
  height: 886
bibtex_file: /assets/bibtex/2026-lisp-net-context-aware-and-lightweight-interactive-medical-segmentation.bib
content_status: complete
abstract: 'Precise medical image segmentation is essential to modern clinical workflows and biomedical research.
  However, current automated models often lack the flexibility, generalizability, and clinician control required
  to adapt to out-of-distribution data or novel classes without computationally expensive retraining. Furthermore,
  existing interactive segmentation tools are frequently computationally heavy and, relying on sparse cues that
  provide incomplete boundary and shape information, tend to default to learned anatomical priors rather than following
  the clinician’s visual intent. To address these limitations, we introduce LISP-Net (Lightweight In-Context Slice
  Propagator Network): a lightweight, purely convolutional framework for interactive volumetric medical image segmentation
  that uses a single dense 2D prompt to derive structural guidance from the individual patient. It features an asymmetrical
  dual-encoder dedicating most capacity to extracting structural and contrast semantics from the prompt while keeping
  the query pathway lightweight, and multi-resolution prompt conditioning via additive fusion at each encoder stage.
  An adaptive tiling strategy handles arbitrary resolutions, and a Self-monitoring Slice Feedback (SSF) mechanism
  mitigates structural drift during 3D propagation. Across 2D and 3D benchmarks, LISP-Net improved over UniverSeg
  by 23.73% at mid-range spatial offsets and over nnInteractive by 9.63% in volumetric Dice under simulated (oracle)
  interactive refinement, while nnInteractive led in the single-prompt setting (volumetric Dice 0.680 vs. 0.660).
  LISP-Net achieves these results with peak GPU memory of 164–780 MB and per-slice latency of approximately 14 ms
  on GPU and 150 ms on CPU. LISP-Net appears to show closer alignment with the user’s annotation intent rather than
  defaulting to learned anatomical priors, and a browser-based research prototype demonstrates the feasibility of
  client-side deployment.'
abstract_source: https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=11666858#page=1
bibtex: |
  @ARTICLE{11666858,
    author = {Machauer, Paul and Reisert, Marco and Keuper, Janis},
    journal = {IEEE Access},
    title = {LISP-Net: Context-Aware and Lightweight Interactive Medical Segmentation},
    year = {2026},
    volume = {14},
    number = {},
    pages = {133004-133026},
    keywords = {Modeling;Dies;Training;Magnetic resonance imaging;Propagation;Tiles;Design methodology;Biomedical imaging;Liver;Computers;Convolutional neural networks;image segmentation;prompt-conditioned segmentation;interactive medical segmentation;volumetric propagation;zero-shot generalization},
    doi = {10.1109/ACCESS.2026.3727306}
  }
---
