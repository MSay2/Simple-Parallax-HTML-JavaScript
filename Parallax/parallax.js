
var containerQuery = document.querySelector('.parallax-container');

// Get all the elements than use the animation of Parallax
var elements = document.querySelectorAll("[data-type=parallax]");
/**
 * Constructor
 * 
 * @param  {[type]} imageUrl [Your image]
 * @param  {[type]} minHeight [Minimum of height of the view]
 * @param  {[type]} minWidth [Minimum of width of the view]
 * @param  {[type]} animation [Activate animation Parallax]
 */
function Parallax(operator, imageUrl, minHeight, minWidth, animation, division)
{
    
    /**
     * See if the variable imageUrl value is empty
     * 
     * @param  {[type]} imageUrl [description]
     */
    if (imageUrl != "")
    {
        /**
         * To create and initiate the properties of Parallax
         * 
         * @type {[object]} create [description]
         */
        this.create(operator, imageUrl, minHeight, minWidth);
    }
    else
    {
        console.error("Parallax: Vous ne pouvez pas créer un parallax sans image." + "Si cette erreur persiste, il se pourrait que l’emplacement de votre image ne sois pas trouvée en raison d’un chemin d’accès erroné." + "Ou que l’attribut {@data-src} soit vide ou non inscrit dans votre fichier HTML");
    }

    /**
     * To see if the animation is requested
     * 
     * @param {[type]} animation [description]
     */
    if (animation == "true")
    {
        window.addEventListener("scroll", () =>
        {
            elements[operator].style.backgroundPositionY = -window.scrollY / division + "px";
        });
    }
}

Parallax.prototype = 
{
    /**
     * Create a default Values
     * 
     * @param {[type]} attributes [description]
     */
    attributes: 
    {
        src: "",
        minHeight: 100,
        minWidth: 100,
        animation: false,
        division: 4
    },
    
    /**
     * Attaching multiple properties to customize the @Parallax view
     * 
     * @param  {[type]} imageUrl [descrption]
     * @param  {[type]} minHeight [descrption]
     * @param  {[type]} minWidth [descrption]
     */
    create: function(operator, imageUrl, minHeight, minWidth)
    {
        var backgroundFixed = "background-attachment:fixed;";
        var backgroundPositionX = "background-position-x:center;";
        var backgroundNoRepeat = "background-repeat:no-repeat;";
        var backgroundInHerit = "background-size:inherit;";
        var appendsSrcFirst = "background-image:url(\"";
        var appendsSrcLast = "\");";

        var defaultValues = backgroundFixed + backgroundPositionX + backgroundNoRepeat + backgroundInHerit;

        elements[operator].setAttribute("style", defaultValues + minHeight + minWidth + appendsSrcFirst + imageUrl + appendsSrcLast);
    }
};

/**
 * Search the all elements than use the data Parallax
 * Looping all the elements, for get each values of each element
 */

for (var i = 0; i < elements.length; i++)
{
    if (elements[i].getAttribute("data-type") == "parallax")
    {
        var attributes = {};

        var dataSrc = "data-src";
        var dataMinHeight = "data-min-height";
        var dataMinWidth = "data-min-width";
        var dataAnimation = "data-animation";
        var dataDivision = "data-division";

        if (elements[i].getAttribute(dataSrc) != "")
        {
            attributes.src = elements[i].getAttribute(dataSrc);
        }
        else
        {
            console.error("Parallax: Vous ne pouvez pas créer un parallax sans image." + "Si cette erreur persiste, il se pourrait que l’emplacement de votre image ne sois pas trouvée en raison d’un chemin d’accès erroné." + "Ou que l’attribut {@data-src} soit vide ou non inscrit dans votre fichier HTML");
        }

        if (elements[i].getAttribute(dataMinHeight) != null)
        {
            attributes.minHeight = "min-height:" + elements[i].getAttribute(dataMinHeight) + ";";
        }
        else
        {
            // Default value
            attributes.minHeight = "min-height:200px;";
        }

        if (elements[i].getAttribute(dataMinWidth) != null)
        {
            attributes.minWidth = "min-width:" + elements[i].getAttribute(dataMinWidth) + ";";
        }
        else
        {
            // Default value
            attributes.minWidth = "min-width:100%;";
        }

        if (elements[i].getAttribute(dataAnimation) == "true")
        {
            attributes.animation = elements[i].getAttribute(dataAnimation);
        }

        if (elements[i].getAttribute(dataDivision) != null)
        {
            attributes.division = elements[i].getAttribute(dataDivision);
        }
        else
        {
            // Default value
            attributes.division = 4;
        }

        console.log(attributes.division);

        /**
         * Create instance
         * 
         * @param  {[type]} attributes.src [description]
         * @param  {[type]} attributes.minHeight [description]
         * @param  {[type]} attributes.minWidth [description]
         * @param  {[type]} attributes.animation [description]
         */
        new Parallax(i, attributes.src, attributes.minHeight, attributes.minWidth, attributes.animation, attributes.division);
    }
}