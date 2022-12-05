---
title: NeurIPS 22

---

# <i class="fas fa-microscope"></i>NeurIPS 22
<div style="position: absolute; left: 400px; top: 10px; width: 500px; height: 500px;">
<!-- Twitter embeds from https://publish.twitter.com/ -->
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">It’s <a href="https://twitter.com/NeurIPSConf?ref_src=twsrc%5Etfw">@NeurIPSConf</a> time! <a href="https://t.co/8xrKYQ6hYf">pic.twitter.com/8xrKYQ6hYf</a></p>&mdash; Paul @NeurIPS2022 (@PaulGavrikov) <a href="https://twitter.com/PaulGavrikov/status/1597250371482660865?ref_src=twsrc%5Etfw">November 28, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
</div>
<div style="position: absolute; left: 900px; top: 10px; width: 500px; height: 540px;">
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">It’s a wrap! Time to go home after many fruitful discussions at <a href="https://twitter.com/hashtag/NeurIPS2022?src=hash&amp;ref_src=twsrc%5Etfw">#NeurIPS2022</a> <br>Feel free to check out our papers: Robustness &amp; Overcofidence: <a href="https://t.co/2ecMJ0iYzk">https://t.co/2ecMJ0iYzk</a><br>Medical Imaging CNNs: <a href="https://t.co/3kPeREIvUa">https://t.co/3kPeREIvUa</a> <a href="https://t.co/t1XUwSxQWT">pic.twitter.com/t1XUwSxQWT</a></p>&mdash; Paul @NeurIPS2022 (@PaulGavrikov) <a href="https://twitter.com/PaulGavrikov/status/1599445513090531330?ref_src=twsrc%5Etfw">December 4, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
</div

## Full Paper

### Trading off Image Quality for Robustness is not Necessary with Regularized Deterministic Autoencoders
#### Amrutha Saseendran, Kathrin Skubch, Margret Keuper
{%
  include figure.html
  image="images/neurips22_poster2.jpeg"
  link="https://pure.mpg.de/rest/items/item_3473164/component/file_3473165/content"
  width="1000px"
%}
The susceptibility of Variational Autoencoders (VAEs) to adversarial attacks indicates the necessity to evaluate the robustness of the learned representations along
with the generation performance. The vulnerability of VAEs has been attributed
to the limitations associated with their variational formulation. Deterministic autoencoders could overcome the practical limitations associated with VAEs and
offer a promising alternative for image generation applications. In this work, we
propose an adversarially robust deterministic autoencoder with superior performance in terms of both generation and robustness of the learned representations.
We introduce a regularization scheme to incorporate adversarially perturbed data
points to the training pipeline without increasing the computational complexity or compromising the generation fidelity when compared to the robust VAEs
by leveraging a loss based on the two-point Kolmogorov–Smirnov test between
representations. We conduct extensive experimental studies on popular image
benchmark datasets to quantify the robustness of the proposed approach based
on the adversarial attacks targeted at VAEs. Our empirical findings show that the
proposed method achieves significant performance in both robustness and fidelity
when compared to the robust VAE models.

{%
  include link.html
  link="https://pure.mpg.de/rest/items/item_3473164/component/file_3473165/content"
  text="PDF"
  icon="fa-solid fa-file-pdf"
  flip=true
%}
{%
  include link.html
  link="https://github.com/boschresearch/Robust_GMM_DAE"
  text="Source"
  icon="fa-brands fa-github"
  flip=true
%}


### Robust Models are less Over-Confident 
#### Julia Grabinski, Paul Gavrikov, Janis Keuper, Margret Keuper
{%
  include figure.html
  image="images/neurips22_poster1.jpeg"
  link="https://pure.mpg.de/rest/items/item_3473164/component/file_3473165/content"
  width="1000px"
%}
Despite the success of convolutional neural networks (CNNs) in many academic
benchmarks for computer vision tasks, their application in the real-world is still
facing fundamental challenges. One of these open problems is the inherent lack of
robustness, unveiled by the striking effectiveness of adversarial attacks. Current
attack methods are able to manipulate the network’s prediction by adding specific
but small amounts of noise to the input. In turn, adversarial training (AT) aims to
achieve robustness against such attacks and ideally a better model generalization
ability by including adversarial samples in the trainingset. However, an in-depth
analysis of the resulting robust models beyond adversarial robustness is still pending. In this paper, we empirically analyze a variety of adversarially trained models
that achieve high robust accuracies when facing state-of-the-art attacks and we
show that AT has an interesting side-effect: it leads to models that are significantly
less overconfident with their decisions, even on clean data than non-robust models.
Further, our analysis of robust models shows that not only AT but also the model’s
building blocks (like activation functions and pooling) have a strong influence on
the models’ prediction confidences.
{%
  include link.html
  link="https://arxiv.org/pdf/2210.05938.pdf"
  text="PDF"
  icon="fa-solid fa-file-pdf"
  flip=true
%}


## Workshop Paper

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Had a great time at the <a href="https://twitter.com/hashtag/medneurips?src=hash&amp;ref_src=twsrc%5Etfw">#medneurips</a> workshop today presenting „Does Medical Imaging learn different Convolution Filters?“ <a href="https://t.co/3kPeREZyWa">https://t.co/3kPeREZyWa</a> <a href="https://t.co/5rdHmszYHT">pic.twitter.com/5rdHmszYHT</a></p>&mdash; Paul @NeurIPS2022 (@PaulGavrikov) <a href="https://twitter.com/PaulGavrikov/status/1598783692238749697?ref_src=twsrc%5Etfw">December 2, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

### MedNeurIPS Workshop: Does Medical Imaging learn different Convolution Filters?
#### Paul Gavrikov, Janis Keuper
{%
  include figure.html
  image="images/neurips22_poster3.jpeg"
  link="https://arxiv.org/pdf/2210.13799"
  width="1000px"
%}
Recent work has investigated the distributions of learned convolution filters through a large-scale study containing hundreds of heterogeneous image models. Surprisingly, on average, the distributions only show minor drifts in comparisons of various studied dimensions including the learned task, image domain, or dataset. However, among the studied image domains, medical imaging models appeared to show significant outliers through "spikey" distributions, and, therefore, learn clusters of highly specific filters different from other domains. Following this observation, we study the collected medical imaging models in more detail. We show that instead of fundamental differences, the outliers are due to specific processing in some architectures. Quite the contrary, for standardized architectures, we find that models trained on medical data do not significantly differ in their filter distributions from similar architectures trained on data from other domains. Our conclusions reinforce previous hypotheses stating that pre-training of imaging models can be done with any kind of diverse image data.

{%
  include link.html
  link="https://arxiv.org/pdf/2210.13799"
  text="PDF"
  icon="fa-solid fa-file-pdf"
  flip=true
%}



