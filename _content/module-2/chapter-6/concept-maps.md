---
title: Concept Maps
module_id: module-2
view: concept-maps
chapter_id: chapter-6
---

# Chapter 6: Lifting and Moving Patients

## Conceptual overview

### Patient movement as a component of emergency care

```mermaid
flowchart TD
    N1["Patient movement"]
    N2["Patient pain and injury"]
    N3["Rescuer injury"]
    N4["Scene hazards"]
    N5["Movement urgency"]
    N6["Patient physiology"]
    N7["Position and device"]
    N8["Route constraints"]
    N9["Combined load"]
    N10["Staffing and equipment"]
    N11["Body mechanics"]
    N12["Team communication"]
    N13["Safe transfers and packaging"]
    N14["Airway access and ongoing care"]
    N15["BLS assessment"]
    N16["Patient physiology assessment"]
    N17["Ongoing care"]
    N18["Authorized ALS support"]
    N19["Reassessment"]

    N1 -->|aims to minimize| N2
    N1 -->|also aims to minimize| N3
    N4 -->|influence| N5
    N6 -->|influences| N5
    N6 -->|determines tolerance of| N7
    N8 -->|influence| N7
    N9 -->|determines required| N10
    N11 -->|reduce| N3
    N12 -->|coordinates| N10
    N10 -->|enable| N13
    N7 -->|influence| N13
    N13 -->|preserve| N14
    N15 -->|guides| N16
    N16 -->|informs| N5
    N17 -->|may require| N18
    N19 -->|detects changes in| N6
    N13 -->|require| N19
    N19 -->|may revise| N7
    N1 -->|is planned according to| N5
    N1 -->|requires preservation of| N17
```

## Rescuer safety and mechanical principles

### Mechanical advantage and spinal protection

```mermaid
flowchart TD
    N1["Body mechanics"]
    N2["Mechanical advantage"]
    N3["Injury risk"]
    N4["Load held close"]
    N5["Long reach and back strain"]
    N6["Leg hip and gluteal muscles"]
    N7["Lifting force"]
    N8["Contracted abdominal and gluteal muscles"]
    N9["Aligned lower back"]
    N10["Normal lumbar curve"]
    N11["Spinal injury risk"]
    N12["Shoulders over hips over feet"]
    N13["Body alignment"]
    N14["Body misalignment"]
    N15["Twisting forces"]
    N16["Lower back"]
    N17["Lifting then turning as a unit"]
    N18["Simultaneous lifting and twisting"]
    N19["Shorter movement distance or height"]
    N20["Manual effort"]
    N21["Staged lifts and repositioning"]
    N22["Movement distance or height"]
    N23["Wheeled equipment"]
    N24["Manual carrying"]
    N25["Neutral wrist and knee alignment"]
    N26["Extremity injury risk"]
    N27["Locked aligned back"]
    N28["Bending at hips rather than waist"]
    N29["Hyperextension and leaning back"]
    N30["Safe carrying mechanics"]

    N1 -->|use the body to achieve| N2
    N2 -->|reduces| N3
    N4 -->|reduces| N5
    N6 -->|generate| N7
    N8 -->|help stabilize| N9
    N10 -->|helps reduce| N11
    N12 -->|maintain| N13
    N14 -->|creates| N15
    N15 -->|may injure| N16
    N17 -->|avoids| N18
    N19 -->|reduces| N20
    N21 -->|reduce| N22
    N23 -->|substitutes rolling for| N24
    N25 -->|reduces| N26
    N27 -->|is maintained by| N28
    N29 -->|compromise| N30
    N1 -->|emphasize| N4
    N1 -->|rely on| N6
    N1 -->|require| N8
    N9 -->|retains| N10
    N1 -->|favor| N12
    N14 -->|disrupts| N13
    N17 -->|helps prevent| N15
    N1 -->|favor| N19
    N21 -->|can reduce| N20
    N23 -->|reduces| N20
    N1 -->|require| N25
    N27 -->|helps maintain| N9
    N29 -->|threaten| N9
```

### Posture, fitness and fatigue

```mermaid
flowchart TD
    N1["Prolonged sitting and standing"]
    N2["Back and abdominal muscles"]
    N3["Poor posture"]
    N4["Back injury vulnerability"]
    N5["Excessive lordosis"]
    N6["Lumbar curvature and stress"]
    N7["Excessive kyphosis"]
    N8["Spinal pressure and fatigue"]
    N9["Standing alignment"]
    N10["Ears shoulders and hips"]
    N11["Standing posture"]
    N12["Slightly bent knees and tucked pelvis"]
    N13["Sitting alignment"]
    N14["Sitting posture"]
    N15["Both ischia"]
    N16["Lumbar chair support"]
    N17["Flat feet or crossed ankles and tucked pelvis"]
    N18["Flexibility training"]
    N19["Physical fitness"]
    N20["Strength training"]
    N21["Cardiovascular conditioning"]
    N22["Nutrition"]
    N23["Body mechanics"]
    N24["Performance and stress management"]
    N25["Fatigue"]
    N26["Injury risk"]
    N27["Daily technique practice"]
    N28["Automatic safe habits under stress"]

    N1 -->|can fatigue| N2
    N3 -->|increases| N4
    N5 -->|exaggerates| N6
    N7 -->|rolls shoulders forward and increases| N8
    N9 -->|positions vertically| N10
    N11 -->|includes| N12
    N13 -->|positions vertically| N10
    N14 -->|distributes weight over| N15
    N14 -->|uses when possible| N16
    N14 -->|includes| N17
    N18 -->|contributes to| N19
    N20 -->|contributes to| N19
    N21 -->|contributes to| N19
    N22 -->|supports| N19
    N19 -->|complements| N23
    N19 -->|improves| N24
    N25 -->|increases| N26
    N27 -->|establishes| N28
    N2 -->|are vulnerable to| N25
    N3 -->|includes| N5
    N3 -->|includes| N7
    N7 -->|contributes to| N25
    N11 -->|requires| N9
    N14 -->|requires| N13
    N11 -->|helps avoid| N3
    N14 -->|helps avoid| N3
    N19 -->|helps reduce| N26
    N4 -->|contributes to| N26
    N27 -->|reinforces| N23
```

### Load, staffing and fatigue limits

```mermaid
flowchart TD
    N1["Patient weight"]
    N2["Combined load"]
    N3["Stretcher and accessories"]
    N4["Oxygen monitor and ventilator"]
    N5["Configuration-specific device rating"]
    N6["Crew physical capability"]
    N7["Device rating"]
    N8["Individual strength and limitations"]
    N9["Mismatched partners"]
    N10["Weaker partner"]
    N11["Weaker partner losing lift"]
    N12["Stronger partner"]
    N13["Even number of rescuers"]
    N14["Load balance"]
    N15["Two-person heavy carry"]
    N16["One minute or less"]
    N17["Prolonged strenuous effort"]
    N18["Muscle fatigue"]
    N19["Injury risk"]
    N20["Additional personnel"]
    N21["Individual workload"]
    N22["Equipment-assisted rolling"]
    N23["Manual effort"]
    N24["Uncertain capacity"]
    N25["Additional help and safe plan"]
    N26["Weaker partner overload"]

    N1 -->|contributes to| N2
    N3 -->|contribute to| N2
    N4 -->|contribute to| N2
    N2 -->|must fit| N5
    N2 -->|must be within| N6
    N7 -->|does not establish| N6
    N8 -->|determine| N6
    N9 -->|may overload| N10
    N11 -->|can injure| N12
    N13 -->|improves| N14
    N15 -->|should be limited in textbook guidance to| N16
    N17 -->|increases| N18
    N18 -->|increases| N19
    N20 -->|can reduce| N21
    N22 -->|reduces| N23
    N24 -->|requires before proceeding| N25
    N9 -->|reduce| N6
    N11 -->|may result from| N26
    N26 -->|can result from| N9
    N13 -->|supports| N6
    N15 -->|can produce| N18
    N20 -->|improve| N6
    N21 -->|influences| N18
    N22 -->|can reduce| N21
    N24 -->|requires checking| N6
```

Fatigue estimates (100% effort for 6 seconds and 50% for one minute) and device ratings in the chapter are learning examples, not guaranteed safe-work thresholds.

### Power lift, squat lift and grip

```mermaid
flowchart TD
    N1["Power lift"]
    N2["Flat feet and stable shoulder-width stance"]
    N3["Knee bend and close center of gravity"]
    N4["Aligned back and neutral head"]
    N5["Contracted trunk muscles"]
    N6["Power grip"]
    N7["Full palm and finger contact"]
    N8["Hand spacing of about 10 inches or more"]
    N9["Balance"]
    N10["Hand force"]
    N11["Leg-driven lift"]
    N12["Heels and arches"]
    N13["Upper body before hips"]
    N14["Reverse lift sequence"]
    N15["Controlled lowering"]
    N16["Squat lift"]
    N17["Staggered stance with weaker leg forward"]
    N18["Stronger leg"]
    N19["Two-person lift"]
    N20["Synchronized head and foot rescuers"]
    N21["Individual injury or weakness"]
    N22["Capability assessment before either lift"]

    N1 -->|starts with| N2
    N2 -->|allows| N3
    N3 -->|supports| N4
    N4 -->|are supported by| N5
    N6 -->|uses| N7
    N8 -->|helps maintain| N9
    N6 -->|maximizes| N10
    N11 -->|transmits force through| N12
    N11 -->|raises first| N13
    N1 -->|uses| N11
    N14 -->|enables| N15
    N16 -->|uses| N17
    N17 -->|permits drive from| N18
    N18 -->|powers| N16
    N19 -->|requires| N20
    N21 -->|requires| N22
    N1 -->|requires| N6
    N6 -->|is supported by| N8
    N1 -->|is reversed for| N15
    N16 -->|also requires| N6
    N19 -->|may use| N1
    N22 -->|informs choice of| N16
```

Textbook lift variations for weak knees or legs are not clearance for an injured rescuer to lift.

### Reaching, one-handed handling and horizontal forces

```mermaid
flowchart TD
    N1["One-handed carry"]
    N2["Asymmetric load"]
    N3["Excessive opposite lean"]
    N4["One-handed lift"]
    N5["Staggered stance and hip bend"]
    N6["Hip bend"]
    N7["45 degrees"]
    N8["Front heel and arch and rear ball of foot"]
    N9["Coordinated command"]
    N10["Reaching"]
    N11["Reach distance increases"]
    N12["Reach beyond 15–20 inches"]
    N13["Repositioning or moving closer"]
    N14["Free arm support"]
    N15["Unsupported upper-body load"]
    N16["Log roll"]
    N17["Hip hinge and shoulder muscles"]
    N18["Overhead reach"]
    N19["Hyperextension"]
    N20["Pushing"]
    N21["Pulling"]
    N22["Shoulders and hips"]
    N23["Straight back and slightly bent knees"]
    N24["Line of pull through body"]
    N25["Waist and shoulders"]
    N26["Below-waist push"]
    N27["Kneeling rather than bending"]
    N28["Elbows close and bent"]
    N29["Pushing force"]
    N30["Overhead pushing or pulling"]
    N31["Injury risk"]

    N1 -->|introduces| N2
    N2 -->|requires avoidance of| N3
    N4 -->|uses| N5
    N6 -->|limits textbook trunk inclination to| N7
    N4 -->|drives through| N8
    N9 -->|synchronizes| N4
    N10 -->|increases strain as| N11
    N12 -->|calls for| N13
    N14 -->|reduces| N15
    N16 -->|uses| N17
    N18 -->|requires avoidance of| N19
    N20 -->|is generally preferred to| N21
    N21 -->|keeps load between| N22
    N23 -->|align| N24
    N20 -->|uses force between| N25
    N26 -->|favors| N27
    N28 -->|improve| N29
    N30 -->|increases| N31
    N1 -->|may start with| N4
    N5 -->|incorporate| N6
    N10 -->|is reduced by| N13
    N11 -->|may lead to| N12
    N14 -->|can improve safety during| N10
    N16 -->|uses controlled| N10
    N18 -->|is a special case of| N10
    N20 -->|may use| N28
    N21 -->|requires| N23
    N26 -->|is a special case of| N20
    N20 -->|must avoid| N30
    N1 -->|requires avoiding| N31
    N10 -->|can increase| N31
```

## Teamwork, authority and movement decisions

### Coordinated movement and clinical roles

```mermaid
flowchart TD
    N1["Scene size-up"]
    N2["Route hazards and available help"]
    N3["Patient weight and crew capability"]
    N4["Equipment choice"]
    N5["Trained partners"]
    N6["Clear synchronized commands"]
    N7["Movement leader"]
    N8["Coordinated lift"]
    N9["Common stop command"]
    N10["Safe interruption"]
    N11["Patient explanation"]
    N12["Confidence and cooperation"]
    N13["Frightened patient"]
    N14["Body weight during lift"]
    N15["Patient and rescuer balance"]
    N16["Clinical role assignment"]
    N17["Airway management"]
    N18["Equipment and tubing management"]
    N19["Physical lifting"]
    N20["Continuous ventilation"]
    N21["Heavy carrying duty"]
    N22["Insufficient personnel for clinical roles"]
    N23["Additional help"]
    N24["Clinical observation"]
    N25["Stop and reassessment decisions"]

    N1 -->|identifies| N2
    N3 -->|inform| N4
    N5 -->|use| N6
    N7 -->|directs| N8
    N9 -->|enables| N10
    N11 -->|builds| N12
    N13 -->|may shift| N14
    N14 -->|may destabilize| N15
    N16 -->|separates| N17
    N16 -->|separates| N18
    N16 -->|separates| N19
    N20 -->|can conflict with| N21
    N22 -->|requires| N23
    N24 -->|informs| N25
    N1 -->|considers| N3
    N4 -->|informs| N8
    N6 -->|support| N8
    N7 -->|establishes| N9
    N11 -->|reduces risk from| N13
    N12 -->|support| N8
    N7 -->|coordinates| N16
    N17 -->|may require| N20
    N22 -->|limit| N16
    N24 -->|supports use of| N9
```

### Scope, evidence and clinical responsibility

```mermaid
flowchart TD
    N1["Research"]
    N2["Clinical recommendations"]
    N3["National guidelines"]
    N4["Locally approved protocols"]
    N5["State law and licensure"]
    N6["Authorized practice"]
    N7["Education and credentialing"]
    N8["Agency policy and medical direction"]
    N9["EMT foundational care"]
    N10["Assessment ventilation bleeding control and safe movement"]
    N11["AEMT scope"]
    N12["Vascular access fluids medications and airway options"]
    N13["Paramedic scope"]
    N14["Pharmacology ECG interpretation and electrical or advanced airway therapy"]
    N15["ALS presence"]
    N16["EMT authorization"]
    N17["Equipment preparation"]
    N18["Independent interpretation and treatment"]
    N19["Medical direction"]
    N20["Physician oversight"]
    N21["Unestablished clinical pathway"]
    N22["Medical direction consultation"]
    N23["Knowledge of ALS"]

    N1 -->|informs| N2
    N3 -->|inform| N4
    N5 -->|limit| N6
    N7 -->|help determine| N6
    N8 -->|govern| N6
    N9 -->|includes| N10
    N11 -->|generally adds selected| N12
    N13 -->|generally adds broader| N14
    N15 -->|does not expand| N16
    N17 -->|differs from| N18
    N19 -->|provides| N20
    N21 -->|warrants| N22
    N23 -->|does not confer| N6
    N2 -->|inform| N3
    N4 -->|guide| N6
    N6 -->|includes within scope| N9
    N6 -->|includes within scope| N11
    N6 -->|includes within scope| N13
    N16 -->|is a subset of| N6
    N17 -->|is subject to| N6
    N19 -->|shapes| N8
    N22 -->|seeks guidance from| N19
```

### Urgency and risk-benefit balance

```mermaid
flowchart TD
    N1["Immediate environmental danger"]
    N2["Emergency move"]
    N3["Inaccessible lifesaving care"]
    N4["Immediate threat to life"]
    N5["Urgent move"]
    N6["Absence of immediate life threat"]
    N7["Nonurgent move"]
    N8["Hazard escape or essential care access"]
    N9["Normal scene safety"]
    N10["ABCs and immediate life threats"]
    N11["Achievable care and timely definitive care"]
    N12["Position device and staffing"]
    N13["Stable physiology"]
    N14["Unstable physiology"]
    N15["Ventilation or CPR where found"]
    N16["Movement category"]
    N17["ALS activation or destination"]
    N18["New symptoms"]
    N19["Reassessment"]
    N20["ALS intercept"]
    N21["Appropriate transport"]

    N1 -->|may require| N2
    N3 -->|may require| N2
    N4 -->|may require| N5
    N6 -->|permits| N7
    N2 -->|prioritizes when no safe alternative| N8
    N9 -->|permits prior management of| N10
    N5 -->|coordinates| N11
    N7 -->|permits deliberate selection of| N12
    N13 -->|does not exclude| N2
    N14 -->|may first require| N15
    N16 -->|does not independently dictate| N17
    N18 -->|trigger| N19
    N19 -->|may change| N16
    N20 -->|should not needlessly delay| N21
    N16 -->|may be| N2
    N16 -->|may be| N5
    N16 -->|may be| N7
    N9 -->|allows assessment of| N4
    N14 -->|may constitute| N4
    N5 -->|may require| N21
```

### Emergency drags and spinal risk

```mermaid
flowchart TD
    N1["Fire hazardous materials traffic or unstable surroundings"]
    N2["Immediate danger"]
    N3["Emergency drag"]
    N4["Spinal column or cord injury"]
    N5["Long-axis pull"]
    N6["Unwanted spinal motion"]
    N7["Neutral head and neck when tolerated"]
    N8["Pain resistance or neurological deterioration"]
    N9["Neutral alignment"]
    N10["Armpit-forearm drag"]
    N11["Grip beneath armpits"]
    N12["Shirt drag"]
    N13["Suitable clothing beyond a T-shirt"]
    N14["Shoulder fabric and head support"]
    N15["Pulling through armpits rather than neck"]
    N16["Strangulation risk"]
    N17["Secured arms when feasible"]
    N18["Arm flopping or shirt escape"]
    N19["Blanket or coat drag"]
    N20["Single-rescuer movement"]
    N21["Blanket placement by rolling"]
    N22["Wrapped support and head-end pull"]
    N23["Exposed face"]
    N24["Basic airway access"]
    N25["ECG or vascular access completion"]
    N26["Arrival at safe location"]
    N27["Reassessment of breathing perfusion consciousness and bleeding"]
    N28["New neurological symptoms"]
    N29["ALS partner or receiving clinician"]

    N1 -->|may create| N2
    N2 -->|may justify| N3
    N3 -->|may aggravate| N4
    N5 -->|helps limit| N6
    N7 -->|helps limit| N6
    N8 -->|preclude forcing| N9
    N10 -->|supports crossed forearms via| N11
    N12 -->|requires| N13
    N12 -->|uses| N14
    N15 -->|reduces| N16
    N17 -->|reduce| N18
    N19 -->|permits| N20
    N21 -->|enables| N22
    N23 -->|preserves| N24
    N2 -->|takes priority over| N25
    N26 -->|requires| N27
    N28 -->|must be communicated to| N29
    N3 -->|uses when possible| N5
    N7 -->|must account for| N8
    N3 -->|may use| N10
    N3 -->|may use| N12
    N12 -->|requires| N15
    N12 -->|may use| N17
    N3 -->|may use| N19
    N19 -->|uses| N21
    N19 -->|requires| N23
    N3 -->|aims to achieve| N26
    N27 -->|should include checking for| N28
```

### Cardiac arrest and movement

```mermaid
flowchart TD
    N1["Soft surface"]
    N2["Chest compression effectiveness"]
    N3["Suitable firm surface"]
    N4["Effective CPR"]
    N5["Need for firm surface"]
    N6["Initial CPR"]
    N7["Necessary movement"]
    N8["Chest compressions"]
    N9["Coordinated move"]
    N10["Compression interruptions"]
    N11["Completion of move"]
    N12["Compressions"]
    N13["BLS CPR ventilation and AED use"]
    N14["Authorized ALS resuscitation"]
    N15["ALS resuscitation"]
    N16["Rhythm analysis vascular access and medications"]
    N17["2025 AHA systems guidance"]
    N18["On-scene resuscitation"]
    N19["Selected circumstances and protocol"]
    N20["Transport during active CPR"]
    N21["Mechanical CPR"]
    N22["Routine use"]
    N23["Impractical or unsafe manual CPR"]

    N1 -->|can impair| N2
    N3 -->|supports| N4
    N5 -->|does not justify delaying| N6
    N7 -->|may interrupt| N8
    N9 -->|minimizes| N10
    N11 -->|requires immediate resumption of| N12
    N13 -->|remain foundational during| N14
    N15 -->|may add| N16
    N17 -->|favors for most out-of-hospital arrests| N18
    N19 -->|may justify| N20
    N21 -->|is not recommended for| N22
    N23 -->|may justify selected| N21
    N1 -->|may warrant moving to| N3
    N4 -->|depends on| N2
    N5 -->|may require| N7
    N9 -->|manages| N7
    N11 -->|follows| N7
    N6 -->|is part of| N13
    N14 -->|includes| N15
    N18 -->|is generally preferred over| N20
    N13 -->|may in selected cases use| N21
    N18 -->|prioritizes| N4
```

### Extrication method and spinal precautions

```mermaid
flowchart TD
    N1["Airway breathing oxygenation or circulation abnormalities"]
    N2["Rapid extrication"]
    N3["Altered alertness shock major bleeding or critical injuries"]
    N4["Head neck chest abdominal pelvic or bilateral femur injuries"]
    N5["Speed and spinal precautions"]
    N6["Manual head stabilization"]
    N7["Coordinated rotation and transfer"]
    N8["Collar and board preparation"]
    N9["Thorax support and freeing legs"]
    N10["Short coordinated rotation toward door"]
    N11["Head support handover"]
    N12["Manual stabilization"]
    N13["Board supported on seat and by assistants"]
    N14["Controlled lowering and sliding"]
    N15["Backboard"]
    N16["Extrication device"]
    N17["Eligible mobile noncritical patient blocking access"]
    N18["Self-extrication"]
    N19["Coaching and body-as-unit movement"]
    N20["Collar"]
    N21["Neutral alignment"]
    N22["2025 UK expert consensus"]
    N23["Patient-led extrication"]
    N24["Injuries consciousness mobility hazards and local SMR"]
    N25["Extrication method"]
    N26["Collar or board"]
    N27["Absolute immobility"]

    N1 -->|may indicate| N2
    N3 -->|may indicate| N2
    N4 -->|may influence| N2
    N2 -->|balances| N5
    N6 -->|supports| N7
    N8 -->|precede in textbook technique| N9
    N9 -->|enable| N10
    N11 -->|preserves| N12
    N13 -->|enables| N14
    N12 -->|continues through| N14
    N15 -->|may serve only as| N16
    N17 -->|may undergo textbook| N18
    N19 -->|support| N18
    N20 -->|may remind patient to maintain| N21
    N22 -->|supports broader appropriate| N23
    N24 -->|determine| N25
    N26 -->|cannot guarantee| N27
    N2 -->|uses| N6
    N2 -->|may use textbook| N8
    N10 -->|precedes| N11
    N14 -->|use| N15
    N25 -->|may be| N2
    N25 -->|may be| N18
    N18 -->|is supported by| N20
    N23 -->|includes| N18
    N26 -->|includes| N15
```

The board-assisted sequence is a textbook technique; newer UK consensus is not a replacement for local US protocols. Rescuers should support their own weight inside vehicles to reduce back strain.

### Clinical integration in critical trauma

```mermaid
flowchart TD
    N1["Entrapment"]
    N2["Access to patient and care"]
    N3["Poor respiratory effort or reduced alertness"]
    N4["Inadequate ventilation"]
    N5["BLS airway support and BVM"]
    N6["ALS airway options"]
    N7["Advanced airway placement"]
    N8["Shocked patient"]
    N9["Waiting for ALS airway"]
    N10["Hemorrhage"]
    N11["Circulating volume and oxygen delivery"]
    N12["Reduced oxygen delivery"]
    N13["Shock signs and altered alertness"]
    N14["External bleeding control"]
    N15["Heat loss prevention"]
    N16["Trauma care"]
    N17["Serial pulse BP skin signs and mental status"]
    N18["Perfusion assessment"]
    N19["AEMT or paramedic care"]
    N20["Vascular access and fluids"]
    N21["Specialized ALS systems"]
    N22["Blood products"]
    N23["Fluids and blood products"]
    N24["Hemorrhage control and definitive surgical care"]
    N25["Baseline movement sensation and neck symptoms"]
    N26["Post-extrication neurological findings"]
    N27["New deficits"]
    N28["Reassuring monitor readings"]
    N29["Rescue and clinical personnel"]
    N30["Extraction without unnecessary deterioration"]

    N1 -->|limits| N2
    N3 -->|may indicate| N4
    N4 -->|warrants indicated authorized| N5
    N6 -->|may supplement| N5
    N7 -->|may destabilize| N8
    N9 -->|must not delay| N5
    N10 -->|reduces| N11
    N12 -->|may manifest as| N13
    N14 -->|addresses| N10
    N15 -->|supports| N16
    N17 -->|inform| N18
    N19 -->|may include selected| N20
    N21 -->|may provide| N22
    N23 -->|do not replace| N24
    N25 -->|enable comparison with| N26
    N27 -->|warrant attention despite| N28
    N29 -->|jointly plan| N30
    N1 -->|can delay| N30
    N2 -->|limits| N5
    N6 -->|include possible| N7
    N10 -->|may produce| N8
    N11 -->|when reduced contribute to| N13
    N13 -->|inform| N18
    N18 -->|may inform| N19
    N20 -->|are among| N23
    N22 -->|are among| N23
    N15 -->|is part of| N30
    N30 -->|requires| N25
    N26 -->|may reveal| N27
```

### Nonurgent movement and walking tolerance

```mermaid
flowchart TD
    N1["Nonurgent move"]
    N2["Deliberate route and device selection"]
    N3["Able and supported patient"]
    N4["Walking"]
    N5["Lightheadedness or sweating on standing"]
    N6["Chest pain or respiratory difficulty"]
    N7["Lower extremity or suspected spinal injury"]
    N8["Standing"]
    N9["Circulatory or respiratory demand"]
    N10["New symptoms with standing"]
    N11["Added demand"]
    N12["Supported position and reassessment"]
    N13["Reassessment"]
    N14["Baseline and repeat vital signs"]
    N15["Symptoms and timing"]
    N16["ALS evaluation"]
    N17["Rhythm glucose or other causes"]
    N18["Diagnostic symptoms"]

    N1 -->|allows| N2
    N3 -->|may tolerate| N4
    N5 -->|contraindicates textbook| N4
    N6 -->|contraindicates textbook| N4
    N7 -->|contraindicates textbook| N4
    N8 -->|increases| N9
    N10 -->|may indicate intolerance of| N11
    N10 -->|require| N12
    N13 -->|compares| N14
    N15 -->|inform| N16
    N16 -->|may investigate| N17
    N4 -->|must not be used to provoke| N18
    N2 -->|may permit| N4
    N4 -->|begins with| N8
    N9 -->|if poorly tolerated may produce| N10
    N12 -->|includes| N13
    N10 -->|inform| N15
```

## Nonurgent transfer techniques

### Ground lift and extremity lift

```mermaid
flowchart TD
    N1["Direct ground lift"]
    N2["Two or three same-side rescuers"]
    N3["Distributed body support"]
    N4["Head back waist hips and knees"]
    N5["Leader signal"]
    N6["Lift onto knees"]
    N7["Roll toward rescuers chests"]
    N8["Patient weight"]
    N9["Standing and transfer"]
    N10["Heavier patient"]
    N11["More mechanically efficient device-assisted lift"]
    N12["Extremity lift"]
    N13["Head-end wrist support and foot-end knee support"]
    N14["Suspected spinal or extremity injury"]
    N15["Straight back and neutral head"]
    N16["Lumbar strain"]
    N17["Leg and gluteal drive"]
    N18["Synchronized standing"]
    N19["Controlled reverse sequence"]
    N20["Lowering after ground lift"]

    N1 -->|requires| N2
    N2 -->|coordinate| N3
    N3 -->|includes| N4
    N5 -->|initiates| N6
    N6 -->|precedes| N7
    N7 -->|keeps close| N8
    N5 -->|synchronizes| N9
    N10 -->|favors when available| N11
    N12 -->|uses| N13
    N12 -->|is contraindicated by| N14
    N15 -->|reduce| N16
    N17 -->|enables| N18
    N19 -->|permits| N20
    N1 -->|uses| N5
    N1 -->|may be unsuitable for| N10
    N1 -->|shares safe mechanics with| N12
    N1 -->|requires| N15
    N12 -->|requires| N17
    N1 -->|ends with| N19
```

### Bed-to-stretcher transfers

```mermaid
flowchart TD
    N1["Supine bed patient"]
    N2["Direct carry"]
    N3["Draw sheet"]
    N4["Perpendicular to bed at foot"]
    N5["Neck shoulders back hips and calves"]
    N6["Prepared cot and crossed patient arms when feasible"]
    N7["Controlled transfer"]
    N8["Coordinated rotation to cot"]
    N9["Alongside bed at adjusted height"]
    N10["Loosened sheet and distributed handholds"]
    N11["Gentle lateral slide"]
    N12["Hips supported against cot"]
    N13["Unsupported reaching"]
    N14["Contracted trunk muscles"]
    N15["Lower back during slide"]
    N16["Patient injury and pain"]
    N17["Direct carry and draw sheet"]
    N18["Draw sheet hand positions"]
    N19["Text and illustration"]

    N1 -->|may be transferred using| N2
    N1 -->|may be transferred using| N3
    N2 -->|positions cot| N4
    N2 -->|distributes support across| N5
    N6 -->|facilitate| N7
    N2 -->|uses lift close to chest before| N8
    N3 -->|positions cot| N9
    N10 -->|permit| N11
    N12 -->|reduce| N13
    N14 -->|stabilize| N15
    N16 -->|influence choice between| N17
    N18 -->|vary between| N19
    N2 -->|requires| N6
    N3 -->|uses| N10
    N3 -->|uses| N12
    N3 -->|requires| N14
    N17 -->|include| N3
    N3 -->|requires appropriate| N18
```

Use the taught transfer method with adequate distributed support; the two hand-position descriptions are not universal requirements.

### Pain, analgesia and attached equipment

```mermaid
flowchart TD
    N1["Fracture or painful injury"]
    N2["Padding authorized splinting or alternative transfer"]
    N3["Pre-move pain alertness breathing and perfusion"]
    N4["Clinical baseline"]
    N5["Movement"]
    N6["Pain and physiological status"]
    N7["Authorized ALS analgesia"]
    N8["Fentanyl"]
    N9["Pain signaling"]
    N10["Ventilation"]
    N11["Sedation and hypotension"]
    N12["Sleepiness"]
    N13["Pain resolution"]
    N14["Post-treatment and post-move observations"]
    N15["Tubing and leads"]
    N16["Transfer path"]
    N17["Lines"]
    N18["Carry handles"]
    N19["Fentanyl administration"]
    N20["Authorized scope and protocol"]
    N21["Safe patient transfer"]

    N1 -->|may require| N2
    N3 -->|establish| N4
    N5 -->|may change| N6
    N7 -->|may include| N8
    N8 -->|reduces| N9
    N8 -->|may suppress| N10
    N8 -->|may produce| N11
    N12 -->|does not prove| N13
    N14 -->|are compared with| N4
    N15 -->|must be routed away from| N16
    N17 -->|must not be used as| N18
    N19 -->|depends on| N20
    N21 -->|requires consideration of| N1
    N21 -->|requires consideration of| N3
    N21 -->|requires consideration of| N5
    N21 -->|requires consideration of| N8
    N21 -->|requires consideration of| N12
    N21 -->|requires consideration of| N15
    N21 -->|requires consideration of| N17
    N21 -->|requires consideration of| N19
```

## Packaging and clinical continuity

### Patient and device securement

```mermaid
flowchart TD
    N1["Packaging"]
    N2["Device selection and preparation"]
    N3["Locked-open carrying device"]
    N4["Patient transfer"]
    N5["Patient restraint and warmth"]
    N6["Sheets and blankets"]
    N7["Body temperature"]
    N8["Straps and tucked ties"]
    N9["Sliding and tripping hazards"]
    N10["Suspected spinal injury"]
    N11["SMR before during and after packaging"]
    N12["Raised wheeled stretcher"]
    N13["Continuous patient attendance"]
    N14["Each transfer"]
    N15["Straps and device security"]
    N16["Ambulance movement"]
    N17["Patient and device securement"]
    N18["Patient restraint"]
    N19["Ventilation and assessment access"]

    N1 -->|integrates| N2
    N2 -->|includes| N3
    N3 -->|precedes| N4
    N4 -->|is followed by| N5
    N6 -->|help maintain| N7
    N8 -->|prevent| N9
    N10 -->|may require| N11
    N12 -->|requires| N13
    N14 -->|requires rechecking| N15
    N16 -->|requires prior| N17
    N18 -->|must preserve| N19
    N1 -->|requires attention to| N6
    N1 -->|requires attention to| N8
    N1 -->|requires attention to| N10
    N1 -->|requires attention to| N12
    N1 -->|requires attention to| N14
    N1 -->|requires attention to| N16
    N1 -->|requires attention to| N18
```

### Monitored or ventilated patient movement

```mermaid
flowchart TD
    N1["Pre-move assessment"]
    N2["Airway breathing SpO2 pulse BP and mental status baseline"]
    N3["Relevant pain and neurological findings"]
    N4["Clinical baseline"]
    N5["Journey duration"]
    N6["Oxygen and battery reserve"]
    N7["Approved mounts and tubing slack"]
    N8["Equipment displacement and interruption"]
    N9["Assigned clinical roles"]
    N10["Authorized treatment during movement"]
    N11["Critical alarm or visible deterioration"]
    N12["Immediate announcement and safe response"]
    N13["Loose oxygen or heavy equipment"]
    N14["Patient and crew safety"]
    N15["After-transfer reassessment"]
    N16["Clinical status and treatment delivery"]
    N17["Authorized ALS clinician"]
    N18["Advanced airway ventilation and infusion function"]
    N19["Unexpected disconnection"]
    N20["Reporting and authorized troubleshooting"]
    N21["Unauthorized clinician"]
    N22["Ventilator settings infusion rates or advanced airway"]
    N23["Reassessment"]
    N24["Movement plan"]
    N25["Clinical continuity during movement"]

    N1 -->|establishes| N2
    N3 -->|extend| N4
    N5 -->|determines needed| N6
    N7 -->|reduce| N8
    N9 -->|maintain| N10
    N11 -->|requires| N12
    N13 -->|threatens| N14
    N15 -->|checks| N16
    N17 -->|verifies as applicable| N18
    N19 -->|requires| N20
    N21 -->|must not independently adjust| N22
    N23 -->|may revise| N24
    N25 -->|depends on| N1
    N25 -->|depends on| N3
    N25 -->|depends on| N5
    N25 -->|depends on| N7
    N25 -->|depends on| N9
    N25 -->|depends on| N11
    N25 -->|depends on| N13
    N25 -->|depends on| N15
    N25 -->|depends on| N17
    N25 -->|depends on| N19
    N25 -->|depends on| N21
    N25 -->|depends on| N23
```

### Monitoring signals versus actual physiology

```mermaid
flowchart TD
    N1["Pulse oximetry"]
    N2["Oxygen saturation"]
    N3["Cold motion and poor perfusion"]
    N4["Pulse oximetry reliability"]
    N5["Supplemental oxygen"]
    N6["Developing hypoventilation"]
    N7["Ventilation"]
    N8["Chest rise respiratory effort and alertness"]
    N9["Ventilation adequacy"]
    N10["ECG"]
    N11["Cardiac electrical activity"]
    N12["Motion"]
    N13["ECG artifact"]
    N14["Palpable pulse"]
    N15["Waveform capnography"]
    N16["Exhaled carbon dioxide over time"]
    N17["Ventilation circulation and metabolism"]
    N18["Capnography trends"]
    N19["Capnography changes"]
    N20["Airway displacement or loss of ventilation"]
    N21["IV or IO access"]
    N22["Authorized fluids and medications"]
    N23["Kinking dislodgement or interruption"]
    N24["Infusion delivery"]
    N25["Unexpected monitor change"]
    N26["Artifact disconnection or real deterioration"]
    N27["Patient assessment"]
    N28["Clinical findings and monitor trends"]
    N29["Reassessment and ALS communication"]
    N30["Clinical reassessment"]

    N1 -->|estimates| N2
    N3 -->|can impair| N4
    N5 -->|may mask| N6
    N2 -->|does not measure| N7
    N8 -->|provide information about| N9
    N10 -->|shows| N11
    N12 -->|may cause| N13
    N11 -->|does not establish| N14
    N15 -->|displays| N16
    N17 -->|influence| N18
    N19 -->|may indicate| N20
    N21 -->|provides route for| N22
    N23 -->|compromises| N24
    N25 -->|may reflect| N26
    N27 -->|helps distinguish| N26
    N28 -->|inform| N29
    N30 -->|interprets| N2
    N30 -->|interprets| N3
    N30 -->|interprets| N5
    N30 -->|interprets| N8
    N30 -->|interprets| N11
    N30 -->|interprets| N12
    N30 -->|interprets| N15
    N30 -->|interprets| N17
    N30 -->|interprets| N19
    N30 -->|interprets| N21
    N30 -->|interprets| N23
    N30 -->|interprets| N25
    N30 -->|interprets| N28
```

## Patient positioning and physiology

### Positioning, airway protection and circulation

```mermaid
flowchart TD
    N1["Patient condition"]
    N2["Appropriate position"]
    N3["Appropriately breathing unresponsive patient without suspected spinal injury"]
    N4["Left lateral recovery position"]
    N5["Recovery position"]
    N6["Drainage of fluids or vomitus"]
    N7["Drainage"]
    N8["Aspiration risk"]
    N9["Airway and breathing assessment"]
    N10["Absent or inadequate breathing"]
    N11["Resuscitation or assisted ventilation rather than recovery position"]
    N12["Alert nauseated or vomiting patient"]
    N13["Sitting or recovery position with airway access"]
    N14["Chest discomfort or dyspnea without hypotension"]
    N15["Position of comfort usually upright"]
    N16["Hypoperfusion"]
    N17["Supine positioning subject to protocol and injuries"]
    N18["Suspected spinal injury"]
    N19["SMR with airway priority"]
    N20["Patient position"]
    N21["Venous return and respiratory mechanics"]
    N22["Weak pulses altered alertness skin changes and BP trends"]
    N23["Perfusion assessment"]
    N24["Rhythm vascular access and cause-specific therapy"]
    N25["Low BP alone"]
    N26["Correct fluid or vasoactive treatment"]

    N1 -->|determines| N2
    N3 -->|may benefit from| N4
    N5 -->|permits| N6
    N7 -->|may reduce but not eliminate| N8
    N5 -->|requires ongoing| N9
    N10 -->|requires| N11
    N12 -->|may benefit from| N13
    N14 -->|may favor| N15
    N16 -->|generally favors per source| N17
    N18 -->|requires consideration of| N19
    N20 -->|changes| N21
    N22 -->|inform| N23
    N23 -->|may guide ALS evaluation of| N24
    N25 -->|does not establish| N26
    N1 -->|guides evaluation of| N3
    N1 -->|guides evaluation of| N5
    N1 -->|guides evaluation of| N7
    N1 -->|guides evaluation of| N10
    N1 -->|guides evaluation of| N12
    N1 -->|guides evaluation of| N14
    N1 -->|guides evaluation of| N16
    N1 -->|guides evaluation of| N18
    N1 -->|guides evaluation of| N20
    N1 -->|guides evaluation of| N23
    N1 -->|guides evaluation of| N25
```

### Respiratory distress, orthopnea and positive pressure

```mermaid
flowchart TD
    N1["Elevated pulmonary vascular pressure"]
    N2["Fluid into lung tissue"]
    N3["Gas exchange"]
    N4["Cardiogenic pulmonary edema"]
    N5["Lying flat"]
    N6["Orthopnea"]
    N7["Breathing difficulty when lying flat"]
    N8["Heart failure or other causes"]
    N9["Upright position when tolerated"]
    N10["Respiratory mechanics"]
    N11["CPAP"]
    N12["Continuous positive airway pressure"]
    N13["Gas exchange and work of breathing"]
    N14["Positive pressure"]
    N15["Venous return"]
    N16["Hypotension vomiting inability to protect airway or exhaustion"]
    N17["Noninvasive positive pressure"]
    N18["Clinical assessment"]
    N19["Effort alertness SpO2 pulse BP and history"]
    N20["Device and ventilatory support choice"]
    N21["EMTs in some systems"]
    N22["Authorized ALS evaluation"]
    N23["ECG and cause-directed treatment"]
    N24["Worsening alertness ventilation or perfusion"]
    N25["Revised movement plan"]
    N26["Reassuring saturation alone"]
    N27["Adequate ventilation"]
    N28["Respiratory support planning"]

    N1 -->|can drive| N2
    N2 -->|impairs| N3
    N4 -->|may worsen when| N5
    N6 -->|describes| N7
    N6 -->|may occur with| N8
    N9 -->|may improve| N10
    N11 -->|supplies| N12
    N12 -->|may improve| N13
    N14 -->|may decrease| N15
    N16 -->|may make unsuitable| N17
    N18 -->|includes| N19
    N18 -->|informs| N20
    N11 -->|may be authorized for| N21
    N22 -->|may add| N23
    N24 -->|requires| N25
    N26 -->|does not establish| N27
    N28 -->|requires consideration of| N2
    N28 -->|requires consideration of| N4
    N28 -->|requires consideration of| N6
    N28 -->|requires consideration of| N9
    N28 -->|requires consideration of| N11
    N28 -->|requires consideration of| N14
    N28 -->|requires consideration of| N16
    N28 -->|requires consideration of| N18
    N28 -->|requires consideration of| N22
    N28 -->|requires consideration of| N24
    N28 -->|requires consideration of| N26
```

### Pregnancy: venous return and arrest distinctions

```mermaid
flowchart TD
    N1["Later pregnancy uterus"]
    N2["Major abdominal vessels"]
    N3["Inferior vena cava"]
    N4["Midline"]
    N5["Vessel compression"]
    N6["Venous return"]
    N7["Reduced venous return"]
    N8["Cardiac output and BP"]
    N9["Decreased cardiac output and BP"]
    N10["Dizziness and supine hypotensive syndrome"]
    N11["Left side or right hip elevation after 20 weeks"]
    N12["Right-side positioning"]
    N13["Preferred left-side position"]
    N14["Suspected prolapsed cord"]
    N15["Supine position with hips elevated"]
    N16["Cardiac arrest with fundus at or above umbilicus"]
    N17["CPR with manual leftward uterine displacement"]
    N18["Manual uterine displacement"]
    N19["Simply rolling arrest patient onto side"]
    N20["Chest compressions"]
    N21["Resuscitation positioning"]
    N22["Positioning an appropriately breathing pregnant patient"]
    N23["Pregnancy positioning"]

    N1 -->|may compress when supine| N2
    N3 -->|lies slightly right of| N4
    N5 -->|reduces| N6
    N7 -->|can decrease| N8
    N9 -->|may cause| N10
    N11 -->|reduces| N5
    N12 -->|is a textbook alternative if necessary to| N13
    N14 -->|calls for per local protocol| N15
    N16 -->|requires per 2025 AHA guidance| N17
    N18 -->|aims to relieve| N5
    N19 -->|may compromise| N20
    N21 -->|differs from| N22
    N23 -->|depends on| N1
    N23 -->|depends on| N3
    N23 -->|depends on| N5
    N23 -->|depends on| N7
    N23 -->|depends on| N9
    N23 -->|depends on| N12
    N23 -->|depends on| N14
    N23 -->|depends on| N16
    N23 -->|depends on| N19
    N23 -->|depends on| N21
```

### Pediatric, older adult and disability adaptations

```mermaid
flowchart TD
    N1["Small child"]
    N2["Size and weight appropriate restraint"]
    N3["Child restraint"]
    N4["Approved mounting configuration"]
    N5["Personal undamaged car seat"]
    N6["Child fear"]
    N7["Personal car seat"]
    N8["Ambulance cot mounting"]
    N9["Rolled towels or sheets"]
    N10["Positioning support"]
    N11["Approved pediatric transport restraint"]
    N12["2025 pediatric interim guidance"]
    N13["Approved secure transport"]
    N14["Unsecured child or adult arms"]
    N15["Ambulance transport"]
    N16["Osteoporosis"]
    N17["Fracture vulnerability"]
    N18["Older adult"]
    N19["Gentle handling and explanation"]
    N20["Fixed joints and deformities"]
    N21["Tolerable positions"]
    N22["Patient-reported usual posture"]
    N23["Padding and strap adaptation"]
    N24["Forcing painful fixed posture"]
    N25["Injury and pain"]
    N26["Baseline function"]
    N27["New pain movement or alertness changes"]
    N28["New changes"]
    N29["Analgesia monitoring and equipment needs"]
    N30["Patient-specific movement"]

    N1 -->|requires| N2
    N3 -->|must use| N4
    N5 -->|may reduce| N6
    N7 -->|is not automatically approved for| N8
    N9 -->|may provide| N10
    N10 -->|cannot substitute for| N11
    N12 -->|emphasizes| N13
    N14 -->|are not acceptable for| N15
    N16 -->|increases| N17
    N18 -->|may require| N19
    N20 -->|limit| N21
    N22 -->|guides| N23
    N24 -->|risks| N25
    N26 -->|enables recognition of| N27
    N28 -->|may affect| N29
    N30 -->|requires consideration of| N1
    N30 -->|requires consideration of| N3
    N30 -->|requires consideration of| N5
    N30 -->|requires consideration of| N7
    N30 -->|requires consideration of| N10
    N30 -->|requires consideration of| N12
    N30 -->|requires consideration of| N14
    N30 -->|requires consideration of| N16
    N30 -->|requires consideration of| N18
    N30 -->|requires consideration of| N20
    N30 -->|requires consideration of| N22
    N30 -->|requires consideration of| N24
    N30 -->|requires consideration of| N26
    N30 -->|requires consideration of| N28
```

## Devices and equipment selection

### Wheeled stretchers and powered handling

```mermaid
flowchart TD
    N1["Smooth traversable route"]
    N2["Wheeled stretcher"]
    N3["Manual carrying"]
    N4["Adjustable cot"]
    N5["Clinically appropriate positions and heights"]
    N6["Uneven ground or narrow stairs"]
    N7["Additional rescuers or alternative device"]
    N8["Manual stretcher"]
    N9["Raising lowering and loading"]
    N10["Manual roll-in wheels"]
    N11["Lifting and twisting during loading"]
    N12["Powered stretcher"]
    N13["Hydraulic pneumatic or electric assistance"]
    N14["Powered assistance"]
    N15["Repetitive spinal loading"]
    N16["Device weight"]
    N17["Powered loading"]
    N18["Crew manual workload"]
    N19["Airway support and monitoring"]
    N20["Powered equipment"]
    N21["Pinch tip battery and loading hazards"]
    N22["Observational pre-post study"]
    N23["Stretcher-related injuries after powered introduction"]
    N24["Observational findings"]
    N25["Injury prevention"]
    N26["Actual configuration and accessories"]
    N27["Permissible combined load"]
    N28["Wheeled stretcher selection"]

    N1 -->|favors| N2
    N2 -->|reduces need for| N3
    N4 -->|accommodates| N5
    N6 -->|may require| N7
    N8 -->|requires crew force for| N9
    N10 -->|reduce| N11
    N12 -->|uses| N13
    N14 -->|reduces| N15
    N12 -->|adds| N16
    N17 -->|can reduce| N18
    N18 -->|may free personnel for| N19
    N20 -->|retains| N21
    N22 -->|found fewer| N23
    N24 -->|do not guarantee| N25
    N26 -->|determine| N27
    N28 -->|depends on consideration of| N2
    N28 -->|depends on consideration of| N4
    N28 -->|depends on consideration of| N6
    N28 -->|depends on consideration of| N8
    N28 -->|depends on consideration of| N10
    N28 -->|depends on consideration of| N12
    N28 -->|depends on consideration of| N14
    N28 -->|depends on consideration of| N18
    N28 -->|depends on consideration of| N20
    N28 -->|depends on consideration of| N22
    N28 -->|depends on consideration of| N24
    N28 -->|depends on consideration of| N26
```

Textbook examples: manual roll-in 70–95 lb, powered up to 140 lb, many cots rated up to 650 lb. Check actual ratings; X-ray opacity and rough terrain are limitations.

### Loading and rolling configurations

```mermaid
flowchart TD
    N1["Smooth terrain"]
    N2["Head rescuer pushing and foot rescuer guiding"]
    N3["Rough terrain"]
    N4["Four corner rescuers for stability"]
    N5["Narrow space or stairs"]
    N6["Two end rescuers and substantial strength"]
    N7["Manual roll-in loading"]
    N8["Head-first approach and supported loading wheels"]
    N9["Supported loading wheels"]
    N10["Release lever and carriage collapse"]
    N11["Collapsed carriage"]
    N12["Advance into securing mechanism"]
    N13["Front and rear lock verification"]
    N14["Powered loading"]
    N15["Support engagement and locking checks"]
    N16["Fully powered loading"]
    N17["Cot horizontally"]
    N18["Green indicator"]
    N19["Illustrated model"]
    N20["Hanging stretchers"]
    N21["Wheeled stretchers"]
    N22["Manufacturer instructions"]
    N23["Inspection cleaning repair and loading procedures"]
    N24["Patient attendance"]
    N25["Secured stretcher"]
    N26["Safe cot handling"]

    N1 -->|uses| N2
    N3 -->|favors| N4
    N5 -->|may require| N6
    N7 -->|begins with| N8
    N9 -->|precede| N10
    N11 -->|enables| N12
    N12 -->|requires| N13
    N14 -->|requires model-specific| N15
    N16 -->|may fold and draw in| N17
    N18 -->|confirms engagement only for| N19
    N20 -->|are loaded before in textbook procedure| N21
    N22 -->|govern| N23
    N24 -->|remains necessary despite| N25
    N26 -->|requires consideration of| N1
    N26 -->|requires consideration of| N3
    N26 -->|requires consideration of| N5
    N26 -->|requires consideration of| N7
    N26 -->|requires consideration of| N9
    N26 -->|requires consideration of| N12
    N26 -->|requires consideration of| N14
    N26 -->|requires consideration of| N16
    N26 -->|requires consideration of| N18
    N26 -->|requires consideration of| N20
    N26 -->|requires consideration of| N22
    N26 -->|requires consideration of| N24
```

### Bariatric equipment and respiratory reserve

```mermaid
flowchart TD
    N1["Larger patient and equipment"]
    N2["Combined load"]
    N3["Wider frame and base"]
    N4["Accommodation and stability"]
    N5["Ramp and winch or specialized ambulance"]
    N6["Manual loading demand"]
    N7["Bariatric cot rating"]
    N8["Wheels-down or other configuration"]
    N9["Textbook Stryker example"]
    N10["850 to 1600 pounds"]
    N11["High rated capacity"]
    N12["Crew ability to lift"]
    N13["Obesity"]
    N14["Respiratory reserve"]
    N15["Patient respiratory tolerance"]
    N16["Position choice"]
    N17["Secure restraint and airway access"]
    N18["Early route staffing and equipment planning"]
    N19["Safe bariatric transfer"]
    N20["Breathing alertness and perfusion assessment"]
    N21["Patient size"]

    N1 -->|increase| N2
    N3 -->|improve| N4
    N5 -->|can reduce| N6
    N7 -->|varies with| N8
    N9 -->|ranges by configuration from| N10
    N11 -->|does not establish| N12
    N13 -->|may reduce especially supine| N14
    N15 -->|guides| N16
    N16 -->|must preserve| N17
    N18 -->|supports| N19
    N20 -->|supersede assumptions from| N21
    N19 -->|requires consideration of| N1
    N19 -->|requires consideration of| N3
    N19 -->|requires consideration of| N5
    N19 -->|requires consideration of| N7
    N19 -->|requires consideration of| N9
    N19 -->|requires consideration of| N11
    N19 -->|requires consideration of| N13
    N19 -->|requires consideration of| N16
    N19 -->|requires consideration of| N20
```

### Portable, flexible and basket devices

```mermaid
flowchart TD
    N1["Restricted hallway or stairs"]
    N2["Wheeled stretcher"]
    N3["Portable stretcher"]
    N4["Compact auxiliary carrying surface"]
    N5["Basic portable model"]
    N6["350 pounds not recommended at that load"]
    N7["Manual carrying"]
    N8["Pole stretcher"]
    N9["Fabric between poles and locking crosspieces"]
    N10["Spinal immobilization per textbook"]
    N11["Rocky ground"]
    N12["Soft tissue injury"]
    N13["Four or more rescuers"]
    N14["Flexible Reeves stretcher"]
    N15["Six side handles and three straps"]
    N16["Narrow hallways and board-assisted movement"]
    N17["Basket stretcher"]
    N18["Rough terrain transport"]
    N19["Scoop or Ohio board"]
    N20["Flotation harness"]
    N21["Water rescue"]
    N22["Rope or ladder basket rescue"]
    N23["Specific training"]
    N24["Mattress and padding"]
    N25["Comfort and cold insulation"]
    N26["Basket or portable device"]
    N27["Alternative device selection"]

    N1 -->|may preclude| N2
    N3 -->|provides| N4
    N5 -->|has textbook rating up to| N6
    N3 -->|requires| N7
    N8 -->|uses| N9
    N8 -->|requires board if needed for| N10
    N11 -->|risks with pole stretcher| N12
    N13 -->|are preferred for| N8
    N14 -->|uses| N15
    N14 -->|accommodates| N16
    N17 -->|protects during| N18
    N17 -->|can accommodate| N19
    N20 -->|adapts basket for| N21
    N22 -->|requires| N23
    N24 -->|provide| N25
    N26 -->|must be secured if placed on| N2
    N27 -->|requires consideration of| N1
    N27 -->|requires consideration of| N3
    N27 -->|requires consideration of| N5
    N27 -->|requires consideration of| N8
    N27 -->|requires consideration of| N11
    N27 -->|requires consideration of| N14
    N27 -->|requires consideration of| N17
    N27 -->|requires consideration of| N20
    N27 -->|requires consideration of| N22
    N27 -->|requires consideration of| N24
```

### Stair chairs and clinical tolerance

```mermaid
flowchart TD
    N1["Narrow stairs corridors and small elevators"]
    N2["Stair chair"]
    N3["Altered mental status suspected spinal injury or lower extremity injury"]
    N4["Alert cooperative patient with positional dyspnea"]
    N5["Seated movement"]
    N6["Severe fatigue vomiting poor perfusion or reduced alertness"]
    N7["Sustained BVM requirement"]
    N8["Stair chair clinical access"]
    N9["CPAP in use"]
    N10["Safe continuity during carry or alternative plan"]
    N11["Manual stair chair"]
    N12["Secure straps and patient instructions"]
    N13["Head rescuer tilting chair"]
    N14["Foot rescuer grasping chair legs"]
    N15["Synchronized manual carry"]
    N16["Wheels off steps"]
    N17["Spotter"]
    N18["Hazards"]
    N19["Tracked chair"]
    N20["Descent"]
    N21["Two stabilizing rescuers"]
    N22["Power track example"]
    N23["500 pounds"]
    N24["Clinical reassessment"]
    N25["Continued stair chair suitability"]

    N1 -->|favor when appropriate| N2
    N3 -->|contraindicate textbook| N2
    N4 -->|may tolerate| N5
    N6 -->|may make unsafe| N5
    N7 -->|may conflict with| N8
    N9 -->|requires| N10
    N11 -->|requires| N12
    N13 -->|permits| N14
    N15 -->|keeps| N16
    N17 -->|counts steps and identifies| N18
    N19 -->|reduces need to lift during| N20
    N20 -->|still requires| N21
    N22 -->|accommodates up to textbook| N23
    N24 -->|determines before commitment| N25
    N2 -->|requires consideration of| N4
    N2 -->|requires consideration of| N7
    N2 -->|requires consideration of| N9
    N2 -->|requires consideration of| N11
    N2 -->|requires consideration of| N13
    N2 -->|requires consideration of| N15
    N2 -->|requires consideration of| N17
    N2 -->|requires consideration of| N20
    N2 -->|requires consideration of| N22
    N2 -->|requires consideration of| N24
```

### SMR and device-related trade-offs

```mermaid
flowchart TD
    N1["Suspected spinal injury"]
    N2["Spinal motion restriction"]
    N3["Unwanted movement"]
    N4["Ventilation perfusion and comfort"]
    N5["Backboard"]
    N6["Extrication and transfer"]
    N7["Firm CPR surface"]
    N8["Breathing and comfort"]
    N9["Prolonged board use"]
    N10["Pressure injury pain and heat loss"]
    N11["Ohio board taper"]
    N12["Vehicle and basket maneuverability"]
    N13["Vacuum mattress"]
    N14["Supine body contours"]
    N15["Air removal"]
    N16["Rigid conforming support"]
    N17["Padding voids"]
    N18["SMR and basket transport"]
    N19["Board removal onto cot or vacuum mattress"]
    N20["Coordinated precautions and reassessment"]
    N21["Neurological and respiratory checks"]
    N22["Transfer-related changes"]
    N23["Absolute immobilization"]
    N24["SMR devices"]

    N1 -->|may indicate under protocol| N2
    N2 -->|aims to limit| N3
    N2 -->|must preserve| N4
    N5 -->|facilitates| N6
    N5 -->|can serve as| N7
    N5 -->|may impair| N8
    N9 -->|may contribute to| N10
    N11 -->|improves| N12
    N13 -->|conforms around| N14
    N15 -->|produces| N16
    N16 -->|reduces need for| N17
    N13 -->|can support| N18
    N19 -->|requires| N20
    N21 -->|assess| N22
    N23 -->|is not guaranteed by| N24
    N2 -->|requires consideration of| N5
    N2 -->|requires consideration of| N9
    N2 -->|requires consideration of| N11
    N2 -->|requires consideration of| N13
    N2 -->|requires consideration of| N16
    N2 -->|requires consideration of| N19
    N2 -->|requires consideration of| N21
    N2 -->|requires consideration of| N23
```

### Scoop stretcher and evolving guidance

```mermaid
flowchart TD
    N1["Scoop stretcher"]
    N2["Adjustable halves around patient"]
    N3["Pelvic and bilateral femur fractures"]
    N4["Scoop-assisted movement"]
    N5["Confined areas"]
    N6["Scoop placement"]
    N7["Access from both sides and at least two rescuers"]
    N8["Length adjustment"]
    N9["Placement of separated halves"]
    N10["Gentle coordinated rolling"]
    N11["Insertion and back assessment"]
    N12["Head-end assembly"]
    N13["Foot-end latching"]
    N14["Verified latches"]
    N15["Secure lift"]
    N16["Padding head and bony prominences"]
    N17["Comfort and pressure protection"]
    N18["At least three body straps"]
    N19["Patient to scoop"]
    N20["Cold metal"]
    N21["Prewarming"]
    N22["Textbook spinal injury prohibition"]
    N23["2018 joint SMR consensus"]
    N24["Transfer options to minimize motion"]
    N25["Device instructions patient injury and tolerance"]
    N26["Appropriate scoop use"]

    N1 -->|separates into| N2
    N3 -->|may benefit from| N4
    N5 -->|may favor| N4
    N6 -->|requires| N7
    N8 -->|precedes| N9
    N10 -->|permits| N11
    N12 -->|precedes in textbook method| N13
    N14 -->|enable| N15
    N16 -->|supports| N17
    N18 -->|secure| N19
    N20 -->|may require| N21
    N22 -->|differs from| N23
    N23 -->|recognizes scoop among| N24
    N25 -->|determine with local protocol| N26
    N1 -->|requires consideration of| N3
    N1 -->|requires consideration of| N6
    N1 -->|requires consideration of| N8
    N1 -->|requires consideration of| N10
    N1 -->|requires consideration of| N12
    N1 -->|requires consideration of| N14
    N1 -->|requires consideration of| N16
    N1 -->|requires consideration of| N18
    N1 -->|requires consideration of| N20
    N1 -->|requires consideration of| N23
    N1 -->|requires consideration of| N25
```

The 300-pound rating is a textbook example. Consensus does not endorse every scoop model or prolonged scoop transport.

## Confined spaces, stairs and practical integration

### Carry configurations and fall prevention

```mermaid
flowchart TD
    N1["Narrow route or rough ground"]
    N2["Portable flexible or board-assisted carry"]
    N3["Patient straps"]
    N4["Sliding out of device"]
    N5["Textbook confined carry"]
    N6["At least three straps"]
    N7["Safe hand positioning"]
    N8["Grabbing rails and destabilizing crew"]
    N9["Improvised behavioral restraints"]
    N10["Two-person carry"]
    N11["Heavier head end"]
    N12["Side stabilization"]
    N13["Backward-moving rescuer"]
    N14["Unseen trip hazards"]
    N15["Spotter"]
    N16["Four-person diamond"]
    N17["Head foot and two side supports"]
    N18["Four-person rectangular carry"]
    N19["Two supports at each end"]
    N20["Four-person configurations"]
    N21["Forward-facing rescuers"]
    N22["Load close to body"]
    N23["Back strain"]
    N24["High-angle or unstable terrain"]
    N25["Trained rescue resources"]
    N26["Safe confined-space carry"]

    N1 -->|may require| N2
    N3 -->|prevent| N4
    N5 -->|specifies| N6
    N7 -->|reduces| N8
    N7 -->|does not authorize| N9
    N10 -->|places stronger rescuer at| N11
    N10 -->|lacks| N12
    N13 -->|faces| N14
    N15 -->|guides| N13
    N16 -->|adds| N17
    N18 -->|distributes| N19
    N20 -->|allow| N21
    N22 -->|reduces| N23
    N24 -->|warrants| N25
    N26 -->|requires consideration of| N1
    N26 -->|requires consideration of| N3
    N26 -->|requires consideration of| N5
    N26 -->|requires consideration of| N7
    N26 -->|requires consideration of| N10
    N26 -->|requires consideration of| N13
    N26 -->|requires consideration of| N16
    N26 -->|requires consideration of| N18
    N26 -->|requires consideration of| N20
    N26 -->|requires consideration of| N22
    N26 -->|requires consideration of| N24
```

### Stair orientation and access to treatment

```mermaid
flowchart TD
    N1["Supine stair carry"]
    N2["Sliding from either end"]
    N3["Downstairs or downhill"]
    N4["Feet-first orientation"]
    N5["Foot end below patient"]
    N6["Upstairs or uphill"]
    N7["Head-first orientation"]
    N8["Head end above patient"]
    N9["Spotter below on descent"]
    N10["Foot-end rescuer"]
    N11["Spotter above on ascent"]
    N12["Head-end rescuer"]
    N13["Stair width"]
    N14["Side support and clinician access"]
    N15["Narrow route"]
    N16["Continuous ventilation and monitoring"]
    N17["Loss of essential clinical access"]
    N18["Alternative device or staged movement"]
    N19["Safe reassessment points"]
    N20["Staged movement"]
    N21["Device instructions"]
    N22["Actual orientation restraints and staffing"]
    N23["Safe stair movement"]

    N1 -->|requires restraint against| N2
    N3 -->|uses textbook| N4
    N4 -->|places backward-moving rescuer at| N5
    N6 -->|uses textbook| N7
    N7 -->|places backward-moving rescuer at| N8
    N9 -->|guides| N10
    N11 -->|guides| N12
    N13 -->|limits| N14
    N15 -->|can interrupt| N16
    N17 -->|may require| N18
    N19 -->|support| N20
    N21 -->|govern| N22
    N23 -->|requires consideration of| N1
    N23 -->|requires consideration of| N4
    N23 -->|requires consideration of| N7
    N23 -->|requires consideration of| N9
    N23 -->|requires consideration of| N11
    N23 -->|requires consideration of| N13
    N23 -->|requires consideration of| N15
    N23 -->|requires consideration of| N17
    N23 -->|requires consideration of| N19
    N23 -->|requires consideration of| N21
```

### Dialysis transfer and change from baseline

```mermaid
flowchart TD
    N1["Snow and ice"]
    N2["Slip hazards"]
    N3["Clearing and salting walkway"]
    N4["Limited baseline mobility and narrow stairs"]
    N5["Supported stair chair transfer if suitable"]
    N6["Patient explanation and agreement"]
    N7["Cooperation"]
    N8["Blankets and appropriate clothing"]
    N9["Warmth and comfort"]
    N10["Bulky clothing"]
    N11["Safe restraint"]
    N12["Spotter and coordinated pace"]
    N13["Stairway stability"]
    N14["Rest after descent"]
    N15["Accumulated rescuer fatigue"]
    N16["Clear walkway"]
    N17["Rolling to ambulance"]
    N18["Post-transfer reassessment"]
    N19["Baseline clinical status"]
    N20["Stable routine dialysis patient"]
    N21["Authorized BLS care"]
    N22["Missed dialysis"]
    N23["Fluid overload or hyperkalemia"]
    N24["Hyperkalemia"]
    N25["Cardiac electrical function"]
    N26["New dyspnea palpitations weakness or near-syncope"]
    N27["Reassessment and revised transfer plan"]
    N28["New symptoms"]
    N29["Hyperkalemia diagnosis"]
    N30["ALS evaluation"]
    N31["ECG and destination reconsideration"]
    N32["Normal ECG"]
    N33["Dialysis access"]
    N34["Compression and trauma"]
    N35["Last dialysis and baseline trends"]
    N36["Handoff and care decisions"]
    N37["Dialysis transfer planning"]

    N1 -->|create| N2
    N3 -->|reduce| N2
    N4 -->|favor| N5
    N6 -->|promote| N7
    N8 -->|protect| N9
    N10 -->|may interfere with| N11
    N12 -->|support| N13
    N14 -->|reduces| N15
    N16 -->|enables| N17
    N18 -->|compares with| N19
    N20 -->|may need only| N21
    N22 -->|may be associated with| N23
    N24 -->|can disrupt| N25
    N26 -->|warrant| N27
    N28 -->|do not establish| N29
    N30 -->|may include| N31
    N32 -->|does not exclude| N24
    N33 -->|requires protection from| N34
    N35 -->|inform| N36
    N37 -->|requires consideration of| N1
    N37 -->|requires consideration of| N4
    N37 -->|requires consideration of| N6
    N37 -->|requires consideration of| N8
    N37 -->|requires consideration of| N10
    N37 -->|requires consideration of| N12
    N37 -->|requires consideration of| N14
    N37 -->|requires consideration of| N16
    N37 -->|requires consideration of| N18
    N37 -->|requires consideration of| N20
    N37 -->|requires consideration of| N22
    N37 -->|requires consideration of| N24
    N37 -->|requires consideration of| N26
    N37 -->|requires consideration of| N28
    N37 -->|requires consideration of| N30
    N37 -->|requires consideration of| N33
    N37 -->|requires consideration of| N35
```

The case's initial spotter location differs from the general descent procedure. Follow approved device-specific spotter positioning; protect dialysis access and follow local BP and access restrictions. The deterioration scenario is an illustrative extension, not a finding in the original patient.

### Seated respiratory transfer integration

```mermaid
flowchart TD
    N1["Second-floor bedroom and narrow hallway"]
    N2["Device selection"]
    N3["Orthopnea"]
    N4["Supine tolerance"]
    N5["Seated position"]
    N6["Respiratory tolerance"]
    N7["Stair chair"]
    N8["Alertness perfusion ventilation and cooperation"]
    N9["Safe seated transfer"]
    N10["History vital trends and respiratory effort"]
    N11["BLS assessment"]
    N12["Authorized oxygen or ventilation and early help request"]
    N13["ALS evaluation"]
    N14["ECG or noninvasive support when appropriate"]
    N15["Specific diagnosis or drug choice"]
    N16["Movement plan"]
    N17["Respiratory support"]
    N18["Worsening ventilation perfusion or alertness"]
    N19["Reassessment and revised movement plan"]

    N1 -->|constrain| N2
    N3 -->|limits| N4
    N5 -->|may improve| N6
    N7 -->|may accommodate| N5
    N8 -->|determine| N9
    N10 -->|inform| N11
    N11 -->|guides| N12
    N13 -->|may add| N14
    N3 -->|does not establish| N15
    N16 -->|must preserve| N17
    N18 -->|triggers| N19
    N9 -->|requires consideration of| N1
    N9 -->|requires consideration of| N3
    N9 -->|requires consideration of| N5
    N9 -->|requires consideration of| N11
    N9 -->|requires consideration of| N13
    N9 -->|requires consideration of| N16
    N9 -->|requires consideration of| N18
```

## Specialized transport

### Air medical activation and handoff

```mermaid
flowchart TD
    N1["Air medical activation"]
    N2["Expected benefit time to appropriate care and transport risk"]
    N3["Available capabilities"]
    N4["Early ground-flight coordination"]
    N5["Delays and duplicate procedures"]
    N6["Airway strategy"]
    N7["Patient physiology and authorized clinician judgment"]
    N8["Endotracheal intubation"]
    N9["Every flight"]
    N10["Adequate BLS ventilation"]
    N11["Delaying or harmful invasive airway intervention"]
    N12["Advanced airway when used"]
    N13["Securement monitoring and chest access"]
    N14["Ground team handoff"]
    N15["Airway oxygen needs trends injuries treatments and response"]
    N16["Flight team"]
    N17["Equipment compatibility and loading"]
    N18["Infusions"]
    N19["Approved secure mounts and delivery continuity"]
    N20["Laying an IV bag flat"]
    N21["Gravity-dependent or pump therapy"]
    N22["Unauthorized personnel"]
    N23["Running infusion"]
    N24["Ground-to-air transfer"]

    N1 -->|depends on| N2
    N3 -->|influence| N1
    N4 -->|can reduce| N5
    N6 -->|depends on| N7
    N8 -->|is not prerequisite for| N9
    N10 -->|may be preferable to| N11
    N12 -->|requires| N13
    N14 -->|communicates| N15
    N16 -->|directs| N17
    N18 -->|require| N19
    N20 -->|may disrupt| N21
    N22 -->|must not manipulate| N23
    N24 -->|requires coordination of| N1
    N24 -->|requires coordination of| N4
    N24 -->|requires coordination of| N6
    N24 -->|requires coordination of| N8
    N24 -->|requires coordination of| N10
    N24 -->|requires coordination of| N12
    N24 -->|requires coordination of| N14
    N24 -->|requires coordination of| N16
    N24 -->|requires coordination of| N18
    N24 -->|requires coordination of| N20
    N24 -->|requires coordination of| N22
```

### Aircraft environment and operational safety

```mermaid
flowchart TD
    N1["Hazmat contamination"]
    N2["Hazardous cabin fumes"]
    N3["Decontamination and flight program policy"]
    N4["Safe acceptance"]
    N5["Rotor wash"]
    N6["Loose equipment dust and debris"]
    N7["Secured equipment and removed loose clothing"]
    N8["Rotor and engine hazards"]
    N9["Landing zone wetting when appropriate"]
    N10["Blowing dust"]
    N11["Eye ear and wound protection"]
    N12["Noise and rotor wash"]
    N13["Patient explanation"]
    N14["Crew authorization"]
    N15["Aircraft approach"]
    N16["Aircraft-specific approach and placards"]
    N17["Safe loading"]
    N18["Tail rotor"]
    N19["Safe clearance"]
    N20["Minimum essential personnel"]
    N21["Exposure under rotors"]
    N22["Board cot and restraints"]
    N23["Aircraft compatibility checks"]
    N24["Flight-team instructions"]
    N25["Ground-to-air transfer"]
    N26["Aircraft loading safety"]

    N1 -->|may expose crew to| N2
    N3 -->|determine| N4
    N5 -->|can mobilize| N6
    N7 -->|reduce| N8
    N9 -->|may reduce| N10
    N11 -->|reduces exposure to| N12
    N13 -->|prepares patient for| N12
    N14 -->|precedes| N15
    N16 -->|guide| N17
    N18 -->|requires| N19
    N20 -->|limits| N21
    N22 -->|require| N23
    N24 -->|govern| N25
    N26 -->|requires consideration of| N1
    N26 -->|requires consideration of| N3
    N26 -->|requires consideration of| N5
    N26 -->|requires consideration of| N7
    N26 -->|requires consideration of| N9
    N26 -->|requires consideration of| N11
    N26 -->|requires consideration of| N14
    N26 -->|requires consideration of| N16
    N26 -->|requires consideration of| N18
    N26 -->|requires consideration of| N20
    N26 -->|requires consideration of| N22
    N26 -->|requires consideration of| N24
```

### Neonatal isolette transport and thermal physiology

```mermaid
flowchart TD
    N1["Newborn high surface area relative to mass"]
    N2["Heat loss"]
    N3["Prematurity"]
    N4["Thermal reserves"]
    N5["Cold stress"]
    N6["Metabolic demand"]
    N7["Low glucose and inadequate oxygen delivery"]
    N8["Isolette"]
    N9["Controlled thermal environment"]
    N10["Approved transport platform"]
    N11["2025 neonatal resuscitation guidance"]
    N12["Temperature monitoring and avoiding overcooling or overheating"]
    N13["Interfacility isolette protocol"]
    N14["Specialty team"]
    N15["Oxygen ventilation glucose and IV infusions"]
    N16["Specific training and authorization"]
    N17["EMT support"]
    N18["Clear route secured equipment supplies and observation"]
    N19["Isolette and attached equipment"]
    N20["Compatible ambulance mounts and verified securement"]
    N21["Unauthorized changes"]
    N22["Isolette or ventilation settings"]
    N23["Neonatal transport"]

    N1 -->|promotes| N2
    N3 -->|limits| N4
    N2 -->|may cause| N5
    N5 -->|increases| N6
    N6 -->|can worsen| N7
    N8 -->|provides| N9
    N8 -->|also provides| N10
    N11 -->|emphasizes| N12
    N11 -->|is not a complete| N13
    N14 -->|may manage| N15
    N15 -->|require| N16
    N17 -->|includes| N18
    N19 -->|require| N20
    N21 -->|must not be made to| N22
    N23 -->|requires consideration of| N2
    N23 -->|requires consideration of| N3
    N23 -->|requires consideration of| N8
    N23 -->|requires consideration of| N11
    N23 -->|requires consideration of| N15
    N23 -->|requires consideration of| N17
    N23 -->|requires consideration of| N19
    N23 -->|requires consideration of| N21
```

## Cross-concept integration

### Reassessment as a movement safety feedback loop

```mermaid
flowchart TD
    N1["Baseline clinical assessment"]
    N2["Physiological and neurological reference"]
    N3["Route device staffing and position"]
    N4["Movement plan"]
    N5["Clinical access and patient physiology"]
    N6["Ongoing treatment delivery"]
    N7["Reassessment"]
    N8["New symptoms device issues or deterioration"]
    N9["Safe stop and authorized corrective action"]
    N10["Movement and clinical team"]
    N11["BLS care and authorized ALS support"]
    N12["Continuous reassessment"]
    N13["Handoff and documentation"]
    N14["Baseline trends movement and treatment response"]

    N1 -->|establishes| N2
    N3 -->|define| N4
    N4 -->|affects| N5
    N5 -->|influence| N6
    N6 -->|is checked by| N7
    N7 -->|compares findings with| N2
    N7 -->|identifies| N8
    N8 -->|may require| N9
    N9 -->|revise when needed| N4
    N4 -->|is communicated to| N10
    N10 -->|coordinates| N11
    N11 -->|depend on| N12
    N13 -->|communicate| N14
    N7 -->|informs| N13
```

This is a clinical reasoning and safety feedback model, not a mandatory care sequence or treatment protocol.
