---
title: Concept Maps
module_id: module-1
view: concept-maps
chapter_id: chapter-8
---

# Chapter 8: Pathophysiology

## Conceptual overview

### The physiological chain sustaining cellular function

```mermaid
flowchart TD
    N1["Ambient air composition"]
    N2["Patent airway"]
    N3["Ventilation mechanics"]
    N4["Ventilatory regulation"]
    N5["V/Q matching"]
    N6["Blood volume"]
    N7["Myocardial pump"]
    N8["Blood gas transport"]
    N9["Blood pressure"]
    N10["Systemic vascular resistance"]
    N11["Microcirculation"]
    N12["Cellular metabolism"]
    N13["Organ function"]
    N14["Emergency care"]

    N1 -->|determines oxygen availability entering through| N2
    N2 -->|permits airflow during| N3
    N4 -->|adjusts rate and depth of| N3
    N3 -->|establishes alveolar ventilation for| N5
    N6 -->|supports venous return to| N7
    N7 -->|supplies pulmonary blood flow for| N5
    N5 -->|enables pulmonary exchange for| N8
    N6 -->|supplies circulating medium for| N8
    N7 -->|generates cardiac output contributing to| N9
    N10 -->|contributes to| N9
    N9 -->|provides driving pressure for| N11
    N11 -->|enables tissue exchange using| N8
    N8 -->|delivers oxygen and removes carbon dioxide for| N12
    N11 -->|delivers glucose to| N12
    N12 -->|generates ATP sustaining| N13
    N13 -->|sustains| N3
    N13 -->|sustains| N7
    N14 -->|seeks to restore or sustain| N11
    N14 -->|supports failing links in| N3
```

The eleven components operate as an interconnected system. Pressure, an open airway or normal saturation alone does not establish adequate cellular oxygen delivery.

## Cellular metabolism and injury

### Aerobic and anaerobic energy production

```mermaid
flowchart TD
    N1["Glucose"]
    N2["Cytosolic glycolysis"]
    N3["Oxygen"]
    N4["Pyruvate"]
    N5["ATP"]
    N6["Mitochondrial oxidative metabolism"]
    N7["Muscle contraction and active transport"]
    N8["Aerobic metabolism"]
    N9["Heat"]
    N10["Core temperature"]
    N11["Water"]
    N12["Body"]
    N13["Carbon dioxide"]
    N14["Exhalation"]
    N15["Inadequate oxygen delivery"]
    N16["Lactate"]
    N17["Lactate formation"]
    N18["Adrenergic stress"]
    N19["Metabolic fuel"]
    N20["Inadequate ATP yield"]
    N21["Cellular function"]
    N22["Severe oxygen-delivery failure"]

    N1 -->|enters cells for| N2
    N2 -->|does not require| N3
    N2 -->|produces| N4
    N2 -->|yields a small amount of| N5
    N4 -->|supplies substrates to| N6
    N3 -->|acts as terminal electron acceptor in| N6
    N6 -->|yields much more| N5
    N5 -->|powers| N7
    N8 -->|produces| N9
    N9 -->|helps maintain| N10
    N8 -->|produces| N11
    N11 -->|is reused or eliminated by| N12
    N8 -->|generates| N13
    N13 -->|is transported to lungs for| N14
    N15 -->|limits| N6
    N4 -->|can be converted in cytosol to| N16
    N17 -->|permits continuation of| N2
    N18 -->|can increase| N17
    N16 -->|can be reused as| N19
    N20 -->|threatens| N21
    N22 -->|may contribute to| N20
```

Lactate can form in the presence of oxygen; elevation is not proof of hypoxia and lactate is not the sole cause of acidosis or cell death.

### ATP-dependent membrane homeostasis and cellular injury

```mermaid
flowchart TD
    N1["Cell membrane"]
    N2["Na⁺/K⁺-ATPase"]
    N3["ATP"]
    N4["Intracellular sodium binding"]
    N5["ATP-dependent phosphorylation"]
    N6["Release of 3 Na⁺ outside"]
    N7["Binding of 2 extracellular K⁺"]
    N8["Dephosphorylation"]
    N9["Release of 2 K⁺ inside"]
    N10["Extracellular Na⁺ and intracellular K⁺ predominance"]
    N11["Membrane potential"]
    N12["Nerve and muscle excitation"]
    N13["Cardiac electrical activity"]
    N14["Poor oxygen or glucose delivery"]
    N15["ATP depletion"]
    N16["Pump failure"]
    N17["Intracellular sodium accumulation"]
    N18["Water"]
    N19["Cell swelling"]
    N20["Membrane rupture and death"]
    N21["Acidosis"]
    N22["Enzyme function"]
    N23["Organ failure"]
    N24["Perfusion"]

    N1 -->|contains| N2
    N3 -->|powers| N2
    N4 -->|precedes| N5
    N5 -->|changes pump conformation to permit| N6
    N6 -->|precedes| N7
    N7 -->|accompanies| N8
    N8 -->|restores inward-facing conformation for| N9
    N2 -->|maintains against gradients| N10
    N10 -->|supports| N11
    N11 -->|enables| N12
    N12 -->|includes| N13
    N14 -->|may deplete| N3
    N15 -->|impairs| N2
    N16 -->|allows| N17
    N15 -->|can produce| N16
    N17 -->|draws in| N18
    N18 -->|causes| N19
    N19 -->|may progress to| N20
    N21 -->|impairs| N22
    N20 -->|contributes to| N23
    N23 -->|threatens| N24
```

### Metabolic failure, compensation and advanced interpretation

```mermaid
flowchart TD
    N1["Inadequate oxygen delivery relative to demand"]
    N2["Oxidative ATP production"]
    N3["Lactate"]
    N4["Severe oxygen-delivery failure"]
    N5["Metabolic acidosis"]
    N6["Faster and deeper ventilation"]
    N7["CO₂ removal"]
    N8["Hemorrhage or severe infection"]
    N9["Oxygen delivery relative to demand"]
    N10["Primary airway disease"]
    N11["ALS lactate measurement"]
    N12["Metabolic disturbance"]
    N13["Cellular hypoxia"]
    N14["Fluid administration"]
    N15["Electrolyte disturbances"]
    N16["Cardiac electrical activity"]
    N17["ALS ECG assessment"]
    N18["Potassium abnormality"]
    N19["Laboratory testing"]
    N20["EMT history and serial examination"]
    N21["ALS clinical reasoning"]
    N22["Breathing, mentation, skin, pulses and BP trends"]
    N23["Renal disease, missed dialysis and medications"]

    N1 -->|reduces| N2
    N1 -->|may increase| N3
    N4 -->|may produce| N5
    N5 -->|stimulates| N6
    N6 -->|may increase| N7
    N7 -->|helps compensate for| N5
    N8 -->|may impair| N9
    N5 -->|can explain tachypnea without| N10
    N11 -->|may add severity information about| N12
    N3 -->|does not independently establish| N13
    N11 -->|is not a stand-alone indication for| N14
    N15 -->|can alter| N16
    N17 -->|may suggest but cannot establish| N18
    N19 -->|usually needed to establish| N18
    N20 -->|informs| N21
    N20 -->|includes| N22
    N23 -->|provide context for| N18
```

## Respiration and ventilatory mechanics

### Ambient oxygen, delivery devices and toxic exposure

```mermaid
flowchart TD
    N1["Atmospheric pressure (about 760 mmHg at sea level)"]
    N2["Partial pressure"]
    N3["Ambient oxygen fraction (0.21)"]
    N4["Inspired oxygen fraction (FiO₂)"]
    N5["Spontaneous breathing"]
    N6["Delivered oxygen fraction (FDO₂)"]
    N7["Device-assisted ventilation"]
    N8["Nonrebreather mask"]
    N9["FiO₂"]
    N10["BVM with reservoir at 15 L/min"]
    N11["FDO₂"]
    N12["Fit, flow, reservoir, demand and leaks"]
    N13["Actual delivered concentration"]
    N14["Oxygen-displacing fire gases"]
    N15["Available inspired oxygen"]
    N16["Carbon monoxide"]
    N17["Hemoglobin"]
    N18["Blood oxygen transport"]
    N19["Cyanide"]
    N20["Cellular oxygen utilization"]
    N21["Conventional pulse oximetry"]
    N22["Carboxyhemoglobin from oxyhemoglobin"]
    N23["Blood co-oximetry"]
    N24["CO exposure"]
    N25["Significant smoke exposure with compatible severe findings"]
    N26["Hydroxocobalamin"]
    N27["Laboratory measurements"]
    N28["Unsafe atmosphere"]
    N29["Fire and hazmat personnel"]
    N30["Exposure history and neurologic findings"]
    N31["Clinical assessment"]
    N32["Transport"]

    N1 -->|combines with gas fraction to determine| N2
    N3 -->|contributes about 159 mmHg to| N2
    N4 -->|describes concentration inhaled during| N5
    N6 -->|describes concentration supplied during| N7
    N8 -->|may provide approximately 0.95 as| N9
    N10 -->|may provide approximately 0.95–0.98 as| N11
    N12 -->|influence| N13
    N14 -->|reduce| N15
    N16 -->|binds to| N17
    N16 -->|impairs| N18
    N19 -->|prevents| N20
    N21 -->|cannot reliably distinguish| N22
    N23 -->|can confirm| N24
    N25 -->|may warrant authorized ALS consideration of| N26
    N26 -->|binds| N19
    N26 -->|may discolor skin and urine and interfere with| N27
    N28 -->|requires coordination with| N29
    N30 -->|inform| N31
    N31 -->|guides indicated oxygen and timely| N32
```

Device fractions are approximate, not guaranteed. Do not enter unsafe atmospheres or delay indicated care for a monitor reading.

### Airway structure, obstruction and protection

```mermaid
flowchart TD
    N1["Nasal passages"]
    N2["Nasopharynx"]
    N3["Pharynx"]
    N4["Oropharynx"]
    N5["Larynx"]
    N6["Epiglottis"]
    N7["Swallowing"]
    N8["Relaxed tongue muscles"]
    N9["Glottic opening"]
    N10["Jaw thrust or chin lift"]
    N11["Tongue-related obstruction"]
    N12["Tongue, swelling, blood or vomitus"]
    N13["Nasal blood or fluid"]
    N14["Blood or vomitus"]
    N15["Aspiration"]
    N16["Gas exchange"]
    N17["Vocal cords"]
    N18["Laryngospasm"]
    N19["Airway insertion, injury or medications"]
    N20["Laryngeal fracture"]
    N21["Inward airway collapse"]
    N22["Trachea"]
    N23["Mainstem bronchi"]
    N24["Smaller bronchi and bronchioles"]
    N25["Bronchioles"]
    N26["Smooth muscle and mucus lining"]
    N27["Airway swelling"]
    N28["Small pediatric airway caliber"]
    N29["Infants"]
    N30["Nasal breathing"]
    N31["Patent airway"]
    N32["Airway protection or adequate ventilation"]

    N1 -->|lead through| N2
    N2 -->|connects toward| N3
    N4 -->|connects toward| N3
    N3 -->|leads toward| N5
    N6 -->|covers laryngeal inlet during| N7
    N8 -->|may obstruct| N9
    N10 -->|may relieve| N11
    N12 -->|may obstruct| N4
    N13 -->|may drain toward| N3
    N14 -->|may enter lungs by| N15
    N15 -->|impairs| N16
    N5 -->|contains| N17
    N17 -->|can close during| N18
    N19 -->|may trigger| N18
    N20 -->|may cause| N21
    N5 -->|leads into| N22
    N22 -->|bifurcates at carina into| N23
    N23 -->|branch into| N24
    N25 -->|contain| N26
    N27 -->|has greater effect with| N28
    N29 -->|preferentially use| N30
    N31 -->|does not guarantee| N32
```

Pediatric airway dimensions vary; the cricoid remains clinically important but is not invariably the narrowest point. A nasal route may remain useful when oral access is obstructed.

### Bronchial obstruction and mechanism-specific therapy

```mermaid
flowchart TD
    N1["Bronchitis"]
    N2["Bronchial mucosa"]
    N3["Asthma"]
    N4["Airway inflammation"]
    N5["Bronchial smooth muscle contraction"]
    N6["Edema and narrowed airway caliber"]
    N7["Increased airway resistance"]
    N8["Airway caliber"]
    N9["Mucus"]
    N10["Wheeze and prolonged expiration"]
    N11["Alveolar ventilation"]
    N12["Hypoxia and CO₂ retention"]
    N13["Severe obstruction"]
    N14["Quiet chest and exhaustion"]
    N15["Albuterol"]
    N16["Bronchial smooth muscle"]
    N17["Ipratropium"]
    N18["Cholinergic bronchoconstriction"]
    N19["Corticosteroids"]
    N20["Anaphylaxis"]
    N21["Airway edema, bronchospasm and distributive shock"]
    N22["Epinephrine"]
    N23["Wheeze, stridor, rash, swelling and BP"]
    N24["Suspected mechanism"]
    N25["EMT reassessment"]
    N26["Air movement, distress, tachycardia and tremor"]

    N1 -->|inflames| N2
    N3 -->|causes| N4
    N3 -->|causes| N5
    N4 -->|may produce| N6
    N2 -->|may narrow when inflamed causing| N7
    N5 -->|narrows| N8
    N6 -->|increases| N7
    N8 -->|when reduced increases| N7
    N9 -->|can increase| N7
    N7 -->|may cause| N10
    N7 -->|can impair| N11
    N11 -->|when inadequate may cause| N12
    N13 -->|may manifest as| N14
    N15 -->|relaxes via beta-2 activity| N16
    N17 -->|reduces| N18
    N19 -->|reduce over time| N4
    N20 -->|may cause| N21
    N22 -->|can counter| N21
    N23 -->|help distinguish| N24
    N25 -->|tracks| N26
```

Medication authority varies by provider level and protocol; corticosteroids are not an immediate rescue for a failing airway.

### Pressure gradients, spontaneous breathing and pleural coupling

```mermaid
flowchart TD
    N1["Thoracic cavity"]
    N2["Mediastinum"]
    N3["Diaphragm contraction and descent"]
    N4["Thoracic volume"]
    N5["External intercostal contraction"]
    N6["Boyle’s law"]
    N7["Volume and gas pressure"]
    N8["Intrapulmonary pressure"]
    N9["Airflow during inspiration"]
    N10["Respiratory muscle relaxation"]
    N11["Elastic recoil"]
    N12["Expiratory airflow"]
    N13["Pleural fluid"]
    N14["Lung and chest wall"]
    N15["Negative intrapleural pressure"]
    N16["Lung elastic recoil"]
    N17["Pleural integrity"]
    N18["Ventilation"]
    N19["Sternocleidomastoid, scalene and pectoralis minor"]
    N20["Inspiratory effort"]
    N21["Abdominal and internal intercostal muscles"]
    N22["Active expiration"]
    N23["COPD or emphysema"]
    N24["Accessory muscle recruitment"]
    N25["Energy demand"]
    N26["Inadequate oxygen or fuel"]
    N27["Respiratory muscle fatigue"]
    N28["Ventilatory failure"]

    N1 -->|is divided into hemithoraces by| N2
    N3 -->|increases| N4
    N5 -->|lifts ribs to increase| N4
    N6 -->|describes inverse relation of| N7
    N4 -->|when increased lowers| N8
    N8 -->|below ambient draws in| N9
    N10 -->|allows| N11
    N11 -->|decreases| N4
    N4 -->|when decreased raises| N8
    N8 -->|above ambient drives| N12
    N13 -->|couples| N14
    N15 -->|opposes| N16
    N17 -->|maintains| N15
    N14 -->|move together to enable| N18
    N19 -->|lift sternum or ribs to increase| N20
    N21 -->|reduce thoracic volume during| N22
    N23 -->|may require| N22
    N24 -->|increases| N25
    N26 -->|may cause| N27
    N25 -->|when unmet contributes to| N27
    N27 -->|may progress to| N28
```

The source’s pressure examples (760 ambient, 758 inspiratory, 762 expiratory and 754 pleural mmHg) are illustrative, not fixed respiratory pressures.

### Compliance, resistance and traumatic loss of pleural integrity

```mermaid
flowchart TD
    N1["Compliance"]
    N2["Lung and chest wall"]
    N3["Pneumonia and pulmonary edema"]
    N4["Flail segment or neuromuscular disease"]
    N5["Effective thoracic expansion"]
    N6["Reduced compliance"]
    N7["Lung expansion"]
    N8["Edema, mucus and bronchoconstriction"]
    N9["Airway resistance"]
    N10["Airflow"]
    N11["Parietal pleural wound or visceral pleural injury"]
    N12["Pleural space"]
    N13["Air in pleural space"]
    N14["Lung–chest wall coupling"]
    N15["Lung collapse"]
    N16["Ventilation"]
    N17["Tension pneumothorax"]
    N18["Venous return"]
    N19["Cardiac output"]
    N20["Reduced cardiac output"]
    N21["Obstructive shock"]
    N22["Open pneumothorax with spontaneous breathing"]
    N23["Vented chest seal"]
    N24["Open pneumothorax during PPV"]
    N25["Chest seal"]
    N26["Suspected tension physiology"]
    N27["Pleural decompression"]
    N28["Worsening distress, asymmetric breath sounds and shock"]

    N1 -->|describes ability to expand of| N2
    N3 -->|may reduce| N1
    N4 -->|may impair| N5
    N6 -->|increases pressure needed for| N7
    N8 -->|increase| N9
    N9 -->|opposes| N10
    N11 -->|allows air into| N12
    N13 -->|disrupts| N14
    N14 -->|when disrupted permits| N15
    N15 -->|compromises| N16
    N17 -->|impairs| N7
    N17 -->|may reduce| N18
    N18 -->|when reduced lowers| N19
    N20 -->|may produce| N21
    N22 -->|may warrant consideration of| N23
    N24 -->|carries risk of harm from| N25
    N26 -->|may warrant authorized ALS| N27
    N28 -->|raise concern for| N17
```

The 2024 guidance described in the source advises against chest seals for open pneumothorax during PPV. Follow local protocols; simple pneumothorax does not automatically warrant decompression. Continue necessary ventilation and transport.

### Minute ventilation versus effective alveolar ventilation

```mermaid
flowchart TD
    N1["Tidal volume (VT)"]
    N2["Volume moved per breath"]
    N3["Respiratory frequency (f)"]
    N4["Breaths per minute"]
    N5["Minute ventilation (VT × f)"]
    N6["Conducting airways"]
    N7["Anatomical dead space (VD)"]
    N8["Gas exchange"]
    N9["Alveolar ventilation ((VT − VD) × f)"]
    N10["500 mL × 12 breaths/min"]
    N11["Minute volume 6 L/min"]
    N12["Alveolar volume 4.2 L/min"]
    N13["200 mL × 28 breaths/min"]
    N14["Minute volume 5.6 L/min"]
    N15["Alveolar volume 1.4 L/min"]
    N16["Rapid shallow breathing"]
    N17["Low alveolar ventilation"]
    N18["CO₂ retention and impaired oxygenation"]
    N19["Oxygen alone"]
    N20["Appropriate assisted ventilation"]
    N21["Very rapid breathing"]
    N22["Fatigue"]

    N1 -->|measures| N2
    N3 -->|counts| N4
    N1 -->|multiplied by frequency gives| N5
    N3 -->|combines with tidal volume to determine| N5
    N6 -->|constitute| N7
    N7 -->|does not participate in| N8
    N7 -->|is subtracted from tidal volume in| N9
    N1 -->|combines with dead space and frequency to determine| N9
    N3 -->|also determines| N9
    N10 -->|yields| N11
    N10 -->|with VD 150 mL yields| N12
    N13 -->|yields| N14
    N13 -->|with VD 150 mL yields| N15
    N16 -->|may preserve| N5
    N16 -->|may severely reduce| N9
    N17 -->|may cause| N18
    N19 -->|cannot correct| N17
    N20 -->|addresses| N17
    N21 -->|may reduce filling time and increase| N22
```

Dead space is about 150 mL in the illustrative adult and helps explain residual oxygen in exhaled air. Rates of 40/min in adults or over 60/min in children are teaching examples, not universal failure cutoffs. Chest rise alone cannot quantify alveolar ventilation.

### Positive-pressure ventilation and hemodynamic interactions

```mermaid
flowchart TD
    N1["Spontaneous inspiration"]
    N2["Negative intrathoracic pressure"]
    N3["BVM or mechanical ventilator"]
    N4["Positive-pressure ventilation (PPV)"]
    N5["Intrathoracic pressure"]
    N6["Venous return"]
    N7["Preload"]
    N8["Reduced preload"]
    N9["Cardiac output and BP"]
    N10["Hypovolemia"]
    N11["Reduced cardiac output and BP"]
    N12["Increased airway resistance"]
    N13["Exhalation"]
    N14["Excessive ventilation or incomplete exhalation"]
    N15["Dynamic hyperinflation"]
    N16["Reduced compliance"]
    N17["Chest rise"]
    N18["PEEP"]
    N19["Alveolar recruitment"]
    N20["CPAP"]
    N21["Spontaneous breathing"]
    N22["Bilevel NIV"]
    N23["Inspiratory pressure support"]
    N24["Noninvasive ventilation (NIV)"]
    N25["Cardiogenic pulmonary edema"]
    N26["Inadequate spontaneous breathing, vomiting or airway protection failure"]
    N27["Severe hemodynamic instability"]
    N28["EMT mask seal and assisted breaths"]
    N29["EMT reassessment"]
    N30["Resistance, chest rise, BP and mentation"]
    N31["Mechanical ventilator"]
    N32["Circuit and pressure complications"]

    N1 -->|creates| N2
    N3 -->|supplies| N4
    N4 -->|raises| N5
    N5 -->|when elevated may reduce| N6
    N6 -->|determines in part| N7
    N8 -->|may lower| N9
    N10 -->|increases vulnerability to| N11
    N12 -->|prolongs| N13
    N14 -->|may cause| N15
    N15 -->|further elevates| N5
    N16 -->|may make difficult| N17
    N18 -->|maintains end-expiratory pressure to improve| N19
    N18 -->|may also reduce| N6
    N20 -->|maintains positive airway pressure during| N21
    N22 -->|adds| N23
    N24 -->|may improve gas exchange in| N25
    N26 -->|may make inappropriate| N24
    N27 -->|may make inappropriate| N24
    N28 -->|support| N4
    N29 -->|detects changes in| N30
    N31 -->|may improve breath consistency but remains subject to| N32
```

EMT CPAP may be authorized locally; advanced settings and ventilator management require separate authorization.

### Advanced airway support and continuing BLS responsibilities

```mermaid
flowchart TD
    N1["Airway patency"]
    N2["Airway protection or ventilation"]
    N3["Basic positioning, suction and adjuncts"]
    N4["BVM ventilation"]
    N5["Oxygenation and ventilation"]
    N6["Supraglottic airway (authorized AEMT or paramedic)"]
    N7["Glottis"]
    N8["Endotracheal tube (authorized paramedic)"]
    N9["Medication-assisted airway placement"]
    N10["Apnea or hypotension"]
    N11["Repeated airway attempts"]
    N12["Oxygen delivery"]
    N13["Advanced airway"]
    N14["Waveform capnography"]
    N15["EMT observations"]
    N16["Airway difficulty, emesis, chest rise and perfusion"]
    N17["ALS airway reassessment"]
    N18["Local credentialing and protocols"]
    N19["Advanced airway procedures"]
    N20["BLS assistance"]

    N1 -->|does not establish| N2
    N3 -->|support| N1
    N4 -->|supports| N5
    N6 -->|sits above| N7
    N8 -->|passes through| N7
    N9 -->|may cause| N10
    N11 -->|can interrupt| N12
    N13 -->|still requires| N5
    N14 -->|supports initial and ongoing confirmation of| N13
    N15 -->|communicate| N16
    N15 -->|inform| N17
    N17 -->|evaluates| N5
    N18 -->|determine authorization for| N19
    N20 -->|does not authorize independent manipulation of| N13
```

## Regulation of breathing

### Brainstem respiratory control and sensory feedback

```mermaid
flowchart TD
    N1["Medulla and pons"]
    N2["Respiratory control networks"]
    N3["Dorsal respiratory group"]
    N4["Ventral respiratory group"]
    N5["Diaphragm and intercostals"]
    N6["Phrenic nerve"]
    N7["Diaphragm"]
    N8["Intercostal nerves"]
    N9["Intercostals"]
    N10["Pontine centers"]
    N11["Transition from inspiration to expiration"]
    N12["Higher voluntary centers"]
    N13["Inspiratory activity"]
    N14["Inspiratory accessory muscles"]
    N15["Expiratory activity"]
    N16["Expiratory accessory muscles"]
    N17["Central chemoreceptors in medulla"]
    N18["CO₂-related CSF pH"]
    N19["CO₂ and water"]
    N20["Hydrogen ions"]
    N21["CSF pH"]
    N22["Low CSF pH"]
    N23["Rate and depth of breathing"]
    N24["Peripheral chemoreceptors in carotid and aortic bodies"]
    N25["Significant arterial oxygen decline"]
    N26["CO₂ and pH changes"]
    N27["Alveolar ventilation"]
    N28["CO₂"]
    N29["CO₂ removal"]
    N30["Irritant receptors"]
    N31["Increased breathing rate"]
    N32["Stretch receptors"]
    N33["Rate and volume"]
    N34["J-receptors near alveolar capillaries"]
    N35["Rapid shallow breathing"]

    N1 -->|contain| N2
    N3 -->|relays sensory information to| N4
    N4 -->|contributes motor drive for| N5
    N6 -->|carries motor signals to| N7
    N8 -->|carry motor signals to| N9
    N10 -->|help coordinate| N11
    N12 -->|influence| N2
    N13 -->|recruits when needed| N14
    N15 -->|recruits during forced expiration| N16
    N17 -->|respond primarily to| N18
    N19 -->|form carbonic acid yielding| N20
    N20 -->|lower| N21
    N22 -->|stimulates increased| N23
    N24 -->|respond strongly to| N25
    N24 -->|also respond to| N26
    N25 -->|stimulates increased| N23
    N23 -->|when effective increase| N27
    N27 -->|removes| N28
    N29 -->|reduces stimulus to| N17
    N30 -->|trigger cough, bronchoconstriction and| N31
    N32 -->|limit overinflation by reducing| N33
    N34 -->|respond to increased capillary pressure with| N35
```

The chapter’s 2-second inspiration and 3-second expiration illustrate 12 breaths/min. Its claim that the VRG is the sole motor-impulse source is not established, so the map uses a nonexclusive network relationship. Pontine and medullary centers work together; sensory and motor pathways are simplified here.

### COPD, oxygen-induced hypercapnia and metabolic compensation

```mermaid
flowchart TD
    N1["Chronic hypercapnia"]
    N2["Ventilatory chemoreceptor responses"]
    N3["COPD"]
    N4["Oxygen-only drive"]
    N5["Excess oxygen in susceptible COPD patients"]
    N6["V/Q matching"]
    N7["Haldane effect"]
    N8["CO₂"]
    N9["Altered V/Q matching"]
    N10["Hypercapnia"]
    N11["Changes in ventilation"]
    N12["Titrated oxygen"]
    N13["Oxygen saturation"]
    N14["Risk of hypercapnic respiratory failure"]
    N15["SpO₂ 88–92% per guidance"]
    N16["Critical hypoxemia or failing ventilation"]
    N17["Necessary oxygen and ventilation support"]
    N18["Opioids"]
    N19["Brainstem ventilatory drive"]
    N20["Naloxone"]
    N21["Spontaneous ventilation"]
    N22["Naloxone effect"]
    N23["Opioid effect"]
    N24["Withdrawal or vomiting"]
    N25["Immediate assisted ventilation"]
    N26["Opioid-related inadequate ventilation"]
    N27["Metabolic acidosis"]
    N28["Compensatory deep rapid breathing"]
    N29["Advanced airway medications"]
    N30["Inadequate replacement ventilation"]
    N31["Respiratory compensation"]
    N32["Serial respiratory assessment"]
    N33["Recurrent respiratory depression"]

    N1 -->|may modify| N2
    N3 -->|does not universally replace CO₂ control with| N4
    N5 -->|may alter| N6
    N5 -->|increases oxygenation of hemoglobin leading to| N7
    N7 -->|reduces hemoglobin carriage of| N8
    N9 -->|can contribute to| N10
    N7 -->|can contribute to| N10
    N11 -->|may contribute to| N10
    N12 -->|aims for appropriate| N13
    N14 -->|commonly supports target of| N15
    N16 -->|requires| N17
    N18 -->|depress| N19
    N20 -->|antagonizes opioid receptors to restore| N21
    N22 -->|may wear off before| N23
    N20 -->|may precipitate| N24
    N25 -->|addresses| N26
    N27 -->|stimulates| N28
    N29 -->|may interrupt| N28
    N30 -->|may eliminate| N31
    N32 -->|identifies| N33
```

Do not withhold necessary oxygen or ventilation in critical illness. The saturation target is conditional on presentation and local guidance, not a universal target. Report baseline pattern, exposure history and response to ventilation.

## Gas exchange and blood gas transport

### Ventilation–perfusion matching and pulmonary exchange

```mermaid
flowchart TD
    N1["Alveolar ventilation (V in L/min)"]
    N2["V/Q ratio"]
    N3["Pulmonary blood flow (Q in L/min)"]
    N4["Venous return and right ventricular pump function"]
    N5["V/Q matching"]
    N6["External respiration"]
    N7["Alveolar–capillary interface"]
    N8["Gravity"]
    N9["Ventilation and perfusion"]
    N10["Lung apices"]
    N11["Local perfusion"]
    N12["Lung bases"]
    N13["Bronchospasm or pulmonary edema"]
    N14["Low V/Q"]
    N15["Shunt physiology"]
    N16["Pulmonary embolism or reduced pulmonary blood flow"]
    N17["High V/Q"]
    N18["Alveolar dead space"]
    N19["Severe blood loss"]
    N20["Pulmonary capillary pressure"]
    N21["Alveolar pressure exceeding capillary pressure"]
    N22["Oxygenation"]
    N23["Bronchodilators"]
    N24["Hemorrhage control and cause-specific resuscitation"]
    N25["Hemorrhage"]
    N26["Global oxygen delivery failure"]
    N27["Bronchospasm"]

    N1 -->|forms numerator of| N2
    N3 -->|forms denominator of| N2
    N4 -->|support| N3
    N5 -->|enables| N6
    N6 -->|exchanges oxygen and CO₂ across| N7
    N8 -->|produces regional differences in| N9
    N10 -->|have relatively greater ventilation than| N11
    N12 -->|have high ventilation but relatively greater| N11
    N13 -->|reduces local ventilation causing| N14
    N14 -->|at absent ventilation becomes| N15
    N16 -->|may cause| N17
    N17 -->|at absent perfusion produces| N18
    N19 -->|may reduce| N20
    N21 -->|can interrupt| N3
    N14 -->|can impair| N22
    N17 -->|wastes| N1
    N23 -->|address| N27
    N27 -->|can contribute to| N14
    N24 -->|address| N19
    N25 -->|reduces both flow and oxygen-carrying capacity causing| N26
    N26 -->|can coexist with| N17
```

Bronchodilators address bronchospasm, not pulmonary edema itself or hemorrhage. The source describes an overall normal V/Q below 1, with regional variation. V/Q mismatch is not the sole explanation for tissue hypoxia in hemorrhage.

### Oxygen carriage, tissue exchange and delivery

```mermaid
flowchart TD
    N1["Alveolar oxygen"]
    N2["Pulmonary capillary blood"]
    N3["Left heart and systemic circulation"]
    N4["Hemoglobin"]
    N5["Blood oxygen"]
    N6["Plasma"]
    N7["Four oxygen-binding sites"]
    N8["Oxygen binding at one site"]
    N9["Remaining binding sites"]
    N10["Oxygen occupancy"]
    N11["Hemoglobin saturation"]
    N12["Arterial oxygen content"]
    N13["Hemoglobin amount and saturation"]
    N14["Cardiac output"]
    N15["Oxygen delivery = CO × arterial oxygen content"]
    N16["Systemic capillaries"]
    N17["Cells"]
    N18["Cellular oxidative metabolism"]
    N19["Anemia or hemorrhage"]
    N20["Anemia"]
    N21["Normal SpO₂"]
    N22["SpO₂"]
    N23["Hemoglobin amount"]
    N24["Oxygen administration"]
    N25["Missing hemoglobin"]
    N26["Blood products in equipped systems"]
    N27["Oxygen-carrying capacity"]
    N28["Cyanide toxicity"]
    N29["Cellular oxygen utilization"]
    N30["Hemoglobin amount"]

    N1 -->|diffuses down partial-pressure gradient into| N2
    N2 -->|carries oxygen to tissues via| N3
    N4 -->|carries about 97–98.5% of| N5
    N6 -->|carries about 1.5–3% of| N5
    N4 -->|contains| N7
    N8 -->|increases affinity at| N9
    N10 -->|determines| N11
    N12 -->|depends largely on| N13
    N14 -->|combines with oxygen content to determine| N15
    N12 -->|combines with blood flow to determine| N15
    N16 -->|deliver oxygen through interstitial fluid to| N17
    N15 -->|supports| N18
    N19 -->|reduces| N30
    N30 -->|when reduced lowers| N12
    N20 -->|may coexist with| N21
    N22 -->|estimates proportion of hemoglobin oxygenated, not| N23
    N24 -->|may improve oxygenation but cannot replace| N25
    N26 -->|can restore| N27
    N28 -->|impairs| N29
    N29 -->|is required in addition to| N15
```

Hemoglobin saturation and content are not interchangeable. The chapter illustrates total oxygen transport around 1,000 mL/min; this varies with content and flow. Oxygen is used according to clinical indication and protocol, not solely because anemia is suspected.

### Carbon dioxide transport and capnographic interpretation

```mermaid
flowchart TD
    N1["Cellular metabolism"]
    N2["Carbon dioxide"]
    N3["Systemic capillary blood"]
    N4["Bicarbonate"]
    N5["Hemoglobin"]
    N6["Plasma"]
    N7["Red blood cells"]
    N8["Lungs"]
    N9["Right heart"]
    N10["Alveoli"]
    N11["Ventilation"]
    N12["Increased metabolic CO₂ production"]
    N13["Waveform capnography"]
    N14["Exhaled CO₂ and EtCO₂"]
    N15["EtCO₂"]
    N16["Ventilation, pulmonary flow and metabolic production"]
    N17["Low EtCO₂"]
    N18["Hyperventilation"]
    N19["Reduced pulmonary perfusion"]
    N20["Leaks, mouth breathing, secretions and sampling problems"]
    N21["Pulmonary embolism"]
    N22["EtCO₂ alone"]
    N23["Tissue oxygenation or ATP"]
    N24["EMT breathing and perfusion trends"]

    N1 -->|produces| N2
    N2 -->|diffuses into| N3
    N3 -->|carries about 70% of CO₂ as| N4
    N3 -->|carries about 23% of CO₂ bound to| N5
    N3 -->|carries about 7% of CO₂ dissolved in| N6
    N7 -->|form| N4
    N4 -->|travels in plasma and is converted back to CO₂ in| N8
    N9 -->|pumps venous blood to| N8
    N2 -->|diffuses from pulmonary capillaries into| N10
    N10 -->|eliminate CO₂ through| N11
    N12 -->|can increase| N11
    N13 -->|measures| N14
    N15 -->|reflects interactions among| N16
    N17 -->|may reflect| N18
    N17 -->|may also reflect| N19
    N20 -->|may distort| N14
    N21 -->|cannot be established or excluded by| N22
    N13 -->|does not directly measure| N23
    N24 -->|add context to| N13
```

## Circulation and vascular physiology

### Blood volume, composition and circulation

```mermaid
flowchart TD
    N1["Blood volume (about 70 mL/kg)"]
    N2["Circulating flow"]
    N3["Venous capacitance system (about 64% of blood)"]
    N4["Venous return"]
    N5["Arterial compartment (about 13%)"]
    N6["Systemic capillaries"]
    N7["Pulmonary vessels (about 9%)"]
    N8["Gas exchange"]
    N9["Capillaries (about 7%)"]
    N10["Tissue exchange"]
    N11["Heart (about 7%)"]
    N12["Blood"]
    N13["Plasma"]
    N14["Formed elements"]
    N15["Water"]
    N16["Albumin"]
    N17["Plasma oncotic pressure"]
    N18["Antibodies"]
    N19["Immunity"]
    N20["Clotting factors including fibrinogen"]
    N21["Hemostasis"]
    N22["Red blood cells"]
    N23["Oxygen transport"]
    N24["White blood cells"]
    N25["Platelets"]
    N26["Hemorrhage"]
    N27["Oxygen transport and hemostasis"]

    N1 -->|supports| N2
    N3 -->|acts as reservoir supporting| N4
    N5 -->|distributes blood toward| N6
    N7 -->|carry blood for| N8
    N9 -->|enable| N10
    N11 -->|provides pumping function for| N2
    N12 -->|contains approximately 55%| N13
    N12 -->|contains approximately 45%| N14
    N13 -->|consists largely of| N15
    N13 -->|contains| N16
    N16 -->|contributes to| N17
    N13 -->|carries| N18
    N18 -->|support| N19
    N13 -->|contains| N20
    N20 -->|support| N21
    N14 -->|include| N22
    N22 -->|carry hemoglobin for| N23
    N14 -->|include| N24
    N14 -->|include| N25
    N25 -->|contribute to| N21
    N26 -->|reduces| N1
    N26 -->|removes red cells and clotting components needed for| N27
```

### Capillary fluid exchange and cardiogenic pulmonary edema

```mermaid
flowchart TD
    N1["Cardiac contraction and blood pressure"]
    N2["Capillary hydrostatic pressure"]
    N3["Fluid filtration"]
    N4["Albumin"]
    N5["Plasma oncotic pressure"]
    N6["Low albumin"]
    N7["Capillary permeability and interstitial pressures"]
    N8["Lymphatic drainage"]
    N9["Interstitial fluid"]
    N10["Edema"]
    N11["Left ventricular failure"]
    N12["Pulmonary capillary hydrostatic pressure"]
    N13["Pulmonary edema"]
    N14["Gas exchange"]
    N15["Lung compliance"]
    N16["Positive airway pressure"]
    N17["Nitroglycerin when indicated and BP permits"]
    N18["Cardiac filling pressures and workload"]
    N19["Hypotension"]
    N20["Recent PDE-5 inhibitor use"]
    N21["Fluid loading"]

    N1 -->|contribute to| N2
    N2 -->|promotes outward| N3
    N4 -->|generates| N5
    N5 -->|opposes| N3
    N6 -->|can reduce| N5
    N7 -->|modify| N3
    N8 -->|removes excess| N9
    N3 -->|when excessive contributes to| N10
    N11 -->|may increase| N12
    N12 -->|when elevated promotes| N13
    N13 -->|impairs| N14
    N13 -->|may reduce| N15
    N16 -->|may improve| N14
    N17 -->|may reduce| N18
    N17 -->|may cause| N19
    N20 -->|is an important contraindication to| N17
    N13 -->|does not automatically indicate| N21
```

High oncotic pressure does not establish overload, and low albumin or edema does not prove intravascular depletion. Advanced therapy and medication selection depend on clinical presentation and authorization.

### Cardiac output, filling and ejection

```mermaid
flowchart TD
    N1["Cardiac output (CO = HR × SV)"]
    N2["Minute"]
    N3["Heart rate (HR)"]
    N4["Stroke volume (SV)"]
    N5["SA node automaticity"]
    N6["Sympathetic activation and reduced vagal tone"]
    N7["Parasympathetic activation and reduced sympathetic tone"]
    N8["Adrenal epinephrine and norepinephrine"]
    N9["Excessively fast heart rate"]
    N10["Ventricular filling time"]
    N11["Preload"]
    N12["Venous return"]
    N13["Myocardial stretch"]
    N14["Frank–Starling mechanism"]
    N15["Myocardial contractility"]
    N16["Heart failure, MI necrosis or beta-1 blockade"]
    N17["Afterload"]
    N18["Chronically elevated afterload"]
    N19["Left ventricular failure"]
    N20["Severe ventricular dilation"]
    N21["Tissue oxygen delivery"]

    N1 -->|represents LV ejection per| N2
    N3 -->|combines with stroke volume to determine| N1
    N4 -->|combines with heart rate to determine| N1
    N5 -->|establishes| N3
    N6 -->|increase| N3
    N7 -->|decrease| N3
    N8 -->|stimulate beta-1 effects on| N3
    N9 -->|shortens| N10
    N10 -->|influences| N11
    N12 -->|influences| N11
    N11 -->|represents end-diastolic| N13
    N13 -->|within physiological limits increases force via| N14
    N14 -->|supports| N4
    N15 -->|influences| N4
    N16 -->|can reduce| N15
    N17 -->|opposes ventricular ejection and influences| N4
    N18 -->|can contribute to| N19
    N20 -->|limits| N14
    N9 -->|may ultimately lower| N1
    N1 -->|contributes to| N21
```

The source illustrates resting output around 5 L/min and possible increases up to sixfold. Rate above 160/min is not a universal threshold. Preload is myocardial stretch, not simply filling volume or pressure; afterload is not simply diastolic BP.

### Electrical activity versus mechanical perfusion

```mermaid
flowchart TD
    N1["Cardiac monitor"]
    N2["Electrical rhythm"]
    N3["12-lead ECG"]
    N4["Possible ischemia or dysrhythmia"]
    N5["Effective mechanical contraction"]
    N6["Clinical perfusion"]
    N7["Slow rate with poor perfusion"]
    N8["Atropine, chronotropic agents or pacing"]
    N9["Atropine"]
    N10["Vagal influence on heart"]
    N11["Pacing"]
    N12["Electrical capture"]
    N13["Mechanical capture"]
    N14["Fast rate with poor perfusion"]
    N15["Compensatory tachycardia and primary dysrhythmia"]
    N16["Hemorrhage"]
    N17["Compensatory tachycardia"]
    N18["Underlying cause"]
    N19["Selected unstable tachyarrhythmias"]
    N20["Synchronized cardioversion"]
    N21["Organized electrical activity without palpable pulse"]
    N22["Pulseless electrical activity"]
    N23["Cardiac arrest"]
    N24["CPR and appropriate AED use"]
    N25["ALS arrest care"]
    N26["Rhythm-specific care and reversible-cause evaluation"]
    N27["EMT pulse, BP, mentation and symptom trends"]
    N28["Authorized EMT ECG acquisition or transmission"]
    N29["Advanced ECG interpretation"]

    N1 -->|records| N2
    N3 -->|samples electrical activity from multiple perspectives to identify| N4
    N2 -->|does not establish| N5
    N5 -->|contributes to| N6
    N7 -->|may warrant ALS consideration of| N8
    N9 -->|reduces| N10
    N11 -->|attempts to initiate| N12
    N12 -->|does not establish| N13
    N13 -->|must be assessed through| N6
    N14 -->|requires distinction between| N15
    N16 -->|can provoke| N17
    N17 -->|requires treatment of| N18
    N19 -->|may warrant authorized ALS| N20
    N21 -->|may represent| N22
    N23 -->|requires foundational| N24
    N25 -->|adds| N26
    N27 -->|inform| N6
    N28 -->|supports but does not confer| N29
```

### Systemic vascular resistance and pulse pressure

```mermaid
flowchart TD
    N1["Arteriolar diameter"]
    N2["Systemic vascular resistance (SVR)"]
    N3["Sympathetic alpha-1 stimulation"]
    N4["Vasoconstriction"]
    N5["Reduced sympathetic tone and local mediators"]
    N6["Vasodilation"]
    N7["Diastolic BP"]
    N8["Arterial compliance, heart rate and runoff"]
    N9["Systolic BP and diastolic BP"]
    N10["Pulse pressure = SBP − DBP"]
    N11["Falling preload and cardiac output"]
    N12["Systolic BP"]
    N13["Compensatory vasoconstriction"]
    N14["Falling systolic and preserved diastolic BP"]
    N15["Narrow pulse pressure"]
    N16["Weak or thready pulse"]
    N17["Hemorrhage"]
    N18["Peripheral tissue perfusion"]
    N19["Reduced peripheral tissue perfusion"]
    N20["Cool pale skin"]
    N21["Distributive shock"]
    N22["Substantial cardiac output"]

    N1 -->|inversely influences| N2
    N3 -->|promotes| N4
    N4 -->|reduces| N1
    N5 -->|may promote| N6
    N6 -->|increases| N1
    N2 -->|influences| N7
    N8 -->|also influence| N7
    N9 -->|determine difference called| N10
    N11 -->|can reduce| N12
    N13 -->|may sustain or raise| N7
    N14 -->|may produce| N15
    N15 -->|may accompany| N16
    N10 -->|when below 25% of SBP meets chapter example of| N15
    N17 -->|may stimulate| N13
    N13 -->|may preserve pressure at expense of| N18
    N19 -->|may manifest as| N20
    N15 -->|raises concern in context but does not diagnose| N17
    N21 -->|can reduce| N2
    N21 -->|can impair perfusion despite| N22
```

Diastolic BP is not a direct measure of SVR. Most systemic vessels do not have substantial parasympathetic vasodilator innervation. Mental-status changes can have multiple causes; quietness or agitation cannot distinguish a single mechanism.

### Microcirculation and systemic versus local perfusion

```mermaid
flowchart TD
    N1["Arterioles"]
    N2["Metarterioles"]
    N3["True capillaries"]
    N4["Venules"]
    N5["Precapillary sphincters"]
    N6["Sphincter relaxation"]
    N7["Capillary exchange"]
    N8["Sphincter contraction"]
    N9["Temperature, hypoxia, acidosis and histamine"]
    N10["Local vascular regulation"]
    N11["Microvascular flow"]
    N12["Sympathetic neural activity"]
    N13["Epinephrine alpha-1 effects"]
    N14["Endothelial signals and local mediators"]
    N15["Tissue oxygen and nutrient exchange"]
    N16["Sepsis"]
    N17["Endothelial function and vascular tone"]
    N18["Systemic BP"]
    N19["Improved systemic BP"]
    N20["Restored cellular metabolism"]
    N21["Serial skin, refill, mentation and pulses"]
    N22["Tissue perfusion"]
    N23["Temperature, age, lighting and vascular disease"]

    N1 -->|regulate flow toward| N2
    N2 -->|conduct blood toward| N3
    N3 -->|provide exchange before drainage to| N4
    N5 -->|regulate entry into| N3
    N6 -->|increases access to| N7
    N8 -->|can divert flow away from| N7
    N9 -->|influence| N10
    N10 -->|predominates at rest in control of| N11
    N12 -->|can constrict| N1
    N13 -->|can constrict| N1
    N14 -->|help regulate| N11
    N11 -->|enables| N15
    N16 -->|may disrupt| N17
    N17 -->|when impaired may disrupt| N11
    N18 -->|measures arterial pressure but not| N7
    N19 -->|does not guarantee| N20
    N21 -->|provide indirect clues to| N22
    N23 -->|limit interpretation of| N21
```

### Baroreflex, chemoreflex and pressure compensation

```mermaid
flowchart TD
    N1["Cardiac output"]
    N2["MAP − right atrial pressure = CO × SVR"]
    N3["Systemic vascular resistance (SVR)"]
    N4["Mean arterial pressure (MAP)"]
    N5["DBP + one-third pulse pressure"]
    N6["Falling arterial pressure"]
    N7["Carotid sinus and aortic arch baroreceptor stretch"]
    N8["Medullary cardiovascular centers"]
    N9["Increased sympathetic and reduced vagal activity"]
    N10["Heart rate and contractility"]
    N11["Vasoconstriction"]
    N12["Venoconstriction"]
    N13["Venous return and preload"]
    N14["Arterial pressure"]
    N15["Reduced sympathetic and increased vagal activity"]
    N16["Significant pressure decline"]
    N17["Epinephrine and norepinephrine"]
    N18["Low arterial oxygen with CO₂ and pH changes"]
    N19["Chemoreceptor reflex"]

    N1 -->|combines with SVR to determine| N2
    N3 -->|combines with CO to determine| N2
    N4 -->|can be estimated at ordinary rates by| N5
    N6 -->|decreases| N7
    N7 -->|when reduced decreases impulses to| N8
    N8 -->|respond to reduced input with| N9
    N9 -->|increases| N10
    N10 -->|may increase| N1
    N9 -->|stimulates| N11
    N11 -->|increases| N3
    N12 -->|can support| N13
    N9 -->|can stimulate| N12
    N13 -->|support| N1
    N1 -->|helps restore| N14
    N3 -->|helps restore| N14
    N14 -->|when restored increases| N7
    N7 -->|when increased favors| N15
    N15 -->|lowers HR and vascular tone to reduce| N14
    N16 -->|may stimulate adrenal release of| N17
    N17 -->|sustain adrenergic support of| N10
    N18 -->|activates| N19
    N19 -->|can stimulate| N9
```

The feedback loop opposes pressure changes; preserved pressure may mask worsening tissue perfusion. MAP approximation is less reliable in marked tachycardia or abnormal waveforms. Older patients and patients taking beta blockers may not show expected tachycardia.

## Clinical and BLS–ALS integration

### Cause-specific circulatory resuscitation

```mermaid
flowchart TD
    N1["External hemorrhage control (BLS)"]
    N2["Ongoing blood loss"]
    N3["Circulating volume and red cell mass"]
    N4["Oxygen delivery"]
    N5["IV or IO access (authorized ALS)"]
    N6["Authorized resuscitation"]
    N7["Crystalloid"]
    N8["Circulating fluid compartment"]
    N9["Red cells or clotting components"]
    N10["Excess crystalloid in hemorrhage"]
    N11["Dilution, cooling and edema"]
    N12["Blood products (equipped and credentialed systems)"]
    N13["Oxygen-carrying capacity"]
    N14["Coagulation components"]
    N15["Life-threatening traumatic bleeding"]
    N16["Traumatic brain injury"]
    N17["Resuscitation targets"]
    N18["Distributive shock"]
    N19["Inadequate vascular tone"]
    N20["Norepinephrine (authorized ALS)"]
    N21["Perfusion pressure"]
    N22["Excessive vasoconstriction, arrhythmia and extravasation"]
    N23["Vasopressors"]
    N24["Blood and hemorrhage control"]
    N25["EMT heat-loss prevention"]
    N26["Cooling"]
    N27["EMT serial examination"]
    N28["Deterioration or treatment complications"]
    N29["Definitive hemorrhage control"]
    N30["Trauma transport"]

    N1 -->|limits| N2
    N2 -->|reduces| N3
    N3 -->|determine important components of| N4
    N5 -->|provides route for| N6
    N7 -->|transiently expands| N8
    N7 -->|does not replace| N9
    N10 -->|may worsen| N11
    N12 -->|can restore| N13
    N12 -->|depending on product can restore| N14
    N15 -->|may favor blood components over| N7
    N16 -->|may alter| N17
    N18 -->|may involve| N19
    N20 -->|increases vascular tone to support| N21
    N20 -->|carries risk of| N22
    N23 -->|cannot replace in hemorrhage| N24
    N25 -->|helps limit| N26
    N27 -->|identifies possible| N28
    N29 -->|requires timely| N30
```

The source favors blood components in supported transfusion programs for life-threatening traumatic hemorrhage and isotonic crystalloid when crystalloid is used. Neither access nor a pressure number alone establishes the appropriate treatment. Monitor for dyspnea, hypotension or suspected transfusion reaction; do not delay definitive care for nonessential procedures.

### Hemorrhage, compensation and cellular oxygen debt

```mermaid
flowchart TD
    N1["Hemorrhage"]
    N2["Circulating blood volume"]
    N3["Circulating oxygen-carrying capacity"]
    N4["Venous return and preload"]
    N5["Stroke volume"]
    N6["Cardiac output"]
    N7["Tissue oxygen delivery"]
    N8["Falling arterial pressure"]
    N9["Baroreceptor stretch"]
    N10["Reduced baroreceptor stretch"]
    N11["Sympathetic activity"]
    N12["Compensatory tachycardia"]
    N13["Vasoconstriction"]
    N14["Systemic vascular resistance"]
    N15["Arterial pressure"]
    N16["Peripheral perfusion"]
    N17["Pale cool clammy skin and weak pulse"]
    N18["Reduced cardiac output with elevated SVR"]
    N19["Narrow pulse pressure"]
    N20["ATP depletion and metabolic acidosis"]
    N21["Organ function"]
    N22["Altered mentation and compensatory breathing"]
    N23["Compensation"]
    N24["Measurable arterial pressure"]
    N25["Hemorrhage control"]

    N1 -->|reduces| N2
    N1 -->|reduces| N3
    N2 -->|when reduced decreases| N4
    N4 -->|when reduced lowers| N5
    N5 -->|when reduced tends to lower| N6
    N6 -->|when reduced threatens| N7
    N3 -->|when reduced threatens| N7
    N8 -->|decreases| N9
    N10 -->|increases| N11
    N11 -->|produces| N12
    N12 -->|attempts to preserve| N6
    N11 -->|produces| N13
    N13 -->|increases| N14
    N14 -->|can temporarily maintain| N15
    N13 -->|can reduce| N16
    N16 -->|when reduced may manifest as| N17
    N18 -->|can produce| N19
    N7 -->|when inadequate may cause| N20
    N20 -->|may impair| N21
    N20 -->|may manifest as| N22
    N23 -->|can mask deterioration despite| N24
    N25 -->|targets| N1
```

### Internal and external hemorrhage: interpreting the chapter cases

```mermaid
flowchart TD
    N1["Penetrating abdominal injury with rigid tender abdomen"]
    N2["Internal hemorrhage"]
    N3["Large spurting leg wound"]
    N4["Life-threatening external hemorrhage"]
    N5["Hypovolemic shock"]
    N6["Internal case BP 102/88"]
    N7["Pulse pressure 14 mmHg"]
    N8["External case BP 98/76"]
    N9["Pulse pressure 22 mmHg"]
    N10["Internal case systolic BP 102"]
    N11["External case systolic BP 98"]
    N12["Both case pulse pressures"]
    N13["Internal case HR 122 and weak radial pulse"]
    N14["Compensatory circulatory failure"]
    N15["External case HR 134 and absent radial pulse"]
    N16["Both cases with pale cool clammy skin"]
    N17["Peripheral vasoconstriction"]
    N18["Moaning or speech"]
    N19["Adequate alveolar ventilation"]
    N20["RR 24 slightly shallow or RR 26"]
    N21["Depth, effort and ventilatory adequacy"]
    N22["External bleeding"]
    N23["Direct pressure or indicated tourniquet (BLS)"]
    N24["External wound covering"]
    N25["Definitive hemorrhage control"]
    N26["Scene hazards including aggressive animals"]
    N27["Safe patient access"]
    N28["Both cases"]
    N29["Rapid appropriate trauma transport"]
    N30["Early notification and handoff"]
    N31["Reassessment"]
    N32["Mentation, pulse, BP, chest rise and fatigue"]

    N1 -->|raises concern for| N2
    N3 -->|indicates concern for| N4
    N2 -->|may cause| N5
    N4 -->|may cause| N5
    N6 -->|yields| N7
    N8 -->|yields| N9
    N7 -->|is below 25% of| N10
    N9 -->|is about 22% of| N11
    N12 -->|support concern in context for| N5
    N13 -->|supports concern for| N14
    N15 -->|supports concern for| N14
    N16 -->|suggest| N17
    N18 -->|indicates some airflow but not| N19
    N20 -->|requires assessment of| N21
    N22 -->|may respond to| N23
    N2 -->|cannot be definitively controlled by| N24
    N2 -->|requires hospital resources for| N25
    N26 -->|must be addressed for| N27
    N28 -->|require ongoing assessment and| N29
    N29 -->|is supported by| N30
    N31 -->|monitors| N32
```

Values are case-specific, not universal clinical thresholds. The internal case used a nonrebreather at 15 L/min as an illustrative intervention; oxygen, ventilation and bleeding control are selected according to need and protocol. Request ALS without delaying essential care or transport.

### Assessment findings and the failing physiological link

```mermaid
flowchart TD
    N1["Scene and exposure history"]
    N2["Mechanism of illness or injury"]
    N3["Airway and chest assessment"]
    N4["Patency and ventilatory effort"]
    N5["SpO₂"]
    N6["Arterial oxygen saturation"]
    N7["Hemoglobin amount, ventilation or tissue perfusion"]
    N8["ALS waveform capnography"]
    N9["Exhaled CO₂, ventilation and pulmonary blood flow"]
    N10["Arterial CO₂ or cause of shock"]
    N11["Blood co-oximetry"]
    N12["Hemoglobin species including COHb"]
    N13["Tissue perfusion"]
    N14["BP measurement"]
    N15["Systemic arterial pressure"]
    N16["Capillary exchange"]
    N17["ECG"]
    N18["Electrical activity"]
    N19["Mechanical output"]
    N20["Serial clinical examination"]
    N21["Clinical response and deterioration"]
    N22["Blood gas or hemoglobin values"]
    N23["Obstruction or fatigue"]
    N24["Alveolar ventilation"]
    N25["Pulmonary edema"]
    N26["Gas exchange"]
    N27["Hemorrhage or CO exposure"]
    N28["Oxygen content"]
    N29["Shock or dysrhythmia"]
    N30["Blood flow"]
    N31["Cyanide exposure"]
    N32["Cellular utilization"]
    N33["Cellular oxygen delivery and use"]
    N34["Clinical reasoning"]
    N35["Suspected failing link"]

    N1 -->|helps identify| N2
    N3 -->|evaluates| N4
    N5 -->|estimates| N6
    N5 -->|cannot establish| N7
    N8 -->|provides clues about| N9
    N8 -->|cannot precisely establish| N10
    N11 -->|measures| N12
    N11 -->|cannot establish alone| N13
    N14 -->|estimates| N15
    N15 -->|does not establish| N16
    N17 -->|records| N18
    N18 -->|does not establish| N19
    N20 -->|tracks| N21
    N20 -->|cannot establish exact| N22
    N23 -->|may impair| N24
    N25 -->|may impair| N26
    N27 -->|may impair| N28
    N29 -->|may impair| N30
    N31 -->|may impair| N32
    N24 -->|is one link required for| N33
    N26 -->|is one link required for| N33
    N28 -->|is one link required for| N33
    N30 -->|is one link required for| N33
    N32 -->|is essential for| N33
    N34 -->|integrates findings to identify| N35
```

Measurements complement, rather than replace, the clinical exam. Overlapping abnormalities have multiple possible mechanisms; no single finding is a definitive diagnosis.

### Coordinated clinical care, scope and reassessment

```mermaid
flowchart TD
    N1["Clinical assessment"]
    N2["Immediately reversible BLS problems"]
    N3["Authorized EMT interventions"]
    N4["Airway support, oxygenation, ventilation and hemorrhage control"]
    N5["Cellular oxygen delivery"]
    N6["Suspected mechanism of failure"]
    N7["Cause-specific ALS considerations"]
    N8["AEMT scope"]
    N9["Limited advanced airway, vascular access and medications"]
    N10["Paramedic scope"]
    N11["Advanced diagnostics, pharmacology, electrical therapy and airway management"]
    N12["State law, licensure and training"]
    N13["Authorized clinical practice"]
    N14["Credentialing, agency protocols and medical direction"]
    N15["National models and guidelines"]
    N16["Knowledge of ALS procedures"]
    N17["EMT observations and intervention response"]
    N18["ALS clinical reasoning"]
    N19["Authorized cause-specific interventions"]
    N20["Foundational BLS care"]
    N21["Reassessment"]
    N22["Management considerations"]
    N23["Early ALS consultation"]
    N24["Lifesaving BLS and transport"]
    N25["Documented findings, times and responses"]
    N26["Handoff and continuity"]
    N27["Receiving facility care"]

    N1 -->|identifies| N2
    N2 -->|inform| N3
    N3 -->|include indicated| N4
    N4 -->|support| N5
    N1 -->|informs| N6
    N6 -->|informs| N7
    N8 -->|may add| N9
    N10 -->|may add| N11
    N12 -->|limit| N13
    N14 -->|define local| N13
    N15 -->|do not independently confer| N13
    N16 -->|does not confer| N13
    N17 -->|inform| N18
    N18 -->|integrates mechanism and findings to select| N19
    N19 -->|require continued| N20
    N20 -->|requires| N21
    N19 -->|require| N21
    N21 -->|feeds updated trends into| N1
    N21 -->|informs changes to| N22
    N23 -->|may support care without delaying| N24
    N25 -->|support| N26
    N26 -->|support| N27
```

This is a reasoning and coordination model, not a mandated treatment sequence. Assessment, treatment, reassessment and transport may occur concurrently. Report actual trends and responses; prepare or assist with advanced equipment only within authorization.
