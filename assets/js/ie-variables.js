// Default values
cssVars({
    // Targets
    rootElement   : document,
    shadowDOM     : false,
  
    // Sources
    include       : 'link[rel=stylesheet],style',
    exclude       : '',
    variables     : {},
  
    // Options
    onlyLegacy    : true,
    preserveStatic: true,
    preserveVars  : false,
    silent        : false,
    updateDOM     : true,
    updateURLs    : true,
    watch         : false,
  
    // Callbacks
    onBeforeSend: function(xhr, elm, url) {
      // ...
    },
    onError: function(message, elm, xhr, url) {
      // ...
    },
    onWarning: function(message) {
      // ...
    },
    onSuccess: function(cssText, elm, url) {
      // ...
    },
    onComplete: function(cssText, styleElms, cssVariables, benchmark) {
      // ...
    },
    onFinally: function(hasChanged, hasNativeSupport, benchmark) {
      // ...
    }
  });
  