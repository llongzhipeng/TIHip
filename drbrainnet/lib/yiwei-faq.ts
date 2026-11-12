export type ProductQuestion={question:string;answer:string;link:string;linkLabel:string};
// Shared by visible product answers and JSON-LD.
export const productQuestions:Record<string,ProductQuestion[]>={
  "quickmind-vr": [
    {
      "question": "What certificates does QuickMind currently hold?",
      "answer": "QuickMind has a documented Thai FDA listing for its cognitive assessment and rehabilitation system. The registration library also includes a Hong Kong MDACS listing for Virtual Brain V1. Review the registered system, software version and applicable market in each record.",
      "link": "/about/global-registrations?solution=quickmind-vr",
      "linkLabel": "Review QuickMind registrations"
    },
    {
      "question": "Does cognitive screening diagnose dementia?",
      "answer": "A screening result can help identify people who need further assessment. It is not a standalone dementia diagnosis. Clinical history, examination and appropriate investigations remain part of the diagnostic pathway.",
      "link": "/evidence/quickmind-vr",
      "linkLabel": "Read component-specific evidence"
    }
  ],
  "dr-brain": [
    {
      "question": "What is QuickMind MRI used for?",
      "answer": "QuickMind MRI provides quantitative analysis of brain MRI, including regional brain measurements and white-matter findings, to support specialist assessment of dementia, Alzheimer’s disease and cerebrovascular disease. Earlier publications may use the Dr.Brain™ name.",
      "link": "/technology/imaging-ai",
      "linkLabel": "Explore imaging AI"
    },
    {
      "question": "How does QuickMind MRI support clinical assessment?",
      "answer": "Quantitative measurements and structured reports help specialists review brain structures alongside the original MRI images, clinical history and other investigations. The outputs support a comprehensive clinical assessment.",
      "link": "/products/dr-brain#overview",
      "linkLabel": "Explore product features"
    },
    {
      "question": "What clinical evidence is available for QuickMind MRI?",
      "answer": "The collection includes research on quantitative structural MRI, regional morphology and white-matter analysis, together with studies combining MRI and cognitive assessment.",
      "link": "/evidence/dr-brain",
      "linkLabel": "Read product research"
    },
    {
      "question": "Where can I view a sample brain health report?",
      "answer": "The English AI Brain Health & Longevity Report shows example regional MRI findings and source notes for clinician-led consultations. It is a sample reporting format, not an individual medical diagnosis.",
      "link": "/reports/brain-health",
      "linkLabel": "View the English sample report"
    }
  ],
  "realnow": [
    {
      "question": "What does RealNow™ analyze?",
      "answer": "RealNow™ provides AI-assisted CT, vascular and perfusion imaging analysis for stroke-imaging review. The applicable modules depend on the imaging workflow and documented product scope.",
      "link": "/technology/imaging-ai",
      "linkLabel": "Explore imaging workflows"
    },
    {
      "question": "Does RealNow™ replace a radiologist or treating clinician?",
      "answer": "The displayed imaging outputs support clinical review. Qualified professionals must interpret the findings with the original images and clinical context.",
      "link": "/care-settings",
      "linkLabel": "Explore application scenarios"
    },
    {
      "question": "How should I interpret RealNow™ research and registrations?",
      "answer": "Research findings apply to the studied module, dataset and population. Registration documents should be reviewed by product, module and market; a document for one scope does not establish clearance for every module in every country.",
      "link": "/evidence/realnow",
      "linkLabel": "Review RealNow research"
    },
    {
      "question": "How can an institution discuss availability?",
      "answer": "Contact YIWEI Medical with the intended country, clinical setting and imaging workflow to discuss the relevant solution and market documentation.",
      "link": "/contact",
      "linkLabel": "Contact YIWEI Medical"
    }
  ],
  "autismshield": [
    {
      "question": "What is LumiBrain ASD?",
      "answer": "LumiBrain ASD combines immersive VR scenarios and eye-tracking technology for autism screening and rehabilitation. It supports more personalized autism rehabilitation training plans, helping families work toward their children’s developmental goals.",
      "link": "/technology/digital-rehabilitation",
      "linkLabel": "Explore rehabilitation technology"
    },
    {
      "question": "How can I review market documentation?",
      "answer": "Review the product-specific registration records and their stated scope. Availability and intended use require confirmation for the relevant country and product version.",
      "link": "/about/global-registrations?solution=autismshield",
      "linkLabel": "Review market documentation"
    }
  ],
  "forcus": [
    {
      "question": "What is LumiBrain ADHD?",
      "answer": "LumiBrain ADHD combines immersive VR scenarios and eye-tracking technology for ADHD screening and rehabilitation. It supports more personalized ADHD rehabilitation training plans, helping families work toward their children’s developmental goals.",
      "link": "/technology/digital-rehabilitation",
      "linkLabel": "Explore rehabilitation technology"
    },
    {
      "question": "Can this be regarded as formal diagnosis?",
      "answer": "This is an initial ADHD assessment. A formal diagnosis requires a clinical examination. Clinical history, examination and appropriate investigations remain part of the diagnostic pathway.",
      "link": "/contact",
      "linkLabel": "Discuss the intended care pathway"
    }
  ]
};
