// Blog - Revista de Viajes JavaScript

$(document).ready(function () {

  // ============================================
  // 1. Animaciones al Scroll
  // ============================================
  function initScrollAnimations() {
    const $elements = $('.scroll-fade');

    function checkScroll() {
      const scrollTop = $(window).scrollTop();
      const windowHeight = $(window).height();

      $elements.each(function () {
        const $el = $(this);
        const offset = $el.offset().top;

        if (scrollTop + windowHeight > offset + 100) {
          $el.addClass('visible');
        }
      });
    }

    // Initial check
    checkScroll();

    // On scroll
    $(window).on('scroll', function () {
      checkScroll();
    });
  }

  // ============================================
  // 2. Filtro por Categorías (jQuery)
  // ============================================
  function initCategoryFilter() {
    const $buttons = $('.filter-btn');
    const $articles = $('.article-card, .featured-article');

    $buttons.on('click', function () {
      const $btn = $(this);
      const category = $btn.data('category');

      // Update active button
      $buttons.removeClass('active btn-dark text-white');
      $buttons.addClass('btn-outline-dark');
      $btn.addClass('active btn-dark text-white');
      $btn.removeClass('btn-outline-dark');

      // Filter articles
      if (category === 'all') {
        $articles.each(function (index) {
          const $el = $(this);
          $el.removeClass('hiding');
          $el.addClass('showing');
          setTimeout(function () {
            $el.show();
            $el.css('opacity', '1').css('transform', 'translateY(0)');
          }, index * 50);
        });
      } else {
        $articles.each(function (index) {
          const $el = $(this);
          const articleCategory = $el.data('category');

          if (articleCategory === category) {
            $el.removeClass('hiding');
            setTimeout(function () {
              $el.show();
              $el.css('opacity', '1').css('transform', 'translateY(0)');
            }, index * 50);
          } else {
            $el.addClass('hiding');
            $el.css('opacity', '0').css('transform', 'translateY(20px)');
            setTimeout(function () {
              $el.hide();
            }, 300);
          }
        });
      }
    });
  }

  // ============================================
  // 3. Comentarios Simulados
  // ============================================
  function initSimulatedComments() {
    // Datos de comentarios simulados
    const commentsData = {
      comments1: [
        { name: 'Carlos Mendoza', avatar: 2, text: 'Impresionante viaje! Yo también quiero ir a los Andes.', date: '16 de Marzo, 2024' },
        { name: 'Ana Paula Torres', avatar: 3, text: 'Que buenas fotos! Cuánto tiempo duró el trekking?', date: '16 de Marzo, 2024' },
        { name: 'Javier Rodriguez', avatar: 5, text: 'Increíble narration. Thanks for sharing!', date: '17 de Marzo, 2024' }
      ],
      comments2: [
        { name: 'Sofia Lopez', avatar: 4, text: 'Siempre fue mi sueño visitar Machu Picchu. Ahora me animé!', date: '10 de Febrero, 2024' },
        { name: 'Miguel Fernandez', avatar: 6, text: 'Alguien sabe cuál es la mejor época para ir?', date: '11 de Febrero, 2024' }
      ],
      comments3: [
        { name: 'Pedro Gomez', avatar: 7, text: 'El ceviche es lo mejor! Recuerden probarlo con chicha morada.', date: '5 de Enero, 2024' },
        { name: 'Laura Diaz', avatar: 8, text: 'Buen artículo! Me dio hambre 😂', date: '6 de Enero, 2024' }
      ],
      comments4: [
        { name: 'Maria Elena Ruiz', avatar: 9, text: 'Bora Beach es paradise! Y la comida ahí es increible.', date: '20 de Diciembre, 2023' },
        { name: 'Roberto Silva', avatar: 10, text: 'Recomiendo mucho Tulum, Mexico!', date: '21 de Diciembre, 2023' }
      ],
      comments5: [
        { name: 'Diego Martin', avatar: 11, text: 'Es una experiencia única! El atardecer en las dunas es mágico.', date: '15 de Noviembre, 2023' }
      ],
      comments6: [
        { name: 'Carmen Lucia', avatar: 12, text: 'Fui el año pasado, fue incredible! La energia es única.', date: '28 de Febrero, 2024' },
        { name: 'Fernando Costa', avatar: 13, text: 'Cuánto cuesta aproximadamente el viaje?', date: '1 de Marzo, 2024' }
      ],
      comments7: [
        { name: 'Ricardo Benitez', avatar: 14, text: 'Paque el asado es el mejor del mundo!', date: '15 de Enero, 2024' },
        { name: 'Valentina Sosa', avatar: 15, text: 'Donde están los mejores restaurantes?', date: '16 de Enero, 2024' }
      ],
      comments8: [
        { name: 'Gustavo Lima', avatar: 16, text: 'El mejor lugar para hacer snorkeling!', date: '10 de Marzo, 2024' },
        { name: 'Isabel Castro', avatar: 17, text: 'Es biodiversity es increible, hay que cuidarlo!', date: '11 de Marzo, 2024' }
      ]
    };

    // Renderizar comentarios en cada sección
    $.each(commentsData, function (sectionId, comments) {
      const $container = $('#' + sectionId);
      if ($container.length) {
        $.each(comments, function (i, comment) {
          const commentHtml = renderComment(comment);
          $container.append(commentHtml);
        });
      }
    });
  }

  // Función para renderizar un comentario
  function renderComment(comment) {
    return `
      <div class="comment">
        <div class="comment-header">
          <img src="https://i.pravatar.cc/36?img=${comment.avatar}" class="comment-avatar" alt="${comment.name}">
          <div>
            <div class="comment-author">${comment.name}</div>
            <div class="comment-date">${comment.date}</div>
          </div>
        </div>
        <p class="comment-text">${comment.text}</p>
      </div>
    `;
  }

  // ============================================
  // 4. Agregar Comentario (función global)
  // ============================================
  window.addComment = function (containerId, inputId) {
    const text = $('#' + inputId).val().trim();

    if (!text) {
      alert('Por favor escribí un comentario');
      return;
    }

    // Simular datos del usuario
    const names = ['Usuario Anónimo', 'Traveler42', 'AdventureSeeker', 'WorldExplorer'];
    const name = names[Math.floor(Math.random() * names.length)];
    const avatar = Math.floor(Math.random() * 50) + 1;
    const today = new Date();
    const dateStr = today.getDate() + ' de ' +
      ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'][today.getMonth()] +
      ', ' + today.getFullYear();

    const comment = {
      name: name,
      avatar: avatar,
      text: text,
      date: dateStr
    };

    // Agregar comentario con animación
    const $container = $('#' + containerId);
    const commentHtml = renderComment(comment);
    $container.append(commentHtml);

    // Limpiar input
    $('#' + inputId).val('');

    // Scroll al nuevo comentario
    $container.animate({
      scrollTop: $container[0].scrollHeight
    }, 500);
  };

  // ============================================
  // 5. Navbar Scroll Effect
  // ============================================
  function initNavbarEffect() {
    const $navbar = $('.navbar');

    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 50) {
        $navbar.css('box-shadow', '0 2px 20px rgba(0,0,0,0.1)');
      } else {
        $navbar.css('box-shadow', 'none');
      }
    });
  }

  // ============================================
  // Inicializar todo
  // ============================================
  initScrollAnimations();
  initCategoryFilter();
  initSimulatedComments();
  initNavbarEffect();

});