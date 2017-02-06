/* global YoastSEO, jQuery */
;(function ($) {
  var MetaBoxYoastSEORating = function () {
    YoastSEO.app.registerPlugin('metaBoxYoastSEORating', {status: 'ready'})
    YoastSEO.app.registerModification('content', this.myContentModification, 'metaBoxYoastSEORating', 5)
  }

  MetaBoxYoastSEORating.prototype.myContentModification = function (data) {
    const inputs = $('.page-block__content input, .page-block__content textarea')

    $.each(inputs, function (index, input) {
      // Return if field is hidden of if field is value- or nameless
      if (input.type === 'hidden' || !input.value.length || !input.name.length) return
      // Don't add it if the value is numeric
      if (isNaN(parseInt(input.value, 10))) {
        data += ' ' + input.value
      }
    })
    return data
  }

  /**
   * YoastSEO content analysis integration
   */
  $(window).on('YoastSEO:ready', function () {
    new MetaBoxYoastSEORating()
  })
})(jQuery)
