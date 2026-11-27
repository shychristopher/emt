---
title: Concept Maps
module_id: module-2
view: concept-maps
chapter_id: chapter-1
---

# Chapter 1: Emergency Medical Service Systems, Research, and Public Health — Concept Maps

Read each arrow as a proposition: the source concept, linking phrase and destination concept form a statement. Repeated concepts connect the focused maps; clinical illustrations are explanatory, not treatment protocols or authorization lists.

## Chapter overview

### EMS as an integrated system

```mermaid
flowchart TD
    N01["Acute illness and injury"]
    N02["Death and disability"]
    N03["Prevention"]
    N04["EMS continuum"]
    N05["Recognition and dispatch"]
    N06["BLS and ALS response"]
    N07["System governance"]
    N08["Medical oversight"]
    N09["Definitive care and recovery"]
    N10["Professional practice"]
    N11["Patient care data"]
    N12["Quality improvement"]
    N13["Research and public health surveillance"]
    N14["Evidence-based practice"]

    N01 -->|can cause| N02
    N03 -->|reduces incidence of| N01
    N04 -->|aims to reduce| N02
    N04 -->|begins with| N05
    N05 -->|mobilizes| N06
    N07 -->|organizes resources for| N06
    N08 -->|governs| N06
    N06 -->|connects patients to| N09
    N10 -->|supports safe delivery of| N04
    N04 -->|generates| N11
    N11 -->|inform| N12
    N11 -->|support| N13
    N13 -->|inform| N14
    N14 -->|informs| N08
    N12 -->|strengthens| N07
    N13 -->|identify opportunities for| N03
```

## EMS system development and organization

### Historical transformation of EMS

```mermaid
flowchart TD
    N01["Funeral-home ambulance model"]
    N02["Transport without prehospital treatment"]
    N03["Korean and Vietnam conflicts"]
    N04["Field treatment before transport"]
    N05["EMS continuum"]
    N06["Iraq and Afghanistan experience"]
    N07["Trauma care"]
    N08["1960s traffic safety concerns"]
    N09["Crash injury and death"]
    N10["1966 White Paper"]
    N11["Ambulance care and training"]
    N12["1966 Highway Safety Act"]
    N13["Highway safety programs including EMS"]
    N14["NHTSA"]
    N15["National standard curricula"]
    N16["1973 EMS System Act"]
    N17["System planning and personnel training"]
    N18["Trained EMS workforce"]
    N19["AHA public CPR and BLS education"]
    N20["Bystanders"]
    N21["EMS response"]

    N01 -->|emphasized| N02
    N03 -->|demonstrated benefit of| N04
    N04 -->|helped transform| N05
    N06 -->|continues to inform| N07
    N08 -->|prompted efforts to reduce| N09
    N10 -->|identified deficiencies in| N11
    N12 -->|required states to establish| N13
    N13 -->|led to DOT leadership through| N14
    N14 -->|developed| N15
    N16 -->|funded| N17
    N15 -->|helped build| N18
    N17 -->|supports| N05
    N18 -->|provides| N04
    N19 -->|extends lifesaving care to| N20
    N20 -->|can begin care before| N21
    N07 -->|is a component of| N05
    N05 -->|evolved from| N02
    N10 -->|documented problems involving| N09
    N11 -->|were addressed through| N15
    N21 -->|forms part of| N05
```

### National education and system vision

```mermaid
flowchart TD
    N01["1993 NREMT Blueprint"]
    N02["National training curricula"]
    N03["1996 EMS Agenda for the Future"]
    N04["Health system integration"]
    N05["2000 EMS Education Agenda"]
    N06["National education and licensure consistency"]
    N07["2005 National EMS Core Content"]
    N08["National EMS Scope of Practice Model"]
    N09["Four licensure levels"]
    N10["National EMS Education Standards"]
    N11["Educational objectives"]
    N12["2006 IOM EMS at the Crossroads"]
    N13["Common state scopes and reciprocity"]
    N14["Paramedic program accreditation"]
    N15["National certification before licensure and credentialing"]
    N16["National consistency"]
    N17["EMS Agenda 2050"]
    N18["Patient-centered integrated EMS"]
    N19["2014 advisory recommendation"]

    N01 -->|guided| N02
    N03 -->|promoted| N04
    N05 -->|addressed| N06
    N07 -->|defines knowledge domain for| N08
    N08 -->|distinguishes| N09
    N08 -->|underpins| N10
    N10 -->|define minimum entry-level| N11
    N12 -->|recommended| N13
    N12 -->|recommended| N14
    N12 -->|recommended| N15
    N13 -->|seek to improve| N16
    N06 -->|supports| N16
    N17 -->|extends earlier vision toward| N18
    N04 -->|is advanced by| N18
    N19 -->|initiated development of| N17
    N02 -->|support| N06
    N11 -->|support| N06
    N08 -->|supports| N16
    N18 -->|depends on a trained workforce supported by| N11
```

### State governance and system standards

```mermaid
flowchart TD
    N01["State EMS agency"]
    N02["Statewide EMS system"]
    N03["Local agencies and personnel"]
    N04["State law and policy"]
    N05["NHTSA assessment standards"]
    N06["Resource management"]
    N07["Equitable emergency access"]
    N08["Human resources and training"]
    N09["Competent ambulance staffing"]
    N10["Communications"]
    N11["Public, dispatch, crews and hospitals"]
    N12["Transportation resources"]
    N13["Safe ground and air transport"]
    N14["Facilities"]
    N15["Appropriate definitive care"]
    N16["Trauma systems"]
    N17["Specialized care and rehabilitation"]
    N18["Medical direction"]
    N19["Clinical oversight"]
    N20["Public information and education"]
    N21["Prevention and appropriate EMS access"]
    N22["Evaluation and QI"]

    N01 -->|plans and coordinates| N02
    N01 -->|regulates and licenses| N03
    N04 -->|govern| N02
    N05 -->|recommend elements for| N02
    N06 -->|aims to ensure| N07
    N08 -->|support| N09
    N10 -->|connect| N11
    N12 -->|provide| N13
    N14 -->|provide| N15
    N16 -->|coordinate triage and transport to| N17
    N18 -->|provides| N19
    N20 -->|promote| N21
    N22 -->|continually assess| N02
    N02 -->|depends on| N06
    N02 -->|depends on| N08
    N02 -->|depends on| N10
    N12 -->|connect patients to| N14
    N19 -->|guides| N03
    N06 -->|allocates| N12
    N07 -->|depends on| N14
    N02 -->|integrates| N16
    N02 -->|provides| N20
```

NHTSA standards are recommendations; states control system design. The source describes EMT-level ambulance staffing as a recommended standard, not a universal statement of every local staffing rule.

### Service models, capabilities and quality

```mermaid
flowchart TD
    N01["EMS service model"]
    N02["EMS agency"]
    N03["Fire-based EMS"]
    N04["Existing fire suppression organization"]
    N05["Municipal third service"]
    N06["Police and fire services"]
    N07["Private EMS"]
    N08["Private ownership and local operating rules"]
    N09["Hospital-based EMS"]
    N10["Hospital control"]
    N11["Law enforcement EMS"]
    N12["Law enforcement operations"]
    N13["Public safety officer model"]
    N14["Fire, police and EMS"]
    N15["Emergency response and transport"]
    N16["Transfers, event and disaster services"]
    N17["Critical care, air and special operations support"]
    N18["Prevention and community paramedicine"]
    N19["Clinical capability"]
    N20["Staff credentials and equipment"]
    N21["Medical direction and service authorization"]
    N22["Clinical quality"]
    N23["Patient outcomes"]
    N24["Service quality"]
    N25["Community needs"]
    N26["Economic efficiency"]
    N27["Reasonable cost"]
    N28["Accountability"]
    N29["Improvement and resilience"]

    N01 -->|determines organizational control of| N02
    N03 -->|uses| N04
    N05 -->|operates separately from| N06
    N07 -->|operates under| N08
    N09 -->|operates under| N10
    N11 -->|combines care with| N12
    N13 -->|cross-trains personnel across| N14
    N02 -->|may use any| N01
    N02 -->|delivers| N15
    N02 -->|may deliver| N16
    N02 -->|may deliver| N17
    N02 -->|may deliver| N18
    N19 -->|depends on| N20
    N19 -->|depends on| N21
    N01 -->|does not establish| N19
    N19 -->|helps determine appropriate use of| N17
    N22 -->|assesses achievement of| N23
    N24 -->|assesses whether care meets| N25
    N26 -->|balances quality with| N27
    N28 -->|checks whether systems meet| N25
    N29 -->|help systems adapt and strengthen| N02
    N03 -->|is a type of| N01
    N05 -->|is a type of| N01
    N07 -->|is a type of| N01
    N09 -->|is a type of| N01
    N11 -->|is a type of| N01
    N13 -->|is a type of| N01
    N22 -->|evaluates care delivered by| N02
    N24 -->|evaluates performance of| N02
    N26 -->|is a design goal for| N02
```

### Dispatch, access and communication

```mermaid
flowchart TD
    N01["911 access"]
    N02["Emergency call processing"]
    N03["Non-911 access"]
    N04["PSAP"]
    N05["Enhanced 911"]
    N06["ANI and ALI"]
    N07["Incident information"]
    N08["Multiagency dispatch"]
    N09["Emergency medical dispatcher"]
    N10["Prearrival instructions"]
    N11["Bystander CPR and bleeding control"]
    N12["Police, fire and EMS"]
    N13["Wireless calls"]
    N14["Fixed location information"]
    N15["Boundary routing"]
    N16["Wrong PSAP"]
    N17["Phase I E-911"]
    N18["Device number and cell site location"]
    N19["Phase II E-911"]
    N20["Estimated caller coordinates"]
    N21["VoIP 911"]
    N22["Callback number and registered location"]
    N23["Dispatch information"]
    N24["Equipment and resource needs"]
    N25["Patient assessment"]

    N01 -->|reduces time to| N02
    N03 -->|also connects callers to| N02
    N02 -->|occurs at| N04
    N05 -->|provides| N06
    N06 -->|assist| N04
    N04 -->|collects and verifies| N07
    N07 -->|guides| N08
    N09 -->|provides| N10
    N10 -->|can initiate| N11
    N08 -->|mobilizes| N12
    N13 -->|may lack| N14
    N15 -->|may send calls to| N16
    N17 -->|provides| N18
    N19 -->|provides| N20
    N20 -->|help establish| N07
    N21 -->|uses| N22
    N22 -->|assist routing to| N04
    N23 -->|helps anticipate| N24
    N25 -->|may revise| N23
    N25 -->|informs updates about| N24
    N04 -->|may employ| N09
    N13 -->|can be affected by| N15
    N13 -->|may be located using| N17
    N13 -->|may be located using| N19
    N18 -->|help establish| N07
    N07 -->|forms basis for| N23
```

The wireless phases are the historical framework in the source; Phase II accuracy was described as 50–300 meters depending on technology. Dispatch information is not a confirmed diagnosis.

### Tiered response and resource allocation

```mermaid
flowchart TD
    N01["Resource management"]
    N02["BLS and ALS resources"]
    N03["Staffing and training"]
    N04["Medical direction"]
    N05["Resource upgrades and intercepts"]
    N06["Dispatch information"]
    N07["Initial response configuration"]
    N08["BLS first with separate ALS"]
    N09["Mixed EMT and paramedic crew"]
    N10["Patient assessment"]
    N11["Clinical resource needs"]
    N12["Communications"]
    N13["Time to definitive care"]
    N14["BLS interventions"]
    N15["Receiving facility capabilities"]

    N01 -->|determines availability of| N02
    N03 -->|shape| N02
    N04 -->|helps establish criteria for| N05
    N06 -->|initiates| N07
    N07 -->|may involve| N08
    N07 -->|may involve| N09
    N10 -->|identifies changing| N11
    N11 -->|inform| N05
    N12 -->|coordinate| N05
    N05 -->|must consider| N13
    N14 -->|remain necessary during| N05
    N15 -->|influence| N13
    N02 -->|enable| N07
    N07 -->|may be revised through| N05
```

## Provider scope and medical oversight

### Provider levels and complementary roles

```mermaid
flowchart TD
    N01["National EMS Scope of Practice Model"]
    N02["EMR"]
    N03["EMT"]
    N04["AEMT"]
    N05["Paramedic"]
    N06["Immediate lifesaving care"]
    N07["CPR, AED and basic ventilation"]
    N08["BLS assessment, care and transport"]
    N09["Glucose, pulse oximetry, CPAP and selected medications"]
    N10["ECG acquisition and transmission"]
    N11["IV or IO access, selected medications and advanced airway devices"]
    N12["Interpretive ECG, manual defibrillation and pacing"]
    N13["Intubation and expanded pharmacology"]
    N14["Paramedic ECG interpretation"]
    N15["Advanced patient management"]

    N01 -->|distinguishes| N02
    N01 -->|distinguishes| N03
    N01 -->|distinguishes| N04
    N01 -->|distinguishes| N05
    N02 -->|provides| N06
    N06 -->|includes| N07
    N03 -->|builds on| N06
    N03 -->|provides| N08
    N08 -->|may include when authorized| N09
    N08 -->|may include when authorized| N10
    N04 -->|adds limited advanced care to| N08
    N04 -->|may provide when authorized| N11
    N05 -->|adds broader advanced capability to| N08
    N05 -->|may provide when authorized| N12
    N05 -->|may provide when authorized| N13
    N10 -->|provides tracing for| N14
    N05 -->|may perform when authorized| N14
    N08 -->|continues during| N15
    N11 -->|may contribute to| N15
```

The national model includes glucose measurement at EMT level even though the textbook lists it under AEMT. ECG acquisition is not interpretation. Actual authorization varies by jurisdiction and agency.

### Education, legal scope and individual authorization

```mermaid
flowchart TD
    N01["Education"]
    N02["Knowledge and skills"]
    N03["Certification"]
    N04["Competency"]
    N05["State licensure"]
    N06["Legal permission to practice"]
    N07["State law"]
    N08["Agency credentialing"]
    N09["System-specific approval"]
    N10["Medical director"]
    N11["National scope model"]
    N12["State scope of practice"]
    N13["Authorized clinical practice"]
    N14["Agency protocols"]
    N15["Higher-level partner supervision"]
    N16["Assistance with advanced tasks"]
    N17["Continuing education and skill verification"]
    N18["Certification and licensure"]
    N19["Ethical and administrative requirements"]

    N01 -->|develops| N02
    N03 -->|verifies| N04
    N05 -->|provides| N06
    N07 -->|defines limits of| N06
    N08 -->|provides| N09
    N10 -->|oversees| N08
    N11 -->|provides framework for| N12
    N12 -->|limits| N13
    N06 -->|is required for| N13
    N09 -->|is required for| N13
    N14 -->|guide| N13
    N02 -->|do not independently authorize| N13
    N15 -->|does not independently expand| N12
    N16 -->|requires applicable permission within| N13
    N17 -->|support maintenance of| N18
    N18 -->|also require compliance with| N19
    N03 -->|does not independently grant| N06
    N17 -->|help maintain| N03
    N17 -->|help maintain| N05
```

### Medical direction and accountability

```mermaid
flowchart TD
    N01["Medical oversight"]
    N02["Medical director"]
    N03["EMT as designated agent"]
    N04["Education and credentialing"]
    N05["Quality improvement"]
    N06["Indirect medical oversight"]
    N07["Direct medical oversight"]
    N08["Off-line medical direction"]
    N09["Predetermined written guidelines"]
    N10["Standing orders"]
    N11["Real-time physician contact"]
    N12["Real-time physician guidance"]
    N13["On-line medical direction"]
    N14["On-scene medical direction"]
    N15["Scene"]
    N16["Protocols"]
    N17["Triage, treatment, transport and destination"]
    N18["State law and credentialing"]
    N19["Orders and authorized actions"]

    N01 -->|places ultimate clinical responsibility with| N02
    N02 -->|delegates within applicable law to| N03
    N02 -->|oversees| N04
    N02 -->|facilitates| N05
    N01 -->|includes| N06
    N01 -->|includes| N07
    N06 -->|includes| N08
    N08 -->|uses| N09
    N09 -->|may include| N10
    N10 -->|permit action under conditions without| N11
    N07 -->|provides| N12
    N12 -->|may occur through| N13
    N12 -->|may occur through| N14
    N13 -->|uses remote communication for| N11
    N14 -->|requires physician presence at| N15
    N16 -->|guide| N17
    N10 -->|are a subset of| N16
    N12 -->|may supplement| N16
    N18 -->|limit| N03
    N18 -->|also limit| N19
    N16 -->|guide| N19
```

Some systems use standing orders as a synonym for off-line direction; others use the term for communication-failure orders. Neither direct nor indirect orders automatically override lawful scope or credentialing.

### Chest pain: historical orders and clinical reasoning

```mermaid
flowchart TD
    N01["Historical chest-pain example"]
    N02["Standing orders versus on-line orders"]
    N03["Off-line medical direction"]
    N04["Persistent pain after initial nitroglycerin"]
    N05["On-line medical direction"]
    N06["Acute coronary syndrome"]
    N07["Coronary blood flow"]
    N08["Reduced coronary blood flow"]
    N09["Ischemic discomfort"]
    N10["Aspirin"]
    N11["Platelet aggregation"]
    N12["Nitroglycerin"]
    N13["Vasodilation"]
    N14["Blood pressure"]
    N15["Nitroglycerin suitability"]
    N16["Hemodynamics, possible RV infarction and recent PDE-5 inhibitor use"]
    N17["Aspirin suitability"]
    N18["Allergy and bleeding considerations"]
    N19["2025 ACS guideline"]
    N20["ACS with SpO₂ below 90 percent"]
    N21["ACS with SpO₂ at or above 90 percent"]
    N22["BLS history and vital trends"]
    N23["ALS clinical reasoning"]
    N24["ECG acquisition"]
    N25["Electrical tracing"]
    N26["Paramedic interpretation"]
    N27["Motion and electrode problems"]
    N28["Receiving center and monitoring decisions"]
    N29["Normal initial ECG or symptom relief"]

    N01 -->|illustrates| N02
    N01 -->|places initial measures under| N03
    N04 -->|in the example requires| N05
    N06 -->|involves reduced| N07
    N08 -->|may produce| N09
    N10 -->|inhibits| N11
    N12 -->|causes| N13
    N13 -->|may relieve| N09
    N13 -->|may reduce| N14
    N15 -->|depends on| N16
    N17 -->|depends on| N18
    N19 -->|recommends oxygen for| N20
    N19 -->|does not recommend routine oxygen for| N21
    N22 -->|inform| N23
    N24 -->|provides| N25
    N25 -->|may reveal ischemia or rhythm abnormalities through| N26
    N27 -->|may distort| N25
    N26 -->|may refine| N28
    N29 -->|does not exclude| N06
    N01 -->|illustrates care for possible| N06
    N04 -->|may reflect ongoing| N09
    N15 -->|must be evaluated before use of| N12
    N17 -->|must be evaluated before use of| N10
    N06 -->|may be managed with authorized| N10
    N06 -->|may be accompanied by| N09
    N19 -->|addresses management of| N06
    N22 -->|help characterize| N09
    N23 -->|may incorporate| N26
```

The historic example used 15 L/min oxygen, one prescribed nitroglycerin tablet with systolic BP above 90 mmHg, 160–325 mg aspirin, and ALS contact before seeking orders for further nitroglycerin. These values describe historical teaching, not an actionable or universal protocol. The oxygen threshold is specific to ACS; medication decisions require applicable authorization and contraindication assessment.

## Clinical care and interagency integration

### Destination selection and definitive care

```mermaid
flowchart TD
    N01["Patient condition and injury extent"]
    N02["Destination selection"]
    N03["Transport time and stability"]
    N04["Facility staffing and capabilities"]
    N05["Regional protocols and medical direction"]
    N06["Definitive care"]
    N07["Emergency department"]
    N08["Stabilization and further care"]
    N09["Trauma center"]
    N10["Specialized injury care and surgery"]
    N11["Burn center"]
    N12["Specialized burn care and rehabilitation"]
    N13["Stroke center"]
    N14["Stroke imaging and time-sensitive treatment"]
    N15["Cardiac center"]
    N16["Coronary reperfusion"]
    N17["Pediatric and obstetric centers"]
    N18["Age-specific and high-risk pregnancy needs"]
    N19["Poison and hyperbaric resources"]
    N20["Selected toxic and diving emergencies"]
    N21["Spine and psychiatric centers"]
    N22["Specialized spine and behavioral needs"]
    N23["Specialty resources"]
    N24["BLS findings and ALS assessment"]
    N25["Receiving facility prenotification"]

    N01 -->|inform| N02
    N03 -->|constrain| N02
    N04 -->|inform| N02
    N05 -->|govern| N02
    N02 -->|aims to match needs to| N06
    N07 -->|provides| N08
    N09 -->|provides| N10
    N11 -->|provides| N12
    N13 -->|provides| N14
    N15 -->|may provide| N16
    N17 -->|address| N18
    N19 -->|address| N20
    N21 -->|address| N22
    N06 -->|may require| N23
    N23 -->|include| N09
    N23 -->|include| N13
    N23 -->|include| N15
    N23 -->|include| N11
    N24 -->|may refine| N02
    N25 -->|prepares teams for| N06
    N02 -->|may choose| N07
    N23 -->|include| N17
    N23 -->|include| N19
    N23 -->|include| N21
```

The closest hospital is not automatically the best destination; bypass is not universally appropriate either. Other specialty centers listed address additional specific needs.

### Suspected stroke: findings, capacity and system choice

```mermaid
flowchart TD
    N01["New inability to speak and agitation"]
    N02["Time-sensitive neurologic emergency"]
    N03["Stroke"]
    N04["Glucose abnormalities"]
    N05["Authorized BLS glucose measurement"]
    N06["Local stroke screen"]
    N07["Neurologic deficits"]
    N08["Last known well"]
    N09["Time-sensitive stroke treatment"]
    N10["BLS airway assessment and vital trends"]
    N11["Transport stability"]
    N12["ALS neurologic assessment"]
    N13["Stroke severity assessment"]
    N14["Regional destination decision"]
    N15["Hospital imaging"]
    N16["Stroke type"]
    N17["Stroke-capable facility and EVT access"]
    N18["Family history and anticoagulant use"]
    N19["Receiving team assessment"]
    N20["Speech impairment"]
    N21["Decision-making capacity"]
    N22["Accessible communication"]
    N23["Patient consent and medical direction policies"]
    N24["Prenotification"]

    N01 -->|raise concern for| N02
    N02 -->|may be caused by| N03
    N04 -->|may mimic| N03
    N05 -->|helps assess for| N04
    N06 -->|helps characterize| N07
    N08 -->|informs eligibility for| N09
    N10 -->|inform| N11
    N12 -->|may refine| N13
    N13 -->|informs| N14
    N15 -->|is critical to determine| N16
    N14 -->|considers| N11
    N14 -->|considers| N17
    N18 -->|inform| N19
    N20 -->|does not establish loss of| N21
    N22 -->|supports assessment of| N21
    N23 -->|govern| N14
    N24 -->|communicates| N08
    N24 -->|communicates| N07
    N07 -->|may suggest| N02
    N08 -->|informs| N14
    N14 -->|aims to facilitate| N09
    N03 -->|requires imaging to determine| N16
    N24 -->|supports| N19
    N21 -->|informs application of| N23
```

The source's 78-year-old patient has a nearby hospital and a stroke center about 20 minutes away. Distance alone cannot settle the choice. Additional advanced procedures must not needlessly delay transport; regional systems may favor direct EVT-center transport or nearer stroke-capable care with transfer.

### Professional readiness and public trust

```mermaid
flowchart TD
    N01["EMT professional responsibility"]
    N02["Vehicle and equipment readiness"]
    N03["Safe emergency response"]
    N04["Knowledge and skill competence"]
    N05["Safe assessment and treatment"]
    N06["Continuing education"]
    N07["Equipment cleaning and disinfection"]
    N08["Contamination risk"]
    N09["Professional grooming and uniform"]
    N10["Patient confidence"]
    N11["Integrity and moral character"]
    N12["Public trust"]
    N13["Empathy and listening"]
    N14["Patient communication and advocacy"]
    N15["Calm reassurance"]
    N16["Patient emotional needs"]
    N17["Judgment and leadership"]
    N18["Adaptability and resourcefulness"]
    N19["Response to unexpected conditions"]
    N20["Stress management and support"]
    N21["Provider well-being"]
    N22["Physical ability, vision and hearing"]
    N23["ADA reasonable accommodations"]
    N24["Employment for qualified individuals"]
    N25["Teamwork and diplomacy"]
    N26["Interagency coordination"]
    N27["Local terrain and traffic knowledge"]
    N28["Mixed-level crew preparation"]
    N29["Equipment familiarity"]
    N30["Advanced procedural authorization"]

    N01 -->|includes| N02
    N02 -->|supports| N03
    N04 -->|supports| N05
    N06 -->|maintains and expands| N04
    N07 -->|reduce| N08
    N09 -->|support| N10
    N11 -->|uphold| N12
    N13 -->|support| N14
    N15 -->|supports| N16
    N17 -->|help prioritize| N05
    N18 -->|support| N19
    N20 -->|help maintain| N21
    N22 -->|support| N03
    N23 -->|support access to| N24
    N25 -->|enable| N26
    N27 -->|support| N03
    N14 -->|reinforce| N12
    N28 -->|clarifies roles and equipment for| N05
    N29 -->|does not establish| N30
    N01 -->|requires| N04
    N01 -->|includes| N07
    N10 -->|supports| N12
    N15 -->|contributes to| N14
    N18 -->|support| N05
    N21 -->|supports| N03
    N24 -->|supports participation in| N01
    N26 -->|supports| N03
    N29 -->|supports| N28
    N05 -->|reinforces| N12
```

The source's 125-pound lifting example is not a universal job requirement or safe solo-lifting target. Essential functions, accommodations, equipment and safe-lift policies vary.

### Scene safety and coordinated rescue

```mermaid
flowchart TD
    N01["Scene hazards"]
    N02["Crew, patient and bystander safety"]
    N03["Crew injury"]
    N04["Patient care"]
    N05["Scene safety"]
    N06["Patient access"]
    N07["Police and fire expertise"]
    N08["Scene control"]
    N09["Technical rescue"]
    N10["Appropriate training and authorization"]
    N11["Safe treatment area"]
    N12["Traffic and poor visibility"]
    N13["Lighting and reflective clothing"]
    N14["Visibility-related risk"]
    N15["PPE"]
    N16["Sharp objects and infection hazards"]
    N17["Violence or volatile behavior"]
    N18["Scene precautions"]
    N19["Downed power lines, fire and chemical hazards"]
    N20["Hazard reassessment"]
    N21["Safe vehicle operation and restraint use"]
    N22["Primary assessment"]

    N01 -->|threaten| N02
    N03 -->|may divert rescuers from| N04
    N05 -->|is a prerequisite for| N06
    N07 -->|help establish| N08
    N09 -->|requires| N10
    N08 -->|creates| N11
    N12 -->|can compromise| N11
    N13 -->|reduce| N14
    N15 -->|reduces exposure to| N16
    N17 -->|requires additional| N18
    N19 -->|require avoidance or control before| N06
    N05 -->|requires ongoing| N20
    N20 -->|may prompt| N18
    N21 -->|protect| N02
    N06 -->|enables| N22
    N08 -->|supports| N05
    N05 -->|protects| N02
    N01 -->|may result in| N03
    N09 -->|supports safe| N06
    N13 -->|support| N05
    N15 -->|supports| N05
```

### BLS assessment as foundation for ALS reasoning

```mermaid
flowchart TD
    N01["Primary assessment"]
    N02["Immediate life threats"]
    N03["Airway, breathing, arrest and severe bleeding problems"]
    N04["Authorized BLS care"]
    N05["Secondary assessment"]
    N06["Other injuries and conditions"]
    N07["Inadequate ventilation or declining alertness"]
    N08["Advanced airway assessment and capnography"]
    N09["Chest discomfort, syncope or abnormal pulse"]
    N10["ECG acquisition and paramedic interpretation"]
    N11["Cool skin, weak pulses or falling BP"]
    N12["Compromised perfusion"]
    N13["ALS shock assessment and vascular access"]
    N14["Altered mental status"]
    N15["Metabolic or neurologic causes"]
    N16["Glucose and neurologic assessment"]
    N17["Serial observations and vital trends"]
    N18["ALS clinical reasoning"]
    N19["Authorized management"]
    N20["Reassessment"]

    N01 -->|identifies| N02
    N02 -->|include| N03
    N04 -->|addresses| N02
    N05 -->|identifies| N06
    N07 -->|may warrant| N08
    N09 -->|may warrant| N10
    N11 -->|may indicate| N12
    N12 -->|may warrant| N13
    N14 -->|may reflect| N15
    N16 -->|help differentiate| N15
    N17 -->|inform| N18
    N08 -->|contribute information to| N18
    N10 -->|contribute information to| N18
    N18 -->|may refine| N19
    N19 -->|requires| N20
    N20 -->|updates| N17
    N04 -->|continues during| N19
    N05 -->|follows attention to| N02
    N13 -->|may contribute to| N19
    N16 -->|contribute to| N18
```

Findings and monitor values guide reasoning but do not by themselves establish diagnoses or require a particular ALS procedure.

### Oxygenation, ventilation and resuscitation

```mermaid
flowchart TD
    N01["Oxygenation"]
    N02["Blood"]
    N03["Pulse oximetry"]
    N04["Oxygen saturation"]
    N05["Adequate ventilation"]
    N06["Ventilation"]
    N07["Carbon dioxide"]
    N08["Waveform capnography"]
    N09["Exhaled carbon dioxide"]
    N10["Circulation"]
    N11["Clinical breathing findings"]
    N12["Supplemental oxygen"]
    N13["Ventilation failure"]
    N14["BLS BVM support"]
    N15["Effective ventilation"]
    N16["Selected ALS airway devices"]
    N17["Advanced airway placement"]
    N18["Procedural risk and possible CPR interruption"]
    N19["Endotracheal tube in adult arrest"]
    N20["High-quality compressions"]
    N21["Cardiac arrest resuscitation"]
    N22["Early defibrillation for shockable rhythms"]
    N23["IV or IO access and authorized medications"]
    N24["BLS reporting of chest rise and mental status"]

    N01 -->|describes oxygen entry into| N02
    N03 -->|estimates| N04
    N04 -->|does not independently establish| N05
    N06 -->|moves air and removes| N07
    N08 -->|displays| N09
    N10 -->|also influences| N09
    N11 -->|help interpret| N08
    N12 -->|may preserve saturation despite| N13
    N14 -->|may provide| N15
    N16 -->|may provide a route for| N15
    N17 -->|introduces| N18
    N08 -->|helps verify and monitor| N19
    N20 -->|remain central to| N21
    N22 -->|remains central to| N21
    N15 -->|supports| N21
    N23 -->|may supplement| N21
    N17 -->|should not unnecessarily interrupt| N20
    N24 -->|informs| N11
    N04 -->|provides information about| N01
    N06 -->|is necessary for removal of| N09
    N13 -->|impairs| N05
    N15 -->|addresses| N13
    N08 -->|provides information about| N06
    N12 -->|supports| N01
```

### Movement safety and advanced device continuity

```mermaid
flowchart TD
    N01["Patient movement"]
    N02["Existing injury"]
    N03["Improper lifting"]
    N04["EMS personnel"]
    N05["Adequate personnel and mechanical aids"]
    N06["Safe body mechanics"]
    N07["Appropriate movement technique"]
    N08["Movement urgency and patient condition"]
    N09["Mixed-level patient movement"]
    N10["Role assignments"]
    N11["Airway, monitor and vascular lines"]
    N12["Device routing and checks"]
    N13["Device dislodgement"]
    N14["Ongoing patient care"]
    N15["Post-movement reassessment"]
    N16["Breathing, circulation and device function"]
    N17["Communication of abnormalities"]
    N18["Responsible clinician"]
    N19["Spinal motion restriction"]
    N20["Local protocol"]
    N21["Rigid extrication board"]
    N22["Prolonged transport"]

    N01 -->|can exacerbate| N02
    N03 -->|can injure| N04
    N05 -->|reduce risk from| N03
    N06 -->|reduce risk from| N03
    N07 -->|helps prevent| N02
    N08 -->|inform choice of| N07
    N09 -->|requires coordinated| N10
    N10 -->|allocate responsibility for| N11
    N12 -->|reduce risk of| N13
    N13 -->|can disrupt| N14
    N15 -->|checks| N16
    N16 -->|inform| N17
    N17 -->|supports authorized response by| N18
    N19 -->|requires selective use under| N20
    N21 -->|is not automatically appropriate for| N22
    N09 -->|is a form of| N01
    N01 -->|requires attention to risk from| N03
    N10 -->|support| N12
    N01 -->|requires| N15
    N19 -->|may influence choice of| N07
    N21 -->|may be used during| N01
```

### Trauma case: mechanism, findings and resource decisions

```mermaid
flowchart TD
    N01["Fall down steep embankment"]
    N02["Difficult patient access"]
    N03["Trained technical rescue"]
    N04["Substantial injury"]
    N05["Age and prolonged extrication"]
    N06["Trauma resource activation or ALS intercept"]
    N07["Technical rescue team"]
    N08["EMR handoff findings"]
    N09["Vital signs and patient status"]
    N10["Occult injury or deterioration"]
    N11["Thigh deformity and pain"]
    N12["Significant extremity injury"]
    N13["Loss of toe sensation and movement"]
    N14["Neurologic injury"]
    N15["Palpable distal pulses"]
    N16["BLS serial circulation, sensation and movement checks"]
    N17["Changes before and after stabilization"]
    N18["Protocol-directed stabilization"]
    N19["Associated pelvic, knee or lower-leg injury"]
    N20["Traction splint suitability"]
    N21["Existing neurologic deficit"]
    N22["Time to definitive care"]
    N23["ALS monitoring and authorized vascular access"]
    N24["Management of deterioration"]
    N25["Vascular access"]
    N26["Internal hemorrhage"]
    N27["Hospital intervention"]
    N28["BLS bleeding control and heat-loss protection"]
    N29["Time-sensitive definitive care"]

    N01 -->|creates| N02
    N02 -->|requires| N03
    N01 -->|raises concern for| N04
    N05 -->|add concern for| N04
    N04 -->|may warrant| N06
    N07 -->|provides| N08
    N08 -->|establish initial| N09
    N09 -->|may initially appear stable despite| N10
    N11 -->|suggest| N12
    N13 -->|raises concern for| N14
    N15 -->|do not exclude| N14
    N16 -->|track| N17
    N12 -->|may warrant| N18
    N19 -->|may limit| N20
    N21 -->|requires careful assessment of| N20
    N06 -->|must consider| N22
    N23 -->|may support| N24
    N25 -->|does not control| N26
    N26 -->|may require| N27
    N28 -->|remain priorities during| N06
    N03 -->|is performed by| N07
    N04 -->|may include| N12
    N12 -->|may be accompanied by| N13
    N21 -->|is indicated by| N13
    N18 -->|requires| N16
    N20 -->|informs choice of| N18
    N10 -->|may warrant| N23
    N23 -->|may include| N25
    N27 -->|is a component of| N29
    N22 -->|influences access to| N29
```

The case describes a 65-year-old after a 30-foot fall, with initial RR 24, pulse 90, SpO₂ 96% on room air, and right foot neurologic deficits despite pulses. Traction was used historically; the 2025 NAEMSP position statement notes uncertain comparative benefit and possible preference for static stabilization. The case's 15-minute reassessment interval is not permission to delay reassessment after interventions or changes.

### Pain management as shared clinical work

```mermaid
flowchart TD
    N01["Injury"]
    N02["Pain"]
    N03["BLS pain history and appropriate scale"]
    N04["Reassurance, positioning and stabilization"]
    N05["Pain severity and clinical findings"]
    N06["Advanced analgesia considerations"]
    N07["Contraindications, vitals and scope"]
    N08["Authorized fentanyl"]
    N09["Opioid receptors"]
    N10["Pain perception"]
    N11["Respiration and consciousness"]
    N12["Hemodynamics"]
    N13["Evidence-based pain guidelines"]
    N14["Opioid and nonopioid options"]
    N15["Limited comparative evidence"]
    N16["Agency authorization"]
    N17["BLS reassessment"]
    N18["Pain response"]
    N19["Underlying injury"]
    N20["ALS partner communication"]

    N01 -->|may produce| N02
    N03 -->|characterize| N02
    N04 -->|may relieve| N02
    N05 -->|inform| N06
    N07 -->|limit| N06
    N08 -->|acts through| N09
    N09 -->|mediate reduction in| N10
    N08 -->|may depress| N11
    N08 -->|may affect| N12
    N13 -->|support multiple| N14
    N15 -->|qualifies| N13
    N14 -->|are selected within| N16
    N17 -->|monitors| N11
    N17 -->|monitors| N12
    N17 -->|tracks| N18
    N18 -->|does not establish resolution of| N19
    N17 -->|informs| N20
    N03 -->|provide information about| N05
    N06 -->|may include| N08
    N06 -->|are informed by| N13
    N10 -->|contributes to experience of| N02
    N02 -->|is reassessed through| N17
```

Analgesia is illustrative supplemental knowledge, not medication authorization. AEMT analgesia permissions vary. BLS pain care and monitoring continue regardless of drug availability.

## Continuity, patient advocacy and safety

### Transport, handoff and documentation

```mermaid
flowchart TD
    N01["Destination selection"]
    N02["Patient needs and local protocols"]
    N03["Prenotification"]
    N04["Patient count, severity and immediate needs"]
    N05["Receiving facility resources"]
    N06["En-route reassessment"]
    N07["Condition changes"]
    N08["Updated facility report or medical direction"]
    N09["Safe driving and appropriate warning devices"]
    N10["Patient, crew and public"]
    N11["Structured handoff"]
    N12["History, findings and vital trends"]
    N13["Interventions, times and responses"]
    N14["Unresolved concerns, allergies and medications"]
    N15["Verbal and written reports"]
    N16["Transfer of clinical responsibility"]
    N17["Receiving clinician confirmation"]
    N18["PCR"]
    N19["Shared clinical timeline"]
    N20["Measured observations and measurement conditions"]
    N21["Communications and transfer time"]
    N22["Patient medical record and permanent EMS record"]
    N23["Clinical continuity and QI"]
    N24["Observed versus reported information"]
    N25["Missing measurement"]
    N26["Normal result"]

    N01 -->|is guided by| N02
    N03 -->|communicates| N04
    N04 -->|help prepare| N05
    N06 -->|detects| N07
    N07 -->|may require| N08
    N09 -->|reduce risk to| N10
    N11 -->|communicates| N12
    N11 -->|communicates| N13
    N11 -->|communicates| N14
    N15 -->|support| N16
    N17 -->|reduces misunderstandings during| N16
    N18 -->|records| N19
    N19 -->|includes| N20
    N19 -->|includes| N13
    N19 -->|includes| N21
    N18 -->|becomes part of| N22
    N22 -->|support| N23
    N24 -->|must be distinguished in| N18
    N25 -->|must not be treated as| N26
    N01 -->|determines recipient of| N03
    N06 -->|provides findings for| N11
    N03 -->|supports| N16
    N11 -->|supports| N16
    N09 -->|support safe transport before| N16
    N25 -->|must be distinguished from measured values in| N18
```

Do not leave until appropriate transfer is complete. Use the agency's preferred handoff framework, such as MIST, and document only care actually provided; advanced clinicians record their own decisions according to agency rules.

### Advocacy throughout the care continuum

```mermaid
flowchart TD
    N01["Patient advocacy"]
    N02["Privacy and dignity"]
    N03["Patient valuables"]
    N04["Reasonable patient requests"]
    N05["Truthful plain-language explanations"]
    N06["Patient understanding"]
    N07["Accessible communication"]
    N08["Patient participation"]
    N09["Patient questions"]
    N10["Treating clinician"]
    N11["Family communication"]
    N12["Receiving facility"]
    N13["Confidentiality rules"]
    N14["Information disclosure"]
    N15["Patient discomfort and deterioration"]
    N16["Normal monitor readings"]
    N17["Patient concerns"]
    N18["Safety concern"]
    N19["Advanced patient management"]
    N20["Receiving facility report"]
    N21["Scene circumstances not witnessed by hospital staff"]
    N22["Clinical continuity"]

    N01 -->|protects| N02
    N01 -->|includes safeguarding and documenting| N03
    N01 -->|supports| N04
    N05 -->|promote| N06
    N07 -->|supports| N08
    N09 -->|may require referral to| N10
    N11 -->|helps relatives locate| N12
    N13 -->|limit| N14
    N15 -->|must be communicated to| N10
    N16 -->|do not justify dismissing| N17
    N18 -->|requires respectful escalation to| N10
    N01 -->|continues during| N19
    N20 -->|provides| N21
    N21 -->|support| N22
    N01 -->|includes| N05
    N01 -->|includes| N07
    N01 -->|includes| N11
    N13 -->|govern| N01
    N01 -->|includes reporting| N15
    N01 -->|requires attention to| N17
    N01 -->|supports| N22
```

### Patient safety and error prevention

```mermaid
flowchart TD
    N01["Skill or knowledge deficiencies"]
    N02["Patient care errors"]
    N03["Failure to follow rules"]
    N04["Interruptions and assumptions"]
    N05["Omitted or duplicate care"]
    N06["Poor communication"]
    N07["Misunderstandings and errors"]
    N08["High-risk handoffs"]
    N09["Structured communication"]
    N10["Named assignments"]
    N11["Individual responsibilities"]
    N12["Closed-loop communication"]
    N13["Receiver repeat-back"]
    N14["Sender confirmation"]
    N15["Distinct drug labeling"]
    N16["Medication confusion"]
    N17["Clear protocols and decision aids"]
    N18["Safe clinical decisions"]
    N19["Adequate lighting"]
    N20["Safe assessment and procedures"]
    N21["Reflection and questioning assumptions"]
    N22["Potential errors"]
    N23["Requesting assistance"]
    N24["Skill or resource limitations"]
    N25["Suspected medication error"]
    N26["Responsible clinician"]
    N27["Unsafe lifting, driving or spinal handling"]
    N28["Patient injury"]
    N29["Selective protocol-directed SMR"]
    N30["Unnecessary restriction"]
    N31["Quality improvement"]

    N01 -->|increase risk of| N02
    N03 -->|increases risk of| N02
    N04 -->|increase risk of| N05
    N06 -->|may cause| N07
    N08 -->|require| N09
    N10 -->|clarify| N11
    N12 -->|requires| N13
    N13 -->|is checked through| N14
    N14 -->|helps detect| N07
    N15 -->|helps prevent| N16
    N17 -->|support| N18
    N19 -->|supports| N20
    N21 -->|help identify| N22
    N23 -->|helps address| N24
    N25 -->|requires prompt reporting to| N26
    N27 -->|may cause| N28
    N29 -->|balances injury risk against| N30
    N02 -->|provide learning opportunities for| N31
    N05 -->|are types of| N02
    N07 -->|may contribute to| N02
    N09 -->|may incorporate| N12
    N10 -->|help prevent| N05
    N16 -->|may cause| N02
    N18 -->|help prevent| N02
    N20 -->|help prevent| N02
    N22 -->|may develop into| N02
    N24 -->|can contribute to| N02
    N25 -->|is a potential type of| N02
    N02 -->|may cause| N28
    N29 -->|aims to prevent worsening of| N28
```

### Quality improvement as an operational feedback loop

```mermaid
flowchart TD
    N01["Patient care report"]
    N02["Internal and external review"]
    N03["Patient and staff feedback"]
    N04["System shortcomings"]
    N05["Corrective plans"]
    N06["Excessive response times"]
    N07["Ambulance redeployment"]
    N08["Infrequently used skills"]
    N09["Refresher training"]
    N10["Equipment maintenance and skill practice"]
    N11["Provider competence"]
    N12["Safe and effective care"]
    N13["Outcome and process measures"]
    N14["QI"]
    N15["System effectiveness"]

    N01 -->|provides data for| N02
    N03 -->|provides information for| N02
    N02 -->|identifies| N04
    N04 -->|inform| N05
    N06 -->|may prompt| N07
    N08 -->|may prompt| N09
    N05 -->|may include| N07
    N05 -->|may include| N09
    N05 -->|may include| N10
    N09 -->|reinforces| N11
    N10 -->|support| N12
    N11 -->|supports| N12
    N12 -->|generates new data for| N01
    N13 -->|help assess effectiveness of| N05
    N01 -->|supports measurement of| N13
    N14 -->|aims to improve| N15
    N15 -->|is assessed through| N02
```

QI is intended to improve the system rather than punish individuals. Accountability for unsafe practice may still occur. Arrest reviews consider early CPR, interruptions, defibrillation, communication and outcome; stroke reviews consider recognition, last known well, scene time, prenotification and destination.

## Research and evidence-based practice

### Scientific inquiry and clinical evidence

```mermaid
flowchart TD
    N01["Clinical uncertainty"]
    N02["Research question"]
    N03["Literature review"]
    N04["Hypothesis"]
    N05["Research study"]
    N06["Collected data"]
    N07["Data analysis"]
    N08["Study limitations"]
    N09["Reported findings"]
    N10["Peer-reviewed literature"]
    N11["Clinical evidence appraisal"]
    N12["Population, setting, comparison and outcome relevance"]
    N13["Applicable evidence"]
    N14["Practice change"]
    N15["Approved protocols"]
    N16["Clinical outcomes"]

    N01 -->|motivates| N02
    N03 -->|identifies existing findings and gaps for| N02
    N02 -->|guides development of| N04
    N04 -->|is tested through| N05
    N05 -->|generates| N06
    N07 -->|uses| N06
    N07 -->|supports or rejects| N04
    N05 -->|requires identification of| N08
    N08 -->|qualify| N09
    N07 -->|produces| N09
    N09 -->|may appear in| N10
    N11 -->|assesses validity and reliability of| N10
    N11 -->|considers| N12
    N13 -->|may justify| N14
    N11 -->|helps identify| N13
    N14 -->|requires implementation through| N15
    N15 -->|influence| N16
    N16 -->|can generate new| N01
```

### National research infrastructure and registry data

```mermaid
flowchart TD
    N01["2001 National EMS Research Agenda"]
    N02["Prehospital science and innovation"]
    N03["NHTSA and Maternal Child Health Bureau"]
    N04["Federal research agencies"]
    N05["NIGMS"]
    N06["Research funding and collaboration"]
    N07["2014 FICEMS strategic goal"]
    N08["Data-driven and evidence-based EMS"]
    N09["NHTSA"]
    N10["NEMSIS"]
    N11["EMS encounter data"]
    N12["Accurate PCR documentation"]
    N13["CARES"]
    N14["OHCA records"]
    N15["Survival outcomes"]
    N16["Standardized benchmarks and QI"]
    N17["Registry associations"]
    N18["Improvement opportunities"]
    N19["Causation"]
    N20["Safety in Numbers initiative"]
    N21["When, where and how crash injuries occur"]
    N22["Crash prevention and improved EMS care"]
    N23["EMT research participation"]
    N24["Patient and provider outcomes"]

    N01 -->|sought support for| N02
    N03 -->|commissioned| N01
    N04 -->|support| N02
    N05 -->|promotes| N06
    N07 -->|promotes| N08
    N09 -->|supports data standardization through| N10
    N10 -->|standardizes| N11
    N12 -->|contributes to| N11
    N13 -->|links 911, responders, EMS and hospitals into| N14
    N14 -->|connect early BLS and ALS care with| N15
    N14 -->|support| N16
    N17 -->|can identify| N18
    N17 -->|do not independently prove| N19
    N20 -->|uses EMS data to identify| N21
    N21 -->|informs| N22
    N23 -->|supports| N02
    N11 -->|enable| N08
    N08 -->|can demonstrate| N24
    N06 -->|support| N02
    N02 -->|supports| N08
    N14 -->|can reveal| N17
    N13 -->|supports| N08
    N11 -->|provide input for| N20
```

Federal research participation in the source includes AHRQ, CDC, HRSA, National Fire Academy, Department of Defense and NIH alongside NHTSA. Research can improve workforce safety as well as patient outcomes and documentation.

### Evidence, guidelines and authorized practice

```mermaid
flowchart TD
    N01["Strong valid research"]
    N02["Evidence-based medicine"]
    N03["Clinical decision-making"]
    N04["Research findings"]
    N05["Evidence limitations"]
    N06["Expert recommendations"]
    N07["Evidence-based guidelines"]
    N08["Local protocols"]
    N09["Medical director"]
    N10["State scope and credentialing"]
    N11["Authorized clinical practice"]
    N12["Patient outcomes"]
    N13["Research and QI"]
    N14["More invasive procedures"]
    N15["Better patient outcomes"]

    N01 -->|supports| N02
    N02 -->|uses evidence to inform| N03
    N04 -->|carry| N05
    N04 -->|inform| N06
    N05 -->|affect strength of| N06
    N06 -->|are incorporated into| N07
    N07 -->|provide general frameworks for| N03
    N07 -->|inform development of| N08
    N09 -->|implements and oversees| N08
    N08 -->|must comply with| N10
    N10 -->|limit| N11
    N08 -->|guide| N11
    N11 -->|influences| N12
    N12 -->|are evaluated through| N13
    N13 -->|generate new| N04
    N02 -->|does not independently change| N08
    N14 -->|do not automatically produce| N15
    N15 -->|are the aim of| N02
```

Recommendations may reflect weak evidence or expert judgment. Local applicability, patient outcomes and approved implementation matter; a clinician cannot rewrite standing orders during a call.

### National prehospital guideline development cycle

```mermaid
flowchart TD
    N01["Existing protocols and AHA guidelines"]
    N02["System inputs"]
    N03["Evidence accumulation and evaluation"]
    N04["Development priorities"]
    N05["Guideline development"]
    N06["EMS protocol development"]
    N07["Dissemination"]
    N08["Implementation"]
    N09["Effectiveness, outcome, research and QI evaluation"]
    N10["FICEMS and NEMSAC"]
    N11["National EBG Model Process"]
    N12["2015 NAEMSP national strategy"]
    N13["Guideline development, implementation and evaluation"]
    N14["NHTSA and HRSA EMSC"]
    N15["NASEMSO pediatric pain project"]
    N16["Pediatric pain guidelines"]

    N01 -->|provide| N02
    N02 -->|feed| N03
    N03 -->|inform| N04
    N04 -->|guide| N05
    N05 -->|informs| N06
    N06 -->|produces material for| N07
    N07 -->|supports| N08
    N08 -->|is assessed through| N09
    N09 -->|feeds back into| N03
    N10 -->|facilitated and approved| N11
    N11 -->|includes| N05
    N12 -->|promotes sustainable| N13
    N14 -->|funded| N15
    N15 -->|applies and refines| N11
    N15 -->|focuses on| N16
    N16 -->|are an example of| N05
    N13 -->|are core activities of| N11
```

## Public health and EMS integration

### Population health and individual medicine

```mermaid
flowchart TD
    N01["Public health"]
    N02["Population health"]
    N03["Behavioral, biological and environmental factors"]
    N04["Social, economic, cultural and psychological factors"]
    N05["Disease and injury prevention"]
    N06["Individual medicine"]
    N07["Individual health"]
    N08["Diagnosis and treatment after onset"]
    N09["Multidisciplinary workforce"]
    N10["Public health and medicine"]
    N11["Science"]
    N12["EMS"]
    N13["Individual acute care"]
    N14["Population surveillance"]
    N15["Illness, injury and disability"]
    N16["Organized community efforts"]
    N17["Conditions that support health"]

    N01 -->|focuses on| N02
    N02 -->|depends on interacting| N03
    N02 -->|also depends on| N04
    N01 -->|emphasizes| N05
    N06 -->|focuses on| N07
    N06 -->|traditionally emphasizes| N08
    N06 -->|also increasingly incorporates| N05
    N01 -->|draws on| N09
    N06 -->|contributes clinical expertise to| N01
    N10 -->|share a foundation in| N11
    N12 -->|delivers| N13
    N12 -->|contributes to| N02
    N13 -->|can generate data for| N14
    N14 -->|identifies problems for| N05
    N05 -->|aims to reduce| N15
    N16 -->|help establish| N17
    N17 -->|advance| N02
    N11 -->|supports| N01
    N11 -->|supports| N06
```

Winslow (1920), the IOM (1988), Public Health in America (1994) and APHA emphasize organized prevention and the conditions that allow people and communities to be healthy. The contrast with medicine describes traditional emphasis, not mutually exclusive roles.

### Core public health functions and governance

```mermaid
flowchart TD
    N01["Government at all levels"]
    N02["Population health"]
    N03["State and local governments"]
    N04["Public health activities"]
    N05["Public and private organizations"]
    N06["Assessment"]
    N07["Policy development"]
    N08["Assurance"]
    N09["Epidemiology and biostatistics"]
    N10["Community health information"]
    N11["Health policies and plans"]
    N12["Health and safety regulations"]
    N13["Accessible and competent health services"]
    N14["Health policy and administration"]
    N15["Quality and accessibility of services"]
    N16["Research"]
    N17["2020 essential services revision"]
    N18["Health equity"]
    N19["Barriers to response, prevention and follow-up"]

    N01 -->|shares responsibility for| N02
    N03 -->|implement many| N04
    N05 -->|collaborate in| N04
    N04 -->|are organized through| N06
    N04 -->|are organized through| N07
    N04 -->|are organized through| N08
    N09 -->|support| N06
    N06 -->|collects and analyzes| N10
    N10 -->|guides| N07
    N07 -->|mobilizes partnerships and develops| N11
    N11 -->|guide| N08
    N08 -->|supports enforcement of| N12
    N08 -->|supports| N13
    N14 -->|help coordinate| N08
    N08 -->|evaluates| N15
    N15 -->|provide information for| N06
    N16 -->|supports| N06
    N16 -->|supports| N07
    N16 -->|supports| N08
    N17 -->|centers| N18
    N18 -->|requires attention to| N19
    N01 -->|contributes to| N04
    N18 -->|is advanced through| N13
```

The source describes state responsibility as historical framing, not complete constitutional law. It also presents historical essential-service groupings; the 2020 revised framework places equity at the center.

### Essential public health services in practice

```mermaid
flowchart TD
    N01["Health surveillance"]
    N02["Community health problems"]
    N03["Investigation"]
    N04["Public education and empowerment"]
    N05["Community prevention efforts"]
    N06["Community partnerships"]
    N07["Policy and planning"]
    N08["Health regulations"]
    N09["Health and safety"]
    N10["Access initiatives"]
    N11["Needed personal health services"]
    N12["Workforce development"]
    N13["Competent health workforce"]
    N14["Service evaluation"]
    N15["Research"]
    N16["Population health"]

    N01 -->|identifies| N02
    N03 -->|characterizes| N02
    N02 -->|inform| N04
    N04 -->|support| N05
    N06 -->|mobilize resources to address| N02
    N07 -->|support| N05
    N08 -->|protect| N09
    N10 -->|link people to| N11
    N12 -->|supports| N13
    N13 -->|delivers| N11
    N14 -->|assesses effectiveness and accessibility of| N11
    N14 -->|informs| N07
    N15 -->|identifies innovative solutions for| N02
    N05 -->|aim to improve| N16
    N16 -->|is monitored through| N01
    N07 -->|may establish| N08
```

The ten service concepts in this map reflect the chapter's historical CDC framework; their relationships are shown rather than assigning them to current official categories.

### Public health achievements and changing disease burden

```mermaid
flowchart TD
    N01["Vaccination"]
    N02["Vaccine-preventable infections"]
    N03["Water sanitation and scientific advances"]
    N04["Infectious diseases"]
    N05["Vehicle safety laws and restraints"]
    N06["Motor vehicle fatalities"]
    N07["Workplace regulations and safer equipment"]
    N08["Occupational injuries and fatalities"]
    N09["Risk-factor education and trained EMS"]
    N10["Coronary disease and stroke deaths"]
    N11["Food sanitation and preservation"]
    N12["Food contamination"]
    N13["Prenatal care, nutrition and hygiene"]
    N14["Maternal and infant health"]
    N15["Family planning"]
    N16["Pregnancy and family size"]
    N17["Water fluoridation"]
    N18["Tooth decay"]
    N19["Tobacco hazard recognition"]
    N20["Education and smoking prevention laws"]
    N21["Public health achievements"]
    N22["Longer and healthier lives"]
    N23["1900 mortality pattern"]
    N24["Infectious and diarrheal diseases"]
    N25["2018 mortality pattern"]
    N26["Heart disease, cancer and unintentional injuries"]
    N27["2022 mortality pattern"]
    N28["Heart disease, cancer and COVID-19"]
    N29["Changing mortality patterns"]
    N30["Public health assessment"]
    N31["Prevention efforts"]

    N01 -->|helps prevent or control| N02
    N03 -->|help control| N04
    N05 -->|reduce| N06
    N07 -->|reduce| N08
    N09 -->|contribute to lower| N10
    N11 -->|reduce| N12
    N13 -->|support| N14
    N15 -->|enables greater control of| N16
    N17 -->|helps prevent| N18
    N19 -->|promotes| N20
    N21 -->|contribute to| N22
    N23 -->|was dominated by| N24
    N25 -->|was dominated by| N26
    N27 -->|included among the top three| N28
    N29 -->|help identify priorities for| N30
    N21 -->|include| N01
    N21 -->|include| N03
    N21 -->|include| N05
    N21 -->|include| N07
    N21 -->|include| N09
    N21 -->|include| N11
    N21 -->|include| N13
    N21 -->|include| N15
    N21 -->|include| N17
    N21 -->|include| N19
    N23 -->|provides historical comparison for| N25
    N25 -->|provides pre-pandemic comparison for| N27
    N23 -->|helps illustrate| N29
    N30 -->|informs priorities for| N31
    N21 -->|illustrate results of| N31
```

The historical figures in the chapter are life expectancy at birth of 47.3 years in 1900, 78.4 in 2018 and 77.0 in 2020. These are historical snapshots, not proof that any single intervention caused the entire change. The source does not distinguish global eradication from regional elimination of poliomyelitis; no global eradication claim is made here.

### Social determinants, health equity and surveillance

```mermaid
flowchart TD
    N01["Social determinants of health"]
    N02["Economic stability"]
    N03["Education access and quality"]
    N04["Health care access and quality"]
    N05["Neighborhood and built environment"]
    N06["Social and community context"]
    N07["Medication affordability"]
    N08["Transportation and environmental exposures"]
    N09["Understanding health instructions"]
    N10["Needed care"]
    N11["Health disparities and inequities"]
    N12["EMS encounters"]
    N13["Barriers to care"]
    N14["Difficulty affording medication"]
    N15["Difficulty understanding health instructions"]
    N16["Referrals and clinical communication"]
    N17["EMS EHR data"]
    N18["Public health surveillance"]
    N19["Health policy decisions"]
    N20["Confidentiality rules"]
    N21["EMS EHR data sharing"]

    N01 -->|include| N02
    N01 -->|include| N03
    N01 -->|include| N04
    N01 -->|include| N05
    N01 -->|include| N06
    N02 -->|can influence| N07
    N05 -->|can affect| N08
    N03 -->|can influence| N09
    N04 -->|shape access to| N10
    N06 -->|can influence| N11
    N01 -->|contribute to| N11
    N12 -->|may reveal| N13
    N14 -->|is an example of| N13
    N02 -->|can affect| N14
    N08 -->|may contribute to| N13
    N15 -->|is an example of| N13
    N03 -->|can affect| N15
    N13 -->|inform authorized| N16
    N17 -->|provide information for| N18
    N18 -->|informs| N19
    N19 -->|can address| N11
    N20 -->|limit| N21
    N21 -->|must be authorized before use in| N18
```

Social barriers contextualize care; they neither establish a diagnosis nor justify labels such as noncompliance without investigation. Share information through approved channels only.

### Prevention levels and EMS roles

```mermaid
flowchart TD
    N01["Primary prevention"]
    N02["Disease and injury onset"]
    N03["Public education on seat belts, falls and fire safety"]
    N04["Authorized vaccination programs"]
    N05["Secondary prevention"]
    N06["Disease progression and complications"]
    N07["Screening and testing"]
    N08["Risk or early disease"]
    N09["Surveillance and reporting"]
    N10["Community health threats"]
    N11["Emergency management planning"]
    N12["Surveillance, mitigation and response"]
    N13["Tertiary prevention"]
    N14["Disease management and rehabilitation"]
    N15["Acute EMS treatment"]
    N16["EMS frontline contacts"]
    N17["Vulnerable and underserved populations"]
    N18["Authorized referrals and primary care access"]
    N19["Public education on CPR"]
    N20["Early resuscitation"]
    N21["Public AED access"]
    N22["Coordinated BLS and ALS care"]
    N23["AED"]
    N24["Shockable cardiac arrest rhythms"]
    N25["Uncomplicated heart attack with a pulse"]

    N01 -->|aims to prevent| N02
    N03 -->|supports| N01
    N04 -->|support| N01
    N05 -->|aims to limit| N06
    N07 -->|identify| N08
    N08 -->|may prompt| N05
    N09 -->|help identify| N10
    N10 -->|inform| N11
    N11 -->|coordinates| N12
    N13 -->|includes| N14
    N15 -->|contributes to| N13
    N16 -->|may identify| N17
    N17 -->|may benefit from| N18
    N18 -->|support| N14
    N19 -->|prepares bystanders for| N20
    N21 -->|supports| N20
    N20 -->|continues into| N22
    N23 -->|treats| N24
    N23 -->|does not treat| N25
    N16 -->|may provide opportunities for| N07
    N16 -->|may provide opportunities for| N09
    N16 -->|may provide opportunities for| N01
    N16 -->|may require| N15
    N22 -->|is a form of| N15
    N21 -->|provides access to| N23
```

The chapter lists AED access under secondary prevention; its direct clinical role is resuscitation, not treatment of a heart attack with a pulse. Screening can serve multiple prevention purposes depending on the program. Vaccination and screening require appropriate authority, training and oversight.

### Mobile integrated healthcare and community paramedicine

```mermaid
flowchart TD
    N01["Mobile integrated healthcare"]
    N02["Patient-centered out-of-hospital care"]
    N03["EMS system"]
    N04["Community paramedicine"]
    N05["Other health care entities"]
    N06["EMS community presence"]
    N07["Access to underserved patients"]
    N08["Specially trained personnel"]
    N09["Chronic disease management"]
    N10["Post-discharge follow-up"]
    N11["Prevention and patient education"]
    N12["Integrated programs"]
    N13["Routine dispatch or transport"]
    N14["High-risk or frequent health care users"]
    N15["Primary care, nursing, behavioral and social services"]
    N16["Authorized EMT observations and referrals"]
    N17["Training and credentials"]
    N18["Paramedic licensure alone"]
    N19["Scheduled visits and frequent EMS use"]
    N20["Acute emergencies"]
    N21["Emergency assessment and care"]

    N01 -->|uses mobile resources to deliver| N02
    N01 -->|integrates various health entities with| N03
    N04 -->|integrates EMS agency and personnel with| N05
    N04 -->|is a form of integrated| N02
    N06 -->|supports| N07
    N07 -->|can be improved through| N01
    N08 -->|may provide| N09
    N08 -->|may provide| N10
    N08 -->|may provide| N11
    N12 -->|may offer alternatives to| N13
    N14 -->|may benefit from| N09
    N14 -->|may benefit from| N10
    N15 -->|collaborate with| N04
    N16 -->|may support| N11
    N04 -->|requires program-specific| N17
    N18 -->|does not establish| N17
    N19 -->|do not exclude| N20
    N20 -->|require appropriate| N21
    N04 -->|may employ| N08
    N01 -->|may operate through| N12
    N08 -->|must remain alert for| N20
```

The 2016 NAEMT vision includes telephone advice as an alternative to dispatch, chronic care and follow-up in defined programs. MIH-CP is not simply routine ALS; alternative care depends on program authority and patient needs.

## Cross-concept synthesis

### One patient encounter as a system learning opportunity

```mermaid
flowchart TD
    N01["Public education and access"]
    N02["Early recognition and 911 activation"]
    N03["Dispatch and prearrival care"]
    N04["Coordinated BLS and ALS response"]
    N05["Training, resources and authorized scope"]
    N06["Medical direction and local protocols"]
    N07["Clinical reassessment and destination decisions"]
    N08["Handoff and definitive care"]
    N09["Clinical outcomes"]
    N10["PCR and EHR data"]
    N11["Quality improvement and registry research"]
    N12["Evidence-based guidelines"]
    N13["Population surveillance"]
    N14["Prevention and community partnerships"]
    N15["MIH and community paramedicine"]
    N16["Ongoing care and follow-up"]
    N17["Patient advocacy"]

    N01 -->|enable| N02
    N02 -->|initiates| N03
    N03 -->|mobilizes| N04
    N04 -->|depends on| N05
    N06 -->|govern| N04
    N04 -->|produces observations for| N07
    N07 -->|support| N08
    N08 -->|generate| N09
    N07 -->|are documented in| N10
    N10 -->|support| N11
    N09 -->|provide measures for| N11
    N11 -->|inform| N12
    N12 -->|inform| N06
    N11 -->|identify needs for| N05
    N10 -->|also support authorized| N13
    N13 -->|guides| N14
    N14 -->|support| N01
    N14 -->|can identify needs for| N15
    N15 -->|connect patients to| N16
    N17 -->|protects patient interests throughout| N04
```

