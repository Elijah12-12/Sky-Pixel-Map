/*

This is a JavaScript file you can edit to add custom markers to the map.
uNmINeD does not overwrite this file during map generation.

Steps:

    1. Edit this file using Notepad or a code editor (do not use document editors like Microsoft Word)
    2. Change the line "isEnabled: false," to "isEnabled: true," to display the markers
    3. Change or remove the example markers
    4. Add your own markers

Marker format:

    {
        x: X coordinate of the marker (in Minecraft block units),
        z: Z coordinate of the marker (in Minecraft block units),
        image: marker image URL to display (in quotes),
        imageScale: scale of the image (e.g. 1 = display full size, 0.5 = display half size),
        imageAnchor: [0.5, 1] means the tip of the pin is at the center-bottom of the image (see OpenLayers documentation for more info),
        text: marker text do display (in quotes),
        textColor: text color in HTML/CSS format (in quotes),
        offsetX: horizontal pixel offset of the text,
        offsetY: vertical pixel offset of the text,
        font: text font in HTML/CSS format (in quotes),
    },

Things to keep in mind:

* There are opening and closing brackets for each marker "{" and "}"
* Property names are case sensitive (i.e. "textColor" is okay, "TextColor" is not)
* There is a comma (",") at the end of each line except the opening brackets ("{")

You can use https://mapmarker.io/editor to generate custom pin images.
Use the imageScale property if the pin image is too large.

*/

UnminedCustomMarkers = {

    isEnabled: true,

markers: [ 

        //  Octavian 
        {
            x: -43.5,
            z: 128.5,
            text: "Octavian", 
            textColor: "white", 
            imageScale: 0.5,
            offsetX: 0,
            offsetY: 0, 
            font: "bold 40px Calibri,sans serif",
        },

        // Octavian Marker 
        {
            x: 188.5,
            z: 108.5,
            image: "gold.star.png",
            imageScale: 0.00,
            offsetX: 0,
            offsetY: 100,
        },

        //  Griffin 
        {
            x: -300.5,
            z: -118.5,
            text: "Griffin", 
            textColor: "white", 
            offsetX: 0,
            offsetY: 0, 
            font: "bold 25px Calibri,sans serif",
        },

        //  Harlie  
        {
            x: 156.5,
            z: -297.5,
            text: "Harlie", 
            textColor: "white", 
            offsetX: 0,
            offsetY: 0, 
            font: "bold 25px Calibri,sans serif",
        },

        //  Maria 
        {
            x: -631.5,
            z: -118.5,
            text: "Maria", 
            textColor: "white", 
            offsetX: 0,
            offsetY: 0, 
            font: "bold 20px Calibri,sans serif",
        },

        //  Lillah
        {
            x: 70.5,
            z: 468.5,
            text: "Lillah", 
            textColor: "white", 
            offsetX: 0,
            offsetY: 0, 
            font: "bold 15px Calibri,sans serif",
        },

        //  Adaline 
        {
            x: 189.5,
            z: 603.5,
            text: "Adaline", 
            textColor: "white", 
            offsetX: 0,
            offsetY: 0, 
            font: "bold 20px Calibri,sans serif",
        },

        //  Chaseloke 
        {
            x: 87.5,
            z: -575.5,
            text: "Chaseloke", 
            textColor: "white", 
            offsetX: 0,
            offsetY: 0, 
            font: "bold 15px Calibri,sans serif",
        },

        //  Noland 
        {
            x: -183.5,
            z: -1212.5,
            text: "Noland", 
            textColor: "white", 
            offsetX: 0,
            offsetY: 0, 
            font: "bold 15px Calibri,sans serif",
        },

        //  Tayberry  
        {
            x: -247.5,
            z: -1704.5,
            text: "Tayberry", 
            textColor: "white", 
            offsetX: 0,
            offsetY: 0, 
            font: "bold 20px Calibri,sans serif",
        },

        //  Razalia  /tp -336.5 74 -2308.5
        {
            x: -336.5,
            z: -2308.5,
            text: "Razalia", 
            textColor: "white", 
            offsetX: 0,
            offsetY: 0, 
            font: "bold 30px Calibri,sans serif",
        },


        // add your markers here

 
        // do not delete the following two closing brackets
    ]
}
