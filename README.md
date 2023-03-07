# Doctor Strange Portal
A Doctor Strange portal made fully using HTML and CSS

## Explaining the JavaScriptt
This code generates a visual effect of a circular burst of sparks around a portal by creating multiple div elements and positioning them using CSS transformations.

First, the code finds an element with the ID "portal" using the document.getElementById() method and assigns it to a variable called portal.

Then, a for loop is used to create multiple div elements, 360 to be exact, for the sparks. For each iteration of the loop, a new div element is created using the document.createElement() method and assigned to a variable called spark.

The spark element is then given a class name of "spark" using the className property. This class can be used to style the div element using CSS later.

The next line of code rotates the div element by a certain number of degrees, based on the current iteration of the loop, using the style.rotate property. The i * 2 calculates the angle of rotation based on the current iteration, and the + 'deg' appends the 'deg' unit to the value to make it a valid CSS rotation value.

The sparkTranslation variable is then assigned a random value between 100 and 120 using the Math.random() method and a formula. This value is then used to position the div element radially around the center of the portal element using the style.transform property. The translate() function is used to move the element horizontally and vertically, with the sparkTranslation value used to specify the distance from the center.

Finally, the spark element is appended as a child element of the portal element using the appendChild() method, which adds it to the end of the list of child nodes of the portal element.

After the loop completes, the portal element will contain 360 div elements, each with the "spark" class and positioned at a random distance from the center of the portal in a circular pattern. This creates the visual effect of a circular burst of sparks around the portal.
