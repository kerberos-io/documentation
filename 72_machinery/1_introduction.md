# Introduction

The machinery is responsible for the processing. It's **an image processing framework** which takes images from the type of camera (USB-, IP- or RPi-camera) you've configured in the configuration files and executes one ore more algorithms and post-processes (e.g. save a snapshot). The configuration files allow you to define the type of camera, post-processes, conditions and much more; it's **highly configurable**. It's important to note that the machinery, out-of-the-box, can handle only one camera at a time.

## How does it work?

The machinery is an **image processing framework** which is devided into four steps:

* condition
* algorithm
* expositor
* heuristic

The steps belong to a four passway; illustrated on the image below. In each cycle a sequence of images is processed. Each step will process the sequence, and will return some result to the next step. For example: an algorithm will process the images and returns an array to the Expositor, which contains boolean values. The steps are **loosly coupled**, so they have **simple conventions**, just like the example before.

Thanks to the loosly coupling, each step can be developed indepently. So algorithms, expositors, heuristics and conditions can be switched on the fly. This makes it easier for other developers who want to contribute to kerberos. They can create a new algorithm without knowing how a specific expositor or heuristic works. They just need to be aware of the convention an algorithm should meet.

![Lifecycle](1_project_structure.png)

<a name="capture"></a>
### Capture/Camera

You can choose which capture device you will be using, you can use your old USB-webcam, the **hi-tech** and **cheap** Raspberry Pi camera or a **fancy** IP-camera. The capture device will take pictures and deliver them to the algorithm if the conditions (the first step of the four passway) are valid.

<a name="condition"></a>
### Condition

The condition is the first step of the four passway. In this step the machinery will determine if it's allowed to proceed to the next step. For example a condition can be a time constraint, a brightness threshold, etc; **multiple conditions** can be selected.

<a name="algorithm"></a>
### Algorithm

The algorithm is the second step of the four passway. An algorithm will execute some kind of function on a sequence of images. An example of an algorithm would be one that does motion detection or one that would detect cats or dogs.

<a name="expositor"></a>
### Expositor

After the algorithm is executed, the expositor will determine, a region, where the changes were detected. An expositor can **constrain a region** in terms of selecting a hull or defining a rectangle.

<a name="heuristic"></a>
### Heuristic

When the expositor detected a region where activity was detection, a **heuristic** will evaluate, the current and previous detections. The heuristic is basically some kind of memory which makes decision and tells the machinery if the detection was true or false.

<a name="io"></a>
### IO

The IO is a post-process which takes action when the heuristic is valid. Examples of an IO device are: saving a snapshot, triggering a GPIO pin, sending an e-mail, etc.