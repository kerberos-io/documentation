# Heuristic

* [Sequence](#sequence)

When the expositor detected one or more regions, a heuristic will evaluate, the current and previous evaluations. This step is less loosly coupled as the connection between algorithms and expositors, because it can require specific parameters from the expositor or algorithm.

However, the main convention is that an expositor would always modify a JSON object with minimal information; as explained above, one or more regions and the number of pixels of interest. For flexibility, one can choose to add additional parameters or remove (required) parameters. Therefore it is possible that some expositors can't be used with some heuristics; we strongly disrecommend this feature.

To keep things simple: a heuristic is some kind of memory which makes decision and tells Kerberos if the evaluation was true or false. 

<a name="sequence"></a>
## Sequence
This is a trivial heuristic. The sequence heuristic returns true if the recognition was positive for x times in a row.