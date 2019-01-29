
var containerQuery = document.querySelector('.parallax-container');
/**
 * Constructor
 * 
 * @param  {[type]} imageUrl [Your image]
 * @param  {[type]} minHeight [Minimum of height of the view]
 * @param  {[type]} minWidth [Minimum of width of the view]
 * @param  {[type]} animation [Activate animation Parallax]
 */
function Parallax(imageUrl, minHeight, minWidth, animation)
{
    
    /**
     * @param  {[type]} imageUrl!="" [See if the imageUrl value is empty]
     */
    if (imageUrl != "")
    {
        /**
         * To create and initiate the properties of Parallax
         * 
         * @type {[object]} create [description]
         */
        this.create(imageUrl, minHeight, minWidth);
    }
    else
    {
        console.error("Parallax: Vous ne pouvez pas créer un parallax sans image." + "Si cette erreur persiste, il se pourrait que l’emplacement de votre image ne sois pas trouvée en raison d’un chemin d’accès erroné." + "Ou que l’attribut {@data-src} soit vide ou non inscrit dans votre fichier HTML");
    }

    /**
     * To see if the animation is requested
     * 
     * @param {[type]} animation=="true" [description]
     */
    if (animation == "true")
    {
        window.addEventListener("scroll", () =>
        {
            containerQuery.style.backgroundPositionY = -window.scrollY / 4 + "px";
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
        animation: false
    },
    
    /**
     * Attaching multiple properties to customize the @Parallax view
     * 
     * @param  {[type]} imageUrl [descrption]
     * @param  {[type]} minHeight [descrption]
     * @param  {[type]} minWidth [descrption]
     */
    create: function(imageUrl, minHeight, minWidth)
    {
        var backgroundFixed = "background-attachment:fixed;";
        var backgroundPositionX = "background-position-x:center;";
        var backgroundNoRepeat = "background-repeat:no-repeat;";
        var backgroundInHerit = "background-size:inherit;";
        var appendsSrcFirst = "background-image:url(\"";
        var appendsSrcLast = "\");";

        var defaultValues = backgroundFixed + backgroundPositionX + backgroundNoRepeat + backgroundInHerit;

        containerQuery.setAttribute("style", defaultValues + minHeight + minWidth + appendsSrcFirst + imageUrl + appendsSrcLast);
    }
};

/**
 * See if the all attributes are existing and use accordingly
 */
if (containerQuery.getAttribute("data-type") == "parallax")
{
    var attributes = {};

    var dataSrc = "data-src";
    var dataMinHeight = "data-min-height";
    var dataMinWidth = "data-min-width";
    var dataAnimation = "data-animation";

    if (containerQuery.getAttribute(dataSrc) != "")
    {
        attributes.src = containerQuery.getAttribute(dataSrc);
    }
    else
    {
        console.error("Parallax: Vous ne pouvez pas créer un parallax sans image." + "Si cette erreur persiste, il se pourrait que l’emplacement de votre image ne sois pas trouvée en raison d’un chemin d’accès erroné." + "Ou que l’attribut {@data-src} soit vide ou non inscrit dans votre fichier HTML");
    }

    if (containerQuery.getAttribute(dataMinHeight) != null)
    {
        attributes.minHeight = "min-height:" + containerQuery.getAttribute(dataMinHeight) + ";";
    }
    else
    {
        attributes.minHeight = "min-height:200px;";
    }

    if (containerQuery.getAttribute(dataMinWidth) != null)
    {
        attributes.minWidth = "min-width:" + containerQuery.getAttribute(dataMinWidth) + ";";
    }
    else
    {
        attributes.minWidth = "min-width:100%;";
    }

    if (containerQuery.getAttribute(dataAnimation) == "true")
    {
        attributes.animation = containerQuery.getAttribute(dataAnimation);
    }
    /**
     * Create instance
     * 
     * @param  {[type]} attributes.src [description]
     * @param  {[type]} attributes.minHeight [description]
     * @param  {[type]} attributes.minWidth [description]
     * @param  {[type]} attributes.animation [description]
     */
    new Parallax(attributes.src, attributes.minHeight, attributes.minWidth, attributes.animation);
}