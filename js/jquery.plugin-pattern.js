/*

# Description
-------------
Modèle de base pour la création de tout nouveau plugin jQuery

# Utilisation
-------------
$.fn.pluginName.defaults.default1 = 'toto';

$(element/selector).pluginName({
    option1: 'value1',
    option2: 2
    // ... 
});

*/
 
// Le point virgule placé au début du code permet de protéger le script
// lorsqu'il est mixé avec d'autres scripts qui seraient mal formés
;(function($) {
    
    // Déclaration du plugin
    $.fn.pluginName = function (options) {
        
        // Gestion des paramètres
        var settings = $.extend({}, $.fn.pluginName.defaults, options);
        
        // Déclaration d'une méthode privée
        var privateMethod = function (params) {
            // Par convention, ici le contexte (this) doit faire référence à l'élément sur lequel on boucle (cf ci-dessous $this)
            // cette fonction doit donc être initialisée avec la méthode "apply" ou "call"
        };
        
        // On retourne et on boucle sur la collection d'éléments récupérer par le selecteur jQuery
        return this.each(function(){
            
            // On garde une référence de notre élément pour une utilisation future
            var $this = $(this);
            
            // Initialisation méthode public
            $.fn.pluginName.publicMethod({ param1: 'tata' });
            
            // Initialisation méthode privée
            privateMethod.call($this, { param1: 'tutu' });
            
        });
    };
    
    // Déclaration d'une méthode public liée au plugin
    $.fn.pluginName.publicMethod = function (params) {
        /* noyau de la fonction */
    };
    
    // Donne accès aux paramètres par défaut du plugin
    $.fn.pluginName.defaults = {
        /* liste des paramètres par défaut */
    };

})(jQuery);