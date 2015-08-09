# Condition

* [Time](#time)
* [Enabled](#enabled)

The condition is the first step of Kerberos. A condition is, like the word states, a conditional statement. One or more conditions can be selected (a sequence of conditions), that have to be valid. When the sequence of conditions is valid, Kerberos will go to the next step of the four passway, the algorithm. When one of the conditions in the sequence fail, Kerberos will idle for a specific time according the condition that failed.

<a name="time"></a>
## Time

A user can set a time range for each day of the week. The condition is valid if the current time is within the time range, for that specific day.

<a name="enabled"></a>
## Enabled

A user can select a checkbox to enable Kerberos.