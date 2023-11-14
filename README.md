

# Echtercise

![image](https://github.com/rberends/echtercise/blob/00a8e4f9f8f4809a226343dd554c146a8d41a3b8/choco_strong.png)


A few potential exercises for the enige echte. Meant to be done in Javascript - but any language is ok :)

Solutions can be found as seperate files in this repo.

## 1: Add numbers

I have the following numbers:

2

3

890

234

111

1222



Please put all numbers into an **array**, console.log() the resulting sum of all elements in the array.


## 2: Substract numbers

Please put all the previous numbers into an **array** and substract them, in the **reverse order** of what they appear as in the array, console.log() the result.


## 3: Multiply some of the numbers

Please put all the previous numbers into an into a **List** and add each even number. Multiply the consecutive result by the uneven numbers. Do this in the order of the list. console.log() the sum of all elements in the array.

## 4: Find Rembrandt

Here's a JSON list of paintings titles and their artists. Unfortunately, the one making the list isn't very good at using a keyboard, and has made some mistakes writing the artist's names.

    {
      "schilderijen": [
        {"artist": "rembrand", "title":"Nachtwacht"},
        {"artist": "rembrant", "title":"Nachtwacht"},
        {"artist": "tembrand", "title":"Nachtwacht"},
        {"artist": "rembrandt", "title":"Nachtwacht"},
        {"artist": "Rembrand", "title":"Nachtwacht"},
        {"artist": "rembrand", "title":"Nachtwacht"}
      ]
    }

Your goal is to find all paintings made by **Rembrandt** and put them all in one list, which will be printed using **console.log()** into the console, all in a new line. 

Due to future mistakes the one using the keyboard will make, you can't literally check for every potential option, you will have to approximate the result.

Luckily, we have a function for that already based on the [Levenshtein distance]([https://en.wikipedia.org/wiki/Levenshtein_distance]) which we can use as is. See the code below.

    function similarity(s1, s2) {
      var longer = s1;
      var shorter = s2;
      if (s1.length < s2.length) {
        longer = s2;
        shorter = s1;
      }
      var longerLength = longer.length;
      if (longerLength == 0) {
        return 1.0;
      }
      return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
    }
    
    function editDistance(s1, s2) {
      s1 = s1.toLowerCase();
      s2 = s2.toLowerCase();
    
      var costs = new Array();
      for (var i = 0; i <= s1.length; i++) {
        var lastValue = i;
        for (var j = 0; j <= s2.length; j++) {
          if (i == 0)
            costs[j] = j;
          else {
            if (j > 0) {
              var newValue = costs[j - 1];
              if (s1.charAt(i - 1) != s2.charAt(j - 1))
                newValue = Math.min(Math.min(newValue, lastValue),
                  costs[j]) + 1;
              costs[j - 1] = lastValue;
              lastValue = newValue;
            }
          }
        }
        if (i > 0)
          costs[s2.length] = lastValue;
      }
      return costs[s2.length];
    }
    
I got this from https://stackoverflow.com/questions/10473745/compare-strings-javascript-return-of-likely.

I would personally consider something to be Rembrandt if the **similarity** is equal or higher than 0.8.

Some useful tips:

<ol>
    <li>You can read the JSON list as a javascript object.</li>
    <li>You can loop through the data. Maybe a for loop of a specific kind?</li>
     <li>Using index accesors, you can can either take the **title** or **artist** value of each object.</li>
     <li>Try to divide this assignment into multiple smaller assignments which you will combine in the code.</li>
</ol> 


## 4: Recipe page



