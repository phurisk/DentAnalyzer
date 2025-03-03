# DentAnalyzer: Web Application for Predicting Car Damage

## Authors
Mr. Phuris Kruacharee¹, Mr. Thanaphorn Kanking², Dr. Thanapong Intharah³

## Overview

![overview](https://github.com/user-attachments/assets/2b4abf3a-7545-408d-a55c-005a28e9d251)

DentAnalyzer streamlines vehicle damage assessment by automating damage evaluation and repair cost estimation. Traditional methods rely on expert analysis, which is slow and prone to errors. However, training datasets for AI models are often limited due to poor lighting, low resolution, and incorrect angles. 

To solve this, a system using Blender generates realistic vehicle image datasets from 3D models. These images train the AI model, enabling DentAnalyzer to provide accurate damage assessment and cost estimates, reducing delays and improving claim processing efficiency.

## Abstract
Currently, the assessment of vehicle damage involves evaluating the extent of damage and estimating the initial repair costs. This process is often slow because it requires multiple steps of examination by expert personnel, using numerous photos of the damaged vehicles. This results in long processing times, potential errors, and biases in the evaluation.

To address these issues, a web application has been developed to predict vehicle damage. However, the training datasets for these models are limited and hard to obtain, as vehicle image datasets often have inappropriate angles, poor lighting conditions, low resolution, or noise such as excessive reflections, making it difficult to identify vehicle damage accurately.

To solve these problems, a system using Blender to create realistic vehicle image datasets from 3D vehicle models has been developed. This dataset is used to train the model, which is then integrated into a web application capable of predicting the cost and extent of damage. The AI employs deep learning to understand different levels of damage and provides output in the form of damage assessment and repair cost estimation.

The main benefit of developing this web application for damage assessment is that it can reduce delays and biases in evaluating vehicle accident damage. It can assess which parts are damaged, the extent of the damage, and estimate the repair costs. Users can share the assessment data and results with insurance companies or relevant parties, enabling faster processing.

For example, users can provide photos of the damaged parts, damage levels, and estimated costs to insurance companies, allowing for quicker compensation processing. Additionally, the assessment history and other details can also be recorded for future reference or analysis.

## Project Recognition
Our project has received funding support and has successfully advanced to the final round of the **National Software Contest (NSC) Thailand 2024**.

Additionally, we have been honored with the **Thailand New Gen Inventors Award 2025 (I-NEW GEN AWARD 2025)** in the **Higher Education Level - Tourism and Creative Economy** category, receiving a **Silver Medal**.

### Certificates
- ![ภาพ](https://github.com/user-attachments/assets/0035f5b8-3d66-4566-be2f-62e4a129383c)
- ![ภาพ](https://github.com/user-attachments/assets/ff8405a0-185c-41e6-b101-9a0dd7445830)
- ![ภาพ](https://github.com/user-attachments/assets/eeb4fe4a-098f-42be-ab83-a2b66346db85)

## Related Research
DentAnalyzer integrates synthetic image generation and machine learning for damage assessment. Below are key research studies that provide insights into our approach.

### Research on Synthetic Image Generation
- **[CrashCar101: Procedural Generation for Damage Assessment](https://example.com)**
  - Explores the use of synthetic data for AI training, allowing for a diverse, accurate, and large-scale dataset without human dependency.
- **[TEXTure: Text-Guided Texturing of 3D Shapes](https://example.com)**
  - A model designed for applying and transferring textures from images to 3D models based on textual descriptions, enhancing the realism of generated surfaces.

### Research on 3D Model Datasets
- **[Unsupervised Generation of a Viewpoint Annotated Dataset](https://example.com)**
  - Focuses on automatically generating viewpoint-labeled datasets, aiding object detection and orientation estimation models.
- **[ShapeNet: An Information-Rich 3D Model Repository](https://example.com)**
  - A large-scale repository of 3D models with category labels, widely used for AI training in 3D shape recognition.
- **[A Large-Scale Car Dataset for Fine-Grained Categorization and Verification](https://example.com)**
  - Contains high-quality car images with fine-grained labels, enabling AI models to distinguish between similar vehicle types.
- **[CarDD: A New Dataset for Vision-Based Car Damage Detection](https://example.com)**
  - Provides a dataset specifically designed for training deep learning models to detect and classify car damage.

### Research on Car Damage Detection
- **[Car Damage Detection and Classification](https://example.com)**
  - Presents an AI model trained to classify different types of car damage based on image input, enhancing the accuracy of automated damage assessment.

## BibTeX Citation
```bibtex
@unpublished{phuris2024dentanalyzer,
  author    = {Phuris Kruacharee and Thanaphorn Kanking},
  title     = {DentAnalyzer: Web Application for Predicting Car Damage from a Single Image and Generating Realistic Car Images for AI Training},
  year      = {2025},
}
```

---

This README provides a structured overview of the **DentAnalyzer** project, making it easier to understand its objectives, methodology, and impact.
