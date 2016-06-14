# Heuristic

* [Sequence](#sequence)
* [Counter](#counter)

The heuristic is the last step in the four passway which will decide if the detection is valid or not. It will do this by using information from the previous steps (the expositor and the algorithm); e.g. number of changed pixels.

<a name="sequence"></a>
## Sequence
In most cases motion contains a sequence of events; for example someone who walks by or a car which is parking on the street. The sequence heuristic will measure this by returning true if the recognition was positive for x times in a row. By using this heuristic most of the false-positives (invalid detections) are removed.

<a name="counter"></a>
## Counter
Counting objects forms the basis for a range of high-tech solutions, including retail analytics, queue management, building management and security applications. By using this counter heuristic you can count incoming and outgoing objects (e.g. people).

![Counter heuristic](83_heuristics/2_counter-heuristic.png)