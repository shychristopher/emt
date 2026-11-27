---
title: Concept Maps
module_id: module-3
view: concept-maps
---

# Chapter 10: Airway Management, Respiration, Ventilation, and Oxygenation

## Respiratory foundations

### Chapter overview

```mermaid
flowchart TD
    n01["Airway patency"]
    n02["Alveolar ventilation"]
    n03["Pulmonary gas exchange"]
    n04["Tissue oxygen delivery"]
    n05["Perfusion and hemoglobin"]
    n06["Aerobic metabolism"]
    n07["Respiratory assessment"]
    n08["Oxygenation"]
    n09["BLS airway and breathing support"]
    n10["Oxygen therapy"]
    n11["ALS monitoring"]
    n12["Reassessment"]

    n01 -->|enables airflow for| n02
    n02 -->|supplies fresh gas for| n03
    n03 -->|contributes blood oxygen to| n04
    n05 -->|help determine| n04
    n04 -->|supports| n06
    n07 -->|examines separately| n01
    n07 -->|estimates adequacy of| n02
    n07 -->|checks| n08
    n09 -->|addresses deficits in| n01
    n09 -->|can augment| n02
    n10 -->|supports when indicated| n08
    n11 -->|can supplement| n07
    n12 -->|checks response to| n09
```

### Airway structure, resistance, and protection

```mermaid
flowchart TD
    n01["Nasal mucosa and turbinates"]
    n02["Inspired air"]
    n03["Pharynx"]
    n04["Larynx"]
    n05["Vocal cords"]
    n06["Epiglottis"]
    n07["Swallowing"]
    n08["Laryngeal protective structures"]
    n09["Aspiration"]
    n10["Loss of pharyngeal muscle tone"]
    n11["Tongue"]
    n12["Posterior tongue displacement"]
    n13["Cricoid cartilage"]
    n14["Upper and lower airway"]
    n15["Trachea"]
    n16["C-shaped cartilage"]
    n17["Mainstem bronchi"]
    n18["Bronchioles"]
    n19["Bronchiolar smooth muscle constriction and mucosal swelling"]
    n20["Airway resistance"]
    n21["Work of breathing"]
    n22["Work of breathing when sustained"]
    n23["Respiratory muscle fatigue"]
    n24["Inadequate ventilation"]
    n25["Alveoli"]

    n01 -->|help warm, moisten and filter| n02
    n03 -->|conveys inspired air toward| n04
    n04 -->|houses| n05
    n06 -->|covers the laryngeal opening during| n07
    n08 -->|help limit| n09
    n10 -->|permits posterior displacement of| n11
    n12 -->|can obstruct| n03
    n13 -->|marks the source’s boundary between| n14
    n15 -->|is supported anteriorly by| n16
    n15 -->|branches at the carina into| n17
    n17 -->|branch into| n18
    n19 -->|increase| n20
    n20 -->|increases| n21
    n22 -->|can lead to| n23
    n23 -->|can contribute to| n24
    n18 -->|conduct air toward| n25
    n04 -->|contains| n08
    n10 -->|can narrow the airway at| n03
    n02 -->|passes from nose and pharynx toward| n04
    n04 -->|opens inferiorly toward| n15
    n13 -->|forms the inferior ring of| n04
    n08 -->|include| n06
    n12 -->|increases resistance to flow through| n03
    n19 -->|occur within| n18
    n21 -->|if prolonged becomes| n22
```

### Pleura and breathing mechanics

```mermaid
flowchart TD
    n01["Inspiration"]
    n02["Diaphragm and external intercostals"]
    n03["Increased thoracic volume"]
    n04["Intrapleural pressure"]
    n05["Pleural fluid between visceral and parietal layers"]
    n06["Lung and chest wall"]
    n07["Thoracic expansion transmitted to lungs"]
    n08["Alveolar pressure"]
    n09["Pressure gradient during inspiration"]
    n10["Airflow into lungs"]
    n11["Muscle relaxation and elastic recoil"]
    n12["Passive exhalation"]
    n13["Bronchial obstruction and trapped air"]
    n14["Exhalation"]
    n15["Air entering the pleural space"]
    n16["Pleural coupling"]
    n17["Loss of pleural coupling"]
    n18["Lung recoil and collapse"]

    n01 -->|recruits| n02
    n02 -->|contract to produce| n03
    n03 -->|makes more negative| n04
    n05 -->|mechanically couples| n06
    n07 -->|lowers| n08
    n09 -->|drives| n10
    n11 -->|produce| n12
    n13 -->|can increase muscular effort during| n14
    n15 -->|disrupts| n16
    n17 -->|allows| n18
    n04 -->|helps maintain| n16
    n06 -->|move together during| n07
    n08 -->|below atmospheric pressure creates| n09
    n12 -->|can become more effortful with| n13
    n16 -->|supports transmission of| n07
    n15 -->|produces| n17
    n01 -->|alternates with| n14
    n12 -->|is typical of resting| n14
```

### Gas exchange and oxygen delivery

```mermaid
flowchart TD
    n01["Alveolar ventilation"]
    n02["Alveoli"]
    n03["Alveolar oxygen"]
    n04["Pulmonary capillaries"]
    n05["Pulmonary capillary oxygen"]
    n06["Hemoglobin"]
    n07["Tissue oxygen delivery"]
    n08["Oxygen content and blood flow"]
    n09["Systemic capillary oxygen"]
    n10["Cells"]
    n11["Aerobic ATP production"]
    n12["Cellular carbon dioxide"]
    n13["Pulmonary capillary carbon dioxide"]
    n14["Exhalation"]
    n15["Alveolar carbon dioxide"]
    n16["V/Q mismatch"]
    n17["Pulmonary oxygen transfer"]
    n18["Anemia or carbon monoxide exposure"]
    n19["Arterial oxygen tension"]
    n20["Major blood loss"]
    n21["SpO₂"]
    n22["Inadequate oxygen delivery"]
    n23["Anaerobic metabolism and lactate accumulation"]

    n01 -->|brings oxygen to| n02
    n03 -->|diffuses into| n04
    n05 -->|is carried primarily by| n06
    n07 -->|depends on| n08
    n09 -->|diffuses into| n10
    n10 -->|use oxygen and glucose for| n11
    n12 -->|returns via blood to| n04
    n13 -->|diffuses into| n02
    n14 -->|removes| n15
    n16 -->|can impair| n17
    n18 -->|can impair oxygen content or delivery despite preserved| n19
    n20 -->|can compromise tissue perfusion despite reassuring| n21
    n22 -->|favors| n23
    n02 -->|supply| n03
    n04 -->|receive| n05
    n06 -->|helps determine the oxygen content component of| n08
    n09 -->|is delivered through| n07
    n11 -->|produces| n12
    n02 -->|receive| n15
    n16 -->|can affect oxygen transfer into| n04
    n18 -->|may reduce oxygen carried by| n06
    n20 -->|can limit| n07
    n22 -->|reduces support for| n11
```

### Respiratory control and COPD

```mermaid
flowchart TD
    n01["Rising CO₂ and associated pH changes"]
    n02["Central chemoreceptor response"]
    n03["Low arterial oxygen"]
    n04["Peripheral chemoreceptor response"]
    n05["Chemoreceptor input"]
    n06["Brainstem respiratory centers"]
    n07["Rate and depth"]
    n08["Effective alveolar ventilation"]
    n09["CO₂ removal"]
    n10["Excess oxygen in susceptible COPD"]
    n11["V/Q matching"]
    n12["Oxygenation of hemoglobin"]
    n13["Haldane effect"]
    n14["Worsened V/Q matching"]
    n15["Arterial CO₂"]
    n16["Arterial CO₂ rise"]
    n17["Reduced ventilatory drive"]
    n18["Titrated oxygen in suspected COPD exacerbation"]
    n19["Routine high-flow oxygen in the cited prehospital trial"]
    n20["Rising drowsiness despite better SpO₂"]
    n21["Ventilation"]

    n01 -->|stimulate| n02
    n03 -->|stimulates| n04
    n02 -->|contributes to| n05
    n04 -->|contributes to| n05
    n05 -->|influences| n06
    n06 -->|regulate| n07
    n07 -->|can increase when needed to support| n08
    n08 -->|promotes| n09
    n09 -->|counteracts the initiating rise in| n01
    n10 -->|can worsen| n11
    n12 -->|can release carried CO₂ through| n13
    n14 -->|can increase| n15
    n13 -->|can contribute to| n16
    n17 -->|may also contribute to| n16
    n18 -->|reduced mortality versus| n19
    n20 -->|prompts reassessment of| n21
    n14 -->|can contribute to| n16
    n10 -->|can lead to| n14
    n16 -->|can reinforce the chemoreceptor stimulus of| n01
    n20 -->|may signal| n16
    n18 -->|limits exposure to| n10
```

The prehospital COPD trial used 88–92% as its titration target. Correct hypoxemia promptly, use the applicable protocol, and support inadequate ventilation. The chapter’s older hypoxic-drive explanation is incomplete.

### Failure mechanisms, compensation, and reserve

```mermaid
flowchart TD
    n01["CNS depression or neuromuscular weakness"]
    n02["Respiratory drive or muscle function"]
    n03["Chest wall injury and splinting"]
    n04["Chest expansion"]
    n05["Edema, secretions or foreign body"]
    n06["Airway patency"]
    n07["Pulmonary edema, pneumonia or drowning"]
    n08["Gas exchange"]
    n09["Pulmonary embolism, hypovolemia or tamponade"]
    n10["Perfusion"]
    n11["Carbon monoxide or cyanide"]
    n12["Oxygen transport or use"]
    n13["Hypoxemia and impaired perfusion"]
    n14["Tachypnea, restlessness and clammy skin"]
    n15["Persistent severe compromise"]
    n16["Confusion, cyanosis or bradycardia"]
    n17["Cyanosis"]
    n18["Hypoxemia"]
    n19["Compensatory effort"]
    n20["Ventilation"]
    n21["Respiratory muscle fatigue"]
    n22["Reduced hemoglobin"]
    n23["Hypercapnia"]
    n24["Sleepiness and reduced responsiveness"]
    n25["Smaller reserves and higher metabolic needs in children"]
    n26["Desaturation"]
    n27["Reduced reserve, difficult seal and aspiration risk in older adults"]
    n28["Airway support"]
    n29["Tissue oxygen delivery"]
    n30["Impaired perfusion"]

    n01 -->|can impair| n02
    n03 -->|can restrict| n04
    n05 -->|may reduce| n06
    n07 -->|can impair| n08
    n09 -->|can compromise| n10
    n11 -->|can disrupt| n12
    n13 -->|may be accompanied by| n14
    n15 -->|can progress to| n16
    n17 -->|is often a late finding in| n18
    n19 -->|may initially preserve| n20
    n21 -->|can erode| n19
    n22 -->|can make less apparent| n17
    n23 -->|can accompany| n24
    n25 -->|can hasten| n26
    n27 -->|can complicate| n28
    n02 -->|affects| n20
    n04 -->|contributes to| n20
    n06 -->|allows airflow for| n20
    n20 -->|helps maintain| n08
    n08 -->|when impaired can contribute to| n18
    n10 -->|when impaired can compromise| n29
    n12 -->|when impaired can compromise| n29
    n14 -->|can reflect early responses in| n13
    n15 -->|may follow unresolved| n13
    n16 -->|can include| n17
    n20 -->|when inadequate may cause| n23
    n21 -->|can follow prolonged work during| n19
    n26 -->|can accompany| n18
    n18 -->|can coexist with| n30
    n30 -->|can reduce| n29
    n28 -->|can restore airflow for| n20
```

## Airway assessment and BLS management

### Airway sounds, patency, and protection

```mermaid
flowchart TD
    n01["Normal voice and air movement"]
    n02["Current airway patency"]
    n03["Altered alertness"]
    n04["Airway protective reflexes"]
    n05["Reduced protective reflexes"]
    n06["Aspiration"]
    n07["Patent airway"]
    n08["Inadequate airway protection"]
    n09["Snoring"]
    n10["Posterior soft-tissue obstruction"]
    n11["Gurgling"]
    n12["Fluid in the airway"]
    n13["Stridor or crowing"]
    n14["Upper-airway narrowing"]
    n15["Wheeze"]
    n16["Lower-airway bronchospasm"]
    n17["Progressive voice change, swelling or recurrent emesis"]
    n18["Sustained airway patency"]
    n19["Facial burns or soft-tissue trauma"]
    n20["Obstruction"]
    n21["Repeated assessment after positioning or suction"]
    n22["Air movement"]

    n01 -->|support the finding of| n02
    n03 -->|can weaken| n04
    n05 -->|increase risk of| n06
    n07 -->|can coexist with| n08
    n09 -->|may reflect| n10
    n11 -->|suggests| n12
    n13 -->|suggests| n14
    n15 -->|can reflect| n16
    n17 -->|raises concern for loss of| n18
    n19 -->|can cause or worsen| n20
    n21 -->|tests whether support restores| n22
    n02 -->|can be reassessed by observing| n22
    n07 -->|is assessed by checking| n22
    n04 -->|when reduced become| n05
    n08 -->|increases risk of| n06
    n10 -->|can reduce| n22
    n12 -->|can contribute to| n20
    n14 -->|can reduce| n22
    n16 -->|can reduce| n22
    n18 -->|can be threatened by| n20
    n20 -->|can reduce| n22
```

### Positioning, adjuncts, and aspiration

```mermaid
flowchart TD
    n01["Crossed-fingers maneuver"]
    n02["Inspection and access"]
    n03["Head-tilt with chin lift"]
    n04["Tongue and soft tissue"]
    n05["Jaw thrust"]
    n06["Cervical motion"]
    n07["Suspected spine injury"]
    n08["Pediatric shoulder padding or adult ramping as appropriate"]
    n09["Airway alignment"]
    n10["Overextension in infants"]
    n11["Flexible airway"]
    n12["Lateral recovery positioning"]
    n13["Appropriate spontaneously breathing patients"]
    n14["Need for mask ventilation or suspected spine injury"]
    n15["OPA"]
    n16["Gag and cough reflexes"]
    n17["NPA"]
    n18["Possible basilar skull fracture or severe facial trauma"]
    n19["Poorly sized or forced adjuncts"]
    n20["Obstruction, bleeding or tissue trauma"]
    n21["OPA and NPA"]
    n22["Aspiration"]
    n23["Return of gagging or responsiveness"]
    n24["Adjunct tolerance"]
    n25["Adjunct placement"]
    n26["Airway patency"]

    n01 -->|opens the mouth for| n02
    n03 -->|moves anteriorly| n04
    n05 -->|moves the mandible forward while limiting| n06
    n07 -->|favors initial use of| n05
    n08 -->|can improve| n09
    n10 -->|can kink| n11
    n12 -->|allows drainage in| n13
    n14 -->|constrains use of| n12
    n15 -->|holds the tongue away in an unresponsive patient with absent| n16
    n17 -->|can assist with clenched teeth or limited tolerance of| n15
    n18 -->|limits use of| n17
    n19 -->|can cause| n20
    n21 -->|maintain patency without preventing| n22
    n23 -->|requires reassessment of| n24
    n15 -->|is one option for| n25
    n02 -->|can support| n25
    n03 -->|may improve| n09
    n05 -->|can help maintain| n26
    n09 -->|can improve| n26
    n11 -->|when kinked can compromise| n26
    n21 -->|are options for| n25
    n21 -->|can maintain| n26
    n25 -->|depends on| n24
    n19 -->|can compromise| n26
    n12 -->|helps limit contamination contributing to| n22
```

### Suction equipment, selection, and harm

```mermaid
flowchart TD
    n01["Blood, vomit or secretions"]
    n02["Airway and ventilation"]
    n03["Visible fluid contamination"]
    n04["Suction"]
    n05["Rigid Yankauer"]
    n06["Visible oral secretions and particulate material"]
    n07["Soft catheter"]
    n08["Nasal passages or narrower spaces"]
    n09["Solid objects or thick material"]
    n10["Visible obstructing material"]
    n11["Blind sweeps"]
    n12["Appropriate catheter length and lowest effective vacuum"]
    n13["Tissue trauma"]
    n14["Suction during withdrawal"]
    n15["The clearing pass"]
    n16["Deep instrumentation"]
    n17["Gagging or vagal bradycardia"]
    n18["Prolonged suction passes"]
    n19["Oxygenation and ventilation"]
    n20["Infant and child vulnerability"]
    n21["Brief suction passes and reassessment"]
    n22["Powered or portable suction"]
    n23["Power source, tubing, collection and adequate vacuum"]
    n24["Ventilation or oxygen between passes as indicated"]
    n25["Gas exchange"]

    n01 -->|can obstruct| n02
    n03 -->|can be removed by| n04
    n05 -->|is suited to| n06
    n07 -->|can access| n08
    n09 -->|can defeat| n04
    n10 -->|may require other removal techniques rather than| n11
    n12 -->|reduce risk of| n13
    n14 -->|limits application to| n15
    n16 -->|can trigger| n17
    n18 -->|interrupt| n19
    n20 -->|favors| n21
    n22 -->|depends on| n23
    n24 -->|helps restore| n25
    n04 -->|can help restore| n02
    n04 -->|can be performed with| n05
    n04 -->|can be performed with| n07
    n09 -->|may require alternate methods to remove| n10
    n04 -->|requires selection of| n12
    n14 -->|is a technique for| n04
    n16 -->|can complicate| n04
    n18 -->|magnify risks of| n04
    n21 -->|limit duration of| n04
    n22 -->|provides equipment for| n04
    n24 -->|can mitigate interruptions of| n19
```

The source’s prolonged suction and preoxygenation examples are contextual. Its explanation that suction removes residual volume remains uncertain. Catheter depth and suction through advanced airways depend on device, training, and protocol.

### Differentiating obstruction and bronchospasm

```mermaid
flowchart TD
    n01["Hoarseness, stridor and swelling after exposure"]
    n02["Anaphylaxis"]
    n03["Anaphylactic airway edema"]
    n04["Upper airway"]
    n05["Epinephrine when indicated"]
    n06["Vasoconstriction"]
    n07["Epinephrine"]
    n08["Bronchial smooth muscle"]
    n09["Expiratory wheeze with compatible history"]
    n10["Bronchospasm"]
    n11["Albuterol when indicated"]
    n12["Albuterol"]
    n13["Laryngeal edema or shock"]
    n14["Adrenergic effects"]
    n15["Increased heart rate"]
    n16["Tremor"]
    n17["BLS exposure history and serial findings"]
    n18["Authorized BLS or ALS treatment"]
    n19["Medication route and credentialing"]
    n20["Individual authorization"]

    n01 -->|raise concern for| n02
    n03 -->|can narrow| n04
    n05 -->|can reduce edema through| n06
    n07 -->|can also relax| n08
    n09 -->|can suggest| n10
    n11 -->|activates beta₂ receptors to relax| n08
    n12 -->|does not address| n13
    n14 -->|can manifest as| n15
    n12 -->|can cause| n16
    n17 -->|inform| n18
    n19 -->|constrain| n20
    n05 -->|delivers| n07
    n02 -->|may produce| n03
    n05 -->|treats features of| n02
    n07 -->|can produce| n14
    n10 -->|involves contraction of| n08
    n12 -->|can treat| n10
    n17 -->|help assess suspicion for| n02
    n20 -->|governs| n18
```

## Breathing assessment and monitoring

### Rate, tidal volume, and effective ventilation

```mermaid
flowchart TD
    n01["Respiratory rate and tidal volume"]
    n02["Minute ventilation"]
    n03["Tidal volume × respiratory rate"]
    n04["Conducting airways"]
    n05["Anatomical dead space"]
    n06["Tidal volume minus dead space"]
    n07["Effective volume per breath"]
    n08["Effective volume per breath × respiratory rate"]
    n09["Alveolar ventilation"]
    n10["Rapid shallow breathing"]
    n11["Slow breathing despite good depth"]
    n12["Chest excursion and air movement"]
    n13["Tidal volume"]
    n14["Oxygen delivered to the face"]
    n15["Movement of gas into alveoli"]

    n01 -->|together determine| n02
    n02 -->|is calculated as| n03
    n04 -->|account for| n05
    n06 -->|estimates| n07
    n08 -->|estimates| n09
    n10 -->|may preserve measured minute volume while reducing| n09
    n11 -->|can reduce| n09
    n12 -->|provide bedside clues to| n13
    n14 -->|cannot substitute for| n15
    n08 -->|is calculated using| n07
    n06 -->|subtracts| n05
    n12 -->|help estimate adequacy of| n09
    n15 -->|is essential to| n09
    n02 -->|can remain elevated while low tidal volume limits| n09
```

With a 200 mL breath and 150 mL dead space, only 50 mL reaches alveoli per breath. At 12/min, minute ventilation is 2.4 L/min and alveolar ventilation is 0.6 L/min. At 42/min, those values become 8.4 and 2.1 L/min respectively.

### Distress, fatigue, and inadequate breathing

```mermaid
flowchart TD
    n01["Inspection, listening and feeling"]
    n02["Chest rise, effort and airflow"]
    n03["Auscultation"]
    n04["Breath sounds across both lungs"]
    n05["Age and clinical context"]
    n06["Respiratory rate"]
    n07["Rhythm and depth"]
    n08["Retractions, accessory muscles, or nasal flaring"]
    n09["Increased work of breathing"]
    n10["Paradoxical or asymmetric chest movement"]
    n11["Chest wall injury or impaired ventilation"]
    n12["Wheezes, crackles, rhonchi or reduced sounds"]
    n13["Air movement and likely mechanism"]
    n14["Adequate rate and depth with increased effort"]
    n15["Respiratory distress"]
    n16["Falling effort with shallow breaths and drowsiness"]
    n17["Fatigue and respiratory failure"]
    n18["Inadequate rate or effective depth"]
    n19["Assisted ventilation"]
    n20["Agonal gasps"]
    n21["Ventilation"]
    n22["Agonal gasps with no definite pulse after brief check"]
    n23["CPR and prompt AED use"]
    n24["Agonal gasps with a definite pulse"]
    n25["Ventilatory assistance and pulse reassessment"]
    n26["Effective depth"]
    n27["Cardiac arrest"]

    n01 -->|assess early| n02
    n03 -->|compares| n04
    n05 -->|qualify interpretation of| n06
    n07 -->|add information beyond| n06
    n08 -->|can indicate| n09
    n10 -->|can reflect| n11
    n12 -->|inform assessment of| n13
    n14 -->|can characterize| n15
    n16 -->|can indicate| n17
    n18 -->|supports consideration of| n19
    n20 -->|provide inadequate| n21
    n22 -->|support initiation of| n23
    n24 -->|support prompt| n25
    n13 -->|help assess| n26
    n02 -->|can reveal| n08
    n20 -->|represent a severe abnormality of| n26
    n02 -->|help assess| n26
    n03 -->|can reveal| n12
    n26 -->|may be impaired with| n10
    n09 -->|can precede| n17
    n17 -->|can lead to| n18
    n06 -->|is assessed alongside| n26
    n15 -->|can manifest with| n09
    n20 -->|may occur in| n27
    n22 -->|indicate suspected| n27
    n25 -->|support care for| n24
    n24 -->|represent inadequate| n21
```

Rate alone, including tachypnea, does not determine the need to assist. Interpret effort, depth, air movement, rhythm, alertness, pulse, and context together. An organized monitor rhythm does not establish circulation.

### Pulse oximetry, capnography, and ECG

```mermaid
flowchart TD
    n01["Pulse oximetry"]
    n02["Hemoglobin oxygen saturation"]
    n03["Motion, poor perfusion, cool extremities or skin pigmentation"]
    n04["Pulse oximetry accuracy"]
    n05["Standard pulse oximetry"]
    n06["Carbon monoxide exposure"]
    n07["Supplemental oxygen"]
    n08["CO₂ retention"]
    n09["ALS waveform capnography"]
    n10["Exhaled CO₂ by breath"]
    n11["ETCO₂"]
    n12["End of expiration"]
    n13["Pulmonary perfusion and ventilation"]
    n14["Shock"]
    n15["Inadequate ventilation"]
    n16["Leaks or sampling obstruction"]
    n17["Capnography waveform"]
    n18["Sustained waveform capnography plus reassessment"]
    n19["Tracheal tube placement"]
    n20["BLS chest rise, pulse and blood pressure trends"]
    n21["ALS 12-lead ECG in compatible dyspnea"]
    n22["Cardiac ischemia"]
    n23["ECG electrodes"]
    n24["Cardiac electrical activity"]
    n25["Motion or poor contact"]
    n26["ECG tracing"]
    n27["Ischemia assessment"]
    n28["Prearrival notification or destination"]

    n01 -->|estimates| n02
    n03 -->|may affect| n04
    n05 -->|can be misleading in| n06
    n07 -->|may raise SpO₂ while ineffective ventilation allows| n08
    n09 -->|displays| n10
    n11 -->|is the CO₂ reading at| n12
    n13 -->|both influence| n11
    n14 -->|can lower ETCO₂ despite| n15
    n16 -->|can distort| n17
    n18 -->|supports confirmation and ongoing monitoring of| n19
    n20 -->|help interpret| n17
    n21 -->|can identify findings concerning for| n22
    n23 -->|measure| n24
    n25 -->|can degrade| n26
    n27 -->|may influence| n28
    n04 -->|determines confidence in| n02
    n05 -->|is a form of| n01
    n07 -->|can increase the reading from| n01
    n09 -->|can report| n11
    n12 -->|is identified on| n17
    n14 -->|affects pulmonary blood flow and therefore| n11
    n18 -->|uses information from| n17
    n21 -->|uses| n23
    n23 -->|generate the data for| n26
    n22 -->|is the concern evaluated during| n27
    n01 -->|supplements rather than substitutes for| n20
    n21 -->|is interpreted with| n20
```

## Assisted ventilation and noninvasive support

### Positive pressure, preload, and overventilation

```mermaid
flowchart TD
    n01["Spontaneous inspiration"]
    n02["Intrathoracic pressure"]
    n03["Positive-pressure ventilation"]
    n04["Lungs"]
    n05["Positive intrathoracic pressure"]
    n06["Venous return"]
    n07["Reduced venous return"]
    n08["Preload and cardiac output"]
    n09["Excessive rate or volume"]
    n10["Intrathoracic pressure and air trapping"]
    n11["Air trapping"]
    n12["Excessive pressure during CPR"]
    n13["Coronary and cerebral perfusion"]
    n14["Pressure delivered to the esophagus"]
    n15["Gastric inflation"]
    n16["Regurgitation and aspiration"]
    n17["Hypotension after assisted ventilation"]
    n18["Pressure effects, shock or new thoracic problem"]
    n19["Suspected severe brain injury"]
    n20["Hypoxemia, hypotension and unnecessary hyperventilation"]

    n01 -->|draws air in by lowering| n02
    n03 -->|pushes gas into| n04
    n05 -->|can reduce| n06
    n07 -->|can reduce| n08
    n09 -->|can increase| n10
    n11 -->|may further compromise| n06
    n12 -->|may impair| n13
    n14 -->|can produce| n15
    n15 -->|increases risk of| n16
    n17 -->|warrants reassessment for| n18
    n19 -->|increases importance of avoiding| n20
    n06 -->|when decreased reduces| n08
    n03 -->|can increase| n05
    n09 -->|can drive| n14
    n10 -->|can reduce| n06
    n12 -->|can follow| n09
    n08 -->|when reduced can contribute to| n17
    n19 -->|makes it important to reassess| n17
    n01 -->|contrasts with delivered breaths during| n03
```

### Manual ventilation technique and reassessment

```mermaid
flowchart TD
    n01["Barrier device with one-way valve"]
    n02["Rescue breaths"]
    n03["Mouth-to-nose ventilation with barrier"]
    n04["Mouth access or seal is not possible"]
    n05["Pocket mask"]
    n06["Assisted breaths with supplemental oxygen"]
    n07["BVM"]
    n08["Supplemental oxygen"]
    n09["Reservoir and oxygen flow"]
    n10["Delivered oxygen concentration"]
    n11["Two-person BVM"]
    n12["Airway and mask seal from bag squeeze"]
    n13["Effective seal and open airway"]
    n14["Visible chest rise"]
    n15["Rate and volume appropriate to age and context"]
    n16["Overventilation"]
    n17["Poor chest rise"]
    n18["Position, seal, obstruction and equipment"]
    n19["Regurgitation or new gurgling"]
    n20["Airway clearance before resuming effective breaths"]
    n21["Patient movement and device changes"]
    n22["Seal, circuit or airway position"]
    n23["Effectiveness of assisted ventilation"]
    n24["Airway and mask seal support"]
    n25["BLS reporting of change and backup equipment"]
    n26["Effective ventilation"]

    n01 -->|reduces exposure during| n02
    n03 -->|may be considered if| n04
    n05 -->|can provide| n06
    n07 -->|can deliver room air before connection of| n08
    n09 -->|can increase| n10
    n11 -->|separates| n12
    n13 -->|allow delivered gas to produce| n14
    n15 -->|reduce risk of| n16
    n17 -->|prompts checks of| n18
    n19 -->|may require| n20
    n21 -->|can disrupt| n22
    n14 -->|helps evaluate| n23
    n23 -->|informs whether to revise| n24
    n24 -->|can restore| n14
    n25 -->|helps restore| n26
    n07 -->|can provide| n26
    n01 -->|is used with| n05
    n03 -->|is an alternative to| n05
    n05 -->|is an alternative manual method to| n07
    n07 -->|can use| n09
    n11 -->|can improve| n13
    n14 -->|is the volume goal when controlling| n15
    n17 -->|suggests trouble with| n13
    n19 -->|can threaten| n13
    n22 -->|are checked when there is| n17
    n26 -->|is reassessed by observing| n14
```

The source’s older volumes, rate tables, manual timing examples and delay before attaching oxygen have limits. Aim for the visible chest rise described in the current guidance and minimize interruptions. Select adjuncts when indicated and tolerated.

### Rate, airway status, and resuscitation context

```mermaid
flowchart TD
    n01["Adult with a pulse and inadequate breathing"]
    n02["10 breaths/min in AHA 2025 guidance"]
    n03["Adult cardiac arrest with an advanced airway"]
    n04["Pediatric pulse with inadequate breathing"]
    n05["20–30 breaths/min in AHA/AAP 2025 guidance"]
    n06["Pediatric CPR with an advanced airway"]
    n07["20–30 breaths/min"]
    n08["CPR before an advanced airway"]
    n09["Compressions and ventilation according to age and rescuer context"]
    n10["Newborn resuscitation at birth"]
    n11["30–60 inflations/min"]
    n12["Bag capacity"]
    n13["Delivered tidal volume"]
    n14["Ventilation in an actively breathing patient"]
    n15["Patient effort when feasible"]
    n16["Assisted ventilation"]

    n01 -->|is ventilated at| n02
    n03 -->|pairs continuous compressions with| n02
    n04 -->|uses| n05
    n06 -->|also uses| n07
    n08 -->|coordinates| n09
    n10 -->|uses a separate algorithm including when indicated| n11
    n12 -->|differs from| n13
    n14 -->|may be coordinated with| n15
    n01 -->|is an indication for| n16
    n04 -->|is an indication for| n16
    n06 -->|requires age-specific| n16
    n08 -->|changes how compressions are paired with| n16
    n10 -->|uses a distinct approach to| n16
    n12 -->|does not set delivery volume during| n16
    n14 -->|can be synchronized with patient effort during| n16
    n03 -->|requires continuous compressions alongside| n16
```

These examples distinguish resuscitation contexts. The source contains older pediatric rates and overlapping newborn bag-capacity descriptions. Equipment choice requires age- and device-specific verification.

### Mechanical ventilation and backup support

```mermaid
flowchart TD
    n01["Automatic transport ventilator"]
    n02["Rate and tidal volume"]
    n03["Transport ventilator suitability"]
    n04["Patient size, physiology, modes and oxygen source"]
    n05["Obstructive physiology"]
    n06["Trapped gas and hypotension"]
    n07["High-pressure alarm"]
    n08["Obstruction, increased resistance or reduced compliance"]
    n09["Low-pressure alarm"]
    n10["Leak or disconnection"]
    n11["New alarm or falling chest rise"]
    n12["Patient and circuit"]
    n13["Oxygen depletion or device failure"]
    n14["Ventilator support"]
    n15["Backup BVM and oxygen"]
    n16["Rapid return to authorized manual support"]
    n17["Changing settings and alarm management"]
    n18["Device competency and authorization"]
    n19["Patient and circuit assessment"]

    n01 -->|can maintain preset| n02
    n03 -->|depends on| n04
    n05 -->|may require longer exhalation to limit| n06
    n07 -->|may reflect| n08
    n09 -->|may reflect| n10
    n11 -->|prompts assessment of| n12
    n13 -->|can interrupt| n14
    n15 -->|allow| n16
    n17 -->|require| n18
    n19 -->|checks the function of| n01
    n01 -->|is selected based on| n03
    n05 -->|influences| n03
    n07 -->|may prompt| n19
    n09 -->|may prompt| n19
    n11 -->|prompts| n19
    n13 -->|may require| n15
    n17 -->|apply to| n01
    n19 -->|may identify need for| n15
```

The outline’s ATV features and settings describe particular textbook equipment. Ventilator modes, limits, and consumption differ by device.

### CPAP, bilevel NIV, and high-flow oxygen

```mermaid
flowchart TD
    n01["CPAP"]
    n02["Spontaneous breathing"]
    n03["Positive airway pressure"]
    n04["Alveolar recruitment and work of breathing"]
    n05["CPAP in cardiogenic pulmonary edema"]
    n06["Left ventricular afterload"]
    n07["Bilevel NIV"]
    n08["Expiratory pressure"]
    n09["Inspiratory pressure support"]
    n10["Respiratory muscles"]
    n11["Spontaneous breathing and airway protection"]
    n12["Noninvasive positive pressure"]
    n13["Vomiting, loss of airway protection or apnea"]
    n14["Positive pressure"]
    n15["Hypotension"]
    n16["Clinical trend during NIV"]
    n17["Blood pressure, alertness, effort, oxygenation and tolerance"]
    n18["Mask leak"]
    n19["ETCO₂ sampling"]
    n20["Heated humidified HFNC"]
    n21["High-flow oxygen"]
    n22["HFNC"]
    n23["Effective ventilation in apnea"]
    n24["Hypercapnic COPD with acute failure"]
    n25["ERS guidance based mainly on hospital evidence"]
    n26["Prehospital evidence"]
    n27["CPAP versus bilevel NIV"]

    n01 -->|maintains one pressure throughout| n02
    n03 -->|can improve| n04
    n05 -->|can reduce| n06
    n07 -->|adds inspiratory pressure support above| n08
    n09 -->|can unload| n10
    n11 -->|support suitability for| n12
    n13 -->|argue against continuing| n12
    n14 -->|can reduce venous return and worsen| n15
    n16 -->|includes| n17
    n18 -->|can distort| n19
    n20 -->|delivers| n21
    n22 -->|can aid oxygenation but cannot replace| n23
    n24 -->|favors trial of NIV first in| n25
    n26 -->|does not establish superiority of| n27
    n24 -->|limits selection of| n22
    n01 -->|is a form of| n12
    n07 -->|is a form of| n12
    n12 -->|delivers| n03
    n01 -->|may be used as| n05
    n07 -->|adds| n09
    n03 -->|may increase intrathoracic pressure and contribute to| n15
    n16 -->|informs whether to continue| n12
    n18 -->|can complicate monitoring of| n16
    n24 -->|favors considering first in ERS guidance| n07
    n26 -->|supports selection according to context for| n12
    n20 -->|is a form of| n22
    n22 -->|complements options for| n21
```

NAEMSP’s 2022 position includes both NIV options for selected patients. ERS/ATS prehospital support for cardiogenic pulmonary edema is conditional and low certainty. The cited CPAP trial improved dyspnea and respiratory rate without shortening hospital stay. Protocol, device, age, and clinical trajectory qualify application.

## Altered airways and obstruction

### Stoma anatomy, ventilation route, and tube failure

```mermaid
flowchart TD
    n01["Tracheostomy"]
    n02["Mouth and nose"]
    n03["Total laryngectomy"]
    n04["Lungs"]
    n05["Stoma"]
    n06["Uncertain surgical anatomy"]
    n07["Face and stoma"]
    n08["Caregiver history and equipment card"]
    n09["Tube type, cuff and baseline needs"]
    n10["Compatible tracheostomy connector"]
    n11["BVM"]
    n12["Stoma without a compatible tube"]
    n13["Appropriately sealed small mask"]
    n14["Failure to pass a suction catheter or absent airflow"]
    n15["Tube blockage or displacement"]
    n16["Positive pressure through a displaced tube"]
    n17["Soft tissue"]
    n18["Observed chest rise"]
    n19["Effective ventilation"]
    n20["Tube exchange or rescue airway"]
    n21["Specific authorization and competency"]

    n01 -->|may preserve communication with| n02
    n03 -->|separates upper airway from| n04
    n03 -->|requires ventilation through| n05
    n06 -->|may warrant initial oxygen at| n07
    n08 -->|can clarify| n09
    n10 -->|can allow direct attachment of| n11
    n12 -->|may be ventilated through| n13
    n14 -->|raises concern for| n15
    n16 -->|may inflate| n17
    n18 -->|helps determine whether the selected route provides| n19
    n20 -->|requires| n21
    n01 -->|may permit ventilation through| n05
    n06 -->|can be clarified by| n08
    n06 -->|warrants checking airflow at| n05
    n10 -->|supports ventilation through| n05
    n12 -->|may require a mask sealed over| n05
    n15 -->|may limit ventilation through| n05
    n16 -->|is a risk of| n15
    n18 -->|helps confirm effective breaths through| n05
    n15 -->|may prompt consideration of| n20
```

A mouth-and-nose fallback cannot ventilate a known total laryngectomy. Mouth-to-stoma carries exposure risk. A barrier is required in the source’s last-resort example.

### Foreign body obstruction and changing response

```mermaid
flowchart TD
    n01["Effective cough and voice"]
    n02["Some air movement"]
    n03["Weak cough, inability to speak or no air movement"]
    n04["Severe obstruction"]
    n05["Observed choking onset"]
    n06["Illness-related airway narrowing"]
    n07["Severe responsive adult or child obstruction"]
    n08["Abdominal thrusts"]
    n09["Late pregnancy or inability to encircle an adult abdomen"]
    n10["Chest thrusts"]
    n11["Severe responsive infant obstruction"]
    n12["Heel-of-one-hand chest thrusts"]
    n13["Unresponsiveness during choking"]
    n14["CPR starting with compressions"]
    n15["Opening the airway for breaths"]
    n16["Visible object only"]
    n17["Blind sweeps"]
    n18["Obstruction"]
    n19["Persistent obstruction"]
    n20["Direct visualization and forceps removal"]
    n21["Reassessment after apparent relief"]
    n22["Inadequate breathing, persistent obstruction or aspiration"]

    n01 -->|suggest| n02
    n03 -->|raise concern for| n04
    n05 -->|helps distinguish FBAO from| n06
    n07 -->|is addressed in 2025 guidance by alternating back blows with| n08
    n09 -->|changes the thrust type to| n10
    n11 -->|pairs back blows with| n12
    n13 -->|changes care in 2025 guidance toward| n14
    n15 -->|provides opportunity to remove| n16
    n17 -->|risk worsening| n18
    n19 -->|may prompt trained ALS consideration of| n20
    n21 -->|looks for| n22
    n02 -->|distinguishes potentially milder from| n04
    n05 -->|helps assess| n04
    n07 -->|is a form of| n04
    n11 -->|is a form of| n04
    n09 -->|qualifies care for| n07
    n04 -->|may progress to| n13
    n14 -->|incorporates periodic| n15
    n16 -->|limits use of fingers to avoid| n17
    n04 -->|may remain as| n19
    n19 -->|is assessed again by| n21
```

The source contains superseded thrust-only, breath-first, and two-finger infant techniques. Current AHA/AAP guidance distinguishes responsive infant chest thrusts from infant CPR compressions. Routine chest-compression technique uses heel of one hand or two-thumb encircling when applicable.

### Facial injury, bleeding, and equipment fit

```mermaid
flowchart TD
    n01["Facial deformity or swelling"]
    n02["Mask seal and airway patency"]
    n03["Pharyngeal bleeding"]
    n04["Repeated suction and reassessment"]
    n05["Visible broken teeth or loose dental appliances"]
    n06["Obstruction risk"]
    n07["Stable full dentures"]
    n08["Mask seal"]
    n09["Loose dentures"]
    n10["Airway and mask fit"]
    n11["Persistent poor ventilation"]
    n12["Authorized ALS"]
    n13["Poor mask seal and airway patency"]

    n01 -->|can impair| n02
    n03 -->|may require| n04
    n05 -->|can pose| n06
    n07 -->|may help maintain| n08
    n09 -->|may need stabilization or removal depending on| n10
    n11 -->|may prompt escalation and transport planning with| n12
    n02 -->|when impaired can contribute to| n11
    n01 -->|can compromise| n08
    n03 -->|can compromise| n02
    n05 -->|can compromise| n02
    n09 -->|can impair| n08
    n13 -->|can result in| n11
```

## Oxygen selection and equipment

### Oxygen decisions, disease context, and toxic exposure

```mermaid
flowchart TD
    n01["Adequate ventilation with hypoxemia"]
    n02["Supplemental oxygen"]
    n03["Ineffective ventilation"]
    n04["Assisted breaths in addition to oxygen"]
    n05["Suspected carbon monoxide exposure"]
    n06["Reassuring standard SpO₂"]
    n07["Exposure pattern and symptoms"]
    n08["Co-oximetry or specialty consultation"]
    n09["Confirmed ACS hypoxia below 90%"]
    n10["2025 multisociety ACS guidance"]
    n11["ACS saturation at or above 90%"]
    n12["Hypoxic ischemic stroke"]
    n13["2026 AHA/ASA guidance"]
    n14["Reduced consciousness or bulbar dysfunction"]
    n15["Suspected stroke"]
    n16["Suspected severe traumatic brain injury"]
    n17["Brain Trauma Foundation guidance"]
    n18["Normal maternal oxygenation with abnormal fetal tracing"]
    n19["2025 ACOG intrapartum guidance"]
    n20["Maternal medical or traumatic illness in EMS"]
    n21["Breathing, perfusion, oxygenation and exposure"]
    n22["Hyperoxia"]
    n23["Reperfusion oxidative stress or coronary vasoconstriction"]
    n24["Prolonged excess oxygen in premature newborns"]
    n25["Retinopathy of prematurity"]
    n26["Clinical context and oxygenation"]

    n01 -->|may respond to| n02
    n03 -->|requires assessment for| n04
    n05 -->|can warrant oxygen despite| n06
    n07 -->|inform need for| n08
    n09 -->|supports oxygen under| n10
    n11 -->|generally does not warrant routine oxygen under| n10
    n12 -->|has a goal above 94% in| n13
    n14 -->|can require airway or ventilation support in| n15
    n16 -->|warrants oxygen supplementation under| n17
    n18 -->|does not justify routine maternal oxygen under| n19
    n20 -->|requires evaluation of| n21
    n22 -->|can contribute to| n23
    n24 -->|can contribute to| n25
    n02 -->|is selected according to| n26
    n03 -->|may require more than| n02
    n05 -->|is assessed using| n07
    n05 -->|can change the threshold for| n02
    n09 -->|is one condition informing| n02
    n12 -->|is a condition informing| n02
    n14 -->|may occur in| n12
    n16 -->|is a condition informing| n02
    n20 -->|differs from the intrapartum context of| n18
    n20 -->|may require condition-specific| n02
    n22 -->|is a potential consequence of excessive| n02
    n24 -->|illustrates risks of| n22
```

General, trauma, and pediatric figures are source examples subject to condition-specific guidance. Severe TBI recommendations are not blanket trauma rules. Intrapartum guidance addresses fetal monitoring. Selected thrombectomy patients may enter a specialized hospital pathway.

### Delivery devices, oxygen concentration, and tolerance

```mermaid
flowchart TD
    n01["Nasal cannula"]
    n02["Ambient air"]
    n03["Low-flow oxygen delivery"]
    n04["Nonrebreather"]
    n05["High oxygen concentration"]
    n06["Collapsed reservoir during inhalation"]
    n07["Flow, seal and circuit"]
    n08["Simple mask"]
    n09["Rebreathing"]
    n10["Partial rebreather"]
    n11["Exhaled gas in reservoir"]
    n12["Venturi mask"]
    n13["Controlled oxygen concentration"]
    n14["Tracheostomy mask"]
    n15["Tracheostomy or stoma"]
    n16["Tracheostomy mask compared with T-tube"]
    n17["Tubing traction"]
    n18["Prolonged dry oxygen delivery"]
    n19["Compatible humidification"]
    n20["Mask intolerance in a child"]
    n21["Blow-by oxygen with caregiver assistance"]
    n22["Observable response and reliable saturation"]
    n23["Ongoing oxygen titration"]
    n24["Supplemental oxygen"]

    n01 -->|mixes oxygen with| n02
    n01 -->|can aid tolerance and communication during| n03
    n04 -->|depends on a filled reservoir and valves to support| n05
    n06 -->|signals need to check| n07
    n08 -->|needs minimum flow to limit| n09
    n10 -->|retains some| n11
    n12 -->|uses selected entrainment adapters to provide| n13
    n14 -->|delivers oxygen at| n15
    n16 -->|permits secretion escape and reduces| n17
    n18 -->|may motivate use of| n19
    n20 -->|may favor| n21
    n22 -->|inform| n23
    n01 -->|is a delivery option for| n24
    n04 -->|is a delivery option for| n24
    n06 -->|may occur with| n04
    n08 -->|is a delivery option for| n24
    n10 -->|is a delivery option for| n24
    n12 -->|is a delivery option for| n24
    n14 -->|is a delivery option for| n24
    n16 -->|highlights the secretion and traction advantages of| n14
    n18 -->|can occur with| n24
    n21 -->|is another route for| n24
    n23 -->|adjusts| n24
```

### Oxygen supply, duration, and device safety

```mermaid
flowchart TD
    n01["Cylinder size and pressure"]
    n02["Available oxygen volume"]
    n03["Higher flow"]
    n04["Supply duration"]
    n05["Usable gauge pressure"]
    n06["Safe residual pressure"]
    n07["Cylinder constant × usable pressure ÷ flow"]
    n08["Minutes of oxygen remaining"]
    n09["Device demand, leaks and driving gas"]
    n10["Constant-flow assumptions"]
    n11["Anticipated transport and handoff time"]
    n12["Reserve and backup supply"]
    n13["Gas-specific pin index and correct washer"]
    n14["Cylinder and regulator setup"]
    n15["High-pressure regulator"]
    n16["Working pressure for compatible devices"]
    n17["Therapy regulator"]
    n18["Patient oxygen flow"]
    n19["Securing cylinders and avoiding contamination or ignition"]
    n20["Compressed oxygen and accelerated combustion"]
    n21["Transfer between oxygen sources"]
    n22["Oxygen delivery"]
    n23["Shutoff and bleeding trapped oxygen"]
    n24["Zero"]

    n01 -->|together influence| n02
    n03 -->|reduces| n04
    n05 -->|equals gauge pressure minus| n06
    n07 -->|estimates| n08
    n09 -->|can invalidate| n10
    n11 -->|inform| n12
    n13 -->|support secure matching in| n14
    n15 -->|supplies| n16
    n17 -->|controls| n18
    n19 -->|reduces hazards from| n20
    n21 -->|requires assessing continuity of| n22
    n23 -->|brings regulator gauge toward| n24
    n02 -->|and flow together determine| n04
    n04 -->|is estimated as| n08
    n07 -->|uses| n05
    n09 -->|can shorten expected| n04
    n08 -->|inform| n12
    n15 -->|is one regulator type in the| n14
    n17 -->|is one regulator type in the| n14
    n14 -->|helps confirm supply and draw down| n02
    n19 -->|protect equipment during| n21
    n21 -->|makes use of| n12
    n23 -->|prepares equipment for disconnection from| n14
```

With an E-cylinder constant of 0.28, 2,000 psi, a 200 psi reserve and 15 L/min, the source estimates 33.6 minutes. Use service-specific reserve and device consumption guidance. Verify source valve-opening and cracking instructions against the device and agency policy.

### Oxygen setup, transfer, and interruption

```mermaid
flowchart TD
    n01["Cylinder identification"]
    n02["Gas supply"]
    n03["Regulator seal and pin alignment"]
    n04["Charging the regulator"]
    n05["Gauge check after charging"]
    n06["Cylinder pressure"]
    n07["Delivery tubing connection"]
    n08["Oxygen flow"]
    n09["Reservoir inflation"]
    n10["Reservoir mask"]
    n11["Reservoir deflation or disconnected tubing"]
    n12["Patient oxygen delivery"]
    n13["Oxygen source transfer"]
    n14["Flow before mask reapplication"]
    n15["Cylinder closure before regulator bleeding"]
    n16["Trapped regulator gas"]
    n17["Pressure gauge at zero"]
    n18["Protection from heat, grease and flame"]
    n19["Pressurized oxygen"]
    n20["Safe use of the gas supply"]
    n21["Preparing oxygen delivery"]

    n01 -->|verifies the correct| n02
    n03 -->|precede| n04
    n05 -->|confirms available| n06
    n07 -->|precedes adjustment of| n08
    n09 -->|precedes application of| n10
    n11 -->|prompts a check of| n12
    n13 -->|depends on restoring and verifying| n14
    n15 -->|isolates supply from| n16
    n17 -->|indicates the regulator has released| n16
    n18 -->|reduces risk with| n19
    n20 -->|depends on| n03
    n02 -->|requires verification for| n20
    n04 -->|precedes| n05
    n07 -->|occurs as part of| n21
    n09 -->|is part of| n21
    n21 -->|includes checking| n06
    n11 -->|can interrupt| n08
    n10 -->|receives oxygen from| n08
    n13 -->|can interrupt| n08
    n15 -->|produces the conditions for| n17
    n18 -->|applies while using| n02
    n15 -->|is part of terminating| n08
```

This diagram captures dependencies in the source device procedure. Cylinder valve handling and equipment-specific sequence require manufacturer instructions and local policy.

## Pediatric care and clinical integration

### Pediatric anatomy, ventilation, and oxygenation

```mermaid
flowchart TD
    n01["Large occiput"]
    n02["Supine infant"]
    n03["Shoulder padding and appropriate alignment"]
    n04["Patent airway"]
    n05["Excessive head extension or pressure under chin"]
    n06["Flexible pediatric airway"]
    n07["Smaller equipment and short suction passes"]
    n08["Trauma, hypoxemia and vagal bradycardia"]
    n09["Large adenoids and narrow nares"]
    n10["NPA placement and effectiveness"]
    n11["Absent gag in an unresponsive child"]
    n12["Size-appropriate OPA"]
    n13["Pediatric OPA insertion"]
    n14["Rotation"]
    n15["Short oxygen reserve and high consumption"]
    n16["Deterioration"]
    n17["Poor tone, reduced alertness, weak air entry or bradycardia"]
    n18["Decompensation"]
    n19["Fitted mask and gentle visible chest rise"]
    n20["Pediatric BVM"]
    n21["Pediatric supplemental oxygen"]
    n22["Trauma, medical illness, or newborn transition"]
    n23["Poor perfusion or persistent cyanosis despite oxygen"]
    n24["Ventilation, circulation and reading reliability"]
    n25["Position of comfort or caregiver support"]
    n26["Spontaneously breathing child"]
    n27["Transport decision"]
    n28["Pediatric receiving capability and patient needs"]

    n01 -->|may flex the neck in| n02
    n03 -->|can help maintain| n04
    n05 -->|can obstruct| n06
    n07 -->|help limit| n08
    n09 -->|may complicate| n10
    n11 -->|supports consideration of| n12
    n13 -->|uses a tongue depressor and avoids| n14
    n15 -->|can hasten| n16
    n17 -->|raise concern for| n18
    n19 -->|support| n20
    n21 -->|is titrated in context of| n22
    n23 -->|calls for reassessment of| n24
    n25 -->|can reduce distress when appropriate in| n26
    n27 -->|accounts for| n28
    n07 -->|can help maintain| n04
    n12 -->|helps maintain| n04
    n02 -->|may benefit from| n03
    n06 -->|requires attention to| n04
    n09 -->|are pediatric size considerations alongside| n07
    n12 -->|is placed using| n13
    n04 -->|supports| n20
    n20 -->|helps support ventilation during| n18
    n17 -->|can accompany| n16
    n23 -->|can occur during| n18
    n21 -->|is reassessed for effectiveness during| n16
    n25 -->|may support cooperation with| n21
    n27 -->|considers risk of| n16
```

### Basic support and advanced airway decisions

```mermaid
flowchart TD
    n01["Jaw support, suction and BVM"]
    n02["Ventilation"]
    n03["Reported response to basic interventions"]
    n04["Sustainability of basic support"]
    n05["Recurrent contamination or deteriorating airway protection"]
    n06["Advanced airway"]
    n07["Authorized placement of a supraglottic airway"]
    n08["A ventilation route"]
    n09["Supraglottic airway"]
    n10["Cuffed tracheal tube"]
    n11["Endotracheal intubation"]
    n12["Credentialed paramedics"]
    n13["Advanced airway attempts"]
    n14["Hypoxemia or hypotension"]
    n15["Effective basic support"]
    n16["Transport, especially in pediatric cases"]
    n17["Time-sensitive transport"]
    n18["Additional authorized resources"]
    n19["BLS pulse, chest rise and contamination checks"]
    n20["ALS monitoring during airway transition"]

    n01 -->|can restore or maintain| n02
    n03 -->|informs ALS assessment of| n04
    n05 -->|may prompt consideration of| n06
    n07 -->|can provide| n08
    n09 -->|provides less aspiration protection than| n10
    n11 -->|is generally a procedure of| n12
    n13 -->|may interrupt ventilation and worsen| n14
    n15 -->|may remain preferable during| n16
    n17 -->|can continue during coordination of| n18
    n19 -->|complement| n20
    n02 -->|is evaluated through| n03
    n15 -->|may be achievable with| n01
    n06 -->|may include| n09
    n06 -->|may include| n11
    n07 -->|provides one option for| n06
    n13 -->|are considered after evaluation of| n04
    n19 -->|inform| n03
    n17 -->|can continue with| n15
    n05 -->|can compromise| n02
```

### Neurologic deterioration and contaminated airway cases

```mermaid
flowchart TD
    n01["Sudden severe headache with progressive confusion and posturing"]
    n02["Concern for intracranial emergency"]
    n03["Snoring and minimal chest excursion at 5–6/min"]
    n04["Obstruction with inadequate ventilation"]
    n05["SpO₂ of 79% in the headache case"]
    n06["Severe desaturation"]
    n07["BLS in the headache case"]
    n08["Positioning and assisted breaths"]
    n09["Last known well, progression and anticoagulant history"]
    n10["Stroke-capable destination notification and handoff"]
    n11["Prone unresponsive patient in vomit"]
    n12["Recurrent contamination and aspiration"]
    n13["Six shallow breaths per minute and a weak pulse near 55"]
    n14["Witnessed alcohol use"]
    n15["Hypoglycemia and trauma"]
    n16["Opioid or mixed ingestion"]
    n17["BLS suction, jaw support and effective BVM"]
    n18["Contamination and depressed breathing"]
    n19["Recurrent vomiting during transport"]
    n20["Airway clearance and BVM"]
    n21["ALS glucose testing or capnography"]
    n22["Reversible causes or ventilation trend"]
    n23["Change in ventilation or oxygenation during a move"]
    n24["Clinical findings and monitoring equipment"]
    n25["Receiving team notification"]
    n26["Aspiration risk and ongoing ventilation requirements"]
    n27["Authorized naloxone for suspected opioid toxicity"]
    n28["Opioid receptor antagonism"]
    n29["Ongoing ventilation"]
    n30["Naloxone assessment and response"]
    n31["Recurrent depression, vomiting or agitation"]
    n32["Handoff and reassessment"]

    n01 -->|raises| n02
    n03 -->|support concern for| n04
    n05 -->|indicates| n06
    n07 -->|supports oxygenation and ventilation with| n08
    n09 -->|support| n10
    n11 -->|presents risk of| n12
    n11 -->|had BLS findings of| n13
    n14 -->|leaves open| n15
    n14 -->|also leaves open| n16
    n17 -->|help address| n18
    n13 -->|reinforced concern for| n18
    n19 -->|interrupts and prompts reassessment of| n20
    n21 -->|may help evaluate| n22
    n23 -->|should prompt correlation of| n24
    n25 -->|can flag| n26
    n27 -->|can restore breathing through| n28
    n29 -->|remains important during| n30
    n31 -->|should be communicated at| n32
    n02 -->|coexisted in the headache case with| n04
    n04 -->|helps explain need for| n07
    n06 -->|also supports| n07
    n09 -->|help communicate| n02
    n12 -->|was a concern addressed by| n17
    n19 -->|worsens risk of| n12
    n14 -->|is contextual history for| n11
    n21 -->|can supplement assessment of| n11
    n28 -->|addresses the opioid component of suspected| n16
    n27 -->|can be considered alongside| n29
    n31 -->|can affect need for| n29
    n25 -->|supports| n32
    n10 -->|is a form of| n25
    n23 -->|can affect| n32
```

These are case-specific relationships. Neither the symptom cluster nor the reported alcohol use establishes a diagnosis. Field support, examination, and findings before and after treatment inform communication with the receiving team.

### Scope, protocols, and evidence

```mermaid
flowchart TD
    n01["State law and licensure"]
    n02["EMS practice"]
    n03["National EMS Scope of Practice Model"]
    n04["EMT, AEMT and paramedic roles"]
    n05["EMT-level care"]
    n06["Positioning, suction, adjuncts, oxygen and BVM"]
    n07["National model EMT functions"]
    n08["CPAP"]
    n09["National model AEMT functions"]
    n10["Supraglottic airways, capnography, IV/IO and selected medications"]
    n11["Paramedic capability"]
    n12["Endotracheal intubation and broader airway pharmacology"]
    n13["State and local variation"]
    n14["Supraglottic airway or capnography at EMT level"]
    n15["Training, credentialing and agency protocols"]
    n16["Individual authorization"]
    n17["Medical direction"]
    n18["Consultation"]
    n19["Evidence and expert consensus"]
    n20["Recommendations and model guidelines"]
    n21["Model guidelines"]
    n22["Local protocols"]
    n23["Equipment preparation or data acquisition"]
    n24["Advanced interpretation or intervention"]
    n25["Out-of-routine assistance"]
    n26["Direct supervision"]

    n01 -->|define legal bounds of| n02
    n03 -->|describes a framework for| n04
    n05 -->|commonly includes| n06
    n07 -->|also include| n08
    n09 -->|include| n10
    n11 -->|generally includes| n12
    n13 -->|can change availability of| n14
    n15 -->|help determine| n16
    n17 -->|provides oversight and when required| n18
    n19 -->|can inform| n20
    n21 -->|can guide development of| n22
    n23 -->|is distinct from authorization for| n24
    n25 -->|may require state permission, approval and| n26
    n02 -->|is described by| n03
    n04 -->|define different model capabilities including| n05
    n07 -->|describe| n05
    n09 -->|describe one level within| n04
    n11 -->|describes one level within| n04
    n13 -->|affects| n16
    n02 -->|is subject to| n17
    n17 -->|contributes to implementation of| n22
    n20 -->|include| n21
    n22 -->|factor into| n16
    n16 -->|governs| n24
    n25 -->|is constrained by| n16
```