---
layout: publication
title: Extracting horizon surfaces from 3D seismic data using deep learning
description: Picking geological horizons becomes more manageable when it is treated as a 3D segmentation problem.
  Our network learns from sparse interpreter annotations and can be refined interactively to trace complex
  reflection surfaces in seismic volumes.
why: Mapping underground rock layers usually requires experts to trace reflections through enormous three-dimensional
  scans. This method learns from a limited set of their markings and lets them refine difficult areas interactively.
  It can reduce repetitive interpretation work while keeping the geologist involved in judging the result.
figures:
- label: Figure 1
  image: /images/publications/details/002-figure-1.webp
  alt: 3D convolutional network mapping seismic input and sparse horizon labels to horizon predictions.
  caption: Simplified overview of the 3D CNN used in this work. The data flow is from left to right during
    the forward pass as indicated by the black arrows. The boxes represent multichannel 4D feature maps (here
    drawn in 3D for simplicity) color coded by layer type. In this example, the input data h are interpreted
    along their central crossline and the mask m contains ones at the location of the picks along the crossline
    slice and zeros elsewhere. For simplicity, the output hypercube is represented as a histogram counting
    the number of voxels associated with each horizon. The exact architecture of the CNN is described in Table
    1.
  source: https://hal.science/hal-02560737/document#page=5
  width: 701
  height: 366
- label: Figure 2
  image: /images/publications/details/002-figure-2.webp
  alt: Preparation of the labels for training.
  caption: Preparation of the labels for training. The left image shows the picks performed on a 2D section
    for the different horizons that we want to map. The images on the right are three of the probability slices
    obtained by convolving in the vertical dimension the picks of individual horizons with a 1D Gaussian kernel.
    The final labels are created by concatenating every probability slices along an extra dimension. The last
    slice of the labels corresponds to the “other” class, and its values are chosen such that the total distribution
    sums to one.
  source: https://hal.science/hal-02560737/document#page=6
  width: 1153
  height: 282
bibtex: |
  @article{tschannen2020extractinghorizonsurfaces2,
    title = {{Extracting horizon surfaces from 3D seismic data using deep learning}},
    author = {Valentin Tschannen and Matthias Delescluse and Norman Ettrich and Janis Keuper},
    journal = {Geophysics},
    year = {2020},
    url = {https://library.seg.org/doi/pdf/10.1190/geo2019-0569.1},
    doi = {10.1190/geo2019-0569.1}
  }
bibtex_file: /assets/bibtex/2020-extracting-horizon-surfaces-from-3d-seismic-data-using-deep-learning.bib
abstract: |-
  Extracting horizon surfaces from key reflections in a seismic image is an important step of the interpretation process. Interpreting a reflection surface in a geologically complex area is a difficult and time-consuming task, and it requires an understanding of the 3D subsurface geometry. Common methods to help automate the process are based on tracking waveforms in a local window around manual picks. Those approaches often fail when the wavelet character lacks lateral continuity or when reflections are truncated by faults. We have formulated horizon picking as a multiclass segmentation problem and solved it by supervised training of a 3D convolutional neural network. We design an efficient architecture to analyze the data over multiple scales while keeping memory and computational needs to a practical level. To allow for uncertainties in the exact location of the reflections, we use a probabilistic formulation to express the horizons position. By using a masked loss function, we give interpreters flexibility when picking the training data. Our method allows experts to interactively improve the results of the picking by fine training the network in the more complex areas. We also determine how our algorithm can be used to extend horizons to the prestack domain by following reflections across offsets planes, even in the presence of residual moveout. We validate our approach on two field data sets and show that it yields accurate results on nontrivial reflectivity while being trained from a workable amount of manually picked data. Initial training of the network takes approximately 1 h, and the fine training and prediction on a large seismic volume take a minute at most.
abstract_source: https://hal.science/hal-02560737/document
content_status: complete
---
