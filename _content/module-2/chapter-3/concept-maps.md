---
title: Concept Maps
module_id: module-2
view: concept-maps
chapter_id: chapter-3
---

# Chapter 3: Medical, Legal, and Ethical Issues

## Chapter overview

### Professional accountability across emergency care

```mermaid
flowchart TD
    N01["State law"]
    N02["Scope of practice"]
    N03["National EMS models"]
    N04["Medical direction"]
    N05["Authorized EMS care"]
    N06["Standard of care"]
    N07["Patient autonomy"]
    N08["Professional ethics"]
    N09["Patient welfare"]
    N10["Clinical reasoning"]
    N11["Patient care needs"]
    N12["Continuity of care"]
    N13["Qualified handoff"]
    N14["Documentation"]
    N15["Professional accountability"]
    N16["Legal liability"]
    N17["Confidentiality"]
    N18["Treatment limitations"]

    N01 -->|establishes boundaries of| N02
    N03 -->|inform but do not independently authorize| N02
    N04 -->|governs clinical implementation of| N05
    N02 -->|limits| N05
    N06 -->|establishes expected performance of| N05
    N07 -->|governs consent to| N05
    N08 -->|prioritizes| N09
    N09 -->|guides| N10
    N10 -->|identifies| N11
    N11 -->|guide selection of| N05
    N05 -->|requires| N12
    N12 -->|depends on| N13
    N14 -->|supports| N13
    N14 -->|supports evaluation of| N15
    N15 -->|includes| N16
    N17 -->|governs disclosure of| N14
    N07 -->|may establish| N18
    N18 -->|constrain| N05
    N04 -->|helps resolve uncertainty about| N18
```

## Professional authority and oversight

### Scope, competence and individual authorization

```mermaid
flowchart TD
    N01["National EMS Scope of Practice Model"]
    N02["EMR, EMT, AEMT and paramedic levels"]
    N03["National EMS Education Standards"]
    N04["Education"]
    N05["Clinical competence"]
    N06["Certification"]
    N07["State licensure"]
    N08["Jurisdictional scope"]
    N09["Individual authorization"]
    N10["Agency credentialing"]
    N11["Agency policy and medical direction"]
    N12["Patient care needs"]
    N13["Clinical capabilities"]
    N14["EMT scope"]
    N15["BLS assessment, airway support, bleeding control, CPR and AED"]
    N16["Transport and selected medications"]
    N17["AEMT scope"]
    N18["Selected vascular access, fluids, medications and airway skills"]
    N19["Paramedic scope"]
    N20["ECG interpretation, electrical therapy, pharmacology and airway care"]
    N21["Suturing lacerations"]
    N22["Device operation and ECG electrode placement"]
    N23["ALS clinician request"]

    N01 -->|describes| N02
    N03 -->|establish entry-level expectations for| N04
    N04 -->|develops| N05
    N06 -->|verifies specified| N05
    N07 -->|grants legal authority within| N08
    N08 -->|limits| N09
    N10 -->|specifies system-level| N09
    N11 -->|may further restrict| N09
    N05 -->|does not alone establish| N09
    N12 -->|determine appropriate| N13
    N09 -->|determines who may deliver| N13
    N14 -->|typically includes| N15
    N14 -->|typically includes| N16
    N17 -->|typically adds| N18
    N19 -->|typically includes broader| N20
    N14 -->|does not ordinarily permit| N21
    N09 -->|governs even seemingly simple| N22
    N23 -->|does not expand| N09
    N02 -->|distinguish typical| N14
    N02 -->|distinguish typical| N17
    N02 -->|distinguish typical| N19
    N01 -->|informs but does not grant| N08
```

National levels describe typical capabilities, not permissions. Retrieving sealed supplies, positioning a patient and reporting blood pressures differ from independently starting an IV, administering IV medications or interpreting ECGs.

### Scope versus standard of care

```mermaid
flowchart TD
    N01["State law and regulation"]
    N02["Scope of practice"]
    N03["Selected intervention"]
    N04["Standard of care"]
    N05["Performance quality"]
    N06["Reasonably prudent similarly trained EMT"]
    N07["Similar clinical circumstances"]
    N08["Textbooks and accepted regional practice"]
    N09["Education standards"]
    N10["Local and state protocols"]
    N11["Operating policies"]
    N12["Authorized intervention"]
    N13["Deviation from standard of care"]
    N14["Breach of duty"]
    N15["Civil negligence claim"]

    N01 -->|establish| N02
    N02 -->|determines legal boundaries of| N03
    N04 -->|evaluates appropriateness of| N03
    N04 -->|also evaluates| N05
    N06 -->|provides benchmark for| N04
    N07 -->|contextualize| N04
    N08 -->|inform| N04
    N09 -->|inform| N04
    N10 -->|inform| N04
    N11 -->|inform| N04
    N02 -->|does not itself define| N04
    N12 -->|can still be performed below| N04
    N13 -->|may establish| N14
    N14 -->|is one required element of| N15
    N04 -->|provides benchmark for identifying| N13
```

### Medical direction, delegation and escalation

```mermaid
flowchart TD
    N01["Medical direction"]
    N02["Medical oversight"]
    N03["Offline medical direction"]
    N04["Approved protocols and standing orders"]
    N05["Training, credentialing and equipment standards"]
    N06["Quality review"]
    N07["Online medical direction"]
    N08["Real-time consultation and orders"]
    N09["Uncertainty about care or scope"]
    N10["Disputed refusal or treatment limitation"]
    N11["Crew clinical leadership"]
    N12["Mixed-level care"]
    N13["Authorized tasks"]
    N14["Statutory medical direction"]
    N15["Unusual or conflicting instruction"]
    N16["Read-back when applicable"]
    N17["Orders"]
    N18["Skill"]
    N19["Communication failure"]
    N20["Contingency protocol"]
    N21["Appropriate BLS care"]
    N22["Documentation"]
    N23["Patient care"]
    N24["Interagency protocols"]
    N25["EMS and public safety interactions"]
    N26["Body camera recordings where used"]

    N01 -->|provides| N02
    N03 -->|establishes| N04
    N03 -->|oversees| N05
    N03 -->|incorporates| N06
    N07 -->|provides| N08
    N09 -->|warrants| N08
    N10 -->|may warrant| N08
    N11 -->|coordinates| N12
    N11 -->|delegates only| N13
    N11 -->|differs from| N14
    N15 -->|requires clarification of| N13
    N16 -->|reduces ambiguity in| N17
    N17 -->|cannot authorize a legally prohibited| N18
    N19 -->|invokes| N20
    N20 -->|supports continuation of| N21
    N22 -->|records time, clinician and content of| N17
    N22 -->|records resulting| N23
    N24 -->|coordinate| N25
    N26 -->|may document| N25
    N01 -->|operates through| N03
    N01 -->|operates through| N07
    N01 -->|constrains| N11
    N07 -->|may issue| N17
    N19 -->|may prevent access to| N07
    N24 -->|operate alongside| N04
```

## Duties and ethics

### Duty to act and continuity of responsibility

```mermaid
flowchart TD
    N01["Duty to act"]
    N02["Necessary emergency care"]
    N03["On-duty EMS role"]
    N04["Patient requiring and consenting to care"]
    N05["Off-duty non-EMS role"]
    N06["State-specific exceptions"]
    N07["Public response to a page or beginning care"]
    N08["Assumed duty to act"]
    N09["Other responders"]
    N10["Leaving after initiating care"]
    N11["Patient welfare"]
    N12["Appropriate takeover"]
    N13["Clinician capable of remaining care"]
    N14["Collected patient property"]
    N15["Safekeeping"]
    N16["Patient consent or lawful emergency authority"]

    N01 -->|is legal obligation to provide| N02
    N03 -->|generally establishes| N01
    N04 -->|is owed| N02
    N05 -->|usually has no additional| N01
    N06 -->|may impose off-duty| N01
    N07 -->|may establish| N08
    N08 -->|creates reliance by| N09
    N09 -->|may not respond because of| N08
    N10 -->|may worsen| N11
    N08 -->|requires continuity until| N12
    N12 -->|requires| N13
    N14 -->|creates responsibility for| N15
    N16 -->|governs| N02
    N08 -->|is a form of| N01
    N08 -->|can make harmful| N10
    N08 -->|includes safeguarding| N14
```

Off-duty obligations and consequences of volunteering vary by jurisdiction. Appropriate takeover generally means a qualified clinician with equal or higher training, but certification alone does not establish fitness for a particular patient.

### Responsibilities to patient, self, partner and equipment

```mermaid
flowchart TD
    N01["Professional duty"]
    N02["Patient advocacy"]
    N03["Patient rights and confidentiality"]
    N04["Physical and emotional needs"]
    N05["Suffering and further harm"]
    N06["Duty to self"]
    N07["Licensure, certification and credentials"]
    N08["Skill proficiency"]
    N09["Physical and mental readiness"]
    N10["Duty to partner"]
    N11["Partner fitness"]
    N12["Partner impairment by alcohol or drugs"]
    N13["Supervisor"]
    N14["Duty regarding equipment"]
    N15["Beginning-of-shift equipment checks"]
    N16["BLS oxygen, suction, bag-mask and AED readiness"]
    N17["Mixed-level shift"]
    N18["ALS monitor, batteries, supplies and medication security"]
    N19["Equipment readiness"]
    N20["Equipment failures"]
    N21["Authorized backups"]
    N22["Actual limitations"]
    N23["Improper maintenance or missing supplies"]
    N24["Breach of standard of care"]
    N25["ALS presence"]
    N26["Individual EMT responsibilities"]

    N01 -->|encompasses| N02
    N02 -->|protects| N03
    N02 -->|prioritizes| N04
    N02 -->|seeks to reduce| N05
    N06 -->|requires current| N07
    N06 -->|requires maintaining| N08
    N06 -->|requires maintaining| N09
    N10 -->|includes attention to| N11
    N12 -->|requires reporting to| N13
    N14 -->|requires| N15
    N15 -->|include assigned| N16
    N17 -->|requires coordinating| N18
    N15 -->|support| N19
    N20 -->|require early communication and| N21
    N20 -->|require honest documentation of| N22
    N23 -->|may contribute to| N24
    N25 -->|does not remove| N26
    N01 -->|encompasses| N06
    N01 -->|encompasses| N10
    N01 -->|encompasses| N14
    N10 -->|requires response to| N12
    N17 -->|does not remove| N14
    N20 -->|may compromise| N19
    N23 -->|may compromise| N19
    N26 -->|include| N01
```

### Ethics, professional judgment and improvement

```mermaid
flowchart TD
    N01["Ethics"]
    N02["Morality"]
    N03["Right and wrong"]
    N04["NAEMT Code of Ethics for EMTs (1978)"]
    N05["Ideal professional conduct"]
    N06["Patient welfare"]
    N07["Respect for dignity without discrimination"]
    N08["Autonomy"]
    N09["Informed patient choice"]
    N10["Beneficence"]
    N11["Patient benefit"]
    N12["Nonmaleficence"]
    N13["Unnecessary harm"]
    N14["Justice"]
    N15["Fair allocation of care"]
    N16["Skill mastery and continuing education"]
    N17["Professional standards"]
    N18["Respect for other professionals"]
    N19["Team collaboration"]
    N20["Honest reporting and confidentiality"]
    N21["Professional accountability"]
    N22["Critical performance review"]
    N23["Response, communication and outcomes"]
    N24["Improved practice"]
    N25["Ethical conflict"]
    N26["Patient wishes, legal obligations and moral beliefs"]
    N27["Expired or uncertain DNR"]
    N28["Limited resources during triage or wilderness arrest"]
    N29["Applicable law and local protocols"]
    N30["Medical direction"]
    N31["Expected benefits, burdens and alternatives"]
    N32["Intervention selection"]
    N33["Available invasive ALS intervention"]
    N34["Effective BLS ventilation during CPR"]
    N35["Advanced airway that interrupts compressions"]

    N01 -->|examines| N02
    N02 -->|concerns| N03
    N04 -->|expresses| N05
    N05 -->|places first| N06
    N06 -->|is supported by| N07
    N08 -->|protects| N09
    N10 -->|promotes| N11
    N12 -->|seeks to avoid| N13
    N14 -->|guides| N15
    N16 -->|support| N17
    N18 -->|supports| N19
    N20 -->|support| N21
    N22 -->|identifies opportunities to improve| N23
    N24 -->|is evaluated through| N22
    N25 -->|may arise between| N26
    N27 -->|may produce| N25
    N28 -->|may produce| N25
    N29 -->|govern resolution of| N25
    N30 -->|assists resolution of| N25
    N31 -->|guide| N32
    N33 -->|is not necessarily required for| N11
    N34 -->|may take priority over| N35
    N01 -->|guides| N05
    N05 -->|reflects| N08
    N05 -->|reflects| N10
    N05 -->|reflects| N12
    N05 -->|reflects| N14
    N05 -->|requires| N16
    N05 -->|requires| N18
    N05 -->|requires| N20
    N05 -->|requires| N22
    N25 -->|tests application of| N05
    N10 -->|informs| N32
    N32 -->|may favor| N34
```

## Liability and protections

### Civil and criminal accountability and negligence

```mermaid
flowchart TD
    N01["Breach of legal duty"]
    N02["Liability"]
    N03["Criminal liability"]
    N04["Government on behalf of public"]
    N05["Fine or incarceration"]
    N06["Civil action"]
    N07["Plaintiff"]
    N08["EMT, agency or other defendants"]
    N09["Tort claim"]
    N10["Monetary compensation"]
    N11["Negligence"]
    N12["Standard of care"]
    N13["Civil negligence claim"]
    N14["Required legal elements"]
    N15["Duty to act"]
    N16["Breach of duty"]
    N17["Legally compensable damages"]
    N18["Proximate causation"]
    N19["Patient-care relationship"]
    N20["Deviation from standard of care"]
    N21["Underlying illness or trauma"]
    N22["Simple negligence"]
    N23["Omission or treatment error"]
    N24["Gross negligence"]
    N25["Extreme recklessness or willful and wanton conduct"]
    N26["Intentional wrongdoing"]
    N27["Res ipsa loquitur"]
    N28["Circumstances of harm"]
    N29["Negligence per se"]
    N30["Statute or regulation"]
    N31["Adverse outcome or protocol deviation alone"]

    N01 -->|may create| N02
    N03 -->|involves action by| N04
    N03 -->|may result in| N05
    N06 -->|is initiated by| N07
    N07 -->|may sue| N08
    N09 -->|commonly seeks| N10
    N11 -->|concerns unintentional failure to meet| N12
    N13 -->|requires all four| N14
    N14 -->|include| N15
    N14 -->|include| N16
    N14 -->|include| N17
    N14 -->|include| N18
    N19 -->|may establish| N15
    N20 -->|may establish| N16
    N18 -->|links breach to| N17
    N21 -->|may instead explain| N17
    N22 -->|may involve| N23
    N24 -->|may involve| N25
    N26 -->|is legally distinct from| N24
    N27 -->|may support inference of negligence from| N28
    N29 -->|may rely on qualifying violation of| N30
    N31 -->|does not establish all elements of| N13
    N02 -->|may be| N03
    N02 -->|may be pursued through| N06
    N06 -->|may involve| N09
    N11 -->|is a basis for| N13
    N13 -->|is a type of| N09
    N11 -->|may be classified as| N22
    N11 -->|may be classified as| N24
    N13 -->|may involve application of| N27
    N13 -->|may involve application of| N29
```

Exact legal tests, including the role of protocol violations, gross negligence and res ipsa loquitur, vary by jurisdiction. A complication is not proof of negligence.

### Intentional torts and safeguards

```mermaid
flowchart TD
    N01["Intentional tort"]
    N02["Knowingly committed civil wrong"]
    N03["Unintentional negligence"]
    N04["Abandonment"]
    N05["Appropriate transfer of responsibility"]
    N06["Competent receiving clinician"]
    N07["Moving patient to ED bed alone"]
    N08["Oral report and acceptance"]
    N09["Assault"]
    N10["Willful threat producing apprehension of harm"]
    N11["Physical contact"]
    N12["Battery"]
    N13["Unlawful touching without consent"]
    N14["Good intentions"]
    N15["Valid consent"]
    N16["False imprisonment or kidnapping"]
    N17["Unlawful transport or detention against patient's wishes"]
    N18["Physical restraint"]
    N19["Capable patient's withdrawal of consent"]
    N20["Applicable law"]
    N21["Defamation"]
    N22["Character or reputation"]
    N23["Slander"]
    N24["Libel"]
    N25["Confidential and truthful communication"]
    N26["Scope-compliant competent care"]
    N27["Civil wrongdoing"]

    N01 -->|involves| N02
    N01 -->|differs from| N03
    N04 -->|involves stopping care without| N05
    N05 -->|requires| N06
    N05 -->|is not established by| N07
    N08 -->|support| N05
    N09 -->|involves| N10
    N09 -->|does not require| N11
    N12 -->|involves| N13
    N14 -->|do not substitute for| N15
    N16 -->|may involve| N17
    N16 -->|does not require| N18
    N19 -->|must be respected subject to| N20
    N21 -->|damages| N22
    N23 -->|is spoken form of| N21
    N24 -->|is written or published form of| N21
    N25 -->|helps prevent| N21
    N26 -->|helps prevent| N27
    N01 -->|includes| N04
    N01 -->|includes| N09
    N01 -->|includes| N12
    N01 -->|includes| N16
    N01 -->|includes| N21
    N15 -->|helps protect against| N12
    N19 -->|must be respected to avoid unlawful| N16
    N26 -->|includes arranging| N05
```

### Legal protections and their limits

```mermaid
flowchart TD
    N01["Good Samaritan laws"]
    N02["Good-faith emergency aid"]
    N03["Qualifying unpaid good-faith assistance"]
    N04["Gross negligence"]
    N05["Good Samaritan protection"]
    N06["Being sued"]
    N07["State EMS laws"]
    N08["Prehospital procedures without physician licensure"]
    N09["Personnel providing medical direction"]
    N10["Governmental immunity"]
    N11["Public agencies and employees"]
    N12["Statutory exceptions and waivers"]
    N13["Private EMS providers"]
    N14["Legal protections"]
    N15["Statute of limitations"]
    N16["Filing a claim"]
    N17["Injury event or discovery"]
    N18["Contributory or comparative fault"]
    N19["Damages"]
    N20["Patient contribution"]
    N21["Recovery"]
    N22["Competent professional care"]
    N23["Liability"]
    N24["Liability insurance or other protection"]
    N25["Financial exposure"]
    N26["ALS licensure or physician order"]
    N27["Immunity"]

    N01 -->|originated in California in 1959 to encourage| N02
    N01 -->|may protect| N03
    N04 -->|may exclude| N05
    N05 -->|does not prevent| N06
    N07 -->|may authorize| N08
    N07 -->|may protect qualifying| N09
    N10 -->|may limit claims against| N11
    N12 -->|qualify| N10
    N13 -->|may have other| N14
    N15 -->|sets state-specific deadline for| N16
    N17 -->|may trigger| N15
    N18 -->|considers patient's contribution to| N19
    N20 -->|does not necessarily bar| N21
    N22 -->|reduces risk of| N23
    N24 -->|may mitigate| N25
    N26 -->|does not guarantee| N27
    N01 -->|may provide| N05
    N05 -->|is a form of| N14
    N10 -->|is a form of| N14
    N07 -->|may establish| N14
    N15 -->|may limit claims involving| N23
    N18 -->|may affect| N21
    N21 -->|is sought through claims involving| N23
    N14 -->|may limit| N23
    N24 -->|is a form of| N14
    N27 -->|is a form of| N14
```

These protections are jurisdiction-specific; the chapter does not verify individual state liability statutes.

## Consent and decision-making

### Consent, autonomy and the emergency doctrine

```mermaid
flowchart TD
    N01["Patient autonomy"]
    N02["Accept or refuse care"]
    N03["Decision-making capacity"]
    N04["Informed consent"]
    N05["Proposed care, risks and consequences"]
    N06["Benefits and alternatives"]
    N07["Questions and confirmation of understanding"]
    N08["Expressed consent"]
    N09["Legal authority and decision-making capacity"]
    N10["Verbal or nonverbal permission"]
    N11["Patient care documentation"]
    N12["Calling 911"]
    N13["Every intervention"]
    N14["Consent to assessment"]
    N15["IV, medication, airway or transport"]
    N16["Withdrawal of consent"]
    N17["Capacity and lawful authority"]
    N18["Unlawful care without consent"]
    N19["Battery"]
    N20["Implied consent"]
    N21["Necessary emergency care"]
    N22["Inability to consent and significant emergency risk"]
    N23["Prior refusal followed by incapacity"]
    N24["Research or unproven interventions"]

    N01 -->|includes right to| N02
    N03 -->|supports exercise of| N01
    N04 -->|requires understandable explanation of| N05
    N04 -->|also considers| N06
    N07 -->|support| N04
    N08 -->|requires| N09
    N08 -->|may be communicated through| N10
    N08 -->|should be recorded in| N11
    N12 -->|does not establish consent to| N13
    N14 -->|does not necessarily authorize| N15
    N01 -->|permits| N16
    N16 -->|requires renewed consideration of| N17
    N18 -->|may constitute| N19
    N20 -->|may authorize| N21
    N20 -->|depends on combined conditions of| N22
    N23 -->|may warrant reassessment for| N20
    N24 -->|reinforce importance of| N04
    N04 -->|supports exercise of| N01
    N08 -->|should be| N04
    N20 -->|is an exception when patient cannot exercise| N01
    N12 -->|does not substitute for| N04
    N08 -->|may be limited to| N14
    N18 -->|violates| N01
```

### Minors, surrogates and custody

```mermaid
flowchart TD
    N01["Minor status"]
    N02["Parent or legally authorized guardian"]
    N03["Parent or guardian"]
    N04["Authorized caregiver"]
    N05["Emancipation under applicable law"]
    N06["Minor's independent consent"]
    N07["Marriage, parenthood, pregnancy, military service or independence"]
    N08["Court decree"]
    N09["State law"]
    N10["Age thresholds and surrogate authority"]
    N11["Minor emergency exception"]
    N12["Emergency risk, unavailable guardian and unsafe delay"]
    N13["Immediate emergency needs"]
    N14["Uncertain authority"]
    N15["Minor's best interests"]
    N16["Unreachable guardian and uncertainty"]
    N17["Medical direction"]
    N18["Emergency circumstances and contact attempts"]
    N19["Patient care documentation"]
    N20["Adult lacking legal decision authority"]
    N21["Legally authorized surrogate"]
    N22["Custody or incarceration"]
    N23["Adult consent rights"]
    N24["Psychiatric detention authority"]
    N25["Authority to consent to treatment"]
    N26["Law enforcement officer"]
    N27["Actual legal authority"]

    N01 -->|generally requires consent from| N02
    N03 -->|may delegate limited authority to| N04
    N05 -->|may permit| N06
    N07 -->|may be relevant under state law to| N05
    N08 -->|may establish| N05
    N09 -->|determines| N10
    N11 -->|requires combined| N12
    N11 -->|limits treatment to| N13
    N14 -->|requires consideration of| N15
    N16 -->|warrant| N17
    N18 -->|should be recorded in| N19
    N20 -->|may require| N21
    N22 -->|does not automatically eliminate| N23
    N24 -->|differs from| N25
    N26 -->|may act as surrogate only with| N27
    N27 -->|must be verified under| N09
    N01 -->|may be modified by| N05
    N09 -->|determines implications of| N01
    N02 -->|may be a| N03
    N11 -->|applies when consent is unavailable from| N02
    N14 -->|may arise during| N11
    N16 -->|are examples of| N14
    N11 -->|requires documentation of| N18
    N21 -->|must have| N27
    N23 -->|are not automatically transferred by custody to a person claiming| N27
    N25 -->|depends on| N27
```

NASEMSO 2022 model guidance describes emergency treatment of minors when delay is unsafe. Listed emancipation circumstances and age thresholds are not universal.

### Decision-making capacity versus legal competence

```mermaid
flowchart TD
    N01["Medical decision-making capacity"]
    N02["Specific decision at specific time"]
    N03["Legal competence"]
    N04["Court"]
    N05["Clinical incapacity"]
    N06["Court declaration of incompetence"]
    N07["Decision-making capacity"]
    N08["Understanding"]
    N09["Appreciation"]
    N10["Reasoning"]
    N11["Communicating a choice"]
    N12["Condition, options and risks"]
    N13["Personal consequences"]
    N14["Choices and consequences"]
    N15["Decision"]
    N16["Orientation to person, place, time and event"]
    N17["Mental illness, dementia, intoxication or disability"]
    N18["Risky or unconventional choice"]
    N19["Communication barriers and cultural differences"]
    N20["Capacity assessment"]
    N21["Suicidal intent or attempt"]
    N22["Safety evaluation and lawful escalation"]
    N23["Medical direction"]

    N01 -->|is assessed clinically for| N02
    N03 -->|is determined by| N04
    N05 -->|does not itself establish| N06
    N07 -->|requires| N08
    N07 -->|requires| N09
    N07 -->|requires| N10
    N07 -->|requires| N11
    N08 -->|includes explaining| N12
    N09 -->|involves recognizing| N13
    N10 -->|compares| N14
    N11 -->|requires sufficiently clear and consistent| N15
    N16 -->|informs but does not establish| N07
    N17 -->|warrant careful assessment of| N07
    N18 -->|does not alone establish lack of| N07
    N19 -->|may complicate| N20
    N21 -->|warrants urgent| N22
    N23 -->|assists when uncertainty remains about| N07
    N01 -->|refers to clinical| N07
    N07 -->|differs from| N03
    N05 -->|is a finding concerning| N07
    N20 -->|evaluates| N07
    N21 -->|requires careful| N20
```

The source's categorical model-guideline wording about impairment and suicidal intent must be read with decision-specific capacity assessment and applicable behavioral-emergency and involuntary-transport law.

### Reversible causes of impaired cognition and BLS-ALS cooperation

```mermaid
flowchart TD
    N01["Hypoglycemia"]
    N02["Glucose available to brain"]
    N03["Reduced glucose availability"]
    N04["Authorized AEMT or paramedic treatment"]
    N05["Treatment response"]
    N06["Hypoxia and hypoperfusion"]
    N07["Cognition"]
    N08["Intoxication or head injury"]
    N09["Understanding, appreciation and reasoning"]
    N10["EMT assessment"]
    N11["History, onset, mental status and vital signs"]
    N12["Authorized glucose testing"]
    N13["ALS clinical reasoning"]
    N14["Reversible causes of impaired cognition"]
    N15["BLS support"]
    N16["ALS assessment and treatment"]
    N17["Reassessment of cognition"]
    N18["Decision-specific capacity assessment"]
    N19["Restored capacity"]
    N20["Consent to further care"]
    N21["No single advanced intervention"]
    N22["Altered cognition"]

    N01 -->|reduces| N02
    N03 -->|reflects reduction in| N02
    N04 -->|may produce| N05
    N06 -->|may impair| N07
    N03 -->|may impair| N07
    N08 -->|may alter| N07
    N07 -->|influences| N09
    N10 -->|collects| N11
    N12 -->|may identify| N01
    N10 -->|informs| N13
    N13 -->|considers| N14
    N04 -->|may address| N14
    N15 -->|continues during| N16
    N05 -->|informs| N17
    N17 -->|informs| N18
    N19 -->|requires renewed consideration of| N20
    N21 -->|is automatically required by| N22
    N01 -->|is one of the| N14
    N07 -->|is evaluated through| N17
    N16 -->|draws upon| N13
    N17 -->|may identify| N19
    N22 -->|may reflect| N14
```

### Informed refusal, documentation and ongoing safety

```mermaid
flowchart TD
    N01["Capable adult or legally emancipated minor"]
    N02["Informed refusal"]
    N03["Selected assessment, treatment or transport"]
    N04["Initial assessment with permission"]
    N05["Clinical findings and vital signs"]
    N06["Refused assessment"]
    N07["Documentation"]
    N08["Clinical findings"]
    N09["Risks of declining care"]
    N10["Explanation of risks and alternatives"]
    N11["Informed decision"]
    N12["Teach-back"]
    N13["Understanding of consequences"]
    N14["Capacity assessment"]
    N15["High-risk or uncertain refusal"]
    N16["Medical direction"]
    N17["Respectful persuasion and family involvement when helpful"]
    N18["Coercion or threats"]
    N19["Signed refusal form and witness when available"]
    N20["Valid refusal"]
    N21["Refusal to sign"]
    N22["Witness statements"]
    N23["PCR"]
    N24["Findings, capacity reasoning and teach-back"]
    N25["Risks, alternatives, consultation and actual decision"]
    N26["Signatures or refusal to sign and safety instructions"]
    N27["Specific warning signs and recontact advice"]
    N28["Patient to seek help again"]
    N29["Lack of capacity and emergency risk"]
    N30["Lawful emergency authority"]
    N31["Potential violence"]
    N32["Crew safety and authorized assistance"]

    N01 -->|may make| N02
    N02 -->|may include declining only| N03
    N04 -->|provides| N05
    N06 -->|must be reflected in| N07
    N08 -->|inform explanation of| N09
    N10 -->|supports| N11
    N12 -->|checks| N13
    N14 -->|establishes whether patient can make| N11
    N15 -->|warrants protocol-based consultation with| N16
    N17 -->|may support| N11
    N02 -->|must be free from| N18
    N19 -->|document but do not establish| N20
    N21 -->|can be recorded through| N22
    N23 -->|records| N24
    N23 -->|records| N25
    N23 -->|records| N26
    N27 -->|enable| N28
    N29 -->|may justify care under| N30
    N31 -->|requires prioritizing| N32
    N02 -->|requires an| N11
    N05 -->|constitute| N08
    N08 -->|inform| N11
    N12 -->|supports| N11
    N06 -->|is a form of| N02
    N07 -->|is recorded in| N23
    N02 -->|is recorded in| N23
    N15 -->|requires careful| N14
    N20 -->|depends on| N11
    N21 -->|may occur during| N02
    N02 -->|should be accompanied by| N27
    N14 -->|may reveal| N29
    N31 -->|may complicate| N15
```

The chapter describes a witness other than the partner and a signed release form; actual refusal procedures depend on local requirements. A signature is not immunity. The 2025 refusal literature supports structured processes and quality review, while statewide protocols vary.

### Chest discomfort and high-risk refusal

```mermaid
flowchart TD
    N01["Chest discomfort"]
    N02["Time-sensitive emergency"]
    N03["EMT assessment"]
    N04["Symptoms, onset, history and serial vital signs"]
    N05["Serial BLS findings"]
    N06["Paramedic clinical assessment"]
    N07["ECG acquisition"]
    N08["Cardiac electrical activity"]
    N09["Authorized paramedic interpretation"]
    N10["Normal initial ECG"]
    N11["Symptom relief or reassuring single vital set"]
    N12["Unresolved diagnostic uncertainty"]
    N13["Explanation of delayed-diagnosis risk"]
    N14["Informed decision"]
    N15["Capacity and applicable law"]
    N16["Refusal of transport"]
    N17["Medical direction"]
    N18["High-risk refusal reasoning"]
    N19["BLS assessment and indicated transport"]
    N20["Reassessment"]
    N21["Symptoms and vital signs"]

    N01 -->|may indicate| N02
    N03 -->|gathers| N04
    N05 -->|inform| N06
    N07 -->|records| N08
    N09 -->|evaluates clinical meaning of| N08
    N10 -->|does not exclude| N02
    N11 -->|does not exclude| N02
    N12 -->|informs| N13
    N13 -->|supports| N14
    N15 -->|govern whether to honor| N16
    N17 -->|supports| N18
    N19 -->|should not be delayed solely for| N07
    N20 -->|detects changes in| N21
    N02 -->|may be evaluated by| N06
    N06 -->|may include| N09
    N03 -->|generates| N05
    N02 -->|contributes to| N12
    N14 -->|may result in| N16
    N18 -->|considers| N16
    N20 -->|contributes to| N05
```

### Restraint, sedation and physiological risk

```mermaid
flowchart TD
    N01["Immediate safety threat"]
    N02["De-escalation and authorized assistance"]
    N03["De-escalation"]
    N04["Restraint"]
    N05["Lawful authority and clinical indication"]
    N06["Medical restraint or sedation"]
    N07["Punishment or police convenience"]
    N08["Restraint or sedation"]
    N09["Airway obstruction"]
    N10["Inadequate ventilation"]
    N11["Circulatory deterioration"]
    N12["Breathing-compromising positioning"]
    N13["Close observation and airway access"]
    N14["Deterioration"]
    N15["Serial vital signs"]
    N16["Pulse oximetry"]
    N17["Oxygen saturation"]
    N18["Adequate ventilation"]
    N19["Authorized ALS capnography"]
    N20["Exhaled carbon dioxide"]
    N21["Exhaled carbon dioxide trends"]
    N22["Ventilation"]
    N23["EMT observation and reporting"]
    N24["ALS reassessment"]
    N25["Authorized BLS airway support"]
    N26["Airway and breathing problems"]
    N27["Policy and lawful authority"]
    N28["Forced transport and restraint"]

    N01 -->|may warrant| N02
    N03 -->|may reduce need for| N04
    N05 -->|are required for| N06
    N06 -->|must not serve| N07
    N08 -->|may contribute to| N09
    N08 -->|may contribute to| N10
    N08 -->|may contribute to| N11
    N12 -->|increases risk of| N10
    N13 -->|support early recognition of| N14
    N15 -->|help detect| N11
    N16 -->|assesses| N17
    N17 -->|does not establish| N18
    N19 -->|tracks| N20
    N21 -->|provide information about| N22
    N23 -->|support| N24
    N25 -->|addresses| N26
    N27 -->|restrict| N28
    N01 -->|may require consideration of| N04
    N04 -->|when medical requires| N05
    N06 -->|requires monitoring for| N14
    N14 -->|may manifest as| N10
    N17 -->|provides only partial information about| N26
    N26 -->|may include| N09
    N20 -->|is monitored as| N21
    N22 -->|may be compromised by| N10
    N24 -->|evaluates| N14
    N27 -->|govern| N06
```

Never leave a restrained patient unattended or attempt restraint or forced transport alone or outside policy. These relationships describe safety considerations, not a restraint protocol.

### Case integration: vulnerable adults and withdrawal of consent

```mermaid
flowchart TD
    N01["Abdominal pain with initial consent"]
    N02["Withdrawal of transport consent"]
    N03["Capacity and informed-refusal assessment"]
    N04["Disorientation and incoherent history in Schuman case"]
    N05["Clinical uncertainty"]
    N06["Apparently adequate airway, breathing and circulation"]
    N07["Confused spouse"]
    N08["Collateral history"]
    N09["Surrogate suitability and household safety"]
    N10["Painful response to palpation"]
    N11["Explanation and reassessment"]
    N12["Disorientation"]
    N13["Incapacity"]
    N14["EMT serial assessments and environmental observations"]
    N15["ALS clinical reasoning and safeguarding"]
    N16["ALS clinical reasoning"]
    N17["Reversible metabolic or circulatory causes"]
    N18["Authorized vascular access"]
    N19["Fluid or medication administration"]
    N20["Authorized pain treatment"]
    N21["Respiratory status and alertness"]
    N22["Decision-specific incapacity and unsafe delay"]
    N23["Lawful emergency consent"]
    N24["Household safety concerns"]
    N25["Social services and applicable reporting"]
    N26["Suspected neglect"]
    N27["Intentional abuse"]
    N28["Hospital handoff"]
    N29["Medical assessment and safeguarding"]

    N01 -->|does not prevent later| N02
    N02 -->|calls for| N03
    N04 -->|create| N05
    N06 -->|do not resolve| N05
    N07 -->|limits reliability of| N08
    N07 -->|raises concern about| N09
    N10 -->|warrants| N11
    N12 -->|does not alone establish| N13
    N14 -->|inform| N15
    N16 -->|may investigate| N17
    N18 -->|does not automatically require| N19
    N20 -->|requires monitoring of| N21
    N22 -->|may warrant| N23
    N24 -->|may warrant| N25
    N26 -->|does not establish| N27
    N28 -->|supports continuity of| N29
    N05 -->|warrants| N03
    N07 -->|contributes to| N05
    N10 -->|may indicate need for| N03
    N12 -->|contributes to| N05
    N14 -->|help clarify| N05
    N15 -->|includes| N16
    N16 -->|may support consideration of| N18
    N16 -->|may support consideration of| N20
    N13 -->|when decision-specific and urgent may contribute to| N22
    N09 -->|influence assessment of| N24
    N24 -->|may raise| N26
    N15 -->|informs| N28
```

The Schuman case later reported gastric ulcer and organic brain syndrome in the patient, and Alzheimer's disease in his wife, followed by supervised care. These were subsequent diagnoses, not findings established by EMTs at the scene.

## Advance directives and end-of-life care

### Advance directives, surrogates and portable medical orders

```mermaid
flowchart TD
    N01["Patient Self-Determination Act"]
    N02["Patient treatment preferences"]
    N03["Advance directive"]
    N04["Loss of decision-making ability"]
    N05["Living will"]
    N06["Life-prolonging treatment"]
    N07["Selected ongoing medical care"]
    N08["DNR order"]
    N09["Applicable law"]
    N10["Living will activation"]
    N11["Incapacity and qualifying condition"]
    N12["Field verification difficulty"]
    N13["Durable health care power of attorney"]
    N14["Health care proxy"]
    N15["Patient incapacity"]
    N16["Treatment decisions"]
    N17["Restored decision-making ability"]
    N18["Resuscitation"]
    N19["DNI order"]
    N20["Intubation intervention"]
    N21["POLST or MOLST and equivalent forms"]
    N22["Portable medical orders"]
    N23["Serious illness or advanced frailty"]
    N24["Cardiac arrest"]
    N25["Advanced airway or electrical therapy"]
    N26["Applicable state law"]
    N27["Treatment limitations"]

    N01 -->|supports recognition of| N02
    N03 -->|records future instructions or decision-maker for| N04
    N05 -->|specifies conditions for starting or stopping| N06
    N05 -->|may preserve| N07
    N05 -->|may include| N08
    N05 -->|may be revoked under| N09
    N10 -->|depends on state-specific criteria for| N11
    N12 -->|may limit immediate usefulness of| N05
    N13 -->|designates| N14
    N14 -->|makes decisions when legally activated by| N15
    N14 -->|uses known wishes or substituted judgment to guide| N16
    N17 -->|generally ends active authority of| N14
    N08 -->|generally limits| N18
    N19 -->|limits specified| N20
    N21 -->|constitute| N22
    N23 -->|may warrant voluntary| N21
    N22 -->|may specify treatment before| N24
    N22 -->|may distinguish accepted medications from refused| N25
    N26 -->|determines accepted forms, signatures and activation of| N27
    N03 -->|may take form of| N05
    N03 -->|may take form of| N13
    N02 -->|may be recorded in| N03
    N05 -->|becomes operative according to| N10
    N02 -->|may be translated into| N22
    N22 -->|may include| N19
    N27 -->|may be specified in| N22
```

POLST variants include MOST, POST and TPOPP. The chapter's two-physician living-will example, physical-document requirement and one-year POLST eligibility example are not universal. Conventional advance directives may not apply to transient emergencies.

### Verification and interpretation of treatment limitations

```mermaid
flowchart TD
    N01["Treatment limitation"]
    N02["Actual order and applicable law"]
    N03["Accepted identification"]
    N04["Form, wallet card or bracelet"]
    N05["Valid order verification"]
    N06["Identity, format, integrity and signatures"]
    N07["Ambiguous phrases such as no heroics"]
    N08["Treatment limitations"]
    N09["Ohio DNR Comfort Care"]
    N10["Immediately upon applicable order"]
    N11["Ohio DNR Comfort Care-Arrest"]
    N12["Cardiac or respiratory arrest"]
    N13["Verified order excluding CPR"]
    N14["Arrest"]
    N15["Verified order found after CPR begins"]
    N16["Discontinuation of CPR"]
    N17["Signs of life"]
    N18["Allowed care under actual order"]
    N19["Unclear or missing order"]
    N20["Prompt clarification"]
    N21["Medical direction"]
    N22["Family disagreement"]
    N23["Medical direction and law"]
    N24["Family distress"]
    N25["Valid treatment limitation"]
    N26["Authorized physician or hospice RN"]
    N27["Applicable rules"]
    N28["Documentation"]
    N29["Order verification, consultation and care delivered"]

    N01 -->|must be interpreted according to| N02
    N03 -->|may include| N04
    N05 -->|considers state-required| N06
    N07 -->|do not establish clear| N08
    N09 -->|activates| N10
    N11 -->|activates at| N12
    N13 -->|may authorize withholding during| N14
    N15 -->|may authorize protocol-based| N16
    N17 -->|require assessment of| N18
    N19 -->|warrants indicated initial care and| N20
    N20 -->|may require| N21
    N22 -->|warrants escalation through| N23
    N24 -->|does not itself override| N25
    N26 -->|may have decision authority under| N27
    N28 -->|records| N29
    N01 -->|requires| N05
    N05 -->|considers| N03
    N05 -->|rejects ambiguity in| N07
    N01 -->|may be specified as| N09
    N01 -->|may be specified as| N11
    N05 -->|may identify| N13
    N05 -->|may establish| N15
    N01 -->|must be considered even with| N17
    N05 -->|may reveal| N19
    N22 -->|may complicate| N05
    N24 -->|may underlie| N22
    N26 -->|may assist clarification of| N01
    N05 -->|must be reflected in| N28
```

The NASEMSO 2022 model describes accepted identifiers and valid exclusions; actual legal forms and scope of permitted interventions are jurisdiction-specific. Do not delay indicated resuscitation while resolving uncertainty.

### Comfort-focused care and advanced intervention risks

```mermaid
flowchart TD
    N01["DNR"]
    N02["Do not treat"]
    N03["Valid treatment limitations"]
    N04["Allowed symptom-directed care"]
    N05["Patient goals"]
    N06["Pain or dyspnea"]
    N07["BLS positioning and comfort measures"]
    N08["Symptoms, oxygenation, order and protocol"]
    N09["Oxygen therapy"]
    N10["Authorized ALS assessment"]
    N11["Additional respiratory support or analgesia"]
    N12["Opioid analgesics such as fentanyl"]
    N13["Opioid receptors"]
    N14["Opioid receptor effects"]
    N15["Severe pain and distress"]
    N16["Respiratory depression, sedation and hypotension"]
    N17["Baseline BLS observations"]
    N18["Post-intervention reassessment"]
    N19["Alertness, airway, breathing, oxygenation, circulation and pain"]
    N20["Adverse changes"]
    N21["ALS clinician"]
    N22["Authorized supportive care"]
    N23["Advanced symptom management"]
    N24["Comfort-focused care"]
    N25["Patient welfare and continuity"]
    N26["DNR status alone"]
    N27["Opioid or oxygen administration"]

    N01 -->|does not mean| N02
    N03 -->|guide| N04
    N05 -->|guide| N04
    N06 -->|may warrant| N07
    N08 -->|determine appropriateness of| N09
    N10 -->|evaluates suitability of| N11
    N12 -->|act at| N13
    N14 -->|may reduce| N15
    N12 -->|may cause| N16
    N17 -->|establish comparison for| N18
    N18 -->|evaluates| N19
    N20 -->|require prompt communication to| N21
    N22 -->|continues during| N23
    N24 -->|preserves| N25
    N26 -->|does not indicate| N27
    N01 -->|may be one of the| N03
    N04 -->|may address| N06
    N04 -->|may include indicated| N09
    N04 -->|may involve| N10
    N10 -->|may support selected use of| N12
    N13 -->|mediate| N14
    N12 -->|require| N18
    N16 -->|are potential| N20
    N22 -->|supports| N04
    N04 -->|is part of| N24
    N26 -->|does not determine| N04
```

## Transport and continuity

### EMTALA, destination and transport capability

```mermaid
flowchart TD
    N01["COBRA-related EMTALA"]
    N02["Ability to pay"]
    N03["EMTALA"]
    N04["Covered hospitals"]
    N05["Screening, stabilization and appropriate transfer"]
    N06["Inappropriate diversion based on inability to pay"]
    N07["Patient dumping"]
    N08["Appropriate transfer"]
    N09["Patient needs and transport capability"]
    N10["Transferring facility"]
    N11["Available capability"]
    N12["Anticipated journey and deterioration"]
    N13["Continuous infusion"]
    N14["Pump management and titration"]
    N15["Continuous ECG monitoring"]
    N16["Advanced monitoring and interpretation"]
    N17["EMT scope"]
    N18["Ongoing advanced therapy"]
    N19["AEMT authorization"]
    N20["IV therapies"]
    N21["Paramedic licensure"]
    N22["Critical-care transport credentialing"]
    N23["Actual crew credentials and equipment"]
    N24["Transport capability"]
    N25["Capability mismatch"]
    N26["Loading and transfer"]
    N27["Medical director"]
    N28["Transferring physician"]
    N29["Emergency destination"]
    N30["Clinical appropriateness and authorized protocol"]
    N31["Appropriate bypass"]
    N32["Patient request, medical direction or destination protocol"]
    N33["Bypass reason"]
    N34["Documentation"]

    N01 -->|protects emergency access regardless of| N02
    N03 -->|primarily imposes duties on| N04
    N04 -->|must meet applicable duties of| N05
    N06 -->|may constitute| N07
    N08 -->|requires matching| N09
    N10 -->|must address stabilization within| N11
    N09 -->|must account for| N12
    N13 -->|may require| N14
    N15 -->|may require| N16
    N17 -->|may be insufficient for| N18
    N19 -->|covers only selected| N20
    N21 -->|does not guarantee| N22
    N23 -->|determine| N24
    N25 -->|warrants escalation before| N26
    N27 -->|may consult| N28
    N29 -->|should reflect| N30
    N31 -->|may depend on| N32
    N33 -->|must be recorded in| N34
    N02 -->|must not determine| N29
    N01 -->|refers to| N03
    N03 -->|seeks to prevent| N07
    N04 -->|include qualifying| N10
    N05 -->|include requirements for| N08
    N08 -->|depends on| N24
    N13 -->|may constitute| N18
    N15 -->|may constitute| N18
    N18 -->|influences| N09
    N20 -->|may be part of| N18
    N22 -->|may be needed for| N24
    N25 -->|occurs when patient needs exceed| N24
    N27 -->|may help resolve| N25
    N29 -->|may involve| N31
    N31 -->|requires documentation of| N33
```

EMTALA does not universally impose direct federal liability on an independent ambulance or EMT for accepting a transfer. Hospital-owned ambulance and community destination rules have specific qualifications. Do not transmit insurance or payment details over the radio.

### Handoff and interfacility transfer

```mermaid
flowchart TD
    N01["Interfacility transfer"]
    N02["Clear report of patient condition"]
    N03["Crew capability and scope"]
    N04["Applicable transfer requirements"]
    N05["Signed consent and physician transfer certification"]
    N06["Physician transfer certification when required"]
    N07["Transferring physician, destination and reason"]
    N08["Destination and route planning"]
    N09["Timely appropriate transport"]
    N10["Structured handoff"]
    N11["Identity, chief concern, onset and history"]
    N12["Initial and current findings and trends"]
    N13["Interventions by each provider, timing and response"]
    N14["Outstanding risks, consent and code status"]
    N15["Devices, ongoing medications and care needs"]
    N16["Receiving clinician acknowledgment"]
    N17["Accepted transfer of responsibility"]
    N18["Receiving clinician, time and relevant records"]
    N19["Stretcher transfer"]
    N20["Oxygen and authorized support"]
    N21["Interrupted monitoring or displaced device"]
    N22["Communication to receiving clinician"]
    N23["Infusion or ventilator malfunction"]
    N24["Authorized clinician"]
    N25["EMT"]
    N26["Devices outside authorization"]
    N27["Qualified acceptance"]
    N28["Abandonment"]

    N01 -->|begins with obtaining| N02
    N02 -->|enables verification of| N03
    N04 -->|may require| N05
    N06 -->|records| N07
    N08 -->|support| N09
    N10 -->|communicates| N11
    N10 -->|communicates| N12
    N10 -->|communicates| N13
    N10 -->|communicates| N14
    N10 -->|communicates| N15
    N16 -->|establishes| N17
    N17 -->|is recorded with| N18
    N19 -->|requires continuity of| N20
    N21 -->|requires prompt| N22
    N23 -->|requires assistance from| N24
    N25 -->|must not independently adjust| N26
    N27 -->|protects against| N28
    N02 -->|can use| N10
    N01 -->|must satisfy| N04
    N04 -->|may include| N06
    N01 -->|requires| N08
    N10 -->|culminates in| N16
    N01 -->|may involve| N19
    N19 -->|may cause| N21
    N23 -->|may compromise| N20
    N25 -->|must escalate malfunction to| N24
    N17 -->|requires| N27
```

A transfer report and physical movement are not substitutes for acceptance of responsibility. Written-consent and certification requirements vary with the transfer circumstances.

### ALS-to-BLS transition and individual accountability

```mermaid
flowchart TD
    N01["ALS clinical leadership"]
    N02["Mixed-level team care"]
    N03["EMT"]
    N04["Assigned BLS observations and care"]
    N05["Advanced intervention"]
    N06["Ongoing advanced monitoring or treatment"]
    N07["Recent medication or infusion"]
    N08["Normal latest blood pressure"]
    N09["Subsequent deterioration"]
    N10["Clinical trends and response"]
    N11["Downgrade suitability"]
    N12["Remaining patient needs"]
    N13["Receiving clinician competence, credentials and equipment"]
    N14["Local downgrade criteria"]
    N15["ALS-to-BLS transition"]
    N16["Required medical direction and documented acceptance"]
    N17["Lawful transition"]
    N18["Contingency plan"]
    N19["Unsafe downgrade"]
    N20["Designated clinician, supervisor or medical direction"]
    N21["Equal or higher certification"]
    N22["Appropriate receiving competence"]
    N23["New breathing change after ALS medication"]
    N24["EMT reporting and authorized support"]
    N25["Individual documentation"]
    N26["EMT and ALS actions, findings and times"]
    N27["Professional accountability and clinical continuity"]

    N01 -->|coordinates| N02
    N03 -->|retains responsibility for| N04
    N05 -->|may create need for| N06
    N07 -->|may require| N06
    N08 -->|does not exclude| N09
    N10 -->|inform| N11
    N12 -->|must match| N13
    N14 -->|govern| N15
    N16 -->|support| N17
    N18 -->|addresses| N09
    N19 -->|warrants escalation to| N20
    N21 -->|does not alone establish| N22
    N23 -->|requires prompt| N24
    N25 -->|distinguishes| N26
    N25 -->|supports| N27
    N15 -->|depends on absence of unmet| N06
    N15 -->|requires planning for| N09
    N15 -->|requires| N25
    N01 -->|may coordinate| N15
    N03 -->|participates in| N02
    N15 -->|depends on| N11
    N11 -->|depends on| N12
    N17 -->|includes applicable| N15
    N19 -->|reflects inadequate| N11
    N22 -->|is necessary for| N11
    N23 -->|may indicate| N09
```

## Confidentiality and patient information

### HIPAA, confidentiality and lawful disclosure

```mermaid
flowchart TD
    N01["HIPAA (1996)"]
    N02["Patient health information"]
    N03["Patient confidentiality"]
    N04["Physical and psychological conditions and care details"]
    N05["Privacy policies"]
    N06["Record storage, access, discussion and release"]
    N07["Unauthorized public or personal discussion"]
    N08["Confidentiality"]
    N09["Deliberate privacy invasion"]
    N10["Professional discipline and legal action"]
    N11["Patient or authorized representative"]
    N12["Information disclosure"]
    N13["Provider-to-provider treatment disclosure"]
    N14["Continuity of care"]
    N15["Separate HIPAA authorization"]
    N16["HIPAA minimum-necessary rule"]
    N17["Reasonable safeguards"]
    N18["Treatment disclosure"]
    N19["Applicable reporting law"]
    N20["Disclosure to designated authorities"]
    N21["Law enforcement request alone"]
    N22["Blanket disclosure authority"]
    N23["Subpoena or third-party billing request"]
    N24["Proper legal and agency handling"]
    N25["Patient permission under privacy rules"]
    N26["Persons involved in care"]
    N27["Agency privacy training"]
    N28["Compliant information handling"]
    N29["Privacy officer"]
    N30["Nonroutine requests and inadvertent disclosure"]
    N31["Approved communication channels"]
    N32["BLS and ALS shared documentation"]
    N33["Recordings and monitor downloads"]
    N34["Agency access and retention policy"]
    N35["Personal photos and unapproved cloud storage"]
    N36["Emergency treatment"]
    N37["Privacy notice paperwork"]
    N38["Privacy notice acknowledgment"]
    N39["Medical consent"]

    N01 -->|protects| N02
    N03 -->|applies to| N04
    N05 -->|govern| N06
    N07 -->|may violate| N08
    N09 -->|may lead to| N10
    N11 -->|may authorize| N12
    N13 -->|supports| N14
    N13 -->|generally does not require| N15
    N13 -->|generally is not subject to| N16
    N17 -->|still apply to| N18
    N19 -->|may require| N20
    N21 -->|does not establish| N22
    N23 -->|requires| N24
    N25 -->|may allow sharing with| N26
    N27 -->|supports| N28
    N29 -->|assists with| N30
    N31 -->|safeguard| N32
    N33 -->|follow| N34
    N35 -->|threaten| N08
    N36 -->|takes priority over| N37
    N38 -->|is distinct from| N39
    N01 -->|supports| N08
    N03 -->|is an aspect of| N08
    N05 -->|safeguard| N08
    N09 -->|violates| N08
    N12 -->|is governed by| N05
    N13 -->|is a permitted form of| N12
    N18 -->|includes| N13
    N20 -->|may be lawful| N12
    N22 -->|is not presumed under| N05
    N24 -->|is required for nonroutine| N12
    N26 -->|may receive authorized| N12
    N27 -->|explains| N05
    N29 -->|assists implementation of| N05
    N31 -->|support| N28
    N34 -->|is part of| N05
    N37 -->|communicates| N05
    N38 -->|documents receipt of| N37
```

HHS emergency notice guidance allows notice when practical after the emergency and does not require the usual good-faith acknowledgment effort for an emergency-delayed notice. Police and subpoena disclosures depend on applicable legal conditions.

## Special clinical and medicolegal situations

### Organ donation and medical identification

```mermaid
flowchart TD
    N01["Patient welfare"]
    N02["Potential organ donation"]
    N03["Valid treatment limitations and clinical indications"]
    N04["Resuscitation and supportive care"]
    N05["Potential organ suitability"]
    N06["Starting, prolonging or withholding resuscitation"]
    N07["Donor card or registration"]
    N08["Donation authorization"]
    N09["Driver's license donor indicator"]
    N10["Potential donor status"]
    N11["EMS recognition of potential donor"]
    N12["Receiving facility or designated process"]
    N13["Hospital and organ procurement organization"]
    N14["Donation eligibility and authorization"]
    N15["Family involvement"]
    N16["Legally effective donor authorization"]
    N17["Medical ID card, jewelry or wristband"]
    N18["Relevant condition or medication information"]
    N19["Diabetes identifier"]
    N20["Glucose and medication-history assessment"]
    N21["Anticoagulant identifier"]
    N22["Trauma"]
    N23["Medical alert tattoo"]
    N24["Nonstandard appearance"]
    N25["Altered mental status assessment"]
    N26["Medical identification"]
    N27["Current diagnosis"]
    N28["Alert tattoo alone"]
    N29["Resuscitation order"]
    N30["Exact identifier wording and independent clinical findings"]
    N31["BLS-to-ALS communication"]

    N01 -->|remains primary over| N02
    N03 -->|govern| N04
    N05 -->|must not independently determine| N06
    N07 -->|may establish legal| N08
    N09 -->|may identify| N10
    N11 -->|supports notification to| N12
    N13 -->|assess| N14
    N15 -->|does not necessarily override| N16
    N17 -->|may provide| N18
    N19 -->|may prompt| N20
    N21 -->|may increase concern after| N22
    N23 -->|may be overlooked due to| N24
    N25 -->|may include inspection for| N26
    N26 -->|provides clues but does not establish| N27
    N28 -->|may not satisfy legal requirements for| N29
    N30 -->|inform| N31
    N01 -->|guides| N04
    N02 -->|depends on assessment of| N05
    N10 -->|may be supported by| N07
    N10 -->|prompts consideration of| N02
    N10 -->|may prompt| N11
    N12 -->|coordinates with| N13
    N14 -->|includes verification of| N08
    N16 -->|is a form of| N08
    N17 -->|are forms of| N26
    N19 -->|is a form of| N26
    N21 -->|is a form of| N26
    N23 -->|is a form of| N26
    N28 -->|is a form of| N26
    N26 -->|informs| N30
    N26 -->|may prompt verification of| N03
```

### Field recognition of death and withholding resuscitation

```mermaid
flowchart TD
    N01["Unresponsiveness, apnea and absent pulse"]
    N02["Clinical cardiac arrest"]
    N03["Irreversible death"]
    N04["Absent breath sounds, blood pressure, pupils and reflex responses"]
    N05["Presumptive signs of death"]
    N06["Decapitation or decomposition"]
    N07["Obvious irreversible death under protocol"]
    N08["Rigor mortis and dependent lividity"]
    N09["Dependent lividity"]
    N10["Gravity-dependent blood pooling"]
    N11["Rigor mortis"]
    N12["Postmortem stiffening"]
    N13["Time estimates from rigor or decomposition"]
    N14["Time of death"]
    N15["Trauma incompatible with life"]
    N16["Protocol-defined withholding criteria"]
    N17["Traumatic arrest without signs of life"]
    N18["Verified valid exclusion order"]
    N19["Unclear findings or disputed status"]
    N20["Indicated resuscitation and medical direction"]
    N21["Hypothermia, drowning and lightning injury"]
    N22["Special-circumstance protocols"]
    N23["Routine withholding criteria"]
    N24["Obvious irreversible death"]
    N25["Formal neurologic death determination"]
    N26["Physician or legally authorized person"]
    N27["Death pronouncement under local law"]
    N28["Medicolegal process"]
    N29["Cause and manner of death"]

    N01 -->|indicate| N02
    N02 -->|does not alone establish| N03
    N04 -->|may accompany| N05
    N06 -->|may establish| N07
    N08 -->|may support| N07
    N09 -->|results from| N10
    N11 -->|involves| N12
    N13 -->|do not alone establish| N14
    N15 -->|may meet| N16
    N17 -->|may meet| N16
    N18 -->|may meet| N16
    N19 -->|warrant| N20
    N21 -->|require consideration of| N22
    N22 -->|may modify| N23
    N24 -->|differs from| N25
    N26 -->|may have authority for| N27
    N28 -->|determines| N29
    N03 -->|may be recognized through| N07
    N07 -->|may establish| N16
    N02 -->|may present with| N05
    N07 -->|may be evidenced by| N09
    N07 -->|may be evidenced by| N11
    N11 -->|is one factor considered in| N13
    N23 -->|are a subset of| N16
    N19 -->|may occur when evaluating| N16
    N07 -->|is a form of| N24
    N27 -->|may follow determination of| N07
    N28 -->|is distinct from| N27
```

The 2022 model includes narrowly defined severe injuries (torso transection, specified extensive incineration, massive crush injury and other injuries incompatible with life), trauma-specific findings, rigor/lividity, and agency-defined compelling reasons. These are not independent universal withholding rules. The source's 2–12 hour rigor and 24-hour decomposition estimates are not reliable stand-alone time determinations.

### Resuscitation termination, monitoring and BLS-ALS integration

```mermaid
flowchart TD
    N01["Withholding resuscitation"]
    N02["Valid exclusion criteria"]
    N03["Termination of resuscitation (TOR)"]
    N04["Approved TOR criteria"]
    N05["Pronouncement of death"]
    N06["Medical direction"]
    N07["AHA 2025 guidance"]
    N08["BLS, ALS and universal TOR rules"]
    N09["Paramedic assessment"]
    N10["Rhythm, response and reversible causes"]
    N11["AEMT authorization"]
    N12["Rhythm interpretation and electrical therapy"]
    N13["High-quality BLS CPR"]
    N14["Advanced resuscitation"]
    N15["Effective BLS ventilation"]
    N16["Advanced airway placement"]
    N17["Compressions or defibrillation"]
    N18["ECG"]
    N19["Electrical activity"]
    N20["Mechanical circulation"]
    N21["Pulseless electrical activity"]
    N22["Electrical activity and circulation"]
    N23["Waveform capnography"]
    N24["Exhaled carbon dioxide trends"]
    N25["Ventilation, airway placement and blood flow during CPR"]
    N26["Multiple physiological and treatment factors"]
    N27["Single ETCO2 value or rhythm"]
    N28["Futility"]
    N29["Hypothermia, drowning and toxic exposure"]
    N30["Modified resuscitation decisions"]
    N31["Assigned BLS and ALS roles"]
    N32["Valid decision communicated"]
    N33["Objective findings, times, response and decision-maker"]
    N34["Resuscitation documentation"]

    N01 -->|means deciding not to start under| N02
    N03 -->|means stopping efforts under| N04
    N05 -->|is distinct from| N03
    N04 -->|may require consultation with| N06
    N07 -->|distinguishes| N08
    N09 -->|may integrate| N10
    N11 -->|may limit| N12
    N13 -->|remains essential during| N14
    N15 -->|remains essential during| N14
    N16 -->|must not unnecessarily interrupt| N17
    N18 -->|records| N19
    N19 -->|does not guarantee| N20
    N21 -->|illustrates dissociation between| N22
    N23 -->|measures| N24
    N24 -->|may inform| N25
    N26 -->|influence| N24
    N27 -->|cannot alone establish| N28
    N29 -->|may require| N30
    N31 -->|continue until| N32
    N33 -->|must be recorded in| N34
    N01 -->|differs from| N03
    N07 -->|informs| N04
    N09 -->|informs application of| N04
    N11 -->|may limit contributions to| N09
    N14 -->|may include| N16
    N14 -->|may involve| N18
    N18 -->|may show| N21
    N14 -->|may involve| N23
    N23 -->|provides context beyond a| N27
    N30 -->|may alter application of| N04
    N31 -->|support| N14
    N32 -->|may concern| N03
    N34 -->|records decision concerning| N03
```

Do not apply ordinary TOR rules indiscriminately to special circumstances. Rewarming is a caution against premature declaration, not an absolute rule. A monitor reading does not authorize independent declaration of futility.

### Death investigation, scene safety and evidence preservation

```mermaid
flowchart TD
    N01["Violent, unusual or suspicious death"]
    N02["Medical examiner or coroner"]
    N03["Sudden infant death or dead-on-arrival case"]
    N04["Local protocol"]
    N05["Uncertain death status"]
    N06["Indicated patient resuscitation"]
    N07["Suspected crime scene"]
    N08["Law enforcement assistance"]
    N09["Active scene threat"]
    N10["Patient care"]
    N11["Police scene clearance"]
    N12["Evidence preservation"]
    N13["Urgent ventilation, bleeding control, exposure and transport"]
    N14["Minimal necessary scene changes"]
    N15["Evidence integrity"]
    N16["Single entry and exit route when feasible"]
    N17["Unnecessary scene disturbance"]
    N18["Necessary movement or contact"]
    N19["Law enforcement"]
    N20["Preserving clothing damage or knots where feasible"]
    N21["Objective scene observations and necessary alterations"]
    N22["Patient care documentation"]
    N23["Evidence transfer according to policy"]
    N24["Chain of evidence"]
    N25["Necessary covering and warmth"]
    N26["Dignity and prevention of heat loss"]
    N27["Sexual assault evidence-preservation options"]
    N28["Coercion"]
    N29["Capable patient's choices"]
    N30["Evidence-preservation options"]
    N31["Necessary care and basic needs"]
    N32["EMS role"]
    N33["Criminal investigation"]

    N01 -->|may require notification of| N02
    N03 -->|may require notification under| N04
    N05 -->|prioritizes| N06
    N07 -->|warrants consideration of| N08
    N09 -->|precludes unsafe entry for| N10
    N11 -->|enables cautious access for| N10
    N10 -->|takes priority over| N12
    N13 -->|must not be delayed for| N12
    N14 -->|support| N15
    N16 -->|reduces| N17
    N18 -->|should be communicated to| N19
    N20 -->|supports| N15
    N21 -->|belong in| N22
    N23 -->|supports| N24
    N25 -->|support| N26
    N27 -->|require explanation without| N28
    N29 -->|govern acceptance of| N30
    N31 -->|are not conditional on| N12
    N32 -->|does not include independent| N33
    N07 -->|may involve| N01
    N02 -->|may be notified of| N03
    N05 -->|necessitates consideration of| N10
    N07 -->|may present| N09
    N12 -->|depends on| N14
    N16 -->|helps achieve| N14
    N18 -->|may be part of| N14
    N22 -->|records| N14
    N12 -->|includes maintaining| N24
    N10 -->|may require| N25
    N12 -->|may include| N27
    N30 -->|include| N27
    N32 -->|prioritizes| N10
```

### Mandatory reporting, vulnerable patients and safe-haven surrender

```mermaid
flowchart TD
    N01["Applicable state law"]
    N02["Mandatory reporting situations"]
    N03["Suspected child, elder or partner abuse"]
    N04["Mandatory reporting"]
    N05["Crime-related injuries or suspected sexual assault"]
    N06["Drug-related injuries, communicable diseases or animal bites"]
    N07["Involuntary restraint or behavioral emergencies"]
    N08["Required report"]
    N09["Legally designated authority"]
    N10["Clinical handoff alone"]
    N11["Objective findings and exact relevant statements"]
    N12["Safeguarding and reporting"]
    N13["Speculative accusations"]
    N14["Objective reporting"]
    N15["Good-faith reporting"]
    N16["Statutory immunity"]
    N17["Confidentiality"]
    N18["Applicable reporting law"]
    N19["Reporting steps"]
    N20["Agency policy"]
    N21["Infant abandonment and deaths in 1990s"]
    N22["Safe-haven legislation"]
    N23["Texas (1999)"]
    N24["Safe-haven law"]
    N25["Safe-haven laws"]
    N26["Designated authority"]
    N27["State-specific law"]
    N28["Eligible infant age, location and surrender conditions"]
    N29["EMS station designation"]
    N30["Safe-haven surrender procedure"]
    N31["Authorized surrender"]
    N32["State-specific EMS assessment and response"]
    N33["BLS infant assessment"]
    N34["Warmth, breathing, color, responsiveness and illness or injury"]
    N35["Infant instability"]
    N36["ALS or neonatal resources"]
    N37["Infant surrender alone"]
    N38["Illness or indication for invasive care"]

    N01 -->|specifies| N02
    N03 -->|may trigger| N04
    N05 -->|may trigger| N04
    N06 -->|may trigger| N04
    N07 -->|may trigger| N04
    N08 -->|must reach| N09
    N10 -->|does not necessarily satisfy| N04
    N11 -->|support| N12
    N13 -->|undermine| N14
    N15 -->|may receive| N16
    N17 -->|permits or requires disclosure under| N18
    N19 -->|should be recorded according to| N20
    N21 -->|prompted| N22
    N23 -->|enacted first| N24
    N25 -->|permit qualifying surrender to| N26
    N27 -->|determines| N28
    N29 -->|determines applicability of| N30
    N31 -->|requires| N32
    N33 -->|evaluates| N34
    N35 -->|may warrant| N36
    N37 -->|does not establish| N38
    N01 -->|governs| N04
    N04 -->|requires a| N08
    N04 -->|should use| N11
    N11 -->|support| N14
    N15 -->|may satisfy| N04
    N18 -->|determines| N02
    N04 -->|entails recording| N19
    N22 -->|establishes| N25
    N24 -->|is an example of| N25
    N25 -->|vary according to| N27
    N27 -->|governs| N29
    N30 -->|guides| N31
    N32 -->|includes| N33
    N33 -->|may identify| N35
    N31 -->|does not make invasive care necessary on the basis of| N37
    N27 -->|is part of| N01
```

Safe-haven laws exist in all states and DC in the supplied chapter. Specific age and site examples were not independently verified; confirm local statutes. Reporting duties depend on jurisdiction and patient circumstances.

## Cross-concept integration

### Legal authority, consent, care and accountability as a connected system

```mermaid
flowchart TD
    N01["Patient condition and trends"]
    N02["Clinical care needs"]
    N03["Appropriate intervention selection"]
    N04["Scope, credentials and protocols"]
    N05["Authorized intervention selection"]
    N06["Capacity assessment"]
    N07["Consent decision"]
    N08["Valid consent or lawful exception"]
    N09["Authorized care"]
    N10["Valid treatment limitations"]
    N11["Medical direction"]
    N12["Consent, authorization and treatment limitations"]
    N13["Patient welfare and ethical principles"]
    N14["Clinical judgment"]
    N15["Standard of care"]
    N16["EMT observations and ALS findings"]
    N17["Clinical reassessment"]
    N18["Handoff and transport level"]
    N19["Receiving clinician capability and acceptance"]
    N20["Accepted handoff"]
    N21["Continuity of care"]
    N22["Accurate documentation"]
    N23["Findings, decisions, consent, interventions and handoff"]
    N24["Quality review and legal accountability"]
    N25["Confidentiality and reporting law"]
    N26["Training and protocols"]

    N01 -->|determine| N02
    N02 -->|inform| N03
    N04 -->|establish limits of| N05
    N03 -->|must stay within| N05
    N06 -->|determines ability to participate in| N07
    N08 -->|permits| N09
    N10 -->|constrain| N09
    N11 -->|assists uncertainty about| N12
    N13 -->|guide| N14
    N14 -->|informs| N03
    N09 -->|requires appropriate execution under| N15
    N16 -->|inform| N17
    N17 -->|updates| N01
    N17 -->|may require renewed| N06
    N17 -->|informs| N18
    N18 -->|depend on| N19
    N20 -->|preserves| N21
    N22 -->|records| N23
    N22 -->|supports| N24
    N25 -->|govern disclosure of| N22
    N24 -->|may identify improvement needs for| N26
    N26 -->|support| N15
    N05 -->|guides| N09
    N11 -->|helps resolve uncertainty about| N08
    N19 -->|supports| N20
```

This is an educational system map, not a treatment algorithm. BLS care remains foundational while ALS contributes only within individual authorization; no national model, order, or diagram grants permission to perform an advanced skill.
