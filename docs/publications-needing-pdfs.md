# Papers needing PDFs

Updated 2026-09-21. Six supplied PDFs have now been incorporated into the publication list and detail pages. **99 of 100 pages have their abstract and two captioned figures.**

## Still needed

| Suggested filename | Paper | Link | Material still needed |
| --- | --- | --- | --- |
| `031.pdf` | Assessing Domain Generalization of Semantic Segmenters with Synthetic Data | [Workshop page](https://sites.google.com/view/vdu-cvpr23) | Full PDF, original abstract, and two figures with captions. The current description and significance section describe the research scope only. |

## Supplied and completed

The files in `tmp/` used the checklist numbers without leading zeros; their identities were checked against the PDF title pages.

| Supplied file | Paper |
| --- | --- |
| `78.pdf` | mSOP-765k — A Benchmark For Multi-Modal Structured Output Predictions |
| `85.pdf` | Fréchet Inception Distance is Failing to Preserve Rank Consistency for Synthetic Out-of-Distribution Samples |
| `89.pdf` | Parameterized Adverse Lens Corruptions to Probe Model Robustness to Optical Tolerances |
| `95.pdf` | Position: We need theory-grounded explainability for abstract classification to quantify model bias |
| `96.pdf` | Combining Fine-Tuning and RAG for Structured Output Prediction on a Multimodal High Velocity Retail Dataset |
| `97.pdf` | Unsupervised Visual Concept Bottlenecks for Interpretable Bioimage Classification |

These pages now use abstracts and two figures from the supplied full papers. The publication list includes paper-derived teasers, and provisional summaries were revised against the findings. Verified title and author corrections also appear in the BibTeX citations. Source URLs, PDF checksums, and figure crops are recorded in `_data/publication-review.yaml`. The input `tmp/` directory is excluded from the Jekyll build.

## Shared preprints

The workshop entries “Robust Models are less Over-Confident” (ICML 2022) and “Data-Efficient Visual Concept Bottleneck Models” (CVPR 2025 workshop) use the linked public preprints also used by their later full-conference entries. Separate workshop PDFs are welcome if their abstract or figures differ.

## Filling the remaining gap

The page is stored in `_publications/`. Add the verified `abstract`, `abstract_source`, and two or three `figures` entries, then set `content_status: complete`. Put optimized figure images in `images/publications/details/`, add a teaser to `_data/sources.yaml`, and record provenance in `_data/publication-review.yaml`. Run `python auto-cite/auto-cite.py` after editing the source list.
