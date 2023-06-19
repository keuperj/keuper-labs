---
title: CVPR 23

---

# <i class="fas fa-microscope"></i>CVPR 23
<div style="width: 100%; display: table;">
<div style="display: table-row">
<div style="width: 400px; display: table-cell;">
<blockquote class="twitter-tweet"><p lang="en" dir="ltr"><a href="https://twitter.com/hashtag/CVPR2023?src=hash&amp;ref_src=twsrc%5Etfw">#CVPR2023</a> next Poster Session Up, next paper on shape vs Texture bias... <a href="https://t.co/ez3wfTs0bl">pic.twitter.com/ez3wfTs0bl</a></p>&mdash; Janis Keuper (@JanisKeuper) <a href="https://twitter.com/JanisKeuper/status/1670523223270916097?ref_src=twsrc%5Etfw">June 18, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>
<div style="display: table-cell;">
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">And another one... <a href="https://twitter.com/hashtag/CVPR?src=hash&amp;ref_src=twsrc%5Etfw">#CVPR</a>. All in the Same Poster Session, but different Workshops... <a href="https://t.co/TYfj4oTnz8">pic.twitter.com/TYfj4oTnz8</a></p>&mdash; Janis Keuper (@JanisKeuper) <a href="https://twitter.com/JanisKeuper/status/1670526924949684224?ref_src=twsrc%5Etfw">June 18, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>
</div>
</div>  
## Archival Workshop Paper (in CVPRw Proceedings)

### An Extended Study of Human-Like Behavior Under Adversarial Training
#### Paul Gavrikov, Janis Keuper, Margret Keuper
{%
  include figure.html
  image="images/cvpr23w_poster_v2_fontseingebettet.png"
  link="https://openaccess.thecvf.com/content/CVPR2023W/AML/papers/Gavrikov_An_Extended_Study_of_Human-Like_Behavior_Under_Adversarial_Training_CVPRW_2023_paper.pdf"
  width="1000px"
%}
Neural networks have a number of shortcomings. Amongst the severest ones is the sensitivity to distribution shifts which allows models to be easily fooled into wrong predictions by small perturbations to inputs that are often imperceivable to humans and do not have to carry semantic meaning. Adversarial training poses a partial solution to address this issue by training models on worst-case perturbations. Yet, recent work has also pointed out that the reasoning in neural networks is different from humans. Humans identify objects by shape, while neural nets mainly employ texture cues. Exemplarily, a model trained on photographs will likely fail to generalize to datasets containing sketches. Interestingly, it was also shown that adversarial training seems to favorably increase the shift toward shape bias. In this work, we revisit this observation and provide an extensive analysis of this effect on various architectures, the common L_2- and L_-training, and Transformer-based models. Further, we provide a possible explanation for this phenomenon from a frequency perspective.

{%
  include link.html
  link="https://openaccess.thecvf.com/content/CVPR2023W/AML/papers/Gavrikov_An_Extended_Study_of_Human-Like_Behavior_Under_Adversarial_Training_CVPRW_2023_paper.pdf"
  text="PDF"
  icon="fa-solid fa-file-pdf"
  flip=true
%}

### Happy People -- Image Synthesis as Black-Box Optimization Problem in the Discrete Latent Space of Deep Generative Models
#### Steffen Jung, Jan Christian Schwedhelm, Claudia Schillings, Margret Keuper
{%
  include figure.html
  image="images/CVPRw_Steffen1.png"
  link="https://arxiv.org/pdf/2306.06684"
  width="1000px"
%}
In recent years, optimization in the learned latent space of deep generative models has been successfully applied to black-box optimization problems such as drug design, image generation or neural architecture search. Existing models thereby leverage the ability of neural models to learn the data distribution from a limited amount of samples such that new samples from the distribution can be drawn. In this work, we propose a novel image generative approach that optimizes the generated sample with respect to a continuously quantifiable property. While we anticipate absolutely no practically meaningful application for the proposed framework, it is theoretically principled and allows to quickly propose samples at the mere boundary of the training data distribution. Specifically, we propose to use tree-based ensemble models as mathematical programs over the discrete latent space of vector quantized VAEs, which can be globally solved. Subsequent weighted retraining on these queries allows to induce a distribution shift. In lack of a practically relevant problem, we consider a visually appealing application: the generation of happily smiling faces (where the training distribution only contains less happy people) - and show the principled behavior of our approach in terms of improved FID and higher smile degree over baseline approaches.

{%
  include link.html
  link="https://arxiv.org/pdf/2306.06684"
  text="PDF"
  icon="fa-solid fa-file-pdf"
  flip=true
%}

## Non-Archival Workshop Paper

### Fine-Grained Product Classification on Leaflet Advertisements
#### Daniel Ladwig, Bianca Lamm, Janis Keuper
{%
  include figure.html
  image="images/fgvc10_poster.png"
  link="https://arxiv.org/pdf/2305.03706"
  width="1000px"
%}
In this paper, we describe a first publicly available fine-grained product recognition dataset based on leaflet images. Using advertisement leaflets, collected over several years from different European retailers, we provide a total of 41.6k manually annotated product images in 832 classes. Further, we investigate three different approaches for this fine-grained product classification task, Classification by Image, by Text, as well as by Image and Text. The approach "Classification by Text" uses the text extracted directly from the leaflet product images. We show, that the combination of image and text as input improves the classification of visual difficult to distinguish products. The final model leads to an accuracy of 96.4% with a Top-3 score of 99.2%. We release our code at cc.

{%
  include link.html
  link="https://arxiv.org/pdf/2305.03706"
  text="PDF"
  icon="fa-solid fa-file-pdf"
  flip=true
%}
{%
  include link.html
  link="https://github.com/ladwigd/Leaflet-Product-Classification"
  text="Source"
  icon="fa-brands fa-github"
  flip=true
%}

### Neural Architecture Design and Robustness: A Dataset
#### Steffen Jung1, Jovita Lukasik, Margret Keuper
{%
  include figure.html
  image="images/CVPw_Steffen_2.png"
  link="https://robustart.github.io/short_paper/33.pdf"
  width="1000px"
%}
Finding architectures that are (more) robust against perturbations requires expensive evaluations. We introduce a
database on neural architecture design and robustness evaluations to facilitate research in this direction. For this, we
evaluate a whole neural architecture search space (NASBench-201) on a range of common adversarial attacks and
corruption types. We further present three exemplary use
cases of this dataset, in which we (i) benchmark robustness
measurements based on Jacobian and Hessian matrices for
their robustness predictability, (ii) perform neural architecture search on robust accuracies, and (iii) provide an initial
analysis of how architectural design choices affect robustness. We find that carefully crafting the topology of a network can have substantial impact on its robustness, where
networks with the same parameter count range in mean adversarial robust accuracy from 20% − 41%. Code and data
is available at http://robustness.vision/.

{%
  include link.html
  link="https://robustart.github.io/short_paper/33.pdf"
  text="PDF"
  icon="fa-solid fa-file-pdf"
  flip=true
%}
{%
  include link.html
  link="https://steffen-jung.github.io/robustness/"
  text="Source"
  icon="fa-brands fa-github"
  flip=true
%}




