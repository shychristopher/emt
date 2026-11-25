---
markmap:
  colorFreezeLevel: 2
  initialExpandLevel: 2
  layout: tree
  theme: cards
  wrapWidth: 340
---

# Chapter 4: Documentation
- **1. Purpose, Functions & Quality Standards**
  - **Key Terms:**
    - *prehospital care report (PCR)* (also patient care report, run report, trip sheet)
    - *triage tag*
    - *minimum data set*
    - *pertinent negatives*
  - **Three Major Goals of Documentation:**
    - **1. Continuity of Care:** Detailed, concise, accurate record of assessment findings, condition trends, treatments delivered, and patient response for receiving staff
    - **2. Legal Protection:** May be the sole record available months or years later in civil or criminal litigation
    - **3. Reimbursement:** Substantiates proper payment from insurers, Medicare, and Medicaid
  - **Quality & Accountability Standards:**
    - Must be accurate, true to events, legible, and limited to acceptable objective and pertinent subjective data
    - Poor PCRs (unchecked boxes, misspellings, illegible writing) undermine perceived care quality; plaintiff's attorney reviews the PCR first in lawsuits
  - **Five Core Functions of the PCR:**
    - **1. Continuity of Medical Care:** Conveys scene environment inaccessible to ED staff; establishes mental status & vital-sign baselines; prevents treatment duplication; captures bystander/family/awake-patient info
    - **2. Administrative Uses:** Becomes part of permanent hospital record; drives billing/insurance claims; tracks operational stats (average response time, critical trauma scene time, annual cardiac arrests)
    - **3. Legal Document:** Supports court testimony and lawsuit defense; document objective/subjective findings, arrival status, treatments + times, condition changes at ED, and care/refusal discussions
    - **4. Educational & Research Uses:** Evaluates intervention effectiveness, cost/timeliness efficiency, and training/curriculum gaps
    - **5. Evaluation & CQI:** Audits call quality, guides continuing/remedial education, and verifies protocol/standard-of-care adherence

- **2. PCR Formats, Minimum Data Set & Core Sections**
  - **Two Golden Rules of Documentation:**
    - *"If it wasn’t written down, it wasn’t done"* (cannot prove care in ED or court)
    - *"If it wasn’t done, don’t write it down"* (falsifying records)
  - **PCR Formats:**
    - **Written PCR:** Check boxes + write-on lines for vitals/entries + dedicated narrative box; sections for crew, history, meds, allergies, impressions, IV/intubation/cardiac arrest logs
    - **Computerized Direct Data Entry & Electronic Clipboards:** Laptops, tablets, smartphone apps, pen-based handwriting-to-text clipboards; advantages include legibility, storage/retrieval, EMR/CAD/monitor integration, real-time hospital upload, spell/abbreviation checks, missing-field prompts, and QA/QI support
  - **U.S. DOT Minimum Data Set & Synchronous Timekeeping:**
    - *Purpose:* Standardizes core national PCR data for quality comparison and faster adoption of best practices
    - **8 Patient Information Elements:** (1) Chief complaint, (2) level of responsiveness (AVPU), (3) BP for patients `>3 years` old, (4) skin perfusion/capillary refill for patients `<6 years` old, (5) skin color, temperature, and condition, (6) pulse rate, (7) respiratory rate and effort, (8) demographics (age, sex, race, weight)
    - **6 Administrative Information Elements:** (1) Time incident reported, (2) time unit notified, (3) time arrived at patient, (4) time unit left scene, (5) time unit arrived at destination, (6) time of transfer of care
    - **Synchronous Timekeeping:** All dispatch, crew, and device clocks must agree to validate clinical timelines (e.g., cardiac arrest intervals)
  - **Core PCR Sections:**
    - **Administrative Info:** 6 minimum data set times + unit/run number, crew names/certifications, dispatched address
    - **Patient Demographics:** Legal name, age, sex, race, DOB, address, insurance/billing, location found, prior care
    - **Vital Signs:** Record **at least two complete sets**, noting patient position (supine, sitting, standing) and exact times
    - **Patient Narrative:** Chief complaint in quotes (*"My leg hurts"*); history/MOI; objective signs vs. pertinent subjective symptoms; **pertinent negatives** (expected symptoms denied by patient); physical exam in order performed; scene clues; attribute sensitive info to source; reassessment times/findings; simple direct style (no radio codes or nonstandard abbreviations)
    - **Treatment:** Chronological treatments, exact times, patient response (improved, deteriorated, unchanged), and any refused treatments

- **3. NASEMSO Universal Documentation Guideline (2022) & NEMSIS**
  - **Overview & Inclusion:**
    - Aliases: NEMSIS, Documentation; supports continuity of care and continuous performance improvement (CPI) for all patient encounters guided by clinical guidelines
  - **Incident Demographics:**
    - Mandatory NEMSIS timestamps: **unit notified by dispatch** and **unit back in service** (plus en route, on scene, at patient, left scene, at destination)
    - Service requested (911 vs. interfacility), unit role (transport vs. non-transport), EMD complaint, crew ID/level/role, incident location type (CARES), response mode, and response/scene delays
  - **Patient History, SAMPLE & Condition Datasets:**
    - Demographics, allergies, med/surgical history, current meds, alcohol/drug indicators, care barriers, weight in kg / length-based tape
    - **SAMPLE in ePCR:** **S**ymptoms (onset, primary, associated, last known well), **A**llergies, **M**edications, **P**ast history, **L**ast oral intake, **E**vents
    - **Condition-Specific Datasets:** Stroke (last known well, stroke scale, neuro exam); Trauma (ICD-10 mechanism/intent, 2022 ACS-COT triage criteria, safety equipment, trauma alert time); Cardiac Arrest (Utstein/CARES: etiology, witnessed, prior CPR/AED, first rhythm, ROSC, arrest/discontinuation times)
  - **Impressions, Disposition, Exams & Vitals:**
    - **Primary Impression [single choice]:** Most acute problem (not necessarily first problem); supported by signs/symptoms (e.g., code naloxone-reversed overdose as opiate/heroin overdose)
    - **Disposition:** Initial vs. final acuity, disposition, transport method/mode, destination facility
    - **Capacity Assessment Group:** Barriers, alcohol/drug indicators, GCS, AVPU, mental status, neuro exam
    - **Tiered Vitals Sets:**
      - *Routine Vitals:* Date/time, BP, HR, SpO2, RR, AVPU, pain scale
      - *Initial Vitals:* Routine + blood glucose + GCS + temperature
      - *Full Vitals:* Initial + pulse rhythm + respiratory effort + EtCO2 + EKG rhythm
  - **Medications, Procedures & NEMSIS Architecture:**
    - **Medications:** Date/time, prior-to-arrival flag (e.g., **324 mg** aspirin per 911 with PN *"medication already taken"*), route, dose/units, response (*Improved*, *Unchanged*, *Worse*), complications, crew ID/level
    - **Procedures:** Date/time, equipment size, attempts (always **"1"** per separate timestamped attempt), success, complications, response (*Not applicable*, *Improved*, *Unchanged*, *Worse*), vascular access site
    - **NEMSIS v3.4 (sole standard since Aug 2021):** **Mandatory** fields (real data required; no nil/NV/PN) vs. **Required** fields (allows nil, Not Values [*not applicable*, *not recorded*], or Pertinent Negatives [up to 11]); parent datasets **Demographic (`d`)** and **EMS (`e`)** (e.g., `eVitals.06`)

- **4. Alternative Narrative Methods & Medical Abbreviations**
  - **Narrative Mnemonics:**
    - **Medical Narrative:** Chronological story format (intuitive, but easy to omit details)
    - **SOAP (and SOAPIE):** **S**ubjective (patient symptoms) • **O**bjective (exam signs) • **A**ssessment (field impression) • **P**lan (care/transport) *(+ **I**ntervention, **E**valuation in SOAPIE)*
    - **CHART / DCHART:** *(**D**ispatch)* • **C**hief complaint • **H**istory (SAMPLE) • **A**ssessment (all exams) • **R**x (treatment) • **T**ransport (en route changes + mode)
    - **CHEATED:** **C**hief complaint • **H**istory • **E**xam • **A**ssessment • **T**reatment • **E**valuation (ongoing) • **D**isposition (handoff)
  - **Medical Abbreviations & Terminology Safety:**
    - **Core Rules:** Never invent abbreviations; writing terms out is preferred because accepted abbreviations can have dual meanings (e.g., `PE` = physical exam or pulmonary embolism); follow agency-approved lists and verify spelling/meaning
    - **Timing & Frequency:** `a ¯` (before), `c ¯` (with), `p ¯` (after), `s ¯` (without), `QD` (once daily), `BID` (2x/day), `TID` (3x/day), `QID` (4x/day), `q` (every), `prn` (as needed), `stat` (immediately), `PTA` (prior to arrival), `a.c.` (before eating), `pc` (after eating)
    - **Routes & Dosing:** `PO` (orally), `SL` (sublingual), `IV` (intravenous), `IVP` (IV push), `IO` (intraosseous), `IM` (intramuscular), `IN` (intranasal), `SC`/`SQ` (subcutaneous), `gtt(s)` (drops), `KVO`/`TKO` (keep vein open), `LPM` (liters/min)
    - **Exam, Anatomy & Descriptors:** `A/O` (alert & oriented), `LOC` (level of consciousness), `PERRLA`, `EOMI`, `BBS` (bilateral breath sounds), `JVD`, `MAE × 4`, `WNL` (within normal limits), `W/D` (warm & dry), `NAD` (no apparent distress), `RUQ`/`RLQ`/`LUQ`/`LLQ` (abdominal quadrants), `RUL`/`RML`/`RLL`/`LUL`/`LLL` (lung lobes)
    - **Conditions & Dispositions:** `AMI`/`STEMI` (myocardial infarction), `CHF`, `COPD`, `CVA`/`TIA` (stroke/transient ischemic attack), `DKA`/`DM` (diabetes), `HTN`, `PE` (pulmonary embolism), `SOB`, `CP`, `GSW`, `MVC`, `AF`/`VF`/`VT`, `AMA` (against medical advice), `DNR`, `NTR` (no transport—refusal), `TOT` (turned over to), `VO` (verbal order)

- **5. Legal Concerns in Documentation**
  - **Confidentiality & Copy Distribution:**
    - Protected under **HIPAA (1996)**; never show PCR or discuss contents with unauthorized parties
    - **4 Legal Disclosures:** Continuing health care provider, police criminal investigation, third-party billing, court subpoena
    - **Copy Allocation:** Copy at ED/receiving facility (or abbreviated "drop" report if immediate return to service), original at EMS agency, optional copy to medical oversight/QI
  - **Refusal of Treatment (8-Step Documentation Protocol):**
    - (1) Assess within scene safety → (2) re-persuade & verify rational capacity (nuanced evaluation of alcohol/drugs/illness/suicide) → (3) explain risks/consequences & confirm understanding → (4) consult medical direction & involve family → (5) document findings, explanations (including death), refused items, and A&O capacity → (6) obtain signed refusal form + witness signature/address (waivers never replace thorough objective documentation) → (7) if patient refuses to sign, get witness signature verifying refusal → (8) suggest alternative evaluation (taxi/family), state EMS will return anytime, and give worsening warning signs
  - **Falsification & Error Correction:**
    - **Zero Tolerance:** Never fabricate vitals, hide omissions, or claim oxygen given when `SpO2 < 94%` was missed; inflating care for **Medicare**/insurance violates the **False Claims Act**
    - **Paper Before Submission:** Single horizontal line through error + initials + correct info (never erase or write over)
    - **Paper After Submission:** Single horizontal line (preferably different ink color) + correction note + initials + **date and time** + notify original recipients
    - **ePCR:** Use timestamped amendment feature (or print, correct per paper rules, and resubmit)
  - **Drop Reports, MCIs & Special Reports:**
    - **MCIs:** Use **triage tags** for initial vital/treatment capture; follow local MCI PCR rules
    - **Special Reports:** Required for child/elder abuse, suspicious burns, GSWs, infectious exposures, EMS crew injury, or state triggers (patient harm from EMS error, EMS crash with injury/death, crew hospitalization, equipment failure, alleged crew substance use); keep objective, descriptive, and retain agency copy

- **6. Medical Necessity, Reimbursement & ET3 Model**
  - **Medical Necessity Standards by Payer:**
    - **Commercial Insurance (Prudent Layperson Standard):** Would a person of average health/medical knowledge expect serious health impairment without emergency care (e.g., 2-week toothache = non-emergency vs. multisystem MVC = emergency)?
    - **Medicare (42 CFR § 410.40(d)):** Covers ambulance transport **only** when other transport modes (private car, wheelchair van, taxi, bus) are contraindicated, and condition necessitates **both** ambulance transport and the level of service provided
    - **Medicaid:** State-administered; criteria vary by state (e.g., continuous oxygen requirement or state condition lists)
  - **ET3 Payment Model (Emergency Treat, Triage, and Transport):**
    - Announced by **CMS/HHS (2019)**; launched **January 5, 2020** (5-year voluntary evaluation)
    - **Goals & Pathways:** Reimburse scene triage + transport to alternate (non-ED) destinations and non-transport care (on-scene clinician or telehealth) to reduce ED crowding and patient costs
    - **5 Documentation Rules for Medical Necessity:** Truthfully record (1) dispatched/reported complaint, (2) condition on scene, (3) all treatments/services + patient response, (4) objective exam findings (appearance/mental status), and (5) factual details proving medical necessity for ambulance transport