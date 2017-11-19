# WebChallenge 5

Below PSD design converted to responsive website.

Converted page is available at: https://marcin-l-szczepanski.github.io/WebChallenge5/

More information about the project:

![WebChallenge3 PSD design](https://github.com/Marcin-L-Szczepanski/WebChallenge5/blob/master/resources/5.jpg)

## Sass Functions

### append
Appends a single value onto the end of a list and returns a new list (rather than modifying its argument in place).

Syntax: append($list1, $val, [$separator]) 

Parameters:
- $list - list to which a new value will be appended
- $val - value that will be appended to the list
- $separator - the list separator to use. If this is `comma` or `space`, that separator will be used. Unless the `$separator` argument is passed, if the list had only one item, the resulting list will be space-separated.

Example:
```CSS
append(10px 20px, 30px)            => 10px 20px 30px   // $list = 10px 20px  |  $val = 30px  |  $separator = auto (space)
append(10px, 20px, comma)          => 10px, 20px       // $list = 10px       |  $val = 20px  |  $separator = comma
append((blue, red), green, space)  => blue red green   // $list = blue, red  |  $val = green |  $separator = space
```

Use in the project:
Problem: 
Creating the below box-shadow effect, required using overlaying box-shadows.
![Box-shadow](https://github.com/Marcin-L-Szczepanski/WebChallenge5/blob/master/resources/shadow.jpg)
Since the width of box-shadow is 21px, it would require 21 repetition of the below code:
```CSS
box-shadow: -1px 1px 0px #64656e;
box-shadow: -2px 2px 0px #64656e;
[...]
box-shadow: -20px 20px 0px #64656e;
box-shadow: -21px 21px 0px #64656e;
```
Solution:
Empty $all list is created
For loop repeats 21 times, adding set of values to the $all list in each step
Box-shadow property takes value of $all list which contains all the comma-separated values
```CSS
$all: ();
@for $i from 1 through 21 {
  $all: append($all, -#{$i}px #{$i}px 0 #64656e, comma);
}
box-shadow: $all;
```  