// Precios - Planes de Viaje JavaScript

$(document).ready(function () {

  // ============================================
  // 1. Inicializar Tooltips (Bootstrap + jQuery)
  // ============================================
  function initTooltips() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));

    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl, {
        trigger: 'hover',
        placement: 'top',
        animation: true,
        delay: { show: 200, hide: 100 }
      });
    });
  }

// ============================================
  // 2. Hover en Pricing Cards
  // ============================================
  function initCardHover() {
    const $cards = $('.pricing-card');

    $cards.on('mouseenter', function() {
      const $card = $(this);
      $card.css('z-index', '10');
    });

    $cards.on('mouseleave', function() {
      const $card = $(this);
      $card.css('z-index', '1');
    });
  }

// ============================================
  // Inicializar todo
  // ============================================
  initTooltips();
  initCardHover();
  initEntranceAnimations();
  initHoverEffects();

});