---
title: Rapid Review
module_id: module-2
view: rapid-review
chapter_id: chapter-4
---

# Chapter 4: Documentation — TL;DR

## Purpose, accountability, and continuity of care

The **prehospital care report (PCR)** is the written or electronic record of each patient contact. Its primary purpose is continuity of care: receiving clinicians need the patient's initial condition, scene context, history, assessment findings, interventions and response, including information no longer obtainable after transport.

- **Clinical:** Baseline and repeated assessments establish trends; documenting performed and withheld interventions prevents unnecessary duplication.
- **Legal:** A factual, timely record supports accountability and may be the only reliable account available during later litigation or testimony.
- **Administrative:** PCRs support billing, reimbursement, operational statistics and resource planning.
- **Research, education and CQI:** Aggregated records help evaluate outcomes, identify training needs and assess adherence to protocols and standards of care.

Documentation is a shared clinical responsibility. Separate patient statements, witness accounts, direct observations, clinician impressions and actions. Identify who performed each intervention and when responsibility transferred. **Never delay urgent patient care to complete documentation.**

> [!NOTE]
> **ALS connection:** Early BLS findings guide advanced assessment and establish the baseline against which subsequent changes are evaluated. For example, an ECG adds electrical information but does not replace history, perfusion assessment or serial vital signs; an initially nondiagnostic tracing does not exclude acute coronary syndrome. In resuscitation review, accurate CPR, AED, airway, medication, rhythm and ROSC timelines connect BLS and ALS care. [NASEMSO 2022][model] · [AHA 2025][aha]

EMTs provide foundational assessment, BLS interventions, reassessment and communication; AEMTs generally add selected medications and vascular access, while paramedics have broader advanced airway, pharmacologic and electrical therapy capabilities. Actual authorization depends on state law, credentialing, training, local protocols and medical direction. Acquiring a tracing, interpreting it and administering advanced treatment are distinct tasks. [Scope model][scope]

## Documentation integrity and reporting formats

> [!IMPORTANT]
> **If it wasn't written down, it wasn't done; if it wasn't done, don't write it down.** The first rule emphasizes the need for a verifiable record, not that undocumented care literally never occurred.

Never invent vital signs, chart unperformed care, conceal errors or exaggerate acuity for reimbursement. Document omissions, errors and corrective actions truthfully. Falsification threatens patient safety and may result in licensure sanctions, criminal charges or liability under the False Claims Act when used for fraudulent reimbursement.

Paper PCRs combine fixed fields and narrative space. Electronic PCRs (ePCRs) improve legibility, retrieval, validation, data exchange and integration with dispatch, monitors and hospital records. Automatic imports still require verification of patient identity, timestamps, units and artifacts. An imported value or device-generated rhythm label does not establish that a qualified clinician assessed or interpreted it. If a measurement fails, document the failure and actual alternative findings rather than fabricating data. [NEMSIS][nemsis]

### Correcting reports

| Situation | Correction principle |
| --- | --- |
| Paper, before submission | Single line through error; initial and enter correction. Never erase or overwrite. |
| Paper, after submission | Preserve original entry; add corrected information, initials, date/time; notify recipients. |
| Electronic | Use authorized amendment workflow preserving the original, author and actual amendment time. If unavailable, the source describes correcting and resubmitting a printed copy. |

Attribute later information to its actual source; do not backdate or misrepresent it as an earlier observation. Promptly communicate clinically significant corrections to the receiving team rather than relying on an amendment alone. [Transfer-of-care statement][handoff]

## Standardized data and PCR structure

Standardized reporting supports comparisons across EMS systems. The historical DOT minimum data set includes chief complaint, AVPU, pulse, respiratory rate/effort, skin findings, demographics and incident/transfer timestamps; it lists blood pressure for patients older than 3 years and capillary refill for patients younger than 6 years. These historical age-specific entries **do not justify omitting clinically indicated assessments**. Modern systems capture additional data. Synchronize dispatch, clinician and monitor clocks; distinguish scene arrival from patient contact, and destination arrival from transfer of care. Identify estimated or witness-reported times.

### NEMSIS

The National EMS Information System standardizes EMS (`e`) and demographic (`d`) elements, using coded values and allowing regional extensions. In the source's historical framework:

| Field concept | Meaning |
| --- | --- |
| Mandatory | Actual data required; no nil, not values or pertinent negatives. |
| Required | Field must be completed; permitted null values or pertinent negatives may be accepted. |
| Not value / nil | Not applicable, not recorded, or blank as permitted. |
| Pertinent negative | Explicit qualifying information, such as an assessed finding absent or medication refused. |

> [!CAUTION]
> The textbook's v3.4-era framework is historical; the source identifies NEMSIS 3.5.0 and 3.5.1 resources. Exact field requirements, permissible qualifiers and procedure-attempt entries depend on the applicable version and local implementation. An empty field is not proof of an absent finding. [NEMSIS data dictionaries][nemsis]

### Core PCR content

- **Run data and demographics:** Incident and unit identifiers, crew identities/levels, location, patient identifiers, pertinent demographic information, response/transport modes, delays and event times.
- **History and narrative:** Chief complaint in the patient's own words (attribute witness information), onset/progression, mechanism, SAMPLE, pertinent positives and negatives, scene findings, examination, working impression and limitations.
- **Vital signs:** Ideally at least two complete sets, with exact times, position, relevant measurement conditions and reassessment findings. Never invent missing measurements.
- **Treatment and disposition:** Chronological interventions, times, responsible clinicians, responses, complications, refusals, destination, final acuity and transfer of responsibility.

## Clinical narrative and working impressions

**Symptoms** are subjective experiences; **signs** are objective observations or measurements. A **working impression** is a clinically supported field assessment, not a confirmed diagnosis or merely a repeated symptom. Record the most acute problem as the primary impression, not necessarily the initial complaint; include relevant secondary impressions.

Pertinent negatives describe relevant findings specifically assessed or denied. Attribute sensitive or conflicting information to its source and avoid speculation. A suspected opioid overdose may be supported by respiratory depression and improvement after naloxone, but this response does not prove opioids were the sole cause. Naloxone antagonizes opioid receptors; respiratory depression may recur or reversal may be incomplete, so document ongoing ventilation and reassessment. Authorization varies, and naloxone is not exclusively ALS. [NASEMSO][model] · [Scope model][scope]

### Narrative formats

A chronological narrative tells the story directly; structured formats reduce omissions. Choose the agency-approved format.

| Format | Components and emphasis |
| --- | --- |
| **SOAP** | Subjective (reported symptoms), Objective (exam findings), Assessment (supported impression), Plan (care and transport). SOAPIE adds Intervention and Evaluation. |
| **CHART** | Chief complaint, History (SAMPLE), Assessment (exam and reassessment), Rx (treatment), Transport (mode and changes). DCHART adds Dispatch reason. |
| **CHEATED** | Chief complaint, History, Exam, Assessment, Treatment, Evaluation, Disposition. Explicitly separates findings, reasoning, actions and response. |

Use simple, accurate language and accepted agency abbreviations; spell out ambiguous terms (e.g., PE may mean physical examination or pulmonary embolism). Avoid radio codes, invented abbreviations and uncertain terminology.

> [!WARNING]
> **Medication notation:** Use `daily` rather than `QD`, `mL` rather than `cc`, and explicit medication names, routes and frequencies. Use a leading zero (`0.5`) and omit trailing zeros for whole-number doses (`5`, not `5.0`). Clarify uncertain orders rather than guessing. [ISMP 2024][ismp]

## Standardized clinical data collection

The NASEMSO 2022 universal documentation guideline organizes data for continuity of care and performance improvement. Local and billing requirements may exceed it. Record incident data even for canceled responses or no patient contact as applicable.

- **SAMPLE:** Symptoms, Allergies, Medications, Past medical/surgical history, Last oral intake, Events leading to EMS activation. Also record barriers to care, substance-use indicators and relevant weight estimates.
- **Condition-specific data:** Stroke — last known well (not necessarily symptom discovery), source, neurologic findings and stroke score; trauma — mechanism, injury findings, field-triage criteria and destination alerts; cardiac arrest — witness status, bystander CPR/AED, initial rhythm, resuscitation events, ROSC and outcome.
- **Targeted exams:** Capacity-related observations, neurologic and spinal/extremity findings, trauma exam findings and ECG acquisition when applicable. A structured capacity assessment is not itself a legal definition of capacity.

| Vital-sign grouping in source | Content |
| --- | --- |
| Routine | Time, BP, HR, SpO2, RR, AVPU, pain score |
| Initial | Routine + glucose, GCS, temperature |
| Full | Initial + pulse rhythm, respiratory effort, EtCO2 and ECG rhythm when applicable/available |

Document time, whether obtained before care, and pertinent qualifiers (e.g., GCS components, pain scale type, temperature method). These reporting groupings are not universal instructions to obtain every measurement regardless of clinical context or scope. [NASEMSO][model]

## Treatment, monitoring, and reassessment

For medications, record actual drug, dose/unit, route, time, clinician, prior administration, response and complications. For procedures, record time, clinician, equipment/site, attempts, success, response and complications. Distinguish preparation, attempted procedures and successful completion. Document relevant contraindications, refusals, inability to complete, medical-direction denial and medication allergy/already taken as applicable; use the appropriate software qualifiers.

| Response | Documentation meaning |
| --- | --- |
| Improved | Intended effect achieved; adverse effects may still coexist. |
| Unchanged | Intended benefit not achieved without deterioration. |
| Worse | Condition worsened; this does not by itself establish an error. |
| Not applicable | No direct therapeutic effect expected (e.g., diagnostic acquisition). |

The source lists procedures with no expected response under both unchanged and not applicable; follow the applicable data dictionary. Describe actual findings in addition to coding the response. For instance, pain relief after nitroglycerin may coexist with hypotension: document both and notify the responsible clinician. Temporal association does not prove causation. [NEMSIS][nemsis] · [NASEMSO][model]

### ALS connection: advanced monitoring and intervention records

| Advanced care | Key documentation relationships |
| --- | --- |
| ECG | Symptoms/onset, acquisition time, artifact, qualified interpretation, actual pulse and perfusion. |
| Capnography | EtCO2, waveform quality, ventilation method, time and clinical trends. |
| IV/IO and medications | Each actual attempt, site, success, administered drug/fluid, settings and response. Access does not equal administration. |
| Advanced airway | Device/size, attempts, actual confirmation, ventilation and complications. |
| Electrical therapy | Responsible clinician, rhythm, time, intervention, pulse/perfusion response and complications; distinguish AED events. |

Pulse oximetry estimates hemoglobin oxygen saturation, not ventilation or tissue perfusion. Capnography measures exhaled CO2 and is influenced by ventilation, pulmonary blood flow and sampling. Waveform capnography with clinical assessment supports endotracheal tube confirmation in adult cardiac arrest; neither monitoring number alone justifies terminating resuscitation. SpO2 below 94% in the textbook's falsification example is **not a universal oxygen-treatment threshold**. Clinical context, measurement reliability and authorized protocols govern oxygen use. [FDA][fda] · [AHA 2025][aha] · [NASEMSO][model]

**Trend example:** A patient with abdominal pain and rigidity has BP falling from 88/64 to 82/62 mmHg, HR rising from 128 to 134 bpm, RR rising from 24 to 26/min, weakening radial pulses and deteriorating responsiveness. These findings suggest worsening perfusion/shock despite initial SpO2 of 96% on room air. A later oximeter error is not a saturation value. Report deterioration, reassess airway/breathing/perfusion, provide authorized supportive care and facilitate timely transport and additional resources as indicated. No definitive cause or subsequent treatment is established by the source case.

## Confidentiality, distribution, and transfer of care

HIPAA (1996), state law and agency policy govern release of confidential PCR information. Covered providers may share information for treatment without separate patient authorization; legally permitted billing, court and law-enforcement disclosures have their own conditions. A police request alone does not authorize release of an entire PCR. Use approved secure systems, never personal accounts or social media for identifiable patient records. [HHS treatment][hipaa-treatment] · [HHS law enforcement][hipaa-police]

The receiving facility receives a report, the agency retains the original, and medical oversight/QI may receive an authorized copy. Ideally complete the full PCR and obtain a transfer-of-care signature; if immediate return to service or system limitations prevent this, use an approved abbreviated **drop report**, then complete and submit the full PCR with it.

Verbal handoff accompanies the record: identity, complaint/onset, relevant history, initial and latest findings, treatments, response, concerns and ongoing care needs. Supplemental ALS details include airway, access, medications, ECG and infusion/monitoring needs. Record who assumed responsibility and when; arrival alone does not establish transfer. [Joint transfer-of-care statement][handoff]

## Refusal of care or transport

Adults with decision-making capacity may refuse care. Establish an informed decision rather than merely obtaining a signature. Capacity is decision-specific and can fluctuate; orientation alone is insufficient, and intoxication, psychiatric illness or an unwise choice does not automatically establish incapacity.

The ACEP 2025 expert information paper describes four abilities:

- **Understand** the condition, proposed care, risks and benefits.
- **Appreciate** how those risks apply personally.
- **Reason** about alternatives and consequences.
- **Express a choice** consistently.

Assess as much as permitted without compromising scene safety; consider potential reversible impairment such as hypoxia, hypoglycemia, head injury or shock. Explain recommendations, specific risks (including death when relevant), alternatives and consequences of delay. Use teach-back and communication accommodations where needed; consult medical direction and seek additional resources according to local policy.

Document findings, limitations, actual capacity-related responses, care accepted/refused, risks explained, consultations, alternatives and return precautions. Obtain patient and witness signatures according to policy; document and seek a witness if the patient refuses to sign. Encourage appropriate evaluation and explain when to call EMS again. Alternative travel is not necessarily safe for high-risk patients.

> [!CAUTION]
> A waiver is not a substitute for assessment or informed refusal. Neither ALS presence nor a signature proves capacity. Involuntary transport and other escalation require applicable legal authority and local procedures. [ACEP refusal information paper 2025][refusal]

**Clinical example:** After a collision, a witness describes a driver slumped over the wheel; the driver denies loss of consciousness, has a forehead bruise and refuses further examination and vital signs. Preserve both accounts and the incomplete assessment; do not document a normal complete exam or unsupported GCS. Possible head injury warrants explaining risks and appropriate escalation under local policy.

## Special reporting and incident documentation

During a multiple-casualty incident (MCI), use the local triage tag/identifier to connect basic complaint, vital signs, interventions, reassessments, priority changes and destination with the correct patient. Complete later PCR documentation according to the incident plan; avoid delaying lifesaving BLS care for charting or advanced procedures.

Special reports may be required for suspected abuse, suspicious burns, gunshot wounds, infectious exposures, crew injury, EMS vehicle crashes, patient harm due to care omissions/errors or equipment failures, and alleged responder substance use. Requirements vary by jurisdiction. Document factual, objective observations, involved persons/agencies, times and actions; submit promptly through authorized channels and retain copies per policy. A separate incident report does not replace the PCR. Report adverse events to the responsible clinician promptly and preserve relevant device records without assigning unsupported blame or causation. [NASEMSO][model]

## Medical necessity and reimbursement

Medical necessity requires factual documentation of the patient's condition, mental status, findings, actual care/response and why the transport or service level was needed. Clinical scope, treatment decisions and payer coverage are distinct; never perform an unnecessary procedure or exaggerate findings to justify a claim.

| Payer | Medical-necessity principle |
| --- | --- |
| Commercial | Source describes the prudent layperson standard: whether an average person would reasonably anticipate serious health impairment without emergency care. Coverage varies. |
| Medicare | Other transport is contraindicated by the patient's condition; both ambulance transport and the billed level of service must be medically necessary. Current source correction: 42 CFR § 410.40(e)(1), not (d). |
| Medicaid | State-specific definitions and documentation requirements apply. |

Document why a lesser transport mode would be unsafe, the monitoring/care required and what was actually delivered. Paramedic presence alone does not establish the reimbursable level. [42 CFR § 410.40][cfr] · [CMS ambulance guidance][cms]

The historical CMS **Emergency Triage, Treat, and Transport (ET3)** pilot explored reimbursement for alternative destinations and treatment in place, including telehealth, to reduce unnecessary ED use. It ended early on **December 31, 2023**; the original planned five-year period is not an active national benefit or authorization. Local programs may operate under different rules. [CMS ET3][et3]

## References

References are inherited from the supplied chapter, not independently verified here. National guidelines, models and expert statements do not replace local authorization, agency policy or applicable law.

[scope]: https://www.ems.gov/assets/National_EMS_Scope_of_Practice_Model_2019_Change_Notices_1_and-_2_August_2021.pdf
[model]: https://nasemso.org/content.aspx?module_id=701974&page_id=22
[nemsis]: https://nemsis.org/technical-resources/version-3/version-3-data-dictionaries/
[aha]: https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/adult-advanced-life-support
[fda]: https://www.fda.gov/medical-devices/products-and-medical-procedures/pulse-oximeters
[refusal]: https://pmc.ncbi.nlm.nih.gov/articles/PMC11927591/
[handoff]: https://naemsp.org/position-statement/transfer-of-patient-care-between-ems-providers-and-receiving-facilities/
[ismp]: https://www.ismp.org/system/files/resources/2024-04/ISMP_ErrorProneAbbreviation_List.pdf
[hipaa-treatment]: https://www.hhs.gov/hipaa/for-professionals/faq/when-an-ambulance-delivers-a-patient-can-it-report-its-treatment-without-authorization/index.html
[hipaa-police]: https://www.hhs.gov/hipaa/for-professionals/faq/what-does-the-privacy-rule-allow-covered-entities-to-disclose-to-law-enforcement-officials/index.html
[cfr]: https://www.law.cornell.edu/cfr/text/42/410.40
[cms]: https://www.cms.gov/training-education/medicare-learning-networkr-mln/compliance/medicare-provider-compliance-tips/ambulance-services
[et3]: https://www.cms.gov/priorities/innovation/innovation-models/et3/faq