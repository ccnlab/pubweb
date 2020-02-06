---
title: "Computational Cognitive Neuroscience"
---

# Spring, 2020, ECS 189G, 001, CRN 84470 (Undergrads) / ECS 289G, CRN 84471 (Grads)

* 189G: Tue/Thu 1:40 -- 3:00, in Hoagland Hall 168  (Lab Friday 10-10:50am, Chemistry 176), CRN 84470, 4 units
* 289G: Tue/Thu 4:40 -- 6:00, in Cruess Hall 107 (Lab Weds 5:10-6:00pm, Olson Hall 147), CRN 84471, 4 units
* Class Web Site: https://ccnlab.org/teaching/ccn
* Canvas site: https://canvas.ucdavis.edu -- submit reading reactions, homework, etc through here!
* Textbook: Freely available online textbook: [Computational Cognitive Neuroscience](https://grey.colorado.edu/CompCogNeuro/index.php/CCNBook/Main)
* Professor: {{< page "people/oreilly" >}}, Young Hall 174K, Office Hours Tues/Thurs 1 - 1:30 or by appointment
* TA:

# Goals

How does the brain secrete the mind? This course will introduce you to the ideas and methods in computational cognitive neuroscience that have been applied to answering this question. Specifically, we focus on simulating cognitive and perceptual processes using neural network models. These models provide a bridge between behavioral and biological levels of analysis. We start by understanding the basic computational and biological properties of individual neurons and networks of neurons, which give rise to basic processing mechanisms like spreading activation, inhibition, and multiple constraint satisfaction. We then discuss learning mechanisms (self-organizing and error-driven), which all networks of neurons require to perform any reasonably complex task. We will examine a range of cognitive phenomena within this framework, including attention, memory, language, and higher-level cognition. The overarching goal is to use simulations to help us to understand how our neurons give rise to our thoughts. 

# Prerequisites

Due to the scope of topics covered and diversity of student backgrounds, we do not have formal prerequisites for this course.  If you are a Psych or Cog Sci major, typically you will have had the relevant Intro, Cognitive, Bio, and Stats courses, which provide basic background in cognitive psychology and neurobiology that will be useful for the course. Neuroscience majors also will have had relevant coursework and should be in fine shape.  Computer science / math / etc students may not have had as much Psych and Neuro background, but the course is designed to be fully self-contained and all such background will be covered in the course, although more attention to the textbook readings might be required.  Students who have a sincere interest and/or additional background in cognitive psychology, neuroscience, and/or computers (or their relationships) will find this course more engaging. While the models we will be using are mathematically based, only algebra and some simple calculus-level concepts are discussed (and no actual math is required from undergraduates -- grad students are expected to solve a few simple algebra equations). The focus will be on intuitive and practical applications, not on theoretical derivations. Computer programming experience is not required, because the models are accessible via a graphical interface, but it is beneficial, especially for exploring beyond the "canned" models.

# Lab

There is a weekly lab session that is supervised by the teaching assistant, where students obtain hands-on experience with the computer simulation explorations. These explorations are the centerpiece of the course, and provide a unique exploratory learning opportunity. You will perform many what-if scenarios to understand what aspects of the brain's biology are important for producing specific cognitive phenomena. You will simulate the effects of brain damage in these models, to understand neuropsychology (the study of brain-damaged patients). The computer models enable complete control and dynamic, colorful visualization of these explorations, providing a unique ability to understand how cognition emerges from the brain. You will document these explorations by answering the simulation exercises questions (to be worked on during the lab sessions). You should be able to do most, hopefully all, of the required homework during these lab sessions.

Lab does *NOT* meet the first week of class -- starts up the 2nd week when there are actual homeworks to be done.

# Evaluation

Your grade will be based on three components in the following proportions: 

* Simulation exercises:  80%
* Reading reactions:  10%
* Class participation:  10%

## Simulation Exercises

We will be using the new version of the simulation exercises, on github.com: [https://github.com/CompCogNeuro/sims](https://github.com/CompCogNeuro/sims).  The textbook itself should also be ported over to github before class starts as well. You should answer all of the exercise questions for each chapter, and submit to the class Canvas site on or before the date shown in the schedule below. Although you will be working on these exercises in the labs, you must write them up individually. We want to see that each person individually understands the material, so this should be evident in your writeup. It is best to write down results and first drafts of answers as you work through the exercises -- they can take a while to run and you don't want to have to run them repeatedly. Exercises turned in late will be penalized 5% for each day after the due date.

**Important:** -- in the [Neuron](https://github.com/CompCogNeuro/sims/tree/master/ch2/neuron) exercise, the questions marked **advanced** are only required for graduate students -- undergrads are welcome to do them if you want, but they are not required.  These are questions **2.4 and 2.6**.

## Reading reactions

For each chapter in the online [Computational Cognitive Neuroscience Textbook](https://grey.colorado.edu/CompCogNeuro/index.php/CCNBook/Main), you write up a few sentences about the topic you found most interesting in the chapter and why, and in particular any interesting questions that occurred to you that might be useful to discuss during class (for shy students, this can also be a great way to ask your questions and can really help with your participation grade if you otherwise don't feel comfortable participating in discussions during class). These reading reactions are designed to ensure that you are keeping up on the reading and to inform us about your interests. Reading reactions should be submitted to the Canvas system for this course, prior to the class meeting when they are due (i.e., by 12pm noon).

## Class Participation

Productive participation in class discussion is encouraged to help you get the most out of this course. You are expected to read the text chapters the week they are assigned and to come to class prepared to actively participate in discussion.

## Grading Policy

Grades are not curved; they are based on percentages (note: Canvas truncates points, so a 92.9 is still an A- for example): 

```
  97-100 A+    87-89 B+   77-79 C+   67-69 D+
  93-96  A     83-86 B    73-76 C    63-66 D
  90-92  A-    80-82 B-   70-72 C-   60-62 D-
```

Note that the University does not give out A+ grades, but I record these internally, e.g., for use in a recommendation letter.

# Simulation Pragmatics

See [https://github.com/CompCogNeuro/sims](https://github.com/CompCogNeuro/sims) for the full listing of the simulation projects and associated homework questions, and instructions for getting everything running.

# Schedule


| Wk  | Date  | Tuesday         | Ch  | Due |     | Date   | Thursday | Ch  | Due |
| --- | ----  | --------------- | --- | --- | --- | ------ | -------- | --- | --- |
| 1  | 31 Mar | **Introduction** | 1 |     |  | 2 Apr  | **Neurons**   | 2 | RR1 |
| 2  | 7  Apr | Neurons          |   | RR2 | | 9 Apr  | **Networks**   | 3 | RR3 | 
| 3  | 14 Apr | Networks         |   | HW2 | | 16 Apr | **Learning**   | 4 | RR4 |
| 4  | 21 Apr | Learning         |   | HW3 | | 23 Apr | Learning       |   | HW4 |
| 5  | 28 Apr | **Brain Areas**  | 5 | RR5 | | 30 Apr | **Perception** | 6 | RR6 |
| 6  | 5 May  | Perception       |   |     | | 7 May  | Perception     |   | HW6 |
| 7  | 12 May | **Motor**        | 7 | RR7 | | 14 May | Motor          |   | HW7 |
| 8  | 19 May | **Memory**       | 8 | RR8 | | 21 May | Memory         | 8 | HW8 |
| 9  | 26 May | **Language**     | 9 | RR9 | | 28 May | Language       | 8 | HW9 | 
| 10 | 2 Jun | **Executive**    | 10 | RR10 | | 4 Jun  | Executive      | 9 | HW10 |

**Ch** = Chapter in text to read, **Due** = Materials due in class, with number representing chapter that is due (can be different than Ch column) (HW# = homework for chapter #, RR# = reading reaction for chapter #)

# Lecture Slides for Download

The following slides are available for printing prior to lecture, to make your note-taking more efficient -- just annotate and underline and jot down key points or whatever, instead of slavishly transcribing and thereby likely missing all the key points!

Printout format = 6 pages per printed page (better for printing).

```
| Chapter | Printout Format | Powerpoint File |
| ------- | --------------- | --------------- |
| 1 | {{pdf|oreilly_ccn_intro.pdf}} | [[File:oreilly_ccn_intro.pptx]]
| 2 | {{pdf|oreilly_ccn_neuron.pdf}} | [[File:oreilly_ccn_neuron.pptx]]
| 3 | {{pdf|oreilly_ccn_networks.pdf}} | [[File:oreilly_ccn_networks.pptx]]
| 4 | {{pdf|oreilly_ccn_learning.pdf}} | [[File:oreilly_ccn_learning.pptx]]
| 5 | {{pdf|herd_ccn_brainareas.pdf}} | [[File:herd_ccn_brainareas.pptx]]
| 5 | {{pdf|oreilly_ccn_brainareas.pdf}} | [[File:oreilly_ccn_brainareas.pptx]]
| 6 | {{pdf|oreilly_ccn_percept.pdf}} | [[File:oreilly_ccn_percept.pptx]]
| 7 | {{pdf|oreilly_ccn_motor.pdf}} | [[File:oreilly_ccn_motor.pptx]]
| 8 | {{pdf|oreilly_ccn_memory.pdf}} | [[File:oreilly_ccn_memory.pptx]]
| 8 | {{pdf|Ch8ExSlides.pdf}} | Supplementary slides for Ch. 8
| 9 | {{pdf|oreilly_ccn_language.pdf}} | [[File:oreilly_ccn_language.pptx]]
| 10 | {{pdf|oreilly_ccn_executive_jessica.pdf}} | [[File:oreilly_ccn_executive_jessica.pptx]]
```

# University Policies


